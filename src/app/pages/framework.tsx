import {
  FaReact,
  FaDatabase,
  FaWordpressSimple,
  FaNodeJs,
  FaPython,
} from "react-icons/fa6";
import { SiQt, SiCsharp, SiCplusplus } from "react-icons/si";

export default function Framework() {
  return (
    <section className="relative h-full bg-backgroundColour">
      <div className="relative flex flex-col text-center lg:items-start lg:justify-start lg:text-start text-white">
        <h1 className="text-4xl lg:mt-20 sm:text-center sm:justify-center lg:text-start lg:ml-80 underline underline-offset-8 decoration-4 decoration-accentColour font-FireSans-ExtraBold">
          Frameworks
        </h1>
        <p className="text-lg lg:text-start lg:ml-80 mt-4">
          I have experience with a variety of frameworks, including but not
          limited to the following.
        </p>
      </div>
      <div className="flex items-center justify-center text-center">
        <div className="grid w-full lg:mt-20 text-9xl grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4 justify-items-center">
          <div className="mt-10">
            <FaWordpressSimple className="hover:text-accentColour transition duration-300 ease-in-out" />
          </div>
          <div className="mt-10">
            <FaReact className="hover:text-accentColour transition duration-300 ease-in-out" />
          </div>
          <div className="mt-10">
            <FaNodeJs className="hover:text-accentColour transition duration-300 ease-in-out" />
          </div>
          <div className="mt-10">
            <FaDatabase className="hover:text-accentColour transition duration-300 ease-in-out" />
          </div>
          <div className="mt-10 mb-24">
            <FaPython className="hover:text-accentColour transition duration-300 ease-in-out" />
          </div>
          <div className="mt-10 mb-24">
            <SiCsharp className="hover:text-accentColour transition duration-300 ease-in-out" />
          </div>
          <div className="mt-10 mb-24">
            <SiCplusplus className="hover:text-accentColour transition duration-300 ease-in-out" />
          </div>
          <div className="mt-10 mb-24">
            <SiQt className="hover:text-accentColour transition duration-300 ease-in-out" />
          </div>
        </div>
      </div>
    </section>
  );
}