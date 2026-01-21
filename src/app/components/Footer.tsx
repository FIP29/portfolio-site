import { Heart, Code } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0e27] border-t border-[#ff6b6b]/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-gray-400">
            <p>© {new Date().getFullYear()} Fokhrul. All rights reserved.</p>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
            <p>Made with</p>
            <Heart className="w-4 h-4 text-[#ff6b6b] fill-[#ff6b6b] animate-pulse" />
            <p>and</p>
            <Code className="w-4 h-4 text-[#4a5fc1]" />
            <p>using MERN Stack</p>
          </div>
          <div className="flex justify-center gap-4 text-xs text-gray-600">
            <span className="hover:text-[#ff6b6b] transition-colors cursor-pointer">React</span>
            <span>•</span>
            <span className="hover:text-[#ff6b6b] transition-colors cursor-pointer">Tailwind CSS</span>
            <span>•</span>
            <span className="hover:text-[#ff6b6b] transition-colors cursor-pointer">TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
