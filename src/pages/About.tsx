import { Users, Target, Award, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-24">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/about/1920/500" alt="About Hero" className="w-full h-full object-cover opacity-20" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-block bg-[#d32f2f] text-white text-xs font-bold px-3 py-1 mb-4 rounded-sm tracking-widest uppercase">Our Story</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide">About Us</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Driving digital transformation with innovative software solutions since 1996.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              <span className="text-[#d32f2f] mr-2">|</span>Who We Are
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Rapid is a leading software product development company specializing in ERP solutions, web and mobile app development, and emerging technologies. With over 28 years of experience, we have established ourselves as a trusted partner for businesses worldwide.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our mission is to empower organizations with scalable, efficient, and innovative technology solutions that drive growth and operational excellence. We believe in building lasting partnerships with our clients, understanding their unique challenges, and delivering tailored solutions that exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-red-50 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-[#d32f2f] mb-2">28+</div>
              <div className="text-sm text-slate-600 font-medium">Years Experience</div>
            </div>
            <div className="bg-red-50 p-6 rounded-xl text-center mt-8">
              <div className="text-4xl font-bold text-[#d32f2f] mb-2">150+</div>
              <div className="text-sm text-slate-600 font-medium">Expert Team</div>
            </div>
            <div className="bg-red-50 p-6 rounded-xl text-center -mt-8">
              <div className="text-4xl font-bold text-[#d32f2f] mb-2">8K+</div>
              <div className="text-sm text-slate-600 font-medium">Projects Delivered</div>
            </div>
            <div className="bg-red-50 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-[#d32f2f] mb-2">15+</div>
              <div className="text-sm text-slate-600 font-medium">Countries Served</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-100 shadow-sm p-8 rounded-xl text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#d32f2f]">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Our Mission</h3>
            <p className="text-slate-600 text-sm">To provide innovative and reliable software solutions that empower businesses to achieve their full potential in the digital age.</p>
          </div>
          <div className="bg-white border border-slate-100 shadow-sm p-8 rounded-xl text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#d32f2f]">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Our Vision</h3>
            <p className="text-slate-600 text-sm">To be the global leader in software product development, recognized for our commitment to quality, innovation, and customer success.</p>
          </div>
          <div className="bg-white border border-slate-100 shadow-sm p-8 rounded-xl text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#d32f2f]">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Our Values</h3>
            <p className="text-slate-600 text-sm">Integrity, excellence, collaboration, and continuous improvement are at the core of everything we do.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
