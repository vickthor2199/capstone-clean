export default function HomePage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-end px-4 sm:px-8"
      style={{ backgroundImage: "url('/products/new-bg.jpeg')" }}
    >
      <div className="w-full max-w-3xl text-[#FFFCC2] p-6 sm:p-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          Welcome to <span className="text-amber-400">CNG Store</span>
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl text-[#FFFCC2] mb-8 leading-relaxed font-medium"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Discover premium gadgets and exclusive street-wear crafted for modern trendsetters.
          Where <span className="text-amber-400 font-semibold">style</span> meets <span className="text-amber-400 font-semibold">innovation</span> shop confidently.
        </p>

        <a
          href="/shop"
          className="inline-block px-8 py-4 bg-amber-500 text-black font-semibold text-lg rounded-full transition duration-300 hover:bg-amber-600 hover:scale-105"
        >
          Start Shopping
        </a>
      </div>
    </div>
  );
}
