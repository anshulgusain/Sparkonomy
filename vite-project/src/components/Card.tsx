import React from "react";

interface CardProps {
  children: any;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={`rounded-xl border bg-white shadow-sm ${className || ""}`}>
    {children}
  </div>
);

export const CardContent: React.FC<CardProps> = ({ children, className }) => (
  <div className={`p-4 ${className || ""}`}>{children}</div>
);
