import Link from "next/link";
import Image from "next/image";

const sectors = [
{ label: "Finance & Banking", icon: "", color: "text-amber-400" },
{ label: "Healthcare", icon: "", color: "text-emerald-400" },
{ label: "Real Estate", icon: "", color: "text-sky-400" },
{ label: "E-commerce", icon: "", color: "text-violet-400" },
{ label: "Education", icon: "", color: "text-rose-400" },
];

export default function HeroSection() {
return ( <section className="relative h-screen flex items-center overflow-hidden">

```
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image
      src="/Gemini_Generated_Image_2vling2vling2vli.png"
      alt="Background"
      fill
      priority
      className="object-cover"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/60" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* Left Content */}
      <div>
        

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-2 mt-15">
          AI Built for the{" "}
      
            Realities
       {" "}
          of Your Sector.
        </h1>

        <p className="text-lg text-white/80 leading-relaxed max-w-lg mb-4">
          Not AI awareness of your industry. Actual operational depth —
          built to the workflows, compliance requirements and data
          structures that define how your sector runs.
        </p>

        <p className="text-sm text-white/60 leading-relaxed max-w-lg mb-10">
          Five industries. Production deployments in each. Domain expertise
          that comes from building agents that work at the level of your
          system of record — not above it.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="#"
            className="inline-flex items-center gap-2 bg-[#1a194d] text-white font-bold text-sm px-4 sm:px-6 py-3.5 rounded-none  transition-colors"
          >
            Book a Sector Assessment →
          </Link>

          <Link
            href="#industries"
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-bold text-sm px-4 sm:px-6 py-3.5 rounded-none border border-white/20 hover:bg-white/20 transition-all"
          >
            Explore Industries
          </Link>
        </div>
      </div>

      {/* Right Cards */}
      <div className="hidden lg:grid gap-3">
        {sectors.map((sector) => (
          <div
            key={sector.label}
            className="flex items-center gap-5 bg-white/10 backdrop-blur-md border border-white/20 rounded px-4 sm:px-6 py-3 hover:bg-white/15 transition-all"
          >
            <span className={`text-2xl w-10 text-center ${sector.color}`}>
              {sector.icon}
            </span>

            <div className="flex-1">
              <p className="text-sm font-bold text-white">
                {sector.label}
              </p>
            </div>

            <span className="text-white/50">→</span>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>


);
}
