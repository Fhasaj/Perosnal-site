import AboutMe from "/public/images/aboutMe.png";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="flex p-5 md:p-0 h-full items-center justify-center text-center bg-backgroundColour">
      <div className="flex flex-col sm:flex-col md:flex-row items-center justify-center">
        <div className="flex items-center justify-center text-center text-4xl font-FireSans-ExtraBold">
          <div className="w-full">
            <Image
              src={AboutMe}
              alt="Hero Image"
              className="rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-center items-center md:justify-end md:items-end text-center md:text-end h-full w-full md:w-1/2 mt-4 md:mt-0">
          <div className="w-full">
              <h1 className="text-4xl text-center md:text-end underline underline-offset-8 decoration-4 decoration-accentColour font-FireSans-ExtraBold">
                About Me
              </h1>
            <div className="flex flex-wrap mb-6 ">
              <p className="mt-4">
                I am a full-stack engineer with extensive experience helping
                companies—both large and small—reach their full potential.
                <br />
                <br />
                My passion for technology began in 2009 during an IT class,
                where I built my very first website. Since then, I’ve honed my
                skills in HTML, CSS, and JavaScript, and later expanded into
                WordPress and content management systems (CMS). Driven by
                curiosity and a desire to grow, I taught myself C++, C#, and
                advanced frameworks like ReactJS and NextJS.
                <br />
                <br />
                With my strong passion for building stunning and user-friendly
                applications, combined with years of hands-on experience, I am
                confident that I would be a perfect fit for your team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
