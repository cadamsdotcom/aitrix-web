import React from 'react';

export default function ContactPage() {
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Contact AI Trix</h1>

            <h3 className="text-2xl font-semibold mb-2">Ready to learn some AI Trix?</h3>

            <div className="max-w-2xl mx-auto">
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Schedule a Call With Us</h2>
                    <p className="mb-4">
                        Book a time to discuss your automation needs:
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="https://cal.com/cadamsdotcom/discovery-call"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                        >
                            Schedule a 30-minute Discovery Call
                        </a>
                    </div>
                </div>

                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">Not Ready For a Call? Send a Message Instead.</h2>
                    <iframe
                        src="https://docs.google.com/forms/d/12YsOfzFwj894c0tgNrdq_4xnHjtLlbH4V1Y3t5EWTh8/viewform?embedded=true"
                        width="100%"
                        height="900"
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                    >
                        Loading…
                    </iframe>
                </div>
            </div>
        </main>
    );
} 