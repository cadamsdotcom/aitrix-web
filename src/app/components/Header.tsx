import Link from "next/link";

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Offerings', href: '/offerings' },
    { name: 'Work', href: '/work' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
];

export default function Header() {
    return (
        <header className="border-b">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold">
                    Your Company
                </Link>
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
            </nav>
        </header>
    );
} 