import { SiNumpy, SiPandas, SiPlotly } from 'react-icons/si';
import {FaChartLine} from 'react-icons/fa';
const Libraries = () => {
    const skills = [
        { icon: <SiNumpy className="md:text-4xl" />, name: 'Numpy', row: 1 },
        { icon: <SiPandas className="md:text-4xl" />, name: 'Pandas', row: 1 },
        { icon: <SiPlotly className="md:text-4xl" />, name: 'Matplotlib', row: 1 },

    ];

    const letters = ['L', 'I', 'B', 'R', 'A', 'R', 'I', 'E', 'S'];

    return (

        <>

            <div className="w-4/5 mt-6 mx-auto flex-col md:flex-row flex items-center justify-between gap-12 py-8">
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
                <div className="flex-1 border-2 glow-faint-cyan h-64 w-full md:w-auto mx-10 border-mycyan bg-bgmed bg-opacity-30 px-8 py-6 flex items-center justify-center">
                    

                    <div className="flex md:flex-row flex-col gap-8 justify-center">
                       <div className='flex md:gap-8 gap-5 justify-center'>
                        {skills.filter(skill => skill.row === 1).map((skill, index) => (
                            <div key={index} className="flex items-center gap-0">

                                <div className="w-6 glow-faint-yellow text-xl h-6 md:w-14 md:h-14 bg-myyellow rotate-45 flex items-center justify-center relative z-5">
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
                    
                        <div className="flex items-center justify-center gap-0">

                            <div className="w-6 glow-faint-yellow text-xl h-6 md:w-14 md:h-14 bg-myyellow rotate-45 flex items-center justify-center relative z-5">
                                <div className="-rotate-45 text-bgdark">
                                    <FaChartLine className="md:text-4xl" />
                                </div>
                            </div>
                            <div className="border-1 glow-faint-yellow border-myyellow md:border-2 md:px-4 md:py-2 px-2 py-1/2 -ml-2 z-0">
                                <span className="text-white text-sm">Seaborn</span>
                            </div>
                        </div>
                        

                    

                    </div>
                </div>
            </div>
       
        </>
    );
};

export default Libraries;