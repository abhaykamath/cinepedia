import { Github, Heart } from "lucide-react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full border-t bg-background text-muted-foreground py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        {/* Left */}
        <div className="flex items-center gap-1">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500" fill="currentColor" />
          <span>by Abhay Kamath • {currentYear}</span>
        </div>

        {/* Center */}
        <div className="text-center">
          <span>Built with </span>
          <span className="font-medium">React</span>,{" "}
          <span className="font-medium">Vite</span>,{" "}
          <span className="font-medium">TailwindCSS</span>,{" "}
          <span className="font-medium">ShadCN</span>
        </div>

        {/* Right (optional social or GitHub link) */}
        <div>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <Github className="w-4 h-4" />
            <span>GitHub - Follow</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
