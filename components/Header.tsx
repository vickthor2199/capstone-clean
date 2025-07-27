"use client";

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { useCart } from "@/lib/CartContext";
import { useEffect, useState } from "react";
import { isLoggedIn } from "@/lib/auth";

export default function Header() {
  const { cart } = useCart();
  const cartCount = cart.reduce((total, item) => total + (item.quantity ?? 0), 0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);

  return (
    <header className="bg-gray-900 text-white px-6 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-bold text-amber-400 cursor-pointer" // ← cursor added
      >
        CNG Store
      </Link>

      {/* Navigation Links */}
      <nav className="space-x-4 text-sm sm:text-base font-medium">
        <Link href="/" className="hover:text-amber-400 cursor-pointer">Home</Link> {/* ← cursor */}
        <Link href="/shop" className="hover:text-amber-400 cursor-pointer">Shop</Link> {/* ← cursor */}
        <Link href="/about" className="hover:text-amber-400 cursor-pointer">About</Link> {/* ← cursor */}
        <Link href="/contact" className="hover:text-amber-400 cursor-pointer">Contact</Link> {/* ← cursor */}
      </nav>

      {/* Icons: Profile + Cart */}
      <div className="flex items-center space-x-4 h-8">
        {/* Profile
        <div className="relative flex items-center">
          <button
            onClick={() => setShowDropdown(prev => !prev)}
            className="hover:text-amber-400 flex items-center cursor-pointer" // ← cursor added
          >
            <AiOutlineUser className="text-xl" />
          </button>

          {showDropdown && !loggedIn && (
            <div className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-md z-10">
              <Link
                href="/login"
                className="block px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer" // ← cursor
                onClick={() => setShowDropdown(false)}
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="block px-4 py-2 hover:bg-gray-100 text-sm cursor-pointer" // ← cursor
                onClick={() => setShowDropdown(false)}
              >
                Sign Up
              </Link>
            </div>
          )}
        </div> */}

        {/* Cart */}
        <div className="relative flex items-center">
          <Link
            href="/cart"
            className="hover:text-amber-400 flex items-center cursor-pointer" 
          >
            <FaShoppingCart className="text-xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
