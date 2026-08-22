import AboutCards from "./AboutCards";
import ElectricBorder from "./ElectricBorder";
import { FaCaretRight } from "react-icons/fa";
import { useEffect } from "react";
import Splitting from "splitting";
import "splitting/dist/splitting.css";

const About = () => {
  useEffect(() => {
    Splitting({
      by: "words",
    });
  }, []);
  return (
    <section id="about" className="w-[80%] py-20 mx-auto mt-36">
      <div className="w-full mx-auto grid md:grid-cols-2 gap-14">

        <div className="space-y-8">
          <h2 className="text-glow-faint text-[40px] lg-[50px] font-bold text-myyellow mb-10 w-full text-center">
            About Me
          </h2>

          <ElectricBorder
            color="#7df9ff"
            speed={0.5}
            chaos={0.08}
            thickness={1}
            style={{ borderRadius: 16 }} className="p-6 hero-text">
            <h3 className="text-xl font-semibold text-mycyan mb-4">Web Development</h3>
            <p data-splitting className="p-text text-txt/80 text-sm">
              <div className="mb-2">
                <FaCaretRight className="inline-block mr-2 text-myyellow" />
                <span>
                  I enjoy turning ideas into functional web experiences across both frontend
                  and backend development.
                </span>
              </div>

              <div className="mb-2">
                <FaCaretRight className="inline-block mr-2 text-myyellow" />
                <span>
                  I primarily work with React, Node.js, Express.js, MongoDB, JavaScript, and
                  Tailwind CSS, building responsive user interfaces and scalable backend
                  systems.
                </span>
              </div>

              <div className="mb-2">
                <FaCaretRight className="inline-block mr-2 text-myyellow" />
                <span>
                  Whether I'm developing intuitive interfaces or implementing backend logic,
                  I enjoy solving problems through code and building complete web
                  applications.
                </span>
              </div>

              <div className="mb-2">
                <FaCaretRight className="inline-block mr-2 text-myyellow" />
                <span>
                  My focus is on writing clean, maintainable code that is practical,
                  reliable, and built to scale.
                </span>
              </div>
            </p>
          </ElectricBorder>


          <ElectricBorder
            color="#7df9ff"
            speed={0.5}
            chaos={0.08}
            thickness={1}
            style={{ borderRadius: 16 }} className="p-6 hero-text mt-20">
            <h3 className="text-xl font-semibold text-mycyan mb-4">Beyond Web Dev</h3>
            <p data-splitting className="p-text text-txt/80 text-sm">
              <div className="mb-2">
                <FaCaretRight className="inline-block mr-2 text-myyellow" />

                <span>
                  I'm also interested in emerging technologies and enjoy exploring areas beyond traditional web development.
                </span>
              </div>
              <div className="mb-2">
                <FaCaretRight className="inline-block mr-2 text-myyellow" />
                <span> I've worked on <span className="text-myyellow"> blockchain-based </span> projects during hackathons, gaining hands-on experience with decentralized application concepts, smart contract integration, and collaborative project development.</span>
              </div>


              <div className="mb-2">
                <FaCaretRight className="inline-block mr-2 text-myyellow" />
                <span>In addition, I've used Python for <span className="text-myyellow"> data preprocessing, analysis </span>and <span className="text-myyellow"> visualization </span>, giving me exposure to data-driven problem solving.</span>
              </div>


            </p>

          </ElectricBorder>



        </div>

        <div className="pt-6 md:pt-0 md:mt-10 flex flex-col md:block">
          <div className="order-2 md:order-1 mt-24 md:mt-0">
            <h2 className=" text-glow-faint text-[30px] lg-[40px] font-bold text-myyellow mb-10 text-center">
              What I Enjoy Building
            </h2>

            <AboutCards />
          </div>

          <ElectricBorder color="#facc15"
            speed={0.5}
            chaos={0.1}
            thickness={1.2}
            style={{ borderRadius: 16 }} className="order-1  md:order-2 hero-text  p-6 mt-10 md:mt-20">
            <h3 className="text-xl font-semibold text-mycyan mb-2">Current Education</h3>
            <p data-splitting className="p-text text-txt/80">
              B.Tech in Computer Science Engineering (Data Science),
              <br />
              Institute: Heritage Institute of Technology
              <br /> 2024-2028
            </p>
          </ElectricBorder>

        </div>

      </div>
    </section>
  );
};

export default About;