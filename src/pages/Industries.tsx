import { useState } from 'react';
import { 
  ShoppingCart, Truck, Car, Hotel, Stethoscope, Briefcase, 
  Pill, GraduationCap, Factory, Droplet, CheckCircle2
} from 'lucide-react';

export default function Industries() {
  const [activeIndustry, setActiveIndustry] = useState('Retail');

  const industriesList = [
    { id: 'Retail', icon: <ShoppingCart className="w-5 h-5" />, name: 'Retail' },
    { id: 'Distribution', icon: <Truck className="w-5 h-5" />, name: 'Distribution' },
    { id: 'Automotive', icon: <Car className="w-5 h-5" />, name: 'Automotive' },
    { id: 'Hospitality', icon: <Hotel className="w-5 h-5" />, name: 'Hospitality' },
    { id: 'Healthcare', icon: <Stethoscope className="w-5 h-5" />, name: 'Healthcare' },
    { id: 'Financial', icon: <Briefcase className="w-5 h-5" />, name: 'Financial' },
  ];

  const industryDetails = {
    'Retail': {
      title: 'Retail',
      description: 'Empowering Retailers with Advanced Software Solutions. In the competitive retail market, the key to success lies in offering seamless customer experiences and maintaining efficient business operations. Our Retail Management Software streamlines inventory, order management, sales, and customer data, empowering retailers to operate efficiently while enhancing customer satisfaction. With our integrated solutions, you can manage your business from anywhere and at any time, ensuring you stay competitive in an ever-evolving industry.',
      features: [
        'Inventory and Stock Management',
        'Point-of-Sale (POS) Integration',
        'Sales and Customer Analytics',
        'Loyalty and Rewards Program',
        'Multi-Store Management'
      ],
      benefits: [
        'Improved operational efficiency with real-time data.',
        'Enhanced customer experience through personalized engagement.',
        'Scalable solutions that grow with your business.'
      ]
    },
    'Distribution': {
      title: 'Distribution',
      description: 'Streamline your supply chain with our comprehensive Distribution ERP. We provide end-to-end visibility across your entire distribution network, enabling you to optimize inventory levels, reduce carrying costs, and improve order fulfillment rates. Our software is designed to handle complex logistics, warehouse management, and vendor relationships seamlessly.',
      features: [
        'Advanced Warehouse Management',
        'Route Optimization and Logistics',
        'Vendor and Supplier Portal',
        'Automated Order Processing',
        'Real-time Inventory Tracking'
      ],
      benefits: [
        'Reduce operational costs through optimized logistics.',
        'Minimize stockouts and overstock situations.',
        'Improve delivery times and customer satisfaction.'
      ]
    },
    'Automotive': {
      title: 'Automotive',
      description: 'Accelerate your automotive business with tailored software solutions. Whether you manage a dealership, a repair shop, or an auto parts store, our Automotive ERP provides the tools you need to manage inventory, schedule services, and build lasting customer relationships. Stay ahead in a fast-paced industry with real-time insights and automated workflows.',
      features: [
        'Vehicle and Parts Inventory Management',
        'Service Scheduling and Tracking',
        'Customer Relationship Management (CRM)',
        'Warranty and Claims Management',
        'Financial Reporting and Analytics'
      ],
      benefits: [
        'Streamline service operations and reduce wait times.',
        'Optimize parts inventory to reduce carrying costs.',
        'Enhance customer loyalty with personalized service.'
      ]
    },
    'Hospitality': {
      title: 'Hospitality',
      description: 'Elevate guest experiences with our all-in-one Hospitality Management System. Designed for hotels, resorts, and restaurants, our software simplifies property management, booking, and guest services. By automating routine tasks, your staff can focus on what matters most: providing exceptional service and creating memorable experiences for your guests.',
      features: [
        'Property Management System (PMS)',
        'Online Booking and Reservation Engine',
        'Housekeeping and Maintenance Tracking',
        'Point-of-Sale for Restaurants and Spas',
        'Guest Feedback and Review Management'
      ],
      benefits: [
        'Increase direct bookings and revenue.',
        'Improve staff efficiency and coordination.',
        'Deliver personalized guest experiences.'
      ]
    },
    'Healthcare': {
      title: 'Healthcare',
      description: 'Transform patient care with our secure and compliant Healthcare ERP. Our solutions are designed to meet the unique challenges of hospitals, clinics, and pharmacies. From electronic health records (EHR) to billing and inventory management, we provide a unified platform that improves clinical outcomes and operational efficiency while ensuring regulatory compliance.',
      features: [
        'Electronic Health Records (EHR) Integration',
        'Patient Scheduling and Registration',
        'Medical Billing and Claims Processing',
        'Pharmacy and Medical Supply Inventory',
        'Telemedicine and Patient Portal'
      ],
      benefits: [
        'Enhance patient care with accurate, accessible records.',
        'Reduce administrative burden and billing errors.',
        'Ensure compliance with healthcare regulations (HIPAA).'
      ]
    },
    'Financial': {
      title: 'Financial',
      description: 'Navigate the complexities of the financial sector with our robust Financial ERP. Built for banks, investment firms, and accounting agencies, our software offers advanced tools for risk management, compliance, and financial reporting. Gain real-time visibility into your financial health and make data-driven decisions with confidence.',
      features: [
        'General Ledger and Accounting',
        'Risk Management and Compliance Tracking',
        'Automated Financial Reporting',
        'Asset and Wealth Management',
        'Secure Payment Processing'
      ],
      benefits: [
        'Ensure strict compliance with financial regulations.',
        'Improve accuracy and speed of financial reporting.',
        'Mitigate risks with real-time monitoring and alerts.'
      ]
    }
  };

  const activeData = industryDetails[activeIndustry as keyof typeof industryDetails] || industryDetails['Retail'];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-24">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/seed/industries/1920/500" alt="Industries Hero" className="w-full h-full object-cover opacity-20" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-slate-900/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-block bg-[#d32f2f] text-white text-xs font-bold px-3 py-1 mb-4 rounded-sm tracking-widest uppercase">Our Expertise</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide">Industries</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Tailored ERP solutions for diverse industries, ensuring efficiency, scalability, and growth in competitive markets.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h2 className="text-2xl font-bold text-slate-800 mb-8">
          <span className="text-[#d32f2f] mr-2">|</span>Explore by Industries
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="flex flex-col border-l-2 border-slate-100">
              {industriesList.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndustry(ind.id)}
                  className={`flex items-center gap-3 px-4 py-4 text-sm font-medium transition-colors text-left border-l-2 -ml-[2px] ${
                    activeIndustry === ind.id 
                      ? 'border-[#d32f2f] text-[#d32f2f] bg-red-50/50' 
                      : 'border-transparent text-slate-600 hover:text-[#d32f2f] hover:bg-slate-50'
                  }`}
                >
                  {ind.icon}
                  {ind.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-grow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-red-50 text-[#d32f2f] rounded-lg">
                <ShoppingCart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">| {activeData.title}</h3>
            </div>
            
            <p className="text-slate-600 mb-10 leading-relaxed">
              {activeData.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-slate-800 mb-4">Key Features</h4>
                <ul className="space-y-3">
                  {activeData.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-[#d32f2f] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-slate-800 mb-4">Benefits</h4>
                <ul className="space-y-3">
                  {activeData.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-[#d32f2f] flex-shrink-0" />
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
