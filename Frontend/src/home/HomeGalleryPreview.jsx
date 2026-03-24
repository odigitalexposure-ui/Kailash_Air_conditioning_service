import { useState, useEffect, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const images = [
  "/Gallery/i1.jpeg",
  "/Gallery/i2.jpeg",
  "/Gallery/i3.jpeg",
  "/Gallery/i4.jpeg",
  "/Gallery/i5.jpeg",
  "/Gallery/i6.jpeg",
];

const HomeGalleryPreview = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = () => setActiveIndex(null);

  const next = () =>
    setActiveIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKey = (e) => {
      if (activeIndex === null) return;

      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  return (
    <section className="py-20 bg-gray-50 px-4">

      <div className="max-w-7xl mx-auto">

        {/* Title */}

        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3A5F]">
          Our Work Gallery
        </h2>

        <p className="text-center text-gray-600 mt-3">
          See our recent installation and repair projects
        </p>

        {/* GRID (equal sizes) */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-14">

          {images.map((img, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              onClick={() => setActiveIndex(index)}
              className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md"
            >

              <img
                src={img}
                loading="lazy"
                className="w-full h-[220px] md:h-[260px] object-cover"
              />

              {/* Overlay */}

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white">

                <Maximize2 size={28} />

                <p className="text-sm mt-2 font-medium">
                  Click to View
                </p>

              </div>

            </motion.div>

          ))}

        </div>

        {/* View More */}

        <div className="flex justify-center mt-12">

          <Link
            to="/gallery"
            className="bg-[#E8774A] text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition"
          >
            View More
          </Link>

        </div>

      </div>

      {/* LIGHTBOX */}

      <AnimatePresence>

        {activeIndex !== null && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-black/95 flex items-center justify-center"
          >

            {/* CLOSE */}

            <button
              onClick={close}
              className="absolute top-6 right-6 text-white"
            >
              <X size={32} />
            </button>

            {/* PREVIOUS */}

            <button
              onClick={prev}
              className="absolute left-6 text-white"
            >
              <ChevronLeft size={40} />
            </button>

            {/* IMAGE */}

            <motion.img
              key={images[activeIndex]}
              src={images[activeIndex]}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
            />

            {/* NEXT */}

            <button
              onClick={next}
              className="absolute right-6 text-white"
            >
              <ChevronRight size={40} />
            </button>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
};

export default memo(HomeGalleryPreview);