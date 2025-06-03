import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, Sparkles, LockIcon, TrendingUp } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { pricingTiers, testimonials } from '../data/pricingData';

const PremiumPage = () => {
  React.useEffect(() => {
    document.title = "Premium Membership - Mr. Banks Tips";
  }, []);

  return (
    <>
      {/* Hero section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -left-20 w-96 h-96 rounded-full bg-amber-500 opacity-10 blur-3xl"></div>
          <div className="absolute top-40 right-10 w-72 h-72 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Sparkles className="mr-2 h-4 w-4" />
                Premium Membership
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                Gain The Winning Edge
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join our premium membership for exclusive access to our highest confidence picks, detailed analysis, and expert betting strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Button variant="premium" size="lg" className="font-semibold text-base">
                  Join Premium Today
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white/30 hover:bg-white/10 font-semibold text-base">
                  Learn More
                </Button>
              </div>
              
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-blue-100">7-day money-back guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-blue-100">Cancel anytime</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-blue-100">Instant access</span>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features section */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Premium Benefits
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Exclusive advantages that give our premium members the edge in their betting
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                <LockIcon className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Exclusive Picks</h3>
              <p className="text-gray-600 mb-4">
                Access our highest confidence selections that are exclusive to premium members, with a success rate of over 68%.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2" />
                  <span className="text-sm text-gray-600">5-star confidence picks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2" />
                  <span className="text-sm text-gray-600">Value accumulators</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2" />
                  <span className="text-sm text-gray-600">Special event predictions</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-amber-100 p-3 rounded-lg inline-block mb-4">
                <TrendingUp className="h-6 w-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Detailed Analysis</h3>
              <p className="text-gray-600 mb-4">
                Get comprehensive breakdowns of each bet with statistical insights, form analysis, and expert reasoning.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2" />
                  <span className="text-sm text-gray-600">Advanced statistics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2" />
                  <span className="text-sm text-gray-600">Form and trend analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2" />
                  <span className="text-sm text-gray-600">Recommended stake sizing</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <Star className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Priority Features</h3>
              <p className="text-gray-600 mb-4">
                Enjoy early access to tips, premium customer support, and exclusive resources to maximize your success.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2" />
                  <span className="text-sm text-gray-600">Early tip access</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2" />
                  <span className="text-sm text-gray-600">VIP customer support</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 mr-2" />
                  <span className="text-sm text-gray-600">Members-only community</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Pricing section */}
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
              Premium Membership Plans
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Choose the plan that works best for you. All plans include full access to premium features.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                className={`rounded-xl overflow-hidden relative ${
                  tier.recommended ? 'shadow-xl border-2 border-amber-400 transform hover:scale-105' : 'shadow-md border border-gray-200 transform hover:scale-102'
                } transition-all duration-300`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                {tier.recommended && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-bold px-3 py-1.5 text-center">
                    MOST POPULAR
                  </div>
                )}
                
                <div className={`p-6 bg-white ${tier.recommended ? 'pt-10' : ''}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="flex items-baseline mb-5">
                    <span className="text-3xl font-extrabold text-gray-900">${tier.price}</span>
                    <span className="text-gray-500 ml-2">/{tier.duration}</span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
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
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 max-w-3xl mx-auto">
            <motion.div
              className="bg-blue-50 border border-blue-100 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-blue-500" />
                100% Satisfaction Guarantee
              </h3>
              <p className="text-blue-700">
                We're confident in the quality of our betting tips and analysis. If you're not completely satisfied with your premium membership within the first 7 days, we'll refund your money in full - no questions asked.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              What Our Members Say
            </motion.h2>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Don't just take our word for it — hear from our premium members
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating 
                          ? 'text-amber-400 fill-amber-400' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image}
                    alt={`${testimonial.name} avatar`}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-medium text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-xs">Premium Member</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Join Our Winning Team?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Get instant access to all our premium betting tips and start making smarter bets today.
              </p>
              <Button variant="premium" size="lg" className="font-semibold text-base">
                Become a Premium Member
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default PremiumPage;