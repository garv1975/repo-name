import HeaderLogo from "./HeaderLogo";

const Header = () => {
  const navItems = ["Our Story", "Products", "Blog", "Contact Us"];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-cream">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <HeaderLogo variant="dark" />
        
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-brown font-sans text-sm tracking-wide hover:text-gold transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
        
        <a
          href="#"
          className="hidden md:inline-flex px-6 py-3 bg-brown text-cream font-sans text-sm tracking-wider rounded-full hover:bg-brown-light transition-colors"
        >
          Get My Premium Chai Kit
        </a>
      </div>
    </header>
  );
};

export default Header;
