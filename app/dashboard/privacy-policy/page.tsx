// app/privacy-policy/page.tsx

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy for EasilyFamous</h1>
      <p className="mb-4">Last Updated: 09th November, 2024</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
        <p className="text-gray-700">
          Welcome to EasilyFamous! We prioritize your privacy and are committed to protecting your
          personal information. This Privacy Policy explains how we collect, use, and safeguard your
          data when you use our website, which provides generative AI content and an "Offers" section
          with promotional features such as likes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">1. Information We Collect</h2>

        <h3 className="text-xl font-semibold mt-4 mb-2">1.1 Personal Information</h3>
        <p className="text-gray-700">
          When you sign up or interact with our site, we may collect personal information, such as:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Name</li>
          <li>Email address</li>
          <li>Social media handles</li>
          <li>Any additional details you provide voluntarily</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 mb-2">1.2 Automatically Collected Information</h3>
        <p className="text-gray-700">
          We also collect certain data automatically, such as:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>IP address</li>
          <li>Device information</li>
          <li>Browser type and version</li>
          <li>Usage data (e.g., pages visited, time spent)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
        <p className="text-gray-700">
          We use your information to provide, improve, and personalize our services, including:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Generating customized AI content for your needs</li>
          <li>Providing likes and other promotional features through our "Offers" section</li>
          <li>Communicating updates, offers, and other promotional content</li>
          <li>Enhancing user experience and ensuring site security</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">3. Sharing Your Information</h2>
        <p className="text-gray-700">
          We do not sell, trade, or otherwise transfer your personal information to third parties
          without your consent, except in compliance with legal obligations or when essential to
          provide services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">4. Data Security</h2>
        <p className="text-gray-700">
          We implement security measures to protect your personal information. However, no online
          service is completely secure, so we cannot guarantee absolute data security.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">5. Your Rights</h2>
        <p className="text-gray-700">
          Depending on your jurisdiction, you may have the right to access, correct, or delete
          personal information we hold about you. Please contact us if you wish to exercise any of
          these rights.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">6. Changes to This Privacy Policy</h2>
        <p className="text-gray-700">
          We may update this Privacy Policy occasionally. Please review this page periodically for
          the latest information.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions or concerns about this Privacy Policy, please contact us at
          [yuvrajsingh@easilyfamous.com].
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;
