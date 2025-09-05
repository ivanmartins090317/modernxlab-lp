"use client";
import {TimelineContent} from "@/components/ui/timeline-animation";
import {VerticalCutReveal} from "@/components/ui/vertical-cut-reveal";
import {ArrowRight, Target, Eye, Award, Users} from "lucide-react";
import {useRef} from "react";

export default function AboutSection3() {
  const heroRef = useRef<HTMLDivElement>(null);

  const revealVariants = {
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5
      }
    }),
    hidden: {
      filter: "blur(10px)",
      y: -20,
      opacity: 0
    }
  };

  const scaleVariants = {
    visible: (i: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.4,
        duration: 0.5
      }
    }),
    hidden: {
      filter: "blur(10px)",
      opacity: 0
    }
  };

  return (
    <section className="py-20 px-4 bg-white" ref={heroRef}>
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          {/* Header com ícones sociais */}
          <div className="flex justify-between items-center mb-8 w-[85%] absolute lg:top-4 md:top-0 sm:-top-2 -top-3 z-10">
            <div className="flex items-center gap-2 text-xl">
              <span className="text-ghost-pepper animate-spin">✱</span>
              <TimelineContent
                as="span"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-sm font-medium text-rebel font-body"
              >
                QUEM SOMOS
              </TimelineContent>
            </div>
            <div className="flex gap-4">
              <TimelineContent
                as="div"
                animationNum={0}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-ash/20 bg-ash/5 rounded-lg flex items-center justify-center cursor-pointer hover:bg-ghost-pepper/10 smooth-transition"
              >
                <Target className="text-ash" size={16} />
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={1}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-ash/20 bg-ash/5 rounded-lg flex items-center justify-center cursor-pointer hover:bg-ghost-pepper/10 smooth-transition"
              >
                <Eye className="text-ash" size={16} />
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={2}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-ash/20 bg-ash/5 rounded-lg flex items-center justify-center cursor-pointer hover:bg-ghost-pepper/10 smooth-transition"
              >
                <Award className="text-ash" size={16} />
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={3}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="md:w-8 md:h-8 sm:w-6 w-5 sm:h-6 h-5 border border-ash/20 bg-ash/5 rounded-lg flex items-center justify-center cursor-pointer hover:bg-ghost-pepper/10 smooth-transition"
              >
                <Users className="text-ash" size={16} />
              </TimelineContent>
            </div>
          </div>

          <TimelineContent
            as="figure"
            animationNum={4}
            timelineRef={heroRef}
            customVariants={scaleVariants}
            className="relative group"
          >
            <svg className="w-full" width={"100%"} height={"100%"} viewBox="0 0 100 40">
              <defs>
                <clipPath id="clip-inverted" clipPathUnits={"objectBoundingBox"}>
                  <path
                    d="M0.0998072 1H0.422076H0.749756C0.767072 1 0.774207 0.961783 0.77561 0.942675V0.807325C0.777053 0.743631 0.791844 0.731953 0.799059 0.734076H0.969813C0.996268 0.730255 1.00088 0.693206 0.999875 0.675159V0.0700637C0.999875 0.0254777 0.985045 0.00477707 0.977629 0H0.902473C0.854975 0 0.890448 0.138535 0.850165 0.138535H0.0204424C0.00408849 0.142357 0 0.180467 0 0.199045V0.410828C0 0.449045 0.0136283 0.46603 0.0204424 0.469745H0.0523086C0.0696245 0.471019 0.0735527 0.497877 0.0733523 0.511146V0.915605C0.0723903 0.983121 0.090588 1 0.0998072 1Z"
                    fill="#D9D9D9"
                  />
                </clipPath>
              </defs>
              <image
                clipPath="url(#clip-inverted)"
                preserveAspectRatio="xMidYMid slice"
                width={"100%"}
                height={"100%"}
                xlinkHref="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop"
              ></image>
            </svg>
          </TimelineContent>

          {/* Estatísticas */}
          <div className="flex flex-wrap lg:justify-start justify-between items-center py-3 text-sm">
            <TimelineContent
              as="div"
              animationNum={5}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="flex gap-4"
            >
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="text-ghost-pepper font-bold font-heading">5+</span>
                <span className="text-rebel font-body">anos de experiência</span>
                <span className="text-ash/30">|</span>
              </div>
              <div className="flex items-center gap-2 mb-2 sm:text-base text-xs">
                <span className="text-ghost-pepper font-bold font-heading">100+</span>
                <span className="text-rebel font-body">projetos entregues</span>
              </div>
            </TimelineContent>
            <div className="lg:absolute right-0 bottom-16 flex lg:flex-col flex-row-reverse lg:gap-0 gap-4">
              <TimelineContent
                as="div"
                animationNum={6}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex lg:text-4xl sm:text-3xl text-2xl items-center gap-2 mb-2"
              >
                <span className="text-ghost-pepper font-semibold font-heading">50+</span>
                <span className="text-rebel uppercase font-body">clientes</span>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={7}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="flex items-center gap-2 mb-2 sm:text-base text-xs"
              >
                <span className="text-ghost-pepper font-bold font-heading">98%</span>
                <span className="text-rebel font-body">taxa de sucesso</span>
                <span className="text-ash/30 lg:hidden block">|</span>
              </TimelineContent>
            </div>
          </div>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="sm:text-4xl md:text-5xl text-2xl !leading-[110%] font-semibold text-ash mb-8 font-heading">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.1}
                staggerFrom="first"
                reverse={true}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 30,
                  delay: 3
                }}
              >
                Transformando Ideias em Soluções Digitais de Impacto.
              </VerticalCutReveal>
            </h1>

            <TimelineContent
              as="div"
              animationNum={9}
              timelineRef={heroRef}
              customVariants={revealVariants}
              className="grid md:grid-cols-2 gap-8 text-rebel"
            >
              <TimelineContent
                as="div"
                animationNum={10}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="sm:text-base text-xs font-body"
              >
                <p className="leading-relaxed text-justify">
                  Nossa jornada começou com a paixão por inovação e evoluiu para uma
                  carreira estratégica em desenvolvimento. Especializamo-nos em
                  transformar ideias em soluções digitais que ajudam marcas a crescer.
                </p>
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={11}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="sm:text-base text-xs font-body"
              >
                <p className="leading-relaxed text-justify">
                  Cada empresa tem uma história, e nós nos especializamos em contar a sua
                  com clareza e impacto. Combinando criatividade com estratégia, criamos
                  soluções que realmente conectam com audiências.
                </p>
              </TimelineContent>
            </TimelineContent>
          </div>

          <div className="md:col-span-1">
            <div className="text-right">
              <TimelineContent
                as="div"
                animationNum={12}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-ghost-pepper text-2xl font-bold mb-2 font-heading"
              >
                MODERN X LAB
              </TimelineContent>
              <TimelineContent
                as="div"
                animationNum={13}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="text-rebel text-sm mb-8 font-body"
              >
                Desenvolvimento | Inovação Digital
              </TimelineContent>

              <TimelineContent
                as="div"
                animationNum={14}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="mb-6"
              >
                <p className="text-ash font-medium mb-4 font-body">
                  Pronto para transformar a mensagem da sua marca em resultados?
                </p>
              </TimelineContent>

              <TimelineContent
                as="button"
                animationNum={15}
                timelineRef={heroRef}
                customVariants={revealVariants}
                className="bg-ash hover:bg-ash/90 shadow-lg shadow-ash/20 border border-ash/20 flex w-fit ml-auto gap-2 hover:gap-4 transition-all duration-300 ease-in-out text-ghost-pepper px-5 py-3 rounded-lg cursor-pointer font-semibold font-body glow-effect"
              >
                VAMOS COLABORAR <ArrowRight className="" />
              </TimelineContent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
