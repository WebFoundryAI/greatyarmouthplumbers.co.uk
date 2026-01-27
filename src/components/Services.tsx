import { Wrench, Droplet, Flame, ShowerHead, Unplug, Waves } from 'lucide-react';

const services = [
  {
    icon: Droplet,
    title: 'Emergency Plumbing',
    description: 'Burst pipes, leaks, and flooding? We respond quickly to all plumbing emergencies 24/7 across Great Yarmouth.',
  },
  {
    icon: Flame,
    title: 'Boiler Services',
    description: 'Installation, repair, and servicing of all boiler types. Gas Safe registered engineers.',
  },
  {
    icon: ShowerHead,
    title: 'Bathroom Installations',
    description: 'Complete bathroom fitting services from design to installation. Quality guaranteed.',
  },
  {
    icon: Unplug,
    title: 'Drain Unblocking',
    description: 'Fast and effective drain clearance using the latest equipment and techniques.',
  },
  {
    icon: Waves,
    title: 'Leak Detection',
    description: 'Advanced leak detection technology to find and fix hidden water leaks.',
  },
  {
    icon: Wrench,
    title: 'General Repairs',
    description: 'From dripping taps to radiator repairs, we handle all general plumbing work.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold tracking-wider uppercase text-sm">What We Do</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-4 text-slate-900">
            Our Plumbing Services
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive plumbing solutions for homes and businesses across Great Yarmouth
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              
              <div className="w-14 h-14 bg-slate-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-amber-50 transition-colors">
                <service.icon className="w-7 h-7 text-slate-700 group-hover:text-amber-600 transition-colors" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
