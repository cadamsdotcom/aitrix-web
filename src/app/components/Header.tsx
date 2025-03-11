"use client";

import Link from "next/link";
import { useState } from 'react';
import { navigation } from '../constants/navigation';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <header className="border-b">
            <nav className="container relative mx-auto p-4 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold">
                    AI Trix Consulting
                </Link>
                <button
                    className="md:hidden flex flex-col justify-between w-6 h-5 ml-auto"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block h-0.5 w-full bg-current transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>

                {/* Navigation for larger screens */}
                <div className="hidden md:flex space-x-6">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="hover:text-blue-600"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>


                {/* Mobile menu */}
                <div className={`md:hidden absolute top-full w-full md:w-auto ${mobileMenuOpen ? 'overflow-hidden max-h-96' : 'overflow-hidden max-h-0'} transition-all duration-300 ease-in-out`}>
                    <nav className={`
                        bg-white md:bg-transparent
                        shadow-md md:shadow-none
                        p-4 md:p-0
                        z-20
                        transition-transform duration-300
                        ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-4'}
                    `}>
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block md:inline-block py-2 md:py-0 hover:text-blue-600"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </nav>
        </header>
    );
} 