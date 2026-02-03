import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const heroImages = [
  {
    url: "https://images.pexels.com/photos/10049063/pexels-photo-10049063.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Sigiriya Rock Fortress at Sunset",
  },
  {
    url: "https://images.pexels.com/photos/15115700/pexels-photo-15115700.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Nine Arch Bridge, Ella",
  },
  {
    url: "https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Sri Lanka Beach Paradise",
  },
  {
    url: "https://images.pexels.com/photos/3755013/pexels-photo-3755013.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Yala Leopard Safari",
  },
  {
    url: "https://images.pexels.com/photos/6152103/pexels-photo-6152103.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Kandy Lake and Temple",
  },
  {
    url: "https://images.pexels.com/photos/4254559/pexels-photo-4254559.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Galle Fort Lighthouse",
  },
  {
    url: "https://images.pexels.com/photos/13765920/pexels-photo-13765920.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Polonnaruwa Ancient Ruins",
  },
  {
    url: "https://images.pexels.com/photos/2835562/pexels-photo-2835562.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Nuwara Eliya Tea Plantations",
  },
  {
    url: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Tropical Beach Sunset",
  },
  {
    url: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Stilt Fishermen at Sunset",
  },
  {
    url: "https://images.pexels.com/photos/3551498/pexels-photo-3551498.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Elephant Safari",
  },
  {
    url: "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Mountain View Meditation",
  },
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Image Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="sync">
          <motion.img
            key={currentImageIndex}
            src={heroImages[currentImageIndex].url}
            alt={heroImages[currentImageIndex].alt}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ 
              opacity: 1, 
              scale: 1.1,
              transition: {
                opacity: { duration: 0.8, ease: "easeInOut" },
                scale: { duration: 4, ease: "linear" }
              }
            }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
          />
        </AnimatePresence>
        {/* Gradient Overlay - Navy Blue */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? "bg-secondary w-8" 
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-secondary uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Welcome to Paradise
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight"
        >
          Discover the Magic of
          <br />
          <span className="text-secondary">Sri Lanka</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          From ancient temples to pristine beaches, wild safaris to misty
          mountains — create unforgettable memories in the Pearl of the Indian
          Ocean
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-2 md:p-3 flex flex-col md:flex-row gap-3">
            <div className="flex-1 flex items-center gap-2 bg-white rounded-xl px-4 py-3">
              <Search className="w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Where do you want to explore?"
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground"
              />
            </div>
            <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-3">
              <Calendar className="w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="When?"
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 w-32 text-foreground"
              />
            </div>
            <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 rounded-xl">
              Explore Tours
            </Button>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          {["Sigiriya", "Ella", "Yala Safari", "Kandy", "Galle"].map((place) => (
            <button
              key={place}
              className="px-4 py-2 rounded-full border border-white/30 text-white text-sm hover:bg-white/10 transition-colors"
            >
              {place}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2 group"
      >
        <span className="text-sm tracking-wider opacity-80">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>

      {/* Floating Stats */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="hidden lg:block absolute left-8 bottom-1/4 glass-effect rounded-2xl p-4 text-white"
      >
        <div className="text-3xl font-bold text-secondary">500+</div>
        <div className="text-sm opacity-80">Happy Travelers</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="hidden lg:block absolute right-8 bottom-1/3 glass-effect rounded-2xl p-4 text-white"
      >
        <div className="text-3xl font-bold text-secondary">4.9★</div>
        <div className="text-sm opacity-80">Customer Rating</div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
