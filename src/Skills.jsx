import React from 'react';
import { 
  FaCode, 
  FaBrain, 
  FaLaptopCode, 
  FaServer, 
  FaDatabase, 
  FaCube, 
  FaTools, 
  FaCloudUploadAlt, 
  FaUserFriends 
} from 'react-icons/fa';

const technicalCategories = [
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    icon: FaCode,
    accent: 'cyan',
    skills: ['Python', 'C', 'C++', 'JavaScript'],
  },
  {
    id: 'frontend-dev',
    title: 'Frontend Development',
    icon: FaLaptopCode,
    accent: 'yellow',
    skills: ['HTML', 'CSS', 'React.js', 'Tailwind CSS'],
  },
  {
    id: 'backend-dev',
    title: 'Backend Development',
    icon: FaServer,
    accent: 'cyan',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'External API Integration'],
  },
  {
    id: 'data-science-ml',
    title: 'Data Science & ML',
    icon: FaBrain,
    accent: 'yellow',
    isWide: true, // 2-columns wide so other cards on this row don't stretch unnecessarily
    skills: [
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Scikit-learn',
      'Data Preprocessing',
      'Exploratory Data Analysis',
      'ML Algorithms',
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: FaDatabase,
    accent: 'cyan',
    skills: ['MongoDB', 'PostgreSQL', 'SQL'],
  },
  {
    id: 'blockchain-web3',
    title: 'Blockchain & Web3',
    icon: FaCube,
    accent: 'yellow',
    skills: [
      'Solidity',
      'ethers.js',
      'Thirdweb',
      'Hardhat',
      'Polygon',
      'MetaMask',
      'IPFS',
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    icon: FaTools,
    accent: 'cyan',
    skills: ['Git', 'GitHub', 'VS Code', 'Antigravity', 'Claude'],
  },
  {
    id: 'deployment-hosting',
    title: 'Deployment & Hosting',
    icon: FaCloudUploadAlt,
    accent: 'yellow',
    skills: ['Render', 'Vercel', 'Cloudinary'],
  },
];

const softSkillsCategory = {
  id: 'soft-skills',
  title: 'Soft Skills',
  icon: FaUserFriends,
  accent: 'cyan',
  skills: [
    'Leadership',
    'Task Coordination',
    'Team Collaboration',
    'Problem-Solving',
    'Adaptability',
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-24 w-[80%] md:w-[85%] lg:w-[80%] mx-auto py-16">
      {/* Section Header */}
      <h2 className="text-glow-faint text-[30px] md:text-[40px] lg:text-[50px] font-bold text-myyellow w-full text-center mt-20 mb-12">
        Skills
      </h2>

      {/* Technical Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {technicalCategories.map((category) => {
          const Icon = category.icon;
          const isCyan = category.accent === 'cyan';
          const isWide = Boolean(category.isWide);

          return (
            <div
              key={category.id}
              className={`bg-bgmed/30 backdrop-blur-md p-6 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 ${
                isWide ? 'md:col-span-2 lg:col-span-2' : ''
              } ${
                isCyan
                  ? 'border-2 border-mycyan glow-faint-cyan'
                  : 'border-2 border-myyellow glow-faint-yellow'
              }`}
            >
              {/* Card Header with Diamond Icon */}
              <div className="flex items-center gap-4 mb-4 pb-3 border-b border-txt/10">
                <div
                  className={`w-9 h-9 rotate-45 flex items-center justify-center shrink-0 ${
                    isCyan
                      ? 'bg-mycyan glow-faint-cyan text-bgdark'
                      : 'bg-myyellow glow-faint-yellow text-bgdark'
                  }`}
                >
                  <Icon className="-rotate-45 text-base" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-txt">
                  {category.title}
                </h3>
              </div>

              {/* Skill Chips: Small rounded pill boxes with non-prominent borders */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-colors duration-200 cursor-default select-none bg-bgdark/80 text-txt/90 border ${
                      isCyan
                        ? 'border-white/10 hover:border-mycyan/50 hover:text-mycyan'
                        : 'border-white/10 hover:border-myyellow/50 hover:text-myyellow'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                        isCyan ? 'bg-mycyan/80' : 'bg-myyellow/80'
                      }`}
                    />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Soft Skills Section */}
      <div className="mt-10">
        <div className="border-2 border-mycyan glow-faint-cyan bg-bgmed/30 backdrop-blur-md p-6 sm:p-8 overflow-hidden">
          {/* Two-column layout: left = title/meta, right = scattered skill pills */}
          <div className="flex flex-col md:flex-row gap-6">

            {/* LEFT: Title & Description */}
            <div className="md:w-1/2 flex items-start gap-4 shrink-0">
              <div className="w-10 h-10 rotate-45 flex items-center justify-center shrink-0 bg-mycyan glow-faint-cyan text-bgdark mt-1">
                <softSkillsCategory.icon className="-rotate-45 text-lg" />
              </div>
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-lg sm:text-xl font-bold text-txt">
                    {softSkillsCategory.title}
                  </h3>
                  <span className="border border-myyellow glow-faint-yellow px-2 py-0.5 text-[11px] font-bold text-myyellow bg-bgdark">
                    SOFT SKILLS
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-txt/70 mt-4">
                  Core competencies in collaboration, leadership, and analytical execution
                </p>
              </div>
            </div>

            {/* RIGHT: Scattered floating skill pills */}
            <div className="md:w-1/2 relative min-h-[140px] flex-1">
              {/* Subtle radial glow background */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,rgba(34,211,238,0.05),transparent_75%)] pointer-events-none" />

              {/* Each pill placed at a custom absolute position with its own rotation */}
              <span
                style={{ top: '8%', left: '5%', transform: 'rotate(-12deg)' }}
                className="absolute inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono border border-white/10 bg-bgdark/80 text-txt/90 hover:border-myyellow/50 hover:text-myyellow transition-colors duration-200 cursor-default select-none shadow-[0_0_8px_rgba(250,204,21,0.08)]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-myyellow/80 shrink-0" />
                Leadership
              </span>

              <span
                style={{ top: '0%', left: '52%', transform: 'rotate(6deg)' }}
                className="absolute inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono border border-white/10 bg-bgdark/80 text-txt/90 hover:border-mycyan/50 hover:text-mycyan transition-colors duration-200 cursor-default select-none shadow-[0_0_8px_rgba(34,211,238,0.08)]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-mycyan/80 shrink-0" />
                Task Coordination
              </span>

              <span
                style={{ top: '38%', left: '30%', transform: 'rotate(-5deg)' }}
                className="absolute inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono border border-white/10 bg-bgdark/80 text-txt/90 hover:border-myyellow/50 hover:text-myyellow transition-colors duration-200 cursor-default select-none shadow-[0_0_8px_rgba(250,204,21,0.08)]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-myyellow/80 shrink-0" />
                Team Collaboration
              </span>

              <span
                style={{ bottom: '10%', left: '8%', transform: 'rotate(10deg)' }}
                className="absolute inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono border border-white/10 bg-bgdark/80 text-txt/90 hover:border-mycyan/50 hover:text-mycyan transition-colors duration-200 cursor-default select-none shadow-[0_0_8px_rgba(34,211,238,0.08)]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-mycyan/80 shrink-0" />
                Problem-Solving
              </span>

              <span
                style={{ bottom: '4%', right: '4%', transform: 'rotate(-8deg)' }}
                className="absolute inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono border border-white/10 bg-bgdark/80 text-txt/90 hover:border-myyellow/50 hover:text-myyellow transition-colors duration-200 cursor-default select-none shadow-[0_0_8px_rgba(250,204,21,0.08)]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-myyellow/80 shrink-0" />
                Adaptability
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;