import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Card, CardContent } from "@/app/components/ui/card";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out! This is a demo form.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, text: "fokhrul.islam.code404@gmail.com", href: "fokhrul.islam.code404@gmail.com" },
    { icon: Phone, text: "+880 1402 416547", href: "tel:+8801402416546" },
    { icon: MapPin, text: "Available for Remote Work", href: "#" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub", color: "hover:text-[#ff6b6b]" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-[#4a5fc1]" },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#141828] to-[#0a0e27] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#ff6b6b]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#4a5fc1]/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] mx-auto mb-4"></div>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Let's collaborate on your next project. I'm always open to discussing new opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-200 mb-2">Let's Work Together</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm available for freelance projects, full-time opportunities, or just a chat about technology.
                Feel free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="group flex items-center space-x-4 p-4 bg-[#1e2542]/30 backdrop-blur-sm border border-[#ff6b6b]/20 rounded-xl hover:border-[#ff6b6b] hover:bg-[#1e2542]/50 transition-all duration-300"
                  >
                    <div className="bg-gradient-to-br from-[#ff6b6b] to-[#ffa500] p-3 rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-300 group-hover:text-[#ff6b6b] transition-colors duration-300">
                      {item.text}
                    </span>
                  </a>
                );
              })}
            </div>

            <div>
              <h4 className="font-bold mb-4 text-gray-200 text-lg">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-4 bg-[#1e2542]/30 backdrop-blur-sm border border-[#ff6b6b]/20 rounded-xl hover:bg-[#1e2542]/50 hover:border-[#ff6b6b] transition-all duration-300 hover:scale-110 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="h-6 w-6 text-gray-300 group-hover:text-current transition-colors duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Badge */}
            <div className="p-6 bg-gradient-to-r from-[#ff6b6b]/10 to-[#ffa500]/10 border border-[#ff6b6b]/30 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-[#ff6b6b] rounded-full animate-pulse shadow-lg shadow-[#ff6b6b]/50"></div>
                <div>
                  <p className="text-gray-200 font-semibold">Available for Work</p>
                  <p className="text-gray-400 text-sm">Open to new opportunities</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-[#1e2542]/30 backdrop-blur-sm border-[#ff6b6b]/20 hover:border-[#ff6b6b]/50 transition-all duration-300">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-[#0a0e27]/50 border-[#ff6b6b]/30 text-gray-200 placeholder:text-gray-500 focus:border-[#ff6b6b] focus:ring-[#ff6b6b]/20"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-[#0a0e27]/50 border-[#ff6b6b]/30 text-gray-200 placeholder:text-gray-500 focus:border-[#ff6b6b] focus:ring-[#ff6b6b]/20"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or just say hi..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-[#0a0e27]/50 border-[#ff6b6b]/30 text-gray-200 placeholder:text-gray-500 focus:border-[#ff6b6b] focus:ring-[#ff6b6b]/20 resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#ff6b6b] to-[#ffa500] hover:opacity-90 text-white border-0 shadow-lg shadow-[#ff6b6b]/30 transition-all duration-300 hover:shadow-[#ff6b6b]/50 hover:scale-105"
                  size="lg"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
