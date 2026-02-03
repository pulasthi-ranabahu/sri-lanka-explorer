import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";

const destinations = [
  {
    id: 1,
    name: "Sigiriya",
    subtitle: "Lion Rock Fortress",
    image: "https://images.unsplash.com/photo-1586523969471-9b68408a9a9a?auto=format&fit=crop&w=1920&q=80",
    description: "Ancient rock fortress with stunning frescoes and panoramic views",
    category: "Historical",
  },
  {
    id: 2,
    name: "Colombo",
    subtitle: "Lotus Tower",
    image: "https://images.pexels.com/photos/17323991/pexels-photo-17323991.jpeg?auto=compress&cs=tinysrgb&w=1920",
    description: "Iconic tower and modern city attractions",
    category: "City",
  },
  {
    id: 3,
    name: "Yala",
    subtitle: "Wildlife Safari",
    image: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1920",
    description: "Home to elephants, leopards and exotic wildlife",
    category: "Wildlife",
  },
  {
    id: 4,
    name: "Mirissa",
    subtitle: "Beach Paradise",
    image: "https://images.pexels.com/photos/1430677/pexels-photo-1430677.jpeg?auto=compress&cs=tinysrgb&w=1920",
    description: "Pristine beaches and whale watching",
    category: "Beach",
  },
  {
    id: 5,
    name: "Ella",
    subtitle: "Nine Arch Bridge",
    image: "https://images.pexels.com/photos/15115700/pexels-photo-15115700.jpeg?auto=compress&cs=tinysrgb&w=1920",
    description: "Scenic train rides and breathtaking viewpoints",
    category: "Mountains",
  },
  {
    id: 6,
    name: "Kandy",
    subtitle: "Cultural Capital",
    image: "https://images.unsplash.com/photo-1625736300986-35d5c7e5d3b4?auto=format&fit=crop&w=1920&q=80",
    description: "Temple of the Tooth and traditional arts",
    category: "Cultural",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const slideInLeftVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const slideInRightVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const FeaturedDestinations = () => {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Top Gradient Fade - seamless transition from Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/80 to-transparent z-20 pointer-events-none" />
      
      {/* Bottom Gradient Fade - seamless transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/80 to-transparent z-20 pointer-events-none" />
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <img
          src="https://images.pexels.com/photos/6152103/pexels-photo-6152103.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Sri Lanka Landscape"
          className="w-full h-[120%] object-cover"
        />
        {/* Light overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/98 via-background/96 to-background/98" />
      </motion.div>

      {/* Subtle Plus Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E40AF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary uppercase tracking-[0.2em] text-sm font-medium">
            Explore Sri Lanka
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Featured Destinations
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From ancient wonders to natural paradises, discover the diverse
            landscapes and rich culture of Sri Lanka
          </p>
        </motion.div>

        {/* Destinations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              variants={index % 2 === 0 ? slideInLeftVariants : slideInRightVariants}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  index === 0 ? "h-[500px]" : "h-[280px]"
                }`}
              >
                {/* Image */}
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay - Navy Blue */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-900/30 to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-secondary/90 text-secondary-foreground text-xs font-medium rounded-full">
                    {destination.category}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-2 text-secondary mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{destination.subtitle}</span>
                  </div>
                  <h3
                    className={`font-serif font-bold text-white mb-2 ${
                      index === 0 ? "text-4xl" : "text-2xl"
                    }`}
                  >
                    {destination.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {destination.description}
                  </p>
                  <motion.a
                    href={`/destinations/${destination.id}`}
                    className="inline-flex items-center gap-2 text-secondary font-medium text-sm group/link"
                    whileHover={{ x: 5 }}
                  >
                    Explore
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="/destinations"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            View All Destinations
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
