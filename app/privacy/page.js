'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ThemeToggle from '../components/ThemeToggle';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <ThemeToggle />
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Link href="/" className="inline-flex items-center gap-3 mb-8 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            How we handle your data in PromoKit
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-lg dark:shadow-none dark:ring-1 dark:ring-gray-700/50"
        >
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              PromoKit Privacy Policy
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I built the PromoKit app as a Freemium app. This service is provided by Jan Armbrust and is intended for use as is.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Information Collection and Use
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I don't store any user-identifiable data anywhere outside your device. All your promo codes and app data are stored locally on your device and are never transmitted to external servers.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The app does use third-party APIs that may collect information used to identify you. This includes App Store Connect for promo code validation.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Third-Party Service Providers
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Link to the privacy policy of third-party service providers used by the app:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li className="text-gray-600 dark:text-gray-300">
                <a 
                  href="https://freemiumkit.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  FreemiumKit
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Data Security
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Changes to This Privacy Policy
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I may update my Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              This policy is effective as of 2024-12-17
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Contact Me
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at{' '}
              <a 
                href="mailto:privacy@promokit.app" 
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              >
                privacy@promokit.app
              </a>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}