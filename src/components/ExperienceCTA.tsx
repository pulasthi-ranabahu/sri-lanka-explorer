import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ExperienceCTA = () => {
  return (
    <section
      className="relative h-[60vh] min-h-[450px] overflow-hidden"
    >
      {/* CSS Parallax Fixed Background - Tiger */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Subtle Left Gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      {/* Content - Left Aligned like tourslanka.com */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="block font-serif text-white/90 text-xl md:text-2xl italic mb-2"
            >
              Extraordinary Experience
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-8"
            >
              Designed just
              <br />
              for you
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-foreground px-8 py-6 text-base font-normal rounded-none transition-all duration-300"
              >
                Contact
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Top Gradient Fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent z-[1]" />
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[1]" />
    </section>
  );
};

export default ExperienceCTA;
