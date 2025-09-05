import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Code, Rocket } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-overlay-gradient"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-ghost-pepper animate-float">
        <Zap size={32} />
      </div>
      <div className="absolute top-40 right-20 text-ghost-pepper animate-float" style={{ animationDelay: '2s' }}>
        <Code size={28} />
      </div>
      <div className="absolute bottom-40 left-20 text-ghost-pepper animate-float" style={{ animationDelay: '4s' }}>
        <Rocket size={24} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Transformamos
            <span className="block text-ghost-pepper animate-glow">
              Ideias em Realidade
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Soluções tecnológicas inovadoras para empresas que buscam excelência, 
            crescimento e transformação digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-ghost-pepper text-ash hover:bg-ghost-pepper/90 px-8 py-4 text-lg font-semibold glow-effect bounce-transition hover:scale-105"
            >
              Começar Projeto
              <ArrowRight className="ml-2" size={20} />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-ash px-8 py-4 text-lg font-semibold smooth-transition"
            >
              Ver Portfólio
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-ghost-pepper mb-2">100+</div>
              <div className="text-white/70">Projetos Entregues</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl md:text-4xl font-bold text-ghost-pepper mb-2">98%</div>
              <div className="text-white/70">Satisfação dos Clientes</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl md:text-4xl font-bold text-ghost-pepper mb-2">5+</div>
              <div className="text-white/70">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;