import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  Lightbulb, 
  Shield,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Sempre na vanguarda das tecnologias mais avançadas do mercado'
    },
    {
      icon: Shield,
      title: 'Confiabilidade',
      description: 'Soluções robustas e seguras que você pode confiar'
    },
    {
      icon: Users,
      title: 'Parceria',
      description: 'Construímos relacionamentos duradouros com nossos clientes'
    },
    {
      icon: Award,
      title: 'Excelência',
      description: 'Comprometimento com a qualidade em cada projeto entregue'
    }
  ];

  const achievements = [
    { number: '100+', label: 'Projetos Entregues' },
    { number: '50+', label: 'Clientes Satisfeitos' },
    { number: '5+', label: 'Anos de Experiência' },
    { number: '98%', label: 'Taxa de Sucesso' }
  ];

  const differentials = [
    'Equipe especializada em tecnologias de ponta',
    'Metodologia ágil com entregas rápidas',
    'Suporte técnico 24/7 para clientes premium',
    'Certificações em AWS, Azure e Google Cloud',
    'Experiência em diversos segmentos de mercado',
    'Foco em ROI e resultados mensuráveis'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-ash mb-6">
            Sobre a Modern X Lab
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos uma empresa de tecnologia especializada em transformar 
            ideias inovadoras em soluções digitais de alto impacto
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Card className="border-0 elegant-shadow animate-slide-up">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-ghost-pepper/10 rounded-lg flex items-center justify-center mr-4">
                  <Target className="text-ash" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-ash">Nossa Missão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Democratizar o acesso às tecnologias mais avançadas, 
                ajudando empresas de todos os tamanhos a alcançarem 
                seus objetivos através da inovação digital e 
                transformação tecnológica sustentável.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 elegant-shadow animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-ghost-pepper/10 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="text-ash" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-ash">Nossa Visão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecida como a principal referência em soluções 
                tecnológicas inovadoras, criando um futuro onde a 
                tecnologia potencializa o crescimento e o sucesso 
                de nossos parceiros de negócio.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-ash text-center mb-12">
            Nossos Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card 
                  key={value.title}
                  className="text-center hover:shadow-lg smooth-transition border-0 bg-muted/20 hover:bg-ghost-pepper/5 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-ghost-pepper/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-ash" size={28} />
                    </div>
                    <h4 className="text-xl font-semibold text-ash mb-3">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-hero-gradient rounded-2xl p-8 text-white text-center mb-16 animate-fade-in">
          <h3 className="text-3xl font-bold mb-8">Nossos Números</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={achievement.label}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold text-ghost-pepper mb-2">
                  {achievement.number}
                </div>
                <div className="text-white/80 text-sm">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Differentials */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-3xl font-bold text-ash mb-6">
              Por Que Escolher a Modern X Lab?
            </h3>
            <div className="space-y-4">
              {differentials.map((differential, index) => (
                <div 
                  key={index}
                  className="flex items-start animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="text-ghost-pepper mr-3 mt-0.5 flex-shrink-0" size={20} />
                  <span className="text-muted-foreground">{differential}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button 
                size="lg"
                className="bg-ghost-pepper text-ash hover:bg-ghost-pepper/90 glow-effect"
              >
                Começar Projeto
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>

          <Card className="border-0 elegant-shadow animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold text-ash mb-6 text-center">
                Nossa Abordagem
              </h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-ghost-pepper text-ash rounded-full flex items-center justify-center font-bold mr-4 text-sm">
                    1
                  </div>
                  <div>
                    <div className="font-semibold text-ash">Descoberta</div>
                    <div className="text-sm text-muted-foreground">Entendemos suas necessidades</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-ghost-pepper text-ash rounded-full flex items-center justify-center font-bold mr-4 text-sm">
                    2
                  </div>
                  <div>
                    <div className="font-semibold text-ash">Estratégia</div>
                    <div className="text-sm text-muted-foreground">Planejamos a solução ideal</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-ghost-pepper text-ash rounded-full flex items-center justify-center font-bold mr-4 text-sm">
                    3
                  </div>
                  <div>
                    <div className="font-semibold text-ash">Execução</div>
                    <div className="text-sm text-muted-foreground">Desenvolvemos com excelência</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-ghost-pepper text-ash rounded-full flex items-center justify-center font-bold mr-4 text-sm">
                    4
                  </div>
                  <div>
                    <div className="font-semibold text-ash">Resultados</div>
                    <div className="text-sm text-muted-foreground">Entregamos valor mensurável</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;