import { MapPin, Clock, ArrowLeft, Briefcase, Paperclip, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useLocation, Link, Navigate, useParams } from 'react-router-dom';

export default function JobApplication() {
  const { state } = useLocation();
  const { id } = useParams();

  // If accessed directly without state
  if (!state || !state.job) {
    return <Navigate to="/career" replace />;
  }

  const { job } = state;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-slate-50 min-h-screen pb-24"
    >
      {/* Header Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20 overflow-hidden bg-slate-900 border-b border-slate-800">
         <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-primary rounded-full blur-[100px] opacity-20 -translate-y-1/2"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/career" className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-secondary transition-colors text-sm font-bold mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Careers
          </Link>
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-800/80 text-slate-300 text-xs font-bold mb-6 tracking-wide uppercase">
             <Briefcase className="w-3.5 h-3.5" /> {job.dept}
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {job.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-300">
            <span className="flex items-center gap-1.5 px-4 py-2 bg-slate-800/80 rounded-lg"><MapPin className="w-4 h-4 text-brand-primary" /> {job.location}</span>
            <span className="flex items-center gap-1.5 px-4 py-2 bg-slate-800/80 rounded-lg"><Clock className="w-4 h-4 text-emerald-400" /> {job.type}</span>
          </div>
        </div>
      </section>

      {/* Application Form Area */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-200 overflow-hidden">
            <div className="p-8 md:p-12 border-b border-slate-100 bg-slate-50">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Submit your application</h3>
                <p className="text-slate-500 font-medium">Please fill out the form below. We will review your application and get back to you within 3-5 business days.</p>
            </div>
            
            <div className="p-8 md:p-12">
            <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">First Name *</label>
                    <input type="text" className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all focus:bg-brand-primary/5" placeholder="Jane" />
                </div>
                <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Last Name *</label>
                    <input type="text" className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all focus:bg-brand-primary/5" placeholder="Doe" />
                </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email Address *</label>
                  <input type="email" className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all focus:bg-brand-primary/5" placeholder="jane@example.com" />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all focus:bg-brand-primary/5" placeholder="+1 (555) 000-0000" />
                </div>

                <hr className="border-slate-100 my-8" />
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">LinkedIn Profile (Optional)</label>
                  <input type="url" className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all focus:bg-brand-primary/5" placeholder="https://linkedin.com/in/username" />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Portfolio / GitHub (Optional)</label>
                  <input type="url" className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all focus:bg-brand-primary/5" placeholder="https://github.com/username" />
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Resume / CV *</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-xl hover:border-brand-primary hover:bg-brand-primary/5 transition-colors cursor-pointer group">
                      <div className="space-y-1 text-center">
                      <Paperclip className="mx-auto h-12 w-12 text-slate-400 group-hover:text-brand-primary transition-colors" />
                      <div className="flex text-sm text-slate-600 justify-center">
                          <label className="relative cursor-pointer bg-transparent rounded-md font-bold text-brand-primary focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-primary">
                          <span>Upload a file</span>
                          <input type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-slate-500 font-medium text-center">PDF, DOC, DOCX up to 10MB</p>
                      </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Cover Letter (Optional)</label>
                  <textarea rows={5} className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary outline-none transition-all resize-none focus:bg-brand-primary/5" placeholder="Tell us why you're a great fit for this specific role..."></textarea>
                </div>
                
                <div className="pt-4">
                    <button type="button" className="w-full bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-primary transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-sky-500/30 text-lg">
                        Submit Application <Send className="w-5 h-5 ml-1" />
                    </button>
                    <p className="text-center text-xs text-slate-500 font-medium mt-4">By applying, you agree to our Candidate Privacy Policy.</p>
                </div>
            </form>
            </div>
        </div>
      </section>
    </motion.div>
  );
}
