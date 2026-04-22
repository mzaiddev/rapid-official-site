import { useState, useRef, useEffect } from 'react';
import { CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useSearchParams } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Services() {
  const [searchParams] = useSearchParams();
  const initialService = searchParams.get('service') || 'ERP Development';
  const [activeService, setActiveService] = useState(initialService);
  const scrollContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchParams.get('service')) {
      setActiveService(searchParams.get('service') as string);
    }
  }, [searchParams]);

  useEffect(() => {
    if (scrollContainer.current) {
      // Small timeout to ensure DOM has rendered the new active state
      setTimeout(() => {
        const activeTab = scrollContainer.current?.querySelector<HTMLElement>('[data-active="true"]');
        if (activeTab && scrollContainer.current) {
          const container = scrollContainer.current;
          const containerRect = container.getBoundingClientRect();
          const tabRect = activeTab.getBoundingClientRect();
          
          // Calculate the horizontal center of the tab relative to the container
          const containerCenter = containerRect.width / 2;
          const tabCenter = (tabRect.left - containerRect.left) + (tabRect.width / 2);
          
          // Scroll by the difference to center the tab
          const scrollByAmount = tabCenter - containerCenter;
          
          container.scrollBy({ left: scrollByAmount, behavior: 'smooth' });
        }
      }, 50);
    }
  }, [activeService]);

  const servicesList = [
    'ERP Development',
    'Web Development',
    'App Development',
    'Biometric Solutions',
    'IoT Solutions',
    'AI & ML Solutions',
    'UI / UX Design',
    'DevOps',
    'Middleware Solutions',
    'BigData Solutions',
    'RFID Solutions',
    'CyberSecurity'
  ];

  const serviceDetails = {
    'ERP Development': {
      title: 'ERP Development',
      description1: 'Streamline and integrate your business operations with custom ERP solutions built to fit your unique needs. We design and develop scalable Enterprise Resource Planning systems that unify processes, improve efficiency, and provide real-time visibility across your organization.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'From finance and HR to supply chain and inventory, our ERP solutions help you manage everything from a single, powerful platform.',
      keyServices: [
        'Custom ERP Development',
        'ERP Integration & Migration',
        'Module Development (HR, Finance, Inventory, CRM)',
        'Cloud-based ERP Solutions',
        'ERP Maintenance & Support'
      ]
    },
    'Web Development': {
      title: 'Web Development',
      description1: 'Build a strong digital presence with modern, high-performing websites tailored to your business goals. We create responsive, secure, and user-friendly websites that deliver exceptional user experiences across all devices.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'Whether you need a corporate website, e-commerce platform, or custom web application, we bring your vision to life with cutting-edge technologies.',
      keyServices: [
        'Custom Website Development',
        'E-commerce Development',
        'CMS Development (WordPress, Drupal)',
        'Web Application Development',
        'Website Maintenance & Optimization'
      ]
    },
    'App Development': {
      title: 'App Development',
      description1: 'Turn your ideas into powerful mobile applications that engage users and drive business growth. We develop high-quality, scalable apps for both Android and iOS platforms with a focus on performance and usability.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'From concept to launch, we ensure your app delivers a seamless experience and meets your business objectives.',
      keyServices: [
        'Android & iOS App Development',
        'Cross-platform App Development (Flutter, React Native)',
        'UI/UX-Focused App Design',
        'App Testing & Quality Assurance',
        'App Maintenance & Upgrades'
      ]
    },
    'Biometric Solutions': {
      title: 'Biometric Solutions',
      description1: 'Secure and simplify identity verification with advanced biometric solutions. We provide reliable authentication systems using unique biological traits such as fingerprints, facial recognition, and iris scanning.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'Our biometric solutions enhance security while improving user convenience across various applications.',
      keyServices: [
        'Fingerprint Recognition Systems',
        'Facial Recognition Solutions',
        'Iris & Retina Scanning',
        'Time & Attendance Systems',
        'Access Control & Identity Management'
      ]
    },
    'IoT Solutions': {
      title: 'IoT',
      description1: 'Connect, monitor, and control your devices with our end-to-end Internet of Things (IoT) solutions. We enable businesses to harness real-time data for smarter operations and improved efficiency.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'From smart sensors to cloud integration, our IoT solutions are designed to streamline processes, reduce costs, and enhance visibility across your ecosystem.',
      keyServices: [
        'Smart Device Integration',
        'IoT Platform Development',
        'Real-time Monitoring & Analytics',
        'Industrial IoT (IIoT) Solutions',
        'Edge Computing & Automation'
      ]
    },
    'AI & ML Solutions': {
      title: 'AI & ML',
      description1: 'Transform your business with intelligent, data-driven solutions. We help you leverage Artificial Intelligence and Machine Learning to automate processes, uncover insights, and enhance decision-making.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'Our AI & ML services include predictive analytics, natural language processing, computer vision, and custom model development tailored to your business needs. Whether you\'re looking to optimize operations or create innovative products, we deliver scalable and future-ready solutions.',
      keyServices: [
        'Predictive Analytics & Forecasting',
        'Natural Language Processing (NLP)',
        'Computer Vision Solutions',
        'AI Chatbots & Virtual Assistants',
        'Custom Machine Learning Models'
      ]
    },
    'UI / UX Design': {
      title: 'UI / UX Design',
      description1: 'Create meaningful and engaging digital experiences with our user-centric UI/UX design services. We focus on understanding user behavior to design intuitive, visually appealing interfaces that enhance usability and satisfaction.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'Our designs not only look great but also improve conversion rates and user engagement.',
      keyServices: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Mobile & Web UI Design',
        'Usability Testing',
        'Interaction Design'
      ]
    },
    'DevOps': {
      title: 'DevOps',
      description1: 'Accelerate your software delivery with our DevOps expertise. We bridge the gap between development and operations to enable faster, more reliable releases.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'Our DevOps solutions focus on automation, continuous integration, and scalable infrastructure, helping you improve efficiency and reduce time-to-market.',
      keyServices: [
        'CI/CD Pipeline Implementation',
        'Cloud Infrastructure Management',
        'Containerization (Docker, Kubernetes)',
        'Infrastructure as Code (IaC)',
        'Monitoring & Performance Optimization'
      ]
    },
    'Middleware Solutions': {
      title: 'Middleware Solutions',
      description1: 'Streamline communication between your applications and systems with our reliable middleware solutions. We help integrate diverse platforms, ensuring seamless data flow and improved system performance.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'Our middleware services enable businesses to connect legacy systems with modern applications, enhancing scalability, flexibility, and efficiency across operations.',
      keyServices: [
        'Application Integration',
        'API Development & Management',
        'Enterprise Service Bus (ESB) Solutions',
        'Message Queuing & Event Streaming',
        'Legacy System Integration'
      ]
    },
    'BigData Solutions': {
      title: 'Big Data Solutions',
      description1: 'Unlock the power of your data with advanced big data solutions. We help you collect, process, and analyze massive datasets to gain actionable insights and drive smarter business decisions.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'Our solutions are designed to handle high-volume, high-velocity, and high-variety data while ensuring performance, security, and scalability.',
      keyServices: [
        'Data Engineering & ETL Pipelines',
        'Data Warehousing & Data Lakes',
        'Real-time Data Processing',
        'Advanced Analytics & Visualization',
        'Big Data Platform Implementation (Hadoop, Spark)'
      ]
    },
    'RFID Solutions': {
      title: 'RFID Solutions',
      description1: 'Enhance tracking, security, and automation with our RFID (Radio Frequency Identification) solutions. We provide end-to-end systems for asset tracking, inventory management, and access control.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'Our RFID solutions improve operational efficiency by delivering real-time visibility and reducing manual errors.',
      keyServices: [
        'RFID System Design & Implementation',
        'Asset & Inventory Tracking',
        'Access Control Systems',
        'Supply Chain Automation',
        'RFID Hardware Integration'
      ]
    },
    'CyberSecurity': {
      title: 'Cybersecurity',
      description1: 'Protect your digital assets with robust, proactive cybersecurity solutions. We help safeguard your systems, networks, and data from evolving threats and vulnerabilities.',
      stats: [
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
      ],
      description2: 'Our approach combines advanced security technologies with industry best practices to ensure your business stays secure, compliant, and resilient.',
      keyServices: [
        'Network Security & Monitoring',
        'Vulnerability Assessment & Penetration Testing',
        'Data Protection & Encryption',
        'Identity & Access Management (IAM)',
        'Security Compliance & Risk Management'
      ]
    }
  };

  const activeData = serviceDetails[activeService as keyof typeof serviceDetails] || serviceDetails['ERP Development'];

  const scroll = (offset: number) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-slate-50"
    >
      {/* Content Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="flex flex-col gap-12">
          {/* Horizontal Scrollable Tabs */}
          <div className="relative flex items-center w-full py-4 -mx-4 px-4 sm:mx-0 sm:px-0">
            {/* Left Fade + Button */}
            <div className="absolute left-0 z-20 h-full w-24 bg-gradient-to-r from-slate-50 via-slate-50/80 to-transparent pointer-events-none flex items-center pt-1 pb-1">
               <button 
                 onClick={() => scroll(-300)}
                 className="w-11 h-11 bg-white/90 backdrop-blur-md text-slate-700 flex items-center justify-center rounded-full hover:text-brand-primary hover:bg-white hover:scale-105 hover:shadow-xl transition-all shadow-md border border-slate-200/50 pointer-events-auto shrink-0 -ml-2 sm:ml-0"
               >
                 <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
               </button>
            </div>
            
            <div 
              ref={scrollContainer}
              className="flex overflow-x-auto scrollbar-hide py-6 px-12 sm:px-16 gap-3 sm:gap-4 w-full scroll-smooth mask-edges"
            >
              {servicesList.map((service) => {
                const isActive = activeService === service;
                return (
                  <button
                    key={service}
                    data-active={isActive}
                    onClick={() => setActiveService(service)}
                    className={cn(
                      "relative whitespace-nowrap px-6 sm:px-8 py-3 sm:py-3.5 rounded-2xl text-[15px] sm:text-base font-bold transition-all duration-300 group flex-shrink-0 border",
                      isActive 
                        ? "text-white border-transparent" 
                        : "bg-white text-slate-500 hover:text-slate-800 border-slate-200/60 shadow-sm hover:shadow-md hover:border-slate-300"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeServiceTab"
                        className="absolute inset-0 bg-gradient-to-r from-brand-primary to-blue-500 rounded-2xl shadow-lg shadow-brand-primary/30"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{service}</span>
                  </button>
                )
              })}
            </div>

            {/* Right Fade + Button */}
            <div className="absolute right-0 z-20 h-full w-24 bg-gradient-to-l from-slate-50 via-slate-50/80 to-transparent pointer-events-none flex items-center justify-end pt-1 pb-1">
               <button 
                 onClick={() => scroll(300)}
                 className="w-11 h-11 bg-white/90 backdrop-blur-md text-slate-700 flex items-center justify-center rounded-full hover:text-brand-primary hover:bg-white hover:scale-105 hover:shadow-xl transition-all shadow-md border border-slate-200/50 pointer-events-auto shrink-0 -mr-2 sm:mr-0"
               >
                 <ChevronRight className="w-5 h-5 stroke-[2.5]" />
               </button>
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="w-full xl:w-[85%] mx-auto relative z-10 mt-8">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeService}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white rounded-3xl"
              >
                <div className="py-8 px-4 sm:px-8">
                  <h3 className="text-[28px] font-bold text-black mb-6">{activeData.title}</h3>
                  <p className="text-[15px] text-black leading-relaxed max-w-[850px] mb-12">
                    {activeData.description1}
                  </p>

                  {/* Stats Section matching design */}
                  <div className="flex flex-col md:flex-row justify-between w-full max-w-[800px] mb-12 gap-8 md:gap-4 px-4 sm:px-8">
                    {activeData.stats.map((stat, idx) => (
                      <div key={idx} className="flex flex-col items-center flex-1">
                        <div className="text-[44px] font-medium text-[#5AB2E8] mb-1 tracking-tight leading-none">{stat.value}</div>
                        <div className="text-[13px] text-slate-500 whitespace-nowrap">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-[15px] text-black leading-relaxed max-w-[850px] mb-6">
                    {activeData.description2}
                  </p>

                  <h4 className="font-bold text-[16px] text-black mb-4">Key Services:</h4>
                  <ul className="space-y-1 mb-8 ml-6 list-disc marker:text-black">
                    {activeData.keyServices.map((service, idx) => (
                      <li key={idx} className="pl-1">
                        <span className="text-[15px] text-black">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
      
      {/* CTA Layer */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready to scale faster?</h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Our engineering team is ready to architect the perfect solution for your enterprise. Let's discuss your technical requirements.
            </p>
            <div className="flex justify-center gap-4">
               <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-secondary transition-all shadow-lg shadow-brand-primary/30">
                  Book Architecture Session <ArrowRight className="w-5 h-5"/>
               </Link>
            </div>
        </div>
      </section>
    </motion.div>
  );
}
