import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const positions = [
  {
    title: "Tour Guide",
    location: "Colombo, Sri Lanka",
    type: "Full-time",
    description: "Lead tours across Sri Lanka, sharing your knowledge of culture, wildlife, and history with international travelers.",
    requirements: ["Fluent in English", "Knowledge of Sri Lankan history and culture", "Minimum 2 years experience", "Government guide license preferred"],
  },
  {
    title: "Customer Experience Manager",
    location: "Colombo, Sri Lanka",
    type: "Full-time",
    description: "Ensure every guest has an exceptional experience from booking to departure. Manage inquiries and coordinate with tour operations.",
    requirements: ["Excellent communication skills", "Customer service experience", "Problem-solving abilities", "Fluent in English"],
  },
  {
    title: "Digital Marketing Specialist",
    location: "Remote / Colombo",
    type: "Full-time",
    description: "Drive our digital presence through social media, content marketing, and paid advertising campaigns.",
    requirements: ["3+ years digital marketing experience", "Tourism or travel industry background", "Strong analytics skills", "Creative content creation"],
  },
  {
    title: "Safari Driver / Naturalist",
    location: "Yala / Udawalawe",
    type: "Full-time",
    description: "Drive safari vehicles and share wildlife knowledge with guests in Sri Lanka's national parks.",
    requirements: ["Valid heavy vehicle license", "Wildlife knowledge", "First aid certification", "English proficiency"],
  },
];

const benefits = [
  "Competitive salary with performance bonuses",
  "Comprehensive health insurance",
  "Paid vacation and holidays",
  "Professional development opportunities",
  "Discounted travel for you and family",
  "Friendly, passionate team environment",
];

const Careers = () => {
  return (
    <PageLayout>
      <PageHero
        title="Join Our Team"
        subtitle="Build your career sharing the wonders of Sri Lanka with the world"
        backgroundImage="https://images.pexels.com/photos/4166768/pexels-photo-4166768.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-3xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              At Meridian Escapes, we're passionate about creating unforgettable travel experiences. 
              Join a team that values excellence, creativity, and the joy of exploration.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-muted p-4 rounded-lg text-sm"
                >
                  {benefit}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-serif text-2xl font-bold mb-8 text-center">Open Positions</h2>
            
            <div className="space-y-6">
              {positions.map((position, index) => (
                <motion.div
                  key={position.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-card"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <h3 className="font-serif text-xl font-bold">{position.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">{position.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {position.requirements.map((req) => (
                          <span
                            key={req}
                            className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                          >
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <Button className="group">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-muted rounded-xl p-8"
          >
            <h3 className="font-serif text-xl font-bold mb-4">
              Don't see the right position?
            </h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for talented individuals. Send us your resume and we'll keep 
              you in mind for future opportunities.
            </p>
            <Link to="/contact">
              <Button variant="outline">Send Your Resume</Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;
