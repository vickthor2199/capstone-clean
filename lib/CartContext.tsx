"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number; // Optional, defaults to 1
  
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  increaseQty: (id: string) => void; // ✅ NEW
  decreaseQty: (id: string) => void; // ✅ NEW
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
  setCart((prev) => {
    const existingItem = prev.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      return prev.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }

    return [...prev, { ...item, quantity: 1 }];
  });
};


  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };
  const increaseQty = (id: string) => {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const decreaseQty = (id: string) => {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    )
  );
};


  const clearCart = () => {
    setCart([]); // ✅ Clear all items
  };

  return (
    <CartContext.Provider
  value={{
    cart,
    addToCart,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
  }}
>

      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
