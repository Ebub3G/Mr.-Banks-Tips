import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { sports, getSportIcon } from '../../data/sportsData';
import Container from '../ui/Container';

const SportCategories = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } }
  };

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Betting Tips By Sport
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Browse our expert predictions across all major sports and competitions worldwide
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {sports.map((sport) => {
            const SportIcon = getSportIcon(sport.icon);
            
            return (
              <motion.div key={sport.id} variants={itemVariants}>
                <Link 
                  to={sport.route} 
                  className="block h-full"
                >
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center h-full border border-gray-100 hover:border-blue-100">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-full mb-4">
                      <SportIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{sport.name}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">{sport.description}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default SportCategories;