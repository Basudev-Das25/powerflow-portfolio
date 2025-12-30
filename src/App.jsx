
import { useState, useEffect, useRef } from "react";
import PowerButton from "./components/PowerButton";
import WireSystem from "./components/WireSystem";

function App() {
  
  const [isPowered, setIsPowered] = useState(false);
  const [isBooted, setIsBooted] = useState(false);
  const [wireStart, setWireStart] = useState({ x: 0, y: 0 });
  const [isWireReady, setIsWireReady] = useState(false);
  const powerRef = useRef(null);
  console.log("App render", { isPowered, isBooted });

  // Background interaction
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;

      document.documentElement.style.setProperty("--mx", `${x}%`);
      document.documentElement.style.setProperty("--my", `${y}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = isBooted ? "auto" : "hidden";
    return () => (document.body.style.overflow = "auto");
  }, [isBooted]);

  const handlePower = () => {
    if (isPowered) return;

    setIsPowered(true);

    setTimeout(() => {
      setIsBooted(true);
    }, 600);
  };

  // Measure button position for wire start
  useEffect(() => {
  if (!isBooted || !powerRef.current) return;

  const measure = () => {
    const rect = powerRef.current.getBoundingClientRect();

    setWireStart({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    });

    setIsWireReady(true);
  };

  // Delay until button animation finishes
  const timeout = setTimeout(measure, 750);

  return () => clearTimeout(timeout);
}, [isBooted]);


  return (
  <div className="w-screen min-h-screen bg-reactive text-white relative overflow-hidden">
    <PowerButton
      ref={powerRef}
      onPower={handlePower}
      isBooted={isBooted}
    />

    <WireSystem isBooted={isBooted && isWireReady}
    start={wireStart}
    />

    {isBooted && <div className="h-[200vh]" />}
  </div>
  );
}

export default App;
