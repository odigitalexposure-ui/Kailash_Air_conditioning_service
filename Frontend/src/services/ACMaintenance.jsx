import { motion, useScroll, useTransform } from "framer-motion";
import { memo, useRef } from "react";
import {
  Wrench,
  ShieldCheck,
  Clock,
  Fan,
  CheckCircle,
  PhoneCall,
} from "lucide-react";

/* ---------- DATA OUTSIDE COMPONENT (optimization) ---------- */

const services = [
  {
    icon: <Fan size={40} className="text-[#E8774A]" />,
    title: "AC Cleaning",
    desc: "Complete cleaning of filters, indoor unit, and outdoor condenser.",
  },
  {
    icon: <Wrench size={40} className="text-[#E8774A]" />,
    title: "Parts Inspection",
    desc: "Checking all AC components including compressor and fan motors.",
  },
  {
    icon: <ShieldCheck size={40} className="text-[#E8774A]" />,
    title: "Gas Pressure Check",
    desc: "Ensuring correct refrigerant level for efficient cooling.",
  },
  {
    icon: <Clock size={40} className="text-[#E8774A]" />,
    title: "Performance Testing",
    desc: "Testing AC cooling efficiency and temperature control.",
  },
  {
    icon: <CheckCircle size={40} className="text-[#E8774A]" />,
    title: "Preventive Maintenance",
    desc: "Prevent issues before they become expensive repairs.",
  },
  {
    icon: <ShieldCheck size={40} className="text-[#E8774A]" />,
    title: "Priority Service",
    desc: "AMC customers receive faster service and priority support.",
  },
];

const steps = [
  "Inspection",
  "Cleaning",
  "Repair if needed",
  "Performance Testing",
];

/* ---------- COMPONENT ---------- */

const ACMaintenance = () => {
  const processRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start 80%", "end 20%"],
  });

  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative h-[75vh]  flex items-center justify-center">

        <img
          src="/ac1.jpg"
          alt="AC Maintenance"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#1E3A5F]/70"></div>

        <div className="relative text-center text-white px-6 max-w-3xl">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold"
          >
            AC Annual Maintenance Service
          </motion.h1>

          <p className="mt-6 text-lg text-gray-200">
            Keep your air conditioning system running smoothly all year
            with our professional Annual Maintenance Contract (AMC).
          </p>

          <button className="mt-8 bg-[#E8774A] hover:bg-[#d4653e] px-8 py-3 rounded-full flex items-center gap-2 mx-auto">
            <PhoneCall size={18} />
            Book AMC Service
          </button>

        </div>
      </section>

      {/* WHAT IS AMC */}
      <section className="py-20 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] text-center">
          What is AC Annual Maintenance?
        </h2>

        <p className="text-gray-600 mt-6 text-center max-w-3xl mx-auto">
          An Annual Maintenance Contract (AMC) ensures that your air
          conditioning system receives regular servicing and preventive
          maintenance throughout the year. This helps maintain optimal
          cooling performance, reduces unexpected breakdowns, and
          increases the lifespan of your AC system.
        </p>

      </section>

      {/* SERVICES INCLUDED */}
      <section className="bg-gray-50 py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3A5F]">
            What's Included in AMC
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

            {services.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-xl shadow-md text-center"
              >
                {item.icon}

                <h3 className="mt-4 font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* BENEFITS */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <img
          src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1200"
          alt="AC Technician"
          className="rounded-xl shadow-lg"
        />

        <div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F]">
            Benefits of AC Annual Maintenance
          </h2>

          <ul className="mt-8 space-y-4 text-gray-700">
            <li>✔ Improved cooling performance</li>
            <li>✔ Lower electricity bills</li>
            <li>✔ Longer AC lifespan</li>
            <li>✔ Reduced risk of sudden breakdowns</li>
            <li>✔ Better air quality</li>
            <li>✔ Priority service support</li>
          </ul>

        </div>

      </section>

      {/* SERVICE PROCESS WITH ANIMATED LINE */}
      <section ref={processRef} className="bg-gray-50 py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3A5F]">
            Our Maintenance Process
          </h2>

          <div className="relative mt-20">

            {/* background line */}
            <div className="absolute top-7 left-0 w-full h-[4px] bg-gray-300 rounded"></div>

            {/* animated progress line */}
            <motion.div
              style={{ width: lineWidth }}
              className="absolute top-7 left-0 h-[4px] bg-[#E8774A] rounded"
            />

            <div className="grid md:grid-cols-4 gap-10 relative z-10 text-center">

              {steps.map((step, i) => (

                <div key={i}>

                  <div className="w-14 h-14 flex items-center justify-center bg-[#E8774A] text-white rounded-full mx-auto text-lg font-bold">
                    {i + 1}
                  </div>

                  <h3 className="mt-4 font-semibold">
                    {step}
                  </h3>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#1E3A5F] text-white py-16 text-center px-6">

        <h2 className="text-3xl font-bold">
          Book Your AC Annual Maintenance Today
        </h2>

        <p className="mt-4 text-gray-200">
          Keep your AC running efficiently throughout the year with
          Kailash Air-conditioning Co.'s AMC service.
        </p>

        <button className="mt-8 bg-[#E8774A] hover:bg-[#d4653e] px-10 py-3 rounded-full">
          Call 8617781293
        </button>

      </section>

    </div>
  );
};

export default memo(ACMaintenance);