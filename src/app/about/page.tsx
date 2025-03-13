import React from 'react';
import Link from 'next/link';
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

export default function AboutPage() {
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-6">About Us</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="mb-4">
                    Founded in 2024 and based in Sydney, we specialize in creating intelligent automation
                    solutions that transform how businesses operate and grow.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Our Philosophy</h2>
                <p className="mb-4">
                    We believe in creating sustainable, efficient solutions that work seamlessly with your
                    existing processes. Our approach combines cutting-edge AI technology with practical
                    business sense to deliver real value.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">How We Work</h2>
                <p className="mb-4">
                    Our process is collaborative and transparent. We start by understanding your unique
                    challenges, design solutions that fit your specific needs, and implement them with
                    careful attention to detail and ongoing support.
                </p>
            </section>

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
                        <span>Have a plan in case it doesn&apos;t work. Be able to go back to how things were.</span>
                    </li>
                    <li className="flex items-start gap-4 hover:bg-white/10 p-3 rounded-lg transition-all">
                        <FaTools className="text-purple-500 mt-1 flex-shrink-0" />
                        <span>Not a &quot;transformation&quot;: add a bit at a time, keep shaping it until it starts to work well, do not replace anything in any hurry. This applies to processes, tools - everything.</span>
                    </li>
                    <li className="flex items-start gap-4 hover:bg-white/10 p-3 rounded-lg transition-all">
                        <FaUserPlus className="text-orange-500 mt-1 flex-shrink-0" />
                        <span>Augment people, don&apos;t replace them. Replace job roles, not people. We help your business and team understand AI and integrate it into your work.</span>
                    </li>
                    <li className="flex items-start gap-4 hover:bg-white/10 p-3 rounded-lg transition-all">
                        <FaCheckCircle className="text-teal-500 mt-1 flex-shrink-0" />
                        <span>Use existing tools. We don&apos;t believe in requiring you to install new tools.</span>
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
                        <span>Scope. Defined projects with clear impact on a function, process, or team/individual&apos;s work.</span>
                    </li>
                </ul>
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

        </main >
    );
} 