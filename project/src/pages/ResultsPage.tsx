import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, Calendar, Filter, ChevronDown, Search, Check, X } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';
import { tips } from '../data/tipsData';
import { formatDate, calculateSuccessRate } from '../lib/utils';

const ResultsPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [selectedSport, setSelectedSport] = useState('all');
  const [dateRange, setDateRange] = useState('all');

  React.useEffect(() => {
    document.title = "Results & Records - Mr. Banks Tips";
  }, []);

  // Filter tips based on active tab and filters
  const filteredTips = tips.filter(tip => {
    // Filter by result
    if (activeTab !== 'all' && tip.result !== activeTab) return false;
    
    // Filter by sport
    if (selectedSport !== 'all' && tip.sportId !== selectedSport) return false;
    
    // Filter by date range (this is simplified, would need actual date logic)
    if (dateRange !== 'all') {
      const today = new Date();
      const tipDate = new Date(tip.date);
      const daysDifference = Math.floor((today.getTime() - tipDate.getTime()) / (1000 * 3600 * 24));
      
      if (dateRange === 'week' && daysDifference > 7) return false;
      if (dateRange === 'month' && daysDifference > 30) return false;
      if (dateRange === '3months' && daysDifference > 90) return false;
    }
    
    return true;
  });

  // Calculate success metrics
  const winCount = tips.filter(tip => tip.result === 'win').length;
  const totalResolved = tips.filter(tip => tip.result === 'win' || tip.result === 'loss').length;
  const successRate = calculateSuccessRate(winCount, totalResolved);

  return (
    <>
      <section className="bg-blue-900 text-white py-12">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Results & Track Record</h1>
            <p className="text-blue-100 max-w-2xl">
              Complete transparency on our betting performance. View our full history of picks and their results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8">
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-lg mr-4">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-3xl font-bold">{successRate}</p>
                  <p className="text-blue-200">Overall Success Rate</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-lg mr-4">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-3xl font-bold">{winCount}</p>
                  <p className="text-blue-200">Total Winning Picks</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-start">
                <div className="bg-white/10 p-3 rounded-lg mr-4">
                  <Calendar className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-3xl font-bold">{tips.length}</p>
                  <p className="text-blue-200">Total Tips Provided</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
      
      <section className="py-12 bg-gray-50">
        <Container>
          {/* Filter tabs */}
          <div className="flex justify-between flex-wrap gap-4 mb-6">
            <div className="flex overflow-x-auto pb-2 -mx-2 px-2 md:mx-0 md:px-0">
              <div className="inline-flex rounded-md shadow-sm p-1 bg-white border border-gray-200">
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
                    activeTab === 'all'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveTab('all')}
                >
                  All Tips
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
                    activeTab === 'win'
                      ? 'bg-green-100 text-green-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveTab('win')}
                >
                  Wins
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
                    activeTab === 'loss'
                      ? 'bg-red-100 text-red-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveTab('loss')}
                >
                  Losses
                </button>
                <button
                  className={`px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap ${
                    activeTab === 'pending'
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveTab('pending')}
                >
                  Pending
                </button>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Search tips..."
                />
              </div>
              
              <button
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
                <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
          
          {/* Expanded filters */}
          {isFiltersOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-4 rounded-md shadow-sm mb-6 border border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sport</label>
                  <select
                    value={selectedSport}
                    onChange={(e) => setSelectedSport(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  >
                    <option value="all">All Sports</option>
                    <option value="football">Football</option>
                    <option value="basketball">Basketball</option>
                    <option value="tennis">Tennis</option>
                    <option value="horse-racing">Horse Racing</option>
                    <option value="golf">Golf</option>
                    <option value="boxing">Boxing/UFC</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time Period</label>
                  <select
                    value={dateRange}
                    onChange={(e) => setDateRange(e.target.value)}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                  >
                    <option value="all">All Time</option>
                    <option value="week">Last 7 Days</option>
                    <option value="month">Last 30 Days</option>
                    <option value="3months">Last 90 Days</option>
                  </select>
                </div>
                
                <div className="flex items-end">
                  <Button variant="outline" className="mr-2">
                    Apply Filters
                  </Button>
                  <Button 
                    variant="ghost" 
                    onClick={() => {
                      setSelectedSport('all');
                      setDateRange('all');
                    }}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Results table */}
          <motion.div
            className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sport
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Match
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Prediction
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Odds
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Confidence
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Result
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredTips.map((tip) => (
                    <tr key={tip.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(tip.date)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm font-medium text-gray-900">
                          {tip.sportId.charAt(0).toUpperCase() + tip.sportId.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {tip.match}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {tip.prediction}
                        {tip.isPremium && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800">
                            Premium
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                        {tip.odds.toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex">
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
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {tip.result === 'win' && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <Check className="mr-1 h-3 w-3" />
                            WIN
                          </span>
                        )}
                        {tip.result === 'loss' && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            <X className="mr-1 h-3 w-3" />
                            LOSS
                          </span>
                        )}
                        {tip.result === 'pending' && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            <Clock className="mr-1 h-3 w-3" />
                            PENDING
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                  
                  {filteredTips.length === 0 && (
                    <tr>
                      <td colSpan={7} className="px-6 py-10 text-center text-gray-500">
                        No tips match your current filters. Try adjusting your search criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            
            <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 flex items-center justify-between">
              <div className="text-sm text-gray-500">
                Showing <span className="font-medium">{filteredTips.length}</span> results
              </div>
              <div className="flex justify-between">
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed" disabled>
                  Previous
                </button>
                <button className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
      
      {/* Monthly success rates */}
      <section className="py-12 bg-white">
        <Container>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Monthly Success Rates
            </h2>
            <p className="text-gray-600">
              Track our performance over time with our monthly success rates across all sports.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-200">
            <div className="h-64 w-full flex items-center justify-center">
              <p className="text-gray-500">
                Monthly performance chart would be displayed here
              </p>
            </div>
          </div>
          
          <div className="mt-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Our Verification Process
            </h3>
            <p className="text-gray-700 mb-4">
              At Mr. Banks Tips, we are committed to complete transparency. All our tips and their results are tracked and verified using the following process:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-700">All predictions are timestamped before events begin</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-700">Results are recorded using official league/tournament data</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-700">Monthly performance reviews are conducted by independent auditors</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                <span className="text-gray-700">All historical tips remain accessible to members for verification</span>
              </li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
};

export default ResultsPage;