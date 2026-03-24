import { useEffect, useRef } from "react";
import gsap from "gsap";

const brands = [
  {
    name: "LG",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/20/LG_symbol.svg",
  },
  {
    name: "Samsung",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
  },
  {
    name: "Whirlpool",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/66/Whirlpool_Corporation_Logo_2016.svg",
  },
  {
    name: "Godrej",
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Godrej_Logo.svg",
  },
  {
    name: "Haier",
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Haier_logo.svg",
  },
  {
    name: "Voltas",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Voltas_logo.svg",
  },
];

const BrandsSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".brand-track", {
        xPercent: -50,
        ease: "none",
        duration: 20,
        repeat: -1,
      });
    }, sliderRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-gray-50 py-16 overflow-hidden">

      <h2 className="text-3xl font-bold text-center text-[#1E3A5F] mb-12">
        Brands We Service
      </h2>

      <div ref={sliderRef} className="relative w-full overflow-hidden">

        <div className="brand-track flex gap-16 w-max">

          {[...brands, ...brands].map((brand, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-40 h-20"
            >

              <img
                src={brand.img}
                alt={brand.name}
                className="h-12 object-contain grayscale hover:grayscale-0 transition"
              />

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default BrandsSlider;