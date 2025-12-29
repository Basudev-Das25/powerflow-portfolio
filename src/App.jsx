import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      document.documentElement.style.setProperty("--mx", `${x}%`);
      document.documentElement.style.setProperty("--my", `${y}%`);
    };

    const handleScroll = () => {
      const energy = Math.min(window.scrollY / 500, 1);
      document.documentElement.style.setProperty("--energy", energy);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return(
    <div className="w-screen h-screen bg-reactive text-white">
      {/* System OFF */}
    </div>
  );
}

export default App;