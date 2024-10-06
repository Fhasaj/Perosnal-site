import Buttons from "../components/buttons";
import { FaUpwork } from "react-icons/fa6";
import { SiFiverr } from "react-icons/si";
import { Bounce, toast } from "react-toastify";

const EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
export default function Contact() {

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const subject = (document.getElementById("subject") as HTMLSelectElement)
      .value;
    const message = (document.getElementById("message") as HTMLTextAreaElement)
      .value;

    if (name === "" || email === "" || subject === "" || message === "") {
      toast.error("❌ Empty fields", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    } else if (!EmailRegex.test(email)) {
      toast.error(
        "Invalid email address. Please check your email and try again",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        }
      );
    }
    try {
      const Response = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          NAME: name,
          EMAIL: email,
          SUBJECT: subject,
          MESSAGE: message,
        }),
      });
      

      console.log(Response);
      
      if (Response.ok) {
        toast.success("✉️ Email was sent successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err : any) {
      toast.error("❌ Email could nto be sent. Please try again" + err, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <section id="contact-me" className="relative p-5 lg:p-0 h-full bg-backgroundColour">
      <div className="relative flex flex-col text-center lg:items-end lg:justify-end lg:text-end text-white">
        <h1 className="text-4xl lg:mt-20 sm:text-center sm:justify-center lg:text-start lg:mr-80 underline underline-offset-8 decoration-4 decoration-accentColour font-FireSans-ExtraBold">
          Contact Me
        </h1>
        <p className="text-lg lg:text-start lg:mr-80 mt-4">
          If you have any question or would like to hire me for any work then
          please fill out the form below and I will get back to you as soon as
          possible.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 justify-center items-center text-center">
          {/* Left Contact Panel  */}
          <div>
            <form id="contact-form" onSubmit={handleSubmit} className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full  px-3 mb-6 md:mb-0">
                  <input
                    className="w-full bg-SecondaryColour text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border focus:border-accentColour focus:bg-SecondaryColour focus:text-textColour placeholder:text-textColour"
                    id="name"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>
                <div className="w-full  px-3 mb-6 md:mb-0">
                  <input
                    className="w-full bg-SecondaryColour text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border focus:border-accentColour focus:bg-SecondaryColour focus:text-textColour placeholder:text-textColour"
                    id="email"
                    type="email"
                    placeholder="Email Address"
                  />
                </div>
                <div className="w-full  px-3 mb-6 md:mb-0">
                  <select
                    className="w-full bg-SecondaryColour text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border focus:border-accentColour focus:bg-SecondaryColour focus:text-textColour placeholder:text-textColour"
                    id="subject"
                  >
                    <option disabled defaultValue="">Select a subject</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="Data Mining">Data Mining</option>
                  </select>
                </div>
                <div className="w-full  px-3 mb-6 md:mb-0">
                  <textarea
                    className="w-full bg-SecondaryColour text-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border focus:border-accentColour focus:bg-SecondaryColour focus:text-textColour placeholder:text-textColour"
                    id="message"
                    placeholder="Your Message"
                  />
                </div>
                <div className="w-full  px-3 mb-6 md:mb-0">
                  <Buttons 
                  text="Send" 
                  type="submit"
                  id="submit"
                  extra="bg-SecondaryColour hover:bg-accentColourGR"
                  />
                </div>
              </div>
            </form>
          </div>

                  {/* Right Information Panel */}
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-lg">
            <div className="flex flex-wrap text-center mb-6">
              <div className=" flex flex-col w-full mb-6 md:mb-0 lg:p-20">
                <p className="">
                  If you feel more comfortable then you can email me on
                  <a 
                  href="mailto:info@fhasaj.co.uk" 
                  className="text-accentColour hover:underline"> info@fhasaj.co.uk</a>. Alternatively, you can find me on Fiverr and
                  Upwork where you can hire me through those platforms.
                </p>
                <p className="flex items-center justify-center">
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
                </p>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>
    </section>
  );
}
