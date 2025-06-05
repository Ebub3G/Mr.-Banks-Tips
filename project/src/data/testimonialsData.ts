// project/src/data/testimonialsData.ts
import { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
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
    comment: 'The membership is worth every penny. The early access to tips gives me time to shop for the best odds.',
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
