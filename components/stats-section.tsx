export function StatsSection() {
  return (
    <section className="bg-white py-16 border-b w-full">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">Več kot 95%</h3>
            <p className="text-gray-600">zadovoljnih strank</p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">20.000</h3>
            <p className="text-gray-600">natisnjenih majic letno</p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">Garancija cene</h3>
            <p className="text-gray-600">ali vrnemo razliko</p>
          </div>
        </div>
      </div>
    </section>
  );
}