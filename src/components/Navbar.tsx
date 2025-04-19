import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Film, Search } from "lucide-react";
import {
  SignedOut,
  SignInButton,
  SignedIn,
  UserButton,
  useSession,
} from "@clerk/clerk-react";

export function Navbar({
  input,
  handleInputChange,
  queryBySearch,
}: {
  input: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  queryBySearch: any;
}) {
  return (
    <header className="w-full flex items-center justify-between px-4 py-3 border-b bg-background">
      {/* Logo */}
      <h1 className="text-lg font-semibold flex items-center gap-2">
        <span className="hidden sm:block">Cinepedia</span> <Film />
      </h1>
      <div className="w-[50%] flex items-center gap-2">
        <Input
          value={input}
          placeholder="Search Cinepedia"
          onChange={(e) => handleInputChange(e)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && input.trim() !== "") {
              queryBySearch(input);
            }
          }}
        />
        <Button
          variant="outline"
          onClick={() => {
            queryBySearch(input);
          }}
        >
          <Search />
        </Button>
      </div>
      {/* Right Side */}
      <div className="flex items-center gap-2">
        <ModeToggle />
        <SignedOut>
          <SignInButton>
            <Button variant="outline">Sign In</Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
}
