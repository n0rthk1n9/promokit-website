'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { AppStoreBadge } from './AppStoreBadge';

const promokitColor = 'rgba(59, 130, 246, 0.1)'; // Blue color for PromoKit

export function PromoKitCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="card relative overflow-hidden border border-transparent dark:border-gray-700 bg-background-light dark:bg-background-dark transition-colors duration-200 rounded-3xl p-6"
      style={{
        '--hover-color': promokitColor,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = promokitColor;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '';
      }}
    >
      <div className="flex items-center gap-4 relative z-20">
        <Link href="/" className="flex items-center gap-4 flex-1 no-underline">
          <Image
            src="/images/app-icon.webp"
            alt="PromoKit Icon"
            width={50}
            height={50}
            className="rounded-lg transition-transform duration-300 hover:scale-110"
            unoptimized
          />
          <span className="text-text-light dark:text-text-dark font-medium">
            PromoKit
          </span>
        </Link>
        <div className="relative z-30 transition-transform duration-300 hover:scale-110" onClick={(e) => e.stopPropagation()}>
          <div id="download">
            <AppStoreBadge url="https://apps.apple.com/de/app/promokit/id6739035369" />
          </div>
        </div>
      </div>
    </motion.div>
  );
} 