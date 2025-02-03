"use client"; // Ensure client-side rendering to avoid hydration errors

import { useState, useEffect } from "react";

const PrivacyPolicyPage: React.FC = () => {
  const [lastUpdated, setLastUpdated] = useState("");

  useEffect(() => {
    setLastUpdated(new Date().toLocaleDateString());
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy for EasilyFamous</h1>
      <p className="mb-4">Last Updated: {lastUpdated}</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700">
          Welcome to EasilyFamous! Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your data when using our website. Our website provides AI-generated content and offers promotional features, such as likes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">1.1 Personal Information</h3>
        <p className="text-gray-700">
          When you sign up or interact with our site, we may collect personal information such as:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Name</li>
          <li>Email address</li>
          <li>Other details voluntarily provided</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">1.2 Automatically Collected Information</h3>
        <p className="text-gray-700">We also collect certain data automatically, including:</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Usage data (pages visited, time spent)</li>
          <li>Cookies and tracking technologies</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
        <p className="text-gray-700">We use your data to:</p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Generate AI-powered content tailored to your needs</li>
          <li>Provide "Offers" such as likes and promotional features</li>
          <li>Improve website performance and security</li>
          <li>Display relevant advertisements via Google AdSense</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Google AdSense & Cookies</h2>
        <p className="text-gray-700">
          We use Google AdSense to display advertisements on our website. Google, as a third-party vendor, uses cookies to serve ads based on user visits to our site and other websites.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">How Google Uses Cookies:</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Google uses cookies (such as the <strong>DoubleClick cookie</strong>) to serve ads based on previous visits to this or other websites.</li>
          <li>
            Users may opt-out of personalized advertising by visiting{" "}
            <a href="https://www.google.com/settings/ads" className="text-blue-600">
              Google’s Ads Settings
            </a>.
          </li>
          <li>
            For more details, check{" "}
            <a href="https://policies.google.com/technologies/ads" className="text-blue-600">
              Google’s Privacy & Terms
            </a>.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
        <p className="text-gray-700">
          We implement security measures to protect your personal information. However, no online service is completely secure, and we cannot guarantee absolute security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Your Rights & Choices</h2>
        <p className="text-gray-700">
          Depending on your jurisdiction, you may have rights to access, correct, or delete your data. You can also control cookie settings in your browser.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Changes to This Privacy Policy</h2>
        <p className="text-gray-700">We may update this Privacy Policy periodically. Please check this page for updates.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions, contact us at{" "}
          <a href="mailto:im.thegod883@gmail.com" className="text-blue-600">
            im.thegod883@gmail.com
          </a>.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
