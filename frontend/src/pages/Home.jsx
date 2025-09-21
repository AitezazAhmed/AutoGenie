import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { motion } from "framer-motion";

export default function Home() {
  const { authUser, logout } = useAuthStore();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex justify-between items-center px-8 py-4 bg-sky-50 shadow"
      >
        <h1 className="text-2xl max-sm:text-sm font-bold text-sky-600">
          AutoGenie
        </h1>
        <div className="space-x-6">
          {authUser ? (
            <button
              onClick={logout}
              className="text-gray-700 hover:text-sky-600 max-sm:text-sm cursor-pointer "
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="text-gray-700 hover:text-sky-600 max-sm:text-sm"
            >
              Login
            </Link>
          )}

          {authUser ? (
            <Link to="/logout" className="text-gray-700 hover:text-sky-600 max-sm:text-sm"></Link>
          ) : (
            <Link
              to="/signup"
              className="bg-sky-600 text-white px-1 py-1 rounded-lg hover:bg-sky-700 transition max-sm:text-sm"
            >
              Get Started
            </Link>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center justify-center text-center px-6 py-20"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
          Your <span className="text-sky-600">AI Assistant</span> for Everything
        </h2>
        <p className="max-w-2xl text-lg text-gray-600 mb-8">
          AutoGenie helps you generate text, quote, and code instantly. Boost
          productivity with just one click.
        </p>
        {authUser ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight, // scroll one screen down
                behavior: "smooth",
              });
            }}
            className="bg-sky-600 text-white px-20 py-1 rounded-xl text-lg hover:bg-sky-700 transition"
          >
            You’re all set — start exploring 🚀
          </motion.button>
        ) : (
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/signup"
              className="bg-sky-600 text-white px-20 py-1 rounded-xl text-lg hover:bg-sky-700 transition"
            >
              Start Free
            </Link>
          </motion.div>
        )}
      </motion.section>

      {/* Features Section */}
      <motion.section
       initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        
        
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="grid md:grid-cols-3 gap-8 px-8 py-16 max-w-6xl mx-auto"
      >
        {[
          {
            title: "AI Text Generator",
            desc: "Write blogs, emails, and social media posts in seconds.",
            link: "/text-generator",
          },
          {
            title: "AI Code Generator",
            desc: "Generate and debug code snippets with ease.",
            link: "/code-generator",
          },
          {
            title: "Quote Generator",
            desc: "Instantly get inspiring quotes to keep you motivated every day.",
            link: "/quote-generator",
          },
          {
            title: "Business Name Generator",
            desc: "Enter your idea or keyword, and AutoGenie will suggest unique, creative, and catchy business names for your next startup.",
            link: "/businessname-generator",
          },
          {
            title: "Hashtag Generator",
            desc: "Boost your social media reach! Generate trending and relevant hashtags for Instagram, TikTok, and Twitter in seconds.",
            link: "/hashtag-generator",
          },
          {
            title: "Q&A / Knowledge Assistant",
            desc: "Ask any question and instantly receive clear, accurate, and engaging answers.",
            link: "/answer-generator",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-sky-50 p-6 rounded-2xl shadow hover:shadow-lg transition border border-sky-100"
          >
            <Link to={item.link}>
              <h3 className="text-xl font-semibold mb-2 text-sky-700">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </Link>
          </motion.div>
        ))}
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="bg-sky-50 py-6 text-center text-gray-600 border-t border-sky-100"
      >
        © {new Date().getFullYear()} AutoGenie. All rights reserved. Designed &
        Developed by{" "}
        <span className="font-semibold text-sky-600">Aitezaz Ahmed</span>
      </motion.footer>
    </div>
  );
}

