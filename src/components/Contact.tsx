import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Téléphone",
      value: "06 12 34 56 78",
      link: "tel:0612345678",
    },
    {
      icon: Mail,
      title: "Email",
      value: "contact@macreme.fr",
      link: "mailto:contact@macreme.fr",
    },
    {
      icon: MapPin,
      title: "Adresse",
      value: "123 Rue de la Boulangerie, 75001 Paris",
      link: "https://maps.google.com/?q=Paris,France",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contactez-nous
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Une question ? Une commande spéciale ? N'hésitez pas à nous contacter
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-in">
            <h3 className="font-playfair text-3xl font-semibold text-foreground mb-8">
              Envoyez-nous un message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="font-inter text-sm font-medium text-foreground mb-2 block">
                  Nom complet
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="font-inter"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-inter text-sm font-medium text-foreground mb-2 block">
                  Adresse email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="votre@email.fr"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="font-inter"
                />
              </div>
              <div>
                <label htmlFor="message" className="font-inter text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Votre message..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="font-inter resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full font-inter font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Envoyer le message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          <div className="animate-scale-in space-y-6">
            <h3 className="font-playfair text-3xl font-semibold text-foreground mb-8">
              Informations de contact
            </h3>
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 border-border"
              >
                <CardContent className="p-6">
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-playfair text-xl font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="font-inter text-muted-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
