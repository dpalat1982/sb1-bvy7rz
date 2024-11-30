"use client";

export function AboutTeam() {
  const team = [
    {
      name: "Danjel Palatin",
      role: "Direktor",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop"
    },
    {
      name: "Štefan Palatin",
      role: "Vodja proizvodnje",
      image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop"
    },
    {
      name: "Luka Horvat",
      role: "Glavni oblikovalec",
      image: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=400&h=400&fit=crop"
    },
    {
      name: "Nina Zupan",
      role: "Vodja prodaje",
      image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Spoznajte našo ekipo</h2>
          <p className="text-gray-600">
            Strokovnjaki, ki stojijo za vašimi projekti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}