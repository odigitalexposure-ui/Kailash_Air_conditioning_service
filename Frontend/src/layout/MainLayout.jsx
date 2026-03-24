import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollToTop from "../scroll/ScrollToTop";
import PageWrapper from "../scroll/PageWrapper";
import WhatsAppButton from "../whatsapp/ContactButtons";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";


const MainLayout = () => {
  const location = useLocation();
  return (
  <div className="flex flex-col min-h-screen">
    <ScrollToTop />
    <Navbar />

    <main className="flex-grow w-full max-w-full mx-auto">
      <AnimatePresence mode="wait">
        <PageWrapper key={location.pathname}>
          <Outlet />
        </PageWrapper>
      </AnimatePresence>
    </main>

    <WhatsAppButton />
    <Footer />
  </div>
);
};

export default MainLayout;