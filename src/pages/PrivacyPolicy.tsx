import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
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

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-invert max-w-none">
          <div className=" mb-8">
            <p className="text-gray-400">Last Updated: May 2025</p>
          </div>

          <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <p>
              Welcome to the Rasmey Hang Meas App! This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and mobile application (collectively, the "Platform" or "Site"). By accessing or using the Platform, you agree to the terms of this Privacy Policy. If you do not agree with this policy, please do not use the Platform.
            </p>

            <p>
              We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last Updated" date of this Privacy Policy. Any changes or modifications will be effective immediately upon posting the updated Privacy Policy on the Platform, and you waive the right to receive specific notice of each such change or modification.
            </p>

            <p>
              You are encouraged to periodically review this Privacy Policy to stay informed of updates. You will be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the changes in any revised Privacy Policy by your continued use of the Platform after the date such revised Privacy Policy is posted.
            </p>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Collection of Your Information</h2>
              <p className="mb-4">
                We collect information about you that you provide to us when using the Platform in a variety of ways, including:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#F59B1D] mb-2">Personal Data</h3>
                  <p>
                    Personal identifiable information, such as your name, IP address, email address, profile photo, and phone number, that you voluntarily provide when you register with the Platform, book event tickets, or engage with our services. You are under no obligation to provide us with personal information of any kind, but your refusal to do so may prevent you from using certain features of the Platform.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#F59B1D] mb-2">Derivative Data</h3>
                  <p>
                    Information our servers automatically collect when you access the Platform, such as your IP address, browser type, operating system, access times, and pages viewed directly before and after accessing the Platform. If you are using our mobile application, this information may also include your device name and type, operating system, phone number, and interactions with the application and other users via server log files.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#F59B1D] mb-2">Financial Data</h3>
                  <p>
                    Financial information, such as payment amount, transaction date and time, and payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase tickets or other services from the Platform. We store only very limited financial information that we collect. Otherwise, all financial information is stored by our payment processors, and you are encouraged to review their privacy policies for more information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#F59B1D] mb-2">Third-Party Data</h3>
                  <p>
                    Information from third parties, if you connect your Rasmey Hang Meas App account to third-party services like Apple ID, Facebook, Google, or email. This may include your name, profile photo, gender, date of birth, email address, and public data for contacts. This data is only collected if you choose to connect your account.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use of Your Information</h2>
              <p className="mb-4">We may use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Process ticket purchases and manage event bookings.</li>
                <li>Personalize your user experience.</li>
                <li>Send you event notifications, promotions, and updates.</li>
                <li>Improve the Platform's functionality and security.</li>
                <li>Provide customer support and respond to your inquiries.</li>
                <li>Comply with legal obligations and protect our legal rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Sharing Your Information</h2>
              <p className="mb-4">We do not sell your personal information to third parties. However, we may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Providers:</strong> To help operate the Platform, process payments, or provide customer support.</li>
                <li><strong>Event Organizers:</strong> To facilitate ticket bookings and event management.</li>
                <li><strong>Legal Authorities:</strong> If required by law, to comply with legal processes or protect our rights.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, use, or disclosure. However, no data transmission over the internet can be guaranteed as completely secure, and you use the Platform at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access and review your personal data.</li>
                <li>Correct or update your personal information.</li>
                <li>Request deletion of your account and personal data.</li>
                <li>Opt out of marketing communications.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Changes to this Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The updated version will be posted on the Platform with the "Last Updated" date. Continued use of the Platform after such updates constitutes your acceptance of the revised Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
              <p>
                For any questions or concerns about this Privacy Policy, please reach out to us at our Facebook page <strong className="text-[#F59B1D]">Rasmey Hang Meas</strong>.
              </p>
            </section>

            <div className="mt-12 p-6 bg-gray-900 rounded-lg border border-gray-800">
              <p className="text-center text-gray-400">
                Thank you for using the Rasmey Hang Meas App. We are committed to protecting your privacy and providing a secure and enjoyable experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;