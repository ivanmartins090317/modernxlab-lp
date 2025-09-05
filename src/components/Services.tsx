import {CyberneticBentoGrid} from "@/components/ui/cybernetic-bento-grid";
import {Code2, Smartphone, Cloud, Shield, BarChart3, Cog} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code2 className="text-ash" size={24} />,
      title: "Desenvolvimento Web",
      description:
        "Aplicações web modernas, responsivas e de alta performance usando as tecnologias mais avançadas do mercado.",
      features: ["React/Next.js", "TypeScript", "Cloud Native"],
      span: "col-span-2 row-span-2"
    },
    {
      icon: <Smartphone className="text-ash" size={24} />,
      title: "Apps Mobile",
      description:
        "Desenvolvimento de aplicativos nativos e híbridos para iOS e Android com UX excepcional.",
      features: ["React Native", "Flutter", "PWA"]
    },
    {
      icon: <Cloud className="text-ash" size={24} />,
      title: "Soluções Cloud",
      description:
        "Arquiteturas escaláveis na nuvem com foco em performance, segurança e otimização de custos.",
      features: ["AWS/Azure", "DevOps", "Microserviços"]
    },
    {
      icon: <Shield className="text-ash" size={24} />,
      title: "Cibersegurança",
      description:
        "Proteção avançada para seus sistemas, dados e processos com as melhores práticas de segurança.",
      features: ["Pentesting", "Compliance", "Monitoramento"],
      span: "row-span-2"
    },
    {
      icon: <BarChart3 className="text-ash" size={24} />,
      title: "Data Analytics",
      description:
        "Transforme dados em insights valiosos com análises avançadas e inteligência artificial.",
      features: ["BI Dashboards", "Machine Learning", "Big Data"],
      span: "col-span-2"
    },
    {
      icon: <Cog className="text-ash" size={24} />,
      title: "Consultoria Tech",
      description:
        "Orientação estratégica para transformação digital e otimização de processos tecnológicos.",
      features: ["Arquitetura", "Processos", "Estratégia"]
    }
  ];

  return (
    <section id="services" className="bg-muted/30">
      <CyberneticBentoGrid services={services} />
    </section>
  );
};

export default Services;
