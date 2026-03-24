import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { PlayCircle, X, CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#1E3A5F]">
            Why Choose <span className="text-[#E8774A]">Kailash Air-conditioning Co.</span>
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            With more than <strong>22 years of experience</strong>, Kailash
            Air-conditioning Co. has built a reputation for delivering
            professional appliance repair and air conditioning services.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#E8774A]" size={22} />
              <p>Specialist in Package AC, Ductable AC, Cassette AC, and Chiller systems.</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#E8774A]" size={22} />
              <p>Expert repair services for Refrigerators, Microwave Ovens, and Washing Machines.</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#E8774A]" size={22} />
              <p>Professional Yearly Air Conditioner Maintenance.</p>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="text-[#E8774A]" size={22} />
              <p>Trusted service provider in Serampore, Hooghly.</p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT VIDEO */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative cursor-pointer group"
          onClick={() => setOpen(true)}
        >

          <div className="overflow-hidden rounded-2xl shadow-xl">

            <video
              src="/banner/banner_vedio.mp4"
              className="w-full h-[260px] md:h-[340px] object-cover group-hover:scale-105 transition duration-500"
              playsInline
            />

          </div>

          {/* PLAY BUTTON */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 p-4 rounded-full shadow-lg group-hover:scale-110 transition">
              <PlayCircle className="text-[#E8774A]" size={40} />
            </div>
          </div>

        </motion.div>

      </div>

      {/* FULLSCREEN VIDEO */}

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >

            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >

              {/* CLOSE BUTTON */}

              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-white z-50"
              >
                <X size={32} />
              </button>

              {/* VIDEO */}

              <video
                src="/banner/banner_vedio.mp4"
                controls
                autoPlay
                className="w-full h-full object-contain"
              />

            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default WhyChooseUs;