import { memo, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = useCallback((e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const phone = "91 8617781293"; // your WhatsApp number with country code

    const text = `Hello, my name is ${form.name}.
Email: ${form.email}
Message: ${form.message}`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  }, [form]);

  return (
    <div className="w-full overflow-hidden pt-15">

      {/* 🔥 HERO */}
      <section className="py-16 bg-gradient-to-r from-[#1E3A5F] via-[#E8774A] to-[#FFD166] text-white text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">
          Contact Us
        </h1>
        <p className="text-gray-100/90 text-lg">Get in touch with Aparna Sports Academy</p>
      </section>

      {/* 🧠 CONTACT SECTION */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-10">

          {/* 📩 FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full mb-4 p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full mb-4 p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary focus:outline-none transition"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              className="w-full mb-4 p-4 rounded-xl border border-gray-300 h-36 focus:ring-2 focus:ring-primary focus:outline-none transition"
              required
            />

            <button
              className="
    relative overflow-hidden
    px-8 py-3 rounded-xl
    font-semibold text-white
    bg-gradient-to-r from-[#ff6a00] via-[#ff3d00] to-[#ff0080]
    shadow-lg shadow-pink-500/40
    hover:shadow-2xl hover:shadow-pink-500/60
    transform hover:scale-105
    transition-all duration-300 ease-in-out
  "
            >
              Send Message
            </button>
          </motion.form>

          {/* 📍 INFO + MAP */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >

            {/* Info */}
            <div className="mb-6 space-y-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200">
              <div className="flex items-center gap-4 text-gray-800">
                <MapPin className="text-primary" size={20} />
                <p className="text-sm">
                  33/A, Lalin Sarani, Serampore, Hooghly, West Bengal
                </p>
              </div>

              <div className="flex items-center gap-4 text-gray-800">
                <Phone className="text-primary" size={20} />
                <p className="text-sm">
                  +91 8617781293, <br />
                  +91 9830620528
                </p>
              </div>

              {/* <div className="flex items-center gap-4 text-gray-800">
                <Mail className="text-primary" size={20} />
                <p className="text-sm">info@aparnasports.com</p>
              </div> */}
            </div>

            {/* Map */}
            <div className="w-full h-[300px] rounded-2xl overflow-hidden shadow-2xl mt-6 border border-gray-200">
              <iframe
  title="Location"
  src="https://www.google.com/maps?q=33A+Lalin+Sarani+Serampore+Hooghly+West+Bengal&output=embed"
  className="w-full h-full border-0"
  loading="lazy"
/>
            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default memo(Contact);