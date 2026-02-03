import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, MapPin, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    id: 1,
    name: "Cultural Triangle Discovery",
    duration: "7 Days",
    groupSize: "2-12",
    price: 899,
    rating: 4.9,
    reviews: 124,
    image: "https://images.pexels.com/photos/10049063/pexels-photo-10049063.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["Sigiriya", "Dambulla", "Polonnaruwa", "Kandy"],
    description: "Explore ancient kingdoms, sacred temples, and UNESCO World Heritage sites.",
  },
  {
    id: 2,
    name: "Wildlife Safari Adventure",
    duration: "5 Days",
    groupSize: "2-8",
    price: 749,
    rating: 4.8,
    reviews: 89,
    image: "https://images.pexels.com/photos/3755013/pexels-photo-3755013.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["Yala", "Udawalawe", "Minneriya", "Wilpattu"],
    description: "Encounter leopards, elephants, and exotic wildlife in their natural habitat.",
  },
  {
    id: 3,
    name: "Beach & Wellness Retreat",
    duration: "6 Days",
    groupSize: "2-6",
    price: 999,
    rating: 4.9,
    reviews: 156,
    image: "https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["Mirissa", "Galle", "Bentota", "Hikkaduwa"],
    description: "Rejuvenate with Ayurveda treatments and pristine beach experiences.",
  },
  {
    id: 4,
    name: "Hill Country Explorer",
    duration: "5 Days",
    groupSize: "2-10",
    price: 649,
    rating: 4.7,
    reviews: 203,
    image: "https://images.pexels.com/photos/15115700/pexels-photo-15115700.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["Ella", "Nuwara Eliya", "Adam's Peak", "Horton Plains"],
    description: "Scenic train rides, tea plantations, and misty mountain adventures.",
  },
  {
    id: 5,
    name: "Complete Sri Lanka",
    duration: "14 Days",
    groupSize: "2-8",
    price: 1899,
    rating: 5.0,
    reviews: 67,
    image: "https://images.pexels.com/photos/10049063/pexels-photo-10049063.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["All Major Sites", "Beach", "Wildlife", "Culture"],
    description: "The ultimate Sri Lanka experience covering every highlight of the island.",
  },
];

const PopularPackages = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12"
        >
          <div>
            <span className="text-secondary uppercase tracking-[0.2em] text-sm font-medium">
              Curated Experiences
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              Popular Tour Packages
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Handcrafted itineraries designed to give you the best of Sri Lanka.
              Each package can be customized to your preferences.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Packages Carousel */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className="flex-shrink-0 w-[350px] bg-card rounded-2xl overflow-hidden shadow-card group"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  From ${pkg.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-4 h-4 fill-secondary text-secondary" />
                  <span className="font-medium text-foreground">{pkg.rating}</span>
                  <span className="text-muted-foreground text-sm">
                    ({pkg.reviews} reviews)
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {pkg.description}
                </p>

                {/* Details */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {pkg.groupSize}
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.highlights.slice(0, 3).map((highlight) => (
                    <span
                      key={highlight}
                      className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground"
                    >
                      {highlight}
                    </span>
                  ))}
                  {pkg.highlights.length > 3 && (
                    <span className="px-2 py-1 bg-muted rounded-md text-xs text-muted-foreground">
                      +{pkg.highlights.length - 3} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" className="flex-1">
                    Customize
                  </Button>
                  <Button className="flex-1 bg-primary hover:bg-primary/90">
                    View Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="/packages"
            className="inline-flex items-center gap-2 text-primary font-medium hover:text-primary/80 transition-colors"
          >
            View All Packages
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PopularPackages;
