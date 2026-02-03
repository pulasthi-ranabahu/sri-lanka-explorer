import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael Thompson",
    location: "United Kingdom",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tour: "Complete Sri Lanka - 14 Days",
    text: "Absolutely magical experience! From the ancient ruins of Sigiriya to the pristine beaches of Mirissa, every moment was carefully curated. Our guide Chaminda was exceptional - knowledgeable, friendly, and truly passionate about sharing his country's heritage.",
  },
  {
    id: 2,
    name: "David Chen",
    location: "Australia",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tour: "Wildlife Safari Adventure",
    text: "The wildlife safari exceeded all expectations! We spotted leopards, elephants, and countless bird species. The team's attention to detail and commitment to responsible tourism really stood out. Will definitely return!",
  },
  {
    id: 3,
    name: "Emma & James Wilson",
    location: "Canada",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tour: "Cultural Triangle Discovery",
    text: "Our honeymoon in Sri Lanka was perfect thanks to Ceylon Voyages. The custom itinerary they created balanced adventure with relaxation beautifully. The sunrise at Sigiriya and the train ride through tea country were unforgettable.",
  },
  {
    id: 4,
    name: "Hans Mueller",
    location: "Germany",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    tour: "Hill Country Explorer",
    text: "The hill country tour was breathtaking! Hiking through tea plantations, experiencing local village life, and the famous train journey through Ella Gap - pure magic. The accommodations were excellent and the service impeccable.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section
      className="py-24 relative overflow-hidden"
    >
      {/* Top Gradient Fade - seamless transition from previous section */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background via-background/60 to-transparent z-20 pointer-events-none" />
      
      {/* Bottom Gradient Fade - seamless transition to footer */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent z-20 pointer-events-none" />
      
      {/* CSS Parallax Fixed Background Image */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/10049063/pexels-photo-10049063.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Dark Overlay - Lighter for more visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-900/75 to-navy-950/85" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-secondary blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-accent blur-3xl" />
      </div>
      
      {/* Subtle Plus Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
            Traveler Stories
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mt-3 mb-4 text-white">
            What Our Guests Say
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Don't just take our word for it — hear from travelers who've
            experienced the magic of Sri Lanka with us
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12"
              >
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-secondary mb-6 opacity-50" />

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-secondary text-secondary"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-xl md:text-2xl leading-relaxed mb-8 font-light text-white">
                  "{testimonials[activeIndex].text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-secondary"
                  />
                  <div>
                    <div className="font-semibold text-lg text-white">
                      {testimonials[activeIndex].name}
                    </div>
                    <div className="text-white/70 text-sm">
                      {testimonials[activeIndex].location}
                    </div>
                    <div className="text-secondary text-sm">
                      {testimonials[activeIndex].tour}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > activeIndex ? 1 : -1);
                      setActiveIndex(index);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === activeIndex
                        ? "w-8 bg-secondary"
                        : "bg-white/30"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
