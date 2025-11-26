import { Heart, Award, Clock } from "lucide-react";
import interiorImage from "@/assets/bakery-interior.jpg";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion Artisanale",
      description: "Chaque produit est créé avec amour et dévouement par nos artisans boulangers.",
    },
    {
      icon: Award,
      title: "Qualité Premium",
      description: "Nous sélectionnons les meilleurs ingrédients pour garantir une qualité exceptionnelle.",
    },
    {
      icon: Clock,
      title: "Fraîcheur Garantie",
      description: "Nos produits sont préparés quotidiennement pour vous offrir une fraîcheur incomparable.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Notre Histoire
            </h2>
            <p className="font-inter text-lg text-muted-foreground mb-6 leading-relaxed">
              Ma Crème est née d'une passion profonde pour l'art de la boulangerie sénéglaise traditionnelle. Depuis notre création, nous nous engageons à perpétuer un savoir-faire ancestral tout en apportant une touche de modernité à nos créations.
            </p>
            <p className="font-inter text-lg text-muted-foreground mb-8 leading-relaxed">
              Chaque jour, notre équipe de boulangers passionnés se lève avant l'aube pour préparer des produits frais qui raviront vos papilles. Notre engagement envers la qualité et l'authenticité fait de chaque visite une expérience unique.
            </p>

            <div className="space-y-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-background hover:shadow-md transition-shadow duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="font-inter text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-scale-in">
            <img
              src={interiorImage}
              alt="Intérieur de Ma Crème"
              className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
