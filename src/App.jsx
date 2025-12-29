import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [isPowered, setIsPowered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      document.documentElement.style.setProperty("--mx", `${x}%`);
      document.documentElement.style.setProperty("--my", `${y}%`);
    };

    // const handleScroll = () => {
    //   const energy = Math.min(window.scrollY / 500, 1);
    //   document.documentElement.style.setProperty("--energy", energy);
    // };

    window.addEventListener("mousemove", handleMouseMove);
    // window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("mousemove", handleMouseMove);
    // window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return(
    <div className="w-screen h-screen bg-reactive text-white relative overflow-hidden">
      {!isPowered && (
        <button onClick={() => setIsPowered(true)} className="absolute inset-0 m-auto w-24 h-24 rounded-full border border-power text-power hover:shadow-glow transition-all duration-300">
          POWER
        </button>
      )}
    </div>
  );
}

export default App;