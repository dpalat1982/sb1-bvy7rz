"use client";

import { Phone, MessageCircle } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="hidden lg:flex items-center space-x-6">
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
          onClick={() => window.open('https://tawk.to/chat/YOUR_TAWK_TO_ID/default', '_blank')}
          className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
        >
          Pišite nam
        </button>
      </div>
    </div>
  );
}