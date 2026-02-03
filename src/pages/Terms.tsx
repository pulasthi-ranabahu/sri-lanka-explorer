import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <PageLayout>
      <PageHero
        title="Terms of Service"
        subtitle="Terms and conditions for using our services"
        backgroundImage="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="font-serif text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-6">
              By booking a tour with Meridian Escapes or using our website, you agree to these terms of service. If you do not agree, please do not use our services.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">2. Tour Services</h2>
            <p className="text-muted-foreground mb-6">
              We act as an intermediary between you and service providers (hotels, transport, attractions). While we carefully select our partners, we cannot be held liable for their actions or omissions.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">3. Traveler Responsibilities</h2>
            <ul className="text-muted-foreground mb-6 list-disc pl-6">
              <li>Ensure you have valid travel documents (passport, visa)</li>
              <li>Arrive at designated meeting points on time</li>
              <li>Follow guide instructions and local laws</li>
              <li>Respect local customs and traditions</li>
              <li>Purchase adequate travel insurance</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold mb-4">4. Health and Fitness</h2>
            <p className="text-muted-foreground mb-6">
              Some tours involve physical activity. You are responsible for assessing your fitness level. Please inform us of any medical conditions that may affect your participation.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">5. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-6">
              Meridian Escapes is not liable for any injury, loss, or damage during tours except where caused by our negligence. Our liability is limited to the tour cost. We are not responsible for events beyond our control.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">6. Itinerary Changes</h2>
            <p className="text-muted-foreground mb-6">
              We reserve the right to modify itineraries due to weather, safety concerns, or unforeseen circumstances. Suitable alternatives will be provided where possible.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">7. Intellectual Property</h2>
            <p className="text-muted-foreground mb-6">
              All content on our website is owned by Meridian Escapes. You may not copy, distribute, or use our content without written permission.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">8. Governing Law</h2>
            <p className="text-muted-foreground mb-6">
              These terms are governed by the laws of Sri Lanka. Any disputes will be resolved in the courts of Colombo.
            </p>

            <p className="text-sm text-muted-foreground mt-8">
              Last updated: January 2024
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Terms;
