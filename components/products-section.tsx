import Link from "next/link";
import { Shirt } from "lucide-react";

export function ProductsSection() {
  const products = [
    { name: "Tisk na majice", href: "/izdelki/majice" },
    { name: "Tisk na majice s kratkimi rokavi", href: "/izdelki/majice-s-kratkimi-rokavi" },
    { name: "Tisk na majice z dolgimi rokavi", href: "/izdelki/majice-z-dolgimi-rokavi" },
    { name: "Tisk na športne majice", href: "/izdelki/sportne-majice" },
    { name: "Tisk na majice brez rokavov", href: "/izdelki/majice-brez-rokavov" },
    { name: "Tisk na ženske majice", href: "/izdelki/zenske-majice" },
    { name: "Tisk na ženske majice s kratkimi rokavi", href: "/izdelki/zenske-majice-kratki-rokavi" },
    { name: "Tisk na mehke triblend majice", href: "/izdelki/mehke-triblend-majice" },
    { name: "Tisk na tank tope", href: "/izdelki/tank-topi" },
    { name: "Tisk na majice z V-izrezom", href: "/izdelki/majice-v-izrez" },
    { name: "Tisk na puloverje in jope", href: "/izdelki/puloverji-jope" },
    { name: "Tisk na puloverje s kapuco", href: "/izdelki/puloverji-s-kapuco" },
    { name: "Tisk na športne puloverje", href: "/izdelki/sportni-puloverji" },
    { name: "Tisk na puloverje z zadrgo", href: "/izdelki/puloverji-z-zadrgo" },
    { name: "Tisk na otroške majice", href: "/izdelki/otroske-majice" }
  ];

  // Split products into three columns
  const chunkSize = Math.ceil(products.length / 3);
  const columns = Array.from({ length: 3 }, (_, i) => 
    products.slice(i * chunkSize, (i + 1) * chunkSize)
  );

  return (
    <section className="py-12 bg-white border-y" id="izdelki">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-6">
          <div className="inline-block p-2.5 bg-blue-100 rounded-full">
            <Shirt className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Izberite med različnimi slogi majic
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 max-w-4xl mx-auto">
          {columns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col items-start">
              {column.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  className="text-blue-600 hover:text-blue-800 transition-colors hover:bg-blue-50 rounded px-3 py-1.5 w-full text-sm"
                >
                  {product.name}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-base text-gray-600 mb-4">
            Pridružite se več kot 10000 strankam, ki so že uporabile naše storitve tiska na majice.
          </p>
          <Link
            href="/zahtevaj-ponudbo"
            className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            Zahtevaj ponudbo
          </Link>
        </div>
      </div>
    </section>
  );
}