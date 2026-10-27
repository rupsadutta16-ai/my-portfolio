import React, { useRef } from 'react';
import { 
  FaTrophy, 
  FaAward, 
  FaCertificate, 
  FaExternalLinkAlt, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaGlobe, 
  FaUsers,
  FaBuilding,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';

/**
 * Featured Achievements Data
 * 3 prominent competition milestones
 */
export const FEATURED_ACHIEVEMENTS = [
  {
    id: 'hackforge',
    title: 'HackForge',
    organizer: 'Jadavpur University',
    location: 'Jadavpur University',
    date: 'April 2026',
    result: 'Finalist',
    statBig: 'TOP 25',
    statSub: 'OUT OF 350+ TEAMS',
    badge: 'FINALIST',
    accent: 'cyan',
    description:
      'Selected as a finalist at HackForge, hosted at Jadavpur University, among the top 25 teams from over 350 participating teams. ',
  },
  {
    id: 'akriti',
    title: 'Akriti Frontend Competition',
    organizer: 'Byte Brigade',
    location: 'online',
    date: 'December 2025',
    result: 'First Runner-Up',
    statBig: '1ST RUNNER-UP',
    statSub: '3 PROJECTS · 3 WEEKS',
    badge: 'RUNNER-UP',
    accent: 'yellow',
    description:
      'Achieved First Runner-Up in the Akriti Frontend Competition after developing three frontend projects over three weeks: a personal portfolio website, a restaurant menu website, and a unit converter website.',
  },
  {
    id: 'hult-prize',
    title: 'Hult Prize On-Campus',
    organizer: 'Hult Prize',
    location: 'Heritage Institute of Technology',
    date: 'January 2026',
    result: 'On-Campus Finalist',
    statBig: 'TOP 15 TEAMS',
    statSub: 'INVITED TO PITCH',
    badge: 'ON-CAMPUS FINALIST',
    accent: 'yellow',
    description:
      'Reached the on-campus finalist stage of the Hult Prize competition, becoming one of the top 15 teams invited to pitch their ideas in the on-campus round.',
  },
];

/**
 * Secondary Achievements Data
 * 2 smaller milestone cards
 */
export const SECONDARY_ACHIEVEMENTS = [
  {
    id: 'cosmohack',
    title: 'CosmoHack 1.0',
    format: 'ONLINE HACKATHON',
    badge: 'FINALIST',
    accent: 'cyan',
    description:
      'Reached the finalist stage in CosmoHack 1.0, an online hackathon by SourcifyIN that brought together participants to develop solutions through technology and innovation.',
  },
  {
    id: 'tech-events',
    title: 'Technical Competitions, Workshops & Events',
    format: 'COMMUNITY & SKILL ADVANCEMENT',
    badge: 'MULTIPLE PARTICIPATIONS',
    accent: 'yellow',
    description:
      'Participated in multiple technical competitions, workshops, and technology-focused events, exploring different approaches to development, problem-solving, and innovation. These experiences complemented practical project work and provided opportunities to learn, experiment, and engage with the wider technical community.',
  },
];

/**
 * Centralised Certificate Data
 * Extend anytime by adding a new entry with 'image' and 'title'.
 */
export const CERTIFICATES_DATA = [
  {
    id: 'cert-1',
    title: 'Hackforge Finalist',
    image: 'public/hackforge.png', // Add certificate image path e.g. '/certificates/web-dev.png'
  },
  {
    id: 'cert-2',
    title: 'Akriti Frontend Competition',
    image: 'public/akriti.png',
  },
  {
    id: 'cert-3',
    title: 'CosmoHack',
    image: 'public/cosmohack.png',
  },
  {
    id: 'cert-4',
    title: 'Hult Prize On-Campus',
    image: 'public/hult.png',
  },
  {
    id: 'cert-4',
    title: 'HackQuest Mantle Cohort',
    image: 'public/mantle.png',
  },
];

/**
 * Certificate Card Component
 * Displays certificate image on top, and below the image ONLY the certificate name.
 */
const CertificateCard = ({ cert, index }) => {
  const isCyan = index % 2 === 0;

  return (
    <div
      className={`w-[260px] sm:w-[290px] md:w-[320px] shrink-0 snap-start bg-bgmed/30 backdrop-blur-md flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
        isCyan
          ? 'border-2 border-mycyan glow-faint-cyan'
          : 'border-2 border-myyellow glow-faint-yellow'
      }`}
    >
      {/* Certificate Image or Intentional Cyberpunk Placeholder */}
      <div className="w-full h-44 sm:h-48 relative overflow-hidden bg-bgdark/90 flex items-center justify-center border-b border-txt/10">
        {cert.image ? (
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-4 text-center select-none bg-bgdark/95">
            <div
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `
                  linear-gradient(to right, ${isCyan ? '#22d3ee' : '#facc15'} 1px, transparent 1px),
                  linear-gradient(to bottom, ${isCyan ? '#22d3ee' : '#facc15'} 1px, transparent 1px)
                `,
                backgroundSize: '20px 20px',
              }}
            />
            <div
              className={`relative z-10 w-[88%] h-[82%] flex flex-col items-center justify-center border border-dashed ${
                isCyan ? 'border-mycyan/40 bg-mycyan/5' : 'border-myyellow/40 bg-myyellow/5'
              } p-3`}
            >
              <div
                className={`w-9 h-9 rotate-45 flex items-center justify-center mb-2 border ${
                  isCyan
                    ? 'border-mycyan text-mycyan bg-mycyan/10'
                    : 'border-myyellow text-myyellow bg-myyellow/10'
                }`}
              >
                <FaCertificate className="-rotate-45 text-sm" />
              </div>
              <span className="text-[10px] font-mono text-txt/50 uppercase tracking-wider">
                CERT_0{index + 1} // PLACEHOLDER
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Below the image: ONLY certificate name */}
      <div className="p-4 bg-bgdark/70 text-center flex-1 flex items-center justify-center">
        <h4 className="text-sm font-bold text-txt font-mono tracking-wide line-clamp-2">
          {cert.title}
        </h4>
      </div>
    </div>
  );
};

export default function Achievements() {
  const certScrollRef = useRef(null);

  const scrollLeft = () => {
    if (certScrollRef.current) {
      certScrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (certScrollRef.current) {
      certScrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="achievements"
      className="scroll-mt-24 w-[90%] md:w-[85%] lg:w-[80%] mx-auto py-20"
    >
      

      {/* Main Section Heading */}
      <h2 className="text-glow-faint text-[30px] md:text-[40px] lg:text-[50px] font-bold text-myyellow w-full text-center">
        ACHIEVEMENTS & RECOGNITION
      </h2>

      {/* Subtitle */}
      <p className="text-txt/70 text-sm md:text-base max-w-2xl mx-auto text-center mt-3 mb-14 font-mono">
        Milestones, competitions, and experiences that mark my journey in technology, design, and innovation.
      </p>

      {/* Row 1: HackForge & Akriti (2 cards in one row) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FEATURED_ACHIEVEMENTS.slice(0, 2).map((item) => {
          const isCyan = item.accent === 'cyan';

          return (
            <div
              key={item.id}
              className={`bg-bgmed/30 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1.5 ${
                isCyan
                  ? 'border-2 border-mycyan glow-faint-cyan'
                  : 'border-2 border-myyellow glow-faint-yellow'
              }`}
            >
              <div>
                {/* Card Top: Badges & Date */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-txt/10">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono bg-bgdark ${
                      isCyan
                        ? 'border border-mycyan glow-faint-cyan text-mycyan'
                        : 'border border-myyellow glow-faint-yellow text-myyellow'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isCyan ? 'bg-mycyan' : 'bg-myyellow'
                      }`}
                    />
                    {item.badge}
                  </span>

                  <span className="text-xs font-mono text-txt/60 flex items-center gap-1.5">
                    <FaCalendarAlt className="text-[11px]" />
                    {item.date}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-txt mb-2">
                  {item.title}
                </h3>

                {/* Organiser and Location metadata with separate dedicated icons */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono mb-5">
                  {item.organizer && (
                    <span className="flex items-center gap-1.5 text-txt/70">
                      <FaBuilding className="text-[11px] text-mycyan" />
                      <span>{item.organizer}</span>
                    </span>
                  )}
                  {item.location && (
                    <span className="flex items-center gap-1.5 text-txt/70">
                      <FaMapMarkerAlt className="text-[11px] text-myyellow" />
                      <span>{item.location}</span>
                    </span>
                  )}
                </div>

                {/* Hero Stat Box */}
                <div
                  className={`p-4 mb-6 rounded bg-bgdark/90 border text-center ${
                    isCyan
                      ? 'border-mycyan/50 shadow-[0_0_12px_rgba(34,211,238,0.2)]'
                      : 'border-myyellow/50 shadow-[0_0_12px_rgba(250,204,21,0.2)]'
                  }`}
                >
                  <div
                    className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight ${
                      isCyan ? 'text-mycyan' : 'text-myyellow'
                    }`}
                  >
                    {item.statBig}
                  </div>
                  <div className="text-xs font-mono tracking-widest text-txt/70 mt-1 uppercase">
                    {item.statSub}
                  </div>
                </div>

                {/* Description */}
                <p className="text-txt/80 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bottom Card Accent Bar */}
              <div className="pt-4 border-t border-txt/10 flex items-center justify-between text-xs font-mono text-txt/50 mt-auto">
                <span className="flex items-center gap-1.5">
                  <FaTrophy
                    className={isCyan ? 'text-mycyan' : 'text-myyellow'}
                  />
                  <span>VERIFIED MILESTONE</span>
                </span>
                <span
                  className={`w-2 h-2 rotate-45 ${
                    isCyan ? 'bg-mycyan' : 'bg-myyellow'
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Row 2: Hult Prize & CosmosHack (in same row) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Hult Prize Card */}
        {(() => {
          const item = FEATURED_ACHIEVEMENTS[2];
          const isCyan = item.accent === 'cyan';

          return (
            <div
              key={item.id}
              className={`bg-bgmed/30 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1.5 ${
                isCyan
                  ? 'border-2 border-mycyan glow-faint-cyan'
                  : 'border-2 border-myyellow glow-faint-yellow'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-txt/10">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono bg-bgdark ${
                      isCyan
                        ? 'border border-mycyan glow-faint-cyan text-mycyan'
                        : 'border border-myyellow glow-faint-yellow text-myyellow'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isCyan ? 'bg-mycyan' : 'bg-myyellow'
                      }`}
                    />
                    {item.badge}
                  </span>

                  <span className="text-xs font-mono text-txt/60 flex items-center gap-1.5">
                    <FaCalendarAlt className="text-[11px]" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-txt mb-2">
                  {item.title}
                </h3>

                {/* Organiser and Location metadata with separate dedicated icons */}
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono mb-5">
                  {item.organizer && (
                    <span className="flex items-center gap-1.5 text-txt/70">
                      <FaBuilding className="text-[11px] text-mycyan" />
                      <span>{item.organizer}</span>
                    </span>
                  )}
                  {item.location && (
                    <span className="flex items-center gap-1.5 text-txt/70">
                      <FaMapMarkerAlt className="text-[11px] text-myyellow" />
                      <span>{item.location}</span>
                    </span>
                  )}
                </div>

                {/* Hero Stat Box */}
                <div
                  className={`p-4 mb-6 rounded bg-bgdark/90 border text-center ${
                    isCyan
                      ? 'border-mycyan/50 shadow-[0_0_12px_rgba(34,211,238,0.2)]'
                      : 'border-myyellow/50 shadow-[0_0_12px_rgba(250,204,21,0.2)]'
                  }`}
                >
                  <div
                    className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight ${
                      isCyan ? 'text-mycyan' : 'text-myyellow'
                    }`}
                  >
                    {item.statBig}
                  </div>
                  <div className="text-xs font-mono tracking-widest text-txt/70 mt-1 uppercase">
                    {item.statSub}
                  </div>
                </div>

                <p className="text-txt/80 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-txt/10 flex items-center justify-between text-xs font-mono text-txt/50 mt-auto">
                <span className="flex items-center gap-1.5">
                  <FaTrophy
                    className={isCyan ? 'text-mycyan' : 'text-myyellow'}
                  />
                  <span>VERIFIED MILESTONE</span>
                </span>
                <span
                  className={`w-2 h-2 rotate-45 ${
                    isCyan ? 'bg-mycyan' : 'bg-myyellow'
                  }`}
                />
              </div>
            </div>
          );
        })()}

        {/* CosmosHack Card */}
        {(() => {
          const item = SECONDARY_ACHIEVEMENTS[0];
          const isCyan = item.accent === 'cyan';

          return (
            <div
              key={item.id}
              className={`bg-bgmed/30 backdrop-blur-md p-6 sm:p-7 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1.5 ${
                isCyan
                  ? 'border-2 border-mycyan glow-faint-cyan'
                  : 'border-2 border-myyellow glow-faint-yellow'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-txt/10">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono bg-bgdark ${
                      isCyan
                        ? 'border border-mycyan glow-faint-cyan text-mycyan'
                        : 'border border-myyellow glow-faint-yellow text-myyellow'
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isCyan ? 'bg-mycyan' : 'bg-myyellow'
                      }`}
                    />
                    {item.badge}
                  </span>

                  <span className="text-[11px] font-mono text-txt/50 border border-white/10 px-2.5 py-0.5 rounded-full bg-bgdark/60">
                    {item.format}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-txt mb-2">
                  {item.title}
                </h3>

                {/* Location indicator for CosmosHack */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-txt/70 mb-5">
                  <FaMapMarkerAlt className="text-[11px] text-myyellow" />
                  <span>Online</span>
                </div>

                {/* Hero Stat Box for CosmosHack */}
                <div
                  className={`p-4 mb-6 rounded bg-bgdark/90 border text-center ${
                    isCyan
                      ? 'border-mycyan/50 shadow-[0_0_12px_rgba(34,211,238,0.2)]'
                      : 'border-myyellow/50 shadow-[0_0_12px_rgba(250,204,21,0.2)]'
                  }`}
                >
                  <div
                    className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight ${
                      isCyan ? 'text-mycyan' : 'text-myyellow'
                    }`}
                  >
                    FINALIST
                  </div>
                  <div className="text-xs font-mono tracking-widest text-txt/70 mt-1 uppercase">
                    ONLINE HACKATHON
                  </div>
                </div>

                <p className="text-txt/80 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-txt/10 flex items-center justify-between text-xs font-mono text-txt/50 mt-auto">
                <span className="flex items-center gap-1.5">
                  <FaAward
                    className={isCyan ? 'text-mycyan' : 'text-myyellow'}
                  />
                  <span>TECHNICAL PARTICIPATION</span>
                </span>
                <span
                  className={`w-2 h-2 rotate-45 ${
                    isCyan ? 'bg-mycyan' : 'bg-myyellow'
                  }`}
                />
              </div>
            </div>
          );
        })()}
      </div>

      {/* Row 3: Technical Competitions, Workshops & Events (Put in a different way below in a row) */}
      {(() => {
        const item = SECONDARY_ACHIEVEMENTS[1];

        return (
          <div className="mt-8 bg-bgmed/30 backdrop-blur-md border-2 border-myyellow glow-faint-yellow p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-1">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="lg:w-[42%] flex items-start gap-4">
                <div className="w-12 h-12 rotate-45 flex items-center justify-center shrink-0 bg-myyellow glow-faint-yellow text-bgdark mt-1">
                  <FaAward className="-rotate-45 text-xl" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold font-mono bg-bgdark border border-myyellow glow-faint-yellow text-myyellow">
                      <span className="w-1.5 h-1.5 rounded-full bg-myyellow" />
                      {item.badge}
                    </span>
                    <span className="text-[11px] font-mono text-txt/50 border border-white/10 px-2.5 py-0.5 rounded-full bg-bgdark/60">
                      {item.format}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-txt">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="lg:w-[58%] lg:border-l lg:border-txt/10 lg:pl-8">
                <p className="text-txt/80 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-xs font-mono text-txt/50 pt-2 border-t border-txt/10">
                  <span className="flex items-center gap-1.5 text-myyellow">
                    <FaTrophy className="text-xs" />
                    <span>CONTINUOUS TECHNICAL COMMUNITY ENGAGEMENT</span>
                  </span>
                  <span className="w-2 h-2 rotate-45 bg-myyellow glow-faint-yellow" />
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Certificates & Credentials Gallery Subsection with side scroll */}
      <div className="mt-20 pt-10 border-t border-txt/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            
            <h3 className="text-glow-faint text-[24px] md:text-[32px] font-bold text-myyellow">
              CERTIFICATES & CREDENTIALS
            </h3>
            <p className="text-txt/70 text-xs sm:text-sm font-mono mt-1">
              Learning milestones and credentials from courses, workshops, and technical events.
            </p>
          </div>

          {/* Desktop Scroll Arrows */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Scroll certificates left"
              className="w-10 h-10 border-2 border-mycyan glow-faint-cyan bg-bgdark text-mycyan hover:bg-mycyan hover:text-bgdark transition-all duration-200 flex items-center justify-center cursor-pointer select-none active:scale-95"
            >
              <FaChevronLeft className="text-sm" />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              aria-label="Scroll certificates right"
              className="w-10 h-10 border-2 border-myyellow glow-faint-yellow bg-bgdark text-myyellow hover:bg-myyellow hover:text-bgdark transition-all duration-200 flex items-center justify-center cursor-pointer select-none active:scale-95"
            >
              <FaChevronRight className="text-sm" />
            </button>
          </div>
        </div>

        {/* Side Scrollable Gallery: Touch-scrollable on phone, arrow-scrollable on desktop */}
        <div
          ref={certScrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-6 pt-2 px-1 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'thin', scrollbarColor: '#22d3ee40 #1a1a1a' }}
        >
          {CERTIFICATES_DATA.map((cert, index) => (
            <CertificateCard key={cert.id} cert={cert} index={index} />
          ))}
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex sm:hidden items-center justify-center gap-2 text-xs font-mono text-txt/40 mt-2">
          <span>← Swipe horizontally to browse →</span>
        </div>
      </div>
    </section>
  );
}
