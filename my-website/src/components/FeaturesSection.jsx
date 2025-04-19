import { motion } from "framer-motion";
import { Lightbulb, Rocket, Shield } from "lucide-react";

const features = [
  {
    icon: <Lightbulb className="w-8 h-8 text-indigo-600" />,
    title: "Innovative Ideas",
    description: "Creative solutions tailored to your needs.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-indigo-600" />,
    title: "Fast Performance",
    description: "Optimized for speed and efficiency.",
  },
  {
    icon: <Shield className="w-8 h-8 text-indigo-600" />,
    title: "Secure Systems",
    description: "Built with industry-standard security practices.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-20 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-100 p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
