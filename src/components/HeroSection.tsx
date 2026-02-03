import { motion } from "framer-motion";
import { ChevronDown, Play, Search, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?auto=format&fit=crop&w=1920&q=80"
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-teal-900/70 via-teal-800/60 to-teal-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block text-gold-400 uppercase tracking-[0.3em] text-sm font-medium mb-4">
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
          <span className="text-gold-400">Sri Lanka</span>
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
        <div className="text-3xl font-bold text-gold-400">500+</div>
        <div className="text-sm opacity-80">Happy Travelers</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="hidden lg:block absolute right-8 bottom-1/3 glass-effect rounded-2xl p-4 text-white"
      >
        <div className="text-3xl font-bold text-gold-400">4.9★</div>
        <div className="text-sm opacity-80">Customer Rating</div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
