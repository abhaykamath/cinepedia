import { ThemeProvider } from "@/components/theme-provider";
import { useCallback, useState } from "react";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const [input, setInput] = useState("");

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInput(e.target.value);
    },
    []
  );

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar input={input} handleInputChange={handleInputChange} />
        <main className="p-4 flex-1">
          <p>Your search query: {input}</p>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
