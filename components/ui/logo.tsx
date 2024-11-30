"use client";

import Link from "next/link";
import { Shirt } from "lucide-react";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
      <div className="relative">
        <Shirt className="h-8 w-8 text-blue-600" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full animate-pulse" />
      </div>
      <div className="flex flex-col">
        <span className="text-xl font-bold text-gray-900">TiskNaMajice</span>
        <span className="text-sm text-blue-600">Profesionalni tisk</span>
      </div>
    </Link>
  );
}