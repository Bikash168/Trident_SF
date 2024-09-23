export default function PartnersSection() {
    const partners = [
      { name: "AVI Solutions", logo: "/images/avi.png" },
      { name: "GSP Foundation", logo: "/images/gsp.png" },
      { name: "Sumridhi Aluminium Pvt. Ltd.", logo: "/images/sumridhi.png" },
      { name: "Anzen Projects Pvt. Ltd.", logo: "/images/anzen.png" },
      { name: "Swastik Technology Pvt. Ltd.", logo: "/images/swastik.png" },
      { name: "To The New", logo: "/images/tothenew.png" },
    ];
  
    return (
      <div className="container mx-auto py-12">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-8">
          SOME OF OUR <span className="text-red-600">Esteemed</span> CORPORATE PARTNERS
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
  