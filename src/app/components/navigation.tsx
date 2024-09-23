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
            <div className="flex mt-5 z-20 items-center justify-center text-center lg:ml-20">
            < a href='#' className='flex items-center justify-items-center '>
                
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
            </a>
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
                    {/* <li className="mr-5">
                        <a href="#" className="text-textColour hover:text-accentColour transition duration-300 ease-in-out">Blog</a>
                    </li> */}
                    <li className="mr-5">
                        <a href="#contact-me" 
                        className="flex text-textColour bg-SecondaryColour hover:bg-accentColourGR hover:text-SecondaryColour rounded-md transition duration-300 ease-in-out text-wrap pl-6 pr-6 pt-2 pb-2">Contact Me</a>
                    </li>
                </ul>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden z-20 flex justify-end text-end mr-5 mt-4">
                <button
                className=" items-end justify-end text-end"
                onClick={toggleMenu}
                >
                    {isOpen ? <IoClose className="text-3xl text-textColour" /> : <RxHamburgerMenu className="text-3xl text-textColour" />}
                </button>
            </div>
            {isOpen && (
                <div className="md:hidden z-10 flex fixed inset-0 bg-backgroundColour text-xl text-textColour justify-center items-center">
                    <nav className="flex flex-col items-center text-center">
                        <a href="#about" className="pl-5 pr-5 pt-2 pb-2 w-full">
                            About
                        </a>
                        <a href="#services" className="pl-5 pr-5 pt-2 pb-2 w-full">
                            Services
                        </a>
                        <a href="#projects" className="pl-5 pr-5 pt-2 pb-2 w-full">
                            Project
                        </a>
                        {/* <a href="#blog" className="pl-5 pr-5 pt-2 pb-2 w-full">
                            Blog
                        </a> */}
                        <a href="#contact" className="pl-5 pr-5 pt-2 pb-2 w-full">
                            Contact Me
                        </a>
                    </nav>
                </div>
                )}
        </nav>
    )
}