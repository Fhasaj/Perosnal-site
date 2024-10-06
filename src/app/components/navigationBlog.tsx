'use strict';
'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { BiSearchAlt2 } from "react-icons/bi";

import Logo from "/public/images/logo.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="grid grid-cols-2 grid-rows-1 gap-1 p-5 bg-backgroundColour">
      <div className="grid grid-col-1 grid-row-1 mt-3 z-20 sm:top-10 items-center justify-center text-center lg:ml-12">
        <Link href="/" className="flex items-center">
          <Image
            src={Logo}
            alt="FH Designs Logo"
            className="mr-2"
            width={50}
            height={50}
          />
          <p className="text-xl md:text-2xl font-FiraSans-Bold text-textColour hover:text-accentColour">
            FH Designs
          </p>
        </Link>
      </div>

      <div className="hidden md:flex flex-col lg:flex-row items-center justify-center text-center lg:mr-28">
        <ul className="flex items-center justify-center font-FiraSans-Medium text-lg">
          <li className="mr-5 order-2 lg:order-1">
            <Link
              href="/blog"
              className="text-textColour hover:text-accentColour transition duration-300 ease-in-out"
            >
              Home
            </Link>
          </li>
          <li className="mr-5 order-2 lg:order-1">
            <Link
              href="/blog/web"
              className="text-textColour hover:text-accentColour transition duration-300 ease-in-out"
            >
              Web
            </Link>
          </li>
          <li className="mr-5 order-2 lg:order-1">
            <Link
              href="/blog/mobile"
              className="text-textColour hover:text-accentColour transition duration-300 ease-in-out"
            >
              Mobile
            </Link>
          </li>
          <li className="mr-5 order-2 lg:order-1">
            <Link
              href="/blog/application"
              className="text-textColour hover:text-accentColour transition duration-300 ease-in-out"
            >
              Application
            </Link>
          </li>
        </ul>
        <div className="order-1 lg:order-2 mt-4 lg:mt-0">
          <form action="" className="relative mx-auto w-max">
            <input
              type="search"
              placeholder="Search the blog..."
              className="peer cursor-pointer relative h-10 w-10 rounded-md bg-SecondaryColour pl-10 outline-none md:w-full md:cursor-text md:border-accentColour md:pl-12 md:pr-4 lg:w-10 lg:cursor-pointer hover:border hover:border-accentColour focus:border lg:focus:w-full lg:focus:cursor-text lg:focus:border-accentColour lg:focus:pl-14 lg:focus:pr-4 font-FiraSans-Light"
            />
            <BiSearchAlt2 className="absolute text-2xl text-center justify-center items-center md:left-3 md:top-2 lg:top-2 lg:left-5 text-textColour pointer-events-none" />
          </form>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden z-30 flex justify-between items-center w-full fixed top-0 left-0 bg-backgroundColour p-5">
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="FH Designs Logo"
            className="mr-2"
            width={50}
            height={50}
          />
          <p className="text-xl font-FiraSans-Bold text-textColour">
            FH Designs
          </p>
        </div>
        <button className="text-3xl text-textColour" onClick={toggleMenu}>
          {isOpen ? <IoClose /> : <RxHamburgerMenu />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden z-20 flex flex-col items-center justify-center fixed top-0 left-0 w-full h-full bg-backgroundColour text-2xl">
          <nav className="flex flex-col items-center text-center">
            <ul>
              <li>
                <Link
                  href="/blog"
                  className="text-textColour hover:text-accentColour transition duration-300 ease-in-out"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li className="mt-10">
                <Link
                  href="/blog/web"
                  className="text-textColour hover:text-accentColour transition duration-300 ease-in-out"
                  onClick={toggleMenu}
                >
                  Web
                </Link>
              </li>
              <li className="mt-10">
                <Link
                  href="/blog/mobile"
                  className="text-textColour hover:text-accentColour transition duration-300 ease-in-out"
                  onClick={toggleMenu}
                >
                  Mobile
                </Link>
              </li>
              <li className="mt-10">
                <Link
                  href="/blog/application"
                  className="text-textColour hover:text-accentColour transition duration-300 ease-in-out"
                  onClick={toggleMenu}
                >
                  Application
                </Link>
              </li>
              <div className="flex mt-10">
                <form action="" className="">
                  <div className="relative">
                    <input
                      type="search"
                      placeholder="Search the blog..."
                      className="h-full w-full rounded-md bg-SecondaryColour pl-8 pr-8 pt-5 pb-5 outline-none hover:border hover:border-accentColour font-FiraSans-Light"
                    />
                  </div>
                </form>
              </div>
            </ul>
          </nav>
        </div>
      )}
    </nav>
  );
}
