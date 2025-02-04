const ContactPage: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-gray-700 mb-4">
        Have questions, feedback, or collaboration ideas? We'd love to hear from you! Reach out to us through the following channels:
      </p>

      <h2 className="text-2xl font-semibold mb-2">Email</h2>
      <p className="text-gray-700 mb-4">📩 <a href="mailto:im.thegod883@gmail.com" className="text-blue-500">im.thegod883@gmail.com</a></p>

      <h2 className="text-2xl font-semibold mb-2">Social Media</h2>
      <p className="text-gray-700 mb-4">Follow and message us on our social media channels:</p>
      <ul className="list-disc pl-6 text-gray-700">
        <li><a href="#" className="text-blue-500">Twitter</a></li>
        <li><a href="#" className="text-blue-500">Instagram</a></li>
        <li><a href="#" className="text-blue-500">LinkedIn</a></li>
      </ul>
    </div>
  );
};

export default ContactPage;
