

import WordpressIMG from "/public/images/wordpress.png";
import ReactIMG from "/public/images/react.png";
import AppIMG from "/public/images/app.png";
import heliosIMG from "/public/images/helios.png";

import ServiceCard from "../components/serviceCard";

export default function Services() {
    return(

      <section 
      id="projects"
      className="relative h-full p-5 lg:p-0 bg-backgroundColour">
          <div className="relative flex flex-col text-center lg:items-end lg:justify-end lg:text-end text-white">
          <h1 className="text-4xl lg:mt-20 sm:text-center sm:justify-center lg:text-start lg:mr-80 underline underline-offset-8 decoration-4 decoration-accentColour font-FireSans-ExtraBold">
          My Services
          </h1>
          <p className="text-lg lg:text-end lg:mr-80 mt-4">
          Here are some of the services I offer to my clients however I am always open to new ideas and projects.
          </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 justify-center items-center text-center">
              <div className="col-span-1">
                <ServiceCard 
                  image={WordpressIMG}
                  title="Wordpress Development"
                  buttonText="Enquire Now"
                  description="If you're looking for a website that's both user-friendly and easy to maintain, WordPress is the perfect platform for you. I will create and manage your website, helping elevate your business to new heights."
                  link="https://www.fiverr.com/fatlumhasaj"
                  target="_blank"
                />
              </div>
              <div className="col-span-1">
                <ServiceCard 
                  image={heliosIMG}
                  title="Helios: BMS"
                  buttonText="Learn More"
                  description="Helios is your all-in-one platform for managing employees, payroll, and business operations. I’ll help you set it up and manage everything from sick days to financial data, making your business more efficient and organized."
                  link="https://app.fhasaj.co.uk"
                  target="_blank"
                />
              </div>
              <div className="col-span-1">
                <ServiceCard 
                  image={ReactIMG}
                  title="Custom React Dev"
                  buttonText="Enquire Now"
                  description="If you're looking for a website that's both user-friendly and easy to maintain, WordPress is the perfect platform for you. I will create and manage your website, helping elevate your business to new heights."
                  link="https://www.fiverr.com/fatlumhasaj"
                  target="_blank"
                />
              </div>
              <div className="col-span-1">
                <ServiceCard 
                  image={AppIMG}
                  title="Custom App Dev"
                  buttonText="Enquire Now"
                  description="If you're looking for a website that's both user-friendly and easy to maintain, WordPress is the perfect platform for you. I will create and manage your website, helping elevate your business to new heights."
                  link="https://www.fiverr.com/fatlumhasaj"
                  target="_blank"
                />
              </div>
            </div>
          </div>

      </section>

);
}