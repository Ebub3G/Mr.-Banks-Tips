import { Sport } from '../types';
import { GlobeIcon, BellIcon as FootballIcon, TrophyIcon, DicesIcon, CircleDollarSignIcon, TabletsIcon as TableTennisIcon, BellIcon as TennisBallIcon, BeefIcon as GolfIcon, BoxIcon as BoxingIcon } from 'lucide-react';

export const sports: Sport[] = [
  {
    id: 'football',
    name: 'Football',
    icon: 'FootballIcon',
    description: 'Premier picks from top leagues worldwide including Premier League, La Liga, Serie A, and more.',
    route: '/sports/football'
  },
  {
    id: 'basketball',
    name: 'Basketball',
    icon: 'CircleDotIcon',
    description: 'Expert NBA and European league predictions with detailed analysis and insights.',
    route: '/sports/basketball'
  },
  {
    id: 'tennis',
    name: 'Tennis',
    icon: 'TennisBallIcon',
    description: 'Grand Slam and ATP/WTA tournament predictions from our tennis specialists.',
    route: '/sports/tennis'
  },
  {
    id: 'horse-racing',
    name: 'Horse Racing',
    icon: 'ZapIcon',
    description: 'Daily selections from major tracks with insider knowledge and form analysis.',
    route: '/sports/horse-racing'
  },
  {
    id: 'golf',
    name: 'Golf',
    icon: 'GolfIcon',
    description: 'Tournament predictions, outright winners, and matchup selections for PGA and European tours.',
    route: '/sports/golf'
  },
  {
    id: 'boxing',
    name: 'Boxing/UFC',
    icon: 'BoxingIcon',
    description: 'Fight night predictions with detailed fighter analysis and betting value.',
    route: '/sports/boxing-ufc'
  },
  {
    id: 'esports',
    name: 'eSports',
    icon: 'GamepadIcon',
    description: 'CS:GO, League of Legends, Dota 2 and other major eSports tournament predictions.',
    route: '/sports/esports'
  },
  {
    id: 'cricket',
    name: 'Cricket',
    icon: 'TrophyIcon',
    description: 'Test matches, ODIs, and T20 predictions from around the cricketing world.',
    route: '/sports/cricket'
  }
];

export function getSportIcon(iconName: string) {
  switch (iconName) {
    case 'FootballIcon':
      return FootballIcon;
    case 'CircleDotIcon':
      return GlobeIcon;
    case 'TennisBallIcon':
      return TennisBallIcon;
    case 'ZapIcon':
      return DicesIcon;
    case 'GolfIcon':
      return GolfIcon;
    case 'BoxingIcon':
      return BoxingIcon;
    case 'GamepadIcon':
      return CircleDollarSignIcon;
    case 'TrophyIcon':
      return TrophyIcon;
    default:
      return GlobeIcon;
  }
}