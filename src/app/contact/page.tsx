import React from 'react';

export default function ContactPage() {
    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

            <div className="max-w-2xl mx-auto">
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Schedule a Consultation</h2>
                    <p className="mb-4">
                        Book a time to discuss your automation needs:
                    </p>
                    <a
                        href="https://cal.com/your-calendar-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                    >
                        Schedule Meeting
                    </a>
                </div>

                <div className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
                    <iframe
                        src="https://docs.google.com/forms/d/e/your-form-id/viewform?embedded=true"
                        width="100%"
                        height="600"
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