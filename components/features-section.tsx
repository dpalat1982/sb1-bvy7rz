import { Truck, Palette, Headphones } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Zakaj izbrati TiskNaMajice.com?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
              <Palette className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Ugodne cene</h3>
            <p className="text-gray-600">
              Zagotavljamo vam vrhunsko kakovost pri tiskanju majic po izjemno konkurenčnih cenah. Pri nas dobite najboljše razmerje med kakovostjo in ceno na trgu za tiskanje majic.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
              <Truck className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Vrhunska kakovost</h3>
            <p className="text-gray-600">
              Uporabljamo najsodobnejšo tehnologijo tiska in kakovostne materiale. Naši izdelki so trpežni in ohranjajo svojo obliko tudi po večkratnem pranju.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
              <Headphones className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Odlična podpora</h3>
            <p className="text-gray-600">
              Naša ekipa je na voljo 24/7 za vsa vaša vprašanja. Pomagamo vam pri oblikovanju, izbiri materiala in vseh ostalih vidikih vašega naročila.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}