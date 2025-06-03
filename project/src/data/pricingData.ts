import { PricingTier, FAQ } from '../types';

export const pricingTiers: PricingTier[] = [
  {
    id: 'weekly',
    name: 'Weekly Pass',
    price: 19.99,
    duration: 'week',
    features: [
      'Access to all premium tips',
      'Daily expert analysis',
      'In-play betting advice',
      'Email notifications'
    ]
  },
  {
    id: 'monthly',
    name: 'Monthly VIP',
    price: 49.99,
    duration: 'month',
    recommended: true,
    features: [
      'All Weekly Pass features',
      'Early access to weekend tips',
      'Exclusive betting strategies',
      'Members-only forum access',
      '24/7 dedicated support'
    ]
  },
  {
    id: 'quarterly',
    name: 'Quarterly Pro',
    price: 119.99,
    duration: '3 months',
    features: [
      'All Monthly VIP features',
      'One free month (compared to monthly)',
      'Personalized betting consultation',
      'Bankroll management advice',
      'Exclusive member promotions',
      'Private Discord channel'
    ]
  },
  {
    id: 'annual',
    name: 'Annual Expert',
    price: 399.99,
    duration: 'year',
    features: [
      'All Quarterly Pro features',
      'Four free months (compared to monthly)',
      'Advanced statistical modeling',
      'Priority customer support',
      'VIP betting tools access',
      'Monthly video analysis',
      'Two free personal consultations'
    ]
  }
];

export const faqs: FAQ[] = [
  {
    question: 'How are the betting tips selected?',
    answer: 'Our team of expert analysts uses a combination of statistical models, form analysis, insider information, and years of experience to select the highest value betting opportunities across multiple sports and leagues.'
  },
  {
    question: 'What is the success rate of your tips?',
    answer: 'Our overall success rate across all sports is 63%, with our premium picks maintaining a 68% success rate over the past 12 months. We provide transparent records of all our tips, both winning and losing.'
  },
  {
    question: 'When are new tips posted?',
    answer: 'We post tips daily, typically by 10am for afternoon events and by 4pm for evening events. Premium members receive tips earlier, usually 2-4 hours before they\'re made available to standard members.'
  },
  {
    question: 'Can I get a refund if I\'m not satisfied?',
    answer: 'We offer a 7-day money-back guarantee for new subscribers to our Monthly plan or higher. If you\'re not completely satisfied, contact our support team within 7 days of purchase for a full refund.'
  },
  {
    question: 'Do you provide tips for all sports?',
    answer: 'We cover major sports including football, basketball, tennis, horse racing, golf, boxing/UFC, esports, and cricket. Our expertise varies by sport, with football, horse racing, and basketball being our strongest categories.'
  },
  {
    question: 'How do I cancel my subscription?',
    answer: 'You can cancel your subscription anytime from your account settings page. Your access will continue until the end of your current billing period.'
  }
];

export const testimonials = [
  {
    id: '1',
    name: 'James H.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    comment: 'Been following Mr. Banks for 8 months now and I\'m up over $5,000. The football tips are absolutely spot on!',
    rating: 5,
    date: new Date('2025-03-15')
  },
  {
    id: '2',
    name: 'Sarah T.',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    comment: 'The analysis that comes with each tip is incredibly detailed. It\'s improved my own betting strategy tremendously.',
    rating: 5,
    date: new Date('2025-02-28')
  },
  {
    id: '3',
    name: 'Michael D.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    comment: 'The VIP membership is worth every penny. The early access to tips gives me time to shop for the best odds.',
    rating: 4,
    date: new Date('2025-04-02')
  },
  {
    id: '4',
    name: 'Emma L.',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    comment: 'I was skeptical at first but the results speak for themselves. The horse racing tips especially have been incredible.',
    rating: 5,
    date: new Date('2025-03-21')
  },
  {
    id: '5',
    name: 'Robert K.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    comment: 'Customer service is excellent. Had an issue with my account and they resolved it within minutes.',
    rating: 5,
    date: new Date('2025-04-10')
  }
];