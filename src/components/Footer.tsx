import { Facebook, Instagram, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src={logo} alt="Ma Crème" className="h-20 w-auto mb-4 brightness-0 invert" />
            <p className="font-inter text-primary-foreground/80">
              Boulangerie artisanale depuis plusieurs générations
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 font-inter">
              {["Accueil", "À propos", "Produits", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace("à propos", "about")}`}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Horaires</h4>
            <ul className="space-y-2 font-inter text-primary-foreground/80">
              <li>Lun-Ven: 6h30 - 20h00</li>
              <li>Samedi: 7h00 - 20h00</li>
              <li>Dimanche: 7h00 - 13h00</li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 font-inter">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a
                  href="tel:0612345678"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  06 12 34 56 78
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:contact@macreme.fr"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  contact@macreme.fr
                </a>
              </li>
              <li className="flex space-x-4 mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="font-inter text-primary-foreground/80">
            © {currentYear} Ma Crème. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
