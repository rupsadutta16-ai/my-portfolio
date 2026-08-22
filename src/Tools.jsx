import { FaGitAlt, FaGithub, FaFilePowerpoint } from 'react-icons/fa';
import {  SiJupyter, SiCanvas} from 'react-icons/si';
import  { VscVscode } from 'react-icons/vsc'

const Tools = () => {
  const skills = [
    { icon: <FaGitAlt className="md:text-4xl" />, name: 'Git', row: 1 },
    { icon: <FaGithub className="md:text-4xl" />, name: 'Github', row: 1 },
    { icon: <VscVscode className="md:text-4xl" />, name: 'Vs Code', row: 1 },
    { icon: <SiJupyter className="md:text-4xl" />, name: 'Jupyter', row: 2 },
    { icon: <FaFilePowerpoint className="md:text-4xl" />, name: 'PPT', row: 2 },
    { icon: <SiCanvas className="md:text-4xl" />, name: 'Canva', row: 2 },
  ];

  const letters = ['T', 'O', 'O', 'L', 'S'];

  return (
    
    <>
    
    <div className="w-4/5 mx-auto flex-col mt-6 md:flex-row flex items-center justify-between gap-12 py-8">
      <div className="flex flex-row md:flex-col -mb-5 md:mb-0 gap-2">
        {letters.map((letter, index) => (
          <div
            key={index}
            className="glow-faint-cyan md:w-6 mt-2 md:h-6 w-5 h-5 bg-mycyan rotate-45 flex items-center justify-center"
          >
            <span className="-rotate-45 text-bgdark font-[800] md:text-lg text-sm">
              {letter}
            </span>
          </div>
        ))}
      </div>
      <div className="flex-1 glow-faint-cyan border-2 h-64 w-full md:w-auto mx-10 border-mycyan bg-bgmed bg-opacity-30 px-8 py-6 flex items-center justify-center">
        <div className="flex flex-col gap-6">
         
          <div className="flex gap-8 justify-center">
            {skills.filter(skill => skill.row === 1).map((skill, index) => (
              <div key={index} className="flex items-center gap-0">
                
                <div className="w-6 text-xl glow-faint-yellow h-6 md:w-14 md:h-14 bg-myyellow rotate-45 flex items-center justify-center relative z-5">
                  <div className="-rotate-45 text-bgdark">
                    {skill.icon}
                  </div>
                </div>
                <div className="border-1 glow-faint-yellow border-myyellow md:border-2 md:px-4 md:py-2 px-2 py-1/2 -ml-2 z-0">
                  <span className="text-white text-sm">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-8 justify-center">
            {skills.filter(skill => skill.row === 2).map((skill, index) => (
              <div key={index} className="flex items-center gap-0">
                <div className="w-6 text-xl glow-faint-yellow h-6 md:w-14 md:h-14 bg-myyellow rotate-45 flex items-center justify-center relative z-5">
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
        </div>
      </div>
    </div>
    
    </>
  );
};

export default Tools;