import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey === "re_your_api_key_here") {
      return NextResponse.json(
        { error: "RESEND_API_KEY가 설정되지 않았거나 유효하지 않습니다." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const body = await req.json();
    const { name, email, category, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "필수 입력 항목(이름, 이메일, 제목, 내용)이 누락되었습니다." },
        { status: 400 }
      );
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const toEmail = process.env.CONTACT_RECEIVER_EMAIL;

    if (!toEmail || toEmail === "your_email@example.com") {
      return NextResponse.json(
        { error: "수신자 이메일(CONTACT_RECEIVER_EMAIL)이 올바르게 설정되지 않았습니다." },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: `SY 문의알림 <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `[SY 라이프스타일 문의] [${category}] ${subject}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #E8E4DA; border-radius: 12px; background-color: #FAF8F5;">
          <h2 style="color: #172B4D; margin-top: 0; border-bottom: 2px solid #172B4D; padding-bottom: 12px;">
            새로운 문의사항이 접수되었습니다
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 110px; color: #555;">이름 / 닉네임:</td>
              <td style="padding: 8px 0; color: #172B4D;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">회신 이메일:</td>
              <td style="padding: 8px 0; color: #172B4D;"><a href="mailto:${email}" style="color: #172B4D; text-decoration: underline;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">문의 유형:</td>
              <td style="padding: 8px 0; color: #172B4D;">${category}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">제목:</td>
              <td style="padding: 8px 0; color: #172B4D; font-weight: 600;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background-color: #FFFFFF; border: 1px solid #E8E4DA; border-radius: 8px;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #555;">문의 내용:</p>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.6; color: #172B4D;">${message}</p>
          </div>
          <p style="margin-top: 24px; font-size: 12px; color: #888; text-align: center;">
            이 메일은 SY 라이프스타일 웹사이트 문의 폼에서 발송되었습니다.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: any) {
    console.error("Internal Server Error:", err);
    return NextResponse.json(
      { error: err?.message || "서버 내부 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
