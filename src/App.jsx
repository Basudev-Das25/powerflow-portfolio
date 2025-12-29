import { useState, useEffect } from "react";
import PowerButton from "./components/PowerButton";
import WireSystem from "./components/WireSystem";

function App() {
  const [isPowered, setIsPowered] = useState(false);
  const [isBooted, setIsBooted] = useState(false);

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
    document.body.style.overflow = isBooted ? "auto" : "hidden";
    return () => (document.body.style.overflow = "auto");
  }, [isBooted]);

  const handlePower = () => {
    if (isPowered) return;

    setIsPowered(true);

    //Boot delay for visible transformation
    setTimeout(() => {
      setIsBooted(true);
    }, 600);
  };

  return(
    <div className="w-screen h-screen bg-reactive text-white relative overflow-hidden">
      <PowerButton onPower={handlePower} isBooted={isBooted}/>
      <WireSystem isBooted={isBooted} />

      {/* vertical space for future wire */}
      {isBooted && <div className="h-[200vh]"/>}
    </div>
  );
}

export default App;