import React from 'react';

interface BlogPostProps {
    title: string;
    date: string;
    excerpt: string;
    slug: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ title, date, excerpt, slug }) => (
    <article className="border-b pb-8 mb-8">
        <h2 className="text-2xl font-semibold mb-2">
            <a href={`/blog/${slug}`} className="hover:text-blue-600">{title}</a>
        </h2>
        <p className="text-gray-600 mb-4">{date}</p>
        <p className="mb-4">{excerpt}</p>
        <a href={`/blog/${slug}`} className="text-blue-600 hover:underline">
            Read more →
        </a>
    </article>
);

export default function BlogPage() {
    const posts = [
        {
            title: "The Future of Business Automation",
            date: "March 15, 2024",
            excerpt: "Exploring how AI and automation are reshaping the business landscape...",
            slug: "future-of-business-automation"
        },
        {
            title: "Maximizing ROI with Intelligent Automation",
            date: "March 1, 2024",
            excerpt: "Learn how smart automation can drive better returns on your investment...",
            slug: "maximizing-roi-automation"
        }
    ];

    return (
        <main className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Blog</h1>
            <div className="max-w-2xl">
                {posts.map((post, index) => (
                    <BlogPost key={index} {...post} />
                ))}
            </div>
        </main>
    );
} 