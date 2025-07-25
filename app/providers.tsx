// app/providers.tsx
"use client";

import { CartProvider } from "@/lib/CartContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Providers; // ✅ Exported as default
