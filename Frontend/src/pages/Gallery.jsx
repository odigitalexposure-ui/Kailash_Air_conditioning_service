import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

const Gallery = () => {
  const images = [
    { src: "/images/gallery1.jpg", alt: "AC Repair" },
    { src: "/images/gallery2.jpg", alt: "Washing Machine Repair" },
    { src: "/images/gallery3.jpg", alt: "Refrigerator Repair" },
    { src: "/images/gallery4.jpg", alt: "Microwave Repair" },
    { src: "/images/gallery5.jpg", alt: "AC Installation" },
    { src: "/images/gallery6.jpg", alt: "Annual Maintenance" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-20 bg-[#F9F5F2] relative overflow-hidden">
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
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
            onClick={() => setSelectedImage(img.src)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay with arrow */}
            <div className="absolute inset-0 bg-[#E8774A]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight size={32} className="text-white" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-5 right-5 text-white p-2 rounded-full hover:bg-[#E8774A] transition"
          >
            <X size={28} />
          </button>
          <motion.img
            src={selectedImage}
            alt="Full View"
            className="max-h-[90vh] max-w-full rounded-lg shadow-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;