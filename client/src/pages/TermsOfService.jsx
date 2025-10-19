import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex justify-center py-10 px-4 sm:px-6 lg:px-10">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 leading-relaxed">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-600 mb-4 text-center">
          Terms of Service
        </h1>

        <p className="text-gray-600 text-sm sm:text-base text-center mb-8">
          Last updated: October 2025
          <br />
          Welcome to <span className="font-semibold">Gap-O-Taran</span>.
          By using our platform, you agree to these Terms of Service.
        </p>

        {/* Sections */}
        <section className="space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-emerald-700 mb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-sm sm:text-base">
              By accessing or using Gap-O-Taran, you agree to be bound by these
              Terms. If you do not agree, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-emerald-700 mb-2">
              2. Eligibility
            </h2>
            <p className="text-sm sm:text-base">
              You must be at least 13 years old or have legal consent from a
              guardian to use our platform. By using Gap-O-Taran, you confirm
              that you meet this requirement.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-emerald-700 mb-2">
              3. User Responsibilities
            </h2>
            <p className="text-sm sm:text-base">
              You are responsible for maintaining the confidentiality of your
              account information and for all activities under your account.
              Any misuse or illegal activity is strictly prohibited.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-emerald-700 mb-2">
              4. Prohibited Activities
            </h2>
            <p className="text-sm sm:text-base">
              You agree not to:
            </p>
            <ul className="list-disc ml-6 mt-2 text-sm sm:text-base space-y-1">
              <li>Impersonate others or provide false information</li>
              <li>Spread harmful or illegal content</li>
              <li>Violate the rights of others</li>
              <li>Attempt to hack, disrupt, or misuse our services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-emerald-700 mb-2">
              5. Content Ownership
            </h2>
            <p className="text-sm sm:text-base">
              You retain ownership of the content you post, but grant
              Gap-O-Taran a non-exclusive, worldwide license to use, display, and
              distribute that content for service functionality.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-emerald-700 mb-2">
              6. Account Termination
            </h2>
            <p className="text-sm sm:text-base">
              We reserve the right to suspend or terminate accounts that violate
              our Terms or engage in harmful behavior. You can also delete your
              account at any time.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-emerald-700 mb-2">
              7. Limitation of Liability
            </h2>
            <p className="text-sm sm:text-base">
              Gap-O-Taran is not liable for any direct or indirect damages
              resulting from the use or inability to use the platform. Use the
              platform at your own risk.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-emerald-700 mb-2">
              8. Changes to Terms
            </h2>
            <p className="text-sm sm:text-base">
              We may update these Terms from time to time. Continued use of the
              platform after changes means you accept the new Terms.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-emerald-700 mb-2">
              9. Contact Us
            </h2>
            <p className="text-sm sm:text-base">
              If you have questions about these Terms, contact us at{" "}
              <a
                href="mailto:rizwanjanbaloch7@gmail.com"
                className="text-emerald-600 font-semibold hover:underline"
              >
                rizwanjanbaloch7@gmail.com
              </a>.
            </p>
          </div>

          {/* Footer message */}
          <div className="text-center mt-8 sm:mt-10">
            <p className="text-gray-600 text-sm sm:text-base">
              By using Gap-O-Taran, you acknowledge that you have read and
              agreed to these Terms of Service.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
