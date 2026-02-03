import { motion } from "framer-motion";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";

const packages = [
  {
    id: "cultural",
    name: "Cultural Heritage Tour",
    duration: "7 Days / 6 Nights",
    groupSize: "2-12 People",
    price: 899,
    rating: 4.9,
    reviews: 245,
    image: "https://images.pexels.com/photos/4625368/pexels-photo-4625368.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Explore ancient temples, UNESCO sites, and traditional villages on this immersive cultural journey.",
    highlights: ["Sigiriya Rock Fortress", "Temple of the Tooth", "Dambulla Cave Temple", "Traditional Dance Show"],
  },
  {
    id: "wildlife",
    name: "Wildlife Safari Adventure",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    price: 749,
    rating: 4.8,
    reviews: 189,
    image: "https://images.pexels.com/photos/39857/leopard-leopard-spots-animal-wild-39857.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Experience thrilling wildlife encounters at Sri Lanka's best national parks.",
    highlights: ["Yala Safari", "Udawalawe Elephants", "Minneriya Gathering", "Bird Watching"],
  },
  {
    id: "beach",
    name: "Beach Paradise Escape",
    duration: "6 Days / 5 Nights",
    groupSize: "2-10 People",
    price: 699,
    rating: 4.7,
    reviews: 312,
    image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Relax on pristine beaches, go whale watching, and enjoy water sports.",
    highlights: ["Mirissa Beach", "Whale Watching", "Galle Fort", "Snorkeling"],
  },
  {
    id: "adventure",
    name: "Adventure Explorer",
    duration: "8 Days / 7 Nights",
    groupSize: "4-12 People",
    price: 999,
    rating: 4.9,
    reviews: 156,
    image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Hiking, rafting, and zip-lining through Sri Lanka's most scenic landscapes.",
    highlights: ["Ella Rock Hike", "White Water Rafting", "Zip-lining", "Waterfall Abseiling"],
  },
  {
    id: "wellness",
    name: "Wellness & Ayurveda Retreat",
    duration: "10 Days / 9 Nights",
    groupSize: "1-6 People",
    price: 1499,
    rating: 4.9,
    reviews: 98,
    image: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Rejuvenate with traditional Ayurveda treatments and yoga sessions.",
    highlights: ["Ayurveda Treatments", "Yoga Sessions", "Meditation", "Spa Therapies"],
  },
  {
    id: "honeymoon",
    name: "Romantic Honeymoon Package",
    duration: "7 Days / 6 Nights",
    groupSize: "2 People",
    price: 1299,
    rating: 5.0,
    reviews: 134,
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Create unforgettable memories with your loved one in paradise.",
    highlights: ["Private Beach Dinners", "Couples Spa", "Scenic Train Ride", "Sunset Cruise"],
  },
];

const Packages = () => {
  return (
    <PageLayout>
      <PageHero
        title="Tour Packages"
        subtitle="Carefully curated experiences for every type of traveler"
        backgroundImage="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1920"
        backgroundImages={[
          "https://images.pexels.com/photos/4625368/pexels-photo-4625368.jpeg?auto=compress&cs=tinysrgb&w=1920",
          "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1920",
          "https://images.pexels.com/photos/39857/leopard-leopard-spots-animal-wild-39857.jpeg?auto=compress&cs=tinysrgb&w=1920",
          "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1920"
        ]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    From ${pkg.price}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-medium">{pkg.rating}</span>
                    <span className="text-muted-foreground text-sm">({pkg.reviews} reviews)</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>

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

                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.highlights.slice(0, 3).map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <Link to={`/packages/${pkg.id}`}>
                    <Button className="w-full group">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Packages;
