import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+94 11 234 5678", "+94 77 123 4567"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@meridianescapes.com", "bookings@meridianescapes.com"],
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Galle Road, Colombo 03", "Sri Lanka"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Fri: 9AM - 6PM", "Sat: 9AM - 2PM"],
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <PageLayout>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Get in touch with our team."
        backgroundImage="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&w=1920"
        backgroundImages={[
          "https://images.pexels.com/photos/247502/pexels-photo-247502.jpeg?auto=compress&cs=tinysrgb&w=1920",
          "https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=1920",
          "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&w=1920"
        ]}
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <h2 className="font-serif text-2xl font-bold mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                Have questions about planning your Sri Lanka adventure? Our team is here 
                to help you create the perfect journey.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Live Chat</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  Chat with our travel experts online for instant assistance.
                </p>
                <Button variant="outline" size="sm">
                  Start Chat
                </Button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-card rounded-xl p-8 shadow-card">
                <h2 className="font-serif text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
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
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Trip Inquiry"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Your Message *</Label>
                    <Textarea
                      id="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your travel plans or questions..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.798467128636!2d79.84848621477254!3d6.9146934949646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2596d3cb8c07d%3A0x502d3c7f3b7c2e0!2sColombo%2003%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        />
      </section>
    </PageLayout>
  );
};

export default Contact;
