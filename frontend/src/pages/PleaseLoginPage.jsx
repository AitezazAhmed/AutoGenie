import { Link } from "react-router-dom";
import { Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function PleaseLoginPage() {
  return (
<div className="min-h-screen w-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-sky-500 to-purple-600 px-6">


      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-lg w-full text-center border border-white/40"
      >
        {/* Icon */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div className="bg-gradient-to-r from-sky-500 to-indigo-600 p-5 rounded-full shadow-lg">
            <Lock className="h-14 w-14 text-white" />
          </div>
        </motion.div>

        {/* Heading */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Access Locked 🔒
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
          You need to <span className="text-sky-600 font-semibold">login </span> 
          before exploring our premium services.  
          <span className="block mt-2 text-indigo-600 font-medium">
            Join us and unlock your journey 🚀
          </span>
        </p>

        {/* Buttons */}
        <div className="space-y-4">
          <Link
            to="/login"
            className="block w-full bg-gradient-to-r from-sky-600 to-indigo-600 text-white py-3 rounded-xl text-lg font-semibold shadow-lg hover:opacity-90 transition"
          >
            Login Now
          </Link>

          <Link
            to="/signup"
            className="block w-full border border-sky-600 text-sky-600 py-3 rounded-xl text-lg font-semibold hover:bg-sky-50 transition"
          >
            Create Free Account
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-6 text-sm text-gray-500">
          Secure & fast — powered by{" "}
          <span className="font-semibold text-indigo-600">AutoGenie</span>
        </p>
      </motion.div>
    </div>
  );
}

