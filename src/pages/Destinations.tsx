import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    id: "sigiriya",
    name: "Sigiriya",
    subtitle: "Ancient Rock Fortress",
    description: "Marvel at the ancient rock fortress rising 200 meters above the jungle, featuring stunning frescoes and landscaped gardens.",
    image: "https://images.pexels.com/photos/4625368/pexels-photo-4625368.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["UNESCO World Heritage", "Ancient Frescoes", "Mirror Wall"],
  },
  {
    id: "kandy",
    name: "Kandy",
    subtitle: "Cultural Capital",
    description: "Explore the sacred Temple of the Tooth Relic and experience traditional Kandyan dance performances.",
    image: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["Temple of Tooth", "Peradeniya Gardens", "Cultural Shows"],
  },
  {
    id: "ella",
    name: "Ella",
    subtitle: "Hill Country Paradise",
    description: "Discover breathtaking mountain views, iconic bridges, and tea plantations in this charming hill town.",
    image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Tea Estates"],
  },
  {
    id: "yala",
    name: "Yala National Park",
    subtitle: "Wildlife Safari",
    description: "Experience thrilling wildlife safaris with the highest concentration of leopards in the world.",
    image: "https://images.pexels.com/photos/39857/leopard-leopard-spots-animal-wild-39857.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["Leopard Sightings", "Elephant Herds", "Bird Watching"],
  },
  {
    id: "galle",
    name: "Galle",
    subtitle: "Colonial Heritage",
    description: "Wander through the historic Dutch Fort, a UNESCO site with charming cafes and boutiques.",
    image: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["Dutch Fort", "Lighthouse", "Art Galleries"],
  },
  {
    id: "mirissa",
    name: "Mirissa",
    subtitle: "Tropical Beach Paradise",
    description: "Relax on pristine beaches and embark on whale watching adventures in the Indian Ocean.",
    image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800",
    highlights: ["Whale Watching", "Secret Beach", "Surfing"],
  },
];

const Destinations = () => {
  return (
    <PageLayout>
      <PageHero
        title="Discover Sri Lanka"
        subtitle="From ancient ruins to pristine beaches, explore the diverse wonders of this tropical paradise"
        backgroundImage="https://images.pexels.com/photos/4166768/pexels-photo-4166768.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center gap-1 text-sm mb-1">
                      <MapPin className="w-4 h-4" />
                      {destination.subtitle}
                    </div>
                    <h3 className="font-serif text-2xl font-bold">{destination.name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{destination.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {destination.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="text-xs px-3 py-1 bg-muted rounded-full text-muted-foreground"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                  <Link to={`/destinations/${destination.id}`}>
                    <Button variant="outline" className="w-full group">
                      Explore
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

export default Destinations;
