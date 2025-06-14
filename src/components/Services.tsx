import { motion } from "framer-motion";
import { fadeIn, fadeInUp, staggerContainer } from "./animations";

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  features: string[];
  deliveryTime: string;
  buttonText: string;
  isPopular?: boolean;
}

const services: Service[] = [
  {
    id: "basic",
    name: "Basic Website",
    description: "Perfect for portfolios or landing pages.",
    price: "$699",
    features: ["1–3 Pages", "Mobile Responsive", "SEO Ready", "Contact Form"],
    deliveryTime: "5–7 Days",
    buttonText: "Start Now"
  },
  {
    id: "standard",
    name: "Standard Site",
    description: "Great for growing brands or service businesses.",
    price: "$999",
    features: ["4–6 Pages", "Custom UI & Animations", "Google Analytics", "Social Media Integration"],
    deliveryTime: "7–10 Days",
    buttonText: "Get Started",
    isPopular: true
  },
  {
    id: "premium",
    name: "Ecommerce Premium",
    description: "Built for online stores and scalable platforms.",
    price: "$1799+",
    features: ["Full Online Store Setup", "Stripe or PayPal Payments", "CMS or Headless Options", "Speed & SEO Optimized"],
    deliveryTime: "10–15 Days",
    buttonText: "Contact Me"
  }
];

export default function Services() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20 px-4" id="services">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Freelance Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Pick the plan that fits your project best. Each package is designed to deliver 
            exceptional results with transparent pricing and clear deliverables.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className={`relative rounded-2xl shadow-lg border p-8 transition-all duration-300 ${
                service.isPopular
                  ? "shadow-2xl border-2 border-blue-500 bg-white dark:bg-gray-900 scale-105"
                  : "bg-gray-50 dark:bg-gray-800 hover:shadow-xl"
              }`}
            >
              {service.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <div className="text-4xl font-bold text-blue-500 mb-2">
                  {service.price}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Delivery: {service.deliveryTime}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700 dark:text-gray-200">
                    <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors duration-200 ${
                  service.isPopular
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
                }`}
              >
                {service.buttonText}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Need something custom? Let's discuss your project requirements.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200"
          >
            Get Custom Quote
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}


