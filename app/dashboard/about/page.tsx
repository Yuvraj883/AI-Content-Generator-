"use client";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen p-8 flex flex-col items-center bg-gray-100">
      <div className="max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-6">
          About Us
        </h1>
        <p className="text-gray-700 text-lg mb-4 text-center">
          Welcome to <span className="font-semibold">Easily Famous</span> – your one-stop solution for all generative AI and creative needs.
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
          <p className="text-gray-700">
            We aim to empower individuals, businesses, and creators by offering AI-driven content
            generation tools that make creativity effortless and accessible. Whether you need engaging
            text, social media growth, or branding assistance, we’ve got you covered.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">What We Offer</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>AI-powered content generation for blogs, social media, and marketing.</li>
            <li>"Offers" section providing likes and promotional services.</li>
            <li>Seamless user experience with intuitive AI tools.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Why Choose Us?</h2>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Cutting-edge AI models tailored for high-quality content.</li>
            <li>User-friendly platform for effortless engagement.</li>
            <li>Fast, reliable, and affordable services.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get in Touch</h2>
          <p className="text-gray-700">
            Have questions or need assistance? Feel free to reach out at
            <span className="font-semibold"> im.thegod883@gmail.com</span>.
          </p>
        </section>
      </div>
    </div>
  );
}
