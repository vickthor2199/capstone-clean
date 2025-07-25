"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <main className="min-h-screen py-20 px-4 bg-[#101828]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#CC9433]">About CNG Store</h1>

        <div className="space-y-8">
          {/* Our Story */}
          <Card>
            <CardHeader>
              <CardTitle><span className="text-[#CC9433]">Our Story</span></CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-slate-700 leading-relaxed">
                CNG Store was born from a passion for merging technology with fashion. Whether it's 
                bold vintage wear or the latest gadgets, our goal is to deliver a shopping experience 
                that's modern, exciting, and built for trendsetters. Each product is handpicked to reflect 
                quality and personality.
              </p>
            </CardContent>
          </Card>

          {/* Our Mission */}
          <Card>
            <CardHeader>
              <CardTitle><span className="text-[#CC9433]">Our Mission</span></CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-slate-700 leading-relaxed">
                Our mission is to offer high-quality and stylish products at affordable prices. From 
                tech-savvy tools to fashion-forward fits, we aim to empower individuals through curated 
                collections, all backed by top-tier customer service.
              </p>
            </CardContent>
          </Card>

          {/* Our Values */}
          <Card>
            <CardHeader>
              <CardTitle><span className="text-[#CC9433]">Our Values</span></CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Quality & Style</h3>
                  <p className="text-slate-600">We carefully select every item to ensure it meets our standards in both fashion and function.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Customer Commitment</h3>
                  <p className="text-slate-600">Your satisfaction drives us  we’re here to make sure your experience is smooth and rewarding.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Innovation</h3>
                  <p className="text-slate-600">We stay ahead of trends and tech to bring you the best in both worlds.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-800">Proudly Nigerian</h3>
                  <p className="text-slate-600">Rooted in Nigeria, we take pride in delivering globally inspired products with a local heart.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
