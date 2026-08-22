import React from 'react';

export default function Project() {
  const projects = [
    {
      name: "Basic HTML/CSS Practice",
      description: "Started with forms, basic layouts, and simple CSS cards. Practiced building navigation bars and rewriting small webpages on my own to understand structure and styling.",
      tech: "HTML, CSS"
    },
    {
      name: "Website Clones",
      description: "Recreated parts of the UltraEdit website using Flexbox and proper layout structure. Also made a partial Netflix clone where I practiced background positioning, spacing, and section design.",
      tech: "HTML, CSS"
    },
    {
      name: "Responsive Webpage",
      description: "Designed a webpage and made it responsive using media queries, flexible units, column/row layout changes, and a mobile hamburger menu. Focused on clean, scalable UI structure.",
      tech: "HTML, CSS"
    },
     {
      name: "CSS Animations",
      description: " Experimented with CSS animations by creating objects that move, rotate, transform, and interact smoothly. Also built a fast color-changing bouncing ball animation using @keyframes, timing functions, and transforms — sharpening my control over motion, loops, and visual behavior in CSS.",
      tech: "HTML, CSS"
    },
    {
      name: "JS Color Experiments",
      description: "Built interactive UI features using JavaScript — including buttons that change the entire page's background + text colors, and a random-color generator that updates multiple boxes at once using Math.random(). This project strengthened my DOM manipulation, event handling, and dynamic styling skills.",
      tech: "HTML, CSS, JS"
    },
    {
      name: "Interactive Figure",
      description: "Built a fully CSS-made figure placed at the corner of the page. On hovering a “Come Here” button, the figure moves toward the button and changes expression, then returns smoothly when the hover ends.",
      tech: "HTML, CSS, JS"
    },
     {
      name: "Tic Tac Toe",
      description: "Created a full Tic Tac Toe game with proper win/lose/draw detection, a reset system with confirmation popup, replay button, and a clean layout. Focused on logic and UI feedback.",
      tech: "HTML, CSS, JS"
    },
    {
      name: "Data Analysis",
      description: "Used real datasets and cleaned them using pandas — handled missing values, removed outliers, merged tables, and prepared the data properly. Then visualized everything, creating different charts to understand patterns and trends.",
      tech: "Pandas, Matplotlib, Seaborn"
    },
   {
      name: "React Dynamic Form",
      description: "Built a dynamic form with React: live name display, default radio selections, a dropdown with an “Other” option that reveals an input field, a skills checkbox section that updates live, ability to add custom skills, and a clear-all option.",
      tech: "React.js"
    },

  ];

  return (
    <div id="projects" className="w-4/5 py-12 px-4 mx-auto">
      <div className="w-full mx-auto">
        <h2 className="text-glow-faint text-[30px] lg-[40px] font-bold text-myyellow  w-full text-center mt-36">
              My Journey Through Projects
            </h2>
        
        
        <div className="w-full mt-16 mx-auto">
          <div className="relative">
            <div className="absolute right-4 md:right-24 top-1 bottom-0 w-0 border-r-3 border-mycyan z-0"></div>
            
            <div className="space-y-16 md:space-y-20">
              {projects.map((project, index) => (
                <div key={index} className="relative flex items-center justify-between">
                 
                  <div className="w-[85%] md:w-[70%] pr-4 md:pr-12">
                    <div className="glow-faint-cyan bg-bgmed/30 backdrop-blur-md border-2 border-mycyan  p-4 md:p-6">
                      <h3 className="text-lg md:text-xl font-semibold mb-3">{project.name}</h3> 
                      <p className="text-sm md:text-md mb-4 text-txt/70">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.split(', ').map((tech, i) => (
                          <span key={i} className="text-xs bg-mycyan/20 text-mycyan px-3 py-1 ">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="absolute right-0 md:right-6 right-[-22px] z-5">
                    <div className="relative md:w-24 glow-faint-yellow md:h-24 w-20 h-20  md:w-36 md:h-36 bg-myyellow rotate-45 flex items-center justify-center shadow-xl">
                      <span className="-rotate-45 text-bgdark font-bold text-xs md:text-lg text-center px-2 ">
                        {project.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}