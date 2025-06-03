import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Award, CheckCircle } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1,
      transition: { 
        delay: 0.4,
        staggerChildren: 0.1
      } 
    }
  };

  const statItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 z-0" />
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxODJhNjEiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdi02aC02djZoNnptNiAwaDZ2LTZoLTZ2NnptLTEyIDBoLTZ2Nmg2di02em0tNi02aC02djZoNnYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30 z-0" />

      <Container className="relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={itemVariants} className="flex justify-center mb-3">
            <Trophy className="h-10 w-10 text-amber-500" />
          </motion.div>
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-800 text-transparent bg-clip-text"
          >
            Expert Betting Tips & Analysis
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-700 mb-8"
          >
            Join thousands of smart bettors making informed decisions with Mr. Banks' industry-leading predictions and insights.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="premium" className="font-semibold">
              Get Premium Access
            </Button>
            <Button size="lg" variant="outline" className="font-semibold">
              View Today's Free Tips
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto"
          variants={statsVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div 
            variants={statItemVariants}
            className="bg-white rounded-xl p-5 shadow-md flex flex-col items-center text-center"
          >
            <div className="bg-blue-100 p-3 rounded-full mb-3">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">68%</h3>
            <p className="text-sm text-gray-500">Success Rate</p>
          </motion.div>
          
          <motion.div 
            variants={statItemVariants}
            className="bg-white rounded-xl p-5 shadow-md flex flex-col items-center text-center"
          >
            <div className="bg-amber-100 p-3 rounded-full mb-3">
              <Trophy className="h-6 w-6 text-amber-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">1.2K+</h3>
            <p className="text-sm text-gray-500">Premium Members</p>
          </motion.div>
          
          <motion.div 
            variants={statItemVariants}
            className="bg-white rounded-xl p-5 shadow-md flex flex-col items-center text-center"
          >
            <div className="bg-green-100 p-3 rounded-full mb-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">5.4K+</h3>
            <p className="text-sm text-gray-500">Winning Picks</p>
          </motion.div>
          
          <motion.div 
            variants={statItemVariants}
            className="bg-white rounded-xl p-5 shadow-md flex flex-col items-center text-center"
          >
            <div className="bg-purple-100 p-3 rounded-full mb-3">
              <Award className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">7+ Yrs</h3>
            <p className="text-sm text-gray-500">Experience</p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Hero;