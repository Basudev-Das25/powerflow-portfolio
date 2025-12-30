import { forwardRef } from "react";

const PowerButton = forwardRef(({ onPower, isBooted }, ref) => {
  return (
    <div
      // style={{ outline: "2px solid red" }}
      ref={ref}
      className={`
        fixed z-50
        transition-all duration-700 ease-in-out
        ${isBooted
          ? "top-6 left-6 scale-75"
          : "top-12 left-1/2 -translate-x-1/2 scale-100"}
      `}
    >
      <button
        onClick={onPower}
        disabled={isBooted}
        className="
          group relative
          w-28 h-28 rounded-full
          bg-black
          border border-power
          text-power font-medium tracking-wide
          transform-gpu
          transition-all duration-200
          hover:shadow-glow
          active:translate-y-1
          disabled:cursor-default
        "
        style={{ perspective: "800px" }}
      >
        <span
          className="
            absolute inset-0 rounded-full
            bg-gradient-to-b from-power/30 to-transparent
            translate-y-1
            -z-10
            blur-md
          "
        />

        <span
          className="
            relative z-10
            flex items-center justify-center
            w-full h-full
            rounded-full
            bg-bg
            transition-transform
            group-active:scale-95
            translate-y-[1px]
          "
        >
          POWER
        </span>
      </button>
    </div>
  );
});

export default PowerButton;
