import React from 'react';
import Link from 'next/link';

interface OfferingProps {
    title: string;
    description: string;
    features: string[];
    stages?: string[];
    cta?: {
        text: string;
        link: string;
    };
}

const OfferingCard: React.FC<OfferingProps> = ({ title, description, features, stages, cta }) => (
    <div className="border rounded-lg p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="mb-4 text-gray-700">{description}</p>
        {stages && (
            <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Our Process:</h3>
                <ol className="list-decimal list-inside space-y-2">
                    {stages.map((stage, index) => (
                        <li key={index} className="text-gray-600">{stage}</li>
                    ))}
                </ol>
            </div>
        )}
        <ul className="list-disc list-inside space-y-2 mb-4">
            {features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
            ))}
        </ul>
        {cta && (
            <Link href={cta.link} className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                {cta.text}
            </Link>
        )}
    </div>
);

export default function OfferingsPage() {
    const offerings = [
        {
            title: "Document Intelligence & Case Management",
            description: "Chat with your case documents using our secure, self-hosted solution. Perfect for law firms and organizations handling sensitive information.",
            features: [
                "Self-hosted document chat interface",
                "Runs on your own infrastructure for maximum security",
                "Upload and manage your own documents",
                "Managed service option available",
                "Client self-service portal for case inquiries",
                "Automated responses to procedural questions",
                "Secure document access and management",
                "Custom training for your specific document types"
            ],
            cta: {
                text: "Get a Quote",
                link: "/contact"
            }
        },
        {
            title: "Client Management Automation",
            description: "Give your clients a self-service portal to ask questions about their cases, legal procedures, and other important matters, reducing routine inquiries while maintaining high service quality.",
            features: [
                "24/7 self-service client portal",
                "Automated responses to common questions",
                "Case status tracking and updates",
                "Legal procedure explanations",
                "Document request handling",
                "Secure client communication channel",
                "Integration with existing case management systems",
                "Custom knowledge base development"
            ]
        },
        {
            title: "AI-Powered Workflow Automation",
            description: "Automate your day-to-day tasks so you can focus on work that truly moves the needle for your business.",
            features: [
                "Automated task prioritization",
                "Smart document processing",
                "Email and communication automation",
                "Meeting scheduling and follow-ups",
                "Data entry and form filling automation",
                "Custom workflow design and implementation",
                "Integration with existing tools",
                "Performance tracking and optimization"
            ]
        },
        {
            title: "Growth Automation Suite",
            description: "Accelerate your business growth with automated lead generation, sales processes, and operations management.",
            features: [
                "Automated lead generation campaigns",
                "Sales outreach automation",
                "Lead qualification and scoring",
                "Follow-up sequence automation",
                "Performance tracking and analytics",
                "CRM integration and optimization",
                "Multi-channel campaign management",
                "ROI tracking and reporting"
            ]
        },
        {
            title: "Education Days",
            description: "Don't know where to begin with AI? We can help your team learn enough that they can start building tools to solve the problems they face in their own work.",
            stages: [
                "We interview key team members & produce a comprehensive report",
                "We run education days which help people use the technology in their daily work",
                "We follow up with your team regularly to see what questions they have"
            ],
            features: [
                "Full-spectrum AI training from basics to advanced competency",
                "Hands-on learning with practical business applications",
                "Real-world use cases in data extraction, analysis, and reporting",
                "Custom-tailored learning paths for your team",
                "Teach people enough to solve their own problems",
                "Practical implementation guidance for daily work scenarios",
                "Regular follow-up sessions to ensure continued success"
            ]
        },
        {
            title: "Sales & Marketing Personalization",
            description: "Transform your customer interactions with hyper-personalized engagement strategies that make every interaction feel like you've spent hours preparing it.",
            features: [
                "Hyper-personal engagement with prospects and customers",
                "Customized communication for churned customers and vendors",
                "AI-driven personalization that scales",
                "Automated yet deeply personal communication workflows",
                "Custom engagement strategies for different audience segments",
                "Integration with existing CRM systems",
                "Personalized outreach that feels human-crafted"
            ]
        },
        {
            title: "Autonomous AI Agents",
            description: "Deploy intelligent AI agents that work alongside your team, with carefully designed approval workflows to ensure quality and control.",
            features: [
                "Custom AI agent development",
                "Human-in-the-loop approval systems",
                "Process automation with oversight",
                "Integration with existing workflows",
                "Scalable agent solutions",
                "Customizable approval points",
                "Performance monitoring and optimization",
                "Seamless team collaboration features"
            ]
        },
        {
            title: "Custom Software Solutions",
            description: "Tired of paying for expensive SaaS tools but only using a fraction of their features? We'll build you a custom solution that perfectly fits your needs.",
            features: [
                "Custom software development",
                "Cost-effective SaaS alternatives",
                "Integration with existing systems",
                "Scalable and maintainable solutions",
                "Tailored feature sets",
                "One-off solutions to replace expensive SaaS tools",
                "Ongoing support and maintenance",
                "Future-proof architecture"
            ]
        },
        {
            title: "Productized Services",
            description: "Ready-to-use AI solutions for common business needs, designed to deliver immediate value.",
            features: [
                "Document chat interface with custom training",
                "BOLT buyer outcome leverage tool",
                "Email management and automation",
                "Meeting scheduling and transcription",
                "Document generation and management",
                "Data analysis and reporting tools",
                "Quick deployment and integration",
                "Continuous updates and improvements"
            ]
        }
    ];

    return (
        <main className="container mx-auto px-4 py-8">
            <section className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4">Areas of Focus & Service Offerings</h1>
                <p className="text-xl text-gray-700 mb-8">
                    AI Trix brings AI to your business by discussing what we can deliver and helping you implement it effectively. 
                    Here&apos;s how we can transform your business with AI.
                </p>
            </section>

            <div className="space-y-8 mb-12">
                {offerings.map((offering, index) => (
                    <div key={index} className="glass w-full">
                        <OfferingCard {...offering} />
                    </div>
                ))}
            </div>

            <section className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Ready to learn some AI Trix?</h2>
                <Link href="/contact" className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg">
                    Get in Contact
                </Link>
            </section>
        </main>
    );
} 