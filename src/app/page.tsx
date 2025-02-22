import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              Intelligent Automation Solutions for Modern Businesses
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              We help businesses streamline their operations and boost productivity through
              intelligent automation and AI-powered solutions.
            </p>
            <div className="flex gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Get Started
              </Link>
              <Link
                href="/offerings"
                className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">How We Can Help</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Sales & Marketing Automation</h3>
                <p className="text-gray-600">
                  Streamline your outreach and lead generation with intelligent automation solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">Business Process Automation</h3>
                <p className="text-gray-600">
                  Optimize your operations with smart workflows and automated processes.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-4">AI & RAG Solutions</h3>
                <p className="text-gray-600">
                  Leverage advanced AI and knowledge retrieval to enhance your business capabilities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
