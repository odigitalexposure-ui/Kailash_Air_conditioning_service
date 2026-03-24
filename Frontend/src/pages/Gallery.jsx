import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Play } from "lucide-react";

const Gallery = () => {
  const media = [
    { type: "image", src: "/Gallery/i1.jpeg", alt: "AC Repair" },
    { type: "image", src: "/Gallery/i2.jpeg", alt: "Washing Machine Repair" },
    { type: "image", src: "/Gallery/i3.jpeg", alt: "Refrigerator Repair" },
    { type: "image", src: "/Gallery/i4.jpeg", alt: "Microwave Repair" },
    { type: "image", src: "/Gallery/i5.jpeg", alt: "AC Installation" },
    { type: "image", src: "/Gallery/i6.jpeg", alt: "Annual Maintenance" },
    { type: "image", src: "/Gallery/i7.jpeg", alt: "Annual Maintenance" },
    { type: "video", src: "/Gallery/v1.mp4", alt: "AC Repair Video" },
    { type: "video", src: "/Gallery/v2.mp4", alt: "Washing Machine Video" },
    { type: "video", src: "/Gallery/v3.mp4", alt: "Refrigerator Video" },
    { type: "video", src: "/Gallery/v4.mp4", alt: "Microwave Video" }
  ];

  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <section className="py-20 mt-20 bg-[#F9F5F2] relative overflow-hidden">
      {/* Section Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
          Our Gallery
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Explore our professional work in Air Conditioning, Refrigeration, and other services.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {media.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
            onClick={() => setSelectedMedia(item)}
          >
            {item.type === "image" ? (
              <>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Arrow overlay */}
                <div className="absolute inset-0 bg-[#E8774A]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight size={32} className="text-white" />
                </div>
              </>
            ) : (
              <>
                {/* Video thumbnail with play icon */}
                <div className="relative w-full h-64">
                  <video
                    src={item.src}
                    className="w-full h-64 object-cover"
                    muted
                    autoPlay={false}
                    loop={false}
                    controls={false}
                    preload="metadata"
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-white bg-black/20 group-hover:bg-black/30 transition">
                    <Play size={48} />
                  </div>
                </div>
              </>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-5 right-5 text-white p-2 rounded-full hover:bg-[#E8774A] transition"
            >
              <X size={28} />
            </button>

            {selectedMedia.type === "image" ? (
              <motion.img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="max-h-[90vh] max-w-full rounded-lg shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              />
            ) : (
              <motion.video
                src={selectedMedia.src}
                controls
                autoPlay
                className="max-h-[90vh] max-w-full rounded-lg shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;