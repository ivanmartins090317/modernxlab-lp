import {ElegantCaseCard} from "@/components/ui/elegant-case-card";
import {CasesCarousel} from "@/components/ui/cases-carousel";
import {TrendingUp, Users, Zap} from "lucide-react";

const Cases = () => {
  const cases = [
    {
      id: "fintech-revolution",
      title: "FinTech Revolution",
      company: "TechBank",
      description:
        "Plataforma completa de banking digital com IA para análise de crédito e prevenção à fraudes.",
      services: ["React", "Node.js", "AWS", "ML"],
      type: "FinTech",
      result: "+300% crescimento em transações",
      imageUrl:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      metrics: [
        {label: "Transações/dia", value: "1M+", icon: TrendingUp},
        {label: "Usuários ativos", value: "500K", icon: Users},
        {label: "Uptime", value: "99.9%", icon: Zap}
      ]
    },
    {
      id: "ecommerce-nextgen",
      title: "E-commerce Next-Gen",
      company: "ShopFlow",
      description:
        "Marketplace B2B com inteligência artificial para recomendações e gestão automatizada de estoque.",
      services: ["Next.js", "Python", "GCP", "AI/ML"],
      type: "E-commerce",
      result: "+250% aumento nas vendas",
      imageUrl:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      metrics: [
        {label: "Vendas mensais", value: "R$ 50M", icon: TrendingUp},
        {label: "Empresas ativas", value: "10K+", icon: Users},
        {label: "Performance", value: "98%", icon: Zap}
      ]
    },
    {
      id: "healthtech-platform",
      title: "HealthTech Platform",
      company: "MedConnect",
      description:
        "Sistema integrado de telemedicina com IoT para monitoramento de pacientes em tempo real.",
      services: ["React Native", "IoT", "Azure", "Blockchain"],
      type: "HealthTech",
      result: "+400% eficiência no atendimento",
      imageUrl:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      metrics: [
        {label: "Consultas/mês", value: "100K+", icon: TrendingUp},
        {label: "Médicos ativos", value: "5K+", icon: Users},
        {label: "Satisfação", value: "96%", icon: Zap}
      ]
    },
    {
      id: "logistics-ai",
      title: "Logistics AI",
      company: "FastTrack",
      description:
        "Plataforma de otimização logística com IA para redução de custos e tempo de entrega.",
      services: ["Python", "TensorFlow", "AWS", "IoT"],
      type: "Logística",
      result: "+180% eficiência nas entregas",
      imageUrl:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      metrics: [
        {label: "Rotas otimizadas", value: "50K+", icon: TrendingUp},
        {label: "Entregas/dia", value: "100K", icon: Users},
        {label: "Economia", value: "35%", icon: Zap}
      ]
    },
    {
      id: "edtech-platform",
      title: "EdTech Platform",
      company: "LearnFlow",
      description:
        "Plataforma educacional com IA personalizada e gamificação para engajamento estudantil.",
      services: ["Vue.js", "Node.js", "MongoDB", "AI"],
      type: "Educação",
      result: "+500% engajamento dos alunos",
      imageUrl:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      metrics: [
        {label: "Estudantes", value: "250K", icon: Users},
        {label: "Cursos", value: "5K+", icon: TrendingUp},
        {label: "Conclusão", value: "89%", icon: Zap}
      ]
    }
  ];

  return (
    <section id="cases" className="py-20 bg-white">
      <div className="container mx-auto px-6 mb-12">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-ash mb-6 font-heading">
            Cases de Sucesso
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Projetos que transformaram negócios e geraram resultados extraordinários para
            nossos clientes
          </p>
        </div>
      </div>

      {/* Cases Carousel with Navigation */}
      <div className="flex justify-center px-2">
        <CasesCarousel
          className="group"
          autoPlay={true}
          autoPlayInterval={6000}
          showArrows={true}
          showIndicators={true}
        >
          {cases.map((case_, index) => (
            <ElegantCaseCard
              key={case_.id}
              title={case_.title}
              company={case_.company}
              description={case_.description}
              type={case_.type}
              services={case_.services}
              result={case_.result}
              imageUrl={case_.imageUrl}
              metrics={case_.metrics}
              className="animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            />
          ))}
        </CasesCarousel>
      </div>
    </section>
  );
};

export default Cases;
