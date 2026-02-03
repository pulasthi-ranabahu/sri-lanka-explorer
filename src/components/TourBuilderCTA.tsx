import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const TourBuilderCTA = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Sri Lanka Beach Ocean Sunset"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/90 to-navy-950/80" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center md:text-left">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full mb-6"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Custom Tour Builder</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              >
                Design Your
                <br />
                <span className="text-secondary">Dream Adventure</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-white/80 text-lg mb-8 leading-relaxed"
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
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              >
                <Button
                  size="lg"
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold px-8 py-6 text-lg rounded-xl group"
                >
                  Start Building
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
                >
                  How It Works
                </Button>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-12 grid grid-cols-3 gap-6"
              >
                {[
                  { value: "50+", label: "Destinations" },
                  { value: "100+", label: "Activities" },
                  { value: "24/7", label: "Support" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center md:text-left">
                    <div className="text-2xl md:text-3xl font-bold text-secondary">
                      {stat.value}
                    </div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2"
          >
            <div className="relative">
              <div className="w-72 h-72 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center animate-pulse-glow">
                <div className="w-56 h-56 rounded-full border border-white/30 flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-secondary/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="font-serif text-4xl font-bold text-white">
                      1-21
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                Days of Adventure
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TourBuilderCTA;
