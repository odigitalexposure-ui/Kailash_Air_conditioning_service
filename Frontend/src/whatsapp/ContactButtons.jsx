import { FaWhatsapp, FaPhone } from "react-icons/fa";

const ContactButtons = () => {

  const phone = "918617781293"; // include country code

  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col items-center gap-3">

      {/* CALL BUTTON */}

      <a
        href={`tel:${phone}`}
        className="
        bg-blue-500 hover:bg-blue-600
        text-white p-4 rounded-full
        shadow-lg hover:scale-110
        transition duration-300"
      >
        <FaPhone size={26} />
      </a>

      {/* WHATSAPP BUTTON */}

      <a
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
        bg-green-500 hover:bg-green-600
        text-white p-4 rounded-full
        shadow-lg hover:scale-110
        transition duration-300"
      >
        <FaWhatsapp size={30} />
      </a>

    </div>
  );
};

export default ContactButtons;