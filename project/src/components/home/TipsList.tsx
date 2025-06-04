// project/src/components/home/TipsList.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarClock, Lock, TrendingUp, Star, ExternalLink, Sparkles } from 'lucide-react';
import { tips } from '../../data/tipsData'; // Still uses individual tips
import { formatDate, formatOdds } from '../../lib/utils';
import Container from '../ui/Container';
import { Card, CardContent } from '../ui/Card';
import Button from '../ui/Button';

const TipsList = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredTips = activeFilter === 'all'
    ? tips.filter(tip => !tip.isPremium)
    : tips.filter(tip => tip.sportId === activeFilter && !tip.isPremium);

  const filters = [
    { id: 'all', label: 'All Tips' },
    { id: 'football', label: 'Football' },
    { id: 'basketball', label: 'Basketball' },
    { id: 'tennis', label: 'Tennis' },
    { id: 'horse-racing', label: 'Horse Racing' }
  ];

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
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section className="py-16">
      <Container>
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Today's Free Tips
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our expert selections available to all users. For our highest confidence picks and detailed analysis, upgrade to premium.
            </p>
          </motion.div>
        </div>

        {/* Filter tabs */}
        <motion.div
          className="flex overflow-x-auto pb-2 mb-6 -mx-4 px-4 md:mx-0 md:px-0 md:justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex rounded-md shadow-sm border border-gray-200 p-1 bg-white">
            {filters.map((filter) => (
              <button
                key={filter.id}
                className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
                  activeFilter === filter.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tips grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredTips.map((tip) => (
            <motion.div key={tip.id} variants={itemVariants}>
              <Card className="h-full flex flex-col">
                <CardContent className="p-5 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-3">
                    <span className="inline-flex items-center text-xs font-medium text-blue-800 bg-blue-100 px-2.5 py-0.5 rounded-full">
                      {tip.sportId.charAt(0).toUpperCase() + tip.sportId.slice(1)}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <CalendarClock className="h-4 w-4 mr-1" />
                      {formatDate(tip.date)}
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tip.match}</h3>

                  <div className="bg-gray-50 rounded p-3 mb-4">
                    <div className="text-xs font-medium text-gray-500 mb-1">Our Prediction:</div>
                    <div className="font-semibold text-gray-900">{tip.prediction}</div>
                    <div className="flex items-center mt-2 text-gray-700 text-sm">
                      <TrendingUp className="h-4 w-4 mr-1 text-green-600" />
                      <span>Odds: {formatOdds(tip.odds)}</span>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <div className="flex items-center mb-3">
                      <div className="flex mr-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < tip.confidence
                                ? 'text-amber-400 fill-amber-400'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        Confidence: {tip.confidence}/5
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      {tip.result ? (
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded ${
                          tip.result === 'win'
                            ? 'bg-green-100 text-green-800'
                            : tip.result === 'loss'
                            ? 'bg-red-100 text-red-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {tip.result.toUpperCase()}
                        </span>
                      ) : (
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-100 text-blue-800">
                          PENDING
                        </span>
                      )}
                      <Button variant="link" size="sm" className="text-blue-600">
                        View Analysis <ExternalLink className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Premium tip teaser card */}
          <motion.div variants={itemVariants}>
            <Card className="h-full bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden border-0">
              <CardContent className="p-0 h-full">
                <div className="p-5 flex flex-col h-full relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-amber-500/20 blur-xl"></div>
                  <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-blue-500/20 blur-xl"></div>

                  <div className="relative">
                    <div className="flex justify-between items-start mb-6 mt-2">
                      <span className="inline-flex items-center text-xs font-medium bg-amber-500 text-white px-3 py-1 rounded-full">
                        <Sparkles className="mr-1 h-3 w-3" />
                        PREMIUM
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-6">Unlock our premium tips for maximum value</h3>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-start">
                        <div className="bg-white/10 p-1 rounded-full mr-3 mt-0.5">
                          <Lock className="h-3 w-3" />
                        </div>
                        <p className="text-sm text-gray-200">Access to all premium tips across all sports</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-white/10 p-1 rounded-full mr-3 mt-0.5">
                          <Lock className="h-3 w-3" />
                        </div>
                        <p className="text-sm text-gray-200">Detailed analysis and recommended stake sizes</p>
                      </div>
                      <div className="flex items-start">
                        <div className="bg-white/10 p-1 rounded-full mr-3 mt-0.5">
                          <Lock className="h-3 w-3" />
                        </div>
                        <p className="text-sm text-gray-200">Early access to weekend tips and specials</p>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <Button
                        variant="premium"
                        className="w-full font-semibold shadow-lg"
                      >
                        Upgrade to Premium
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <div className="text-center mt-10">
          <Link to="/tips"> {/* Changed link to /tips */}
            <Button variant="outline" size="lg">
              View All Daily Tips
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default TipsList;
