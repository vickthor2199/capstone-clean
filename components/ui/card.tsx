// components/ui/card.tsx
import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-gray-300 bg-white p-6 shadow-md">
      {children}
    </div>
  );
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="mb-4">{children}</div>;
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-2xl font-semibold">{children}</h2>;
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
