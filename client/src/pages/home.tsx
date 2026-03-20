import { useState } from "react";
import { motion } from "framer-motion";
import { Palette, Camera, Music, ArrowRight, Mail, Globe, Zap, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import heroVideo from "@assets/hero-video.mp4";
import portfolioCollage from "@assets/portfolio-collage.jpeg";
import logoFlyer from "@assets/logo-service-flyer.jpeg";
import rayShoot from "@assets/ray-shoot-portfolio.jpeg";
import hairBraids from "@assets/natural-hair-braids-flyer.jpeg";
import instagramQr from "@assets/instagram-qr.jpeg";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Design de Logo",
    message: ""
  });

  const handleWhatsAppOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "237653620498"; // Using the number from Ray'Logo flyer
    const text = `Bonjour RAY'CORP, je souhaite passer commande.%0A%0ANom: ${formData.name}%0AEmail: ${formData.email}%0AService: ${formData.service}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank');
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: "Design de Logo",
      description: "Identité visuelle unique forgée pour l'ère numérique. Des logos minimalistes aux emblèmes complexes."
    },
    {
      icon: <Camera className="w-12 h-12 text-secondary" />,
      title: "Retouche IA",
      description: "Transformation photographique assistée par intelligence artificielle. Restauration, stylisation et manipulation avancée."
    },
    {
      icon: <Music className="w-12 h-12 text-accent" />,
      title: "Composition Musicale",
      description: "Paysages sonores sur mesure, beats futuristes et identités audio pour votre marque ou projet."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-b-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold font-display tracking-wider text-primary flex items-center gap-2">
            <Zap className="w-6 h-6 fill-current" /> RAY'CORP
          </div>
          <div className="hidden md:flex items-center gap-8 font-sans text-sm uppercase tracking-widest">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#work" className="hover:text-primary transition-colors">Portfolio</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-background transition-all duration-300 font-bold">
              DÉMARRER
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-black mb-6 tracking-tighter">
              RAY<span className="text-primary">'</span>CORP
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light"
          >
            L'intersection de l'art digital, de l'intelligence artificielle et de la création sonore.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/80 text-lg px-8 h-14 rounded-none font-display tracking-widest">
              EXPLORER
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10 text-lg px-8 h-14 rounded-none font-display tracking-widest backdrop-blur-sm">
              NOUS CONTACTER
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-card/30 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">NOS SERVICES</h2>
            <div className="h-1 w-24 bg-secondary"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="bg-background/50 border-white/5 hover:border-primary/50 transition-all duration-500 group h-full rounded-none overflow-hidden">
                  <CardContent className="p-8 flex flex-col h-full relative">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="mb-8 p-4 bg-background/80 w-fit rounded-none border border-white/10 group-hover:neon-box transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    <div className="mt-auto pt-8 flex items-center gap-2 text-sm font-bold uppercase tracking-widest opacity-50 group-hover:opacity-100 group-hover:text-primary transition-all cursor-pointer">
                      En savoir plus <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature / Why Us */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-1/2 h-full bg-gradient-to-r from-secondary/10 to-transparent -translate-y-1/2 blur-3xl rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
             <div className="relative aspect-square border border-white/10 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 z-10 pointer-events-none"></div>
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                >
                  <source src={heroVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center z-20">
                   <div className="text-center mix-blend-overlay">
                      <h3 className="text-6xl font-display font-bold text-white/50">AI</h3>
                      <h3 className="text-6xl font-display font-bold text-white/50">ART</h3>
                   </div>
                </div>
             </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">CRÉATIVITÉ AUGMENTÉE</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Chez RAY'CORP, nous ne nous contentons pas de suivre les tendances. Nous utilisons les dernières technologies d'intelligence artificielle pour repousser les limites de la création graphique et sonore.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Notre approche hybride mêle sensibilité artistique humaine et puissance de calcul machine pour des résultats qui sortent de l'ordinaire.
            </p>
            <ul className="space-y-4 font-display text-sm tracking-wider">
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-primary"></span>
                GÉNÉRATION RAPIDE & ITÉRATIVE
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-secondary"></span>
                QUALITÉ STUDIO MASTERISÉE
              </li>
              <li className="flex items-center gap-3">
                <span className="w-2 h-2 bg-accent"></span>
                IDENTITÉ 100% UNIQUE
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Portfolio / Work Section */}
      <section id="work" className="py-32 bg-black relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">PORTFOLIO</h2>
             <p className="text-muted-foreground max-w-2xl mx-auto">Découvrez nos dernières réalisations et choisissez votre style.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Item 1: Photo Style */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="group"
            >
              <div className="relative overflow-hidden border border-white/10 shadow-2xl h-[500px]">
                <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
                <img 
                  src={portfolioCollage} 
                  alt="Choose Your Style - Portfolio Collage" 
                  className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
               <div className="mt-6 text-center">
                  <p className="text-xl font-display font-bold tracking-widest text-white">CHOOSE YOUR STYLE</p>
                  <p className="text-sm text-primary mt-2">RETOUCHE & ART</p>
               </div>
            </motion.div>

            {/* Item 2: Ray Shoot */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="group"
            >
              <div className="relative overflow-hidden border border-white/10 shadow-2xl h-[500px]">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
                <img 
                  src={rayShoot} 
                  alt="Ray'Shoot - Photography" 
                  className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
               <div className="mt-6 text-center">
                  <p className="text-xl font-display font-bold tracking-widest text-white">RAY'SHOOT</p>
                  <p className="text-sm text-primary mt-2">PHOTOGRAPHIE PRO</p>
               </div>
            </motion.div>

            {/* Item 3: Logo Design */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="group"
            >
              <div className="relative overflow-hidden border border-white/10 shadow-2xl h-[500px]">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
                <img 
                  src={logoFlyer} 
                  alt="Ray'Logo - Art du Logo" 
                  className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
               <div className="mt-6 text-center">
                  <p className="text-xl font-display font-bold tracking-widest text-white">RAY'LOGO</p>
                  <p className="text-sm text-primary mt-2">BRANDING & IDENTITÉ</p>
               </div>
            </motion.div>

            {/* Item 4: Hair Braids */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.6 }}
               className="group"
            >
              <div className="relative overflow-hidden border border-white/10 shadow-2xl h-[500px]">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-orange-500 opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
                <img 
                  src={hairBraids} 
                  alt="Natural Hair Braids" 
                  className="relative w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
               <div className="mt-6 text-center">
                  <p className="text-xl font-display font-bold tracking-widest text-white">HAIR BRAIDS</p>
                  <p className="text-sm text-primary mt-2">BEAUTÉ & SOIN</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto glass-panel p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column: Info & QR */}
              <div className="space-y-8 text-center lg:text-left">
                <div>
                  <h2 className="text-4xl font-display font-bold mb-4">COMMENCEZ VOTRE PROJET</h2>
                  <p className="text-muted-foreground text-lg">Parlez-nous de votre vision. Nous la rendrons réelle.</p>
                </div>

                <div className="flex flex-col items-center lg:items-start gap-6">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-br from-yellow-400 via-orange-500 to-purple-600 opacity-50 blur-lg group-hover:opacity-80 transition-opacity duration-500"></div>
                    <div className="relative bg-white p-4 rounded-xl">
                      <img 
                        src={instagramQr} 
                        alt="Instagram QR Code" 
                        className="w-48 h-48 md:w-64 md:h-64 object-contain"
                      />
                    </div>
                  </div>
                  <p className="font-display font-bold tracking-widest text-sm text-muted-foreground">
                    SUIVEZ-NOUS SUR INSTAGRAM <br/>
                    <span className="text-primary text-base">@RAYCORP_INNO</span>
                  </p>
                </div>
              </div>

              {/* Right Column: Form */}
              <form onSubmit={handleWhatsAppOrder} className="space-y-6 bg-black/20 p-6 border border-white/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Nom</label>
                    <Input 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-black/20 border-white/10 focus:border-primary h-12 rounded-none" 
                      placeholder="Votre nom" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Email</label>
                    <Input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-black/20 border-white/10 focus:border-primary h-12 rounded-none" 
                      placeholder="votre@email.com" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Service</label>
                  <select 
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full bg-black/20 border border-white/10 focus:border-primary h-12 px-3 text-sm rounded-none text-foreground appearance-none"
                  >
                    <option>Design de Logo</option>
                    <option>Retouche Photo IA</option>
                    <option>Composition Musicale</option>
                    <option>Tresses / Coiffure</option>
                    <option>Autre / Pack Complet</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                  <Textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-black/20 border-white/10 focus:border-primary min-h-[150px] rounded-none" 
                    placeholder="Détails du projet..." 
                  />
                </div>

                <Button type="submit" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white h-14 rounded-none font-display font-bold text-lg tracking-widest mt-4 transition-colors">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  COMMANDER SUR WHATSAPP
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold font-display tracking-wider text-white flex items-center gap-2">
            RAY'CORP <span className="text-xs align-top text-muted-foreground font-sans font-normal tracking-normal ml-2">EST. 2025</span>
          </div>
          
          <div className="flex items-center gap-6 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors"><Globe className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Mail className="w-5 h-5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Camera className="w-5 h-5" /></a>
          </div>

          <div className="text-sm text-muted-foreground">
            © 2025 RAY'CORP. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}