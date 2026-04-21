import { MapPin, Clock, ArrowRight, Briefcase, Users, Star, GraduationCap, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Career() {
  const jobs = [
    { id: 'senior-full-stack', title: 'Senior Full Stack Developer', location: 'Remote / Hybrid', type: 'Full-time', dept: 'Engineering', desc: 'Architect and scale our core high-performance systems.' },
    { id: 'ui-ux-designer', title: 'UI/UX Designer', location: 'On-site', type: 'Full-time', dept: 'Design', desc: 'Craft beautiful, intuitive experiences for enterprise software.' },
    { id: 'erp-specialist', title: 'ERP Implementation Specialist', location: 'Remote', type: 'Full-time', dept: 'Consulting', desc: 'Guide our largest clients through complex migrations.' },
    { id: 'tech-project-manager', title: 'Technical Project Manager', location: 'Hybrid', type: 'Full-time', dept: 'Management', desc: 'Lead cross-functional engineering pods to success.' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-slate-50 relative min-h-screen"
    >
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-slate-950">
        {/* Background Gradients & Effects */}
        <div className="absolute inset-0 z-0 overflow-hidden text-white">
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
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-overlay"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-6">
              <span className="flex h-2 w-2 rounded-full bg-brand-primary"></span>
              Join the Mission
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Do the best work of <br className="hidden md:block"/> your life.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              We're assembling a team of relentless problem solvers. Build software that powers global commerce.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us (Bento) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative -mt-12 z-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: <GraduationCap />, title: "Hyper Growth", color: "text-brand-primary", bg: "bg-brand-primary/5", text: "Continuous learning stipends, dedicated mentorship, and transparent paths to technical or management leadership." },
            { icon: <Users />, title: "Remote-First Culture", color: "text-emerald-500", bg: "bg-emerald-50", text: "Work from anywhere. We provide top-tier home office equipment and emphasize async execution over meetings." },
            { icon: <Star />, title: "Elite Compensation", color: "text-brand-primary", bg: "bg-brand-primary/5", text: "Top 90th percentile salaries, meaningful equity packages, and comprehensive Platinum health coverage." },
          ].map((item, id) => (
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: id * 0.1 + 0.3 }}
              key={id} className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 group hover:-translate-y-1 transition-transform"
            >
              <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                 {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 font-medium leading-relaxed text-sm">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Job Board */}
      <section className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3">Open Roles</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              Join the Engineering Pods.
            </h3>
          </div>
        </div>
        
        <div className="space-y-4">
          {jobs.map((job, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-8 rounded-3xl hover:shadow-xl hover:shadow-slate-200/50 hover:border-brand-primary/30 transition-all group flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex-grow">
                <div className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Briefcase className="w-3.5 h-3.5" />
                  {job.dept}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-brand-primary transition-colors">{job.title}</h3>
                <p className="text-slate-500 font-medium text-sm mb-4">{job.desc}</p>
                <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-600">
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 rounded-lg"><MapPin className="w-4 h-4 text-slate-400" /> {job.location}</span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-50 rounded-lg"><Clock className="w-4 h-4 text-slate-400" /> {job.type}</span>
                </div>
              </div>
              <Link 
                to={`/career/${job.id}`}
                state={{ job }}
                className="flex-shrink-0 bg-slate-900 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-brand-primary transition-colors flex items-center gap-2 w-full md:w-auto justify-center"
              >
                Apply Now <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
