"use client";

import { createContext, useContext, useEffect } from 'react';

interface ChatContextType {
  openChat: () => void;
}

const ChatContext = createContext<ChatContextType>({
  openChat: () => {},
});

export const useChatContext = () => useContext(ChatContext);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const openChat = () => {
    if (typeof window !== 'undefined' && (window as any).Tawk_API) {
      (window as any).Tawk_API.toggle();
    } else {
      window.open('https://tawk.to/chat/5e2ae6f4daaca76c6fcfad8b/default', '_blank');
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://embed.tawk.to/5e2ae6f4daaca76c6fcfad8b/default';
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.head.appendChild(script);

    return () => {
      // Cleanup if needed
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <ChatContext.Provider value={{ openChat }}>
      {children}
    </ChatContext.Provider>
  );
}