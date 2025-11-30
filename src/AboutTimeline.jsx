const AboutTimeline = () => {
  const timeline = [
    {
      date: "June",
      text: "Started coding journey with HTML & CSS, my first steps into web development"
    },
    {
      date: "July",
      text: "Continued with CSS and began learning JavaScript, then took a long break."
    },
    {
      date: "Oct",
      text: "Continued with JS, explored React breifely, then got curious about ML. Started Python libraries to build pre-ML skills."
    },
    {
      date: "Nov",
      text: "Started focusing on React again, learned Tailwind CSS, got familiar with Git & GitHub. Now planning to grow more through projects."
    }
  ];

  return (
    <div className="relative pl-10 mt-22">
      <div className="absolute left-[58px] top-0 bottom-0 w-[3px] glow-faint-cyan bg-mycyan"></div>

      <div className="space-y-12">
        {timeline.map((item, index) => (
          <div key={index} className="relative flex gap-8">

            <div className="w-10 h-10">
              <div className="w-10 h-10 glow-faint-yellow bg-myyellow rotate-45 flex items-center justify-center">
                <span className="-rotate-45 font-bold text-bgdark text-sm">
                  {item.date}
                </span>
              </div>

              
            </div>
            <p className="max-w-xs text-txt text-base leading-snug">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutTimeline;