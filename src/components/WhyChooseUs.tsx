import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Users, MapPin, Award, HeartHandshake, Shield, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "5,000+", label: "Happy Travelers" },
  { icon: MapPin, value: "50+", label: "Destinations" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: HeartHandshake, value: "100%", label: "Satisfaction" },
];

const features = [
  {
    icon: Shield,
    title: "Safe & Trusted",
    description: "Licensed travel operator with 100% safety record and comprehensive insurance coverage.",
  },
  {
    icon: HeartHandshake,
    title: "Local Expertise",
    description: "Our Sri Lankan guides share authentic cultural insights and hidden gems.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance throughout your journey for complete peace of mind.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const slideInLeftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
};

const slideInRightVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
};

const slideInUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }
  },
};

const WhyChooseUs = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y }}
      >
        <img
          src="https://images.pexels.com/photos/2835562/pexels-photo-2835562.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Sri Lanka Tea Plantations"
          className="w-full h-[120%] object-cover"
        />
        {/* Gradient Overlay for readability - whiter for visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/97 via-background/94 to-background/97" />
      </motion.div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E40AF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={index % 2 === 0 ? slideInLeftVariants : slideInRightVariants}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary flex items-center justify-center"
              >
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </motion.div>
              <motion.div
                className="font-serif text-4xl font-bold text-foreground mb-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80"
              alt="Sri Lanka Experience"
                className="rounded-2xl shadow-elegant w-full"
              />
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 shadow-elegant"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">Top Rated</div>
                    <div className="text-sm text-muted-foreground">TripAdvisor 2024</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-secondary uppercase tracking-[0.2em] text-sm font-medium">
              Why Travel With Us
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
              Creating Unforgettable Journeys Since 2009
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We're not just tour operators — we're storytellers, adventure seekers, 
              and passionate ambassadors of Sri Lanka's incredible heritage. Every 
              journey we craft is designed to create lasting memories and meaningful 
              connections with this beautiful island nation.
            </p>

            {/* Features */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={slideInUpVariants}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
