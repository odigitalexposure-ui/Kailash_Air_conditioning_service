import { useState, useRef, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "/logo.jpeg";

const services = [
  { name: "AC Installation & Repair", link: "/ac_repair" },
  { name: "AC Annual Maintenance", link: "/ac_maintainance" },
  { name: "Refrigerator Repair", link: "/refrigerator-repair" },
  { name: "Washing Machine Repair", link: "/washing-machine-repair" },
  { name: "Microwave Oven Repair", link: "/microwave-repair" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
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

  const closeMobileMenu = () => {
    setOpen(false);
    setMobileServiceOpen(false);
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      {/* NAVBAR */}
      <div className="bg-[#1E3A5F]/20 text-white backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-6">
          {/* LOGO */}
          <Link to="/" className="flex shrink-0 items-center">
            <img
              src={logo}
              alt="Kailash AC Logo"
              className="h-14 w-auto rounded-full sm:h-16 md:h-20"
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link
              to="/"
              className="group relative transition-colors duration-300 hover:text-[#E8774A]"
            >
              Home
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#E8774A] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* SERVICES DROPDOWN */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServiceOpen(!serviceOpen)}
                className="group relative flex items-center gap-1 transition-colors duration-300 hover:text-[#E8774A]"
              >
                Services
                <motion.span
                  animate={{ rotate: serviceOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} />
                </motion.span>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#E8774A] transition-all duration-300 group-hover:w-full"></span>
              </button>

              <AnimatePresence>
                {serviceOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-3 w-64 overflow-hidden rounded-lg bg-[#F9F5F2] text-[#1E3A5F] shadow-xl"
                  >
                    {services.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.link}
                        className="block px-4 py-3 transition-colors duration-200 hover:bg-[#FFD166] hover:text-[#1E3A5F]"
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
              className="group relative transition-colors duration-300 hover:text-[#E8774A]"
            >
              About
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#E8774A] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="/contact"
              className="group relative transition-colors duration-300 hover:text-[#E8774A]"
            >
              Contact
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#E8774A] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <Link
              to="/gallery"
              className="group relative transition-colors duration-300 hover:text-[#E8774A]"
            >
              Gallery
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#E8774A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Phone size={18} className="text-[#FFD166]" />
            <span className="text-[#F9F5F2] transition-colors duration-300 hover:text-[#FFD166]">
              8617781293
            </span>

            <a
              href="tel:8617781293"
              className="ml-2 flex items-center gap-2 rounded-full bg-[#E8774A] px-5 py-2 text-sm transition-colors duration-300 hover:bg-[#FFD166] hover:text-[#1E3A5F]"
            >
              <Phone size={18} /> Call Now
            </a>
          </div>

          {/* MOBILE RIGHT SIDE */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:8617781293"
              className="flex items-center justify-center rounded-full bg-[#E8774A] p-2.5 transition-colors duration-300 hover:bg-[#FFD166] hover:text-[#1E3A5F]"
            >
              <Phone size={18} />
            </a>

            <button
              className="flex items-center justify-center text-white"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-[#1E3A5F]/95 text-white backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col px-4 py-5">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="rounded-xl px-3 py-3 text-sm font-medium transition-colors duration-300 hover:bg-white/10 hover:text-[#E8774A]"
              >
                Home
              </Link>

              <button
                onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
                className="flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition-colors duration-300 hover:bg-white/10 hover:text-[#E8774A]"
              >
                <span>Services</span>
                <motion.span
                  animate={{ rotate: mobileServiceOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={18} />
                </motion.span>
              </button>

              <AnimatePresence>
                {mobileServiceOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-2 overflow-hidden rounded-2xl bg-[#F9F5F2] p-2 text-[#1E3A5F]"
                  >
                    <div className="flex flex-col">
                      {services.map((item, idx) => (
                        <Link
                          key={idx}
                          to={item.link}
                          onClick={closeMobileMenu}
                          className="rounded-xl px-3 py-3 text-sm transition-colors duration-200 hover:bg-[#FFD166]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                to="/about"
                onClick={closeMobileMenu}
                className="mt-2 rounded-xl px-3 py-3 text-sm font-medium transition-colors duration-300 hover:bg-white/10 hover:text-[#E8774A]"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="rounded-xl px-3 py-3 text-sm font-medium transition-colors duration-300 hover:bg-white/10 hover:text-[#E8774A]"
              >
                Contact
              </Link>

              <Link
                to="/gallery"
                onClick={closeMobileMenu}
                className="rounded-xl px-3 py-3 text-sm font-medium transition-colors duration-300 hover:bg-white/10 hover:text-[#E8774A]"
              >
                Gallery
              </Link>

              <a
                href="tel:8617781293"
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-[#E8774A] px-6 py-3 text-sm font-medium transition-colors duration-300 hover:bg-[#FFD166] hover:text-[#1E3A5F]"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;