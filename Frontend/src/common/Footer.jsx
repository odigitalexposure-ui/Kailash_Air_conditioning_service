import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "/logo.jpeg"; // <-- Replace this with your logo path

const Footer = () => {
  return (
    <footer className="bg-[#1E3A5F] text-white pt-20 pb-10 relative overflow-hidden">

      {/* Gradient Glow */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-[#E8774A]/30 blur-[140px]" />
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-blue-400/20 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid md:grid-cols-4 gap-14">

          {/* COMPANY */}
          <div className="flex flex-col items-start">

            {/* Logo Image */}
            <Link to="/" className="mb-4">
              <img src={logo} alt="Kailash AC Logo" className="h-16 w-auto" />
            </Link>

            <p className="mt-2 text-gray-300 text-sm leading-relaxed">
              Providing professional repair and maintenance services for
              Air Conditioners, Refrigerators, Washing Machines, and
              Microwaves for over 22 years.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-6">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.2 }}
                  className="
                    w-10 h-10
                    rounded-full
                    bg-white/10
                    flex items-center justify-center
                    cursor-pointer
                    hover:bg-[#E8774A]
                    transition
                  "
                >
                  <Icon size={18} />
                </motion.div>
              ))}
            </div>

          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Our Services</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {[
                "AC Repair Service",
                "Washing Machine Repair",
                "Refrigerator Repair",
                "Microwave Repair",
                "AC Installation",
                "Annual Maintenance",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 hover:text-white transition cursor-pointer">
                  <ArrowRight size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 hover:text-white transition"
                  >
                    <ArrowRight size={14} />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Info</h3>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex gap-3">
                <Phone size={18} className="text-[#E8774A]" />
                <span>
                  8617781293 <br />
                  9830620528
                </span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-[#E8774A]" />
                <span>blaha6446@gmail.com </span>
              </li>
              <li className="flex gap-3">
                <MapPin size={18} className="text-[#E8774A]" />
                <span>
                  33/A, Lalin Sarani, Serampore, Hooghly, West Bengal
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/20 mt-16 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Kailash Air-conditioning Co.
          Design and Developed by Digital Exposure Online Service
        </div>

      </div>
    </footer>
  );
};

export default Footer;