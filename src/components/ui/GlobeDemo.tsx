import { Globe } from "@/components/ui/globe"

export function GlobeDemo() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-4xl h-[500px] overflow-hidden rounded-lg bg-black md:shadow-xl">
      {/* Globe positioned behind the text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Globe />
      </div>
      
      {/* Text overlay positioned in front of the globe */}
      <div className="absolute z-10 text-center pointer-events-none">
        <span className="whitespace-pre-wrap bg-gradient-to-b from-white to-gray-300/50 bg-clip-text text-center text-7xl font-serif leading-none text-transparent">
          Strategic
          <br />
          Matter
        </span>
      </div>
      
      {/* Subtle gradient overlay */}
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.4),rgba(0,0,0,0))]" />
    </div>
  )
}
