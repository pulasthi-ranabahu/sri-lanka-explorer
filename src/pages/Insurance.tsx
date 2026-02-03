import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Shield, Heart, Plane, Luggage, AlertTriangle, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const coverageTypes = [
  {
    icon: Heart,
    title: "Medical Coverage",
    description: "Covers medical emergencies, hospitalization, and evacuation up to $500,000.",
  },
  {
    icon: Plane,
    title: "Trip Cancellation",
    description: "Reimburses non-refundable expenses if you need to cancel your trip.",
  },
  {
    icon: Luggage,
    title: "Baggage Protection",
    description: "Coverage for lost, stolen, or damaged luggage and personal belongings.",
  },
  {
    icon: AlertTriangle,
    title: "Travel Delays",
    description: "Compensation for expenses due to flight delays or missed connections.",
  },
];

const Insurance = () => {
  return (
    <PageLayout>
      <PageHero
        title="Travel Insurance"
        subtitle="Protect your journey with comprehensive travel insurance"
        backgroundImage="https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-serif text-3xl font-bold mb-4">Why Travel Insurance Matters</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We strongly recommend all travelers purchase comprehensive travel insurance. 
              Unexpected events can happen, and insurance provides peace of mind for your journey.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {coverageTypes.map((coverage, index) => (
              <motion.div
                key={coverage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-card"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <coverage.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold mb-2">{coverage.title}</h3>
                <p className="text-muted-foreground text-sm">{coverage.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-muted rounded-xl p-8 mb-12"
          >
            <div className="flex items-start gap-4">
              <DollarSign className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-serif text-xl font-bold mb-2">Affordable Coverage</h3>
                <p className="text-muted-foreground mb-4">
                  Travel insurance typically costs just 4-8% of your trip cost, providing 
                  valuable protection for medical emergencies, trip cancellations, and more.
                </p>
                <p className="text-muted-foreground">
                  We partner with reputable insurance providers and can help you find the 
                  right coverage for your trip. Contact us for recommendations.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="font-serif text-2xl font-bold mb-4">Our Recommendations</h2>
            <ul className="text-muted-foreground mb-6 list-disc pl-6">
              <li>Purchase insurance within 14 days of booking for best coverage</li>
              <li>Ensure medical coverage includes Sri Lanka and covers COVID-19</li>
              <li>Verify coverage amounts meet your needs (we recommend minimum $100,000 medical)</li>
              <li>Keep policy documents accessible during your trip</li>
              <li>Understand the claims process before you travel</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold mb-4">Insurance Partners</h2>
            <p className="text-muted-foreground mb-6">
              We can recommend trusted insurance providers that offer comprehensive coverage 
              for Sri Lanka travel. Contact our team for personalized recommendations based 
              on your trip details and home country.
            </p>
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/contact">
              <Button size="lg">Get Insurance Recommendations</Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Insurance;
