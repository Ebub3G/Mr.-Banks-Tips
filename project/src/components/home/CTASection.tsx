import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

const CTASection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3755761/pexels-photo-3755761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/80"></div>
      
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Ready to Transform Your Betting Strategy?
            </h2>
            
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Join Mr. Banks' community of successful bettors and get access to expert predictions, detailed analysis, and personalized advice.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Button variant="premium" size="lg" className="font-semibold">
                Start Winning Today <ChevronRight className="ml-1 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 font-semibold hover:bg-white/20">
                View Free Tips
              </Button>
            </div>
            
            <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <CheckCircle className="text-green-400 mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-white font-medium">Expert Analysis</p>
                  <p className="text-blue-200 text-sm">From professional tipsters</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-green-400 mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-white font-medium">68% Success Rate</p>
                  <p className="text-blue-200 text-sm">Proven long-term results</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="text-green-400 mr-2 h-5 w-5 flex-shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-white font-medium">7-Day Guarantee</p>
                  <p className="text-blue-200 text-sm">Risk-free trial period</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;