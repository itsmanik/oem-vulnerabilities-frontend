import React, { useState } from 'react';

const faqs = [
    {
      question: 'How do I reset my password?',
      answer: `Click on "Forgot Password" at the login screen and follow these steps:
      1. Enter your registered email address.
      2. Check your inbox for a password reset link.
      3. Click the link and enter a new password.
      Ensure your new password is strong and unique to protect your account.`
    },
    {
      question: 'How do I contact support?',
      answer: `You can contact support through multiple methods:
      - Visit the "Contact Us" section in the footer of our website.
      - Fill out the provided form with your query and submit it.
      - Alternatively, email us at support@example.com or call our helpline at +1-800-123-4567.
      Our support team is available 24/7 to assist you.`
    },
    {
      question: 'What browsers are supported?',
      answer: `Our application is optimized for modern web browsers, including:
      - Google Chrome (latest version)
      - Mozilla Firefox (latest version)
      - Microsoft Edge (latest version)
      - Apple Safari (latest version on macOS and iOS)
      For the best experience, ensure your browser is updated to the latest version.`
    },
    {
      question: 'Is my personal information secure?',
      answer: `Yes, we prioritize the security of your data. Our platform uses:
      - End-to-end encryption to protect your data in transit.
      - Secure servers with regular security audits.
      - Multi-factor authentication for enhanced account security.
      We comply with international data protection standards, such as GDPR and CCPA.`
    },
    {
      question: 'Can I access my account on multiple devices?',
      answer: `Yes, you can access your account on multiple devices. Simply log in with your credentials on any supported device.
      If you encounter any issues, ensure you’re not exceeding the device limit for simultaneous logins, as per our terms of use.`
    },
    {
      question: 'What should I do if I encounter an error?',
      answer: `If you encounter an error:
      - Take note of the error message or code.
      - Refresh the page or restart the app to see if the issue persists.
      - Clear your browser cache or app data.
      - If the problem continues, contact support with the error details.`
    },
    {
      question: 'How do I update my profile information?',
      answer: `To update your profile:
      1. Log in to your account.
      2. Navigate to the "Profile" or "Account Settings" section.
      3. Update the desired fields, such as name, email, or address.
      4. Save your changes. Ensure all information is accurate to avoid issues.`
    },
    {
      question: 'Do you offer refunds?',
      answer: `Refund policies depend on the specific product or service purchased. Typically:
      - Digital subscriptions may offer a prorated refund if canceled within the trial period.
      - For physical products, returns must be initiated within 30 days of delivery.
      Please review our "Refund Policy" for detailed terms. Contact support for assistance with refund requests.`
    }
  ];
  

const KnowledgeBasePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Knowledge Base</h1>
      <input
        type="text"
        placeholder="Search FAQs..."
        className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => (
            <div key={index} className="bg-white shadow-md p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-600">
                {faq.question}
              </h2>
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No FAQs found for "{searchTerm}"</p>
        )}
      </div>
    </div>
  );
};

export default KnowledgeBasePage;
