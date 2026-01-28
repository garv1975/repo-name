import { Crown, ArrowRight } from "lucide-react";

const stats = [
  { value: "100%", label: "Natural Ingredients" },
  { value: "300+", label: "Years of Tradition" },
  { value: "2 Min", label: "To Perfect Chai" },
];

const StatsSection = () => {
  return (
    <section className="relative py-20 md:py-32 bg-warm-tan overflow-hidden">
      {/* Decorative Circles */}
      <div className="decorative-circle w-32 h-32 top-16 left-16 opacity-20" />
      <div className="decorative-circle w-48 h-48 bottom-16 right-16 opacity-15" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Crown Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full bg-cream/20 flex items-center justify-center">
            <Crown className="w-8 h-8 text-cream" strokeWidth={1.5} />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-2 tracking-wide">
            Why Royal Households
          </h2>
          <p className="font-display-sc text-3xl md:text-4xl lg:text-5xl text-gold tracking-widest">
            Choose Us
          </p>
          <p className="font-sans text-cream/80 mt-6 max-w-2xl mx-auto">
            The same exacting standards that satisfied Indian royalty, now available for your home
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="font-display text-4xl md:text-5xl lg:text-6xl text-cream mb-2">
                {stat.value}
              </p>
              <p className="font-sans text-sm md:text-base text-cream/70 tracking-wide uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 bg-cream text-brown font-sans text-sm tracking-widest uppercase rounded-full hover:bg-gold transition-colors"
          >
            Explore Our Collection
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 border border-cream text-cream font-sans text-sm tracking-widest uppercase rounded-full hover:bg-cream/10 transition-colors"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
