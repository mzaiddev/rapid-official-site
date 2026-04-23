import { Link } from 'react-router-dom';
import { 
  Briefcase, Globe, Building2, Users, CheckCircle, Smile, 
  Languages, Settings, ArrowUpCircle, Link as LinkIcon,
  ShoppingCart, Truck, Car, Stethoscope, Pill, Hotel, Utensils,
  GraduationCap, Factory, Droplet, ArrowRight, Activity, Zap, Shield, ChevronRight, Star, Cpu, Server, Network, Layers, BarChart3, LineChart, PieChart
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const stats = [
    { value: '5,000+', label: 'Global Businesses' },
    { value: '25M+', label: 'Reports Processed' },
    { value: 'AES-256', label: 'Military-Grade Encryption' },
    { value: '99.99%', label: 'Infrastructure Uptime' }
  ];

  const whyChooseUs = [
    { icon: <Languages className="w-6 h-6 text-brand-primary" />, title: 'Bilingual Core', description: 'Native support for multiple languages ensures seamless operations globally.' },
    { icon: <Settings className="w-6 h-6 text-brand-primary" />, title: 'Highly Customizable', description: 'Fully adaptable architecture to meet the strict demands of your distinct workflows.' },
    { icon: <ArrowUpCircle className="w-6 h-6 text-brand-primary" />, title: 'Effortlessly Upgradable', description: 'Continuous deployment of cloud-native upgrades keeping you ahead of the curve.' },
    { icon: <LinkIcon className="w-6 h-6 text-brand-primary" />, title: 'API Integration', description: 'Unified data layers seamlessly sync with external vendors and legacy infrastructures.' }
  ];

  const products = [
    { icon: <ShoppingCart />, title: 'Retail & POS ERP', tags: 'On-Premises · Cloud' },
    { icon: <Car />, title: 'Automotive ERP', tags: 'On-Premises · Cloud' },
    { icon: <Truck />, title: 'Distribution ERP', tags: 'Cloud · Hybrid' },
    { icon: <Stethoscope />, title: 'Healthcare ERP', tags: 'On-Premises · Hybrid' },
    { icon: <Hotel />, title: 'Hospitality ERP', tags: 'Cloud · Hybrid' },
    { icon: <Factory />, title: 'Manufacturing ERP', tags: 'On-Premises · Cloud' }
  ];

  const testimonials = [
    { name: 'Sophia Anderson', role: 'CEO at TechGlobal', text: 'Rapid\'s ERP system is phenomenal. The localized support and data agility transformed our disparate international offices into a unified operational hub.' },
    { name: 'Rafid Hasan', role: 'Operations Manager', text: 'We cut our monthly reconciliation process from 3 days to literally hours. The real-time visibility across our supply chain is an absolute game-changer.' },
    { name: 'David Chen', role: 'CFO at Apex', text: 'The ROI was realized in just six months. The comprehensive dashboards give our board unprecedented insight into our financial pulse.' }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="flex flex-col bg-[#050C1A] font-sans selection:bg-brand-primary/30 selection:text-white min-h-screen"
    >
      {/* Hyper-Clean Elegance Hero */}
      <section className="relative min-h-screen pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden flex items-center justify-center">
         {/* Minimalist Grid & Glow Background */}
        <div className="absolute inset-0 z-0 bg-[#060D1A]">
          {/* Subtle dotted grid overlay mapping to layout */ }
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_30%,transparent_100%)]"></div>
          {/* Elegant top ambient glow completely different from the chaotic blurs */}
          <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Hand Text: Premium, Clear, High-Contrast */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(35,168,224,0.1)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-primary shadow-[0_0_8px_brand-primary]"></span>
                </span>
                Rapid OS Core 3.0 Released
              </div>
              
              <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
                Command Your <br />
                Business With <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-emerald-400">Absolute Clarity.</span>
              </h1>
              
              <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl font-medium">
                Experience unparalleled operational control, workflow automation, and real-time intelligence tailored for modern global enterprises.
              </p>
              
              <div className="flex flex-wrap gap-4 items-center">
                <Link to="/contact" className="px-8 py-4 bg-white text-brand-dark rounded-full font-extrabold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 flex items-center gap-2">
                  Start Free Trial <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/services" className="px-8 py-4 border border-white/20 text-white rounded-full font-bold hover:bg-white/5 transition-all flex items-center gap-2 backdrop-blur-sm">
                  View Solutions
                </Link>
              </div>
            </motion.div>

            {/* Right Hand UI Composition: Completely separate from the old 3D image. Pure Glassmorphic Tailwind UI Composition. */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative h-[650px] w-full hidden lg:block"
            >
              {/* Panel 1 (Back Right) - Sales Chart */}
              <motion.div 
                animate={{y: [-10, 10, -10]}} 
                transition={{duration: 7, ease: "easeInOut", repeat: Infinity}} 
                className="absolute right-0 top-12 w-[85%] bg-[#080D1A]/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.4)] p-8 z-10"
              >
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <div className="text-slate-400 text-sm font-semibold mb-1 uppercase tracking-wider">Global Revenue</div>
                    <div className="text-white text-3xl font-black tracking-tight font-mono">$1,459,203.00</div>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20">
                    <BarChart3 className="w-6 h-6 text-brand-primary" />
                  </div>
                </div>
                <div className="flex items-end gap-3 h-40">
                  {[40, 70, 45, 90, 65, 85, 110, 75, 45, 80].map((h, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-brand-primary/20 via-brand-primary/10 to-transparent border border-b-0 border-brand-primary/20 rounded-t-lg relative hover:from-brand-primary/40 transition-colors" style={{ height: `${Math.min(h, 100)}%` }}>
                      {h > 80 && <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-2 bg-brand-primary rounded-full shadow-[0_0_12px_#00AEEF]"></div>}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Panel 2 (Front Left) - User Sessions / Activity */}
              <motion.div 
                animate={{y: [10, -10, 10]}} 
                transition={{duration: 6, ease: "easeInOut", repeat: Infinity}} 
                className="absolute left-[-5%] top-[280px] w-[60%] bg-[#0B1221]/95 backdrop-blur-3xl border border-white/10 rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.6)] p-8 z-20"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <Users className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Active Nodes</div>
                    <div className="text-emerald-400 text-xs font-bold tracking-widest flex items-center gap-1.5 uppercase mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Live Region Synced
                    </div>
                  </div>
                </div>
                <div className="space-y-5">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#111A2D] border border-white/5 flex items-center justify-center text-xs font-bold text-slate-500">0{i+1}</div>
                      <div className="flex-1">
                        <div className="w-full h-2.5 bg-[#111A2D] rounded-full mb-2 overflow-hidden border border-white/5">
                           <div className="h-full bg-slate-600 rounded-full" style={{width: `${Math.max(40, 100 - i * 20)}%`}}></div>
                        </div>
                        <div className="w-1/2 h-2.5 bg-[#111A2D] rounded-full border border-white/5"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Panel 3 (Bottom Right) - System Server Notification */}
              <motion.div 
                animate={{y: [0, 8, 0]}} 
                transition={{duration: 5, ease: "easeInOut", repeat: Infinity}} 
                className="absolute right-10 bottom-[-10px] w-[50%] bg-brand-primary/10 backdrop-blur-2xl border border-brand-primary/20 rounded-2xl shadow-[0_20px_50px_rgba(0,174,239,0.15)] p-6 z-30"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center">
                      <Layers className="w-6 h-6 text-brand-primary" />
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-base">Cluster Sync</div>
                    <div className="text-slate-300 text-sm font-medium">Auto-scaling enabled</div>
                  </div>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full border border-white/5 overflow-hidden">
                  <div className="w-[70%] h-full bg-brand-primary rounded-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/40 animate-[translateX_2s_infinite]"></div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Floating Trust & Stats Bar */}
      <section className="relative z-20 -mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="bg-[#111827]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 lg:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-wrap justify-between items-center gap-8 gap-y-10">
           {stats.map((stat, idx) => (
             <div key={idx} className="flex-1 min-w-[200px] text-center md:text-left">
               <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight drop-shadow-lg">{stat.value}</div>
               <div className="text-xs font-bold text-brand-primary uppercase tracking-widest">{stat.label}</div>
             </div>
           ))}
         </div>
      </section>

      {/* Core Features - Ultra Clean Architecture */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-2xl mb-6 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
             <Cpu className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-4">Enterprise Architecture</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Designed for teams that <br className="hidden md:block" />
            demand <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">absolute power.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {whyChooseUs.map((item, idx) => (
            <motion.div 
              whileHover={{ y: -8 }}
              key={idx} 
              className="bg-[#0B1221] border border-white/5 hover:border-brand-primary/30 rounded-3xl p-8 relative overflow-hidden group transition-all duration-300 shadow-xl"
            >
              {/* Subtle top inner glow */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-14 h-14 bg-brand-primary/5 rounded-2xl flex items-center justify-center mb-8 border border-brand-primary/10 group-hover:bg-brand-primary/20 group-hover:scale-110 transition-all duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-4 tracking-wide">{item.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm font-medium">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Modules - Premium High-Contrast UI Cards */}
      <section className="py-32 relative border-t border-white/5 bg-[#030812] overflow-hidden">
        {/* Cinematic light leaks */}
        <div className="absolute left-[-10%] top-1/2 w-[800px] h-[800px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-1/3 h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                 <div className="w-1.5 h-6 bg-brand-primary rounded-sm"></div>
                 <h2 className="text-brand-primary font-bold tracking-widest uppercase text-sm">Industry Solutions</h2>
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                Specialized technology for <br className="hidden md:block" />
                <span className="opacity-50">vertical markets.</span>
              </h3>
            </div>
            <Link to="/products" className="hidden sm:inline-flex items-center gap-2 font-bold text-slate-300 hover:text-white transition-colors hover:translate-x-1 duration-300 pb-2">
              Explore Available Modules <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <Link to="/services" key={idx} className="bg-[#0A101C] rounded-3xl p-8 border border-white/5 hover:border-white/10 group flex flex-col transition-all duration-300 relative overflow-hidden">
                {/* Dynamic hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/0 via-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="flex items-start gap-5 mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#111A2D] border border-white/5 text-brand-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-300 shadow-inner">
                    {product.icon}
                  </div>
                  <div className="pt-2">
                    <h4 className="font-bold text-xl text-white transition-colors tracking-wide">{product.title}</h4>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mt-1.5 block">{product.tags}</span>
                  </div>
                </div>
                <div className="mt-auto pt-6 border-t border-white/5 flex justify-between items-center text-sm font-bold text-slate-400 group-hover:text-white relative z-10 transition-colors">
                  View Specifications
                  <ChevronRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global Partnership Text - Deep immersive geometric rings */}
      <section className="py-40 relative flex items-center justify-center group bg-[#060D1A] overflow-hidden border-y border-white/5">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
          <div className="w-[300px] h-[300px] border border-white/10 rounded-full absolute group-hover:scale-[1.5] transition-transform duration-1000 ease-out"></div>
          <div className="w-[600px] h-[600px] border border-white/5 rounded-full absolute animate-[spin_30s_linear_infinite] border-t-brand-primary/30"></div>
          <div className="w-[900px] h-[900px] border border-white/5 rounded-full absolute group-hover:scale-[1.2] transition-transform duration-1000 ease-out border-b-emerald-400/20"></div>
        </div>

        {/* Center atmospheric glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none group-hover:bg-brand-primary/20 transition-all duration-[2000ms]"></div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Globe className="w-16 h-16 text-white/50 mx-auto mb-10 animate-[spin_60s_linear_infinite]" strokeWidth={1} />
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-10 drop-shadow-2xl">
            Trusted by the world's most <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-cyan-300">innovative teams.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 font-light max-w-3xl mx-auto mb-14 leading-relaxed">
            From hyper-growth startups to established enterprises, Rapid ERP forms the essential foundation for operational excellence.
          </p>
          <Link to="/about" className="inline-flex items-center justify-center gap-3 bg-white text-[#0B1120] px-10 py-5 rounded-full font-extrabold tracking-wide hover:scale-105 hover:bg-slate-200 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)]">
            Read Our Success Stories <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Highly Polished Dark Testimonials */}
      <section className="py-32 overflow-hidden relative bg-[#040914]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 text-white rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-white/10 shadow-lg">
             <Star className="w-3.5 h-3.5 fill-brand-primary text-brand-primary" /> Client Success
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Loved by industry leaders</h3>
        </div>

        {/* Seamless edge fading */}
        <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-[#040914] to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#040914] to-transparent z-20 pointer-events-none"></div>

        <div className="flex gap-8 px-8 animate-[scroll_50s_linear_infinite] w-max hover:[animation-play-state:paused]">
            {/* Duplicated for infinite scroll effect */}
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div key={idx} className="w-[450px] flex-shrink-0 bg-[#0A101C] border border-white/5 p-12 rounded-3xl hover:border-white/20 transition-colors shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-[40px] group-hover:bg-brand-primary/10 transition-colors"></div>
                <div className="text-white/10 mb-8 group-hover:text-white/20 transition-colors absolute top-10 right-10">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.411 14.596H11.205V3H21V11.233L18.435 21H14.017ZM3.811 21L6.205 14.596H1V3H10.795V11.233L8.23 21H3.811Z"/>
                  </svg>
                </div>
                <p className="text-lg text-slate-300 leading-relaxed font-medium mb-12 relative z-10 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-5 relative z-10">
                  <div className="w-16 h-16 bg-[#111A2D] rounded-full overflow-hidden border-2 border-white/10 group-hover:border-brand-primary/50 transition-colors">
                     <img src={`https://picsum.photos/seed/${testimonial.name.replace(' ', '')}/100`} alt={testimonial.name} className="w-full h-full object-cover filter contrast-125" />
                  </div>
                  <div>
                    <div className="font-bold text-white tracking-wide text-lg">{testimonial.name}</div>
                    <div className="text-sm text-slate-500 font-medium tracking-wide mt-1">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </motion.div>
  );
}
