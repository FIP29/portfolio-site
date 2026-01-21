import { ArrowDown, Code2, Download } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import heroImage from "@/assets/hero.png";


export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27]/80 via-[#0a0e27]/90 to-[#0a0e27]"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#ff6b6b]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#4a5fc1]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ffa500]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-left">
            <div className="space-y-2">
              <p className="text-[#ff6b6b] text-lg font-semibold flex items-center gap-2">
                <Code2 className="w-5 h-5" />
                Hello, I'm
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
                <span className="bg-gradient-to-r from-[#ff6b6b] via-[#ffa500] to-[#ff6b6b] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  Fokhrul
                </span>
              </h1>
              <div className="space-y-1">
                <p className="text-2xl md:text-3xl text-gray-300">
                  Computer Science Engineer
                </p>
                <p className="text-xl md:text-2xl text-gray-400">
                  MERN Stack Developer
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed max-w-xl">
              Crafting modern web experiences with cutting-edge technologies.
              Passionate about building scalable applications that make a difference.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] hover:opacity-90 text-white border-0 shadow-lg shadow-[#ff6b6b]/30 transition-all duration-300 hover:shadow-[#ff6b6b]/50 hover:scale-105"
                onClick={scrollToContact}
              >
                Get In Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#ff6b6b]/50 text-gray-300 hover:bg-[#ff6b6b]/10 hover:text-[#ff6b6b] hover:border-[#ff6b6b] transition-all duration-300"
                onClick={scrollToProjects}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#4a5fc1]/50 text-gray-300 hover:bg-[#4a5fc1]/10 hover:text-[#4a5fc1] hover:border-[#4a5fc1] transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Resume
              </Button>
            </div>

            {/* Tech Stack Icons */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["MongoDB", "Express", "React", "Node.js", "TypeScript"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-[#1e2542]/50 backdrop-blur-sm border border-[#ff6b6b]/20 rounded-lg text-gray-300 text-sm hover:border-[#ff6b6b] hover:bg-[#1e2542] transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Image with Glowing Effect */}
          <div className="relative hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={heroImage}
                alt="Fokhrul"
                className="relative rounded-2xl shadow-2xl border-2 border-[#ff6b6b]/30 hover:border-[#ff6b6b]/60 transition-all duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <ArrowDown className="h-6 w-6 text-[#ff6b6b]" />
      </div>

      <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            animation: gradient 3s ease infinite;
          }
        `}
      </style>
    </section>
  );
}
