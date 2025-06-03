// project/src/pages/SportPage.tsx
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Calendar, ArrowUpRight, Star } from 'lucide-react'; // Added Star import
import { sports, getSportIcon } from '../data/sportsData';
import { tips } from '../data/tipsData';
import Container from '../components/ui/Container';
import { Card, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import { formatDate } from '../lib/utils'; // Import formatDate

const SportPage = () => {
  const { sportName } = useParams<{ sportName: string }>();

  // Find the sport by route
  const sport = sports.find(s => s.route === `/sports/${sportName}`);

  // If sport not found, redirect to 404
  if (!sport) {
    return <Navigate to="/404" />;
  }

  // Filter tips for this sport
  const sportTips = tips.filter(tip => tip.sportId === sport.id);
  const SportIcon = getSportIcon(sport.icon);

  // Group tips by competition
  const tipsByCompetition = sportTips.reduce((acc, tip) => {
    const competitionName = tip.competition || 'Other Matches'; // Fallback for tips without competition
    if (!acc.has(competitionName)) {
      acc.set(competitionName, []);
    }
    acc.get(competitionName)?.push(tip);
    return acc;
  }, new Map<string, typeof tips>());

  // Set page title
  React.useEffect(() => {
    document.title = `${sport.name} Betting Tips - Mr. Banks Tips`;
  }, [sport.name]);

  return (
    <>
      {/* Header section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16"
      >
        <Container>
          <div className="mb-2">
            <Link to="/sports" className="inline-flex items-center text-blue-200 hover:text-white text-sm">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to all sports
            </Link>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-800 rounded-lg mr-4">
                  <SportIcon className="h-8 w-8" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">{sport.name} Tips</h1>
              </div>
              <p className="text-blue-100 max-w-2xl">
                {sport.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 md:mt-0"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 inline-block">
                <div className="text-center">
                  <p className="text-blue-200 text-sm mb-1">Success Rate</p>
                  <p className="text-3xl font-bold">{sport.id === 'football' ? '72%' : sport.id === 'horse-racing' ? '58%' : '65%'}</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Today's Tips
            </Button>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Calendar className="mr-2 h-4 w-4" />
              Upcoming
            </Button>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Results
            </Button>
            <Link to="/premium"> {/* Added Link */}
              <Button variant="premium">
                Premium {sport.name} Tips
              </Button>
            </Link>
          </div>
        </Container>
      </motion.section>

      {/* Main content */}
      <section className="py-12 bg-gray-50">
        <Container>
          {sportTips.length > 0 ? (
            <>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-2xl font-bold text-gray-900 mb-6"
              >
                Latest {sport.name} Tips
              </motion.h2>

              {Array.from(tipsByCompetition.keys()).map((competition, compIndex) => (
                <motion.div
                  key={competition}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + compIndex * 0.1, duration: 0.5 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-4 px-4 py-2 bg-gray-100 rounded-md border border-gray-200">
                    {competition}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tipsByCompetition.get(competition)?.map((tip, tipIndex) => (
                      <motion.div
                        key={tip.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + compIndex * 0.1 + tipIndex * 0.05, duration: 0.5 }}
                      >
                        <Card isPremium={tip.isPremium}>
                          <CardContent className="p-5">
                            <div className="mb-4">
                              <div className="flex justify-between items-start mb-2">
                                <span className="text-xs font-medium text-gray-500">
                                  {formatDate(tip.date)}
                                </span>
                                {tip.result && (
                                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${
                                    tip.result === 'win'
                                      ? 'bg-green-100 text-green-800'
                                      : tip.result === 'loss'
                                      ? 'bg-red-100 text-red-800'
                                      : 'bg-blue-100 text-blue-800'
                                  }`}>
                                    {tip.result.toUpperCase()}
                                  </span>
                                )}
                              </div>
                              <h3 className="font-bold text-gray-900">{tip.match}</h3>
                            </div>

                            <div className="bg-gray-100 p-3 rounded-md mb-4">
                              <div className="text-xs text-gray-500 mb-1">Our Prediction:</div>
                              <div className="font-semibold">{tip.prediction}</div>
                              <div className="mt-1 text-sm">
                                <span className="text-gray-700">Odds: </span>
                                <span className="text-blue-600 font-medium">{tip.odds.toFixed(2)}</span>
                              </div>
                            </div>

                            {tip.isPremium ? (
                              <div className="bg-amber-50 border border-amber-100 rounded-md p-3 mb-4">
                                <p className="text-sm text-gray-800">
                                  <span className="font-semibold text-amber-800">Premium Analysis: </span>
                                  Detailed insights and betting strategy available for premium members.
                                </p>
                              </div>
                            ) : (
                              <div className="mb-4">
                                <p className="text-sm text-gray-700 line-clamp-3">
                                  {tip.analysis}
                                </p>
                              </div>
                            )}

                            <div className="flex justify-between items-center">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-4 w-4 ${i < tip.confidence ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
                                  />
                                ))}
                              </div>
                              <Button variant="link" size="sm" className="text-blue-600">
                                Read More <ArrowUpRight className="ml-1 h-3 w-3" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Premium upsell card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="mt-8"
              >
                <Card className="bg-blue-900 text-white h-full border-0">
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-4">Get Premium {sport.name} Tips</h3>
                    <p className="text-blue-100 mb-6">
                      Unlock our highest confidence {sport.name.toLowerCase()} predictions with detailed analysis and expert insights.
                    </p>
                    <ul className="space-y-3 mb-8">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-50">Early access to weekend picks</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-50">Detailed analysis and statistics</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-50">Recommended stake sizing</span>
                      </li>
                    </ul>
                    <div className="mt-auto">
                      <Link to="/premium"> {/* Added Link */}
                        <Button variant="premium" fullWidth>
                          Upgrade Now <ChevronRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                No tips available yet
              </h2>
              <p className="text-gray-600 mb-6">
                Check back soon for our latest {sport.name.toLowerCase()} predictions.
              </p>
              <Link to="/sports"> {/* Added Link */}
                <Button variant="outline">
                  Browse Other Sports
                </Button>
              </Link>
            </div>
          )}

          <div className="flex justify-center mt-8">
            <Link to="/results"> {/* Added Link */}
              <Button variant="outline" size="lg">
                View All {sport.name} Tips <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SportPage;
