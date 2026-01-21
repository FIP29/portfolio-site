import { ExternalLink, Github, Star } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

const projects = [
  {
    title: "Full-Stack E-Commerce Platform",
    description: "A complete e-commerce solution built with MERN stack featuring payment integration, real-time inventory, user authentication, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2ODk0NTEzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["MongoDB", "Express", "React", "Node.js", "Stripe"],
    featured: true,
  },
  {
    title: "Real-Time Task Manager",
    description: "Collaborative task management application with live updates, team collaboration features, file attachments, and progress tracking dashboard.",
    image: "https://images.unsplash.com/photo-1627634771121-fa3db5779f60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3R8ZW58MXx8fHwxNzY4OTExNTEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "Socket.io", "MongoDB", "Express", "Redux"],
    featured: true,
  },
  {
    title: "Social Media Dashboard",
    description: "Modern social media analytics dashboard with data visualization, user engagement metrics, and automated reporting features.",
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzY4OTA4MzA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Next.js", "TypeScript", "Charts", "API Integration"],
    featured: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#0a0e27] to-[#141828] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] mx-auto mb-4"></div>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Showcasing my best work in full-stack development
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-[#1e2542]/30 backdrop-blur-sm border-[#ff6b6b]/20 overflow-hidden hover:border-[#ff6b6b] hover:shadow-2xl hover:shadow-[#ff6b6b]/20 transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] rounded-full text-white text-xs font-semibold shadow-lg">
                    <Star className="w-3 h-3 fill-white" />
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27] to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-bold text-gray-200 group-hover:text-[#ff6b6b] transition-colors duration-300">
                  {project.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#0a0e27]/50 border border-[#ff6b6b]/30 text-gray-300 rounded-lg text-xs hover:border-[#ff6b6b] hover:text-[#ff6b6b] transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 border-[#ff6b6b]/50 text-gray-300 hover:bg-[#ff6b6b]/10 hover:text-[#ff6b6b] hover:border-[#ff6b6b]"
                >
                  <Github className="h-4 w-4 mr-2" />
                  Code
                </Button>
                <Button
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] hover:opacity-90 border-0 shadow-lg shadow-[#ff6b6b]/30"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-[#ff6b6b]/50 text-gray-300 hover:bg-[#ff6b6b]/10 hover:text-[#ff6b6b] hover:border-[#ff6b6b] transition-all duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
