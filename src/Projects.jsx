import React, { useState, useEffect } from 'react';
import { FaGithub, FaVideo,FaExternalLinkAlt, FaUsers, FaArrowRight } from 'react-icons/fa';

/**
 * Centralised Project Data
 * Easily replace:
 *  - 'images': Array of screenshot paths/URLs e.g. ['public/krishidrishti1.png', '/krishidrishti2.png']
 *              Automatically slides to show subsequent images on a short interval.
 *  - 'image': Single screenshot path or URL (backward-compatible)
 *  - 'githubUrl': Repository URL
 *  - 'liveUrl': Deployed Demo URL
 */
export const PROJECTS_DATA = [
  {
    id: 'krishi-drishti',
    name: 'Krishi Drishti',
    type: 'Full-Stack Platform',
    isTeamProject: false,
    images: ['public/krishidrishti1.png', 'public/krishidrishti2.jpeg'], // Add multiple screenshots to auto-slide: ['/img1.png', '/img2.png']
    description:
      'Built the complete full-stack component of an agricultural intelligence platform, developing the frontend, backend APIs, database integration, farmer authentication, farm and crop management, image-upload workflows, observation tracking, and report management.',
    skills: [
      'React.js',
      'Tailwind CSS',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'REST APIs',
      'JWT Authentication',
      'Cloudinary',
      'OpenCV',
      'Leaflet',
      'OpenStreetMap',
    ],
    githubUrl: 'https://github.com/rupsadutta16-ai/krishi-drishti',
    liveUrl: '',
  },
  {
    id: 'relief-dao',
    name: 'ReliefDAO',
    type: 'Web3 / DAO Platform',
    isTeamProject: false,
    images: ['public/reliefdao1.png'], // PLACEHOLDER: Set image URL/path here
    description:
      'Built a decentralised donation platform with smart-contract escrow, milestone-based fund release, community verification, DAO voting, and transparent fund tracking.',
    skills: [
      'React.js',
      'Tailwind CSS',
      'Solidity',
      'Polygon Amoy',
      'Thirdweb',
      'Smart Accounts',
      'IPFS',
      'Pinata',
    ],
    githubUrl: 'https://github.com/rupsadutta16-ai/relief-dao',
    liveUrl: 'https://relief-dao-chi.vercel.app/',
    demo: 'https://youtu.be/JT2St_17X50'
  },
  {
    id: 'task-split',
    name: 'TaskSplit',
    type: 'Web3 DApp',
    isTeamProject: false,
    images: ['public/tasksplit.jpg'], // Custom Web3 DApp UI preview placeholder
    description:
      'Developed a decentralised task-verification and reward platform with on-chain submissions, stake-based verification, majority voting, phased project progression, and automated refund mechanisms.',
    skills: [
      'React.js',
      'Solidity',
      'Hardhat',
      'MetaMask',
      'Mantle Testnet',
      'Smart Contracts',
    ],
    githubUrl: 'https://github.com/rupsadutta16-ai/tasksplit-web3',
    liveUrl: '',
    demo: 'https://youtu.be/HqG8uTZ0uuk'
  },
  {
    id: 'skill-play',
    name: 'SkillPlay',
    type: 'Full-Stack Web App',
    isTeamProject: false,
    image: '', // PLACEHOLDER: Set image URL/path here
    description:
      'Built a full-stack video-learning platform with user authentication, profiles, playlists, viewing history, subscriptions, and interactive features including posts, comments, likes, and search.',
    skills: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'YouTube API',
      'REST APIs',
    ],
    githubUrl: 'https://github.com/rupsadutta16-ai/skill-play-mern',
    liveUrl: '',
  },
  {
    id: 'unigigs',
    name: 'Unigigs',
    type: 'College Team Project',
    isTeamProject: true,
    images: ['public/freelance.png'], // PLACEHOLDER: Set image URL/path here
    description:
      'Contributed to a freelance marketplace platform by developing profile features, implementing demo payment functionality, building file-upload workflows, designing the hero-page UI, and delivering multiple fixes and improvements.',
    skills: ['FastAPI', 'PostgreSQL', 'Cloudinary'],
    githubUrl: 'https://github.com/zarinroushan/freelance-hub',
    liveUrl: 'https://unigigs-three.vercel.app/',
  },
];

/**
 * Normalizes image or images array, properly resolving Vite public/ paths
 */
const normalizeImages = (images, image) => {
  let list = [];
  if (Array.isArray(images) && images.length > 0) {
    list = images;
  } else if (Array.isArray(image)) {
    list = image;
  } else if (image && typeof image === 'string' && image.trim() !== '') {
    list = [image];
  }

  return list
    .filter(Boolean)
    .map((src) => {
      if (typeof src === 'string' && src.startsWith('public/')) {
        return '/' + src.slice(7);
      }
      return src;
    });
};

/**
 * Sleek Sci-Fi HUD Interface Frame Container with Sliding Window Carousel
 * - Uses thin cyanframe.jpeg and yellowframe.jpeg from public folder
 * - Clean interior viewport seamlessly hosts sliding screenshots on interval
 * - Alternating frame color:
 *   If card outer border is Cyan -> HUD frame is /yellowframe.jpeg
 *   If card outer border is Yellow -> HUD frame is /cyanframe.jpeg
 */
const LaptopScreenFrame = ({ images, image, name, type, index, isCyanMain }) => {
  const innerIsYellow = isCyanMain;
  const hudFrame = innerIsYellow ? '/yellowframe.jpeg' : '/cyanframe.jpeg';
  const imgList = normalizeImages(images, image);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide to the next image on a short interval
  useEffect(() => {
    if (imgList.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imgList.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [imgList.length]);

  return (
    <div className="w-full p-2 sm:p-5 bg-bgdark/95 flex flex-col items-center justify-center border-b border-txt/10">
      {/* Outer Sleek Sci-Fi HUD Container */}
      <div className="relative w-full max-w-3xl aspect-[16/9] overflow-hidden rounded-lg shadow-[0_0_20px_rgba(0,0,0,0.85)]">
        {/* Frame Graphic Background (/cyanframe.jpeg or /yellowframe.jpeg) */}
        <img
          src={hudFrame}
          alt={`${innerIsYellow ? 'Yellow' : 'Cyan'} Sci-Fi Frame`}
          className="absolute inset-0 w-full h-full object-fill select-none pointer-events-none z-0"
        />

        {/* Central Display Viewport fitting cleanly inside the thin neon frame boundary */}
        <div className="absolute top-[12%] bottom-[13%] left-[7.2%] right-[7.2%] overflow-hidden bg-black/90 flex items-center justify-center z-10 border border-white/5">
          {/* Render Actual Image(s) with Sliding Window Animation */}
          {imgList.length > 0 ? (
            <div className="relative w-full h-full overflow-hidden">
              {/* Sliding Window Track */}
              <div
                className="flex w-full h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {imgList.map((src, i) => (
                  <div key={i} className="w-full h-full flex-shrink-0 relative">
                    <img
                      src={src}
                      alt={`${name} screenshot ${i + 1}`}
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              {/* Slide Indicator Dots (when multiple images are provided) */}
              {imgList.length > 1 && (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-bgdark/90 backdrop-blur-sm border border-white/10 z-20">
                  {imgList.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentIndex(i)}
                      aria-label={`Jump to screenshot ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        currentIndex === i
                          ? innerIsYellow
                            ? 'w-4 bg-myyellow shadow-[0_0_6px_#facc15]'
                            : 'w-4 bg-mycyan shadow-[0_0_6px_#22d3ee]'
                          : 'w-1.5 bg-white/40 hover:bg-white/80'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* Cyberpunk Terminal/Telemetry Screen Placeholder when no images are provided */
            <div className="relative w-full h-full flex flex-col items-center justify-center p-4 text-center select-none bg-gradient-to-b from-bgdark/90 via-black to-bgdark/95 overflow-hidden">
              {/* Subtle background tech grid & scanlines */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.06),transparent_70%)] pointer-events-none" />
              <div className="absolute top-2 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-txt/40 border-b border-white/5 pb-1">
                <span className="flex items-center gap-1.5">
                  <span
                    className={`w-1.5 h-1.5 rounded-full animate-ping ${
                      innerIsYellow ? 'bg-myyellow' : 'bg-mycyan'
                    }`}
                  />
                  <span className={innerIsYellow ? 'text-myyellow' : 'text-mycyan'}>
                    SYS_ACTIVE
                  </span>
                </span>
                <span>HUD // {type}</span>
              </div>

              <div className="relative z-10 flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center mb-2 border ${
                    innerIsYellow
                      ? 'border-myyellow/40 bg-myyellow/10 text-myyellow shadow-[0_0_12px_rgba(250,204,21,0.25)]'
                      : 'border-mycyan/40 bg-mycyan/10 text-mycyan shadow-[0_0_12px_rgba(34,211,238,0.25)]'
                  }`}
                >
                  <span className="font-mono font-bold text-base">{'</>'}</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-txt tracking-wide">
                  {name}
                </h4>
                <p className="text-[11px] font-mono text-txt/50 mt-1">
                  Architecture & Interactive Protocol View
                </p>
                <span
                  className={`mt-2 inline-block px-2.5 py-0.5 rounded text-[10px] font-mono border ${
                    innerIsYellow
                      ? 'border-myyellow/40 text-myyellow bg-myyellow/5'
                      : 'border-mycyan/40 text-mycyan bg-mycyan/5'
                  }`}
                >
                  LIVE TELEMETRY COMING SOON
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 w-[90%] md:w-[85%] lg:w-[80%] mx-auto py-20">
      {/* Section Header */}
      <h2 className="text-glow-faint text-[30px] md:text-[40px] lg:text-[50px] font-bold text-myyellow w-full text-center mt-20 mb-16">
        Projects
      </h2>

      {/* 1 Project Card Per Row */}
      <div className="flex flex-col space-y-14">
        {PROJECTS_DATA.map((project, index) => {
          // Alternating Main Div Borders: even = cyan, odd = yellow
          const isCyanMain = index % 2 === 0;

          return (
            <article
              key={project.id}
              className={`w-full bg-bgmed/30 backdrop-blur-md flex flex-col transition-transform duration-300 hover:-translate-y-1 ${
                isCyanMain
                  ? 'border-2 border-mycyan glow-faint-cyan'
                  : 'border-2 border-myyellow glow-faint-yellow'
              }`}
            >
              {/* TOP: Laptop Screen Image Box with Sliding Window */}
              <LaptopScreenFrame
                images={project.images}
                image={project.image}
                name={project.name}
                type={project.type}
                index={index}
                isCyanMain={isCyanMain}
              />

              {/* BOTTOM: Project Details Area */}
              <div className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  {/* Badge & Project Title */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-txt">
                      {project.name}
                    </h3>

                    {project.isTeamProject ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border border-myyellow glow-faint-yellow bg-bgdark text-myyellow">
                        <FaUsers className="text-xs" />
                        College Team Project
                      </span>
                    ) : (
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-bgdark ${
                          isCyanMain
                            ? 'border border-mycyan glow-faint-cyan text-mycyan'
                            : 'border border-myyellow glow-faint-yellow text-myyellow'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            isCyanMain ? 'bg-mycyan' : 'bg-myyellow'
                          }`}
                        />
                        {project.type}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-txt/80 text-sm sm:text-base leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Skills / Technology Chips: Small round pill boxes with subtle borders */}
                  <div className="mb-6">
                    <span className="block text-[11px] font-mono uppercase tracking-wider text-txt/50 mb-2">
                      Technologies Used
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border border-white/10 bg-bgdark/80 text-txt/90 hover:border-white/30 transition-colors duration-200 select-none"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isCyanMain ? 'bg-mycyan/80' : 'bg-myyellow/80'
                            }`}
                          />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* GitHub & Live Demo Action Buttons */}
                <div className="pt-5 border-t border-txt/10 flex flex-wrap items-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold border-2 border-mycyan glow-faint-cyan bg-bgdark text-mycyan hover:bg-mycyan hover:text-bgdark transition-all duration-200"
                  >
                    <FaGithub className="text-base" />
                    <span>GitHub Repo</span>
                  </a>

                  {project.liveUrl && <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold border-2 border-myyellow glow-faint-yellow bg-bgdark text-myyellow hover:bg-myyellow hover:text-bgdark transition-all duration-200"
                  >
                    <FaExternalLinkAlt className="text-xs" />
                    <span>Live Demo</span>
                  </a>}

                  {project.demo && <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold border-2 border-mycyan glow-faint-mycyan bg-bgdark text-mycyan hover:bg-mycyan hover:text-bgdark transition-all duration-200"
                  >
                    <FaVideo className="text-xs" />
                    <span>Demo Video</span>
                  </a>}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Prominent "View More Projects" Button at Bottom */}
      <div className="mt-16 text-center">
        <a
          href="https://github.com/rupasdutta16-ai"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-3 text-sm sm:text-base font-bold font-mono border-2 border-myyellow glow-faint-yellow bg-bgdark text-myyellow hover:bg-myyellow hover:text-bgdark transition-all duration-300"
        >
          <FaGithub className="text-lg" />
          <span>View More Projects on GitHub</span>
          <FaArrowRight className="text-xs" />
        </a>
      </div>
    </section>
  );
}