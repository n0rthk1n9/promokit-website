export default function PrivacyPolicy() {
    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black-900 text-gray-100">
        <main className="flex flex-col gap-6 row-start-2 items-center sm:items-start max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-bold text-center sm:text-left">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl text-center sm:text-left">
            I built the <strong>Promo Kit</strong> app as a <strong>Freemium</strong> app.
          </p>
  
          <h2 className="text-2xl sm:text-3xl font-semibold mt-4">
            Information Collection and Use
          </h2>
          <p className="text-lg sm:text-xl text-center sm:text-left">
            I don&apos;t store any user-identifiable data anywhere outside your device.
          </p>
          <p className="text-lg sm:text-xl text-center sm:text-left">
            The app does use third-party APIs that may collect information used to identify you.
          </p>
  
          <h2 className="text-2xl sm:text-3xl font-semibold mt-4">
            Third-Party Services
          </h2>
          <ul className="list-disc list-inside text-lg sm:text-xl">
            <li>
              <a
                href="https://freemiumkit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                FreemiumKit
              </a>
            </li>
          </ul>
  
          <h2 className="text-2xl sm:text-3xl font-semibold mt-4">
            Policy Updates
          </h2>
          <p className="text-lg sm:text-xl text-center sm:text-left">
            This policy is effective as of <strong>2024-12-17</strong>.
          </p>
  
          <h2 className="text-2xl sm:text-3xl font-semibold mt-4">Contact Me</h2>
          <p className="text-lg sm:text-xl text-center sm:text-left">
            If you have any questions, contact me at{" "}
            <a
              href="mailto:appexhibit@xbow.dev"
              className="text-blue-400 hover:underline"
            >
              promokit@xbow.dev
            </a>
            .
          </p>
        </main>
      </div>
    );
  }