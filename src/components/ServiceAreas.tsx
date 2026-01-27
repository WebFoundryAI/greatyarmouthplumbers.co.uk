import { MapPin } from 'lucide-react';

const areas = [
  'Great Yarmouth',
  'Gorleston-on-Sea',
  'Caister-on-Sea',
  'Bradwell',
  'Hopton',
  'Belton',
  'Hemsby',
  'Ormesby',
  'Winterton-on-Sea',
  'Martham',
  'Filby',
  'Acle',
];

export function ServiceAreas() {
  return (
    <section className="py-20 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-amber-600 bg-amber-50 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-4 h-4" />
            <span className="font-bold text-sm uppercase tracking-wide">Service Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-slate-900">
            Areas We Cover
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Providing expert plumbing services throughout Great Yarmouth and surrounding villages
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {areas.map((area, index) => (
              <div
                key={index}
                className="group bg-white p-4 rounded-lg text-center shadow-sm border border-slate-100 hover:border-amber-500 hover:shadow-md transition-all cursor-default"
              >
                <span className="text-slate-700 font-medium group-hover:text-amber-600 transition-colors">{area}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-slate-600">
              Don't see your area listed?{' '}
              <a href="#contact" className="text-amber-600 font-bold hover:text-amber-700 underline underline-offset-2">
                Contact us
              </a>
              {' '}to check if we can help
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
