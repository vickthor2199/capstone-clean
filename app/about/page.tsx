"use client";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-16 px-4">
      <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
        {/* Light gold overlay for subtle design */}
        <div className="absolute inset-0 bg-[#CC9433]/10 opacity-10 rounded-2xl pointer-events-none" />

        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
          About <span className="text-[#CC9433]">CNG Store</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          At <span className="font-semibold text-gray-900">CNG Store</span>, we merge fashion and technology to bring you the trendiest products from sleek gadgets to bold street-wears.
        </p>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
          We're passionate about <span className="text-gray-900 font-medium">quality</span>, <span className="text-gray-900 font-medium">design</span>, and <span className="text-gray-900 font-medium">affordability</span>. Whether you're shopping for a smartwatch, vintage shirt, or gaming gear, you'll find a curated collection made for modern trendsetters like you.
        </p>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Based in <span className="text-[#CC9433] font-medium">Nigeria</span>, we’re committed to providing an enjoyable online shopping experience with fast service and friendly support. Join our journey and stay ahead of the trend!
        </p>
      </section>
    </main>
  );
}

