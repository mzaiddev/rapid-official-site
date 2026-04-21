import { Link } from 'react-router-dom';
import {
  Languages,
  Settings,
  ArrowUpCircle,
  Link as LinkIcon,
  ShoppingCart,
  Truck,
  Car,
  Stethoscope,
  Hotel,
  Factory,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  const heroImage =
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400';

  const whyChooseUs = [
    {
      icon: <Languages className="w-6 h-6 text-white" />,
      title: 'Bilingual Core',
      description:
        'Native support for multiple languages ensures seamless operations globally.',
    },
    {
      icon: <Settings className="w-6 h-6 text-white" />,
      title: 'Highly Customizable',
      description:
        'Fully adaptable architecture to meet the strict demands of your distinct workflows.',
    },
    {
      icon: <ArrowUpCircle className="w-6 h-6 text-white" />,
      title: 'Effortlessly Upgradable',
      description:
        'Continuous deployment of cloud-native upgrades keeping you ahead of the curve.',
    },
    {
      icon: <LinkIcon className="w-6 h-6 text-white" />,
      title: 'API Integration',
      description:
        'Unified data layers seamlessly sync with external vendors and legacy infrastructures.',
    },
  ];

  const products = [
    { icon: <ShoppingCart />, title: 'Retail & POS ERP', tags: 'On-Premises · Cloud' },
    { icon: <Car />, title: 'Automotive ERP', tags: 'On-Premises · Cloud' },
    { icon: <Truck />, title: 'Distribution ERP', tags: 'Cloud · Hybrid' },
    { icon: <Stethoscope />, title: 'Healthcare ERP', tags: 'On-Premises · Hybrid' },
    { icon: <Hotel />, title: 'Hospitality ERP', tags: 'Cloud · Hybrid' },
    { icon: <Factory />, title: 'Manufacturing ERP', tags: 'On-Premises · Cloud' },
  ];

  const testimonials = [
    {
      name: 'Sophia Anderson',
      role: 'CEO at TechGlobal',
      text: "Rapid's ERP system is phenomenal. The localized support and data agility transformed our disparate international offices into a unified operational hub.",
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300',
    },
    {
      name: 'Rafid Hasan',
      role: 'Operations Manager',
      text: 'We cut our monthly reconciliation process from 3 days to literally hours. The real-time visibility across our supply chain is an absolute game-changer.',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    },
    {
      name: 'David Chen',
      role: 'CFO at Apex',
      text: 'The ROI was realized in just six months. The comprehensive dashboards give our board unprecedented insight into our financial pulse.',
      avatar:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-white"
    >
      <section className="relative overflow-hidden bg-brand-dark pt-24 pb-16 sm:pb-20 lg:pt-32 lg:pb-32">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-[-10%] right-[-10%] h-[800px] w-[800px] rounded-full bg-brand-primary/20 blur-[120px] transition-opacity duration-1000 animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-brand-primary/10 blur-[100px] transition-opacity duration-1000"></div>

          <div className="absolute inset-0 z-0 hidden justify-center opacity-40 sm:flex">
            <div className="relative h-full w-full max-w-7xl">
              <div className="absolute top-0 left-[-10%] h-full w-1/4 -translate-x-[-20%] -skew-x-12 bg-brand-primary/10"></div>
              <div className="absolute top-0 left-[15%] h-full w-1/3 -skew-x-12 bg-brand-primary/5"></div>
              <div className="absolute top-0 left-[50%] h-full w-1/4 translate-x-[20%] -skew-x-12 bg-brand-primary/10"></div>
              <div className="absolute top-0 right-[-10%] h-full w-1/3 translate-x-[40%] -skew-x-12 bg-brand-primary/15"></div>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_50%_0%,_var(--color-brand-primary)_0%,_transparent_70%)] opacity-10"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur-sm sm:mb-8 sm:text-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
              Trusted by 5,000+ global businesses
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:mb-8 lg:text-7xl">
              Unified Enterprise <br />
              <span className="text-brand-primary">Management</span> System.
            </h1>

            <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg lg:mb-10 lg:text-xl">
              Providing thousands of enterprises with outstanding operational control and real-time visibility. Get started in under 3 minutes, with no complex hardware required.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-5">
              <Link to="/contact" className="btn-primary w-full sm:w-auto">
                Sign Up Now
              </Link>
              <Link to="/services" className="btn-outline w-full sm:w-auto">
                Try It Out
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative max-w-2xl lg:ml-auto"
          >
            <div className="group relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-brand-primary to-brand-secondary blur opacity-25 transition duration-1000 group-hover:opacity-40 group-hover:duration-200"></div>
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
                <div className="flex h-10 items-center gap-1.5 border-b border-white/5 bg-white/5 px-4">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/50"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/50"></div>
                </div>
                <img
                  src={heroImage}
                  className="h-auto w-full opacity-95"
                  alt="Enterprise analytics dashboard for ERP reporting and business intelligence"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mx-auto mt-16 max-w-7xl border-t border-white/5 px-4 pt-10 sm:mt-24 sm:px-6 sm:pt-12 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:gap-10 lg:grid-cols-4 lg:gap-12">
            {[
              { value: '5,000+', label: 'Global Businesses' },
              { value: '25M+', label: 'Reports Processed' },
              { value: 'AES-256', label: 'Military-Grade Encryption' },
              { value: 'CLOUD', label: 'Data Hosted Securely' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center lg:text-left">
                <div className="mb-2 text-2xl font-black text-white sm:text-3xl">{stat.value}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-primary">Enterprise Core</h2>
          <h3 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
            Built for modern businesses that <span className="opacity-40">demand more.</span>
          </h3>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, idx) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={idx}
              className="group relative overflow-hidden rounded-3xl bg-slate-900 p-8"
            >
              <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-brand-primary opacity-20 blur-[80px] transition-colors group-hover:bg-sky-400"></div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 bg-white/10">
                {item.icon}
              </div>
              <h4 className="mb-3 text-xl font-bold text-white">{item.title}</h4>
              <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200/60 bg-slate-50 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-primary">Vertical Solutions</h2>
              <h3 className="text-3xl font-bold leading-tight text-slate-900 md:text-5xl">
                Specialized ERP suites.
              </h3>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 font-bold text-brand-primary transition-colors hover:text-sky-700"
            >
              View All Modules <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, idx) => (
              <Link
                to="/services"
                key={idx}
                className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-xl sm:p-8"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary/5 text-brand-primary transition-transform group-hover:scale-110">
                    {product.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 transition-colors group-hover:text-brand-primary">
                      {product.title}
                    </h4>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {product.tags}
                    </span>
                  </div>
                </div>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-6 text-sm font-bold text-slate-500 group-hover:text-slate-900">
                  Explore Solution
                  <ChevronRight className="w-5 h-5 text-slate-300 transition-all group-hover:translate-x-1 group-hover:text-brand-primary" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-900 py-20 text-white sm:py-24 lg:py-32">
        <div className="absolute top-1/2 left-1/2 h-[400px] w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary opacity-20 blur-[150px]"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 font-serif text-4xl font-medium leading-tight tracking-tight opacity-90 sm:text-5xl md:text-7xl lg:mb-8 lg:text-9xl">
            <span className="italic">Built</span> to last.
          </h2>
          <p className="mx-auto mb-10 max-w-3xl text-lg font-light text-slate-300 sm:text-xl md:text-3xl lg:mb-12">
            Over three decades, we have forged resilient partnerships with brilliant businesses across the globe.
          </p>
          <Link
            to="/about"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-slate-900 transition-colors hover:bg-slate-200 sm:w-auto"
          >
            Discover Our Story
          </Link>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto mb-12 max-w-7xl px-4 text-center sm:mb-16 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-brand-primary">Client Success</h2>
          <h3 className="text-3xl font-bold text-slate-900">Loved by industry leaders</h3>
        </div>

        <div className="testimonials-track flex flex-col gap-6 px-4 sm:max-w-[200vw] sm:flex-row sm:flex-nowrap sm:justify-center">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="w-full flex-shrink-0 rounded-3xl border border-slate-100 bg-slate-50 p-6 sm:w-[500px] sm:p-10"
            >
              <div className="mb-6 text-brand-primary">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.411 14.596H11.205V3H21V11.233L18.435 21H14.017ZM3.811 21L6.205 14.596H1V3H10.795V11.233L8.23 21H3.811Z" />
                </svg>
              </div>
              <p className="mb-8 text-base font-medium leading-relaxed text-slate-700 sm:text-lg">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-slate-200">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
