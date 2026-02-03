import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";

const BookingPolicy = () => {
  return (
    <PageLayout>
      <PageHero
        title="Booking Policy"
        subtitle="Terms and conditions for booking with Meridian Escapes"
        backgroundImage="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="font-serif text-2xl font-bold mb-4">1. Booking Confirmation</h2>
            <p className="text-muted-foreground mb-6">
              All bookings are subject to availability. A booking is confirmed only upon receipt of the required deposit and a written confirmation from Meridian Escapes. The deposit amount is 30% of the total tour cost and is non-refundable except as stated in our cancellation policy.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">2. Payment Terms</h2>
            <p className="text-muted-foreground mb-6">
              The balance of payment is due 30 days before the tour start date. For bookings made within 30 days of departure, full payment is required at the time of booking. We accept payment via credit card, bank transfer, or PayPal.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">3. Cancellation by Customer</h2>
            <ul className="text-muted-foreground mb-6 list-disc pl-6">
              <li>More than 30 days before departure: Full refund minus deposit</li>
              <li>15-30 days before departure: 50% refund</li>
              <li>Less than 15 days before departure: No refund</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold mb-4">4. Cancellation by Meridian Escapes</h2>
            <p className="text-muted-foreground mb-6">
              In the unlikely event that we need to cancel your tour due to unforeseen circumstances, you will receive a full refund or the option to rebook for alternative dates at no additional cost.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">5. Changes to Booking</h2>
            <p className="text-muted-foreground mb-6">
              Changes to your booking may be possible subject to availability. A change fee of $50 per booking may apply. Changes requested within 14 days of departure may not be possible.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">6. Travel Insurance</h2>
            <p className="text-muted-foreground mb-6">
              We strongly recommend that all travelers purchase comprehensive travel insurance covering trip cancellation, medical emergencies, and evacuation. Meridian Escapes is not responsible for any losses due to lack of insurance.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">7. Pricing</h2>
            <p className="text-muted-foreground mb-6">
              All prices are quoted in USD and are subject to change without notice until booking is confirmed. Once a deposit is received, the quoted price is guaranteed.
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

export default BookingPolicy;
