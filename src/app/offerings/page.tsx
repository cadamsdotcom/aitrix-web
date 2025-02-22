import React from 'react';

interface OfferingProps {
    title: string;
    description: string;
    features: string[];
}

const OfferingCard: React.FC<OfferingProps> = ({ title, description, features }) => (
    <div className="border rounded-lg p-6 shadow-lg">
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="mb-4">{description}</p>
        <ul className="list-disc list-inside">
            {features.map((feature, index) => (
                <li key={index} className="mb-2">{feature}</li>
            ))}
        </ul>
    </div>
);

export default function OfferingsPage() {
    const offerings = [
        {
            title: "Sales & Marketing Automation",
            description: "Streamline your sales and marketing processes with intelligent automation.",
            features: [
                "Automated outreach campaigns",
                "Lead scoring and qualification",
                "CRM integration and optimization",
                "Marketing workflow automation"
            ]
        },
        {
            title: "Business Process Automation",
            description: "Optimize your back office operations with smart automation solutions.",
            features: [
                "Workflow automation",
                "Document processing",
                "Data entry automation",
                "Process optimization"
            ]
        },
        {
            title: "RAG & AI Solutions",
            description: "Leverage advanced AI and Retrieval-Augmented Generation for your business.",
            features: [
                "Custom AI implementations",
                "Document intelligence",
                "Knowledge base automation",
                "Intelligent search solutions"
            ]
        }
    ];

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Our Offerings</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {offerings.map((offering, index) => (
                    <OfferingCard key={index} {...offering} />
                ))}
            </div>
        </main>
    );
} 