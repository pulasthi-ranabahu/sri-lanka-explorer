import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const faqCategories = [
  {
    title: "Booking & Planning",
    faqs: [
      {
        question: "How far in advance should I book my trip?",
        answer: "We recommend booking at least 3-6 months in advance, especially during peak season (December to March). For customized tours and popular destinations, earlier booking ensures better availability and rates.",
      },
      {
        question: "Can I customize my tour package?",
        answer: "Absolutely! All our packages can be customized to suit your preferences, interests, and budget. Use our Tour Builder tool or contact us directly to create your perfect itinerary.",
      },
      {
        question: "What is your cancellation policy?",
        answer: "Cancellations made 30+ days before departure receive a full refund minus a small admin fee. Cancellations 15-29 days prior receive 50% refund. Within 14 days, the booking is non-refundable. We strongly recommend travel insurance.",
      },
      {
        question: "Do you offer group discounts?",
        answer: "Yes! Groups of 6 or more travelers receive 10% off, and groups of 10+ receive 15% off. Family packages and corporate groups have special rates available.",
      },
    ],
  },
  {
    title: "Travel & Safety",
    faqs: [
      {
        question: "Is Sri Lanka safe for tourists?",
        answer: "Yes, Sri Lanka is generally very safe for tourists. The country is known for its hospitality and friendly people. As with any travel, we recommend standard precautions and staying informed about local conditions.",
      },
      {
        question: "Do I need a visa to visit Sri Lanka?",
        answer: "Most nationalities need an Electronic Travel Authorization (ETA) which can be obtained online before travel. We can assist with visa requirements based on your nationality.",
      },
      {
        question: "What vaccinations do I need?",
        answer: "No specific vaccinations are required for Sri Lanka, but we recommend consulting your doctor about Hepatitis A, Typhoid, and routine vaccinations. Malaria prophylaxis is generally not needed for tourist areas.",
      },
      {
        question: "What should I pack?",
        answer: "Light, breathable clothing is recommended. Modest dress is appreciated at temples (covering shoulders and knees). Pack sunscreen, insect repellent, comfortable walking shoes, and a light rain jacket.",
      },
    ],
  },
  {
    title: "Tours & Experiences",
    faqs: [
      {
        question: "What is the best time to visit Sri Lanka?",
        answer: "Sri Lanka can be visited year-round! The west and south coasts are best December-March, while the east coast is best April-September. The cultural triangle is pleasant throughout the year.",
      },
      {
        question: "Are your guides certified?",
        answer: "Yes, all our guides are government-licensed and extensively trained. Many specialize in areas like wildlife, history, or adventure activities, and speak multiple languages.",
      },
      {
        question: "What type of vehicles do you use?",
        answer: "We use modern, air-conditioned vehicles appropriate for each tour type. Safari tours use 4x4 jeeps, while regular tours use comfortable minivans or cars depending on group size.",
      },
      {
        question: "Can I add extra activities during my tour?",
        answer: "Yes! We can arrange additional activities like cooking classes, spa treatments, or adventure sports during your tour. Just let your guide know or contact us in advance.",
      },
    ],
  },
  {
    title: "Payment & Pricing",
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept credit/debit cards (Visa, Mastercard, Amex), bank transfers, and PayPal. A 30% deposit is required at booking, with the balance due 30 days before departure.",
      },
      {
        question: "Are there any hidden costs?",
        answer: "No hidden costs! Our package prices include all stated services. Optional activities, personal expenses, tips, and travel insurance are not included and will be clearly communicated.",
      },
      {
        question: "Do you offer payment plans?",
        answer: "Yes, for bookings made 3+ months in advance, we offer payment plans allowing you to spread the cost. Contact us for details on available options.",
      },
      {
        question: "What currency should I bring?",
        answer: "Sri Lankan Rupees (LKR) is the local currency. USD and Euros are widely accepted at hotels and shops. ATMs are available in major towns. Credit cards are accepted at most tourist establishments.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <PageLayout>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about traveling to Sri Lanka"
        backgroundImage="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="font-serif text-2xl font-bold mb-6">{category.title}</h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${catIndex}-${index}`}
                    className="bg-card rounded-lg px-6 shadow-sm border-none"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-muted rounded-xl p-8 mt-12"
          >
            <h3 className="font-serif text-xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our travel experts are here to help you plan your perfect Sri Lanka adventure.
            </p>
            <Link to="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default FAQ;
