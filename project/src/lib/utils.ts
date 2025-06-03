import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
}

export function formatOdds(odds: number, format: 'decimal' | 'american' | 'fractional' = 'decimal'): string {
  if (format === 'decimal') {
    return odds.toFixed(2);
  } else if (format === 'american') {
    if (odds >= 2.0) {
      return `+${Math.round((odds - 1) * 100)}`;
    } else {
      return `-${Math.round(100 / (odds - 1))}`;
    }
  } else {
    // Simple fractional conversion
    const decimal = odds - 1;
    if (decimal === 0) return '0/1';
    
    // Find GCD for simplification
    const findGcd = (a: number, b: number): number => b ? findGcd(b, a % b) : a;
    const precision = 100;
    const gcd = findGcd(Math.round(decimal * precision), precision);
    
    const numerator = Math.round(decimal * precision) / gcd;
    const denominator = precision / gcd;
    
    return `${numerator}/${denominator}`;
  }
}

export function calculateSuccessRate(wins: number, total: number): string {
  if (total === 0) return '0%';
  return `${Math.round((wins / total) * 100)}%`;
}