import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, ChevronRight } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

const blogPosts = [
  {
    id: 1,
    title: "Premier League Betting Guide: Top Tips for the 2025 Season",
    excerpt: "A comprehensive guide to betting on Premier League matches, including statistical analysis and key factors to consider.",
    image: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg",
    category: "Football",
    author: "John Banks",
    date: "2025-03-15",
    readTime: "8 min read",
    slug: "premier-league-betting-guide-2025"
  },
  {
    id: 2,
    title: "Understanding Value Betting: A Complete Strategy Guide",
    excerpt: "Learn how to identify value bets and implement effective betting strategies for long-term success.",
    image: "https://images.pexels.com/photos/6663364/pexels-photo-6663364.jpeg",
    category: "Strategy",
    author: "John Banks",
    date: "2025-03-12",
    readTime: "12 min read",
    slug: "understanding-value-betting"
  },
  {
    id: 3,
    title: "Horse Racing Analysis: Key Statistics That Matter",
    excerpt: "Deep dive into the most important statistics and factors when analyzing horse racing events.",
    image: "https://images.pexels.com/photos/1571939/pexels-photo-1571939.jpeg",
    category: "Horse Racing",
    author: "John Banks",
    date: "2025-03-10",
    readTime: "10 min read",
    slug: "horse-racing-analysis-statistics"
  }
];

const BlogPage = () => {
  React.useEffect(() => {
    document.title = "Blog - Mr. Banks Tips";
  }, []);

  return (
    <>
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Betting Insights & Analysis
            </h1>
            <p className="text-xl text-blue-100">
              Expert betting advice, strategies, and in-depth analysis from Mr. Banks
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center text-sm text-blue-600 font-medium">
                      <Tag className="h-4 w-4 mr-1" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center">
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <span className="mx-2 text-gray-300">•</span>
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                        <span className="text-sm text-gray-600">
                          {new Date(post.date).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="link" 
                    className="mt-4 text-blue-600 hover:text-blue-700"
                  >
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default BlogPage;