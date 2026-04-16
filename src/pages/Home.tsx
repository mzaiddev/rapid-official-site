import { Link } from 'react-router-dom';
import { 
  Briefcase, Globe, Building2, Users, CheckCircle, Smile, 
  Languages, Settings, ArrowUpCircle, Link as LinkIcon,
  ShoppingCart, Truck, Car, Stethoscope, Pill, Hotel, Utensils,
  GraduationCap, Factory, Droplet, ArrowRight
} from 'lucide-react';

export default function Home() {
  const stats = [
    { icon: <Briefcase className="w-6 h-6 text-emerald-500" />, value: '28+', label: 'Years' },
    { icon: <Globe className="w-6 h-6 text-rose-500" />, value: '15+', label: 'Country' },
    { icon: <Building2 className="w-6 h-6 text-purple-500" />, value: '15+', label: 'Industries' },
    { icon: <Users className="w-6 h-6 text-blue-500" />, value: '30+', label: 'Experts' },
    { icon: <CheckCircle className="w-6 h-6 text-green-500" />, value: '8K+', label: 'Projects' },
    { icon: <Smile className="w-6 h-6 text-amber-500" />, value: '5K+', label: 'Customers' },
  ];

  const testimonials = [
    { name: 'Sophia Anderson', role: 'CEO', text: 'The bilingual support in Rapid\'s ERP system is perfect for our diverse workforce. It\'s very efficient. Rapid\'s team understood our needs and provided a solution that exceeded our expectations.' },
    { name: 'Rafid Hasan', role: 'Manager', text: 'Rapid\'s ERP solution has transformed our business operations. From inventory to payroll, everything runs seamlessly now. Their support team is always ready to assist, ensuring a smooth experience.' },
    { name: 'Mahmudul Alam', role: 'COO', text: 'We needed an ERP system that could grow with our company, and Rapid delivered beyond our expectations. Their customization options and user-friendly interface have been game-changers.' },
    { name: 'Elena Rodriguez', role: 'Operations Director', text: 'The implementation process was incredibly smooth. Rapid ERP has given us unprecedented visibility into our supply chain, allowing us to cut costs by 15% in just six months.' },
    { name: 'David Chen', role: 'CFO', text: 'Financial reporting used to take days. With Rapid ERP, we generate comprehensive, accurate reports in minutes. The ROI has been phenomenal.' }
  ];

  const whyChooseUs = [
    {
      icon: <Languages className="w-8 h-8 text-blue-500" />,
      title: 'Bilingual',
      description: 'Support for multiple languages ensures a global reach and localized operations, fostering inclusivity and growth.',
      bg: 'bg-blue-50'
    },
    {
      icon: <Settings className="w-8 h-8 text-purple-500" />,
      title: 'Customizable',
      description: 'Rapid ERP solutions are fully adaptable to meet your business\'s unique needs, offering flexibility and efficiency.',
      bg: 'bg-purple-50'
    },
    {
      icon: <ArrowUpCircle className="w-8 h-8 text-green-500" />,
      title: 'Upgradable',
      description: 'Our solutions grow with your business, providing effortless upgrades to keep you ahead in a competitive market.',
      bg: 'bg-green-50'
    },
    {
      icon: <LinkIcon className="w-8 h-8 text-rose-500" />,
      title: 'Integration',
      description: 'Rapid ensures all your systems work together seamlessly, creating a unified platform for smooth business operations.',
      bg: 'bg-rose-50'
    }
  ];

  const products = [
    { icon: <ShoppingCart className="w-5 h-5 text-blue-500" />, title: 'Supermarket ERP', tags: 'On-Premises · Cloud · Hybrid', desc: 'Optimize your retail operations with our software, simplifying accounting, inventory, sales, and purchase processes.' },
    { icon: <Car className="w-5 h-5 text-blue-500" />, title: 'Automotive ERP', tags: 'On-Premises · Cloud · Hybrid', desc: 'Optimize automotive operations with integrated tools for inventory, sales, service management, and customer engagement.' },
    { icon: <Truck className="w-5 h-5 text-blue-500" />, title: 'Distribution ERP', tags: 'On-Premises · Cloud · Hybrid', desc: 'Streamline supply chain operations with advanced tools for inventory, logistics, and vendor management.' },
    { icon: <Building2 className="w-5 h-5 text-blue-500" />, title: 'Hospital ERP', tags: 'On-Premises · Cloud · Hybrid', desc: 'Streamline hospital operations with comprehensive tools for patient care, billing, inventory, and regulatory compliance.' },
    { icon: <Stethoscope className="w-5 h-5 text-blue-500" />, title: 'Clinic ERP', tags: 'On-Premises · Cloud · Hybrid', desc: 'Enhance clinic efficiency with tailored solutions for patient care, scheduling, billing, and streamlined operations.' },
    { icon: <Pill className="w-5 h-5 text-blue-500" />, title: 'Pharmacy ERP', tags: 'On-Premises · Cloud · Hybrid', desc: 'Optimize your pharmacy operations with advanced tools for inventory, billing, sales tracking, and regulatory compliance.' },
    { icon: <Hotel className="w-5 h-5 text-blue-500" />, title: 'Hotel ERP', tags: 'On-Premises · Cloud · Hybrid', desc: 'Streamline hotel operations and enhance guest experiences with our all-in-one hotel management solution.' },
    { icon: <Utensils className="w-5 h-5 text-blue-500" />, title: 'Restaurant ERP', tags: 'On-Premises · Cloud · Hybrid', desc: 'Optimize restaurant operations and enhance customer satisfaction with our comprehensive restaurant management system.' },
  ];

  const industries = [
    { icon: <ShoppingCart className="w-6 h-6" />, name: 'Retail' },
    { icon: <Truck className="w-6 h-6" />, name: 'Distribution' },
    { icon: <Car className="w-6 h-6" />, name: 'Automotive' },
    { icon: <Hotel className="w-6 h-6" />, name: 'Hospitality' },
    { icon: <Stethoscope className="w-6 h-6" />, name: 'Healthcare' },
    { icon: <Briefcase className="w-6 h-6" />, name: 'Financial' },
    { icon: <Pill className="w-6 h-6" />, name: 'Pharmaceutical' },
    { icon: <ShoppingCart className="w-6 h-6" />, name: 'Garment' },
    { icon: <GraduationCap className="w-6 h-6" />, name: 'Education' },
    { icon: <Factory className="w-6 h-6" />, name: 'Manufacturing' },
    { icon: <Truck className="w-6 h-6" />, name: 'Logistics' },
    { icon: <Droplet className="w-6 h-6" />, name: 'Oil and Gas' },
  ];

  const services = [
    'ERP Development', 'Web Development', 'Mobile App Development',
    'Biometric Solutions', 'RFID Solution', 'Dedicated Team'
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/erp/1920/1080" alt="Hero Background" className="w-full h-full object-cover opacity-30" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              Transform Your Business with <span className="text-[#28a8e0]">Intelligent ERP</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Empower your enterprise with scalable, secure, and customizable software tailored to your industry. Drive growth and operational excellence with Rapid.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-[#28a8e0] text-white px-8 py-4 rounded-md font-medium hover:bg-sky-500 transition-colors flex items-center gap-2 text-lg">
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/services" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-md font-medium hover:bg-white/20 transition-colors text-lg">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className="p-3 bg-slate-50 rounded-full">{stat.icon}</div>
                <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-2">
              <span className="text-[#28a8e0] mr-2">|</span>Why Choose <span className="text-[#28a8e0]">Rapid ERP</span>
            </h2>
            <p className="text-slate-600 mb-8 max-w-lg">
              Rapid ERP solutions offers seamless business transformation through cutting-edge technology tailored to your needs. Whether you seek to streamline operations, enhance productivity, or adapt to market demands, Rapid ensures efficiency and scalability for your enterprise.
            </p>
            <button className="bg-slate-800 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-700 transition-colors flex items-center gap-2">
              Learn more <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className={`${item.bg} p-6 rounded-xl`}>
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-100 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40">
           <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
           <div className="absolute top-1/2 right-0 w-64 h-64 bg-sky-200 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-4xl font-bold text-slate-800">
              <span className="text-[#28a8e0] mr-2">|</span>Explore by <span className="text-[#28a8e0]">Products</span>
            </h2>
            <Link to="/products" className="hidden sm:flex bg-slate-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition-colors items-center gap-2">
              EXPLORE MORE <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((product, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-white/50">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 bg-sky-50 rounded-lg">{product.icon}</div>
                  <div>
                    <h3 className="font-bold text-slate-800">{product.title}</h3>
                    <p className="text-xs text-slate-500 mt-1">{product.tags}</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 mb-4 h-10 line-clamp-2">{product.desc}</p>
                <div className="flex justify-end">
                  <button className="text-[#28a8e0] text-sm font-medium flex items-center gap-1 hover:underline">
                    Get Started <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-4xl font-bold text-slate-800">
            <span className="text-[#28a8e0] mr-2">|</span>Explore solutions by <span className="text-[#28a8e0]">Industry</span>
          </h2>
          <Link to="/industries" className="hidden sm:flex bg-slate-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition-colors items-center gap-2">
            EXPLORE MORE <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {industries.map((ind, idx) => (
            <Link key={idx} to="/industries" className="flex flex-col items-center justify-center p-6 border border-slate-200 rounded-xl hover:border-[#28a8e0] hover:text-[#28a8e0] transition-colors group text-slate-600">
              <div className="mb-3 text-[#28a8e0] group-hover:scale-110 transition-transform">{ind.icon}</div>
              <span className="text-sm font-medium text-center">{ind.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-4xl font-bold text-slate-800">
              <span className="text-[#28a8e0] mr-2">|</span>Our <span className="text-[#28a8e0]">Services</span>
            </h2>
            <Link to="/services" className="hidden sm:flex bg-slate-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition-colors items-center gap-2">
              EXPLORE MORE <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {services.map((service, idx) => (
              <Link key={idx} to="/services" className="flex items-center justify-between p-6 bg-white border border-slate-200 rounded-xl hover:border-[#28a8e0] hover:shadow-sm transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-50 flex items-center justify-center text-[#28a8e0]">
                    <Settings className="w-5 h-5" />
                  </div>
                  <span className="font-medium text-slate-800 group-hover:text-[#28a8e0] transition-colors">{service}</span>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-[#28a8e0] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6 leading-tight">
              We build lasting<br />partnerships with our<br />clients
            </h2>
            <button className="bg-slate-800 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-700 transition-colors flex items-center gap-2">
              ABOUT US <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            <div>
              <div className="text-4xl font-bold text-slate-800 flex items-start gap-1">
                30+ <ArrowRight className="w-5 h-5 text-slate-400 -rotate-45" />
              </div>
              <p className="text-sm text-slate-500 mt-2">With 30+ years of experience, we have earned numerous awards.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-800 flex items-start gap-1">
                23+ <ArrowRight className="w-5 h-5 text-slate-400 -rotate-45" />
              </div>
              <p className="text-sm text-slate-500 mt-2">We have offices in four countries worldwide.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-800 flex items-start gap-1">
                150+ <ArrowRight className="w-5 h-5 text-slate-400 -rotate-45" />
              </div>
              <p className="text-sm text-slate-500 mt-2">We have a team of over 150 certified full-time professionals.</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-800 flex items-start gap-1">
                250+ <ArrowRight className="w-5 h-5 text-slate-400 -rotate-45" />
              </div>
              <p className="text-sm text-slate-500 mt-2">We have successfully implemented over 2,500 projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-4xl font-bold text-slate-800">
            <span className="text-[#28a8e0] mr-2">|</span>What <span className="text-[#28a8e0]">Our Clients</span> Says
          </h2>
        </div>
        
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-50%)); }
            }
            .animate-scroll {
              animation: scroll 40s linear infinite;
              width: max-content;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}
        </style>

        <div className="relative w-full">
          {/* Gradient masks for smooth fade on edges */}
          <div className="absolute top-0 left-0 w-12 md:w-32 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-12 md:w-32 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div key={idx} className="w-[320px] md:w-[450px] flex-shrink-0 px-4">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full border border-slate-100">
                  <div className="p-8 flex-grow relative">
                    <div className="absolute top-6 left-6 text-6xl text-sky-100 font-serif leading-none">"</div>
                    <p className="text-slate-600 relative z-10 text-sm leading-relaxed italic mt-4">
                      {testimonial.text}
                    </p>
                  </div>
                  <div className="bg-[#28a8e0] p-4 text-white flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
                      <img src={`https://picsum.photos/seed/${testimonial.name.replace(' ', '')}/100/100`} alt={testimonial.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <div className="font-bold">{testimonial.name}</div>
                      <div className="text-xs text-sky-100">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
