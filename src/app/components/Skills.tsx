import { Code2, Database, Globe, Layers, Server, Terminal } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    color: "from-[#ff6b6b] to-[#ffa500]",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
  },
  {
    icon: Server,
    title: "Backend Development",
    color: "from-[#4a5fc1] to-[#6366f1]",
    skills: ["Node.js", "Express.js", "REST APIs", "GraphQL", "JWT Auth"],
  },
  {
    icon: Database,
    title: "Database & Storage",
    color: "from-[#ffa500] to-[#ff6b6b]",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "Supabase"],
  },
  {
    icon: Layers,
    title: "MERN Stack",
    color: "from-[#ec4899] to-[#ff6b6b]",
    skills: ["MongoDB", "Express", "React", "Node.js", "Full Stack Apps"],
  },
  {
    icon: Terminal,
    title: "Tools & Technologies",
    color: "from-[#6366f1] to-[#4a5fc1]",
    skills: ["Git/GitHub", "VS Code", "Postman", "Docker", "Linux"],
  },
  {
    icon: Globe,
    title: "Web Technologies",
    color: "from-[#ff6b6b] to-[#ec4899]",
    skills: ["Responsive Design", "PWA", "WebSockets", "RESTful APIs", "OAuth"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#141828] to-[#0a0e27] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] bg-clip-text text-transparent">
            Skills & Expertise
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] mx-auto mb-4"></div>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Specialized in MERN stack with expertise across modern web technologies
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="group bg-[#1e2542]/30 backdrop-blur-sm border-[#ff6b6b]/20 hover:border-[#ff6b6b] hover:bg-[#1e2542]/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ff6b6b]/20"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`bg-gradient-to-br ${category.color} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-200 mb-3">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1.5 bg-[#0a0e27]/50 border border-[#ff6b6b]/20 rounded-lg text-gray-300 text-sm hover:border-[#ff6b6b] hover:text-[#ff6b6b] transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Tech Stack Logos Section */}
        <div className="mt-16 p-8 bg-[#1e2542]/20 backdrop-blur-sm border border-[#ff6b6b]/10 rounded-2xl">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-200">
            Core <span className="bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] bg-clip-text text-transparent">MERN</span> Stack
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "MongoDB", color: "#47A248" },
              { name: "Express.js", color: "#ff6b6b" },
              { name: "React.js", color: "#61DAFB" },
              { name: "Node.js", color: "#339933" },
            ].map((tech, index) => (
              <div
                key={index}
                className="group p-6 bg-[#0a0e27]/50 border border-[#ff6b6b]/20 rounded-xl hover:border-[#ff6b6b] hover:bg-[#1e2542]/30 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-4xl font-bold mb-2" style={{ color: tech.color }}>
                  {tech.name.charAt(0)}
                </div>
                <p className="text-gray-300 font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
