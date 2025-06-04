// project/src/types.ts
export type Sport = {
  id: string;
  name: string;
  icon: string;
  description: string;
  route: string;
};

export type Tip = {
  id: string;
  match: string;
  prediction: string;
  odds: number;
  isPremium: boolean;
  confidence: number; // 1-5
  date: Date;
  result?: 'win' | 'loss' | 'pending';
  analysis: string;
  sportId: string;
  competition: string;
};

// New type for a daily bundle of tips
export type DailyTipBundle = {
  id: string;
  date: Date;
  title: string; // e.g., "Mr. Banks' Daily Picks - May 22, 2025"
  tips: Tip[]; // Array of individual tips for this bundle
  totalOdds: number; // Calculated total odds for the bundle
  outcome?: 'win' | 'loss' | 'pending'; // Overall outcome of the bundle
  analysisSummary?: string; // Short summary for the bundle
};


export type PricingTier = {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  recommended?: boolean;
};

export type Testimonial = {
  id: string;
  name: string;
  image: string;
  comment: string;
  rating: number;
  date: Date;
};

export type FAQ = {
  question: string;
  answer: string;
};
