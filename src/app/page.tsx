"use client"

import {useState, useEffect} from 'react';
import { MdArrowDropUp } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './globals.css'


//Imports of the different components and pages that 
//will be used in the app
import Navigation from './components/navigation';
import Hero from './pages/hero';
import About from './pages/about';
import Framework from './pages/framework';
import Services from './pages/services';
import Projects from './pages/projects';
//import Blog from './pages/blog';
import Contact from './pages/contact';
import Footer from './components/footer';

export default function Home() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll =() => {
      if(window.scrollY === 0){
        setScroll(false);
      }else{
        setScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <>
        <Navigation />
        <Hero />
        <About />
        <Framework />
        <Services />
        <Projects />
        {/* <Blog /> */}
        <Contact />
        <Footer />
        <ToastContainer />
      </>
      {scroll && (
        <button
        className="fixed bottom-0 right-0 m-10 text-xl text-textColour bg-SecondaryColour hover:bg-accentColourGR hover:text-SecondaryColour rounded-md transition duration-300 ease-in-out p-3"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "auto"
          });
        }}
        >
          <MdArrowDropUp />
        </button>
      )}
    </div>
  );
}
