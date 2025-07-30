import { motion } from 'framer-motion';
import Image from 'next/image';

export function AppStoreButton({ url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="block dark:hidden">
        <Image
          src="/images/app-store-badge.svg"
          alt="Download on the App Store"
          width={120}
          height={40}
          unoptimized
        />
      </div>
      <div className="hidden dark:block">
        <Image
          src="/images/app-store-badge.svg"
          alt="Download on the App Store"
          width={120}
          height={40}
          unoptimized
        />
      </div>
    </a>
  );
} 