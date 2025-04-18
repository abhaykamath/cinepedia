import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Film, Search } from "lucide-react";

export function Navbar({
  input,
  handleInputChange,
}: {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <header className="w-full flex items-center justify-between px-4 py-3 border-b bg-background">
      {/* Logo */}
      <h1 className="text-lg font-semibold flex items-center gap-2">
        Cinepedia <Film />
      </h1>
      <div className="w-[50%] flex items-center gap-2">
        <Input value={input} onChange={(e) => handleInputChange(e)} />
        <Button variant="outline">
          <Search />
        </Button>
      </div>
      {/* Right Side */}
      <div className="flex items-center gap-2">
        <ModeToggle />
        <Button variant="outline">Sign In</Button>
      </div>
    </header>
  );
}
