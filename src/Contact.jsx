import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDiscord } from 'react-icons/fa';

export default function Contact() {
  const contacts = [
    {
      icon: FaGithub,
      link: "https://github.com/rupsadutta16-ai",
      text: "github.com/rupsadutta16-ai"
    },
    {
      icon: FaLinkedin,
      link: "https://linkedin.com/in/rupsa-d0706",
      text: "linkedin.com/in/rupsa-d0706"
    },
    {
      icon: FaEnvelope,
      link: "mailto:rupsadutta16@gmail.com",
      text: "rupsadutta16@gmail.com"
    },
    {
      icon: FaPhone,
      link: "tel:+918900213909",
      text: "8900 213 909"
    },
    {
      icon: FaDiscord,
      link: "https://discord.com/users/rupsa_d_0706_22675",
      text: "rupsa_d_0706_22675"
    }
  ];

  return (
    <>
      <section id="contact" className='scroll-mt-24'>
        <h2 className="text-glow-faint text-[40px] lg-[50px] font-bold text-myyellow  w-full text-center mt-36">
          Contact Me
        </h2>

        <div className="md:w-[70%] w-[80%] mx-auto flex items-center justify-center mt-6 px-4 py-12">
          <div className="flex flex-col md:flex-row gap-16 md:gap-12 items-start md:items-center">

            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className=" md:p-2">
                <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">Get in Touch</h2>
                <p className="text-lg md:text-xl font-semibold mb-4">
                  If you'd like to reach out, collaborate, or share feedback, feel free to use any of the links.
                </p>
                <p className="text-lg md:text-xl font-semibold mb-4">
                  I'm always open to conversations that lead to something meaningful.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="space-y-6 md:space-y-8">
                {contacts.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 md:gap-6">

                    <div className="glow-faint-yellow relative w-6 h-6  bg-myyellow rotate-45 flex items-center justify-center shadow-lg flex-shrink-0">
                      <contact.icon className="-rotate-45 text-bgdark text-lg" />
                    </div>


                    <a
                      href={contact.link}
                      className="text-sm md:text-base hover:text-mycyan transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}