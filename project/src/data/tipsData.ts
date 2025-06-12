// project/src/data/tipsData.ts
import { Tip } from '../types';

// Sample tips data
export const tips: Tip[] = [
  {
    id: '1',
    sportId: 'football',
    match: 'Manchester United vs Liverpool',
    prediction: 'Liverpool to win',
    odds: 2.1,
    confidence: 4,
    date: new Date('2025-05-15'),
    result: 'pending',
    analysis: 'Liverpool has been in excellent form with 5 straight wins, while Manchester United has struggled defensively, conceding in their last 7 matches. Expect Liverpool\'s front three to create problems for United\'s backline.',
    competition: 'English Premier League'
  },
  {
    id: '2',
    sportId: 'basketball',
    match: 'Los Angeles Lakers vs Boston Celtics',
    prediction: 'Over 220.5 Points',
    odds: 1.9,
    confidence: 5,
    date: new Date('2025-05-14'),
    result: 'win',
    analysis: 'Both teams are averaging over 115 points per game in their last 10 matches. The last 5 head-to-head games have all gone over this total. With both teams at full strength, expect a high-scoring encounter.',
    competition: 'NBA Playoffs'
  },
  {
    id: '3',
    sportId: 'tennis',
    match: 'Novak Djokovic vs Rafael Nadal',
    prediction: 'Nadal to win',
    odds: 2.3,
    confidence: 3,
    date: new Date('2025-05-16'),
    result: 'pending',
    analysis: 'While Djokovic has been the more consistent player overall, Nadal excels on clay courts with a 92% win rate. This matchup on Nadal\'s preferred surface gives him a significant advantage despite recent form.',
    competition: 'French Open'
  },
  {
    id: '4',
    sportId: 'football',
    match: 'Bayern Munich vs Borussia Dortmund',
    prediction: 'Both Teams to Score',
    odds: 1.75,
    confidence: 5,
    date: new Date('2025-05-13'),
    result: 'win',
    analysis: 'The last 8 meetings between these teams have seen both teams score. Bayern is averaging 3.1 goals per game while Dortmund is averaging 2.3 goals this season. Both teams have attacking mindsets and defensive vulnerabilities.',
    competition: 'Bundesliga'
  },
  {
    id: '5',
    sportId: 'horse-racing',
    match: 'Kentucky Derby - Race 4',
    prediction: 'Midnight Thunder to Win',
    odds: 4.5,
    confidence: 4,
    date: new Date('2025-05-12'),
    result: 'loss',
    analysis: 'Midnight Thunder has shown excellent form in recent prep races, winning 3 of the last 4 starts. The jockey has a 22% win rate at this track, and the horse performs particularly well at this distance on dry tracks.',
    competition: 'Kentucky Derby Festival'
  },
  {
    id: '6',
    sportId: 'golf',
    match: 'US Open - Round 1',
    prediction: 'Rory McIlroy to shoot under par',
    odds: 1.85,
    confidence: 3,
    date: new Date('2025-05-11'),
    result: 'win',
    analysis: 'McIlroy has shot under par in the opening round of his last 6 tournaments. His driving accuracy has improved significantly, which will be crucial on this challenging course. His early tee time also provides favorable green conditions.',
    competition: 'PGA Tour - Major'
  },
  {
    id: '7',
    sportId: 'boxing',
    match: 'Joshua vs Wilder',
    prediction: 'Fight to go over 7.1 rounds',
    odds: 2.1,
    confidence: 3,
    date: new Date('2025-05-18'),
    result: 'pending',
    analysis: 'Despite both fighters having knockout power, this high-stakes matchup is likely to see a cautious approach from both. Joshua has improved his defense significantly, while Wilder has shown more patience in recent fights.',
    competition: 'Heavyweight Championship'
  },
  {
    id: '8',
    sportId: 'cricket',
    match: 'England vs Australia',
    prediction: 'Australia to win',
    odds: 1.9,
    confidence: 4,
    date: new Date('2025-05-17'),
    result: 'pending',
    analysis: 'Australia has won 7 of the last 10 matches against England and has a superior bowling attack for the expected conditions. The pitch will favor Australia\'s pace bowlers, giving them a significant edge.',
    competition: 'ICC World Cup'
  },
  {
    id: '9',
    sportId: 'football',
    match: 'Inter Milan vs AC Milan',
    prediction: 'Inter Milan to win',
    odds: 2.0,
    confidence: 5,
    date: new Date('2025-05-16'),
    result: 'pending',
    analysis: 'Derby della Madonnina always produces intense matches. Inter is in top form, scoring consistently and with a solid defense. AC Milan has struggled in recent away games.',
    competition: 'Serie A'
  },
  {
    id: '10',
    sportId: 'football',
    match: 'Paris Saint-Germain vs Olympique Marseille',
    prediction: 'PSG -1.5 Handicap',
    odds: 1.8,
    confidence: 4,
    date: new Date('2025-05-14'),
    result: 'win',
    analysis: 'PSG dominates Ligue 1 at home. Their attacking trio is in formidable shape, and Marseille has a poor away record against top teams.',
    competition: 'Ligue 1'
  },
  {
    id: '11',
    sportId: 'basketball',
    match: 'Golden State Warriors vs Phoenix Suns',
    prediction: 'Warriors to win',
    odds: 2.2,
    confidence: 3,
    date: new Date('2025-05-15'),
    result: 'loss',
    analysis: 'Warriors are strong at home, but Suns have been consistently performing well. Expect a close game, but home-court advantage should play a role.',
    competition: 'NBA Regular Season'
  }
];

export const recentWins = [
  {
    id: '21',
    match: 'Arsenal vs Tottenham',
    prediction: 'Arsenal to win',
    odds: 1.85,
    date: new Date('2025-05-10'),
    sport: 'Football'
  },
  {
    id: '22',
    match: 'New York Knicks vs Miami Heat',
    prediction: 'Knicks -4.5',
    odds: 1.95,
    date: new Date('2025-05-09'),
    sport: 'Basketball'
  },
  {
    id: '23',
    match: 'Royal Ascot - Gold Cup',
    prediction: 'Stradivarius to place',
    odds: 2.75,
    date: new Date('2025-05-08'),
    sport: 'Horse Racing'
  },
  {
    id: '24',
    match: 'Djokovic vs Alcaraz',
    prediction: 'Over 38.5 games',
    odds: 1.9,
    date: new Date('2025-05-07'),
    sport: 'Tennis'
  }
];

export const featuredTip: Tip = {
  id: '100',
  sportId: 'football',
  match: 'Real Madrid vs Manchester City',
  prediction: 'Over 2.5 Goals & Both Teams to Score',
  odds: 2.0,
  confidence: 5,
  date: new Date(),
  result: 'pending',
  analysis: 'Both teams are in phenomenal attacking form, with Madrid averaging 3.1 goals per game and City 2.9 goals in their last 10 matches. Defensively, both teams have conceded in 70% of their Champions League fixtures. The last 5 head-to-head matches have produced an average of 3.6 goals. With all key attacking players available for both sides, we expect an entertaining, high-scoring encounter.',
  competition: 'UEFA Champions League'
};
