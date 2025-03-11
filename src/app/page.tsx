import Image from "next/image";
import Link from "next/link";
import {
  FaLightbulb,
  FaPlusCircle,
  FaStepForward,
  FaTools,
  FaUserPlus,
  FaCheckCircle,
  FaClipboardCheck,
  FaCrosshairs,
  FaTasks,
  FaUndo
} from 'react-icons/fa';

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
            Hi. I'm <Link href="https://linkedin.com/in/cadamsdotcom/" target="_blank" rel="noopener noreferrer" className="text-blue-800 items-center">Chris</Link>.
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
            But there's a knowledge gap: this tech can do more than you know!
          </p>
          <p>
            We help your team <i>do more</i>. That means your business can <i>make more money</i>.
          </p>
          <p>
            We have a unique philosophy: your people are experts in how your business runs. We don't replace them - we give them <i>superpowers</i>.
          </p>
          <p>
            AI Trix Consulting is my vehicle to help you get the most out of AI. Read on to learn more!
          </p>
        </div>
        <div className="-ml-6 my-6 min-w-[200px] md:min-w-min">
          <Image src="/images/chris.png" alt="Chris" width={500} height={700} className="drop-shadow-lg" />
        </div>
      </div>

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

      <div className="glass rounded-lg shadow-lg p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-center mb-8">The AI Trix Philosophy</h2>
        <p className="text-lg leading-relaxed mb-8">
          We add AI to replace some of your work. We work on targeted projects with defined returns. We start with an initial investigation and report on how things are and how we can help.
        </p>
        <ul className="space-y-6">
          <li className="flex items-start gap-4 hover:bg-white/10 p-3 rounded-lg transition-all">
            <FaLightbulb className="text-yellow-500 mt-1 flex-shrink-0" />
            <span>Outcomes, not technology. Focus on outcomes for your business and work.</span>
          </li>
          <li className="flex items-start gap-4 hover:bg-white/10 p-3 rounded-lg transition-all">
            <FaPlusCircle className="text-green-500 mt-1 flex-shrink-0" />
            <span>Add value: it has to be helpful. We care about helping people get the benefits of this tech.</span>
          </li>
          <li className="flex items-start gap-4 hover:bg-white/10 p-3 rounded-lg transition-all">
            <FaStepForward className="text-blue-500 mt-1 flex-shrink-0" />
            <span>Proceed carefully and incrementally: move deliberately, break nothing.</span>
          </li>
          <li className="flex items-start gap-4 hover:bg-white/10 p-3 rounded-lg transition-all">
            <FaUndo className="text-gray-500 mt-1 flex-shrink-0" />
            <span>Have a plan in case it doesn't work. Be able to go back to how things were.</span>
          </li>
          <li className="flex items-start gap-4 hover:bg-white/10 p-3 rounded-lg transition-all">
            <FaTools className="text-purple-500 mt-1 flex-shrink-0" />
            <span>Not a "transformation": add a bit at a time, keep shaping it until it starts to work well, do not replace anything in any hurry. This applies to processes, tools - everything.</span>
          </li>
          <li className="flex items-start gap-4 hover:bg-white/10 p-3 rounded-lg transition-all">
            <FaUserPlus className="text-orange-500 mt-1 flex-shrink-0" />
            <span>Aumgent people, don't replace them. Replace job roles, not people. We help your business and team understand AI and integrate it into your work.</span>
          </li>
          <li className="flex items-start gap-4 hover:bg-white/10 p-3 rounded-lg transition-all">
            <FaCheckCircle className="text-teal-500 mt-1 flex-shrink-0" />
            <span>Use existing tools. We don't believe in requiring you to install new tools.</span>
          </li>
          <li className="flex items-start gap-4 hover:bg-white/10 p-3 rounded-lg transition-all">
            <FaClipboardCheck className="text-red-500 mt-1 flex-shrink-0" />
            <span>Human approval of important changes, such as sending emails, before they happen.</span>
          </li>
          <li className="flex items-start gap-4 hover:bg-white/10 p-3 rounded-lg transition-all">
            <FaCrosshairs className="text-indigo-500 mt-1 flex-shrink-0" />
            <span>Focus. Work on one project at a time until delivery.</span>
          </li>
          <li className="flex items-start gap-4 hover:bg-white/10 p-3 rounded-lg transition-all">
            <FaTasks className="text-pink-500 mt-1 flex-shrink-0" />
            <span>Scope. Defined projects with clear impact on a function, process, or team/individual's work.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
