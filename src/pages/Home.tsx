import { Link } from 'react-router-dom';
import { 
  Briefcase, Globe, Building2, Users, CheckCircle, Smile, 
  Languages, Settings, ArrowUpCircle, Link as LinkIcon,
  ShoppingCart, Truck, Car, Stethoscope, Pill, Hotel, Utensils,
  GraduationCap, Factory, Droplet, ArrowRight, Activity, Zap, Shield, ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const stats = [
    { icon: <Briefcase className="w-5 h-5 text-brand-primary" />, value: '28+', label: 'Years Experience' },
    { icon: <Globe className="w-5 h-5 text-brand-primary" />, value: '15+', label: 'Global Presense' },
    { icon: <Building2 className="w-5 h-5 text-brand-primary" />, value: '15+', label: 'Key Industries' },
    { icon: <Users className="w-5 h-5 text-brand-primary" />, value: '30+', label: 'Enterprise Experts' },
    { icon: <CheckCircle className="w-5 h-5 text-brand-primary" />, value: '8K+', label: 'Successful Projects' },
    { icon: <Smile className="w-5 h-5 text-brand-primary" />, value: '5K+', label: 'Happy Customers' },
  ];

  const whyChooseUs = [
    { icon: <Languages className="w-6 h-6 text-white" />, title: 'Bilingual Core', description: 'Native support for multiple languages ensures seamless operations globally.' },
    { icon: <Settings className="w-6 h-6 text-white" />, title: 'Highly Customizable', description: 'Fully adaptable architecture to meet the strict demands of your distinct workflows.' },
    { icon: <ArrowUpCircle className="w-6 h-6 text-white" />, title: 'Effortlessly Upgradable', description: 'Continuous deployment of cloud-native upgrades keeping you ahead of the curve.' },
    { icon: <LinkIcon className="w-6 h-6 text-white" />, title: 'API Integration', description: 'Unified data layers seamlessly sync with external vendors and legacy infrastructures.' }
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
      className="flex flex-col bg-white"
    >
      {/* Modern SaaS Hero */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-950">
         {/* Background Gradients & Effects */}
        <div className="absolute inset-0 z-0 overflow-hidden">
           {/* Primary Brand Glows */}
           <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-brand-primary/20 blur-[120px] rounded-full animate-pulse transition-opacity duration-1000"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-primary/10 blur-[100px] rounded-full transition-opacity duration-1000"></div>
           
           {/* Slanted Geometric Shapes (Matching Image) */}
           <div className="absolute inset-0 z-0 flex justify-center opacity-30">
              <div className="relative w-full h-full max-w-7xl">
                 <div className="absolute top-0 left-[-10%] w-1/4 h-full bg-brand-primary/5 -skew-x-12 translate-x-[-20%]"></div>
                 <div className="absolute top-0 left-[15%] w-1/3 h-full bg-brand-primary/[0.03] -skew-x-12"></div>
                 <div className="absolute top-0 left-[50%] w-1/4 h-full bg-brand-primary/5 -skew-x-12 translate-x-[20%]"></div>
                 <div className="absolute top-0 right-[-10%] w-1/3 h-full bg-brand-primary/[0.08] -skew-x-12 translate-x-[40%]"></div>
              </div>
           </div>

           {/* Center Atmospheric Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_var(--color-brand-primary)_0%,_transparent_70%)] opacity-10"></div>
           
           {/* Subtle Grid Pattern Overlay */}
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm font-medium mb-8 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                Trusted by 5,000+ global businesses
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
                Unified Enterprise <br />
                <span className="text-brand-primary">Management</span> System.
              </h1>
              
              <p className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl">
                Providing thousands of enterprises with outstanding operational control and real-time visibility. Get started in under 3 minutes — no complex hardware required.
              </p>
              
              <div className="flex flex-wrap gap-5">
                <Link to="/contact" className="btn-primary">
                  Sign Up Now
                </Link>
                <Link to="/services" className="btn-outline">
                  Try It Out
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-brand-secondary rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="flex items-center gap-1.5 px-4 h-10 bg-white/5 border-b border-white/5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                  </div>
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" className="w-full h-auto opacity-95" alt="Guest Tracking Dashboard" referrerPolicy="no-referrer" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Bottom Stats */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 border-t border-white/5 pt-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { value: '5,000+', label: 'Global Businesses' },
              { value: '25M+', label: 'Reports Processed' },
              { value: 'AES-256', label: 'Military-Grade Encryption' },
              { value: 'CLOUD', label: 'Data Hosted Securely' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center lg:text-left">
                <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features - Bento Grid Style */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3">Enterprise Core</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
            Built for modern businesses that <span className="opacity-40">demand more.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, idx) => (
            <motion.div 
              whileHover={{ y: -5 }}
              key={idx} 
              className="bg-slate-900 rounded-3xl p-8 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary rounded-full blur-[80px] group-hover:bg-sky-400 transition-colors opacity-20"></div>
              <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/5">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Product Modules / Clean Cards */}
      <section className="py-24 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <h2 className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3">Vertical Solutions</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                Specialized ERP suites.
              </h3>
            </div>
            <Link to="/products" className="hidden sm:inline-flex items-center gap-2 font-bold text-brand-primary hover:text-sky-700 transition-colors">
              View All Modules <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, idx) => (
              <Link to="/services" key={idx} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 group flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/5 text-brand-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    {product.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 group-hover:text-brand-primary transition-colors">{product.title}</h4>
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{product.tags}</span>
                  </div>
                </div>
                <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center text-sm font-bold text-slate-500 group-hover:text-slate-900">
                  Explore Solution
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global Partnership Text */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-brand-primary blur-[150px] opacity-20 rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-9xl font-medium tracking-tight opacity-90 leading-tight mb-8">
            <span className="italic">Built</span> to last.
          </h2>
          <p className="text-xl md:text-3xl text-slate-300 font-light max-w-3xl mx-auto mb-12">
            Over three decades, we have forged resilient partnerships with brilliant businesses across the globe.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-slate-200 transition-colors">
            Discover Our Story
          </Link>
        </div>
      </section>

      {/* Minimal Testimonials Marquee */}
      <section className="py-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3">Client Success</h2>
          <h3 className="text-3xl font-bold text-slate-900">Loved by industry leaders</h3>
        </div>

        <div className="flex gap-6 px-4 animate-scroll max-w-[200vw] sm:max-w-none justify-center flex-wrap sm:flex-nowrap">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="w-full sm:w-[500px] flex-shrink-0 bg-slate-50 border border-slate-100 p-10 rounded-3xl">
                <div className="text-brand-primary mb-6">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.017 21L16.411 14.596H11.205V3H21V11.233L18.435 21H14.017ZM3.811 21L6.205 14.596H1V3H10.795V11.233L8.23 21H3.811Z"/>
                  </svg>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed font-medium mb-8">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                     <img src={`https://picsum.photos/seed/${testimonial.name.replace(' ', '')}/100`} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    </motion.div>
  );
}
