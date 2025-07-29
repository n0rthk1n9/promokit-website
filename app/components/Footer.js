'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/app-icon.webp" 
                alt="PromoKit App Icon" 
                className="w-10 h-10 rounded-[10px]"
              />
              <span className="text-2xl font-bold">PromoKit</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-6 max-w-md">
              Your essential companion for managing and sharing App Store Promo Codes—perfect for live events, conferences, or one-on-one demos.
            </p>
            <img 
              src="/images/app-store-badge.svg" 
              alt="Download on the App Store" 
              className="h-10"
            />
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                  Download
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="/faq" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="mailto:support@promokit.app" className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400 dark:text-gray-500">
            © 2024 PromoKit. All rights reserved. Made with ❤️ for developers in 🌋 Napoli & ⚓ Hamburg.
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 