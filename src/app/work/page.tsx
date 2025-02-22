import React from 'react';

interface CaseStudyProps {
    title: string;
    description: string;
    results: string[];
}

const CaseStudy: React.FC<CaseStudyProps> = ({ title, description, results }) => (
    <div className="border-b pb-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <p className="mb-4">{description}</p>
        <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold mb-2">Results:</h3>
            <ul className="list-disc list-inside">
                {results.map((result, index) => (
                    <li key={index} className="mb-2">{result}</li>
                ))}
            </ul>
        </div>
    </div>
);

export default function WorkPage() {
    const caseStudies = [
        {
            title: "E-commerce Outreach Automation",
            description: "Implemented merchandise installation tracking in outreach emails for a major retail client, improving campaign effectiveness and follow-up timing.",
            results: [
                "40% increase in response rates",
                "Automated tracking of 1000+ installations",
                "Reduced manual follow-up time by 75%"
            ]
        },
        {
            title: "Outbound Marketing Enhancement",
            description: "Developed an automated system to enrich outbound marketing with relevant case studies based on prospect industry and size.",
            results: [
                "60% higher engagement rates",
                "Personalized content for each prospect",
                "Streamlined content distribution process"
            ]
        }
    ];

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Work Examples</h1>
            {caseStudies.map((study, index) => (
                <CaseStudy key={index} {...study} />
            ))}
        </main>
    );
} 