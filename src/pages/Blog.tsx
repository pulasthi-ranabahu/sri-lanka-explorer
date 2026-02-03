import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "10 Must-Visit Hidden Gems in Sri Lanka",
    excerpt: "Discover the lesser-known treasures of Sri Lanka that most tourists miss, from secret beaches to ancient temples tucked away in the jungle.",
    image: "https://images.pexels.com/photos/4166768/pexels-photo-4166768.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Kamal Perera",
    date: "January 15, 2024",
    category: "Travel Tips",
  },
  {
    id: 2,
    title: "The Ultimate Guide to Sri Lankan Cuisine",
    excerpt: "From hoppers to kottu roti, explore the rich flavors and spices that make Sri Lankan food a culinary adventure.",
    image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Nirmala Silva",
    date: "January 10, 2024",
    category: "Food & Culture",
  },
  {
    id: 3,
    title: "Best Time to Visit Sri Lanka: A Month-by-Month Guide",
    excerpt: "Plan your perfect trip with our comprehensive guide to Sri Lanka's weather patterns and seasonal highlights.",
    image: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Rajan Fernando",
    date: "January 5, 2024",
    category: "Planning",
  },
  {
    id: 4,
    title: "Wildlife Safari Tips: Spotting Leopards in Yala",
    excerpt: "Expert advice on maximizing your chances of seeing the elusive Sri Lankan leopard in its natural habitat.",
    image: "https://images.pexels.com/photos/39857/leopard-leopard-spots-animal-wild-39857.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Rajan Fernando",
    date: "December 28, 2023",
    category: "Wildlife",
  },
  {
    id: 5,
    title: "The Scenic Train Journey from Kandy to Ella",
    excerpt: "Experience one of the world's most beautiful train rides through tea plantations, waterfalls, and misty mountains.",
    image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Priya Jayawardena",
    date: "December 20, 2023",
    category: "Experiences",
  },
  {
    id: 6,
    title: "Sustainable Tourism in Sri Lanka",
    excerpt: "How to travel responsibly and support local communities while exploring this beautiful island nation.",
    image: "https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&w=800",
    author: "Kamal Perera",
    date: "December 15, 2023",
    category: "Responsible Travel",
  },
];

const Blog = () => {
  return (
    <PageLayout>
      <PageHero
        title="Travel Blog"
        subtitle="Stories, tips, and inspiration for your Sri Lanka adventure"
        backgroundImage="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center bg-card rounded-xl overflow-hidden shadow-card">
              <div className="h-64 lg:h-full">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-8">
                <span className="text-sm font-medium text-primary">{blogPosts[0].category}</span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mt-2 mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6">{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {blogPosts[0].author}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </div>
                </div>
                <Button className="group">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elegant transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-medium text-primary">{post.category}</span>
                  <h3 className="font-serif text-lg font-bold mt-2 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Blog;
