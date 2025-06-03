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
  sportId: string;
  match: string;
  prediction: string;
  odds: number;
  isPremium: boolean;
  confidence: number; // 1-5
  date: Date;
  result?: 'win' | 'loss' | 'pending';
  analysis: string;
  competition: string; // Added new field
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
