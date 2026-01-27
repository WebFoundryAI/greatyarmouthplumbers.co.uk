import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    location: 'Gorleston-on-Sea',
    rating: 5,
    text: 'Brilliant service! Had a burst pipe on Sunday evening and they arrived within 45 minutes. Professional, efficient, and reasonably priced.',
  },
  {
    name: 'Mike Thompson',
    location: 'Caister-on-Sea',
    rating: 5,
    text: 'Used them for a full bathroom installation. The quality of work was outstanding and they completed everything on time. Highly recommend.',
  },
  {
    name: 'Emma Clarke',
    location: 'Bradwell',
    rating: 5,
    text: 'Very impressed with the boiler service. The engineer was knowledgeable, polite, and explained everything clearly. Will definitely use again.',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-bold tracking-wider uppercase text-sm">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-2 mb-4 text-slate-900">
            Local Reviews
          </h2>
          <p className="text-xl text-slate-600">
            See what our customers in Great Yarmouth have to say
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 relative"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 text-slate-200" />
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">
                  {testimonial.name[0]}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-amber-600 font-medium">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
