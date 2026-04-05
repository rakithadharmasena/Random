import { motion } from "motion/react";
import { Car, Check, Mail, MapPin, Phone, Shield, Zap } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Standard Petrol",
    price: "$130",
    category: "Daily Driver",
    image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=800",
    description: "Oil change, fluids, and comprehensive safety inspection for your everyday vehicle.",
    features: ["Synthetic Oil", "Filter Change", "Fluid Top-up", "Brake Check"],
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "European Performance",
    price: "$230",
    category: "Premium",
    image: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800",
    description: "Premium care for high-performance European engines requiring specialized attention.",
    features: ["Premium Oil", "OEM Filters", "Computer Scan", "Performance Check"],
    icon: <Shield className="w-6 h-6" />,
    featured: true,
  },
  {
    title: "Diesel Power",
    price: "$250",
    category: "Heavy Duty",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
    description: "Specialized service for heavy-duty diesel engines and off-road adventurers.",
    features: ["Diesel Grade Oil", "Fuel Filter", "DPF Check", "Turbo Inspection"],
    icon: <Car className="w-6 h-6" />,
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="text-white w-5 h-5" />
            </div>
            <h1 className="text-xl font-bold tracking-tighter uppercase">Luube Guy</h1>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">Services</a>
            <a href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-blue-600 transition-all">Book Now</a>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-0.5 bg-zinc-900 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-zinc-900 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-zinc-900"></div>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000" 
            alt="Mountain Landscape" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase mb-4 opacity-80">Global Adventure Fleet</h2>
            <h3 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[0.9]">
              THE POWER OF CHOICE.<br />
              <span className="text-blue-400">FOR EVERY JOURNEY.</span>
            </h3>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90 font-light">
              Mobile car service that comes to you. Fast, simple, and professional care for your vehicle, wherever the road takes you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#services" className="w-full sm:w-auto px-8 py-4 bg-white text-zinc-900 font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all">
                View Service Menu
              </a>
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all">
                Book Appointment
              </a>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </section>

      {/* Service Catalog Section */}
      <section id="services" className="py-24 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600 mb-2">Service Catalog</h2>
              <h3 className="text-4xl font-bold tracking-tighter">Premium Care for Every Vehicle</h3>
            </div>
            <p className="text-zinc-500 max-w-md">
              Transparent pricing and professional care. We bring the workshop to your doorstep with our specialized service packages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl bg-white border ${service.featured ? 'border-blue-600 ring-1 ring-blue-600' : 'border-zinc-100'} flex flex-col`}
              >
                {service.featured && (
                  <div className="absolute top-4 right-4 z-10 px-4 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}
                
                {/* Image Header */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-6 text-white">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">{service.category}</span>
                    <h4 className="text-xl font-bold">{service.title}</h4>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold">{service.price}</span>
                    <span className="text-zinc-500 text-sm">/service</span>
                  </div>
                  
                  <p className="text-sm text-zinc-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-4 mb-8 flex-grow">
                    {service.features.map((feature, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-zinc-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-4 rounded-xl font-bold transition-all ${service.featured ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-zinc-900 text-white hover:bg-blue-600'}`}>
                    Book {service.title}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-blue-400 mb-2">Get in Touch</h2>
              <h3 className="text-4xl font-bold tracking-tighter mb-8">Ready for your next adventure?</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Call Us</h4>
                    <p className="text-zinc-400 text-sm">+1 (555) 000-0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email Us</h4>
                    <p className="text-zinc-400 text-sm">hello@luubeguy.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p className="text-zinc-400 text-sm">Mobile Service - We come to you!</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Service Type</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors appearance-none">
                    <option className="bg-zinc-900">Standard Petrol</option>
                    <option className="bg-zinc-900">European Performance</option>
                    <option className="bg-zinc-900">Diesel Power</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-400">Message</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-blue-400 transition-colors" placeholder="Tell us about your vehicle..."></textarea>
                </div>
                <button className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-zinc-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center">
              <Zap className="text-white w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-bold uppercase tracking-tighter">Luube Guy</span>
          </div>
          <p className="text-sm text-zinc-500">© 2026 Global Adventure Fleet. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-blue-600">Privacy</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-blue-600">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
