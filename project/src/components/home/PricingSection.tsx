import React from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronRight } from 'lucide-react';
import { pricingTiers } from '../../data/pricingData';
import Container from '../ui/Container';
import Button from '../ui/Button';

const PricingSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 70 } }
  };

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <motion.span
            className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            Pricing Plans
          </motion.span>
          
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Choose Your Winning Strategy
          </motion.h2>
          
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Select the plan that fits your betting needs. All plans include access to our expert analysis and tips.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.id}
              variants={cardVariants}
              className={`rounded-2xl overflow-hidden relative ${
                tier.recommended ? 'shadow-lg border-2 border-amber-400' : 'shadow-md border border-gray-200'
              }`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-bold px-3 py-1 text-center">
                  MOST POPULAR
                </div>
              )}
              
              <div className={`p-6 ${tier.recommended ? 'pt-9' : ''}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="flex items-baseline mb-5">
                  <span className="text-3xl font-extrabold text-gray-900">${tier.price}</span>
                  <span className="text-gray-500 ml-2">/{tier.duration}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={tier.recommended ? 'premium' : 'primary'}
                  fullWidth
                  className="font-semibold"
                >
                  Get Started
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 bg-white p-6 rounded-lg shadow-sm border border-gray-200 max-w-3xl mx-auto">
          <h3 className="text-lg font-semibold mb-3 text-gray-900">100% Satisfaction Guarantee</h3>
          <p className="text-gray-700">
            We're confident in the quality of our betting tips. If you're not completely satisfied with your membership within the first 7 days, we'll refund your money - no questions asked.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default PricingSection;