export type BlogPost = {
    slug: string;
    title: string;
    subtitle: string;
    date: string;
    author: string;
    authorImage: string;
    image: string;
    text: string;
    tags: string[];
};

const posts: BlogPost[] = [
    {
        slug: "the-future-of-business-automation-with-ai",
        title: "The Future of Business Automation With AI",
        subtitle: "Content coming soon.",
        date: "Feb 2025",
        author: "Chris Adams",
        authorImage: "https://via.placeholder.com/150",
        image: "https://via.placeholder.com/150",
        text: "Content coming soon.",
        tags: ["Automation"],
    },
    {
        slug: "deliver-incremental-value-with-small-simple-projects",
        title: "Deliver Incremental Value With Small, Simple Projects",
        subtitle: "Content coming soon.",
        date: "Feb 2025",
        author: "Chris Adams",
        authorImage: "https://via.placeholder.com/150",
        image: "https://via.placeholder.com/150",
        text: "Content coming soon.",
        tags: ["Implementation"],
    },
    {
        slug: "human-in-the-loop-reviewing-agent-actions",
        title: "Human in the Loop: Reviewing Agent Actions",
        subtitle: "Content coming soon.",
        date: "Feb 2025",
        author: "Chris Adams",
        authorImage: "https://via.placeholder.com/150",
        image: "https://via.placeholder.com/150",
        text: "Content coming soon.",
        tags: ["Agents"],
    },
    {
        slug: "five-tools-and-workflows-for-ai-automation",
        title: "Five Tools and Workflows for AI Automation",
        subtitle: "Content coming soon.",
        date: "Feb 2025",
        author: "Chris Adams",
        authorImage: "https://via.placeholder.com/150",
        image: "https://via.placeholder.com/150",
        text: "Content coming soon.",
        tags: ["Automation", "Tools"],
    },
    {
        slug: "always-use-the-best-ai-model-for-the-job-with-evals",
        title: "Always Use the Best AI Model For the Job With Evals",
        subtitle: "Content coming soon.",
        date: "Feb 2025",
        author: "Chris Adams",
        authorImage: "https://via.placeholder.com/150",
        image: "https://via.placeholder.com/150",
        text: "Content coming soon.",
        tags: ["Tools"],
    },
    {
        slug: "deepseek-r1s-impact-on-the-industry",
        title: "DeepSeek R1's impact on the industry",
        subtitle: "Content coming soon.",
        date: "Feb 2025",
        author: "Chris Adams",
        authorImage: "https://via.placeholder.com/150",
        image: "https://via.placeholder.com/150",
        text: "Content coming soon.",
        tags: ["Industry"],
    },
    {
        slug: "three-levels-of-software-productization",
        title: "Three Levels of Software Productization",
        subtitle: "Content coming soon.",
        date: "Feb 2025",
        author: "Chris Adams",
        authorImage: "https://via.placeholder.com/150",
        image: "https://via.placeholder.com/150",
        text: "Content coming soon.",
        tags: ["Implementation"],
    }
];

const getTopBlogPosts = async () => {
    return posts.slice(0, 3);
};

export { getTopBlogPosts };
