'use client';

import { motion } from 'framer-motion';

const features = [
  {
    icon: "📱",
    title: "Effortless Management",
    description: "View and manage all your Promo Codes in one clean, organized interface."
  },
  {
    icon: "⚡",
    title: "Instant Sharing",
    description: "Copy a code or deep link to share with a single tap—no more manual copying."
  },
  {
    icon: "📊",
    title: "Usage Tracking",
    description: "See which codes are used and how many are still valid at a glance."
  },
  {
    icon: "🌙",
    title: "Dark Mode",
    description: "Built-in dark mode for low-light environments like conferences and events."
  },
  {
    icon: "♿",
    title: "Accessibility",
    description: "Full VoiceOver support for complete accessibility compliance."
  },
  {
    icon: "🎯",
    title: "Professional",
    description: "No more spreadsheets or chaos—just clean, fast Promo Code sharing."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything you need to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              share Promo Codes
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Import your .txt file from App Store Connect and let PromoKit handle the rest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 h-full transition-all duration-300 group-hover:bg-white dark:group-hover:bg-gray-700 group-hover:shadow-xl dark:group-hover:shadow-none dark:group-hover:ring-1 dark:group-hover:ring-gray-600/50 group-hover:-translate-y-1">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 