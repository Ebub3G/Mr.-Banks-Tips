// project/src/components/ui/Card.tsx
import React from 'react';
import { cn } from '../../lib/utils';

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        'rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg',
        'bg-white', // Default to white background
        className
      )}
    >
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
