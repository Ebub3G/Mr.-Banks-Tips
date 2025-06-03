import React from 'react';
import { CalendarClock, TrendingUp, BarChart3, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { formatDate } from '../../lib/utils';
import { featuredTip } from '../../data/tipsData';
import Container from '../ui/Container';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/Card';
import Button from '../ui/Button';

const FeaturedTip = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="flex flex-col items-center text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wide mb-3 inline-block">
              Today's Featured Tip
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Premium Expert Pick
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our most confident selection of the day, carefully analyzed by our expert team.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card isPremium className="max-w-4xl mx-auto overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">{featuredTip.match}</h3>
                  <div className="flex items-center mt-1">
                    <CalendarClock className="h-4 w-4 mr-1" />
                    <span className="text-sm text-gray-200">
                      {formatDate(featuredTip.date)}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-700 rounded-full px-3 py-1 text-sm font-semibold inline-flex items-center">
                    <TrendingUp className="h-3.5 w-3.5 mr-1" />
                    {featuredTip.odds.toFixed(2)} Odds
                  </span>
                  <span className="bg-amber-500 rounded-full px-3 py-1 text-sm font-semibold inline-flex items-center">
                    <BarChart3 className="h-3.5 w-3.5 mr-1" />
                    {featuredTip.confidence}/5 Confidence
                  </span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="py-6">
              <div className="mb-6">
                <div className="inline-block bg-blue-50 text-blue-800 px-3 py-1 rounded-md font-medium mb-3">
                  Our Prediction
                </div>
                <h4 className="text-xl font-bold text-gray-900">{featuredTip.prediction}</h4>
              </div>
              
              <div>
                <div className="flex items-center mb-3">
                  <Award className="h-5 w-5 text-amber-500 mr-2" />
                  <h5 className="text-lg font-semibold text-gray-900">Expert Analysis</h5>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {featuredTip.analysis}
                </p>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-500">
                <span className="font-medium">Premium members:</span> Get detailed stake advice and in-play recommendations
              </div>
              <Button variant="premium">
                Unlock Premium Tips
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturedTip;