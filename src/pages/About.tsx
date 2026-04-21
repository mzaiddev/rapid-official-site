import { Linkedin, Globe, ArrowRight, Rocket } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const heroImage =
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200';
const overviewAvatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200',
];
const teamImage =
  'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000';

const journey = [
  {
    year: '1996',
    title: 'The Genesis',
    text: 'We started our journey with 5 visionaries working passionately to grow with utmost dedication.',
    detail:
      'The foundation was simple: build dependable enterprise software and stay close to the client problems that matter most.',
    highlights: ['5 founding visionaries', 'Client-first delivery', 'ERP roots established'],
    img: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200',
  },
  {
    year: '2005',
    title: 'Global Reach',
    text: 'We reached our first major milestone, expanding services to global markets with 40+ specialized engineers.',
    detail:
      'Cross-border delivery matured rapidly as our teams began supporting larger enterprise operations across multiple regions.',
    highlights: ['40+ specialists', 'International rollout', 'Enterprise scaling'],
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
  },
  {
    year: '2012',
    title: 'Cloud Revolution',
    text: 'We pioneered cloud-native ERP architectures, setting a new standard for scalability in high-demand industries.',
    detail:
      'That shift unlocked faster deployments, more resilient operations, and a stronger platform for long-term growth.',
    highlights: ['Cloud-native stack', 'Faster deployments', 'Scalable architecture'],
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
  },
  {
    year: '2019',
    title: 'AI Integration',
    text: 'We started working on Artificial Intelligence and Machine Learning, delivering our first predictive ERP module.',
    detail:
      'This expansion helped our clients move from reporting on the past to forecasting what comes next with more confidence.',
    highlights: ['Predictive modules', 'AI-driven insights', 'Smarter operations'],
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200',
  },
  {
    year: '2024',
    title: 'The Future',
    text: 'Today we are 150+ engineers, serving 40+ countries worldwide, powering next-generation market leaders.',
    detail:
      'Our focus remains the same: practical innovation, strong partnerships, and software that keeps complex businesses moving.',
    highlights: ['150+ engineers', '40+ countries', 'Next-gen enterprise delivery'],
    img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200',
  },
];

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col bg-white"
    >
      <section className="relative overflow-hidden bg-brand-dark pt-24 pb-20 lg:pt-40 lg:pb-48">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-primary/30 opacity-20"></div>
          <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-primary/20 opacity-30 animate-[spin_60s_linear_infinite] border-dashed"></div>
          <div className="absolute top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-primary/10 opacity-10 animate-[spin_40s_linear_infinite_reverse]"></div>
          <div className="absolute top-1/4 right-0 h-[500px] w-[500px] rounded-full bg-brand-primary/40 opacity-20 blur-[120px]"></div>
          <div className="absolute bottom-1/4 left-0 h-[400px] w-[400px] rounded-full bg-brand-primary/30 opacity-20 blur-[100px]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-1 text-sm font-bold uppercase tracking-wide text-brand-primary">
                We're Powering
              </div>
              <h1 className="mb-6 text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:mb-8 lg:text-7xl">
                Digital <br />
                <span className="animate-gradient-x bg-gradient-to-r from-brand-primary via-white to-brand-primary bg-[length:200%_auto] bg-clip-text text-transparent">
                  Transformation
                </span>
              </h1>
              <p className="mb-8 max-w-lg text-base font-medium leading-relaxed text-slate-400 sm:text-lg lg:mb-10 lg:text-xl">
                We put in maximal effort to help you create an exceptional operational experience through intelligent ERP architecture.
              </p>
              <Link
                to="/contact"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-brand-primary px-8 py-4 font-bold text-white transition-all shadow-xl shadow-brand-primary/20 hover:bg-brand-secondary sm:w-auto"
              >
                Contact Us <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden md:block"
            >
              <div className="relative z-10 overflow-hidden rounded-[3rem] border-4 border-white/5 shadow-2xl md:skew-x-3 md:rotate-2">
                <img
                  src={heroImage}
                  alt="Software engineers collaborating on enterprise technology"
                  className="h-auto w-full"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-brand-primary/40 blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-white/20 blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-8 text-3xl font-black tracking-tight text-slate-900">Company Overview</h2>
              <div className="space-y-6 text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
                <p>
                  Rapid is a premier global enterprise software firm that has empowered corporations, global enterprises, and start-ups in their digital journey for nearly three decades.
                </p>
                <p>
                  We deliver innovative solutions to businesses of all sizes, from start-ups to Fortune 500 companies, helping them modernize operations with dependable architecture and measurable business value.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="group relative rounded-[2.5rem] bg-brand-primary p-1 shadow-2xl"
            >
              <div className="flex flex-col items-center rounded-[2.2rem] bg-white p-6 sm:p-8 lg:p-10">
                <div className="mb-6 flex w-full items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <div className="rounded-lg bg-brand-primary p-2 text-white">
                      <Linkedin className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-slate-800">Let's Connect</span>
                  </div>
                </div>

                <div className="mb-8 text-center">
                  <div className="mb-2 text-4xl font-black text-slate-900 sm:text-5xl">12.7T+</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-slate-500">Followers</div>
                </div>

                <div className="flex w-full flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 sm:flex-row sm:items-center">
                  <div className="flex -space-x-4">
                    {overviewAvatars.map((avatar, index) => (
                      <div key={index} className="h-12 w-12 overflow-hidden rounded-full border-4 border-white shadow-sm">
                        <img src={avatar} alt="Rapid leadership profile" referrerPolicy="no-referrer" />
                      </div>
                    ))}
                  </div>
                  <div className="flex-grow"></div>
                  <button className="flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-6 py-3 font-bold text-white transition-all shadow-lg shadow-brand-primary/20 hover:bg-brand-secondary">
                    LinkedIn <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-slate-50 py-16 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20">
            <motion.div
              initial={{ x: -100, rotate: -10, opacity: 0 }}
              whileInView={{ x: 0, rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative w-full max-w-[500px]"
            >
              <div className="relative aspect-square overflow-hidden rounded-full border-8 border-white shadow-2xl">
                <img
                  src={teamImage}
                  alt="Rapid team collaborating in a modern office"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute top-4 right-0 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-brand-primary text-white shadow-xl sm:top-0 sm:h-24 sm:w-24 sm:-mr-8 sm:mt-8">
                <Rocket className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-2xl flex-grow"
            >
              <h2 className="mb-8 text-3xl font-black text-slate-900 sm:text-4xl">Who We Are</h2>
              <div className="space-y-6 text-base font-medium leading-relaxed text-slate-600 sm:text-lg">
                <p>
                  Rapid, founded in 1996, is a leading software architecture consulting firm known for its innovative and robust digital solutions. Our team of engineers and architects has successfully delivered localized projects globally.
                </p>
                <p>
                  We are believers in change driven by technology and innovation. Having worked with top Fortune companies and developed numerous on-demand solutions, we continue to build user-friendly, quality-driven enterprise platforms that help brands grow with confidence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-dark py-20 text-white sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_var(--color-brand-primary)_0%,_transparent_100%)] opacity-5"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center sm:mb-20 lg:mb-24">
            <h2 className="mb-4 text-sm font-black uppercase tracking-widest text-brand-primary">A Timeline Of Our Journey</h2>
            <div className="mx-auto mb-6 h-1 w-20 bg-brand-primary"></div>
            <h3 className="text-3xl font-bold opacity-60">The Rapid History</h3>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-brand-primary/30 lg:left-1/2 lg:-translate-x-1/2"></div>

            <div className="space-y-12 sm:space-y-16 lg:space-y-24">
              {journey.map((item, idx) => {
                const reverse = idx % 2 === 1;

                return (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    className="relative pl-16 lg:pl-0"
                  >
                    <div className="absolute left-5 top-8 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-brand-primary bg-[#050a18] text-[11px] font-black shadow-[0_0_20px_rgba(40,168,224,0.5)] lg:left-1/2">
                      {item.year}
                    </div>

                    <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-20">
                      <div className={reverse ? 'lg:order-2 lg:pl-16' : 'lg:pr-16'}>
                        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      </div>

                      <div
                        className={
                          reverse
                            ? 'flex flex-col gap-5 lg:order-1 lg:items-end lg:pr-16 lg:text-right'
                            : 'flex flex-col gap-5 lg:items-start lg:pl-16'
                        }
                      >
                        <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-brand-primary">
                          Milestone {item.year}
                        </div>
                        <div>
                          <h4 className="mb-3 text-2xl font-black text-white sm:text-3xl">{item.title}</h4>
                          <p className="mb-4 max-w-xl text-base font-medium leading-relaxed text-slate-300">
                            {item.text}
                          </p>
                          <p className="max-w-xl text-sm leading-relaxed text-slate-400 sm:text-base">
                            {item.detail}
                          </p>
                        </div>
                        <div className={`flex flex-wrap gap-2 ${reverse ? 'lg:justify-end' : ''}`}>
                          {item.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold tracking-wide text-slate-200"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-dark py-16 sm:py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="mb-10 text-3xl font-black text-white sm:text-4xl">Global Footprint</h2>
              <div className="grid gap-6 text-[10px] font-medium uppercase tracking-widest text-slate-400 sm:grid-cols-2 sm:gap-8">
                {[
                  { country: 'UNITED STATES', city: 'Silicon Valley' },
                  { country: 'UNITED KINGDOM', city: 'London' },
                  { country: 'INDIA', city: 'Mumbai' },
                  { country: 'AUSTRALIA', city: 'Sydney' },
                ].map((loc) => (
                  <div key={loc.country} className="group flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-brand-primary transition-all group-hover:bg-brand-primary group-hover:text-white">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-white">{loc.country}</div>
                      <div className="opacity-60">{loc.city}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-2xl sm:rounded-[3rem] sm:p-8 lg:p-12">
              <h3 className="mb-2 text-2xl font-black text-slate-900">Request Architecture Session</h3>
              <p className="mb-8 font-medium text-slate-500">Discuss your digital transformation roadmap.</p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 font-medium outline-none transition-all focus:border-brand-primary sm:px-6"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 font-medium outline-none transition-all focus:border-brand-primary sm:px-6"
                />
                <textarea
                  rows={3}
                  placeholder="Tell us about your project"
                  className="w-full resize-none rounded-2xl border border-slate-100 bg-slate-50 px-5 py-4 font-medium outline-none transition-all focus:border-brand-primary sm:px-6"
                ></textarea>
                <button className="w-full rounded-2xl bg-brand-primary py-4 font-black text-white transition-all shadow-xl shadow-brand-primary/20 hover:bg-brand-secondary">
                  SEND ENQUIRY
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
