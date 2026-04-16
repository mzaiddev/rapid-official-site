import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

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
        { value: '95%', label: 'Client Satisfaction Rate' },
        { value: '40%', label: 'Average Cost Savings' },
        { value: '99.9%', label: 'Uptime for Critical Systems' }
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
        { value: '200+', label: 'Websites Launched' },
        { value: '50%', label: 'Increase in Conversion' },
        { value: '100%', label: 'Mobile Responsive' }
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
        { value: '150+', label: 'Apps Published' },
        { value: '4.8', label: 'Average App Rating' },
        { value: '1M+', label: 'Total Downloads' }
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
        { value: '99.9%', label: 'Accuracy Rate' },
        { value: '<1s', label: 'Authentication Time' },
        { value: '100%', label: 'Compliance with Data Laws' }
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
        { value: '50K+', label: 'Devices Connected' },
        { value: '30%', label: 'Efficiency Increase' },
        { value: '24/7', label: 'Real-time Monitoring' }
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
        { value: '45%', label: 'Process Automation' },
        { value: '3x', label: 'Faster Decision Making' },
        { value: '90%', label: 'Prediction Accuracy' }
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
        { value: '85%', label: 'User Retention Rate' },
        { value: '2x', label: 'Increase in Engagement' },
        { value: '100%', label: 'User-Centric Approach' }
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
        { value: '60%', label: 'Faster Time to Market' },
        { value: '99.99%', label: 'System Reliability' },
        { value: '50%', label: 'Reduction in Deployment Failures' }
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
        { value: '100%', label: 'System Interoperability' },
        { value: '40%', label: 'Reduction in Integration Costs' },
        { value: 'Real-time', label: 'Data Synchronization' }
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
        { value: 'PBs', label: 'Data Processed' },
        { value: '10x', label: 'Faster Query Performance' },
        { value: '360°', label: 'Business View' }
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
        { value: '99%', label: 'Inventory Accuracy' },
        { value: '80%', label: 'Reduction in Manual Counting' },
        { value: '100%', label: 'Asset Traceability' }
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
        { value: '24/7', label: 'Threat Monitoring' },
        { value: '0', label: 'Major Breaches' },
        { value: '100%', label: 'Compliance Readiness' }
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
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-24">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/services/1920/500" alt="Services Hero" className="w-full h-full object-cover opacity-20" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-block bg-[#d32f2f] text-white text-xs font-bold px-3 py-1 mb-4 rounded-sm tracking-widest uppercase">What We Do</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide">Services</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Comprehensive ERP services, from implementation to support, driving seamless business transformation and operational excellence.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">
          <span className="text-[#d32f2f] mr-2">|</span>Explore by Services
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="flex flex-col border-l-2 border-slate-100">
              {servicesList.map((service) => (
                <button
                  key={service}
                  onClick={() => setActiveService(service)}
                  className={`px-4 py-4 text-sm font-medium transition-colors text-left border-l-2 -ml-[2px] ${
                    activeService === service 
                      ? 'border-[#d32f2f] text-[#d32f2f] bg-red-50/50' 
                      : 'border-transparent text-slate-600 hover:text-[#d32f2f] hover:bg-slate-50'
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-grow">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">| {activeData.title}</h3>
            
            <p className="text-slate-600 mb-10 leading-relaxed">
              {activeData.description}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10 border-b border-slate-100 pb-10">
              {activeData.stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#d32f2f] mb-2">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-rose-50/50 p-6 rounded-xl">
                <h4 className="font-bold text-slate-800 mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {activeData.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-xl">
                <h4 className="font-bold text-slate-800 mb-4">Benefits</h4>
                <ul className="space-y-3">
                  {activeData.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
