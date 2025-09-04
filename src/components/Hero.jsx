import React, { useEffect, useRef } from "react";
import { Github, Linkedin, Instagram } from "lucide-react";

// Custom X Logo (you had it but not used — kept as-is for possible use)
const XLogo = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
  </svg>
);

const Hero = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Nipunbhardwaj0001",
      icon: (props) => <Github {...props} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/nipun-bhardwaj-4b6812212/",
      icon: (props) => <Linkedin {...props} />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/neeepunlost/",
      icon: (props) => <Instagram {...props} />,
    },
  ];

  const canvasRef = useRef(null);

  // Enhanced neon particle network
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    const particlesArray = [];
    const numberOfParticles = 120;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1.5 - 0.75;
        this.speedY = Math.random() * 1.5 - 0.75;
        this.color = `hsl(${Math.random() * 360}, 80%, 60%)`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    };

    const connectParticles = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 140) {
            const opacity = 1 - distance / 140;
            ctx.strokeStyle = `hsla(${(a * 12) % 360}, 100%, 70%, ${opacity})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }

      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Particle background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Animated neon gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-700/30 via-cyan-700/20 to-transparent animate-pulse pointer-events-none"></div>

      {/* Floating neon blobs */}
      <div className="absolute top-1/4 left-1/4 w-36 h-36 rounded-full bg-pink-500/20 blur-3xl animate-bounce-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-cyan-500/20 blur-3xl animate-spin-slow"></div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-8">
          {/* Left side - Text */}
          <div className="w-full md:w-2/3 relative backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-white/10 bg-black/30 shadow-[0_0_25px_rgba(0,255,255,0.3)] hover:shadow-[0_0_35px_rgba(255,0,255,0.5)] transition-all duration-500">
            <div className="absolute -top-8 -right-8 w-14 h-14 border-t-4 border-r-4 border-pink-400 rotate-45 opacity-70 animate-ping hidden sm:block"></div>
            <div className="absolute -bottom-8 -left-8 w-14 h-14 border-b-4 border-l-4 border-cyan-400 -rotate-45 opacity-70 animate-ping delay-200 hidden sm:block"></div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
              <span className="block text-gray-300 mb-2 animate-fade-in">
                Hey, It's
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-cyan-400 to-purple-500 animate-text-glow">
                Nipun Bhardwaj
              </span>
            </h1>

            <div className="w-28 h-0.5 bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 my-4 animate-wiggle"></div>

            <h2 className="text-lg sm:text-xl md:text-2xl font-medium mb-3 text-gray-200 tracking-wide">
              B.Tech Student at Bennett University
            </h2>
            <p className="text-base md:text-lg text-gray-400 mb-6 max-w-md leading-relaxed">
              Building bridges between technology and imagination, one line of code at a time.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://drive.google.com/file/d/1fxIz6G6RrXQmrNKNgqspRVKXgvzVKPyc/view?usp=sharing"
                className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold text-white shadow-lg hover:shadow-pink-500/50 transition-all duration-300 text-sm md:text-base"
                download="Nipun_bhardwaj_cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
              <a
                href="#projects"
                className="px-6 py-2 bg-transparent border border-cyan-400 rounded-lg font-semibold text-cyan-300 hover:bg-cyan-500 hover:text-black transition-all duration-300 text-sm md:text-base"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right side - Social Links */}
          <div className="flex flex-row md:flex-col mt-6 md:mt-0 gap-4 relative backdrop-blur-md p-5 rounded-2xl border border-white/10 bg-black/30 shadow-lg">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group text-cyan-400 hover:text-white transform hover:scale-125 transition-all duration-300"
                aria-label={link.name}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 rounded-md blur-md opacity-60 group-hover:opacity-90 transition-all duration-300"></div>
                <div className="relative p-2 border border-white/30 rounded-md bg-black/40 backdrop-blur-sm">
                  {link.icon({ className: "w-6 h-6" })}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
