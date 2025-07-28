import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black text-white py-4 px-6 sticky top-0 z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-2 hover:text-[#F59B1D] transition-colors duration-200">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
          </div>
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="Hang Meas Logo" className="h-20 w-20" />
          </div>
        </div>
      </header>

      {/* Terms of Service Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none">
          <div className="mb-8">
            <p className="text-gray-400">Last Updated: January 2025</p>
          </div>

          <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <p>
              Welcome to Hang Meas! These Terms of Service ("Terms") govern your use of our mobile application and website. By accessing or using our services, you agree to be bound by these Terms.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By downloading, installing, or using the Hang Meas app, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
              <p>
                Hang Meas is an event ticketing platform that allows users to discover, browse, and purchase tickets for concerts, festivals, and live entertainment events.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Accounts</h2>
              <p className="mb-4">To use certain features of our service, you must create an account. You agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information</li>
                <li>Keep your account information updated</li>
                <li>Maintain the security of your account credentials</li>
                <li>Accept responsibility for all activities under your account</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Ticket Purchases</h2>
              <p className="mb-4">When purchasing tickets through our platform:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>All sales are final unless otherwise specified</li>
                <li>Tickets are subject to availability</li>
                <li>Prices may change without notice</li>
                <li>You are responsible for ensuring event details are correct before purchase</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Prohibited Uses</h2>
              <p className="mb-4">You may not use our service to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Resell tickets for profit without authorization</li>
                <li>Use automated systems to purchase tickets</li>
                <li>Interfere with the proper functioning of the platform</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
              <p>
                Hang Meas shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Information</h2>
              <p>
                For questions about these Terms, please contact us through our Facebook page <strong className="text-[#F59B1D]">Rasmey Hang Meas</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;