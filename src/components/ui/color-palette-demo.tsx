import React from "react";

interface ColorCardProps {
  name: string;
  hex: string;
  hsl: string;
  className: string;
  usage: string;
}

const ColorCard: React.FC<ColorCardProps> = ({name, hex, hsl, className, usage}) => (
  <div className="bg-white rounded-lg shadow-elegant p-6 border border-gray-200">
    <div className={`w-full h-24 rounded-lg mb-4 ${className}`} />
    <h3 className="font-heading text-xl font-bold text-ash mb-2">{name}</h3>
    <div className="space-y-1 text-sm font-body">
      <p>
        <span className="font-semibold">HEX:</span> {hex}
      </p>
      <p>
        <span className="font-semibold">HSL:</span> {hsl}
      </p>
      <p className="text-rebel mt-2">{usage}</p>
    </div>
  </div>
);

interface TypographyDemoProps {
  level: string;
  className: string;
  text: string;
}

const TypographyDemo: React.FC<TypographyDemoProps> = ({level, className, text}) => (
  <div className="mb-6">
    <p className="text-sm text-rebel mb-2 font-body">{level}</p>
    <div className={className}>{text}</div>
  </div>
);

export const ColorPaletteDemo: React.FC = () => {
  const colors = [
    {
      name: "Ash",
      hex: "#131313",
      hsl: "hsl(0, 0%, 7.5%)",
      className: "bg-ash",
      usage: "Cor primária, textos principais, backgrounds escuros"
    },
    {
      name: "Ghost Pepper",
      hex: "#D3FE89",
      hsl: "hsl(80, 94%, 76%)",
      className: "bg-ghost-pepper",
      usage: "Cor de destaque, CTAs, elementos interativos"
    },
    {
      name: "Rebel",
      hex: "#504718",
      hsl: "hsl(50, 35%, 20%)",
      className: "bg-rebel",
      usage: "Cor secundária, textos auxiliares"
    },
    {
      name: "Chili",
      hex: "#EB450E",
      hsl: "hsl(20, 90%, 48%)",
      className: "bg-chili",
      usage: "Cor de alerta, elementos de atenção"
    }
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-ash mb-6 font-heading">
            Design System Demo
          </h2>
          <p className="text-xl text-rebel max-w-3xl mx-auto font-body">
            Demonstração da paleta de cores e tipografia do Modern X Spark
          </p>
        </div>

        {/* Color Palette */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-ash mb-8 font-heading">
            Paleta de Cores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {colors.map((color) => (
              <ColorCard key={color.name} {...color} />
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-ash mb-8 font-heading">Tipografia</h3>
          <div className="bg-white rounded-lg shadow-elegant p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Headings */}
              <div>
                <h4 className="text-xl font-bold text-ash mb-6 font-heading">
                  Títulos (Space Grotesk)
                </h4>
                <TypographyDemo
                  level="H1 - 3.5rem (56px)"
                  className="text-6xl font-bold text-ash font-heading"
                  text="Título Principal"
                />
                <TypographyDemo
                  level="H2 - 2.5rem (40px)"
                  className="text-4xl font-bold text-ash font-heading"
                  text="Título de Seção"
                />
                <TypographyDemo
                  level="H3 - 2rem (32px)"
                  className="text-3xl font-bold text-ash font-heading"
                  text="Subtítulo"
                />
                <TypographyDemo
                  level="H4 - 1.5rem (24px)"
                  className="text-2xl font-bold text-ash font-heading"
                  text="Título Menor"
                />
              </div>

              {/* Body Text */}
              <div>
                <h4 className="text-xl font-bold text-ash mb-6 font-heading">
                  Texto Corrido (Inter)
                </h4>
                <TypographyDemo
                  level="Body Large - 1.125rem (18px)"
                  className="text-lg text-ash font-body"
                  text="Texto destacado para introduções e conteúdo importante."
                />
                <TypographyDemo
                  level="Body - 1rem (16px)"
                  className="text-base text-ash font-body"
                  text="Texto padrão para conteúdo geral e parágrafos."
                />
                <TypographyDemo
                  level="Body Small - 0.875rem (14px)"
                  className="text-sm text-rebel font-body"
                  text="Texto auxiliar e informações secundárias."
                />
                <TypographyDemo
                  level="Caption - 0.75rem (12px)"
                  className="text-xs text-rebel font-body"
                  text="Legendas e textos muito pequenos."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Elements */}
        <div>
          <h3 className="text-3xl font-bold text-ash mb-8 font-heading">
            Elementos Interativos
          </h3>
          <div className="bg-white rounded-lg shadow-elegant p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Primary Button */}
              <div className="text-center">
                <button className="bg-ghost-pepper text-ash px-6 py-3 rounded-full font-semibold hover:bg-ghost-pepper/90 glow-effect smooth-transition font-body">
                  Botão Primário
                </button>
                <p className="text-sm text-rebel mt-2 font-body">Ghost Pepper + Ash</p>
              </div>

              {/* Secondary Button */}
              <div className="text-center">
                <button className="bg-ash text-white px-6 py-3 rounded-full font-semibold hover:bg-ash/90 smooth-transition font-body">
                  Botão Secundário
                </button>
                <p className="text-sm text-rebel mt-2 font-body">Ash + White</p>
              </div>

              {/* Alert Button */}
              <div className="text-center">
                <button className="bg-chili text-white px-6 py-3 rounded-full font-semibold hover:bg-chili/90 smooth-transition font-body">
                  Botão de Alerta
                </button>
                <p className="text-sm text-rebel mt-2 font-body">Chili + White</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
