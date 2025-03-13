import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <div className="glass rounded-lg shadow-lg p-6 pr-8 md:pr-12 space-y-4">
        <div className="flex justify-center items-center md:gap-2">
          <Image src="/images/logo.png" alt="Logo" width={150} height={150} className="object-contain" />
          <h1 className="text-5xl md:text-6xl font-bold">
            AI Trix Consulting
          </h1>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-center mx-auto">
          Humans who help add AI to your business.
        </h2>
      </div>

      <div className="mx-auto flex flex-nowrap items-center relative">
        <div className="glass rounded-lg shadow-lg p-6 pr-8 md:pr-12 space-y-4">
          <h2 className="text-3xl font-semibold">
            Hi. I&apos;m <Link href="https://linkedin.com/in/cadamsdotcom/" target="_blank" rel="noopener noreferrer" className="underline items-center">Chris</Link>.
          </h2>
          <p>
            I am motivated by the power of technology to improve lives.
          </p>
          <p>
            I have spent over 20 years as a software developer & entrepreneur, at startups and tech giants in Sydney and Silicon Valley.
          </p>
          <p>
            AI is on the rise, and has potential to improve businesses of all sizes and kinds.
          </p>
          <p>
            But there&apos;s a knowledge gap: this tech can do more than you know!
          </p>
          <p>
            We help your team <i>do more</i>. That means your business can <i>make more money</i>.
          </p>
          <p>
            We have a unique philosophy: your people are experts in how your business runs. We don&apos;t replace them - we give them <i>superpowers</i>.
          </p>
          <p>
            AI Trix Consulting is my vehicle to help you get the most out of AI. Read on to learn more!
          </p>
        </div>
        <div className="-ml-6 my-6 min-w-[200px] md:min-w-min">
          <Image src="/images/chris.png" alt="Chris" width={500} height={700} className="drop-shadow-lg" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h3 className="text-2xl font-semibold mb-2">Ready to learn some AI Trix?</h3>
        <div className="flex justify-center gap-4">
          <Link
            href="/more-info"
            className="bg-blue-600 text-white font-bold py-3 min-w-[180px] md:min-w-[200px] rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-center"
          >
            Read More
          </Link>
          <Link
            href="/chat"
            className="bg-green-600 text-white font-bold py-3 min-w-[180px] md:min-w-[200px] rounded-lg shadow-lg hover:bg-green-700 transition duration-300 text-center"
          >
            Chat with Us
          </Link>
        </div>
      </div>
    </div>
  );
}
