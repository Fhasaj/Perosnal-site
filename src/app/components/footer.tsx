import {
  FaGithub,
  FaUpwork,
  FaXTwitter,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="flex h-full items-center justify-center text-center bg-backgroundColour">
      <div className="grid grid-cols-1 grid-rows-2 gap-4">
        <div className="lg:mt-20">
          <p className="flex items-center justify-center text-center mt-2">
            <a
              href="https://github.com/Fhasaj"
              target="_blank"
              className="text-textColour hover:text-accentColour text-4xl"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.fiverr.com/fatlumhasaj"
              target="_blank"
              className="text-textColour hover:text-accentColour text-6xl mr-6 ml-6"
              rel="noreferrer"
            >
              <SiFiverr />
            </a>
            <a
              href="https://upwork.com/freelancers/fatlumh"
              target="_blank"
              className="text-textColour hover:text-accentColour text-4xl mr-6"
              rel="noreferrer"
            >
              <FaUpwork />
            </a>
            <a
              href="https://x.com/FByets"
              target="_blank"
              className="text-textColour hover:text-accentColour text-4xl mr-6"
              rel="noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.youtube.com/@FHByets"
              target="_blank"
              className="text-textColour hover:text-accentColour text-4xl mr-6"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.twitch.tv/techlumm"
              target="_blank"
              className="text-textColour hover:text-accentColour text-4xl "
              rel="noreferrer"
            >
              <FaTwitch />
            </a>
          </p>
        </div>
        <div className="text-lg">
          <p>&copy; 2020 - 2024 <span className="text-accentColour hover:underline">FH Designs</span> all right reserved</p>
            <p>
                Made with{" "}
                <span role="img" aria-label="heart">
                ❤️
                </span>{" "}
                by FH
            </p>
        </div>
      </div>
    </footer>
  );
}