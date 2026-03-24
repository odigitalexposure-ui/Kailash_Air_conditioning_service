import { memo } from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Users,
  ShieldCheck,
  Clock,
  Phone,
  Refrigerator,
  Microwave,
  WashingMachine,
  AirVent
} from "lucide-react";

/* ---------- DATA ---------- */

const stats = [
  { number: "22+", label: "Years Experience" },
  { number: "5000+", label: "Repairs Completed" },
  { number: "1500+", label: "Happy Customers" },
  { number: "24/7", label: "Customer Support" }
];

const expertise = [
  { icon: <AirVent size={34}/>, name:"Air Conditioner Services" },
  { icon: <Refrigerator size={34}/>, name:"Refrigerator Repair" },
  { icon: <WashingMachine size={34}/>, name:"Washing Machine Repair" },
  { icon: <Microwave size={34}/>, name:"Microwave Oven Repair" }
];

const reasons = [
  {
    icon:<ShieldCheck size={36}/>,
    title:"Trusted Service",
    desc:"Over two decades of trusted appliance repair experience."
  },
  {
    icon:<Clock size={36}/>,
    title:"Quick Response",
    desc:"Fast technician response to minimize downtime."
  },
  {
    icon:<Users size={36}/>,
    title:"Expert Technicians",
    desc:"Skilled professionals trained for modern appliances."
  },
  {
    icon:<Wrench size={36}/>,
    title:"Quality Repair",
    desc:"Reliable repairs using proper tools and spare parts."
  }
];

/* ---------- COMPONENT ---------- */

const About = () => {

  return (

    <div className="w-full">

      {/* HERO */}

      <section className="relative h-[70vh] flex items-center justify-center">

        <img
          src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=2000&auto=format"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#1E3A5F]/75"/>

        <motion.div
          initial={{opacity:0,y:40}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.7}}
          className="relative text-center text-white max-w-3xl px-6"
        >

          <h1 className="text-5xl md:text-6xl font-bold">
            About Kailash Air-conditioning Co.
          </h1>

          <p className="mt-6 text-gray-200">
            Delivering professional appliance repair services
            for over 22 years with trusted expertise and
            customer satisfaction.
          </p>

        </motion.div>

      </section>

      {/* COMPANY STORY */}

      <section className="py-24 px-6 max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <motion.img
            initial={{opacity:0,x:-50}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.6}}
            viewport={{once:true}}
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format"
            className="rounded-xl shadow-lg"
          />

          <motion.div
            initial={{opacity:0,x:50}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:0.6}}
            viewport={{once:true}}
          >

            <h2 className="text-3xl font-bold text-[#1E3A5F]">
              Our Journey
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Kailash Air-conditioning Co. was established over
              22 years ago with a simple mission — provide
              reliable appliance repair services with honesty
              and technical expertise.
            </p>

            <p className="mt-4 text-gray-600">
              Over the years we have built a strong reputation
              for repairing air conditioners, refrigerators,
              washing machines and microwave ovens for
              residential and commercial clients.
            </p>

          </motion.div>

        </div>

      </section>

      {/* STATS */}

      <section className="bg-gray-50 py-20">

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-center">

          {stats.map((item,i)=>(
            <motion.div
              key={i}
              whileHover={{y:-8}}
              className="bg-white p-8 rounded-xl shadow"
            >

              <h3 className="text-4xl font-bold text-[#E8774A]">
                {item.number}
              </h3>

              <p className="mt-2 text-gray-600">
                {item.label}
              </p>

            </motion.div>
          ))}

        </div>

      </section>

      {/* EXPERTISE */}

      <section className="py-24 px-6 max-w-6xl mx-auto">

        <h2 className="text-3xl font-bold text-center text-[#1E3A5F]">
          Our Expertise
        </h2>

        <div className="grid md:grid-cols-4 gap-10 mt-16">

          {expertise.map((item,i)=>(
            <motion.div
              key={i}
              whileHover={{scale:1.05}}
              className="bg-white p-8 rounded-xl shadow text-center"
            >

              <div className="text-[#E8774A] flex justify-center">
                {item.icon}
              </div>

              <p className="mt-4 font-medium">
                {item.name}
              </p>

            </motion.div>
          ))}

        </div>

      </section>

      {/* WHY CHOOSE US */}

      <section className="bg-gray-100 py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl font-bold text-center text-[#1E3A5F]">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">

            {reasons.map((item,i)=>(
              <motion.div
                key={i}
                whileHover={{y:-10}}
                className="bg-white p-8 rounded-xl shadow"
              >

                <div className="text-[#E8774A]">
                  {item.icon}
                </div>

                <h3 className="mt-4 font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-2 text-sm">
                  {item.desc}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* TECHNICIANS */}

      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <motion.img
          initial={{opacity:0,x:-40}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.6}}
          viewport={{once:true}}
          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=1200&auto=format"
          className="rounded-xl shadow-lg"
        />

        <motion.div
          initial={{opacity:0,x:40}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:0.6}}
          viewport={{once:true}}
        >

          <h2 className="text-3xl font-bold text-[#1E3A5F]">
            Skilled Technicians
          </h2>

          <p className="mt-6 text-gray-600">
            Our technicians are experienced professionals
            trained to repair modern appliances. They
            diagnose problems accurately and perform
            efficient repairs to ensure long-lasting results.
          </p>

        </motion.div>

      </section>

      {/* CTA */}

      <section className="bg-[#1E3A5F] py-20 text-white text-center">

        <h2 className="text-3xl font-bold">
          Need Appliance Repair?
        </h2>

        <p className="mt-4 text-gray-200">
          Contact Kailash Air-conditioning Co. today
          for reliable and professional service.
        </p>

        <button className="mt-8 bg-[#E8774A] px-10 py-3 rounded-full flex items-center gap-2 mx-auto">
          <Phone size={18}/>
          Call 8617781293
        </button>

      </section>

    </div>

  );
};

export default memo(About);