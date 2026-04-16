import { MapPin, Clock, ArrowRight, X } from 'lucide-react';
import { useState } from 'react';

export default function Career() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const jobs = [
    { title: 'Senior Full Stack Developer', location: 'Remote / Hybrid', type: 'Full-time', dept: 'Engineering' },
    { title: 'UI/UX Designer', location: 'On-site', type: 'Full-time', dept: 'Design' },
    { title: 'ERP Implementation Specialist', location: 'Remote', type: 'Full-time', dept: 'Consulting' },
    { title: 'Project Manager', location: 'Hybrid', type: 'Full-time', dept: 'Management' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-24">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/career/1920/500" alt="Career Hero" className="w-full h-full object-cover opacity-20" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-block bg-[#d32f2f] text-white text-xs font-bold px-3 py-1 mb-4 rounded-sm tracking-widest uppercase">Careers</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide">Join Our Team</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Build your career with a global leader in software product development. We're always looking for passionate talent.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Work With Us?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            At Rapid, we foster a culture of innovation, continuous learning, and collaboration. We offer competitive benefits, flexible working arrangements, and opportunities to work on cutting-edge technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-red-50 p-6 rounded-xl text-center">
            <h3 className="font-bold text-slate-800 mb-2">Growth Opportunities</h3>
            <p className="text-sm text-slate-600">Continuous learning programs and clear career progression paths.</p>
          </div>
          <div className="bg-red-50 p-6 rounded-xl text-center">
            <h3 className="font-bold text-slate-800 mb-2">Global Exposure</h3>
            <p className="text-sm text-slate-600">Work with international clients across 15+ countries.</p>
          </div>
          <div className="bg-red-50 p-6 rounded-xl text-center">
            <h3 className="font-bold text-slate-800 mb-2">Work-Life Balance</h3>
            <p className="text-sm text-slate-600">Flexible working hours and hybrid/remote options available.</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-slate-800 mb-8">
          <span className="text-[#d32f2f] mr-2">|</span>Open Positions
        </h2>
        
        <div className="space-y-4">
          {jobs.map((job, idx) => (
            <div key={idx} className="bg-white border border-slate-200 p-6 rounded-xl hover:border-[#d32f2f] hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group">
              <div>
                <div className="text-xs font-semibold text-[#d32f2f] uppercase tracking-wider mb-2">{job.dept}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-[#d32f2f] transition-colors">{job.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {job.type}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedJob(job.title)}
                className="bg-slate-100 text-slate-700 px-6 py-2 rounded-md font-medium hover:bg-[#d32f2f] hover:text-white transition-colors flex items-center gap-2 w-fit"
              >
                Apply Now <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Apply Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center sticky top-0 bg-white z-10">
              <h3 className="text-2xl font-bold text-slate-800">Apply for {selectedJob}</h3>
              <button 
                onClick={() => setSelectedJob(null)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-slate-500" />
              </button>
            </div>
            
            <div className="p-6">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#d32f2f] focus:border-transparent outline-none transition-all" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#d32f2f] focus:border-transparent outline-none transition-all" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#d32f2f] focus:border-transparent outline-none transition-all" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#d32f2f] focus:border-transparent outline-none transition-all" placeholder="+1 (555) 000-0000" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">LinkedIn Profile URL</label>
                  <input type="url" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#d32f2f] focus:border-transparent outline-none transition-all" placeholder="https://linkedin.com/in/johndoe" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Resume / CV</label>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center hover:border-[#d32f2f] transition-colors cursor-pointer bg-slate-50">
                    <p className="text-slate-600 mb-2">Drag and drop your resume here, or click to browse</p>
                    <p className="text-xs text-slate-400">Supported formats: PDF, DOCX (Max 5MB)</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Cover Letter (Optional)</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#d32f2f] focus:border-transparent outline-none transition-all resize-none" placeholder="Tell us why you're a great fit..."></textarea>
                </div>

                <button type="button" className="w-full bg-[#d32f2f] text-white px-6 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors text-lg">
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
