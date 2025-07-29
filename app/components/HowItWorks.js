'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: "1",
    title: "Go to App Store Connect",
    description: "Navigate to Your App → Promo Codes section",
    icon: "📱"
  },
  {
    number: "2", 
    title: "Download Promo Codes",
    description: "Download your Promo Codes and save to iCloud Drive",
    icon: "⬇️"
  },
  {
    number: "3",
    title: "Paste App Store Link",
    description: "Add the App Store link to your app in PromoKit",
    icon: "🔗"
  },
  {
    number: "4",
    title: "Import & Start Sharing",
    description: "Select the downloaded file and tap Add to get started",
    icon: "✅"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get started in
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              4 simple steps
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Setting up PromoKit is quick and easy. Here's everything you need to know.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-200 to-purple-200 z-0 transform translate-x-4"></div>
              )}
              
              <div className="relative z-10 bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white font-bold text-lg mb-6">
                  {step.number}
                </div>
                
                <div className="text-3xl mb-4">{step.icon}</div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to get started?
            </h3>
            <p className="text-gray-600 mb-6">
              Download PromoKit today and transform how you manage and share your App Store Promo Codes.
            </p>
            <img 
              src="/images/app-store-badge.svg" 
              alt="Download on the App Store" 
              className="h-12"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 