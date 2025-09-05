import {useState, useEffect} from "react";
import {Button} from "@/components/ui/button";
import {Menu, X, User, Briefcase, FolderOpen, MessageSquare, Phone} from "lucide-react";
import {AnimeNavBar} from "@/components/ui/anime-navbar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {label: "Sobre", href: "#about"},
    {label: "Serviços", href: "#services"},
    {label: "Cases", href: "#cases"},
    {label: "Depoimentos", href: "#testimonials"},
    {label: "Contato", href: "#contact"}
  ];

  const animeNavItems = [
    {name: "Sobre", url: "#about", icon: User},
    {name: "Serviços", url: "#services", icon: Briefcase},
    {name: "Cases", url: "#cases", icon: FolderOpen},
    {name: "Depoimentos", url: "#testimonials", icon: MessageSquare},
    {name: "Contato", url: "#contact", icon: Phone}
  ];

  return (
    <>
      {/* Logo fixo no canto superior esquerdo */}
      {/* <div className="fixed top-6 left-6 z-[10000]">
        <div className="font-heading text-2xl font-bold text-ghost-pepper hover:text-ghost-pepper/80 smooth-transition cursor-pointer">
          Modern<span className="text-ash">X</span>Spark
        </div>
      </div> */}

      {/* Botão CTA fixo no canto superior direito */}
      {/* <div className="fixed top-6 right-6 z-[10000]">
        <Button
          variant="default"
          className="bg-ghost-pepper text-ash hover:bg-ghost-pepper/90 glow-effect font-body font-semibold"
          onClick={() => {
            const element = document.querySelector("#contact");
            if (element) {
              element.scrollIntoView({behavior: "smooth"});
            }
          }}
        >
          Fale Conosco
        </Button>
      </div> */}

      {/* Anime Navigation Bar */}
      <AnimeNavBar items={animeNavItems} defaultActive="Sobre" />

      {/* Fallback mobile menu para telas muito pequenas */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[9998] sm:hidden">
        <button
          className="text-ghost-pepper bg-ash/80 backdrop-blur-lg p-2 rounded-full border border-ghost-pepper/20 hover:bg-ash hover:text-ghost-pepper/80 smooth-transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-48 bg-ash/90 backdrop-blur-lg rounded-lg p-4 animate-fade-in border border-ghost-pepper/20">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 px-2 text-ghost-pepper hover:text-ghost-pepper/70 smooth-transition text-sm font-body font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
