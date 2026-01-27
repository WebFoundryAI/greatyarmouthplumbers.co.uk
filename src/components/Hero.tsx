import { useState } from 'react';
import { Phone, Clock, Shield, Star, CheckCircle2, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    issue: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Hero form submitted:', formData);
    // Suggest Supabase for this later
    alert('Thanks! We will call you back shortly.');
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-20 lg:pt-0 lg:pb-0 font-sans">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1664227430687-9299c593e3da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbHVtYmVyJTIwd29ya2luZyUyMGJhdGhyb29tfGVufDF8fHx8MTc2OTUxMDQ1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Professional Plumber"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left text-white">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide uppercase">Trusted Great Yarmouth Plumbers</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl/tight font-extrabold mb-6 tracking-tight">
              Expert Plumbing <br />
              <span className="text-amber-500">Done Right</span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              From emergency leaks to full bathroom installations, our certified team delivers fast, reliable service across Great Yarmouth and surrounding areas.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a href="tel:01493123456" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-amber-400 transition-all shadow-[0_0_20px_-5px_rgba(245,158,11,0.5)]">
                <Phone className="w-5 h-5" />
                <span>01493 123 456</span>
              </a>
              <div className="flex items-center gap-2 text-slate-300 text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                Available 24/7
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 text-left border-t border-white/10 pt-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 text-amber-500">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="font-bold text-xl">4.9/5</div>
                  <div className="text-xs text-slate-400">Customer Rating</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 text-amber-500">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold text-xl">60m</div>
                  <div className="text-xs text-slate-400">Avg. Response</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form - "Get a Quote" */}
          <div className="w-full max-w-md lg:w-[420px]">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-slate-900 p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-1">Get a Free Quote</h3>
                <p className="text-slate-400 text-sm">No obligation. Fast response.</p>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label htmlFor="hero-name" className="block text-sm font-semibold text-slate-700 mb-1.5">Name</label>
                  <input 
                    id="hero-name"
                    type="text" 
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="hero-phone" className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
                  <input 
                    id="hero-phone"
                    type="tel" 
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="07700 900000"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="hero-issue" className="block text-sm font-semibold text-slate-700 mb-1.5">How can we help?</label>
                  <select 
                    id="hero-issue"
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all appearance-none"
                    value={formData.issue}
                    onChange={(e) => setFormData({...formData, issue: e.target.value})}
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="emergency">Emergency Repair</option>
                    <option value="boiler">Boiler Service/Install</option>
                    <option value="bathroom">Bathroom Renovation</option>
                    <option value="drain">Blocked Drain</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition-colors flex items-center justify-center gap-2 group">
                  Request Callback
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <div className="text-center">
                  <p className="text-xs text-slate-500 flex items-center justify-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                    Your data is secure and private
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
