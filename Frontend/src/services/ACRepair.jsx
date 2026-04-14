import { motion } from "framer-motion";
import { PhoneCall, Wrench, Settings, ShieldCheck } from "lucide-react";

const ACRepair = () => {
  return (
    <div className="w-full">

      {/* HERO SECTION */}
      <section className="relative h-[80vh]  flex items-center justify-center">

        <img
          src="/ac2.jpg"
          alt="AC Repair"
          className="absolute inset-0 w-full h-full object-cover object-[50%_0%]"
        />

        <div className="absolute inset-0 bg-[#1E3A5F]/70"></div>

        <div className="relative text-center text-white px-6 max-w-4xl">

          <motion.h1
            initial={{opacity:0,y:40}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.6}}
            className="text-4xl md:text-6xl font-bold"
          >
            AC Installation & Repair Services
          </motion.h1>

          <p className="mt-6 text-lg text-gray-200">
            Professional repair and installation for all types of air
            conditioning systems including Package AC, Ductable AC,
            Cassette AC, and Chiller units. Trusted service with
            over 22 years of experience.
          </p>

          <button className="mt-8 bg-[#E8774A] hover:bg-[#d8653d] px-8 py-3 rounded-full flex items-center gap-2 mx-auto">
            <PhoneCall size={18} />
            Call Now
          </button>

        </div>
      </section>

      {/* SERVICES TYPES */}
      <section className="py-20 px-6 max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3A5F]">
          Types of AC Systems We Service
        </h2>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
          Our expert technicians handle residential and commercial air
          conditioning systems. We provide installation, repair,
          maintenance, and troubleshooting services.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

          {[
            {
              title: "Package Unit AC",
              img: "https://images.unsplash.com/photo-1633412802994-5c058f151b66?q=80&w=800",
            },
            {
              title: "Ductable AC",
              img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=800",
            },
            {
              title: "Cassette AC",
              img: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=800",
            },
            {
              title: "Chiller System",
              img: "https://images.unsplash.com/photo-1581091215367-59ab6d1e9b8c?q=80&w=800",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{y:-8}}
              className="rounded-xl overflow-hidden shadow-lg bg-white"
            >

              <img
                src={item.img}
                alt={item.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="font-semibold text-lg">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  Professional installation and repair services
                  for {item.title} systems.
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICE PROCESS */}
      <section className="bg-gray-50 py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1E3A5F]">
            Our Repair Process
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-16">

            <div className="text-center">
              <Wrench className="mx-auto text-[#E8774A]" size={40} />
              <h3 className="mt-4 font-semibold">Inspection</h3>
              <p className="text-gray-600 text-sm mt-2">
                Our technicians carefully inspect your AC system
                to identify the exact problem.
              </p>
            </div>

            <div className="text-center">
              <Settings className="mx-auto text-[#E8774A]" size={40} />
              <h3 className="mt-4 font-semibold">Repair & Replacement</h3>
              <p className="text-gray-600 text-sm mt-2">
                Faulty components are repaired or replaced
                using high quality spare parts.
              </p>
            </div>

            <div className="text-center">
              <ShieldCheck className="mx-auto text-[#E8774A]" size={40} />
              <h3 className="mt-4 font-semibold">Testing</h3>
              <p className="text-gray-600 text-sm mt-2">
                After repair we test the system to ensure
                proper cooling and performance.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <img
          src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1200"
          alt="AC Technician"
          className="rounded-xl shadow-lg"
        />

        <div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F]">
            22+ Years of Trusted Service
          </h2>

          <p className="text-gray-600 mt-6">
            Kailash Air-conditioning Co. has been providing reliable
            air conditioning repair and installation services for more
            than two decades. Our technicians are trained to handle
            all major AC brands and systems.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✔ Fast and reliable repair service</li>
            <li>✔ Experienced technicians</li>
            <li>✔ Affordable pricing</li>
            <li>✔ Genuine spare parts</li>
          </ul>

        </div>

      </section>

      {/* CALL TO ACTION */}
      <section className="bg-[#1E3A5F] py-16 text-center text-white px-6">

        <h2 className="text-3xl font-bold">
          Need Immediate AC Repair?
        </h2>

        <p className="mt-4 text-gray-200">
          Contact Kailash Air-conditioning Co. today for quick and
          professional service.
        </p>

        <button className="mt-8 bg-[#E8774A] hover:bg-[#d8653d] px-10 py-3 rounded-full">
          Call 8617781293
        </button>

      </section>

    </div>
  );
};

export default ACRepair;