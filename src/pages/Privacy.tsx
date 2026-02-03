import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <PageLayout>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your information"
        backgroundImage="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="font-serif text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-6">
              We collect information you provide directly, including name, email, phone number, and travel preferences. We also collect usage data such as IP addresses, browser type, and pages visited.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <ul className="text-muted-foreground mb-6 list-disc pl-6">
              <li>To process and manage your bookings</li>
              <li>To communicate about your travel arrangements</li>
              <li>To send promotional offers (with your consent)</li>
              <li>To improve our services and website</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold mb-4">3. Information Sharing</h2>
            <p className="text-muted-foreground mb-6">
              We share your information with service providers (hotels, transport, guides) as necessary to fulfill your booking. We do not sell your personal information to third parties.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="text-muted-foreground mb-6">
              We implement appropriate security measures to protect your personal information. Payment information is encrypted using SSL technology. However, no method of transmission is 100% secure.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">5. Cookies</h2>
            <p className="text-muted-foreground mb-6">
              Our website uses cookies to enhance your browsing experience and analyze site traffic. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground mb-6">
              You have the right to access, correct, or delete your personal information. You may opt out of marketing communications at any time. Contact us to exercise these rights.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground mb-6">
              For questions about this privacy policy, contact us at privacy@meridianescapes.com or call +94 11 234 5678.
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

export default Privacy;
