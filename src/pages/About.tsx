import { Users, Target, Award, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-[#28a8e0] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-auto" preserveAspectRatio="none">
            <path fill="#ffffff" fillOpacity="1" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,181.3C672,192,768,160,864,133.3C960,107,1056,85,1152,90.7C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-sky-100 max-w-2xl mx-auto text-lg">
            Driving digital transformation with innovative software solutions since 1996.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              <span className="text-[#28a8e0] mr-2">|</span>Who We Are
            </h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Rapid is a leading software product development company specializing in ERP solutions, web and mobile app development, and emerging technologies. With over 28 years of experience, we have established ourselves as a trusted partner for businesses worldwide.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Our mission is to empower organizations with scalable, efficient, and innovative technology solutions that drive growth and operational excellence. We believe in building lasting partnerships with our clients, understanding their unique challenges, and delivering tailored solutions that exceed expectations.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-sky-50 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-[#28a8e0] mb-2">28+</div>
              <div className="text-sm text-slate-600 font-medium">Years Experience</div>
            </div>
            <div className="bg-sky-50 p-6 rounded-xl text-center mt-8">
              <div className="text-4xl font-bold text-[#28a8e0] mb-2">150+</div>
              <div className="text-sm text-slate-600 font-medium">Expert Team</div>
            </div>
            <div className="bg-sky-50 p-6 rounded-xl text-center -mt-8">
              <div className="text-4xl font-bold text-[#28a8e0] mb-2">8K+</div>
              <div className="text-sm text-slate-600 font-medium">Projects Delivered</div>
            </div>
            <div className="bg-sky-50 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-[#28a8e0] mb-2">15+</div>
              <div className="text-sm text-slate-600 font-medium">Countries Served</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-100 shadow-sm p-8 rounded-xl text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#28a8e0]">
              <Target className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Our Mission</h3>
            <p className="text-slate-600 text-sm">To provide innovative and reliable software solutions that empower businesses to achieve their full potential in the digital age.</p>
          </div>
          <div className="bg-white border border-slate-100 shadow-sm p-8 rounded-xl text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#28a8e0]">
              <Users className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-4">Our Vision</h3>
            <p className="text-slate-600 text-sm">To be the global leader in software product development, recognized for our commitment to quality, innovation, and customer success.</p>
          </div>
          <div className="bg-white border border-slate-100 shadow-sm p-8 rounded-xl text-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-sky-50 rounded-full flex items-center justify-center mx-auto mb-6 text-[#28a8e0]">
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
