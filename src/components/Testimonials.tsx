import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Silva',
      position: 'CTO - TechBank',
      company: 'FinTech Revolution',
      content: 'A Modern X Lab transformou completamente nossa visão sobre tecnologia. O resultado superou todas as expectativas e nos posicionou como líderes no mercado.',
      rating: 5,
      avatar: 'CS',
      metric: '+300% crescimento'
    },
    {
      name: 'Ana Rodriguez',
      position: 'CEO - ShopFlow',
      company: 'E-commerce Platform',
      content: 'Profissionalismo excepcional e entrega impecável. A equipe conseguiu traduzir nossa visão em uma solução tecnológica revolucionária.',
      rating: 5,
      avatar: 'AR',
      metric: '+250% vendas'
    },
    {
      name: 'Dr. Roberto Lima',
      position: 'Diretor Médico - MedConnect',
      company: 'HealthTech Solution',
      content: 'A plataforma desenvolvida revolucionou nosso atendimento. Conseguimos alcançar muito mais pacientes com qualidade superior.',
      rating: 5,
      avatar: 'RL',
      metric: '+400% eficiência'
    },
    {
      name: 'Marina Costa',
      position: 'Head of Innovation - RetailTech',
      company: 'Retail Transformation',
      content: 'Parceria estratégica que gerou resultados extraordinários. A Modern X Lab não apenas entregou uma solução, mas uma transformação completa.',
      rating: 5,
      avatar: 'MC',
      metric: '+180% conversão'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-ash mb-6">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Depoimentos reais de empresas que confiaram em nossa expertise 
            para transformar seus negócios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="group hover:shadow-xl smooth-transition border-0 bg-white elegant-shadow animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 relative">
                {/* Quote Icon */}
                <Quote className="absolute top-4 right-4 text-ghost-pepper/20" size={32} />
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-ghost-pepper rounded-full flex items-center justify-center text-ash font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-ash">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                    </div>
                  </div>
                  
                  {/* Metric */}
                  <div className="text-right">
                    <div className="text-sm font-bold text-ghost-pepper">
                      {testimonial.metric}
                    </div>
                    <div className="text-xs text-muted-foreground">Resultado</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-muted-foreground mb-8">
            Empresas que confiam em nosso trabalho
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {['TechBank', 'ShopFlow', 'MedConnect', 'RetailTech', 'DataCorp', 'CloudSys'].map((company) => (
              <div key={company} className="text-lg font-bold text-ash">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;