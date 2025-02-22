import React from 'react';

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
        </main>
    );
} 