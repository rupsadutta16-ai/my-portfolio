import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import profilepic from './assets/profilepic.jpg';
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
import Splitting from "splitting";
import "splitting/dist/splitting.css";

function Home() {

    useEffect(() => {
        Splitting({
            by: "words",
        });
    }, []);

    const icons = [{ name: FaGithub, link: "https://github.com/rupsadutta16-ai" },
    { name: FaEnvelope, link: "mailto:rupsadutta16@gmail.com" }, { name: FaLinkedin, link: "https://linkedin.com/in/rupsa-d0706" }]

    return (
        <>
            <section id="home" className='scroll-mt-36'>
                <div className="relative md:w-[70%] w-[80%] mx-auto md:mt-16 md:flex">

                    <div className=' w-full h-2 block md:hidden mt-20 -mb-10 border-[0_0_1px_0] border-mycyan'></div>

                    <div className="md:block hidden border-[0_2px_0_0] border-mycyan h-132 w-4"></div>
                    <div className='h-18 absolute glow-faint-yellow left-[calc(50%-36px)] md:-left-4 -top-7 md:top-42 border-[4px] border-myyellow'><img src={profilepic} alt="profile" className='object-cover w-full h-full' /></div>
                    <div className='relative md:grid grid-cols-3 md:grid-cols-1 md:grid-rows-[200px_auto_auto] md:h-106 top-16 md:gap-12 gap-x-12 hidden '>
                        {icons.map((item) => {
                            const IconComponent = item.name;
                            return (
                                <a target='/'
                                    key={item.name}
                                    href={item.link}
                                    className="flex relative justify-center"
                                > <span className='glow-faint-yellow w-8 h-8 bg-myyellow/90 rotate-45 flex justify-center items-center transition-transform hover:rotate-0 ease-in-out duration:300 absolute left-[-16px]'><span className='transition transform -rotate-45 hover:rotate-0 ease-in-out duration:300 '><IconComponent
                                    className="text-lg text-bgmed"
                                /></span></span></a>)
                        })}
                    </div>

                    <div data-splitting className='hero-text md:mt-12 mt-18 md:w-[80%] md:ml-32 md:my-16 p-8'>
                        <h1 className='text-[20px] md:text-[30px] lg:text-[40px]'>
                            Hello I'm <span className='text-mycyan'>Rupsa Dutta</span>...
                        </h1>

                        <h3 className='md:text-[17px] lg:text-[24px] mt-6 leading-relaxed'>
                            I'm passionate about{" "}
                            <TypeAnimation
                                sequence={[
                                    "software development",
                                    1800,
                                    "full-stack web development", ,
                                    1800,
                                    "building scalable APIs",
                                    1800,
                                    "crafting intuitive user interfaces",
                                    1800,
                                    "creating meaningful projects",
                                    1800,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="text-myyellow"
                            />
                            <p>with a focus on creating{" "}
                                <span className='text-myyellow'>
                                    efficient, scalable, user-friendly
                                </span>{" "}
                                applications.</p>
                        </h3>

                        <p className="lg:text-[20px] mt-4">
                            I enjoy turning <span className='text-myyellow'>ideas</span> into{" "}
                            <span className='text-myyellow'>functional web experiences</span>, with
                            experience...
                            <a href='#about' className='text-mycyan underline'>
                                Read More
                            </a>
                        </p>
                    </div>
                </div>
                <div className='w-[80%]  mx-auto h-2 block md:hidden border-[0_0_1px_0] border-mycyan '></div>

                <div className=' md:hidden grid grid-cols-3 w-[70%] mt-10 mx-auto'>
                    {icons.map((item) => {
                        const IconComponent = item.name;
                        return (
                            <a
                                key={item.name}
                                href={item.link}
                                className="flex relative justify-center "
                            > <span className='shadow-[1px_0px_3px_1px_#facc1550] w-8 h-8 bg-myyellow/90 rotate-45 flex justify-center items-center hover:rotate-0 ease-in-out duration:300'><span className='-rotate-45'><IconComponent
                                className="text-lg text-bgmed"
                            /></span></span></a>)
                    })}
                </div>
            </section>
        </>
    )
}
export default Home;