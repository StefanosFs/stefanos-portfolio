
export default function Services() {
  return (
    <section className="bg-white dark:bg-gray-900 py-16 px-4" id="services">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          Freelance Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Pick the plan that fits your project best
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Basic */}
        <div className="rounded-2xl shadow-lg border p-6 bg-gray-50 dark:bg-gray-800">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Basic Website
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Perfect for portfolios or landing pages.
          </p>
          <div className="text-3xl font-bold text-blue-500 mb-4">
            $699
          </div>
          <ul className="text-gray-700 dark:text-gray-200 text-sm space-y-2 mb-6">
            <li className="text-blue-500">✔ <span className="text-gray-700 dark:text-gray-200">1–3 Pages</span></li>
            <li className="text-blue-500">✔ <span className="text-gray-700 dark:text-gray-200">Mobile Responsive</span></li>
            <li className="text-blue-500">✔ <span className="text-gray-700 dark:text-gray-200">SEO Ready</span></li>
            <li className="text-blue-500">✔ <span className="text-gray-700 dark:text-gray-200">Contact Form</span></li>
            <li className="text-blue-500">✔ <span className="text-gray-700 dark:text-gray-200">Delivery: 5–7 Days</span></li>
          </ul>
          <a
            href="#contact"
            className="inline-block bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Start Now
          </a>
        </div>

        {/* Standard */}
        <div className="rounded-2xl shadow-2xl border-2 border-blue-500 p-6 bg-white dark:bg-gray-900 scale-105">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Standard Site
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Great for growing brands or service businesses.
          </p>
          <div className="text-3xl font-bold text-blue-500 mb-4">
            $999
          </div>
          <ul className="text-gray-700 dark:text-gray-200 text-sm space-y-2 mb-6">
            <li className="text-blue-500">✔ <span className="text-gray-700 dark:text-gray-200">4–6 Pages</span></li>
            <li className="text-blue-500">✔ <span className="text-gray-700 dark:text-gray-200">Custom UI & Animations</span></li>
            <li className="text-blue-500">✔ <span className="text-gray-700 dark:text-gray-200">Google Analytics</span></li>
            <li className="text-blue-500">✔ <span className="text-gray-700 dark:text-gray-200">Social Media Integration</span></li>
            <li className="text-blue-500">✔ <span className="text-gray-700 dark:text-gray-200">Delivery: 7–10 Days</span></li>
          </ul>
          <a
            href="#contact"
            className="inline-block bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Get Started
          </a>
        </div>

        {/* Premium */}
        <div className="rounded-2xl shadow-lg border p-6 bg-gray-50 dark:bg-gray-800">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Ecommerce Premium
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Built for online stores and scalable platforms.
          </p>
          <div className="text-3xl font-bold text-blue-500 mb-4">
            $1799+
          </div>
          <ul className="text-gray-700 dark:text-gray-200 text-sm space-y-2 mb-6">
            <li className="text-blue-500">✔ <span className="text-gray-700 dark:text-gray-200">Full Online Store Setup</span></li>
            <li className="text-blue-500">✔ <span className="text-gray-700 dark:text-gray-200">Stripe or PayPal Payments</span></li>
            <li className="text-blue-500">✔ <span className="text-gray-700 dark:text-gray-200">CMS or Headless Options</span></li>
            <li className="text-blue-500">✔ <span className="text-gray-700 dark:text-gray-200">Speed & SEO Optimized</span></li>
            <li className="text-blue-500">✔ <span className="text-gray-700 dark:text-gray-200">Delivery: 10–15 Days</span></li>
          </ul>
          <a
            href="#contact"
            className="inline-block bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};


