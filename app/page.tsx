import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { ProductsSection } from "@/components/products-section";
import { TestimonialSection } from "@/components/testimonial-section";
import { FeaturesSection } from "@/components/features-section";

export default function Home() {
  return (
    <>
      <div className="min-h-screen">
        <HeroSection />
        <StatsSection />
        <ProductsSection />
        <TestimonialSection />
        <FeaturesSection />
        
        {/* SEO Text Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto prose prose-lg">
              <h2 className="text-3xl font-bold text-center mb-8">Profesionalni tisk na majice po meri</h2>
              
              <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <h3 className="text-xl font-semibold mb-4">Vrhunska kakovost tiska na majice</h3>
                <p className="mb-4">
                  Iščete zanesljivega partnerja za tisk na majice? Pri TiskNaMajice.com smo specializirani za 
                  profesionalni tisk na majice najvišje kakovosti. Z najsodobnejšo tehnologijo in dolgoletnimi 
                  izkušnjami zagotavljamo vrhunske rezultate za vsak projekt.
                </p>
                <p>
                  Naša strast do kakovosti in predanost strankam nas postavlja na vodilno mesto med ponudniki 
                  tiska na majice v Sloveniji. Pri nas dobite najboljše razmerje med kakovostjo in ceno na trgu.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg shadow-sm p-8 mb-8">
                <h3 className="text-xl font-semibold mb-4">Napredne tehnike tiska</h3>
                <p className="mb-4">
                  Uporabljamo najsodobnejše tehnike tiska na majice, vključno s sitotiskom, DTF tiskom in 
                  digitalnim tiskom. Vsaka tehnika ima svoje prednosti, ki jih prilagajamo vašim specifičnim 
                  potrebam in željam.
                </p>
                <p>
                  Ne glede na velikost naročila - od manjših serij do velikih količin - zagotavljamo 
                  konsistentno kakovost in natančno izvedbo vsakega projekta.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                <h3 className="text-xl font-semibold mb-4">Zakaj izbrati nas za tisk na majice?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </span>
                    <span>Vrhunska kakovost tiska z najsodobnejšo tehnologijo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </span>
                    <span>Najboljše razmerje med kakovostjo in ceno na trgu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </span>
                    <span>Hitri dobavni roki in zanesljiva izvedba</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </span>
                    <span>Strokovno svetovanje in podpora pri vašem projektu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mt-1 mr-3">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    </span>
                    <span>Široka izbira materialov in tehnik tiska</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg shadow-sm p-8">
                <p className="text-lg font-medium text-gray-900">
                  Naše izkušnje in zavezanost h kakovosti nam omogočajo, da izpolnimo tudi najzahtevnejše želje 
                  naših strank. Vsak projekt obravnavamo individualno in zagotavljamo optimalno rešitev za vaše 
                  potrebe.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}