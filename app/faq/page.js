import Image from "next/image";
import Link from "next/link";

export default function FAQ() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black text-gray-100">
      <main className="flex flex-col gap-8 row-start-2 items-start max-w-3xl w-full">
        <h1 className="text-4xl sm:text-6xl font-bold">{`FAQ`}</h1>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {`How do I download Promo Kit?`}
          </h2>
          <p className="text-lg mb-4">
            {`To download `}<strong>{`Promo Kit`}</strong>{`, just press the download button below:`}
          </p>
          <Link href="https://apps.apple.com/app/id123456789" target="_blank">
            <Image
              src="/images/app-store-button.svg"
              alt={`Download on the App Store`}
              width={180}
              height={60}
            />
          </Link>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {`I tried to download Promo Kit but it didn't work, what should I do?`}
          </h2>
          <p className="text-lg mb-4">
            {`If you have problems downloading `}<strong>{`Promo Kit`}</strong>{`, here are some tips:`}
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>{`Check your storage:`}</strong>{` Go to `}<strong>{`Settings → General → iPhone/iPad Storage`}</strong>{`. If you have less than 100 MB free, delete some apps and try again.`}
            </li>
            <li>
              <strong>{`Check your internet connection:`}</strong>{` Connect to Wi-Fi and try again.`}
            </li>
            <li>
              <strong>{`Cancel and restart the download.`}</strong>
            </li>
            <li>
              <strong>{`Follow Apple’s advice:`}</strong>{` Refer to Apple’s support page on download errors.`}
            </li>
            <li>
              <strong>{`Restart your device`}</strong>{` and try downloading again.`}
            </li>
          </ul>
          <p className="text-lg mt-4">
            {`If these tips don’t help, contact me at: `}
            <a href="mailto:promokit@xbow.dev" className="text-blue-400 hover:underline">
              {`promokit@xbow.dev`}
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {`How do I get the latest version of Promo Kit?`}
          </h2>
          <p className="text-lg mb-4">
            {`Open the `}<strong>{`App Store`}</strong>{` and search for `}<strong>{`"Promo Kit"`}</strong>{`. If an update is available, tap the `}<strong>{`Update`}</strong>{` button.`}
          </p>
          <p className="text-lg">
            {`Or simply tap the App Store button above to open the app's page directly.`}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {`What if I find a bug in Promo Kit?`}
          </h2>
          <p className="text-lg mb-4">
            {`First, try updating the app. If the error persists, email me at: `}
            <a href="mailto:promokit@xbow.dev" className="text-blue-400 hover:underline">
              {`promokit@xbow.dev`}
            </a>
            {`. Please describe the issue and what you expected to happen.`}
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            {`What can Promo Kit do?`}
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>{`Import promo codes:`}</strong>{` Import the promocodes.txt you get from App Store Connect easily.`}
            </li>
            <li>
              <strong>{`Track validity:`}</strong>{` Promo codes run out after 28 days, so you always know until when they are valid.`}
            </li>
            <li>
              <strong>{`Track usage:`}</strong>{` If you copy a promo code it automatically gets marked as used.`}
            </li>
            <li>
              <strong>{`Generate deeplink:`}</strong>{` Generate a deeplink to the App Store so that your users can directly redeem your codes.`}
            </li>
            <li>
              <strong>{`Secure and Private:`}</strong>{` No data is stored externally.`}
            </li>
          </ul>
        </section>

        <p className="text-lg mt-8">
          {`Thank you for using `}<strong>{`Promo Kit`}</strong>{`. If you have suggestions or need further help, don't hesitate to contact me at: `}
          <a href="mailto:promokit@xbow.dev" className="text-blue-400 hover:underline">
            {`promokit@xbow.dev`}
          </a>
        </p>
      </main>
    </div>
  );
}