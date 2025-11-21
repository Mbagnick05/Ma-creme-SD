import { Card, CardContent } from "@/components/ui/card";
import baguettesImage from "@/assets/baguettes.jpg";
import croissantsImage from "@/assets/croissants.jpg";
import pastriesImage from "@/assets/pastries.jpg";
import sandwichesImage from "@/assets/sandwiches.jpg";

const Products = () => {
  const categories = [
    {
      name: "Pains",
      image: baguettesImage,
      products: [
        { name: "Baguette Traditionnelle", price: "1,20€" },
        { name: "Pain de Campagne", price: "3,50€" },
        { name: "Pain aux Céréales", price: "3,80€" },
      ],
    },
    {
      name: "Viennoiseries",
      image: croissantsImage,
      products: [
        { name: "Croissant au Beurre", price: "1,30€" },
        { name: "Pain au Chocolat", price: "1,40€" },
        { name: "Pain aux Raisins", price: "1,50€" },
      ],
    },
    {
      name: "Pâtisseries",
      image: pastriesImage,
      products: [
        { name: "Éclair au Chocolat", price: "4,20€" },
        { name: "Tarte aux Fruits", price: "5,50€" },
        { name: "Mille-feuille", price: "4,80€" },
      ],
    },
    {
      name: "Sandwichs",
      image: sandwichesImage,
      products: [
        { name: "Jambon Beurre", price: "4,50€" },
        { name: "Poulet Crudités", price: "5,20€" },
        { name: "Végétarien", price: "5,00€" },
      ],
    },
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos Produits
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez notre sélection de produits artisanaux, préparés chaque jour avec des ingrédients de première qualité
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <h3 className="absolute bottom-4 left-4 font-playfair text-2xl font-bold text-foreground">
                  {category.name}
                </h3>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {category.products.map((product, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center font-inter"
                    >
                      <span className="text-foreground">{product.name}</span>
                      <span className="font-semibold text-primary">{product.price}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
