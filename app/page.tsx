import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectSection";

const page = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen flex flex-col bg-black mt-16">
        <div className="container mx-auto py-4 px-12">
          <HeroSection />
          <AboutSection />
          <ProjectSection />
        </div>
      </main>
    </>
  );
};

export default page;
