import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">

      {/* BACKGROUND IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1920"
        alt="service"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#1E3A5F]/70"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 text-white">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight max-w-xl"
        >
          Fast Appliance
          <br />
          Repair Services
          <br />
          Nearby
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg max-w-lg text-gray-200"
        >
          Expert repair for Air Conditioners, Refrigerators,
          Washing Machines, and Microwave Ovens.
          22 years of trusted service.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex gap-4"
        >
          <a href="tel:8617781293" className="flex items-center gap-2 bg-[#E8774A] hover:bg-[#d8653d] px-6 py-3 rounded-full font-medium">
            <PhoneCall size={18} />
            Call Now
          </a>
          <Link to="/ac_repair">
          <button className="border border-white px-6 py-3 rounded-full">
            Our Services
          </button>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;