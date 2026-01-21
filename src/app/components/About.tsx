import { Code, Cpu, Lightbulb, Rocket } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and efficient code",
    },
    {
      icon: Rocket,
      title: "Fast Learner",
      description: "Adapting to new technologies quickly",
    },
    {
      icon: Cpu,
      title: "Problem Solver",
      description: "Tackling complex challenges creatively",
    },
    {
      icon: Lightbulb,
      title: "Innovative",
      description: "Building solutions that matter",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0a0e27] to-[#141828] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff6b6b] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative p-8 bg-[#1e2542]/30 backdrop-blur-sm border border-[#ff6b6b]/20 rounded-2xl hover:border-[#ff6b6b]/50 transition-all duration-300">
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#ff6b6b] rounded-tl-lg"></div>
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#ffa500] rounded-br-lg"></div>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate <span className="text-[#ff6b6b] font-semibold">Computer Science Engineer</span> specializing 
                in full-stack development with the <span className="text-[#ffa500] font-semibold">MERN stack</span>. 
                My journey in software development is driven by a desire to create innovative solutions that solve real-world problems.
              </p>
            </div>

            <div className="relative p-8 bg-[#1e2542]/30 backdrop-blur-sm border border-[#4a5fc1]/20 rounded-2xl hover:border-[#4a5fc1]/50 transition-all duration-300">
              <p className="text-lg text-gray-300 leading-relaxed">
                With expertise in MongoDB, Express.js, React, and Node.js, I build scalable 
                and performant web applications. I'm constantly exploring new technologies 
                and best practices to deliver exceptional digital experiences.
              </p>
            </div>

            <div className="relative p-8 bg-gradient-to-br from-[#ff6b6b]/10 to-[#4a5fc1]/10 backdrop-blur-sm border border-[#ff6b6b]/20 rounded-2xl">
              <p className="text-lg text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me contributing to open-source projects, 
                learning about emerging technologies, or sharing my knowledge with the developer community. 
                Let's build something amazing together!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 bg-[#1e2542]/30 backdrop-blur-sm border border-[#ff6b6b]/20 rounded-xl hover:border-[#ff6b6b] hover:bg-[#1e2542]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff6b6b]/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b6b]/0 to-[#ffa500]/0 group-hover:from-[#ff6b6b]/5 group-hover:to-[#ffa500]/5 rounded-xl transition-all duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 mb-4 bg-gradient-to-br from-[#ff6b6b] to-[#ffa500] rounded-lg flex items-center justify-center shadow-lg shadow-[#ff6b6b]/30">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-200 mb-2 text-lg">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
