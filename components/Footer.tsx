"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#101828] text-white  px-4 sm:px-8 py-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">CNG Store</h3>
          <p className="text-sm">
            Your one-stop shop for modern gadgets and urban fashion.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/shop" className="hover:underline">Shop</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Newsletter</h4>
          <p className="text-sm mb-2">Subscribe for offers & updates.</p>
          <form className="flex flex-col space-y-2">
            <input
  type="email"
  placeholder="Enter your email"
  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
/>
            <button type="submit" className="bg-blue-600 px-3 py-2 rounded hover:bg-blue-700 transition">
              Subscribe
            </button>
          </form>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} CNG Store. All rights reserved.
      </div>
    </footer>
  );
}
