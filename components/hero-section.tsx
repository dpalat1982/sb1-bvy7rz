"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MessageSquare, ArrowRight } from "lucide-react";

export function HeroSection() {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('izdelki');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white w-full">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Tisk na majice – Profesionalni tisk po vaši meri
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Iščete kakovosten tisk na majice? Pri nas ponujamo profesionalni tisk na majice z vašim unikatnim dizajnom. Ustvarite edinstvene majice hitro, kakovostno in po konkurenčnih cenah. Izstopajte iz množice z našim vrhunskim tiskom na majice!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/zahtevaj-ponudbo">
              <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                <MessageSquare className="mr-2 h-5 w-5" />
                Zahtevaj ponudbo
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto"
              onClick={scrollToProducts}
            >
              Raziskuj izdelke
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}