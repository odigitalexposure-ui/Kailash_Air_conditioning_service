import { motion } from "framer-motion";
import { memo, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import {
  Refrigerator,
  Wrench,
  ShieldCheck,
  Clock,
  Snowflake,
  AlertTriangle,
  CheckCircle,
  PhoneCall,
  Settings,
} from "lucide-react";
import BrandsSlider from "./BrandsSlider";

const problems = [
  {
    icon: <Snowflake size={40} className="text-[#E8774A]" />,
    title: "Not Cooling Properly",
    desc: "Refrigerator failing to maintain correct temperature."
  },
  {
    icon: <AlertTriangle size={40} className="text-[#E8774A]" />,
    title: "Gas Leakage",
    desc: "Refrigerant gas leakage causing cooling issues."
  },
  {
    icon: <Settings size={40} className="text-[#E8774A]" />,
    title: "Compressor Failure",
    desc: "Compressor malfunction causing the fridge to stop cooling."
  },
  {
    icon: <Clock size={40} className="text-[#E8774A]" />,
    title: "Excess Ice Build-up",
    desc: "Ice forming in freezer affecting performance."
  }
];

const services = [
  "Refrigerator Gas Refilling",
  "Compressor Repair & Replacement",
  "Thermostat Repair",
  "Cooling System Inspection",
  "Door Seal Replacement",
  "Deep Cleaning & Maintenance"
];

const steps = [
  "Inspection",
  "Diagnosis",
  "Repair / Replacement",
  "Final Testing"
];

const RefrigeratorRepair = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"]
  });

  const lineWidth = useTransform(scrollYProgress, [0,1], ["0%","100%"]);

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative h-[75vh] flex items-center justify-center">

        <img
          src="https://images.unsplash.com/photo-1581579188871-45ea61f2a96e?q=80&w=1920&auto=format"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Refrigerator Repair"
        />

        <div className="absolute inset-0 bg-[#1E3A5F]/70"></div>

        <div className="relative text-center text-white px-6 max-w-3xl">

          <motion.h1
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.6}}
            className="text-4xl md:text-6xl font-bold"
          >
            Refrigerator Repair Service
          </motion.h1>

          <p className="mt-6 text-gray-200">
            Expert refrigerator repair and maintenance services
            to keep your appliances running efficiently.
          </p>

          <button className="mt-8 bg-[#E8774A] hover:bg-[#d8653d] px-8 py-3 rounded-full flex items-center gap-2 mx-auto">
            <PhoneCall size={18}/>
            Call Now
          </button>

        </div>

      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F]">
          Professional Refrigerator Repair
        </h2>

        <p className="text-gray-600 mt-6">
          Kailash Air-conditioning Co. provides reliable refrigerator repair
          services for residential and commercial customers. With over
          22 years of experience, our technicians diagnose problems
          quickly and provide efficient solutions to restore cooling
          performance.
        </p>

      </section>

      {/* COMMON PROBLEMS */}
      <section className="bg-gray-50 py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3A5F]">
            Common Refrigerator Problems
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">

            {problems.map((item,i)=>(
              <motion.div
                key={i}
                whileHover={{y:-8}}
                className="bg-white p-8 rounded-xl shadow text-center"
              >

                {item.icon}

                <h3 className="mt-4 font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3A5F]">
          Refrigerator Repair Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {services.map((service,i)=>(
            <div
              key={i}
              className="flex items-start gap-4 p-6 bg-white rounded-xl shadow"
            >

              <CheckCircle className="text-[#E8774A]" size={28}/>

              <p className="text-gray-700 font-medium">
                {service}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* PROCESS */}
      <section ref={ref} className="bg-gray-50 py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3A5F]">
            Our Repair Process
          </h2>

          <div className="relative mt-20">

            <div className="absolute top-7 left-0 w-full h-[4px] bg-gray-300 rounded"></div>

            <motion.div
              style={{width:lineWidth}}
              className="absolute top-7 left-0 h-[4px] bg-[#E8774A] rounded"
            />

            <div className="grid md:grid-cols-4 gap-10 text-center relative z-10">

              {steps.map((step,i)=>(
                <div key={i}>

                  <div className="w-14 h-14 flex items-center justify-center bg-[#E8774A] text-white rounded-full mx-auto text-lg font-bold">
                    {i+1}
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

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <img
          src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1200"
          className="rounded-xl shadow"
          alt="Technician"
        />

        <div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F]">
            Why Choose Us
          </h2>

          <ul className="mt-6 space-y-4 text-gray-700">

            <li>✔ 22+ Years Experience</li>
            <li>✔ Skilled Technicians</li>
            <li>✔ Affordable Pricing</li>
            <li>✔ Genuine Spare Parts</li>
            <li>✔ Quick Service</li>

          </ul>

        </div>

      </section>

      {/* BRANDS */}
      <section className="bg-gray-50 py-16 text-center">

        <h2 className="text-3xl font-bold text-[#1E3A5F]">
          Brands We Service
        </h2>

        {/* <p className="text-gray-600 mt-4">
          LG • Samsung • Whirlpool • Godrej • Haier • Voltas
        </p> */}
        <BrandsSlider/>

      </section>

      {/* CTA */}
      <section className="bg-[#1E3A5F] text-white py-16 text-center">

        <h2 className="text-3xl font-bold">
          Need Refrigerator Repair?
        </h2>

        <p className="mt-4 text-gray-200">
          Contact Kailash Air-conditioning Co. for quick
          and reliable refrigerator repair services.
        </p>

        <button className="mt-8 bg-[#E8774A] px-10 py-3 rounded-full">
          Call 8617781293
        </button>

      </section>

    </div>
  );
};

export default memo(RefrigeratorRepair);