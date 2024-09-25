/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

import Logo from '/public/images/logo.png'

export default function Navigation() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => { setIsOpen(!isOpen); }

    return (
        <nav className="grid grid-cols-2 grid-rows-1 gap-1 p-5 bg-backgroundColour">
            <div className="flex mt-5 z-20 sm:top-10 items-center justify-center text-center lg:ml-20">
                <Image
                    src={Logo}
                    alt="FH Designs Logo"
                    className="mr-2"
                    width={50}
                    height={50}
                />
                <p className="text-xl md:text-2xl  font-FiraSans-Bold text-textColour hover:text-accentColour">
                    FH Designs
                </p>
            </div>
            <div className=" hidden md:flex items-center justify-center text-center lg:mr-28 ">
                <ul className="flex items-center justify-center font-FiraSans-Medium text-lg">
                    <li className="mr-5">
                        <a href="#about" className="text-textColour hover:text-accentColour transition duration-300 ease-in-out">About</a>
                    </li>
                    <li className="mr-5">
                        <a href="#services" className="text-textColour hover:text-accentColour transition duration-300 ease-in-out">Services</a>
                    </li>
                    <li className="mr-5">
                        <a href="#projects" className="text-textColour hover:text-accentColour transition duration-300 ease-in-out">Projects</a>
                    </li>
                    <li className="mr-5">
                        <a href="#contact-me" 
                        className="flex text-textColour bg-SecondaryColour hover:bg-accentColourGR hover:text-SecondaryColour rounded-md transition duration-300 ease-in-out text-wrap pl-6 pr-6 pt-2 pb-2">Contact Me</a>
                    </li>
                </ul>
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
                <button
                    className="text-3xl text-textColour"
                    onClick={toggleMenu}
                >
                    {isOpen ? <IoClose /> : <RxHamburgerMenu />}
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden z-20 flex flex-col items-center justify-center fixed top-0 left-0 w-full h-full bg-backgroundColour text-2xl">
                    <nav className="flex flex-col items-center text-center mt-20">
                        <ul>
                            <li className="mt-10">
                                <a href="#about" className="text-textColour hover:text-accentColour transition duration-300 ease-in-out" onClick={toggleMenu}>
                                    About
                                </a>
                            </li>
                            <li className="mt-10">
                                <a href="#services" className="text-textColour hover:text-accentColour transition duration-300 ease-in-out" onClick={toggleMenu}>
                                    Services
                                </a>
                            </li>
                            <li className="mt-10">
                                <a href="#projects" className="text-textColour hover:text-accentColour transition duration-300 ease-in-out" onClick={toggleMenu}>
                                    Projects
                                </a>
                            </li>
                            <li className="mt-10">
                                <a href="#contact-me" className="text-textColour hover:text-accentColour transition duration-300 ease-in-out" onClick={toggleMenu}>
                                    Contact Me
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </nav>
    )
}