export default function PowerButton({ onPower }) {
    return(
        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-50">
            <button onClick={onPower} className="group relative w-28 h-28 rounded-full bg-black border border-power text-power font-medium tracking-wide transform-gpu transition-all duration-200 hover:shadow-glow active:translate-y-1" style={{perspective: "800px",}}>
                {/* 3D depth layer */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-b from-power/30 to-transparent translate-y-1-z-10 blur-md"/>

                {/* Inner Face */}
                <span className="relative z-10 flex item-center justify-center w-full h-full rounded-full bg-bg group-active:scale-95 transition-transform">
                    Power
                    </span>
            </button>
        </div>
    );
}