import { motion } from "framer-motion";
import { Award, Users, Globe, Heart, MapPin, Calendar } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const stats = [
  { icon: Calendar, value: "15+", label: "Years Experience" },
  { icon: Users, value: "10,000+", label: "Happy Travelers" },
  { icon: Globe, value: "50+", label: "Destinations" },
  { icon: Award, value: "25+", label: "Awards Won" },
];

const team = [
  {
    name: "Kamal Perera",
    role: "Founder & CEO",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "With 20 years in tourism, Kamal founded Meridian Escapes to share Sri Lanka's beauty with the world.",
  },
  {
    name: "Nirmala Silva",
    role: "Head of Operations",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Nirmala ensures every trip runs smoothly, from planning to execution.",
  },
  {
    name: "Rajan Fernando",
    role: "Lead Tour Guide",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "A certified naturalist with expertise in wildlife and cultural heritage.",
  },
  {
    name: "Priya Jayawardena",
    role: "Customer Experience",
    image: "https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Priya is dedicated to making every traveler feel welcomed and cared for.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Passion for Travel",
    description: "We're travelers at heart, committed to creating authentic experiences.",
  },
  {
    icon: Users,
    title: "Local Expertise",
    description: "Our team knows Sri Lanka inside out, from hidden gems to local customs.",
  },
  {
    icon: Globe,
    title: "Sustainable Tourism",
    description: "We support local communities and protect natural environments.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Every detail is carefully planned to exceed your expectations.",
  },
];

const About = () => {
  return (
    <PageLayout>
      <PageHero
        title="About Us"
        subtitle="Your trusted partner for exploring the wonders of Sri Lanka"
        backgroundImage="https://images.pexels.com/photos/4166768/pexels-photo-4166768.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Founded in 2009, Meridian Escapes began with a simple mission: to share the 
                breathtaking beauty and rich culture of Sri Lanka with travelers from around 
                the world.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                What started as a small family business has grown into one of Sri Lanka's 
                most trusted tour operators, serving over 10,000 happy travelers while 
                maintaining the personalized touch that sets us apart.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue to craft unforgettable journeys that combine adventure, 
                culture, and relaxation, ensuring every traveler experiences the best of 
                our island paradise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/4166768/pexels-photo-4166768.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sri Lanka landscape"
                className="rounded-xl shadow-elegant"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-card">
                <div className="flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-primary" />
                  <div>
                    <p className="font-bold text-2xl">Colombo</p>
                    <p className="text-muted-foreground">Headquarters</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-primary-foreground"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-3 opacity-80" />
                <p className="font-serif text-4xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm opacity-80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl shadow-card text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate professionals dedicated to creating your perfect journey
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-4 inline-block">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full object-cover mx-auto shadow-card"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-serif text-xl font-bold">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
