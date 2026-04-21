import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-slate-50 min-h-screen"
    >
      {/* Split Hero / Form Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-brand-dark">
        {/* Background Gradients & Effects */}
        <div className="absolute inset-0 z-0 overflow-hidden text-white">
           {/* Primary Brand Glows */}
           <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-brand-primary/20 blur-[120px] rounded-full animate-pulse transition-opacity duration-1000"></div>
           <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand-primary/10 blur-[100px] rounded-full transition-opacity duration-1000"></div>
           
           {/* Slanted Geometric Shapes (Matching Image) */}
           <div className="absolute inset-0 z-0 flex justify-center opacity-40">
              <div className="relative w-full h-full max-w-7xl">
                 <div className="absolute top-0 left-[-10%] w-1/4 h-full bg-brand-primary/10 -skew-x-12 translate-x-[-20%]"></div>
                 <div className="absolute top-0 left-[15%] w-1/3 h-full bg-brand-primary/5 -skew-x-12"></div>
                 <div className="absolute top-0 left-[50%] w-1/4 h-full bg-brand-primary/10 -skew-x-12 translate-x-[20%]"></div>
                 <div className="absolute top-0 right-[-10%] w-1/3 h-full bg-brand-primary/15 -skew-x-12 translate-x-[40%]"></div>
              </div>
           </div>

           {/* Center Atmospheric Glow */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_var(--color-brand-primary)_0%,_transparent_70%)] opacity-10"></div>
           
           {/* Subtle Grid Pattern Overlay */}
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Left Side: Copy & Info */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-brand-primary"></span>
                        Contact Us
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
                        Let's build something <br className="hidden md:block"/> incredible.
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed mb-12">
                        Whether you are looking for an enterprise overhaul or custom software development, our team of engineers and architects are ready.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-5">
                            <div className="w-14 h-14 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center text-brand-primary flex-shrink-0 shadow-inner shadow-black/50">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg mb-1">Global HQ</h3>
                                <p className="text-slate-400 font-medium leading-relaxed">
                                    123 Tech Boulevard, Innovation District<br />
                                    Silicon Valley, CA 94043, USA
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-5">
                            <div className="w-14 h-14 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center text-brand-primary flex-shrink-0 shadow-inner shadow-black/50">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg mb-1">Phone</h3>
                                <p className="text-slate-400 font-medium leading-relaxed">
                                    +1 (555) 123-4567<br />
                                    +1 (555) 987-6543
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start gap-5">
                            <div className="w-14 h-14 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center text-brand-primary flex-shrink-0 shadow-inner shadow-black/50">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-lg mb-1">Email</h3>
                                <p className="text-slate-400 font-medium leading-relaxed">
                                    info@rapid-erp.com<br />
                                    support@rapid-erp.com
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Form */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl relative"
                >
                    <div className="absolute -top-6 -right-6 w-24 h-24 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-primary/20 via-transparent to-transparent blur-xl"></div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a Message</h3>
                    <p className="text-sm font-medium text-slate-500 mb-8">We usually respond within a few hours.</p>

                    <form className="space-y-5">
                        <div className="grid md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">First Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all focus:bg-brand-primary/5" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Last Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all focus:bg-brand-primary/5" placeholder="Doe" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address</label>
                            <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all focus:bg-brand-primary/5" placeholder="john@company.com" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Subject</label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all focus:bg-brand-primary/5" placeholder="How can we help?" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Message</label>
                            <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all resize-none focus:bg-brand-primary/5" placeholder="Tell us about your project..."></textarea>
                        </div>
                        <button type="button" className="w-full bg-brand-primary text-white px-6 py-4 rounded-xl font-bold hover:bg-brand-secondary transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/30 mt-2 active:scale-[0.98]">
                            Send Message <Send className="w-4 h-4 ml-1" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </div>
      </section>

      {/* Global Map aesthetic */}
      <section className="py-24 bg-white hidden lg:block overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">A Global Presence</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto">Operating across multiple timezones to provide 24/7 engineering support and rapid development cycles.</p>
         </div>
         {/* Placeholder for map */}
         <div className="w-full max-w-5xl mx-auto h-64 border-t border-b border-dashed border-slate-300 bg-slate-50 flex items-center justify-center rounded-[3rem] relative opacity-60">
             <div className="absolute w-[800px] h-[400px] rounded-[100%] border border-slate-200 border-dashed transform rotate-[-10deg]"></div>
             <div className="absolute w-[600px] h-[300px] rounded-[100%] border border-slate-200 border-dashed transform rotate-[-5deg]"></div>
             <div className="absolute w-[400px] h-[200px] rounded-[100%] border border-slate-200 border-dashed"></div>
             
             <div className="absolute top-1/3 left-1/4 w-3 h-3 bg-brand-primary rounded-full shadow-[0_0_15px_rgba(40,168,224,1)] animate-pulse"></div>
             <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-brand-primary rounded-full shadow-[0_0_15px_rgba(40,168,224,1)] animate-pulse"></div>
             <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-emerald-500 rounded-full shadow-[0_0_15px_rgba(16,185,129,1)] animate-pulse"></div>
         </div>
      </section>
    </motion.div>
  );
}
