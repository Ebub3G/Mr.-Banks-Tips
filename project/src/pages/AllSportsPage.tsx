// project/src/pages/AllSportsPage.tsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Medal } from 'lucide-react';
import Container from '../components/ui/Container';
import SportCategories from '../components/home/SportCategories'; // Reusing existing component
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const AllSportsPage = () => {
  useEffect(() => {
    document.title = "All Sports - Mr. Banks Tips";
  }, []);

  return (
    <>
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center bg-blue-700/50 text-blue-200 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Medal className="mr-2 h-4 w-4" />
                Explore Categories
              </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All Betting Tip Categories
            </h1>
            <p className="text-blue-100 text-lg">
              Find expert predictions across every sport we cover.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Reusing SportCategories component */}
      <SportCategories />

      <section className="py-16 bg-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Ready for Your Next Winning Pick?
            </motion.h2>
            <motion.p
              className="text-gray-600 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Access our most confident selections and detailed analysis by upgrading to a premium membership.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link to="/premium">
                <Button variant="premium" size="lg">
                  Unlock Premium Tips Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AllSportsPage;
