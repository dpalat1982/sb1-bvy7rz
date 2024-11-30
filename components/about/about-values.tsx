import { Heart, Shield, Zap, Award } from "lucide-react";

export function AboutValues() {
  const values = [
    {
      icon: Heart,
      title: "Strast do kakovosti",
      description: "Vsak projekt obravnavamo s posebno pozornostjo in stremimo k popolnosti v vsakem detajlu."
    },
    {
      icon: Shield,
      title: "Zanesljivost",
      description: "Držimo se dogovorjenih rokov in zagotavljamo najvišjo kakovost storitev."
    },
    {
      icon: Zap,
      title: "Inovativnost",
      description: "Uporabljamo najnovejše tehnologije in tehnike tiska za najboljše rezultate."
    },
    {
      icon: Award,
      title: "Strokovnost",
      description: "Naša ekipa ima dolgoletne izkušnje in strokovno znanje v tisku na tekstil."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Naše vrednote</h2>
          <p className="text-gray-600">
            Vrednote, ki nas vodijo pri vsakodnevnem delu in odnosu do strank
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                <value.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}