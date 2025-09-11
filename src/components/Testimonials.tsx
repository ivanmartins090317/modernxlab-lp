import {TestimonialsColumn} from "@/components/ui/testimonials-columns-1";
import {motion} from "motion/react";

const testimonials = [
  {
    text: "A Modern X Lab transformou completamente nossa visão sobre tecnologia. O resultado superou todas as expectativas e nos posicionou como líderes no mercado.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    name: "Carlos Silva",
    role: "CTO - TechBank"
  },
  {
    text: "Profissionalismo excepcional e entrega impecável. A equipe conseguiu traduzir nossa visão em uma solução tecnológica revolucionária.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    name: "Ana Rodriguez",
    role: "CEO - ShopFlow"
  },
  {
    text: "A plataforma desenvolvida revolucionou nosso atendimento. Conseguimos alcançar muito mais pacientes com qualidade superior.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    name: "Dr. Roberto Lima",
    role: "Diretor Médico - MedConnect"
  },
  {
    text: "Parceria estratégica que gerou resultados extraordinários. A Modern X Lab não apenas entregou uma solução, mas uma transformação completa.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    name: "Marina Costa",
    role: "Head of Innovation - RetailTech"
  },
  {
    text: "A solução implementada revolucionou nossa operação. Conseguimos aumentar significativamente nossa eficiência e satisfação dos clientes.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    name: "Pedro Santos",
    role: "Diretor de Operações - DataCorp"
  },
  {
    text: "Excelente trabalho da equipe Modern X Lab. A plataforma desenvolvida superou todas as nossas expectativas e nos deu uma vantagem competitiva.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    name: "Luciana Ferreira",
    role: "CTO - CloudSys"
  },
  {
    text: "A transformação digital que a Modern X Lab nos proporcionou foi fundamental para nosso crescimento. Recomendo sem hesitação.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    name: "Rafael Oliveira",
    role: "CEO - TechFlow"
  },
  {
    text: "Profissionalismo e qualidade excepcionais. A equipe entendeu perfeitamente nossas necessidades e entregou uma solução perfeita.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    name: "Camila Mendes",
    role: "Diretora de TI - InnovateCorp"
  },
  {
    text: "A parceria com a Modern X Lab foi fundamental para nosso sucesso. A solução implementada revolucionou nossos processos internos.",
    image:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    name: "Diego Alves",
    role: "Head of Product - NextGen"
  }
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30  relative">
      <div className="container z-10 mx-auto px-6">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1]}}
          viewport={{once: true}}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16"
        >
          {/* <div className="flex justify-center mb-4">
            <div className="border border-ghost-pepper/30 py-1 px-4 rounded-lg bg-ghost-pepper/10 text-ghost-pepper font-semibold">
              Depoimentos
            </div>
          </div> */}

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-ash font-heading text-center">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-center mt-5 text-muted-foreground text-lg max-w-2xl">
            Depoimentos reais de empresas que confiaram em nossa expertise para
            transformar seus negócios
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={30} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={24}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={20}
          />
        </div>

        {/* Client Logos */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold text-muted-foreground mb-8">
            Empresas que confiam em nosso trabalho
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              "TechBank",
              "ShopFlow",
              "MedConnect",
              "RetailTech",
              "DataCorp",
              "CloudSys",
              "TechFlow",
              "InnovateCorp",
              "NextGen"
            ].map((company) => (
              <div
                key={company}
                className="text-lg font-bold text-ash hover:text-ghost-pepper smooth-transition"
              >
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
