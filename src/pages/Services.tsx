import { useState } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Services() {
  const [activeService, setActiveService] = useState('ERP Development');

  const servicesList = [
    'ERP Development',
    'Web Development',
    'App Development',
    'Biometric Solutions',
    'IoT Solution',
    'AI & ML Solution',
    'UI/UX Design',
    'DevOps',
    'Middleware',
    'Big Data Solutions',
    'RFID Solution',
    'Cybersecurity'
  ];

  const serviceDetails = {
    'ERP Development': {
      title: 'ERP Development',
      description: 'Empowering Businesses with Streamlined ERP Solutions. ERP systems are the backbone of efficient operations in any organization. Our ERP Development services provide businesses with fully customized, scalable, and integrated software to optimize processes, enhance productivity, and foster growth. From manufacturing to finance, our ERP solutions cater to a wide range of business needs.',
      stats: [
        { value: '95%', label: 'Satisfaction' },
        { value: '40%', label: 'Cost Savings' },
        { value: '99.9%', label: 'System Uptime' }
      ],
      features: [
        'End-to-End Integration',
        'Real-Time Analytics',
        'Customizable Modules',
        'Cloud and On-Premise Options',
        'Role-Based Access Control'
      ],
      benefits: [
        'Centralizes data for improved decision-making.',
        'Reduces operational costs by streamlining processes.',
        'Scales with your business growth and future needs.'
      ]
    },
    'Web Development': {
      title: 'Web Development',
      description: 'Create a powerful online presence with our comprehensive web development services. We build responsive, fast, and secure web applications tailored to your business goals. From corporate websites to complex e-commerce platforms, our team utilizes the latest technologies to deliver exceptional user experiences.',
      stats: [
        { value: '200+', label: 'Sites Launched' },
        { value: '50%', label: 'Conv. Increase' },
        { value: '100%', label: 'Mobile Ready' }
      ],
      features: [
        'Custom Web Application Development',
        'E-commerce Solutions',
        'Content Management Systems (CMS)',
        'Progressive Web Apps (PWA)',
        'API Integration and Development'
      ],
      benefits: [
        'Enhance brand visibility and reach a wider audience.',
        'Provide seamless user experiences across all devices.',
        'Ensure high performance and robust security.'
      ]
    },
    'App Development': {
      title: 'App Development',
      description: 'Engage your customers on the go with custom mobile applications. We design and develop native and cross-platform apps for iOS and Android that offer intuitive interfaces and robust functionality. Turn your innovative ideas into successful mobile products.',
      stats: [
        { value: '150+', label: 'Apps Built' },
        { value: '4.8', label: 'Avg Rating' },
        { value: '1M+', label: 'Downloads' }
      ],
      features: [
        'iOS and Android Native Development',
        'Cross-Platform Development (React Native, Flutter)',
        'UI/UX Design for Mobile',
        'App Store Optimization (ASO)',
        'Ongoing Maintenance and Support'
      ],
      benefits: [
        'Increase customer engagement and loyalty.',
        'Access device-specific features (camera, GPS).',
        'Open new revenue channels through mobile commerce.'
      ]
    },
    'Biometric Solutions': {
      title: 'Biometric Solutions',
      description: 'Enhance security and streamline access with our advanced biometric solutions. We integrate fingerprint, facial recognition, and iris scanning technologies into your existing systems for reliable identity verification and access control.',
      stats: [
        { value: '99.9%', label: 'Accuracy' },
        { value: '<1s', label: 'Auth Time' },
        { value: '100%', label: 'Compliant' }
      ],
      features: [
        'Fingerprint and Facial Recognition',
        'Time and Attendance Tracking',
        'Access Control Systems',
        'Integration with HR and ERP Systems',
        'Secure Data Encryption'
      ],
      benefits: [
        'Eliminate buddy punching and time theft.',
        'Enhance physical and logical security.',
        'Provide a frictionless experience for users.'
      ]
    },
    'IoT Solution': {
      title: 'IoT Solution',
      description: 'Connect your devices and unlock the power of data with our Internet of Things (IoT) solutions. We help businesses build smart environments, monitor assets in real-time, and automate processes to drive efficiency and innovation.',
      stats: [
        { value: '50K+', label: 'Nodes' },
        { value: '30%', label: 'Efficiency' },
        { value: '24/7', label: 'Monitoring' }
      ],
      features: [
        'IoT Architecture Design',
        'Sensor Integration and Data Collection',
        'Real-time Analytics Dashboards',
        'Predictive Maintenance Alerts',
        'Smart Asset Tracking'
      ],
      benefits: [
        'Gain real-time visibility into operations.',
        'Reduce downtime with predictive maintenance.',
        'Create new business models and revenue streams.'
      ]
    },
    'AI & ML Solution': {
      title: 'AI & ML Solution',
      description: 'Leverage Artificial Intelligence and Machine Learning to transform your data into actionable insights. We build intelligent systems that automate tasks, predict trends, and personalize customer experiences, giving you a competitive edge.',
      stats: [
        { value: '45%', label: 'Automation' },
        { value: '3x', label: 'Faster Intel' },
        { value: '90%', label: 'Pred. Acc.' }
      ],
      features: [
        'Predictive Analytics and Forecasting',
        'Natural Language Processing (NLP)',
        'Computer Vision and Image Recognition',
        'Chatbots and Virtual Assistants',
        'Recommendation Engines'
      ],
      benefits: [
        'Automate repetitive and time-consuming tasks.',
        'Make data-driven decisions with high confidence.',
        'Deliver highly personalized customer experiences.'
      ]
    },
    'UI/UX Design': {
      title: 'UI/UX Design',
      description: 'Deliver exceptional digital experiences with our user-centric UI/UX design services. We combine aesthetics with functionality to create intuitive interfaces that delight users and drive engagement across web and mobile platforms.',
      stats: [
        { value: '85%', label: 'Retention' },
        { value: '2x', label: 'Engagement' },
        { value: '100%', label: 'User-Centric' }
      ],
      features: [
        'User Research and Persona Development',
        'Wireframing and Prototyping',
        'Visual Design and Branding',
        'Usability Testing',
        'Interaction Design'
      ],
      benefits: [
        'Increase user satisfaction and loyalty.',
        'Reduce development costs by catching issues early.',
        'Boost conversion rates through intuitive navigation.'
      ]
    },
    'DevOps': {
      title: 'DevOps',
      description: 'Accelerate your software delivery lifecycle with our DevOps services. We implement continuous integration and continuous deployment (CI/CD) pipelines, automate infrastructure provisioning, and foster collaboration between development and operations teams.',
      stats: [
        { value: '60%', label: 'Faster TTL' },
        { value: '99.99%', label: 'Reliability' },
        { value: '50%', label: 'Fewer Fails' }
      ],
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code (IaC)',
        'Containerization (Docker, Kubernetes)',
        'Automated Testing Integration',
        'Continuous Monitoring and Logging'
      ],
      benefits: [
        'Release software faster and more frequently.',
        'Improve system stability and reliability.',
        'Reduce manual errors through automation.'
      ]
    },
    'Middleware': {
      title: 'Middleware',
      description: 'Connect disparate systems and applications seamlessly with our Middleware solutions. We facilitate smooth data exchange and communication across your enterprise architecture, ensuring interoperability and eliminating data silos.',
      stats: [
        { value: '100%', label: 'Interop' },
        { value: '40%', label: 'Cost Reduce' },
        { value: 'Real-time', label: 'Data Sync' }
      ],
      features: [
        'Enterprise Service Bus (ESB) Implementation',
        'API Gateway Setup and Management',
        'Data Transformation and Routing',
        'Legacy System Integration',
        'Message Queuing and Event Streaming'
      ],
      benefits: [
        'Enable seamless communication between applications.',
        'Extend the lifespan of legacy systems.',
        'Simplify IT architecture and reduce maintenance.'
      ]
    },
    'Big Data Solutions': {
      title: 'Big Data Solutions',
      description: 'Harness the power of massive datasets with our Big Data solutions. We build scalable data architectures that allow you to store, process, and analyze complex data, uncovering hidden patterns and driving strategic business decisions.',
      stats: [
        { value: 'PBs', label: 'Processed' },
        { value: '10x', label: 'Faster Query' },
        { value: '360°', label: 'Visibility' }
      ],
      features: [
        'Data Lake and Data Warehouse Setup',
        'Real-time Data Processing (Spark, Kafka)',
        'Data Mining and Pattern Recognition',
        'Business Intelligence (BI) Dashboards',
        'Data Governance and Security'
      ],
      benefits: [
        'Make informed decisions based on comprehensive data.',
        'Identify new market opportunities and trends.',
        'Optimize operations through deep analytical insights.'
      ]
    },
    'RFID Solution': {
      title: 'RFID Solution',
      description: 'Optimize inventory management and asset tracking with our RFID solutions. We provide end-to-end implementation of Radio Frequency Identification technology, enabling automated data capture and real-time visibility across your supply chain.',
      stats: [
        { value: '99%', label: 'Accuracy' },
        { value: '80%', label: 'Less Manual' },
        { value: '100%', label: 'Traceability' }
      ],
      features: [
        'RFID Tagging and Hardware Setup',
        'Real-time Asset Tracking',
        'Automated Inventory Audits',
        'Integration with ERP and WMS',
        'Anti-theft and Security Alerts'
      ],
      benefits: [
        'Dramatically improve inventory accuracy.',
        'Reduce labor costs associated with manual tracking.',
        'Prevent loss and improve asset utilization.'
      ]
    },
    'Cybersecurity': {
      title: 'Cybersecurity',
      description: 'Protect your digital assets and sensitive data with our comprehensive Cybersecurity services. We implement robust security frameworks, conduct vulnerability assessments, and provide continuous monitoring to defend against evolving cyber threats.',
      stats: [
        { value: '24/7', label: 'Monitoring' },
        { value: '0', label: 'Breaches' },
        { value: '100%', label: 'Compliance' }
      ],
      features: [
        'Vulnerability Assessment and Penetration Testing',
        'Network and Endpoint Security',
        'Data Encryption and Loss Prevention',
        'Security Information and Event Management (SIEM)',
        'Employee Security Awareness Training'
      ],
      benefits: [
        'Safeguard sensitive business and customer data.',
        'Ensure compliance with industry regulations.',
        'Maintain business continuity and reputation.'
      ]
    }
  };

  const activeData = serviceDetails[activeService as keyof typeof serviceDetails] || serviceDetails['ERP Development'];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-slate-50"
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
              Core Capabilities
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
              Engineering the future of enterprise.
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              From sophisticated ERP solutions to advanced AI forecasting, discover our full suite of technical proficiencies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Sidebar */}
          <div className="w-full lg:w-72 flex-shrink-0 relative z-20 lg:sticky lg:top-32">
            <div className="bg-white border border-slate-200 rounded-3xl p-4 shadow-sm flex flex-col space-y-1">
              {servicesList.map((service) => {
                const isActive = activeService === service;
                return (
                  <button
                    key={service}
                    onClick={() => setActiveService(service)}
                    className={`px-4 py-3.5 rounded-2xl text-sm font-bold transition-all text-left relative ${
                      isActive 
                        ? 'text-brand-primary bg-brand-primary/5 shadow-sm' 
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                  >
                    {isActive && (
                      <motion.div 
                        layoutId="activeService"
                        className="absolute inset-0 bg-brand-primary/5 rounded-2xl -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    {service}
                  </button>
                )
              })}
            </div>
          </div>
          
          {/* Main Content Area */}
          <div className="flex-grow min-w-0 w-full relative z-10">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40 overflow-hidden"
              >
                <div className="p-8 lg:p-12 border-b border-slate-100">
                  <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">{activeData.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
                    {activeData.description}
                  </p>
                </div>
                
                {/* Stats Ribbon */}
                <div className="bg-slate-900 text-white grid grid-cols-3 divide-x divide-slate-800 border-b border-slate-100">
                  {activeData.stats.map((stat, idx) => (
                    <div key={idx} className="p-6 lg:p-8 text-center bg-gradient-to-b from-transparent to-slate-900/50 hover:bg-slate-800 transition-colors">
                      <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary/80 to-brand-primary mb-2">{stat.value}</div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 p-8 lg:p-12 gap-12 bg-slate-50">
                  <div>
                    <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">Architecture Highlights</h4>
                    <ul className="space-y-4">
                      {activeData.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-semibold text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">Business Impact</h4>
                    <ul className="space-y-4">
                      {activeData.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-semibold text-slate-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
