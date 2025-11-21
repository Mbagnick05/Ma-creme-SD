import { Phone, Clock, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Phone,
      title: "Commande par Téléphone",
      description: "Appelez-nous pour passer vos commandes",
      action: "06 12 34 56 78",
      link: "tel:0612345678",
    },
    {
      icon: MessageCircle,
      title: "Commande WhatsApp",
      description: "Contactez-nous facilement via WhatsApp",
      action: "Message WhatsApp",
      link: "https://wa.me/33612345678",
    },
  ];

  const hours = [
    { days: "Lundi - Vendredi", time: "6h30 - 20h00" },
    { days: "Samedi", time: "7h00 - 20h00" },
    { days: "Dimanche", time: "7h00 - 13h00" },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nos Services
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Nous sommes à votre service pour répondre à tous vos besoins
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 animate-scale-in border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="font-inter text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="font-inter border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <a href={service.link} target="_blank" rel="noopener noreferrer">
                        {service.action}
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="animate-fade-in border-border">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                    Horaires d'Ouverture
                  </h3>
                  <p className="font-inter text-muted-foreground">
                    Nous sommes ouverts toute la semaine
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {hours.map((hour, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center font-inter p-3 rounded-lg bg-secondary/50"
                  >
                    <span className="font-medium text-foreground">{hour.days}</span>
                    <span className="text-primary font-semibold">{hour.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in border-border">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-semibold text-foreground mb-2">
                    Notre Adresse
                  </h3>
                  <p className="font-inter text-muted-foreground mb-4">
                    123 Rue de la Boulangerie
                    <br />
                    75001 Paris, France
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="font-inter border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a
                      href="https://maps.google.com/?q=Paris,France"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Voir sur Google Maps
                    </a>
                  </Button>
                </div>
              </div>
              <div className="w-full h-64 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.94722687634!2d2.277019!3d48.8589507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b005%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
