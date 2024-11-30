"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageSquare, Phone, MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { useChatContext } from "@/components/chat/chat-provider";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openChat } = useChatContext();

  const menuItems = [
    { href: "/", label: "Domov" },
    { href: "/izdelki", label: "Izdelki" },
  ];

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            
            {/* Contact Info */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="absolute -right-1 -top-1 w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <a href="tel:031474107" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
                  031/474-107
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="absolute -right-1 -top-1 w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                </div>
                <button 
                  onClick={openChat}
                  className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Pišite nam
                </button>
              </div>
            </div>

            <Link href="/zahtevaj-ponudbo">
              <Button className="bg-blue-600 hover:bg-blue-700">
                <MessageSquare className="mr-2 h-4 w-4" />
                Zahtevaj ponudbo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="py-2 space-y-4">
              <a href="tel:031474107" className="flex items-center space-x-2 text-sm font-medium text-gray-700">
                <Phone className="h-5 w-5 text-blue-600" />
                <span>031/474-107</span>
              </a>
              <button 
                onClick={openChat}
                className="flex items-center space-x-2 text-sm font-medium text-gray-700"
              >
                <MessageCircle className="h-5 w-5 text-blue-600" />
                <span>Pišite nam</span>
              </button>
            </div>
            <Link href="/zahtevaj-ponudbo" className="block">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <MessageSquare className="mr-2 h-4 w-4" />
                Zahtevaj ponudbo
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}