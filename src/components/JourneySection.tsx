import teaGardenImg from "@/assets/tea-garden.jpg";
import teaBrewingImg from "@/assets/tea-brewing.jpg";
import teaLeavesImg from "@/assets/tea-leaves.jpg";

const journeyCards = [
  {
    image: teaGardenImg,
    title: "Sourced with Care",
    description: "Hand-picked from the finest tea gardens in the misty hills of India, where tradition meets terroir.",
  },
  {
    image: teaBrewingImg,
    title: "Expertly Blended",
    description: "Masterfully crafted blends using secret recipes from royal kitchens, perfected over generations.",
  },
  {
    image: teaLeavesImg,
    title: "Perfectly Prepared",
    description: "Experience authentic royal chai in minutes. Just add water and indulge in centuries of tradition.",
  },
];

const JourneySection = () => {
  return (
    <section className="py-20 md:py-32 bg-cream-dark">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-brown mb-4 tracking-wide">
            A Journey Through Flavor
          </h2>
          <p className="font-elegant text-lg md:text-xl text-muted-foreground italic max-w-2xl mx-auto">
            From tea gardens to your teacup, every step is a celebration of excellence
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {journeyCards.map((card, index) => (
            <div key={index} className="group">
              {/* Image */}
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Gold Circle */}
              <div className="w-12 h-12 rounded-full bg-gold mb-4" />

              {/* Text Content */}
              <h3 className="font-display-sc text-xl text-brown mb-3 tracking-wide">
                {card.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
