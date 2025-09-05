import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {ExternalLink, TrendingUp, Users, Zap} from "lucide-react";

const Cases = () => {
  const cases = [
    {
      title: "FinTech Revolution",
      company: "TechBank",
      description:
        "Plataforma completa de banking digital com IA para análise de crédito e prevenção à fraudes.",
      metrics: [
        {label: "Transações/dia", value: "1M+", icon: TrendingUp},
        {label: "Usuários ativos", value: "500K", icon: Users},
        {label: "Uptime", value: "99.9%", icon: Zap}
      ],
      technologies: ["React", "Node.js", "AWS", "ML"],
      result: "+300% crescimento em transações",
      image: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      title: "E-commerce Next-Gen",
      company: "ShopFlow",
      description:
        "Marketplace B2B com inteligência artificial para recomendações e gestão automatizada de estoque.",
      metrics: [
        {label: "Vendas mensais", value: "R$ 50M", icon: TrendingUp},
        {label: "Empresas ativas", value: "10K+", icon: Users},
        {label: "Performance", value: "98%", icon: Zap}
      ],
      technologies: ["Next.js", "Python", "GCP", "AI/ML"],
      result: "+250% aumento nas vendas",
      image: "bg-gradient-to-br from-green-500 to-teal-600"
    },
    {
      title: "HealthTech Platform",
      company: "MedConnect",
      description:
        "Sistema integrado de telemedicina com IoT para monitoramento de pacientes em tempo real.",
      metrics: [
        {label: "Consultas/mês", value: "100K+", icon: TrendingUp},
        {label: "Médicos ativos", value: "5K+", icon: Users},
        {label: "Satisfação", value: "96%", icon: Zap}
      ],
      technologies: ["React Native", "IoT", "Azure", "Blockchain"],
      result: "+400% eficiência no atendimento",
      image: "bg-gradient-to-br from-red-500 to-pink-600"
    }
  ];

  return (
    <section id="cases" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-ash mb-6 font-heading">
            Cases de Sucesso
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Projetos que transformaram negócios e geraram resultados extraordinários para
            nossos clientes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <Card
              key={case_.title}
              className="group overflow-hidden hover:shadow-2xl smooth-transition border-0 elegant-shadow animate-slide-up"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {/* Header with gradient */}
              <div className={`h-48 ${case_.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-1 font-heading">{case_.title}</h3>
                  <p className="text-white/80">{case_.company}</p>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {case_.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {case_.metrics.map((metric) => {
                    const IconComponent = metric.icon;
                    return (
                      <div key={metric.label} className="text-center">
                        <IconComponent
                          className="text-ghost-pepper mx-auto mb-1"
                          size={20}
                        />
                        <div className="font-bold text-ash text-sm">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {case_.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-ash/5 text-ash text-xs rounded border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Result */}
                <div className="bg-ghost-pepper/10 rounded-lg p-3 mb-4">
                  <div className="text-sm font-semibold text-ash">📈 {case_.result}</div>
                </div>

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-ghost-pepper group-hover:text-ash smooth-transition"
                >
                  Ver Detalhes
                  <ExternalLink className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cases;
