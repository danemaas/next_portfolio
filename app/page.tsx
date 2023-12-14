import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import { ParticlesBG } from "./components/ParticlesBG";

const page = () => {
  return (
    <>
      <Header />
      <ParticlesBG />
      <main className="min-h-screen flex flex-col bg-black mt-16">
        <div className="container mx-auto py-4 px-12 z-[999]">
          <HeroSection />
          <AboutSection />
          <ProjectSection />
          <EmailSection />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default page;
