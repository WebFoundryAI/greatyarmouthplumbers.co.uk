import { Shield, Clock, ThumbsUp, BadgeCheck, Check } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: '24/7 Emergency Response',
    description: 'Round-the-clock availability. We are always ready when you need us most.',
  },
  {
    icon: BadgeCheck,
    title: 'Gas Safe Registered',
    description: 'Fully qualified engineers carrying comprehensive insurance for your safety.',
  },
  {
    icon: ThumbsUp,
    title: 'No Hidden Costs',
    description: 'Transparent pricing with zero call-out charges. Free quotes provided.',
  },
  {
    icon: Shield,
    title: '12 Month Guarantee',
    description: 'All work is backed by our rock-solid 12-month workmanship guarantee.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-sm font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Great Yarmouth's Most Trusted Plumbers
            </h2>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              We've built our reputation on reliability, quality, and fair pricing. When you call us, you're getting a team that cares about your home as much as you do.
            </p>
            
            <ul className="space-y-4 mb-8">
              {['Fast response times usually within 60 minutes', 'Local engineers based in Great Yarmouth', 'Senior citizen discounts available', 'All parts and labor guaranteed'].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4 text-slate-900">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
