import { useEffect, useState } from "react";

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 bg-gradient-to-b from-[#0a0a1a] via-[#0a0f1f] to-[#001010] relative overflow-hidden"
    >
      {/* New glowing blobs */}
      <div className="absolute top-16 left-10 w-48 md:w-72 h-48 md:h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-24 right-10 w-56 md:w-96 h-56 md:h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold relative inline-block tracking-wide">
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
              About Me
            </span>
            <div className="absolute w-full h-1 bg-gradient-to-r from-orange-400 to-teal-400 bottom-0 left-0 transform translate-y-3 md:translate-y-4 rounded-full"></div>
          </h2>
        </div>

        {/* 2-column layout */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16">
          {/* LEFT: Education + Interests */}
          <div className="flex flex-col gap-8 md:w-1/3">
            {/* Education */}
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/70 p-6 rounded-2xl border border-teal-500/10 shadow-lg hover:shadow-orange-400/30 transition-transform transform hover:-translate-y-2 duration-500">
              <div className="flex items-center mb-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-orange-500/20 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-6 md:w-6 text-orange-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-orange-400 text-lg md:text-xl">
                  Education
                </h4>
              </div>
              <ul className="text-gray-300 space-y-3 text-sm md:text-base pl-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  Schooling at Nehru World School, Ghaziabad
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  B.Tech in Computer Science
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mr-3"></span>
                  Bennett University, 2022-2026
                </li>
              </ul>
            </div>

            {/* Interests */}
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/70 p-6 rounded-2xl border border-pink-500/10 shadow-lg hover:shadow-pink-400/30 transition-transform transform hover:-translate-y-2 duration-500">
              <div className="flex items-center mb-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-pink-500/20 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 md:h-6 md:w-6 text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h4 className="font-bold text-pink-400 text-lg md:text-xl">
                  Interests
                </h4>
              </div>
              <ul className="text-gray-300 space-y-3 text-sm md:text-base pl-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Web Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  Data Science
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-400 rounded-full mr-3"></span>
                  DSA
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT: Written content */}
          <div className="backdrop-blur-md p-6 md:p-10 rounded-3xl border border-white/10 bg-slate-900/60 shadow-[0_0_25px_rgba(0,255,200,0.2)] hover:shadow-[0_0_40px_rgba(255,140,0,0.3)] transition-all duration-500 md:w-2/3">
            

            <div className="space-y-4 font-serif md:space-y-6 text-base md:text-lg">
              {isMobile ? (
                <p className="text-gray-200 leading-relaxed">
                  I'm a third-year B.Tech student at Bennett University
                  specializing in Computer Science & Engineering. I build
                  responsive full-stack web applications using HTML, CSS,
                  JavaScript, React, and Python, and I'm continuously exploring
                  AI, data science, and backend development with Node.js, Flask,
                  and APIs.
                </p>
              ) : (
                <>
                  <p className="text-gray-200 leading-relaxed">
                    I'm a third-year B.Tech student at Bennett University with a
                    strong foundation in full-stack web development using HTML,
                    CSS, JavaScript, React, and Python. I specialize in building
                    responsive, user-friendly, and scalable applications, and I
                    enjoy designing clean and modern UIs optimized for both
                    desktop and mobile.
                  </p>

                  <p className="text-gray-200 leading-relaxed">
                    My technical background includes C++, data structures &
                    algorithms, object-oriented programming, and backend
                    development with Node.js, Express, and Flask. I am familiar
                    with database integration (SQL & MySQL) and version control
                    with Git in collaborative, Agile environments.
                  </p>

                  <p className="text-gray-200 leading-relaxed">
                    Beyond software development, I am passionate about AI,
                    machine learning, and NLP. I have completed internships and
                    projects leveraging ML models, including SMS spam detection
                    and text summarization, and I enjoy exploring emerging tools
                    like Langchain and Power Query for intelligent automation. I
                    combine technical expertise with creative problem-solving to
                    deliver high-quality, impactful solutions.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
