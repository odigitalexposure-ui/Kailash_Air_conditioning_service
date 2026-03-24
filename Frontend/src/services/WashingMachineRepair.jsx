import { motion, useScroll, useTransform } from "framer-motion";
import { memo, useRef, useEffect } from "react";
import gsap from "gsap";

import {
  WashingMachine,
  Wrench,
  Droplet,
  AlertTriangle,
  Clock,
  CheckCircle,
  PhoneCall,
  Settings
} from "lucide-react";

/* ---------- DATA (outside component for optimization) ---------- */

const problems = [
  {
    icon: <Droplet size={40} className="text-[#E8774A]" />,
    title: "Water Leakage",
    desc: "Washing machine leaking water during wash cycle."
  },
  {
    icon: <AlertTriangle size={40} className="text-[#E8774A]" />,
    title: "Drum Not Spinning",
    desc: "Drum not rotating properly during wash."
  },
  {
    icon: <Clock size={40} className="text-[#E8774A]" />,
    title: "Machine Not Starting",
    desc: "Power issues preventing the machine from starting."
  },
  {
    icon: <Settings size={40} className="text-[#E8774A]" />,
    title: "Drainage Problems",
    desc: "Water not draining after washing cycle."
  }
];

const services = [
  "Washing Machine Installation",
  "Drum Repair & Replacement",
  "Motor Repair",
  "Drain Pump Repair",
  "Control Panel Repair",
  "Full Machine Servicing"
];

const steps = [
  "Inspection",
  "Diagnosis",
  "Repair / Replacement",
  "Final Testing"
];

const brands = [
  { name:"LG", img:"https://upload.wikimedia.org/wikipedia/commons/2/20/LG_symbol.svg" },
  { name:"Samsung", img:"https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name:"Whirlpool", img:"https://upload.wikimedia.org/wikipedia/commons/6/66/Whirlpool_Corporation_Logo_2016.svg" },
  { name:"Bosch", img:"https://upload.wikimedia.org/wikipedia/commons/5/5f/Bosch-logo.svg" },
  { name:"IFB", img:"https://upload.wikimedia.org/wikipedia/commons/0/0e/IFB_Industries_logo.svg" }
];

/* ---------- COMPONENT ---------- */

const WashingMachineRepair = () => {

  const processRef = useRef(null);
  const brandRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start 80%", "end 20%"]
  });

  const lineWidth = useTransform(scrollYProgress,[0,1],["0%","100%"]);

  /* GSAP auto scrolling logos */

  useEffect(()=>{

    const ctx = gsap.context(()=>{
      gsap.to(".brand-track",{
        xPercent:-50,
        repeat:-1,
        duration:20,
        ease:"none"
      });
    },brandRef);

    return ()=>ctx.revert()

  },[])

  return (
    <div className="w-full">

      {/* HERO */}
      <section className="relative h-[75vh] flex items-center justify-center">

        <img
          src="https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=1920&auto=format"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Washing Machine Repair"
        />

        <div className="absolute inset-0 bg-[#1E3A5F]/70"></div>

        <div className="relative text-center text-white px-6 max-w-3xl">

          <motion.h1
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.6}}
            className="text-4xl md:text-6xl font-bold"
          >
            Washing Machine Repair Service
          </motion.h1>

          <p className="mt-6 text-gray-200">
            Reliable washing machine repair services to keep
            your laundry routine running smoothly.
          </p>

          <button className="mt-8 bg-[#E8774A] px-8 py-3 rounded-full flex items-center gap-2 mx-auto">
            <PhoneCall size={18}/>
            Call Now
          </button>

        </div>

      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 max-w-6xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F]">
          Expert Washing Machine Repair
        </h2>

        <p className="mt-6 text-gray-600">
          Kailash Air-conditioning Co. provides professional
          washing machine repair services for top load,
          front load and semi-automatic machines. Our
          trained technicians diagnose and repair problems
          quickly ensuring your appliance works efficiently.
        </p>

      </section>

      {/* COMMON PROBLEMS */}
      <section className="bg-gray-50 py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3A5F]">
            Common Washing Machine Problems
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
          Washing Machine Repair Services
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">

          {services.map((service,i)=>(
            <div
              key={i}
              className="flex items-start gap-4 bg-white p-6 rounded-xl shadow"
            >

              <CheckCircle size={28} className="text-[#E8774A]" />

              <p className="font-medium text-gray-700">
                {service}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* PROCESS */}
      <section ref={processRef} className="bg-gray-50 py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3A5F]">
            Our Repair Process
          </h2>

          <div className="relative mt-20">

            <div className="absolute top-7 left-0 w-full h-[4px] bg-gray-300 rounded"></div>

            <motion.div
              style={{width:lineWidth}}
              className="absolute top-7 left-0 h-[4px] bg-[#E8774A]"
            />

            <div className="grid md:grid-cols-4 gap-10 text-center relative z-10">

              {steps.map((step,i)=>(
                <div key={i}>

                  <div className="w-14 h-14 bg-[#E8774A] text-white flex items-center justify-center rounded-full mx-auto text-lg font-bold">
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

      {/* BRANDS WITH GSAP */}
      <section className="bg-white py-16 overflow-hidden">

        <h2 className="text-3xl font-bold text-center text-[#1E3A5F] mb-12">
          Brands We Service
        </h2>

        <div ref={brandRef} className="overflow-hidden">

          <div className="brand-track flex gap-16 w-max">

            {[...brands,...brands].map((brand,i)=>(
              <div key={i} className="w-40 flex justify-center">

                <img
                  src={brand.img}
                  alt={brand.name}
                  className="h-12 grayscale hover:grayscale-0 transition"
                />

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#1E3A5F] text-white py-16 text-center">

        <h2 className="text-3xl font-bold">
          Need Washing Machine Repair?
        </h2>

        <p className="mt-4 text-gray-200">
          Contact Kailash Air-conditioning Co.
          for reliable appliance repair service.
        </p>

        <button className="mt-8 bg-[#E8774A] px-10 py-3 rounded-full">
          Call 8617781293
        </button>

      </section>

    </div>
  );
};

export default memo(WashingMachineRepair);