/* eslint-disable jsx-a11y/img-redundant-alt */

import HeroME from "/public/images/hero_me.png";
import Images from "next/image";
import {
  FaGithub,
  FaUpwork,
  FaXTwitter,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";


export default function Hero() {
  return (
    <section className="flex p-5 md:p-0 h-full items-center justify-center text-center bg-backgroundColour">
      <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center">
        <div className="flex flex-wrap items-center justify-center text-center text-4xl font-FireSans-ExtraBold">
          <div className="w-full lg:w-1/2">
            <p>
              Hi I’m{" "}
              <span className="text-accentColour hover:underline">Fatlum</span>{" "}
              a Full Stack engineer with 6+ years helping big and small
              companies reach their potential.
            </p>
            <p className="flex items-center justify-center text-center mt-2">
              <a
                href="https://github.com/Fhasaj"
                target="_blank"
                className="text-textColour transition duration-300 ease-in-out hover:text-accentColour text-4xl"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.fiverr.com/fatlumhasaj"
                target="_blank"
                className="text-textColour transition duration-300 ease-in-out hover:text-accentColour text-6xl mr-6 ml-6"
                rel="noreferrer"
              >
                <SiFiverr />
              </a>
              <a
                href="https://upwork.com/freelancers/fatlumh"
                target="_blank"
                className="text-textColour transition duration-300 ease-in-out hover:text-accentColour text-4xl mr-6"
                rel="noreferrer"
              >
                <FaUpwork />
              </a>
              <a
                href="https://x.com/FByets"
                target="_blank"
                className="text-textColour transition duration-300 ease-in-out hover:text-accentColour text-4xl mr-6"
                rel="noreferrer"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.youtube.com/@FHByets"
                target="_blank"
                className="text-textColour transition duration-300 ease-in-out hover:text-accentColour text-4xl mr-6"
                rel="noreferrer"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.twitch.tv/techlumm"
                target="_blank"
                className="text-textColour transition duration-300 ease-in-out hover:text-accentColour text-4xl"
                rel="noreferrer"
              >
                <FaTwitch />
              </a>
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center h-full w-full md:w-1/2 mt-4 md:mt-0 mr-0 lg:mr-48">
          <div className="w-full max-w-lg">
            <div className="flex flex-wrap text-center mb-6">
              <Images
                src={HeroME}
                alt="Hero Image"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
