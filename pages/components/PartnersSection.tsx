export default function PartnersSection() {
    const partners = [
      { name: "NIPM Utkal Chapter", logo: "/images/nipm.jpg" },
      { name: "German Varsity", logo: "/images/german_varsity.jpeg" },
      { name: "French Diplomacy", logo: "/images/french_diplomacy.jpg" },
      { name: "India Meteorological Department", logo: "/images/India_Meteorological_Department.png" },
      { name: "Swachh Bharat", logo: "/images/swachh-bharat.png" },
      { name: "Trident Group of Institution", logo: "/images/trident.png" },
    ];
  
    return (
      <div className="container mx-auto py-12 px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-8">
          SOME OF OUR <span className="text-green-500">Esteemed</span> PARTNERS
        </h2>
  
        {/* Partners Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={partner.logo} // Replace with actual paths to your logos
                alt={partner.name}
                className="h-20 w-auto mb-4"
              />
              <p className="text-center text-sm font-semibold">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  