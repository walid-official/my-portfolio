import { useRef } from "react";
import contactImg from "../../assets/images/world.png";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zkobzwh",
        "template_kvl3fu6",
        form.current,
        "n9eOVgGeK1V5CpTT0"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Failed to send the email. Please try again later.");
        }
      );
  };

  return (
    <div className="overflow-x-hidden">
      <div className="pt-20">
        <div className="boxShadow  lg:w-[30%] md:w-[40%] sm:w-[80%] border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 rounded-full mx-auto p-6">
          <h2 className="font-bold text-4xl text-center text-black">
            Get In Touch
          </h2>
        </div>
      </div>
      <div className="hero min-h-screen">
        <div className="hero-content text-black flex-col lg:flex-row-reverse">
          <div className="w-[55%] flex justify-center items-center">
            <motion.img
              className="w-[55%]"
              animate={{
                rotate: 360, // Rotation in degrees
              }}
              transition={{
                repeat: Infinity, // Repeat infinitely
                repeatType: "loop", // Loop the animation
                duration: 16, // Adjust the speed (in seconds)
                ease: "linear", // Smooth animation
              }}
              src={contactImg}
              alt=""
            />
          </div>
          <div className="card boxShadow   w-full max-w-lg shrink-0 shadow-2xl">
            <form ref={form} onSubmit={sendEmail} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Name"
                  name="from_name"
                  className="boxShadow p-4 rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="email"
                  name="from_name"
                  placeholder="Email"
                  className="boxShadow  p-4 rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Message</span>
                </label>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Message"
                  className="boxShadow  p-6 pb-14 rounded-md"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="boxShadow px-10 py-4 rounded-full text-black shadow-2xl">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
