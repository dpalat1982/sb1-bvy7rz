import { FaqCategories } from "@/components/faq/faq-categories";
import { SearchFaq } from "@/components/faq/search-faq";

export default function FaqPage() {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-2">Pomoč strankam</h1>
          <p className="text-gray-600 text-center mb-8">
            Odgovori na pogosta vprašanja o tisku na majice
          </p>

          <SearchFaq />
          <FaqCategories />
        </div>
      </div>
    </div>
  );
}