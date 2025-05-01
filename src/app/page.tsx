import Image from "next/image";
import Link from "next/link";
import { getTopBlogPosts, BlogPost } from "@/lib/blog";

export default async function Home() {
  const topBlogPosts = await getTopBlogPosts();

  return (
    <div className="container mx-auto flex flex-col gap-8 px-4 py-8">
      <div className="glass rounded-lg shadow-lg p-6 pr-8 md:pr-12 space-y-4">
        <div className="flex justify-center items-center md:gap-2">
          <Image src="/images/logo.png" alt="Logo" width={150} height={150} className="object-contain" />
          <h1 className="text-5xl md:text-6xl font-bold">
            AI Trix Consulting
          </h1>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-center mx-auto">
          AI For Lawyers: Adding AI To Your Work And Business
        </h2>
      </div>

      <div className="mx-auto flex flex-nowrap items-center relative">
        <div className="glass rounded-lg shadow-lg p-6 pr-8 md:pr-12 space-y-4">
          <h2 className="text-3xl font-semibold">
            Welcome. I&apos;m <Link href="https://linkedin.com/in/cadamsdotcom/" target="_blank" rel="noopener noreferrer" className="underline items-center">Chris</Link>.
          </h2>
          <p>
            I make online content for lawyers to teach you about the latest AI tools and automation so you and your firm don&apos;t fall behind.
          </p>
          <p>Find me on <Link href="https://linkedin.com/in/cadamsdotcom/" target="_blank" rel="noopener noreferrer" className="underline items-center">LinkedIn</Link> and <Link href="https://youtube.com/@cadamsdotcom" target="_blank" rel="noopener noreferrer" className="underline items-center">YouTube</Link>.</p>
          <p>
            Through AI Trix Consulting, I offer education and implementation. Offering span a range of tools and automations that reduce the drudgery of legal work, saving you time and money.
          </p>
          <p>
            After over 20 years as a software developer & entrepreneur, I have seen AI explode with potential to improve businesses of all sizes in every industry.
          </p>
          <p>
            We help you and your team <i>do more</i> with better tools and automation built for your needs. Deliver outcomes faster for clients with less costs. Clients will be wowed by your efficiency and come back again and again. That lets you <i>make more money</i>.
          </p>
          <p>
            Our unique philosophy: you and your people are <i>experts in your business</i>. We don&apos;t replace people - we give them <i>superpowers</i>.
          </p>
          <p>
            AI Trix Consulting is here to help you get the most out of AI. Read on to learn about our offerings.
          </p>
        </div>
        <div className="-ml-6 my-6 min-w-[200px] md:min-w-min">
          <Image src="/images/chris.png" alt="Chris" width={500} height={700} className="drop-shadow-lg" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h3 className="text-2xl font-semibold mb-2">Ready to learn some AI Trix?</h3>
        <div className="flex justify-center gap-4">
          <Link
            href="/about"
            className="bg-indigo-600 text-white font-bold py-3 min-w-[180px] md:min-w-[200px] rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-center"
          >
            Read More...
          </Link>
          <span className="text-xl font-bold text-gray-500 my-auto">or</span>
          <Link
            href="/contact"
            className="bg-emerald-600 text-white font-bold py-3 min-w-[180px] md:min-w-[200px] rounded-lg shadow-lg hover:bg-green-700 transition duration-300 text-center"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      <div className="mx-auto flex flex-nowrap items-center relative">
        <div className="glass rounded-lg shadow-lg p-6 pr-8 md:pr-12 space-y-4">
          <h2 className="text-3xl font-semibold">
            Latest Videos
          </h2>
          <p>The latest videos from my YouTube channel, <Link href="https://youtube.com/@cadamsdotcom" target="_blank" rel="noopener noreferrer" className="underline items-center">Chris Adams | AI For Lawyers</Link></p>
          <p>Content coming soon.</p>
        </div>
      </div>

      <div className="mx-auto flex flex-nowrap items-center relative">
        <div className="glass rounded-lg shadow-lg p-6 pr-8 md:pr-12 space-y-4">
          <h2 className="text-3xl font-semibold">
            Blog
          </h2>
          <p>A few of our latest blog posts:</p>
          {topBlogPosts.map((post: BlogPost) => (
            <div key={post.title}>
              <h3>{post.title}</h3>
              <p>{post.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
