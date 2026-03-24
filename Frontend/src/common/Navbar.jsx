import { useState, useRef, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "/logo.jpeg"; // <-- Replace this with your logo path

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServiceOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed w-full top-0 z-50">
      {/* NAVBAR */}
      <div className="backdrop-blur-md bg-[#1E3A5F]/20 text-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO IMAGE */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Kailash AC Logo" className="h-20 w-auto rounded-full" />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
            <Link
              to="/"
              className="relative group hover:text-[#E8774A] transition-colors duration-300"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#E8774A] group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* SERVICES DROPDOWN */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="flex items-center gap-1 relative group hover:text-[#E8774A] transition-colors duration-300"
              >
                Services
                <motion.span
                  animate={{ rotate: serviceOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} />
                </motion.span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#E8774A] group-hover:w-full transition-all duration-300"></span>
              </button>

              <AnimatePresence>
                {serviceOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-3 w-60 bg-[#F9F5F2] text-[#1E3A5F] rounded-lg shadow-xl overflow-hidden"
                  >
                    {[
                      { name: "AC Installation & Repair", link: "/ac_repair" },
                      { name: "AC Annual Maintenance", link: "/ac_maintainance" },
                      { name: "Refrigerator Repair", link: "/refrigerator-repair" },
                      { name: "Washing Machine Repair", link: "/washing-machine-repair" },
                      { name: "Microwave Oven Repair", link: "/microwave-repair" }
                    ].map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.link}
                        className="block px-4 py-3 hover:bg-[#FFD166] hover:text-[#1E3A5F] transition-colors duration-200"
                        onClick={() => setServiceOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/about"
              className="relative group hover:text-[#E8774A] transition-colors duration-300"
            >
              About
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#E8774A] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/contact"
              className="relative group hover:text-[#E8774A] transition-colors duration-300"
            >
              Contact
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#E8774A] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/gallery"
              className="relative group hover:text-[#E8774A] transition-colors duration-300"
            >
              Gallery
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#E8774A] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Phone size={18} className="text-[#FFD166]" />
            <span className="text-[#F9F5F2]">8617781293</span>

            <button className="ml-4 bg-[#E8774A] hover:bg-[#FFD166] hover:text-[#1E3A5F] px-5 py-2 rounded-full text-sm transition-colors duration-300">
              Book Service
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-[#1E3A5F]/90 text-white backdrop-blur-md"
          >
            <div className="flex flex-col items-center gap-6 py-8">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="hover:text-[#E8774A] transition-colors duration-300"
              >
                Home
              </Link>

              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="flex items-center gap-2 hover:text-[#E8774A] transition-colors duration-300"
              >
                Services <ChevronDown size={18} />
              </button>

              {serviceOpen && (
                <div className="flex flex-col gap-3 text-sm bg-[#F9F5F2] text-[#1E3A5F] rounded-lg p-2">
                  {[
                    { name: "AC Installation & Repair", link: "/ac-repair" },
                    { name: "AC Annual Maintenance", link: "/ac-maintenance" },
                    { name: "Refrigerator Repair", link: "/refrigerator-repair" },
                    { name: "Washing Machine Repair", link: "/washing-machine-repair" },
                    { name: "Microwave Oven Repair", link: "/microwave-repair" }
                  ].map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.link}
                      className="hover:bg-[#FFD166] px-2 py-1 rounded transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="hover:text-[#E8774A] transition-colors duration-300"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="hover:text-[#E8774A] transition-colors duration-300"
              >
                Contact
              </Link>

              <button className="bg-[#E8774A] hover:bg-[#FFD166] hover:text-[#1E3A5F] px-6 py-2 rounded-full transition-colors duration-300">
                Book Service
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;