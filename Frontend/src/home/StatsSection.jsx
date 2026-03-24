import { useEffect, useRef, useState, memo } from "react";
import { motion, useInView } from "framer-motion";
import { Wrench, Users, Clock, Award } from "lucide-react";

const stats = [
  {
    icon: Award,
    number: 22,
    suffix: "+",
    title: "Years Experience"
  },
  {
    icon: Wrench,
    number: 5000,
    suffix: "+",
    title: "Repairs Completed"
  },
  {
    icon: Users,
    number: 3000,
    suffix: "+",
    title: "Happy Customers"
  },
  {
    icon: Clock,
    number: 24,
    suffix: "/7",
    title: "Service Support"
  }
];

const CounterItem = ({ icon: Icon, number, suffix, title }) => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [count, setCount] = useState(0);

  useEffect(() => {

    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / number));

    const timer = setInterval(() => {

      start += Math.ceil(number / 60);

      if (start >= number) {
        start = number;
        clearInterval(timer);
      }

      setCount(start);

    }, stepTime);

    return () => clearInterval(timer);

  }, [isInView, number]);

  return (

    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center group"
    >

      {/* Icon */}

      <div className="
      w-20 h-20
      mx-auto
      rounded-full
      bg-[#E8774A]/10
      flex items-center justify-center
      group-hover:bg-[#E8774A]
      transition
      ">

        <Icon
          size={32}
          className="text-[#E8774A] group-hover:text-white"
        />

      </div>

      {/* Number */}

      <h3 className="text-4xl font-bold text-[#1E3A5F] mt-4">
        {count}{suffix}
      </h3>

      {/* Title */}

      <p className="text-gray-600 mt-2">
        {title}
      </p>

    </motion.div>

  );
};

const StatsSection = () => {
  return (

    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-4xl font-bold text-[#1E3A5F]"
        >
          Our Achievements
        </motion.h2>

        <p className="text-center text-gray-600 mt-3">
          Trusted by thousands of customers for appliance repair
        </p>

        <div className="
        grid
        md:grid-cols-4
        sm:grid-cols-2
        gap-12
        mt-16
        ">

          {stats.map((item, i) => (
            <CounterItem key={i} {...item} />
          ))}

        </div>

      </div>

    </section>

  );
};

export default memo(StatsSection);