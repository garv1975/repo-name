import { Crown } from "lucide-react";
import chaiCupImg from "@/assets/chai-cup.jpg";

const features = [
  {
    title: "Premium Ingredients",
    description: "Sourced from the finest tea estates across India",
  },
  {
    title: "Authentic Recipes",
    description: "Traditional blends perfected over centuries",
  },
  {
    title: "Instant Luxury",
    description: "Royal taste in minutes, not hours",
  },
];

const HeritageSection = () => {
  return (
    <section className="py-20 md:py-32 bg-cream">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-gold" />
            <Crown className="w-6 h-6 text-gold" strokeWidth={1.5} />
            <span className="w-12 h-px bg-gold" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-brown mb-4 tracking-wide">
            The Royal Heritage
          </h2>
          <p className="font-elegant text-lg md:text-xl text-muted-foreground italic">
            Where centuries of tradition meet modern convenience
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <div className="relative">
            <img
              src={chaiCupImg}
              alt="Premium chai tea cup"
              className="w-full h-auto rounded-lg shadow-elegant"
            />
          </div>

          {/* Text Content */}
          <div>
            <h3 className="font-display-sc text-2xl md:text-3xl text-brown mb-6 tracking-wide">
              Crafted for the Connoisseur
            </h3>
            <p className="font-sans text-muted-foreground leading-relaxed mb-8">
              Each blend in our collection is meticulously crafted using time-honored recipes 
              passed down through generations of royal Indian households. We've perfected 
              the art of instant chai without compromising on authenticity or flavor.
            </p>

            {/* Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                    <span className="w-3 h-3 rounded-full bg-cream" />
                  </div>
                  <div>
                    <h4 className="font-display-sc text-lg text-brown mb-1 tracking-wide">
                      {feature.title}
                    </h4>
                    <p className="font-sans text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
