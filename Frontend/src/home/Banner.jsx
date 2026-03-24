import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Maximize2 } from "lucide-react";

const Banner = () => {
    const [open, setOpen] = useState(false);

    return (
        <section className="w-full bg-gradient-to-b from-white to-purple-50 py-16">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-10 px-4"
            >
                <h2 className="text-2xl md:text-4xl font-extrabold text-purple-700">
                    Trusted Appliance & Air Conditioning Services
                </h2>

                <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
                    Kailash Air-conditioning Co. has been providing reliable repair,
                    installation, and maintenance services for Air Conditioners,
                    Refrigerators, Washing Machines, and Microwave Ovens for over
                    22 years.
                </p>
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT → IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    onClick={() => setOpen(true)}
                    className="cursor-zoom-in group relative"
                >
                    <div className="overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-[0_20px_60px_rgba(168,85,247,0.4)] transition duration-500">

                        <img
                            src="/banner/banner.jpeg"
                            alt="Kailash Air-conditioning Services"
                            className="w-full h-auto md:h-[350px] object-contain md:object-cover group-hover:scale-110 transition duration-700 ease-out"
                        />

                    </div>

                    <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md">
                        <span>View Full</span>
                        <Maximize2 size={14} />
                    </div>

                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-2xl">
                        <p className="text-white font-semibold text-sm flex items-center gap-2">
                            Click to View Full Banner
                            <Maximize2 size={16} />
                        </p>
                    </div>
                </motion.div>

                {/* RIGHT → CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-purple-700 leading-tight">
                        Kailash{" "}
                        <span className="text-yellow-400">Air-conditioning Co.</span>
                    </h2>

                    <p className="text-gray-600 mt-4 text-lg">
                        Specialist in Package Unit Air Conditioners, Ductable AC,
                        Cassette AC, and Chiller systems. We also provide expert
                        repair and maintenance services for Refrigerators,
                        Microwave Ovens, and Washing Machines. Our team delivers
                        professional yearly AC maintenance and reliable appliance
                        servicing with more than 22 years of experience.
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center justify-center">

                        <Link to="/contact">
                            <button className="px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold shadow-lg hover:bg-yellow-300 hover:scale-105 transition">
                                Contact Us
                            </button>
                        </Link>

                        <Link to="/gallery">
                            <button className="px-6 py-3 rounded-xl border border-purple-400 text-purple-700 hover:bg-purple-100 transition">
                                View Our Work
                            </button>
                        </Link>

                    </div>
                </motion.div>

            </div>

            {/* FULLSCREEN MODAL */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                    >
                        <motion.div
                            className="relative max-w-6xl w-full"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ duration: 0.4 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-1.5 right-2 text-white hover:text-yellow-400"
                            >
                                <Maximize2 size={28} />
                            </button>

                            <img
                                src="/banner/banner.jpeg"
                                alt="Full Banner"
                                className="w-full max-h-[90vh] object-contain rounded-xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    );
};

export default Banner;