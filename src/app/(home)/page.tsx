import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
// import GitGraph from "./components/GitGraph";
import InitialLanding from "./components/InitialLanding";
import ProjectCardList from "../projects/components/ProjectCardList";

export default function Home() {
  return (
    <div className="max-[350px]:overflow-hidden mt-8 max-sm:mt-0">
      <InitialLanding />

      <div className="w-full flex justify-center mt-8">
        <Experience />
      </div>
      <div className="w-full flex justify-center mt-8">
        <ProjectCardList />
      </div>

      {/* <GitGraph /> */}

      <div className="w-full flex justify-center mt-12">
        <Skills />
      </div>

      <div className="w-full flex justify-center mt-12">
        <Education />
      </div>

      <div className="w-full flex justify-center mt-8" id="contact-section">
        <Contact />
      </div>
    </div>
  );
}
