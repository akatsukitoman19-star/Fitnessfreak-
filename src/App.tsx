import { useState } from "react";
import { AnimatePresence } from "motion/react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Trainers from "./components/Trainers";
import Membership from "./components/Membership";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] font-sans text-slate-800 antialiased overflow-x-hidden selection:bg-pink-150 selection:text-pink-900">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        ) : (
          <div key="main-site" className="flex flex-col min-h-screen">
            {/* Sticky Translucent Header area */}
            <Navbar />

            {/* Core Sections Stack */}
            <main className="flex-grow">
              <Hero />
              <About />
              <Services />
              <Trainers />
              <Membership />
              <Testimonials />
              <Gallery />
              <Contact />
            </main>

            {/* Footnote details & copyrights */}
            <Footer />

            {/* Floating Widgets stack */}
            <WhatsAppButton />
            <BackToTop />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
