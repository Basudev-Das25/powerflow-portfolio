import { useState, useEffect } from "react";


function App() {
  const [isPowered, setIsPowered] = useState(false);

  //Background interaction
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      document.documentElement.style.setProperty("--mx", `${x}%`);
      document.documentElement.style.setProperty("--my", `${y}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.addEventListener("mousemove", handleMouseMove);
    
    };
  }, []);

  //Scroll Lock Control
  useEffect(() => {
    if(!isPowered) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isPowered]);

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