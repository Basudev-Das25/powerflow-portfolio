export default function WireSystem({ isBooted }) {
    if (!isBooted) return null;

    return (
        <svg className="fixed top-0 left-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 2000" preserveAspectRatio="none">
            <path 
            d="
            M 80 80
            H 400 v600
            "
            fill="none"
            stroke="#00f6ff"
            strokeWidth="2"
            strokeLinecap="round"
            />
        </svg>
    );
}