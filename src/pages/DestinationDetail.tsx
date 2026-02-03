import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Clock, Star, ArrowLeft, Check } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";

const destinationsData: Record<string, {
  name: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  highlights: string[];
  activities: string[];
  bestTime: string;
  duration: string;
}> = {
  sigiriya: {
    name: "Sigiriya",
    subtitle: "Ancient Rock Fortress",
    description: "Marvel at the ancient rock fortress rising 200 meters above the jungle",
    longDescription: "Sigiriya, also known as Lion Rock, is an ancient rock fortress located in the northern Matale District. It was built during the reign of King Kashyapa (477-495 AD) and is one of the best preserved examples of ancient urban planning. The site features the remains of an upper palace, a mid-level terrace, the mirror wall featuring ancient graffiti, and the famous lion gate entrance.",
    image: "https://images.pexels.com/photos/4166768/pexels-photo-4166768.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: ["UNESCO World Heritage Site", "Ancient Frescoes", "Mirror Wall", "Water Gardens", "Boulder Gardens"],
    activities: ["Rock Climbing", "Photography", "Historical Tours", "Bird Watching", "Sunrise Views"],
    bestTime: "January to April",
    duration: "Half day to full day",
  },
  kandy: {
    name: "Kandy",
    subtitle: "Cultural Capital",
    description: "Explore the sacred Temple of the Tooth Relic",
    longDescription: "Kandy is the cultural capital of Sri Lanka and home to the Temple of the Sacred Tooth Relic, one of the most sacred Buddhist sites in the world. The city is surrounded by mountains and is famous for its beautiful lake, rich cultural heritage, and the Esala Perahera festival featuring traditional dancers, drummers, and decorated elephants.",
    image: "https://images.pexels.com/photos/13302873/pexels-photo-13302873.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: ["Temple of the Tooth", "Kandy Lake", "Royal Botanical Gardens", "Cultural Dance Shows", "Tea Museum"],
    activities: ["Temple Visits", "Cultural Shows", "Garden Tours", "Shopping", "Cooking Classes"],
    bestTime: "December to April",
    duration: "1-2 days",
  },
  ella: {
    name: "Ella",
    subtitle: "Hill Country Paradise",
    description: "Discover breathtaking mountain views and tea plantations",
    longDescription: "Ella is a small town in the Badulla District of Uva Province, nestled in the hill country of Sri Lanka. Famous for its stunning views, tea plantations, and the iconic Nine Arch Bridge, Ella offers a perfect blend of natural beauty and adventure. The scenic train ride from Kandy to Ella is often considered one of the most beautiful train journeys in the world.",
    image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: ["Nine Arch Bridge", "Little Adam's Peak", "Ella Rock", "Ravana Falls", "Tea Factories"],
    activities: ["Hiking", "Train Journeys", "Tea Tasting", "Waterfall Visits", "Zip-lining"],
    bestTime: "January to March",
    duration: "2-3 days",
  },
  yala: {
    name: "Yala National Park",
    subtitle: "Wildlife Safari",
    description: "Experience thrilling wildlife safaris with leopards",
    longDescription: "Yala National Park is the most visited and second largest national park in Sri Lanka. It is famous for having the highest concentration of leopards in the world. The park is also home to elephants, sloth bears, crocodiles, and numerous bird species. A jeep safari through Yala offers an unforgettable wildlife experience.",
    image: "https://images.pexels.com/photos/39857/leopard-leopard-spots-animal-wild-39857.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: ["Leopard Sightings", "Elephant Herds", "Sloth Bears", "Crocodiles", "Over 200 Bird Species"],
    activities: ["Jeep Safaris", "Bird Watching", "Photography", "Camping", "Nature Walks"],
    bestTime: "February to July",
    duration: "1-2 days",
  },
  galle: {
    name: "Galle",
    subtitle: "Colonial Heritage",
    description: "Wander through the historic Dutch Fort",
    longDescription: "Galle is a city on the southwest coast of Sri Lanka, famous for Galle Fort, a UNESCO World Heritage Site built by the Portuguese in 1588 and extensively fortified by the Dutch in the 17th century. The fort area contains numerous colonial buildings, museums, boutique hotels, shops, and restaurants, making it a perfect destination for history enthusiasts and travelers alike.",
    image: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: ["Dutch Fort", "Galle Lighthouse", "Maritime Museum", "Art Galleries", "Dutch Reformed Church"],
    activities: ["Fort Walking Tours", "Museum Visits", "Shopping", "Sunset Views", "Cricket at Galle Stadium"],
    bestTime: "December to April",
    duration: "1-2 days",
  },
  mirissa: {
    name: "Mirissa",
    subtitle: "Tropical Beach Paradise",
    description: "Relax on pristine beaches and go whale watching",
    longDescription: "Mirissa is a small town on the south coast of Sri Lanka, famous for its crescent-shaped beach, whale watching opportunities, and laid-back atmosphere. From November to April, blue whales and sperm whales can be spotted just a few miles offshore. The beach offers excellent swimming, surfing, and some of the best sunsets in Sri Lanka.",
    image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1920",
    highlights: ["Whale Watching", "Mirissa Beach", "Coconut Tree Hill", "Secret Beach", "Parrot Rock"],
    activities: ["Whale Watching", "Surfing", "Snorkeling", "Beach Relaxation", "Nightlife"],
    bestTime: "November to April",
    duration: "2-3 days",
  },
};

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const destination = id ? destinationsData[id] : null;

  if (!destination) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">Destination Not Found</h1>
            <Link to="/destinations">
              <Button>View All Destinations</Button>
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <PageHero
        title={destination.name}
        subtitle={destination.subtitle}
        backgroundImage={destination.image}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Link to="/destinations" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Destinations
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="font-serif text-3xl font-bold mb-6">About {destination.name}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {destination.longDescription}
                </p>

                <h3 className="font-serif text-2xl font-bold mb-4">Things to Do</h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {destination.activities.map((activity) => (
                    <div key={activity} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span>{activity}</span>
                    </div>
                  ))}
                </div>

                <h3 className="font-serif text-2xl font-bold mb-4">Highlights</h3>
                <div className="flex flex-wrap gap-2">
                  {destination.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-card rounded-xl p-6 shadow-card sticky top-24"
              >
                <h3 className="font-serif text-xl font-bold mb-4">Quick Info</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Best Time to Visit</p>
                      <p className="font-medium">{destination.bestTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Recommended Duration</p>
                      <p className="font-medium">{destination.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Rating</p>
                      <p className="font-medium">4.8/5 (500+ reviews)</p>
                    </div>
                  </div>
                </div>

                <Link to="/tour-builder">
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Plan Your Trip
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default DestinationDetail;
