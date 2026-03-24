import { motion } from "framer-motion";
import { Phone, Search, Wrench, Settings, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Phone,
    title: "Contact Us",
    desc: "Call or WhatsApp us to schedule your service."
  },
  {
    icon: Search,
    title: "Inspection",
    desc: "Our technician visits and inspects the issue."
  },
  {
    icon: Wrench,
    title: "Repair Service",
    desc: "Professional repair using modern tools."
  },
  {
    icon: Settings,
    title: "Testing",
    desc: "Complete testing to ensure proper working."
  },
  {
    icon: CheckCircle,
    title: "Completed",
    desc: "Final quality check and customer satisfaction."
  }
];

const ServiceProcess = () => {
  return (
    <section className="pb-15 pt-10 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-4xl font-bold text-[#1E3A5F]"
        >
          Our Service Process
        </motion.h2>

        <p className="text-center text-gray-600 mt-3">
          Simple, fast and professional workflow
        </p>

        <div className="relative mt-24">

          {/* Animated Desktop Line */}

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5 }}
            className="
            hidden md:block
            absolute
            top-10
            left-0
            h-[4px]
            bg-gradient-to-r
            from-[#E8774A]
            via-orange-400
            to-[#E8774A]
            rounded-full
            "
          />

          {/* Mobile Vertical Line */}

          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5 }}
            className="
            md:hidden
            absolute
            left-8
            top-0
            w-[4px]
            bg-gradient-to-b
            from-[#E8774A]
            via-orange-400
            to-[#E8774A]
            rounded-full
            "
          />

          {/* Steps */}

          <div className="grid md:grid-cols-5 gap-14">

            {steps.map((step, i) => {
              const Icon = step.icon;

              return (

                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.25 }}
                  className="relative text-center flex md:block gap-6 md:gap-0 group"
                >

                  {/* Step Number */}

                  <span className="
                  absolute
                  -top-8
                  left-1/2
                  -translate-x-1/2
                  hidden md:block
                  text-xs
                  text-gray-400
                  font-bold
                  ">
                    0{i + 1}
                  </span>

                  {/* Icon Circle */}

                  <div className="
                  relative z-10
                  w-20 h-20
                  rounded-full
                  bg-white
                  border-4
                  border-[#E8774A]
                  flex items-center justify-center
                  mx-auto
                  shadow-lg
                  group-hover:shadow-orange-300
                  transition
                  ">

                    {/* Pulse Animation */}

                    <span className="
                    absolute
                    w-full
                    h-full
                    rounded-full
                    bg-[#E8774A]/20
                    animate-ping
                    opacity-60
                    "
                    />

                    <Icon className="text-[#E8774A] relative z-10" size={30} />

                  </div>

                  {/* Text */}

                  <div className="md:mt-6">

                    <h3 className="font-semibold text-lg text-[#1E3A5F]">
                      {step.title}
                    </h3>

                    <p className="text-gray-600 text-sm mt-2 max-w-[220px] mx-auto">
                      {step.desc}
                    </p>

                  </div>

                </motion.div>

              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default ServiceProcess;