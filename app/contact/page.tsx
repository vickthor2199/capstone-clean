"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#101828] py-16 px-4">
      <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
        {/* Light gold background overlay for a stylish touch */}
        <div className="absolute inset-0 bg-[#CC9433]/10 opacity-10 rounded-2xl pointer-events-none" />

        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-800">
          <span className="text-[#CC9433]">Get in Touch</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-700 mb-8 text-center">
          We'd love to hear from you! Whether it's a question about a product, feedback, or support  we're here for you.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-[#CC9433] mb-2">📧 Email</h2>
            <p className="text-gray-700">support@cngstore.com</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#CC9433] mb-2">📞 Phone</h2>
            <p className="text-gray-700">+234 808 977 9549</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#CC9433] mb-2">📍 Address</h2>
            <p className="text-gray-700">Lagos State, Nigeria</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#CC9433] mb-2">📱 Socials</h2>
            <p className="text-gray-700">Instagram: @cngstore</p>
            <p className="text-gray-700">Twitter: @cngstore</p>
          </div>
        </div>
      </section>
    </main>
  );
}
