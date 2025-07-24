export default function ContactPage() {
  return (
    <main className="p-6 max-w-5xl mx-auto">
      <section className="bg-white rounded-xl shadow-md p-8">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Get in Touch</h1>
        <p className="text-lg text-gray-600 mb-4 text-center">
          We'd love to hear from you! Whether it's a question about a product, feedback, or support — we're here for you.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">📧 Email</h2>
            <p className="text-gray-600">support@cngstore.com</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">📞 Phone</h2>
            <p className="text-gray-600">+234 800 000 0000</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">📍 Address</h2>
            <p className="text-gray-600">lagos state, Nigeria</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">📱 Socials</h2>
            <p className="text-gray-600">Instagram: @cngstore</p>
            <p className="text-gray-600">Twitter: @cngstore</p>
          </div>
        </div>
      </section>
    </main>
  );
}
