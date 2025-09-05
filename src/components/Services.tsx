import {Card, CardContent} from "@/components/ui/card";
import {Code2, Smartphone, Cloud, Shield, BarChart3, Cog} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Desenvolvimento Web",
      description:
        "Aplicações web modernas, responsivas e de alta performance usando as tecnologias mais avançadas do mercado.",
      features: ["React/Next.js", "TypeScript", "Cloud Native"]
    },
    {
      icon: Smartphone,
      title: "Apps Mobile",
      description:
        "Desenvolvimento de aplicativos nativos e híbridos para iOS e Android com UX excepcional.",
      features: ["React Native", "Flutter", "PWA"]
    },
    {
      icon: Cloud,
      title: "Soluções Cloud",
      description:
        "Arquiteturas escaláveis na nuvem com foco em performance, segurança e otimização de custos.",
      features: ["AWS/Azure", "DevOps", "Microserviços"]
    },
    {
      icon: Shield,
      title: "Cibersegurança",
      description:
        "Proteção avançada para seus sistemas, dados e processos com as melhores práticas de segurança.",
      features: ["Pentesting", "Compliance", "Monitoramento"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description:
        "Transforme dados em insights valiosos com análises avançadas e inteligência artificial.",
      features: ["BI Dashboards", "Machine Learning", "Big Data"]
    },
    {
      icon: Cog,
      title: "Consultoria Tech",
      description:
        "Orientação estratégica para transformação digital e otimização de processos tecnológicos.",
      features: ["Arquitetura", "Processos", "Estratégia"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-ash mb-6 font-heading">
            Nossas Soluções
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos um portfólio completo de serviços tecnológicos para impulsionar sua
            empresa para o futuro digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card
                key={service.title}
                className="group hover:shadow-xl smooth-transition elegant-shadow border-0 bg-white hover:bg-gradient-to-br hover:from-white hover:to-ghost-pepper/5 animate-slide-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-ghost-pepper/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-ghost-pepper/20 smooth-transition">
                      <IconComponent className="text-ash" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-ash mb-3">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-ghost-pepper/10 text-ash text-sm rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
