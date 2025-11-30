import AboutTimeline from "./AboutTimeline";

const About = () => {
  return (
    <section id="about" className="w-[80%] py-20 mx-auto mt-36">
      <div className="w-full mx-auto grid md:grid-cols-2 gap-14">

        <div className="space-y-8">
          <h2 className="text-glow-faint text-[40px] lg-[50px] font-bold text-myyellow mb-10 w-full text-center">
            About Me
          </h2>

          <div className="glow-faint-cyan bg-bgmed/30 border-[2px] border-mycyan p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-semibold text-mycyan mb-4">Web Devolopment</h3>
            <p className="text-txt/80">
              I turn concepts into functional web experiences, currently focusing on
              frontend development using React and Tailwind CSS. I also
              have a knack for designing UI/UX — ensuring the websites I
              build are not only functional but also visually engaging.
            </p>
          </div>


          <div className="glow-faint-cyan bg-bgmed/30 border-[2px] border-mycyan p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-semibold text-mycyan mb-4">Python & Data</h3>
            <p className="text-txt/80">
              Besides that, I've worked with Python libraries for data
              cleaning and visualization, building a good base to dive into
              Machine Learning and AI in the future.
            </p>
          </div>


          <div className="glow-faint-cyan bg-bgmed/30 border-[2px] border-mycyan p-8 backdrop-blur-md shadow-xl">
            <h3 className="text-xl font-semibold text-mycyan mb-4">My Vision</h3>
            <p className="text-txt/80">
              In the long term, I aim to combine development and data to
              create solutions that connect creativity with logic. I'm
              always exploring ways to turn what I learn into something
              practical, interactive, and impactful.
            </p>
          </div>

        </div>

        <div className="pt-6 md:pt-0 md:mt-10 flex flex-col md:block">
          <div className="order-2 md:order-1 mt-24 md:mt-0">
            <h2 className=" text-glow-faint text-[30px] lg-[40px] font-bold text-myyellow mb-10 text-center">
              My Journey (2025)
            </h2>

            <AboutTimeline />
          </div>

          <div className="order-1 glow-faint-yellow md:order-2 bg-bgmed/30  border-[2px] backdrop-blur-lg border-myyellow p-6 shadow-md mt-10 md:mt-20">
            <h3 className="text-xl font-semibold text-mycyan mb-2">Current Education</h3>
            <p className="text-txt/80">
              B.Tech in Computer Science Engineering (Data Science),
              <br />
              Institute: Heritage Institute of Technology
              <br /> 2024-2028
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;