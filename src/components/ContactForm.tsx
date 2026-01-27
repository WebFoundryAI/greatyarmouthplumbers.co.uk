import { useState } from 'react';
import { Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold tracking-wider uppercase text-sm">Contact Us</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-4 text-slate-900">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Fill in the form below or call us directly for immediate assistance
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
          {/* Contact Information */}
          <div className="bg-slate-900 text-white p-10 sm:p-12 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0 text-slate-900">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold mb-1 text-lg">Phone</div>
                    <a href="tel:01493123456" className="text-xl hover:text-amber-400 transition-colors">01493 123 456</a>
                    <div className="text-sm text-slate-400 mt-1">Available 24/7</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 text-amber-500 border border-slate-700">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold mb-1 text-lg">Email</div>
                    <a href="mailto:info@gyplumbing.co.uk" className="hover:text-amber-400 transition-colors">
                      info@gyplumbing.co.uk
                    </a>
                    <div className="text-sm text-slate-400 mt-1">We respond within 1 hour</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center flex-shrink-0 text-amber-500 border border-slate-700">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold mb-1 text-lg">Address</div>
                    <div>42 Marine Parade</div>
                    <div>Great Yarmouth, NR30 2EJ</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-12 border-t border-slate-800">
              <h4 className="font-bold text-lg mb-4 text-white">Opening Hours</h4>
              <div className="space-y-3 text-slate-400">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium text-white">7:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium text-white">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium text-white">9:00 AM - 5:00 PM</span>
                </div>
                <div className="pt-4 mt-2">
                  <span className="text-amber-500 font-bold flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
                    Emergency Services: 24/7
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="p-10 sm:p-12 bg-slate-50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                  placeholder="John Smith"
                />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    placeholder="07700 900000"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm font-bold text-slate-700 mb-2">
                  Service Required *
                </label>
                <div className="relative">
                    <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all appearance-none"
                    >
                    <option value="">Select a service...</option>
                    <option value="emergency">Emergency Plumbing</option>
                    <option value="boiler">Boiler Services</option>
                    <option value="bathroom">Bathroom Installation</option>
                    <option value="drain">Drain Unblocking</option>
                    <option value="leak">Leak Detection</option>
                    <option value="repair">General Repairs</option>
                    <option value="other">Other</option>
                    </select>
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Please describe your plumbing issue or requirements..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>Send Enquiry</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  Thank you! We'll be in touch within the hour.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
