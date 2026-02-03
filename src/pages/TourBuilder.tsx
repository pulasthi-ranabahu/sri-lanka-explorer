import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Clock, ArrowRight, Check } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const destinations = [
  { id: "sigiriya", name: "Sigiriya", category: "Cultural" },
  { id: "kandy", name: "Kandy", category: "Cultural" },
  { id: "ella", name: "Ella", category: "Hill Country" },
  { id: "yala", name: "Yala", category: "Wildlife" },
  { id: "galle", name: "Galle", category: "Coastal" },
  { id: "mirissa", name: "Mirissa", category: "Beach" },
  { id: "nuwara-eliya", name: "Nuwara Eliya", category: "Hill Country" },
  { id: "anuradhapura", name: "Anuradhapura", category: "Cultural" },
  { id: "trincomalee", name: "Trincomalee", category: "Beach" },
  { id: "jaffna", name: "Jaffna", category: "Cultural" },
];

const experiences = [
  { id: "safari", name: "Wildlife Safari", icon: "🦁" },
  { id: "hiking", name: "Hiking & Trekking", icon: "🥾" },
  { id: "beach", name: "Beach Activities", icon: "🏖️" },
  { id: "culture", name: "Cultural Experiences", icon: "🏛️" },
  { id: "wellness", name: "Spa & Wellness", icon: "🧘" },
  { id: "food", name: "Food & Cooking", icon: "🍛" },
  { id: "adventure", name: "Adventure Sports", icon: "🏄" },
  { id: "photography", name: "Photography Tours", icon: "📷" },
];

const TourBuilder = () => {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>([]);
  const [selectedExperiences, setSelectedExperiences] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "2",
    duration: "7",
    startDate: "",
    budget: "",
    message: "",
  });

  const toggleDestination = (id: string) => {
    setSelectedDestinations((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  };

  const toggleExperience = (id: string) => {
    setSelectedExperiences((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll contact you within 24 hours with your custom itinerary.");
  };

  return (
    <PageLayout>
      <PageHero
        title="Build Your Dream Tour"
        subtitle="Create a personalized Sri Lanka experience tailored to your preferences"
        backgroundImage="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Destinations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold">Choose Your Destinations</h2>
                  <p className="text-muted-foreground">Select the places you'd like to visit</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {destinations.map((dest) => (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => toggleDestination(dest.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      selectedDestinations.includes(dest.id)
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <MapPin className="w-4 h-4 text-primary" />
                      {selectedDestinations.includes(dest.id) && (
                        <Check className="w-4 h-4 text-primary" />
                      )}
                    </div>
                    <p className="font-medium">{dest.name}</p>
                    <p className="text-xs text-muted-foreground">{dest.category}</p>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 2: Experiences */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold">Select Experiences</h2>
                  <p className="text-muted-foreground">What activities interest you?</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {experiences.map((exp) => (
                  <button
                    key={exp.id}
                    type="button"
                    onClick={() => toggleExperience(exp.id)}
                    className={`p-4 rounded-lg border-2 transition-all text-center ${
                      selectedExperiences.includes(exp.id)
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <span className="text-3xl mb-2 block">{exp.icon}</span>
                    <p className="font-medium text-sm">{exp.name}</p>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Step 3: Trip Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold">Trip Details</h2>
                  <p className="text-muted-foreground">Tell us about your travel plans</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <Label htmlFor="travelers" className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4" /> Number of Travelers
                  </Label>
                  <Input
                    id="travelers"
                    type="number"
                    min="1"
                    value={formData.travelers}
                    onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="duration" className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4" /> Duration (Days)
                  </Label>
                  <Input
                    id="duration"
                    type="number"
                    min="3"
                    max="30"
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="startDate" className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4" /> Start Date
                  </Label>
                  <Input
                    id="startDate"
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="budget" className="mb-2 block">Budget (USD per person)</Label>
                  <Input
                    id="budget"
                    placeholder="e.g., 1500"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  />
                </div>
              </div>
            </motion.div>

            {/* Step 4: Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-bold">Your Information</h2>
                  <p className="text-muted-foreground">How can we reach you?</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Special Requests or Questions</Label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about any specific requirements, interests, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
            </motion.div>

            <div className="text-center">
              <Button type="submit" size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Get My Custom Itinerary
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                We'll respond within 24 hours with a personalized proposal
              </p>
            </div>
          </form>
        </div>
      </section>
    </PageLayout>
  );
};

export default TourBuilder;
