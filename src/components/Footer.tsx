import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Mail, Phone, MapPin, Linkedin, Github, Twitter, ArrowRight} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Desenvolvimento Web",
    "Apps Mobile",
    "Soluções Cloud",
    "Cibersegurança",
    "Data Analytics",
    "Consultoria Tech"
  ];

  const company = [
    "Sobre Nós",
    "Nossa Equipe",
    "Carreiras",
    "Cases de Sucesso",
    "Blog",
    "Contato"
  ];

  const legal = ["Política de Privacidade", "Termos de Uso", "Cookies", "LGPD"];

  return (
    <footer className="bg-hero-gradient text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4 font-heading">
              Modern<span className="text-ghost-pepper">X</span>Lab
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Transformamos ideias em soluções tecnológicas inovadoras que impulsionam o
              crescimento dos nossos clientes.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ghost-pepper hover:text-ash smooth-transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ghost-pepper hover:text-ash smooth-transition"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-ghost-pepper hover:text-ash smooth-transition"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-white/70 hover:text-ghost-pepper smooth-transition text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-ghost-pepper smooth-transition text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-white/70 text-sm mb-4">
              Receba insights exclusivos sobre tecnologia e inovação.
            </p>

            <div className="flex space-x-2 mb-4">
              <Input
                type="email"
                placeholder="Seu email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-ghost-pepper focus:ring-ghost-pepper"
              />
              <Button
                size="sm"
                className="bg-ghost-pepper text-ash hover:bg-ghost-pepper/90 px-3"
              >
                <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <Mail className="text-ghost-pepper mr-3" size={20} />
              <div>
                <div className="text-sm text-white/70">Email</div>
                <div className="font-semibold">contato@modernxlab.com</div>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start">
              <Phone className="text-ghost-pepper mr-3" size={20} />
              <div>
                <div className="text-sm text-white/70">Telefone</div>
                <div className="font-semibold">+55 (11) 9999-9999</div>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start">
              <MapPin className="text-ghost-pepper mr-3" size={20} />
              <div>
                <div className="text-sm text-white/70">Localização</div>
                <div className="font-semibold">São Paulo, SP</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/70 text-sm mb-4 md:mb-0">
              © {currentYear} Modern X Lab. Todos os direitos reservados.
            </div>

            <div className="flex flex-wrap justify-center gap-6">
              {legal.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white/70 hover:text-ghost-pepper smooth-transition text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
