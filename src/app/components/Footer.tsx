import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <Link href="/contact" className="text-sm hover:text-blue-400">Contact</Link>
                        <Link href="/blog" className="text-sm hover:text-blue-400">Blog</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
} 