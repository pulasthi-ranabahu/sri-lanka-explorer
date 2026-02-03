import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";

const Refund = () => {
  return (
    <PageLayout>
      <PageHero
        title="Refund Policy"
        subtitle="Our commitment to fair and transparent refunds"
        backgroundImage="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="font-serif text-2xl font-bold mb-4">Cancellation Refund Schedule</h2>
            <p className="text-muted-foreground mb-4">
              Refunds for cancellations are processed according to the following schedule:
            </p>
            <div className="bg-muted p-6 rounded-lg mb-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 font-semibold">Cancellation Notice</th>
                    <th className="py-2 font-semibold">Refund Amount</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-2">60+ days before departure</td>
                    <td className="py-2">100% (less deposit)</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">30-59 days before departure</td>
                    <td className="py-2">75%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">15-29 days before departure</td>
                    <td className="py-2">50%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">7-14 days before departure</td>
                    <td className="py-2">25%</td>
                  </tr>
                  <tr>
                    <td className="py-2">Less than 7 days</td>
                    <td className="py-2">No refund</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-serif text-2xl font-bold mb-4">How to Request a Refund</h2>
            <p className="text-muted-foreground mb-6">
              To request a refund, please email bookings@meridianescapes.com with your booking reference number and reason for cancellation. Requests must be made in writing.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">Processing Time</h2>
            <p className="text-muted-foreground mb-6">
              Refunds are processed within 10-14 business days of approval. Funds will be returned to the original payment method. Bank processing times may add additional days.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">Non-Refundable Items</h2>
            <ul className="text-muted-foreground mb-6 list-disc pl-6">
              <li>Initial booking deposit (30%)</li>
              <li>Travel insurance premiums</li>
              <li>Visa processing fees</li>
              <li>Administrative fees</li>
            </ul>

            <h2 className="font-serif text-2xl font-bold mb-4">Exceptional Circumstances</h2>
            <p className="text-muted-foreground mb-6">
              In cases of medical emergency, natural disaster, or government travel advisories, we may offer additional flexibility. Documentation will be required. Each case is reviewed individually.
            </p>

            <h2 className="font-serif text-2xl font-bold mb-4">Trip Credit Option</h2>
            <p className="text-muted-foreground mb-6">
              Instead of a refund, you may opt for trip credit valid for 12 months. Trip credits receive a 10% bonus value. Contact us to discuss this option.
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

export default Refund;
