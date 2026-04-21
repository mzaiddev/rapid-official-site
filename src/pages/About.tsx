import { Users, Target, Award, ArrowRight, CheckCircle2, Linkedin, MapPin, Phone, Mail, Globe, Clock, Rocket, Zap, Brain } from 'lucide-react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-white"
    >
      {/* Hero Section - Digital Transformation style */}
      <section className="relative pt-24 pb-32 lg:pt-40 lg:pb-48 overflow-hidden bg-brand-dark">
        {/* Futuristic Background Patterns */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Tech Circles/Orbits */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand-primary/30 rounded-full opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brand-primary/20 rounded-full opacity-30 border-dashed animate-[spin_60s_linear_infinite]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-brand-primary/10 rounded-full opacity-10 animate-[spin_40s_linear_infinite_reverse]"></div>
          
          {/* Glows */}
          <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-primary/40 rounded-full blur-[120px] opacity-20"></div>
          <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-primary/30 rounded-full blur-[100px] opacity-20"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-bold mb-6 tracking-wide uppercase">
                We're Powering
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white mb-8 leading-[1.1]">
                Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-white to-brand-primary bg-[length:200%_auto] animate-gradient-x">
                  Transformation
                </span>
              </h1>
              <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed font-medium">
                We put in maximal effort to help you create an exceptional operational experience through intelligent ERP architecture.
              </p>
              <button className="group flex items-center gap-3 bg-brand-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-secondary transition-all shadow-xl shadow-brand-primary/20">
                Contact Us <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative z-10 rounded-[3rem] overflow-hidden border-4 border-white/5 shadow-2xl skew-x-3 rotate-2">
                 <img src="https://picsum.photos/seed/tech_future/800/1000" alt="Tech Future" className="w-full h-auto" referrerPolicy="no-referrer" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-primary/40 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">Company Overview</h2>
              <div className="space-y-6 text-slate-600 font-medium leading-relaxed text-lg">
                <p>
                  Rapid is a premier global enterprise software firm that has empowered corporations, global enterprises, and start-ups in their digital journey for over nearly three decades.
                </p>
                <p>
                  We deliver innovative solutions to businesses of all sizes, from start-ups to Fortune 500 companies, to help them achieve their goals. Our team of experts has a wide range of experience and skills, and we're always exploring new technologies to stay at the forefront of the industry.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-brand-primary rounded-[2.5rem] p-1 shadow-2xl relative group"
            >
              <div className="bg-white rounded-[2.2rem] p-8 lg:p-10 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-6 w-full justify-between">
                  <div className="flex items-center gap-2">
                    <div className="bg-brand-primary p-2 rounded-lg text-white">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-slate-800">Let's Connect</span>
                  </div>
                </div>
                
                <div className="text-center mb-8">
                  <div className="text-5xl font-black text-slate-900 mb-2">12.7T+</div>
                  <div className="text-slate-500 font-bold uppercase tracking-widest text-sm">Followers</div>
                </div>

                <div className="flex items-center gap-4 w-full bg-slate-50 rounded-2xl p-4 border border-slate-100">
                  <div className="flex -space-x-4">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-sm">
                        <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="user" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <div className="flex-grow"></div>
                  <button className="flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/20">
                    LinkedIn <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-32 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ x: -100, rotate: -10, opacity: 0 }}
              whileInView={{ x: 0, rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[500px]"
            >
              {/* Circular Professional Collage Effect */}
              <div className="relative aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
                 <img src="https://picsum.photos/seed/office_team/800/800" alt="Team" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-primary rounded-full border-4 border-white -mr-8 mt-8 flex items-center justify-center text-white shadow-xl">
                 <Rocket className="w-10 h-10" />
              </div>
              <div className="absolute bottom-10 -left-10 w-20 h-20 bg-brand-primary/20 rounded-full border-4 border-white flex items-center justify-center text-brand-primary shadow-lg backdrop-blur-md">
                 <Star className="w-8 h-8" />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex-grow max-w-2xl"
            >
              <h2 className="text-4xl font-black text-slate-900 mb-8">Who We Are</h2>
              <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
                <p>
                  Rapid, founded in 1996, is a leading software architecture consulting firm known for its innovative and robust digital solutions. Our team of 150+ full-stack engineers and architects have successfully delivered localized projects globally. We implement your vision into reality using the latest technologies and assisting businesses by using the unmatched expertise of our highly qualified developers.
                </p>
                <p>
                  We are believers of change! A change driven by technology and innovation. Having worked with top-fortune companies and developed numerous on-demand solutions, we have a strong portfolio showcasing our experience. Increase your brand awareness, establish communication with your clients and foster trust using our user-friendly and quality driven enterprise platforms.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 bg-brand-dark text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--color-brand-primary)_0%,_transparent_100%)] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-brand-primary font-black uppercase tracking-widest text-sm mb-4">A Timeline Of Our Journey</h2>
            <div className="h-1 w-20 bg-brand-primary mx-auto mb-6"></div>
            <h3 className="text-3xl font-bold opacity-60">The Rapid History</h3>
          </div>

          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-brand-primary/30 -translate-x-1/2"></div>

            <div className="space-y-24">
              {[
                { year: '1996', title: 'The Genesis', text: 'We started our journey with 5 visionaries working passionately to grow With utmost dedication.', img: 'https://picsum.photos/seed/hist1/400/300' },
                { year: '2005', title: 'Global Reach', text: 'We reached our first major milestone, expanding services to global markets with 40+ specialized engineers.', img: 'https://picsum.photos/seed/hist2/400/300' },
                { year: '2012', title: 'Cloud Revolution', text: 'Pioneered cloud-native ERP architectures, setting a new standard for scalability in high-demand industries.', img: 'https://picsum.photos/seed/hist3/400/300' },
                { year: '2019', title: 'AI Integration', text: 'Started working on Artificial Intelligence and Machine Learning, delivering our first predictive ERP module.', img: 'https://picsum.photos/seed/hist4/400/300' },
                { year: '2024', title: 'The Future', text: '150+ engineers, serving 40+ countries worldwide, powering next-gen market leaders.', img: 'https://picsum.photos/seed/hist5/400/300' },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`flex items-center gap-10 md:gap-20 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className="w-1/2 text-right">
                    {idx % 2 === 0 && (
                      <div className="flex flex-col items-end gap-6 pr-10">
                        <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl w-full max-w-sm">
                           <img src={item.img} alt={item.year} className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                        </div>
                        <p className="text-slate-400 font-medium max-w-xs">{item.text}</p>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 bg-[#050a18] border-4 border-brand-primary rounded-full flex items-center justify-center text-xs font-black shadow-[0_0_20px_rgba(40,168,224,0.5)]">
                      {item.year}
                    </div>
                  </div>

                  <div className="w-1/2">
                    {idx % 2 !== 0 && (
                      <div className="flex flex-col items-start gap-6 pl-10 text-left">
                        <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl w-full max-w-sm">
                           <img src={item.img} alt={item.year} className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                        </div>
                        <p className="text-slate-400 font-medium max-w-xs">{item.text}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Global Contact Section (Shared style) */}
      <section className="py-32 bg-brand-dark overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                 <h2 className="text-4xl font-black text-white mb-12">Global Footprint</h2>
                 <div className="grid sm:grid-cols-2 gap-8 text-slate-400 font-medium uppercase tracking-widest text-[10px]">
                    {[
                       { country: 'UNITED STATES', city: 'Silicon Valley', icon: <Globe className="w-4 h-4" /> },
                       { country: 'UNITED KINGDOM', city: 'London', icon: <Globe className="w-4 h-4" /> },
                       { country: 'INDIA', city: 'Mumbai', icon: <Globe className="w-4 h-4" /> },
                       { country: 'AUSTRALIA', city: 'Sydney', icon: <Globe className="w-4 h-4" /> },
                    ].map((loc, i) => (
                       <div key={i} className="flex items-center gap-4 group cursor-default">
                          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all">
                             {loc.icon}
                          </div>
                          <div>
                             <div className="text-white font-bold">{loc.country}</div>
                             <div className="opacity-60">{loc.city}</div>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white rounded-[3rem] p-8 lg:p-12 shadow-2xl">
                 <h3 className="text-2xl font-black text-slate-900 mb-2">Request Architecture Session</h3>
                 <p className="text-slate-500 font-medium mb-8">Discuss your digital transformation roadmap.</p>
                 <form className="space-y-4">
                    <input type="text" placeholder="Full Name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:border-brand-primary transition-all font-medium" />
                    <input type="email" placeholder="Email Address" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:border-brand-primary transition-all font-medium" />
                    <textarea rows={3} placeholder="Tell us about your project" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 outline-none focus:border-brand-primary transition-all font-medium resize-none"></textarea>
                    <button className="w-full bg-brand-primary text-white py-4 rounded-2xl font-black hover:bg-brand-secondary transition-all shadow-xl shadow-brand-primary/20">
                       SEND ENQUIRY
                    </button>
                 </form>
              </div>
           </div>
        </div>
      </section>
    </motion.div>
  );
}

function Star({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );
}
