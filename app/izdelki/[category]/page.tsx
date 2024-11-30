import { Metadata } from 'next';
import { productCategories } from "@/lib/product-data";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function generateMetadata({ params }: { params: { category: string } }): Metadata {
  const product = productCategories[params.category];
  if (!product) return { title: 'Izdelek ne obstaja' };

  return {
    title: `${product.title} | TiskNaMajice.com`,
    description: product.metaDescription,
  };
}

export function generateStaticParams() {
  return [
    { category: "majice" },
    { category: "majice-s-kratkimi-rokavi" },
    { category: "majice-z-dolgimi-rokavi" },
    { category: "sportne-majice" },
    { category: "majice-brez-rokavov" },
    { category: "zenske-majice" },
    { category: "zenske-majice-kratki-rokavi" },
    { category: "mehke-triblend-majice" },
    { category: "tank-topi" },
    { category: "majice-v-izrez" },
    { category: "puloverji-jope" },
    { category: "puloverji-s-kapuco" },
    { category: "sportni-puloverji" },
    { category: "puloverji-z-zadrgo" },
    { category: "otroske-majice" }
  ];
}

export default function ProductPage({ params }: { params: { category: string } }) {
  const product = productCategories[params.category as keyof typeof productCategories];

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Kategorija ne obstaja</h1>
          <p className="mb-8">Izbrana kategorija izdelkov ne obstaja.</p>
          <Link href="/izdelki">
            <Button>Nazaj na izdelke</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{product.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{product.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Lastnosti</h2>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Zahtevajte ponudbo</h2>
              <p className="text-gray-600 mb-6">
                Pošljite nam povpraševanje in pripravili vam bomo personalizirano ponudbo za vaš projekt.
              </p>
              <Link href="/zahtevaj-ponudbo">
                <Button className="w-full">Zahtevaj ponudbo</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Blagovne znamke</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {product.brands.map((brand, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{brand.name}</h3>
                  <ul className="text-sm text-gray-600">
                    {brand.models.map((model, modelIndex) => (
                      <li key={modelIndex} className="mb-1">{model}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {product.additionalInfo && (
          <section className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Dodatne informacije</h2>
            <p className="text-gray-600">{product.additionalInfo}</p>
          </section>
        )}
      </div>
    </div>
  );
}