import { useState, useEffect } from "react";
import PowerButton from "./components/PowerButton";

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
      {!isPowered && <PowerButton onPower={() => setIsPowered(true)}/>}
    </div>
  );
}

export default App;