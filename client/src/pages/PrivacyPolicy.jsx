import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 flex justify-center py-10 px-4 sm:px-6 lg:px-10">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 leading-relaxed">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-600 mb-4 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-600 text-sm sm:text-base text-center mb-8">
          Last updated: October 2025  
          <br />
          Welcome to <span className="font-semibold">Gap-O-Taran</span>.  
          Your privacy is our top priority.
        </p>

        {/* Sections */}
        <section className="space-y-6 sm:space-y-8">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-emerald-700 mb-2">
              1. Information We Collect
            </h2>
            <p className="text-sm sm:text-base">
              We collect information you provide directly to us, such as your
              name, email address, and any details you share while creating your
              account or interacting with the app. We may also gather limited
              device and usage data to improve performance and security.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-emerald-700 mb-2">
              2. How We Use Your Information
            </h2>
            <p className="text-sm sm:text-base">
              Your data helps us personalize your experience, enhance app
              features, and provide better customer support. We never sell or
              rent your personal data to third parties.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-emerald-700 mb-2">
              3. Data Security
            </h2>
            <p className="text-sm sm:text-base">
              We use modern encryption and secure servers to protect your
              information. However, no method of online transmission is
              completely secure, so we cannot guarantee absolute safety.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-emerald-700 mb-2">
              4. Cookies and Tracking
            </h2>
            <p className="text-sm sm:text-base">
              Like most platforms, we use cookies to enhance user experience,
              remember preferences, and analyze usage patterns. You can disable
              cookies in your browser settings if you prefer.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-emerald-700 mb-2">
              5. Sharing of Information
            </h2>
            <p className="text-sm sm:text-base">
              We only share your data when required by law or to protect our
              legal rights. We may also share limited, anonymized analytics data
              with trusted service providers.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-emerald-700 mb-2">
              6. Your Rights
            </h2>
            <p className="text-sm sm:text-base">
              You can access, modify, or delete your account information anytime.
              For any privacy-related requests, please contact us at{" "}
              <a
                href="mailto:rizwanjanbaloch7@gmail.com"
                className="text-emerald-600 font-semibold hover:underline"
              >
                rizwanjanbaloch7@gmail.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-emerald-700 mb-2">
              7. Updates to This Policy
            </h2>
            <p className="text-sm sm:text-base">
              We may occasionally update this Privacy Policy. Any changes will
              be reflected on this page with an updated revision date.
            </p>
          </div>

          {/* Footer message */}
          <div className="text-center mt-8 sm:mt-10">
            <p className="text-gray-600 text-sm sm:text-base">
              Thank you for trusting{" "}
              <span className="font-semibold text-emerald-600">Gap-O-Taran</span>.
              <br /> Your privacy means everything to us.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
