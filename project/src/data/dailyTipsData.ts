// project/src/data/dailyTipsData.ts
import { DailyTipBundle, Tip } from '../types';
import { tips as allIndividualTips } from './tipsData'; // Import individual tips

// Helper to calculate total odds
const calculateTotalOdds = (tips: Tip[]): number => {
  return tips.reduce((acc, tip) => acc * tip.odds, 1);
};

export const dailyTipBundles: DailyTipBundle[] = [
  {
    id: 'bundle-20250522',
    date: new Date('2025-05-22'),
    title: "Thursday's High Confidence Picks",
    tips: [
      allIndividualTips.find(t => t.id === '1')!, // Man Utd vs Liverpool (Football)
      allIndividualTips.find(t => t.id === '3')!, // Djokovic vs Nadal (Tennis)
      allIndividualTips.find(t => t.id === '6')!, // Rory McIlroy (Golf)
    ].filter(Boolean) as Tip[], // Ensure no undefined tips
    totalOdds: 0, // Will be calculated dynamically below
    outcome: 'pending',
    analysisSummary: 'A mixed bag of high-stakes football, a clay-court tennis showdown, and a golf major opening round. Our experts have analyzed current form and historical data to bring you these top selections.'
  },
  {
    id: 'bundle-20250521',
    date: new Date('2025-05-21'),
    title: "Wednesday's Value Accumulator",
    tips: [
      allIndividualTips.find(t => t.id === '4')!, // Bayern vs Dortmund (Football)
      allIndividualTips.find(t => t.id === '11')!, // Warriors vs Suns (Basketball)
    ].filter(Boolean) as Tip[],
    totalOdds: 0,
    outcome: 'win',
    analysisSummary: 'Today\'s accumulator focuses on high-scoring potential in football and a strong home performance in basketball. Both picks have solid statistical backing for great value.'
  },
  {
    id: 'bundle-20250520',
    date: new Date('2025-05-20'),
    title: "Tuesday's Top Selections",
    tips: [
      allIndividualTips.find(t => t.id === '9')!, // Inter vs AC Milan (Football)
      allIndividualTips.find(t => t.id === '7')!, // Joshua vs Wilder (Boxing)
    ].filter(Boolean) as Tip[],
    totalOdds: 0,
    outcome: 'loss',
    analysisSummary: 'A combination of a fierce football derby and a highly anticipated boxing match. Our insights pointed to a strong home win and a longer fight duration based on recent form.'
  }
];

// Calculate total odds for each bundle after defining them
dailyTipBundles.forEach(bundle => {
  bundle.totalOdds = parseFloat(calculateTotalOdds(bundle.tips).toFixed(2));
});
