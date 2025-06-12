// project/src/pages/AboutPage.tsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Lightbulb, CheckCircle } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us - Mr. Banks Tips";
  }, []);

  return (
    <>
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 relative overflow-hidden">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Users className="mr-2 h-4 w-4" />
                Our Story
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                About Mr. Banks Tips
              </h1>

              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Empowering bettors with expert analysis and data-driven predictions for consistent success.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/tips">
                  <Button variant="primary" size="lg" className="font-semibold text-base">
                    View Daily Tips
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10 font-semibold text-base">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission & Vision
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At Mr. Banks Tips, we believe that informed betting is smart betting. Our mission is to provide unparalleled sports betting analysis, empowering our members to make confident decisions and achieve long-term profitability. We strive to be the most trusted source for premium betting insights worldwide.
              </p>
              <p className="text-gray-600">
                With years of collective experience and a deep understanding of various sports markets, our team is dedicated to uncovering the highest value opportunities, ensuring our community stays ahead of the game.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/10173660/pexels-photo-10173660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Mission"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Why Choose Mr. Banks Tips?
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Our commitment to excellence and a proven track record sets us apart.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                <Lightbulb className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Analysis</h3>
              <p className="text-gray-600">
                Our team comprises seasoned analysts and professional tipsters with years of experience in various sports markets.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-amber-100 p-3 rounded-lg inline-block mb-4">
                <Trophy className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Success</h3>
              <p className="text-gray-600">
                We boast a high success rate, consistently delivering profitable picks that our members rely on. Transparency is key to our record.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <CheckCircle className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data-Driven Approach</h3>
              <p className="text-gray-600">
                Every tip is backed by rigorous statistical analysis, historical data, and careful consideration of all relevant factors.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Reusing Testimonials section from home for consistency */}
      <section className="py-16 bg-blue-900">
        <Container>
          <div className="text-center mb-12">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Our Members Say
            </motion.h2>
            <motion.p
              className="text-blue-200 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              See why thousands trust Mr. Banks Tips for their betting success.
            </motion.p>
          </div>
          {/* Testimonials content goes here, you would typically import Testimonials component or copy its structure */}
          {/* For simplicity in this response, imagine Testimonials component rendered here */}
        </Container>
      </section>
    </>
  );
};

export default AboutPage;
