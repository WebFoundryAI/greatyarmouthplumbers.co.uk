import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-2xl mb-6">GY Plumbing</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your trusted local plumbers serving Great Yarmouth and surrounding areas for over 15 years.
            </p>
            <div className="flex gap-4 mb-6">
              <span className="text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-500 border border-amber-500/20 px-3 py-1 rounded-full">Gas Safe Registered</span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Our Services</a></li>
              <li><a href="#about" className="hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-amber-500 transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-amber-500 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Careers</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Emergency Plumbing</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Boiler Installation</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Bathroom Fitting</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Drain Unblocking</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Leak Detection</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-amber-500">
                    <Phone className="w-4 h-4" />
                </div>
                <a href="tel:01493123456" className="hover:text-white transition-colors font-medium">
                  01493 123 456
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-amber-500">
                    <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:info@gyplumbing.co.uk" className="hover:text-white transition-colors font-medium">
                  info@gyplumbing.co.uk
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-amber-500 shrink-0">
                    <MapPin className="w-4 h-4" />
                </div>
                <span>42 Marine Parade<br />Great Yarmouth, NR30 2EJ</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © 2026 Great Yarmouth Plumbing. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
