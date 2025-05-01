import Link from "next/link";
import { navigation } from "../constants/navigation";
import { isExternalUrl } from '../utils/url';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <div>
                        <p className="text-sm">© AI Trix Consulting. All rights reserved.</p>
                    </div>
                    <div className="grid grid-cols-3 md:flex md:flex-row md:space-x-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm hover:text-blue-400 py-2 px-4 md:p-0"
                                {...(isExternalUrl(item.href) ? {
                                    target: "_blank",
                                    rel: "noopener noreferrer"
                                } : {})}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
} 