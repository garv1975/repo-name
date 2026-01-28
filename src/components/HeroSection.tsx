import { useState } from "react";
import { Lock, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast.success("Welcome to the royal circle! We'll notify you at launch.");
    setEmail("");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-brown/70" />
      
      {/* Decorative Circles */}
      <div className="decorative-circle w-40 h-40 top-20 left-10 opacity-20" />
      <div className="decorative-circle w-60 h-60 bottom-20 right-10 opacity-15" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        {/* Coming Soon Badge */}
        <div className="animate-fade-in-up mb-8">
          <span className="inline-block px-8 py-3 bg-gold/80 text-brown font-sans text-sm tracking-widest uppercase rounded-full">
            Coming Soon
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="animate-fade-in-up-delay-1 font-display text-5xl md:text-7xl lg:text-8xl text-cream mb-2 tracking-wide">
          Brew the Royal
        </h1>
        <h2 className="animate-fade-in-up-delay-1 font-display-sc text-4xl md:text-6xl lg:text-7xl text-gold tracking-widest mb-8">
          Tradition
        </h2>

        {/* Description */}
        <p className="animate-fade-in-up-delay-2 font-elegant text-lg md:text-xl text-cream/90 italic mb-4 max-w-2xl mx-auto">
          Experience the essence of premium instant chai tea premix, 
          inspired by the royal households of India.
        </p>
        <p className="animate-fade-in-up-delay-2 font-sans text-base text-cream/70 mb-10 max-w-2xl mx-auto">
          Handcrafted blends that bring centuries of heritage to your cup. Every sip 
          tells a story of luxury, tradition, and authentic flavor.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubmit} className="animate-fade-in-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full sm:w-80 px-6 py-4 bg-cream/10 border border-cream/30 rounded-full text-cream placeholder:text-cream/50 font-sans focus:outline-none focus:border-gold transition-colors"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto px-8 py-4 bg-gold text-brown font-sans font-medium text-sm tracking-widest uppercase rounded-full hover:bg-gold-light transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-brown/30 border-t-brown rounded-full animate-spin" />
              </span>
            ) : (
              <>Notify Me</>
            )}
          </button>
        </form>

        {/* Privacy Note */}
        <p className="animate-fade-in-up-delay-3 flex items-center justify-center gap-2 text-sm text-cream/60 font-sans mb-10">
          <Lock className="w-4 h-4" />
          Be the first to taste royalty. No spam, just premium tea updates.
        </p>

        {/* Social Icons */}
        <div className="animate-fade-in-up-delay-4 flex items-center justify-center gap-6">
          {["instagram", "facebook", "twitter"].map((social) => (
            <a
              key={social}
              href="#"
              className="w-12 h-12 rounded-full border border-cream/30 flex items-center justify-center text-cream/70 hover:border-gold hover:text-gold transition-colors"
            >
              {social === "instagram" && (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              )}
              {social === "facebook" && (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              )}
              {social === "twitter" && (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
