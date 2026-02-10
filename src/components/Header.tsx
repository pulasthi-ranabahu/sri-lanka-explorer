import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";

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
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? isHomePage
            ? "bg-card/95 shadow-elegant py-3"
            : "bg-card/95 backdrop-blur-md shadow-elegant py-3"
          : isHomePage
            ? "bg-transparent py-5"
            : "bg-card/95 backdrop-blur-md py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.02 }}>
          <Link to="/" className="flex items-center gap-2">
            <Logo className={cn(
                "transition-all duration-300 text-white",
                isScrolled ? "h-10" : "h-14",
                (isScrolled || !isHomePage) && "text-foreground"
              )} />
            {!isScrolled && (
              <span
                className="text-xs tracking-wider uppercase text-white/80 hidden sm:block"
              >
                Discover Sri Lanka
              </span>
            )}
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-secondary relative group",
                  isScrolled || !isHomePage ? "text-foreground" : "text-white",
                  location.pathname === item.href && "text-secondary"
                )}
              >
                {item.label}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all",
                  location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                )} />
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/tour-builder">
            <Button
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold shadow-md"
            >
              Book Now
            </Button>
          </Link>
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
                isScrolled || !isHomePage ? "text-foreground" : "text-white"
              )}
            />
          ) : (
            <Menu
              className={cn(
                "w-6 h-6",
                isScrolled || !isHomePage ? "text-foreground" : "text-white"
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
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "text-foreground font-medium py-2 border-b border-border/50 hover:text-secondary transition-colors block",
                      location.pathname === item.href && "text-secondary"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Link to="/tour-builder">
                <Button className="mt-4 bg-secondary text-secondary-foreground w-full">
                  Book Now
                </Button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
