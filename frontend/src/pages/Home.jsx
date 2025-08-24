import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen  bg-white text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 bg-sky-50 shadow">
        <h1 className="text-2xl max-sm:text-sm font-bold text-sky-600">AutoGenie</h1>
        <div className="space-x-6">
          <Link to="/login" className="text-gray-700 hover:text-sky-600 max-sm:text-sm">
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-sky-600 text-white px-1 py-1 rounded-lg hover:bg-sky-700 transition max-sm:text-sm"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          Your <span className="text-sky-600">AI Assistant</span> for Everything
        </h2>
        <p className="max-w-2xl text-lg text-gray-600 mb-8">
          AutoGenie helps you generate text, images, and code instantly. 
          Boost productivity with just one click.
        </p>
        <Link
          to="/signup"
          className="bg-sky-600 text-white px-20 py-1 rounded-xl text-lg hover:bg-sky-700 transition"
        >
          Start Free
        </Link>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 px-8 py-16 max-w-6xl mx-auto">
         


     <Link to="/text-generator">    <div className="bg-sky-50 p-6 rounded-2xl shadow hover:shadow-lg transition border border-sky-100"> 
         
          <h3 className="text-xl font-semibold mb-2 text-sky-700">
            AI Text Generator
          </h3>
          <p className="text-gray-600">
            Write blogs, emails, and social media posts in seconds.
          </p>
        </div>  </Link>

        <div className="bg-sky-50 p-6 rounded-2xl shadow hover:shadow-lg transition border border-sky-100">
          <h3 className="text-xl font-semibold mb-2 text-sky-700">
            AI Image Generator
          </h3>
          <p className="text-gray-600">
            Create stunning visuals with just a text prompt.
          </p>
        </div>

        <div className="bg-sky-50 p-6 rounded-2xl shadow hover:shadow-lg transition border border-sky-100">
          <h3 className="text-xl font-semibold mb-2 text-sky-700">
            AI Code Generator
          </h3>
          <p className="text-gray-600">
            Generate and debug code snippets with ease.
          </p>
        </div>
        <div className="bg-sky-50 p-6 rounded-2xl shadow hover:shadow-lg transition border border-sky-100">
          <h3 className="text-xl font-semibold mb-2 text-sky-700">
          Quote Generator
          </h3>
          <p className="text-gray-600">
           Instantly get inspiring quotes to keep you motivated every day. Choose from categories like success, coding, and life lessons.
          </p>
        </div>
          <div className="bg-sky-50 p-6 rounded-2xl shadow hover:shadow-lg transition border border-sky-100">
          <h3 className="text-xl font-semibold mb-2 text-sky-700">
            Business Name Generator
          </h3>
          <p className="text-gray-600">
           Enter your idea or keyword, and AutoGenie will suggest unique, creative, and catchy business names for your next startup.
          </p>
        </div>
          <div className="bg-sky-50 p-6 rounded-2xl shadow hover:shadow-lg transition border border-sky-100">
          <h3 className="text-xl font-semibold mb-2 text-sky-700">
          Hashtag Generator
          </h3>
          <p className="text-gray-600">
            Boost your social media reach! Generate trending and relevant hashtags for Instagram, TikTok, and Twitter in seconds.
          </p>
        </div>
         
      </section>

      {/* Footer */}
      <footer className="bg-sky-50 py-6 text-center text-gray-600 border-t border-sky-100">
        © {new Date().getFullYear()} AutoGenie. All rights reserved.
      </footer>
    </div>
  );
}
