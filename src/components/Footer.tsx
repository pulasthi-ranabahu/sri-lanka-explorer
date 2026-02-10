import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";

const footerLinks = {
  destinations: [
    { label: "Sigiriya", href: "/destinations/sigiriya" },
    { label: "Kandy", href: "/destinations/kandy" },
    { label: "Ella", href: "/destinations/ella" },
    { label: "Yala National Park", href: "/destinations/yala" },
    { label: "Galle", href: "/destinations/galle" },
    { label: "Mirissa", href: "/destinations/mirissa" },
  ],
  packages: [
    { label: "Cultural Tours", href: "/packages/cultural" },
    { label: "Wildlife Safari", href: "/packages/wildlife" },
    { label: "Beach Holidays", href: "/packages/beach" },
    { label: "Adventure Tours", href: "/packages/adventure" },
    { label: "Wellness Retreats", href: "/packages/wellness" },
    { label: "Honeymoon Packages", href: "/packages/honeymoon" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Travel Blog", href: "/blog" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Careers", href: "/careers" },
    { label: "Contact Us", href: "/contact" },
  ],
  support: [
    { label: "FAQ", href: "/faq" },
    { label: "Booking Policy", href: "/booking-policy" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Refund Policy", href: "/refund" },
    { label: "Travel Insurance", href: "/insurance" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "Youtube" },
];

const Footer = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for subscribing!");
  };

  return (
    <footer className="bg-foreground text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                Get Travel Inspiration
              </h3>
              <p className="text-white/70">
                Subscribe to receive exclusive offers and travel tips
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-3 w-full md:w-auto"
              onSubmit={handleNewsletterSubmit}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50 w-full md:w-72"
                required
              />
              <Button type="submit" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-6">
                Subscribe
              </Button>
            </motion.form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="mb-6">
              <Logo className="h-14 mb-2 text-white" />
              <span className="text-xs tracking-wider uppercase text-white/60">
                Discover Sri Lanka
              </span>
            </div>

            <p className="text-white/70 mb-6 leading-relaxed max-w-sm">
              Your trusted partner for exploring the wonders of Sri Lanka.
              Creating unforgettable journeys since 2009 with personalized
              service and local expertise.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a
                href="tel:+94112345678"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                +94 11 234 5678
              </a>
              <a
                href="mailto:info@meridianescapes.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@meridianescapes.com
              </a>
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 mt-1" />
                <span>
                  123 Galle Road, Colombo 03
                  <br />
                  Sri Lanka
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors group"
                >
                  <social.icon className="w-5 h-5 group-hover:text-secondary-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-4">Destinations</h4>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Packages</h4>
            <ul className="space-y-2">
              {footerLinks.packages.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <div>
              © {new Date().getFullYear()} Meridian Escapes. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Visa.svg/200px-Visa.svg.png"
                alt="Visa"
                className="h-6 opacity-60"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/200px-MasterCard_Logo.svg.png"
                alt="Mastercard"
                className="h-6 opacity-60"
              />
              <span className="text-white/40">|</span>
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
