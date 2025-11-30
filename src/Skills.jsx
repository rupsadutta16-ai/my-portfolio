import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import Programming from './Programming';
import Libraries from './Libraries';
import Tools from './Tools';

const Skills = () => {
  const skills = [
    { icon: <FaHtml5 className="md:text-4xl" />, name: 'HTML', row: 1 },
    { icon: <FaCss3Alt className="md:text-4xl" />, name: 'CSS', row: 1 },
    { icon: <FaJsSquare className="md:text-4xl" />, name: 'JavaScript', row: 1 },
    { icon: <FaReact className="md:text-4xl" />, name: 'React.js', row: 2 },
    { icon: <SiTailwindcss className="md:text-4xl" />, name: 'Tailwind CSS', row: 2 },
  ];

  const letters = ['F', 'R', 'O', 'N', 'T', 'E', 'N', 'D'];

  return (

    <>
      <section id="skills" className='scroll-mt-24'>
        <h2 className="text-glow-faint text-[40px] lg-[50px] font-bold text-myyellow  w-full text-center mt-36">
          Skills
        </h2>
        <div className="w-4/5 mx-auto flex-col md:flex-row flex items-center justify-between gap-12 py-8">
          <div className="flex flex-row md:flex-col -mb-5 md:mb-0 gap-2">
            {letters.map((letter, index) => (
              <div
                key={index}
                className="glow-faint-cyan md:w-6 md:h-6 w-5 h-5 bg-mycyan rotate-45 flex items-center justify-center"
              >
                <span className="-rotate-45 text-bgdark font-[800] md:text-lg text-sm">
                  {letter}
                </span>
              </div>
            ))}
          </div>
          <div className="flex-1 border-2 h-64 w-full md:w-auto mx-10 border-mycyan glow-faint-cyan bg-bgmed bg-opacity-30 px-8 py-6 flex items-center justify-center">
            <div className="flex flex-col gap-6">

              <div className="flex gap-8 justify-center">
                {skills.filter(skill => skill.row === 1).map((skill, index) => (
                  <div key={index} className="flex items-center gap-0">

                    <div className="w-6 glow-faint-yellow text-xl h-6 md:w-14 md:h-14 bg-myyellow rotate-45 flex items-center justify-center relative z-5">
                      <div className="-rotate-45 text-bgdark">
                        {skill.icon}
                      </div>
                    </div>
                    <div className="border-1 border-myyellow glow-faint-yellow md:border-2 md:px-4 md:py-2 px-2 py-1/2 -ml-2 z-0">
                      <span className="text-white text-sm">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-8 justify-center">
                {skills.filter(skill => skill.row === 2).map((skill, index) => (
                  <div key={index} className="flex items-center gap-0">
                    <div className="w-6 text-xl h-6 md:w-14 md:h-14 bg-myyellow rotate-45 flex items-center justify-center relative z-5">
                      <div className="-rotate-45 text-bgdark">
                        {skill.icon}
                      </div>
                    </div>
                    <div className="border-1 border-myyellow md:border-2 md:px-4 md:py-2 px-2 py-1/2 -ml-2 z-0">
                      <span className="text-white text-sm">{skill.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Programming />
        <Libraries />
        <Tools />
      </section>
    </>
  );
};

export default Skills;