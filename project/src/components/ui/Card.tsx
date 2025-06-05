// project/src/components/ui/Card.tsx
import React from 'react';
import { cn } from '../../lib/utils';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  // isPremium?: boolean; // Removed
};

const Card = ({ children, className }: CardProps) => { // Removed isPremium = false
  return (
    <div
      className={cn(
        'rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg',
        // isPremium ? 'border border-amber-400 bg-gradient-to-br from-amber-50 to-white' : 'bg-white', // Removed conditional styling
        'bg-white', // Default to white background
        className
      )}
    >
      {/* Removed premium banner */}
      {/* {isPremium && (
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1 text-center">
          PREMIUM TIP
        </div>
      )} */}
      {children}
    </div>
  );
};

type CardHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

const CardHeader = ({ children, className }: CardHeaderProps) => {
  return <div className={cn('p-4 border-b', className)}>{children}</div>;
};

type CardContentProps = {
  children: React.ReactNode;
  className?: string;
};

const CardContent = ({ children, className }: CardContentProps) => {
  return <div className={cn('p-4', className)}>{children}</div>;
};

type CardFooterProps = {
  children: React.ReactNode;
  className?: string;
};

const CardFooter = ({ children, className }: CardFooterProps) => {
  return <div className={cn('p-4 border-t bg-gray-50', className)}>{children}</div>;
};

export { Card, CardHeader, CardContent, CardFooter };
