import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import {Card, CardContent} from "@/components/ui/card";
import {useToast} from "@/hooks/use-toast";
import {Mail, Phone, MapPin, Send, Clock, Globe} from "lucide-react";

const Contact = () => {
  const {toast} = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em até 24 horas."
      });
      setFormData({name: "", email: "", company: "", message: ""});
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contato@modernxlab.com",
      description: "Resposta em até 2 horas"
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (11) 9999-9999",
      description: "Seg-Sex 9h às 18h"
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "São Paulo, SP",
      description: "Atendimento nacional"
    },
    {
      icon: Clock,
      title: "Horário",
      content: "24/7 Suporte",
      description: "Para clientes premium"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-ash mb-6 font-heading">
            Vamos Conversar?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar sua ideia em realidade? Entre em contato e vamos
            construir o futuro da sua empresa juntos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 elegant-shadow animate-slide-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-ash mb-6 font-heading">
                Envie sua Mensagem
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-ash mb-2">
                      Nome *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                      className="border-0 bg-muted/30 focus:bg-ghost-pepper/10 focus:ring-ghost-pepper"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ash mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                      className="border-0 bg-muted/30 focus:bg-ghost-pepper/10 focus:ring-ghost-pepper"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-ash mb-2">
                    Empresa
                  </label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Nome da sua empresa"
                    className="border-0 bg-muted/30 focus:bg-ghost-pepper/10 focus:ring-ghost-pepper"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-ash mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos sobre seu projeto..."
                    rows={5}
                    required
                    className="border-0 bg-muted/30 focus:bg-ghost-pepper/10 focus:ring-ghost-pepper"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-ghost-pepper text-ash hover:bg-ghost-pepper/90 py-3 text-lg font-semibold glow-effect"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                  <Send className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-slide-up" style={{animationDelay: "0.2s"}}>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-ash mb-4 font-heading">
                Informações de Contato
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Estamos aqui para ajudar você a alcançar seus objetivos. Nossa equipe está
                pronta para discutir seu projeto e oferecer as melhores soluções
                tecnológicas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info) => {
                const IconComponent = info.icon;
                return (
                  <Card
                    key={info.title}
                    className="border-0 bg-muted/20 hover:bg-ghost-pepper/5 smooth-transition"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-ghost-pepper/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                          <IconComponent className="text-ash" size={20} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-ash mb-1">{info.title}</h4>
                          <p className="text-sm text-ash mb-1">{info.content}</p>
                          <p className="text-xs text-muted-foreground">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* CTA Section */}
            <Card className="border-0 bg-hero-gradient text-white">
              <CardContent className="p-6 text-center">
                <Globe className="mx-auto mb-4 text-ghost-pepper" size={32} />
                <h4 className="text-xl font-bold mb-2 font-heading">Projeto Urgente?</h4>
                <p className="text-white/80 mb-4">
                  Para projetos com deadline apertado, oferecemos atendimento prioritário
                  24/7.
                </p>
                <Button
                  variant="secondary"
                  className="bg-ghost-pepper text-ash hover:bg-ghost-pepper/90"
                >
                  Contato Urgente
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
