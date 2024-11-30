export function AboutStats() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">14+</div>
            <p className="text-gray-600">let izkušenj</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">20.000+</div>
            <p className="text-gray-600">natisnjenih majic letno</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">10.000+</div>
            <p className="text-gray-600">zadovoljnih strank</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
            <p className="text-gray-600">garancija zadovoljstva</p>
          </div>
        </div>
      </div>
    </section>
  );
}