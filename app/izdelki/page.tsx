import { ProductsSection } from "@/components/products-section";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-12">Naši izdelki</h1>
        <ProductsSection />
      </div>
    </div>
  );
}