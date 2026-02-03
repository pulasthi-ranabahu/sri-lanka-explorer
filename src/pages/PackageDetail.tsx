import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Users, Star, ArrowLeft, Check, MapPin, Calendar } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";

const packagesData: Record<string, {
  name: string;
  duration: string;
  groupSize: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  longDescription: string;
  highlights: string[];
  included: string[];
  itinerary: { day: number; title: string; description: string }[];
}> = {
  cultural: {
    name: "Cultural Heritage Tour",
    duration: "7 Days / 6 Nights",
    groupSize: "2-12 People",
    price: 899,
    rating: 4.9,
    reviews: 245,
    image: "https://images.pexels.com/photos/4166768/pexels-photo-4166768.jpeg?auto=compress&cs=tinysrgb&w=1920",
    description: "Explore ancient temples, UNESCO sites, and traditional villages",
    longDescription: "Immerse yourself in the rich cultural heritage of Sri Lanka on this comprehensive 7-day journey. From ancient rock fortresses to sacred temples, experience the living history of this island nation while enjoying comfortable accommodations and expert local guides.",
    highlights: ["Sigiriya Rock Fortress", "Temple of the Tooth", "Dambulla Cave Temple", "Traditional Dance Show", "Polonnaruwa Ruins", "Kandy Lake"],
    included: ["Accommodation (4-star hotels)", "Daily breakfast & dinner", "Private air-conditioned vehicle", "English-speaking guide", "All entrance fees", "Airport transfers"],
    itinerary: [
      { day: 1, title: "Arrival in Colombo", description: "Airport pickup and transfer to Negombo. Evening at leisure to explore the fishing village." },
      { day: 2, title: "Dambulla & Sigiriya", description: "Visit Dambulla Cave Temple, then climb Sigiriya Rock Fortress for sunset views." },
      { day: 3, title: "Polonnaruwa", description: "Explore the ancient city of Polonnaruwa, a UNESCO World Heritage Site." },
      { day: 4, title: "Kandy", description: "Scenic drive to Kandy, visit the Temple of the Tooth, evening cultural show." },
      { day: 5, title: "Kandy Exploration", description: "Visit Royal Botanical Gardens and explore local markets." },
      { day: 6, title: "Hill Country", description: "Scenic train journey through tea plantations, visit a tea factory." },
      { day: 7, title: "Departure", description: "Transfer to Colombo airport for your departure." },
    ],
  },
  wildlife: {
    name: "Wildlife Safari Adventure",
    duration: "5 Days / 4 Nights",
    groupSize: "2-8 People",
    price: 749,
    rating: 4.8,
    reviews: 189,
    image: "https://images.pexels.com/photos/39857/leopard-leopard-spots-animal-wild-39857.jpeg?auto=compress&cs=tinysrgb&w=1920",
    description: "Experience thrilling wildlife encounters at Sri Lanka's best national parks",
    longDescription: "Get up close with Sri Lanka's incredible wildlife on this action-packed safari adventure. From leopards to elephants, experience the best of the island's national parks with expert naturalist guides.",
    highlights: ["Yala Safari", "Udawalawe Elephants", "Minneriya Gathering", "Bird Watching", "Leopard Tracking", "Elephant Transit Home"],
    included: ["Safari lodge accommodation", "All meals", "4x4 safari jeep", "Naturalist guide", "Park entrance fees", "Binoculars rental"],
    itinerary: [
      { day: 1, title: "Arrival & Udawalawe", description: "Transfer to Udawalawe, evening elephant safari." },
      { day: 2, title: "Udawalawe Safari", description: "Full-day safari, visit Elephant Transit Home." },
      { day: 3, title: "Transfer to Yala", description: "Scenic drive to Yala, afternoon safari." },
      { day: 4, title: "Yala Full Day", description: "Early morning and afternoon safaris for leopard sighting." },
      { day: 5, title: "Departure", description: "Final morning safari, transfer to airport." },
    ],
  },
  beach: {
    name: "Beach Paradise Escape",
    duration: "6 Days / 5 Nights",
    groupSize: "2-10 People",
    price: 699,
    rating: 4.7,
    reviews: 312,
    image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1920",
    description: "Relax on pristine beaches, go whale watching, and enjoy water sports",
    longDescription: "Escape to the tropical beaches of southern Sri Lanka. From whale watching to snorkeling, this package offers the perfect blend of relaxation and adventure on some of the island's most beautiful coastlines.",
    highlights: ["Mirissa Beach", "Whale Watching", "Galle Fort", "Snorkeling", "Unawatuna Beach", "Turtle Hatchery"],
    included: ["Beachfront resort", "Daily breakfast", "Whale watching tour", "Snorkeling equipment", "Galle Fort tour", "Airport transfers"],
    itinerary: [
      { day: 1, title: "Arrival in Galle", description: "Transfer to beach resort, evening at leisure." },
      { day: 2, title: "Galle Fort", description: "Walking tour of historic Galle Fort, afternoon beach time." },
      { day: 3, title: "Whale Watching", description: "Early morning whale watching in Mirissa, afternoon relaxation." },
      { day: 4, title: "Water Activities", description: "Snorkeling, kayaking, or surfing lessons." },
      { day: 5, title: "Beach Day", description: "Full day of relaxation, spa treatments available." },
      { day: 6, title: "Departure", description: "Transfer to Colombo airport." },
    ],
  },
  adventure: {
    name: "Adventure Explorer",
    duration: "8 Days / 7 Nights",
    groupSize: "4-12 People",
    price: 999,
    rating: 4.9,
    reviews: 156,
    image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1920",
    description: "Hiking, rafting, and zip-lining through Sri Lanka's most scenic landscapes",
    longDescription: "For thrill-seekers and adventure lovers, this action-packed itinerary takes you through Sri Lanka's most dramatic landscapes with activities ranging from white water rafting to zip-lining through tea country.",
    highlights: ["Ella Rock Hike", "White Water Rafting", "Zip-lining", "Waterfall Abseiling", "Mountain Biking", "Canyoning"],
    included: ["Adventure lodges", "All meals", "Professional guides", "Safety equipment", "Adventure activities", "Transport"],
    itinerary: [
      { day: 1, title: "Arrival & Kitulgala", description: "Transfer to Kitulgala, evening orientation." },
      { day: 2, title: "White Water Rafting", description: "Full-day rafting on Kelani River." },
      { day: 3, title: "Canyoning", description: "Waterfall abseiling and canyoning adventure." },
      { day: 4, title: "Transfer to Ella", description: "Scenic drive to hill country." },
      { day: 5, title: "Ella Rock", description: "Sunrise hike to Ella Rock summit." },
      { day: 6, title: "Zip-lining", description: "Flying over tea plantations, Nine Arch Bridge visit." },
      { day: 7, title: "Mountain Biking", description: "Cycling through tea estates and villages." },
      { day: 8, title: "Departure", description: "Transfer to Colombo airport." },
    ],
  },
  wellness: {
    name: "Wellness & Ayurveda Retreat",
    duration: "10 Days / 9 Nights",
    groupSize: "1-6 People",
    price: 1499,
    rating: 4.9,
    reviews: 98,
    image: "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=1920",
    description: "Rejuvenate with traditional Ayurveda treatments and yoga sessions",
    longDescription: "Embark on a transformative wellness journey combining ancient Ayurvedic healing with yoga, meditation, and Sri Lanka's natural beauty. This retreat offers personalized treatments designed to restore balance and vitality.",
    highlights: ["Ayurveda Treatments", "Daily Yoga", "Meditation", "Spa Therapies", "Healthy Cuisine", "Nature Walks"],
    included: ["Ayurveda resort", "All Ayurvedic meals", "Daily treatments", "Yoga sessions", "Meditation classes", "Doctor consultations"],
    itinerary: [
      { day: 1, title: "Arrival & Consultation", description: "Welcome, Ayurvedic doctor consultation, personalized program design." },
      { day: 2, title: "Begin Treatments", description: "Morning yoga, Ayurvedic treatments, evening meditation." },
      { day: 3, title: "Detox Day", description: "Specialized detox treatments, herbal steam bath." },
      { day: 4, title: "Rejuvenation", description: "Full body massage, facial treatments." },
      { day: 5, title: "Nature & Healing", description: "Nature walk, continued treatments, cooking class." },
      { day: 6, title: "Deep Relaxation", description: "Shirodhara treatment, meditation workshop." },
      { day: 7, title: "Balance", description: "Yoga intensive, balancing treatments." },
      { day: 8, title: "Renewal", description: "Specialized therapies based on progress." },
      { day: 9, title: "Integration", description: "Final treatments, lifestyle guidance session." },
      { day: 10, title: "Departure", description: "Farewell breakfast, transfer to airport." },
    ],
  },
  honeymoon: {
    name: "Romantic Honeymoon Package",
    duration: "7 Days / 6 Nights",
    groupSize: "2 People",
    price: 1299,
    rating: 5.0,
    reviews: 134,
    image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920",
    description: "Create unforgettable memories with your loved one in paradise",
    longDescription: "Celebrate your love in the romantic settings of Sri Lanka. From private beach dinners to scenic train journeys, every moment is designed to create lasting memories with your partner.",
    highlights: ["Private Beach Dinners", "Couples Spa", "Scenic Train Ride", "Sunset Cruise", "Candlelit Experiences", "Luxury Accommodation"],
    included: ["Luxury boutique hotels", "All meals", "Private transfers", "Romantic experiences", "Couples spa", "Honeymoon amenities"],
    itinerary: [
      { day: 1, title: "Romantic Arrival", description: "VIP airport welcome, champagne transfer to beach villa." },
      { day: 2, title: "Beach Bliss", description: "Private beach breakfast, couples spa, sunset dinner." },
      { day: 3, title: "Galle Romance", description: "Private Galle Fort tour, rooftop dinner." },
      { day: 4, title: "Hill Country", description: "First-class train journey, tea estate visit." },
      { day: 5, title: "Ella Magic", description: "Sunrise at Nine Arch Bridge, picnic lunch, stargazing." },
      { day: 6, title: "Kandy Culture", description: "Temple visit, traditional ceremony, farewell dinner." },
      { day: 7, title: "Fond Farewell", description: "Leisurely breakfast, airport transfer." },
    ],
  },
};

const PackageDetail = () => {
  const { id } = useParams<{ id: string }>();
  const pkg = id ? packagesData[id] : null;

  if (!pkg) {
    return (
      <PageLayout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">Package Not Found</h1>
            <Link to="/packages">
              <Button>View All Packages</Button>
            </Link>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <PageHero
        title={pkg.name}
        subtitle={pkg.description}
        backgroundImage={pkg.image}
      />

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Link to="/packages" className="inline-flex items-center text-primary hover:underline mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Packages
          </Link>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <h2 className="font-serif text-3xl font-bold mb-6">Overview</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {pkg.longDescription}
                </p>

                <h3 className="font-serif text-2xl font-bold mb-4">What's Included</h3>
                <div className="grid sm:grid-cols-2 gap-3 mb-8">
                  {pkg.included.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <h3 className="font-serif text-2xl font-bold mb-6">Itinerary</h3>
                <div className="space-y-4">
                  {pkg.itinerary.map((day) => (
                    <motion.div
                      key={day.day}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="flex gap-4 p-4 bg-muted rounded-lg"
                    >
                      <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-lg flex flex-col items-center justify-center">
                        <span className="text-xs">Day</span>
                        <span className="text-xl font-bold">{day.day}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{day.title}</h4>
                        <p className="text-muted-foreground text-sm">{day.description}</p>
                      </div>
                    </motion.div>
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
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground">Starting from</p>
                  <p className="font-serif text-4xl font-bold text-primary">${pkg.price}</p>
                  <p className="text-sm text-muted-foreground">per person</p>
                </div>

                <div className="flex items-center justify-center gap-2 mb-6">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold">{pkg.rating}</span>
                  <span className="text-muted-foreground">({pkg.reviews} reviews)</span>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-medium">{pkg.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Group Size</p>
                      <p className="font-medium">{pkg.groupSize}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Destinations</p>
                      <p className="font-medium">{pkg.highlights.length}+ locations</p>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 mb-3">
                  Book This Package
                </Button>
                <Link to="/tour-builder">
                  <Button variant="outline" className="w-full">
                    Customize This Tour
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

export default PackageDetail;
