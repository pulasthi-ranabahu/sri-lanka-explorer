import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const TourBuilderCTA = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);

  return (
    <section ref={containerRef} className="relative min-h-[600px] overflow-hidden">
      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-20 pointer-events-none" />
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20 pointer-events-none" />

      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0"
        style={{ y, scale }}
      >
        <img
          src="https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Sri Lanka Beach Ocean Sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-950/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Custom Tour Builder</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Design Your
              <br />
              <span className="text-secondary">Dream Adventure</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white/80 text-lg mb-8 leading-relaxed max-w-lg"
            >
              Choose your destinations, select your pace, pick your
              accommodations — and we'll create a personalized Sri Lanka
              experience just for you. Real-time pricing, instant itinerary
              preview.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg rounded-md group"
              >
                Start Building
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-foreground px-8 py-6 text-lg rounded-md transition-all duration-300"
              >
                How It Works
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="grid grid-cols-3 gap-8"
            >
              {[
                { value: "50+", label: "Destinations" },
                { value: "100+", label: "Activities" },
                { value: "24/7", label: "Support" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-bold text-secondary">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Decorative Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              {/* Outer dashed circle */}
              <div className="w-64 h-64 xl:w-80 xl:h-80 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center">
                {/* Middle circle */}
                <div className="w-48 h-48 xl:w-60 xl:h-60 rounded-full border border-white/30 flex items-center justify-center">
                  {/* Inner gradient circle */}
                  <div className="w-32 h-32 xl:w-44 xl:h-44 rounded-full bg-gradient-to-br from-secondary/40 to-secondary/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="font-serif text-4xl xl:text-5xl font-bold text-white">
                      1-21
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm whitespace-nowrap">
                Days of Adventure
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TourBuilderCTA;
