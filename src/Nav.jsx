import { useState, useEffect } from 'react';
import { FaHome, FaUser, FaTools, FaFolderOpen, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
function Nav() {
    const [isOpen, setisOpen] = useState(false)
    const [isFlickering, setIsFlickering] = useState(true);
    const navItems = [
        { name: 'Home', icon: FaHome, link: "#home" },
        { name: 'About', icon: FaUser, link: "#about" },
        { name: 'Skills', icon: FaTools, link: "#skills" },
        { name: 'Projects', icon: FaFolderOpen, link: "#projects" },
    ];
    const [activeSection, setActiveSection] = useState("");
    useEffect(() => {
        const sections = document.querySelectorAll("[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-30% 0px -50% 0px",
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <>
            <nav className="bg-bgmed/30 sticky top-0 z-50 w-full backdrop-blur-lg">
                <div className="flex justify-between gap-[10%] w-full h-16 ">
                    <div className="border-[0_0_2px_0] h-full border-mycyan w-[20%] shadow-[0_10px_10px_-8px_#22d3ee50] flex">
                        <h1 className='flicker sm:text-[20px] lg:text-[40px] md:text-[30px] h-full font-extrabold text-glow-faint text-myyellow pl-2 md:pl-5 font-logo flex items-center '>Rupsa</h1>
                        <div className="absolute border-[1px] border-mycyan left-[calc(20%-2px)] rotate-30 origin-bottom h-18 top-[-8px] font-thin shadow-[0_0_4px_1px_#22d3ee50]"></div>
                    </div>
                    <div className=" border-[0_0_2px_0] shadow-[0_10px_10px_-8px_#22d3ee50] h-10 border-mycyan w-[40%]">
                        <div className="hidden md:block absolute border-[1px] border-mycyan left-[calc(30%-2px)] rotate-30 origin-bottom h-12 top-[-8px] font-thin shadow-[0_0_4px_1px_#22d3ee50]"></div>
                        < div className=" md:hidden absolute border-[1px] border-mycyan left-[calc(60%-2px)] rotate-15 origin-bottom h-12 top-[-8px] font-thin shadow-[0_0_4px_1px_#22d3ee50]" ></div>
                        <div className='flex align-center justify-evenly'>

                            <a

                                href="#contact"
                                className="relative top-6 md:hidden"
                            >
                                <span className="glow-faint-yellow w-8 h-8 bg-myyellow/90 rotate-45 flex justify-center items-center md:hidden "><span className='-rotate-45 block'><FaEnvelope
                                    className="text-lg text-bgmed"
                                /></span></span>

                            </a>
                            <button


                                className={`relative top-6 md:hidden ${isOpen ? "hidden" : "block"}`} onClick={() => setisOpen(!isOpen)}
                            >
                                <span className="glow-faint-yellow w-8 h-8 bg-myyellow/90 rotate-45 flex justify-center items-center md:hidden "><span className='-rotate-45 block'><FaBars
                                    className="text-lg text-bgmed"
                                /></span></span>

                            </button>
                            <button


                                className={`relative top-6 md:hidden ${isOpen ? "block" : "hidden"}`} onClick={() => setisOpen(!isOpen)}
                            >
                                <span className="glow-faint-yellow w-8 h-8 bg-myyellow/90 rotate-45 flex justify-center items-center md:hidden "><span className='-rotate-45 block'><FaTimes
                                    className="text-lg text-bgmed"
                                /></span></span>

                            </button>



                        </div>
                        <div className="hidden md:flex justify-evenly space-x-6 relative top-2">
                            {navItems.map((item) => {
                                const IconComponent = item.icon;

                                const sectionId = item.link.replace("#", "");
                                const isActive = activeSection === sectionId;

                                return (
                                    <a
                                        key={item.name}
                                        href={item.link}
                                        className="flex relative top-6 justify-center"
                                    >
                                        <span
                                            className={`
                        w-8 h-8 border-1 border-myyellow
                        flex justify-center items-center 
                        transition-transform ease-in-out duration-300 
                        ${isActive ? "rotate-0" : "bg-myyellow/90 rotate-45 hover:rotate-0"}
                    `}
                                        >
                                            <span
                                                className={`
                            transition-transform ease-in-out duration-300 
                            block
                            ${isActive ? "rotate-0 text-white" : "text-bgmed -rotate-45 hover:rotate-0 hover:text-white"}
                        `}
                                            >
                                                <IconComponent className="text-lg " />
                                            </span>
                                        </span>

                                        <span
                                            className={`
                        w-20 h-7
                        border-myyellow border-[1px]
                        t-2 justify-center hidden lg:flex
                        ease-in-out duration-200 
                        ${isActive
                                                    ? "bg-myyellow text-bgmed glow-faint-yellow"
                                                    : "hover:bg-myyellow hover:text-bgmed hover:glow-faint-yellow"
                                                }
                    `}
                                        >
                                            {item.name}
                                        </span>
                                    </a>
                                );
                            })}
                        </div>
                        < div className=" sm: hidden md:block absolute border-[1px] border-mycyan left-[calc(70%-2px)] rotate-15 origin-bottom h-12 top-[-8px] font-thin shadow-[0_0_4px_1px_#22d3ee50]" ></div>
                    </div>
                    <div className="pr-9 justify-end items-center sm:hidden md:flex border-[0_0_2px_0] shadow-[0_10px_10px_-8px_#22d3ee50] border-mycyan w-[20%]">
                        <div className="absolute border-[1px] border-mycyan left-[calc(80%-2px)] rotate-15 origin-bottom h-18 top-[-8px] font-thin shadow-[0_0_4px_1px_#22d3ee50]"></div>

                        <a
                            href="#contact"
                            className={`
            text-[14px] lg:text-[20px]
            text-bgdark
            w-[60%] h-[60%]
            bg-myyellow
            glow-faint-yellow
            flex justify-center items-center
            ease-in-out duration-400
            ${activeSection === "contact"
                                    ? "rotate-0"
                                    : "-rotate-15 hover:rotate-0"
                                }
        `}
                        >
                            Contact Me
                        </a>
                    </div>

                </div>
                <div className={`fixed top-16 z-50 bg-bgmed right-0 w-50 transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>

                    <ul className=' flex flex-col gap-2'>
                        {navItems.map((item, key) => {
                            const IconComponent = item.icon;
                            return (
                                <li className='border-1 border-mycyan py-2 pl-4'><a href={item.link} className='flex gap-6'>

                                    <div className=" glow-faint-yellow w-6 h-6 bg-myyellow/90 rotate-45 flex justify-center items-center "><span className=' -rotate-45 block '><IconComponent
                                        className="text-lg text-bgmed"
                                    /></span></div>

                                    <div>{item.name}</div></a></li>)
                        })}



                    </ul>
                </div>
            </nav >
        </>
    )
}
export default Nav;