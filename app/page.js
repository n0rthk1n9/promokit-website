import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl sm:text-6xl font-bold text-center sm:text-left">
          Promo Kit
        </h1>
        <p className="text-lg sm:text-xl text-center sm:text-left">
          Coming soon 🚀
        </p>
      </main>
    </div>
  );
}