import { memo, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

import {
  Microwave,
  Zap,
  Timer,
  AlertCircle,
  ShieldCheck,
  Wrench,
  Cpu,
  Phone
} from "lucide-react";

/* ---------- DATA ---------- */

const microwaveTypes = [
  {
    icon: <Microwave size={36} className="text-[#E8774A]" />,
    title: "Solo Microwave",
    desc: "Basic microwave ovens used for heating and cooking."
  },
  {
    icon: <Cpu size={36} className="text-[#E8774A]" />,
    title: "Grill Microwave",
    desc: "Microwaves with grilling functionality."
  },
  {
    icon: <Zap size={36} className="text-[#E8774A]" />,
    title: "Convection Microwave",
    desc: "Advanced microwaves used for baking and roasting."
  }
];

const problems = [
  {
    icon: <AlertCircle size={30} />,
    text: "Microwave not heating food"
  },
  {
    icon: <Timer size={30} />,
    text: "Timer or keypad not working"
  },
  {
    icon: <Zap size={30} />,
    text: "Microwave sparks inside"
  },
  {
    icon: <Wrench size={30} />,
    text: "Door switch or latch problems"
  }
];

const brands = [
  {
    name: "LG",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/20/LG_symbol.svg"
  },
  {
    name: "Samsung",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"
  },
  {
    name: "Panasonic",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Panasonic_logo.svg"
  },
  {
    name: "Whirlpool",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/66/Whirlpool_Corporation_Logo_2016.svg"
  },
  {
    name: "IFB",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/IFB_Industries_logo.svg"
  }
];

/* ---------- COMPONENT ---------- */

const MicrowaveRepair = () => {

  const brandRef = useRef(null);

  useEffect(() => {

    const ctx = gsap.context(() => {

      gsap.to(".brand-track", {
        xPercent: -50,
        repeat: -1,
        duration: 18,
        ease: "none"
      });

    }, brandRef);

    return () => ctx.revert();

  }, []);

  return (
    <div className="w-full">

      {/* HERO SPLIT */}

      <section className="py-40 bg-gray-50">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center px-6">

          <motion.div
            initial={{opacity:0,x:-40}}
            animate={{opacity:1,x:0}}
            transition={{duration:0.6}}
          >

            <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A5F]">
              Microwave Oven Repair
            </h1>

            <p className="mt-6 text-gray-600">
              Professional microwave oven repair services for
              homes and businesses. Our technicians diagnose
              and repair heating problems, control board issues,
              door switches and more.
            </p>

            <button className="mt-8 flex items-center gap-2 bg-[#E8774A] text-white px-8 py-3 rounded-full">
              <Phone size={18}/>
              Book Repair
            </button>

          </motion.div>

          <motion.img
            initial={{opacity:0,x:40}}
            animate={{opacity:1,x:0}}
            transition={{duration:0.6}}
            src="/oven.jpg"
            className="rounded-xl shadow-lg"
          />

        </div>

      </section>


      {/* MICROWAVE TYPES */}

      <section className="py-20 px-6 max-w-7xl mx-auto">

        <h2 className="text-3xl font-bold text-center text-[#1E3A5F]">
          Microwave Types We Repair
        </h2>

        <div className="grid md:grid-cols-3 gap-10 mt-14">

          {microwaveTypes.map((item,i)=>(

            <motion.div
              key={i}
              whileHover={{y:-10}}
              className="p-8 bg-white rounded-xl shadow"
            >

              {item.icon}

              <h3 className="mt-4 font-semibold text-lg">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-2 text-sm">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

      </section>


      {/* COMMON PROBLEMS */}

      <section className="bg-gray-100 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-[#1E3A5F]">
            Common Microwave Issues
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mt-14">

            {problems.map((item,i)=>(

              <div
                key={i}
                className="flex items-center gap-4 bg-white p-6 rounded-lg shadow"
              >

                <div className="text-[#E8774A]">
                  {item.icon}
                </div>

                <p className="font-medium">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* TECHNICIAN SKILLS */}

      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        <img
          src="https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?q=80&w=1200&auto=format"
          className="rounded-xl shadow"
        />

        <div>

          <h2 className="text-3xl font-bold text-[#1E3A5F]">
            Skilled Microwave Technicians
          </h2>

          <p className="mt-6 text-gray-600">
            Our technicians are trained to repair modern microwave
            systems including inverter boards, magnetron units,
            high-voltage capacitors and digital control panels.
          </p>

          <ul className="mt-6 space-y-4">

            <li className="flex gap-3">
              <ShieldCheck className="text-[#E8774A]" />
              Certified appliance technicians
            </li>

            <li className="flex gap-3">
              <ShieldCheck className="text-[#E8774A]" />
              Genuine spare parts used
            </li>

            <li className="flex gap-3">
              <ShieldCheck className="text-[#E8774A]" />
              22+ years appliance repair experience
            </li>

          </ul>

        </div>

      </section>


      {/* BRAND SLIDER */}

      {/* <section className="py-16 bg-gray-50 overflow-hidden">

        <h2 className="text-3xl font-bold text-center text-[#1E3A5F] mb-12">
          Microwave Brands We Repair
        </h2>

        <div ref={brandRef} className="overflow-hidden">

          <div className="brand-track flex gap-16 w-max">

            {[...brands,...brands].map((brand,i)=>(

              <div key={i} className="w-40 flex justify-center">

                <img
                  src={brand.img}
                  className="h-12 grayscale hover:grayscale-0 transition"
                  alt={brand.name}
                />

              </div>

            ))}

          </div>

        </div>

      </section> */}


      {/* CTA */}

      <section className="py-20 bg-[#1E3A5F] text-white text-center">

        <h2 className="text-3xl font-bold">
          Need Microwave Repair?
        </h2>

        <p className="mt-4 text-gray-200">
          Call Kailash Air-conditioning Co. today and get
          fast microwave repair at your doorstep.
        </p>

        <button className="mt-8 bg-[#E8774A] px-10 py-3 rounded-full">
          Call 8617781293
        </button>

      </section>

    </div>
  );
};

export default memo(MicrowaveRepair);