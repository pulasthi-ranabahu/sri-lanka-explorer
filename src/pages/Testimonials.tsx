import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const testimonials = [
  {
    id: 1,
    name: "Sarah & Michael Johnson",
    location: "New York, USA",
    image: "https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5,
    trip: "Cultural Heritage Tour",
    text: "Our honeymoon in Sri Lanka exceeded all expectations! From the moment we landed, Meridian Escapes took care of everything. The itinerary was perfectly balanced between adventure and relaxation. Sigiriya at sunrise was absolutely magical.",
  },
  {
    id: 2,
    name: "Emma Thompson",
    location: "London, UK",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5,
    trip: "Wildlife Safari Adventure",
    text: "I've been on safaris in Africa, but seeing leopards in Yala was an unforgettable experience. Our guide Rajan was incredibly knowledgeable and helped us spot wildlife we would have missed on our own.",
  },
  {
    id: 3,
    name: "David Chen",
    location: "Singapore",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5,
    trip: "Adventure Explorer",
    text: "The white water rafting and zip-lining were thrilling! But what made this trip special was the people we met and the authentic experiences. The cooking class in a local village was a highlight.",
  },
  {
    id: 4,
    name: "Maria & Carlos Rodriguez",
    location: "Barcelona, Spain",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5,
    trip: "Beach Paradise Escape",
    text: "We saw blue whales on our first morning in Mirissa! The beaches were pristine, and the seafood was incredible. Meridian Escapes knew all the best spots that aren't in the guidebooks.",
  },
  {
    id: 5,
    name: "James & Patricia O'Brien",
    location: "Dublin, Ireland",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5,
    trip: "Wellness Retreat",
    text: "The Ayurveda retreat was life-changing. After 10 days of treatments, yoga, and healthy food, I felt rejuvenated. The staff was attentive without being intrusive, and the setting was absolutely peaceful.",
  },
  {
    id: 6,
    name: "Yuki Tanaka",
    location: "Tokyo, Japan",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5,
    trip: "Custom Tour",
    text: "I had very specific interests in Buddhist temples and tea culture. Meridian Escapes created a custom itinerary that was exactly what I wanted. Every temple visit was carefully timed to avoid crowds.",
  },
  {
    id: 7,
    name: "Hans & Ingrid Mueller",
    location: "Berlin, Germany",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5,
    trip: "Cultural Heritage Tour",
    text: "The train journey from Kandy to Ella was the most scenic we've ever experienced. We traveled slowly through tea country, stopping at villages along the way. This is how travel should be.",
  },
  {
    id: 8,
    name: "Sophie Laurent",
    location: "Paris, France",
    image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=200",
    rating: 5,
    trip: "Photography Tour",
    text: "As a professional photographer, I needed a guide who understood light and timing. Meridian Escapes arranged early morning visits to temples and evening sessions at the best viewpoints. My portfolio has never looked better!",
  },
];

const Testimonials = () => {
  return (
    <PageLayout>
      <PageHero
        title="Traveler Reviews"
        subtitle="Hear from our guests about their Sri Lanka experiences"
        backgroundImage="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-xl font-medium">
              Rated 4.9/5 based on 500+ reviews
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card"
              >
                <div className="flex items-start gap-4 mb-4">
                  <Quote className="w-10 h-10 text-primary/20 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-xs text-primary">{testimonial.trip}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Testimonials;
