import heroImage from "@/assets/hero-bakery.jpg";
import baguettesImage from "@/assets/baguettes.jpg";
import croissantsImage from "@/assets/croissants.jpg";
import pastriesImage from "@/assets/pastries.jpg";
import sandwichesImage from "@/assets/sandwiches.jpg";
import interiorImage from "@/assets/bakery-interior.jpg";

const Gallery = () => {
  const images = [
    { src: heroImage, alt: "Croissants fraîchement sortis du four" },
    { src: baguettesImage, alt: "Baguettes artisanales" },
    { src: croissantsImage, alt: "Viennoiseries variées" },
    { src: pastriesImage, alt: "Pâtisseries fines" },
    { src: sandwichesImage, alt: "Sandwichs gourmands" },
    { src: interiorImage, alt: "Notre boutique accueillante" },
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Galerie Photos
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez en images nos créations artisanales et l'ambiance chaleureuse de notre boulangerie
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-scale-in aspect-square"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="font-inter text-primary-foreground font-medium text-lg">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
