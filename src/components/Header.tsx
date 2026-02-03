import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "Tour Packages", href: "/packages" },
  { label: "Build Your Tour", href: "/tour-builder" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-elegant py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center gap-2"
          whileHover={{ scale: 1.02 }}
        >
          <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
            <span className="font-serif text-secondary-foreground font-bold text-lg">
              SL
            </span>
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                "font-serif text-xl font-bold transition-colors",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              Ceylon Voyages
            </span>
            <span
              className={cn(
                "text-xs tracking-wider uppercase transition-colors",
                isScrolled ? "text-muted-foreground" : "text-white/80"
              )}
            >
              Discover Sri Lanka
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "text-sm font-medium transition-colors hover:text-secondary relative group",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold shadow-md"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2"
        >
          {isMobileMenuOpen ? (
            <X
              className={cn(
                "w-6 h-6",
                isScrolled ? "text-foreground" : "text-white"
              )}
            />
          ) : (
            <Menu
              className={cn(
                "w-6 h-6",
                isScrolled ? "text-foreground" : "text-white"
              )}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="text-foreground font-medium py-2 border-b border-border/50 hover:text-secondary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <Button className="mt-4 bg-secondary text-secondary-foreground w-full">
                Book Now
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
