import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-500 text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-6">
        <h1 className="text-2xl font-bold">MyWebsite</h1>
        <ul className="flex gap-6 text-lg">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">Features</li>
          <li className="hover:text-gray-300 cursor-pointer">Pricing</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Content */}
      <div className="flex-grow flex flex-col justify-center items-center text-center px-4">
        <motion.h2 
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Transform Your Ideas into Reality
        </motion.h2>

        <motion.p 
          className="text-lg mb-8 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Build fast, modern websites with ease. Join the future of development.
        </motion.p>

        <motion.button 
          className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
}
