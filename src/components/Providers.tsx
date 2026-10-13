"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AppContextType {
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  isUserModalOpen: boolean;
  openUserModal: () => void;
  closeUserModal: () => void;
  bookmarks: string[];
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function Providers({ children }: { children: React.ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [bookmarks, setBookmarks] = useState<string[]>([]);

  // Keyboard shortcut: '/' or 'Cmd+K' to open search, 'Escape' to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || (e.key === "/" && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName))) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === "Escape") {
        setIsSearchOpen(false);
        setIsUserModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openSearch = () => setIsSearchOpen(true);
  const closeSearch = () => setIsSearchOpen(false);
  const openUserModal = () => setIsUserModalOpen(true);
  const closeUserModal = () => setIsUserModalOpen(false);

  const toggleBookmark = (id: string) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const isBookmarked = (id: string) => bookmarks.includes(id);

  return (
    <AppContext.Provider
      value={{
        isSearchOpen,
        openSearch,
        closeSearch,
        isUserModalOpen,
        openUserModal,
        closeUserModal,
        bookmarks,
        toggleBookmark,
        isBookmarked,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within a Providers");
  }
  return context;
}
