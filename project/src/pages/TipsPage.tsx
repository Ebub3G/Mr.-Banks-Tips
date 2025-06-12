// project/src/pages/TipsPage.tsx
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CalendarClock, TrendingUp, Sparkles, Trophy, CheckCircle, XCircle } from 'lucide-react';
import { dailyTipBundles } from '../data/dailyTipsData'; // New import
import { formatDate } from '../lib/utils';
import Container from '../components/ui/Container';
import { Card, CardContent, CardHeader, CardFooter } from '../components/ui/Card'; // Import CardHeader/Footer
import Button from '../components/ui/Button';

const TipsPage = () => {
  useEffect(() => {
    document.title = "Daily Betting Tips - Mr. Banks Tips";
  }, []);

  const sortedBundles = [...dailyTipBundles].sort((a, b) => b.date.getTime() - a.date.getTime());

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
    <>
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex items-center bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Trophy className="mr-2 h-4 w-4" />
              Daily Expert Selections
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Today's & Upcoming Betting Tips
            </h1>
            <p className="text-blue-100 text-lg">
              Get Mr. Banks' top picks across all sports, compiled into powerful daily bundles for maximum value.
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Latest Daily Tip Bundles
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Each bundle represents a curated selection of tips, offering higher odds potential and expert analysis.
            </motion.p>
          </div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {sortedBundles.map((bundle) => (
              <motion.div key={bundle.id} variants={itemVariants}>
                <Card className="h-full flex flex-col">
                  <CardHeader className="bg-blue-50 border-b border-blue-100">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{bundle.title}</h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <CalendarClock className="h-4 w-4 mr-1" />
                        {formatDate(bundle.date)}
                      </div>
                    </div>
                    <div className="flex items-center text-gray-700 text-sm">
                      <TrendingUp className="h-4 w-4 mr-1 text-green-600" />
                      <span className="font-semibold">Total Odds: {bundle.totalOdds.toFixed(2)}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="p-5 flex-grow">
                    <p className="text-gray-700 mb-4 text-sm italic">"{bundle.analysisSummary}"</p>
                    <h4 className="font-semibold text-gray-800 mb-3">Tips included:</h4>
                    <ul className="space-y-2 text-sm">
                      {bundle.tips.map((tip) => (
                        <li key={tip.id} className="flex items-start">
                          <span className="inline-flex items-center text-xs font-medium text-blue-800 bg-blue-100 px-2 py-0.5 rounded-full mr-2">
                            {tip.sportId.charAt(0).toUpperCase() + tip.sportId.slice(1)}
                          </span>
                          <span className="text-gray-700">{tip.match} - <span className="font-medium">{tip.prediction}</span> (Odds: {tip.odds.toFixed(2)})</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    {bundle.outcome === 'win' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        <CheckCircle className="mr-1 h-3 w-3" />
                        WIN
                      </span>
                    )}
                    {bundle.outcome === 'loss' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                        <XCircle className="mr-1 h-3 w-3" />
                        LOSS
                      </span>
                    )}
                    {bundle.outcome === 'pending' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        PENDING
                      </span>
                    )}
                    <Link to="/tips">
                      <Button variant="link" size="sm" className="text-blue-600">
                        View Bundle Analysis <Sparkles className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  );
};

export default TipsPage;
