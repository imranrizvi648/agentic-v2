import { ClipboardList, PenTool, Code, CheckCircle, Headphones } from "lucide-react";

export default function AboutSection() {
  const steps = [
    { title: "PLANNING", desc: "Project Analysis, Consultation & Research, ERP and much more.", icon: <ClipboardList className="w-5 h-5 text-blue-900" /> },
    { title: "DESIGN", desc: "Wireframes, Design Concepts, Revisions & Finalization & Creativity.", icon: <PenTool className="w-5 h-5 text-blue-900" /> },
    { title: "DEVELOPMENT", desc: "Content Integration, Programming code for custom requirements.", icon: <Code className="w-5 h-5 text-blue-900" /> },
    { title: "TESTING", desc: "Testing, Testing & Testing we test your product then we deliver.", icon: <CheckCircle className="w-5 h-5 text-blue-900" /> },
    { title: "DELIVERY & SUPPORT", desc: "We are delivering your project on time with full support to client.", icon: <Headphones className="w-5 h-5 text-blue-900" /> },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 flex flex-col lg:flex-row w-full min-h-auto lg:min-h-[600px] px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden bg-white gap-0">
      {/* LEFT: About Intro */}
      <div className="bg-[#1a194d] p-8 sm:p-10 lg:w-1/3 flex flex-col justify-center text-white">
        <h2 className="text-3xl sm:text-4xl font-light tracking-widest mb-4 sm:mb-6">ABOUT AGENTICSENSE</h2>
        <p className="text-sm sm:text-md leading-relaxed opacity-90 mb-6 sm:mb-8">
          AgenticSense focuses on helping small to medium, medium to big size company owners
          develop integrate and maintain AI Automation systems that will prove beneficial
          and effective for their operational needs. Our company has acquired exceptional
          talent over the years that range from system experts to professional developers.
        </p>
        <button className="self-start px-6 py-2 bg-white text-[#003B6D] text-[10px] font-bold rounded-full hover:bg-gray-100 transition-colors uppercase tracking-wider">
          → About AgenticSense
        </button>
      </div>

      {/* MIDDLE: Image */}
      <div className="relative bg-black/50 lg:w-1/3 min-h-[260px] sm:min-h-[360px] lg:min-h-0">
        <img src="/about.webp" alt="Professional Team" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* RIGHT: Keys to Success */}
      <div className="bg-[#EFF2F9] p-8 sm:p-10 lg:w-1/3 flex flex-col justify-center">
        <h3 className="text-2xl sm:text-3xl font-light text-gray-800 mb-8 sm:mb-10 tracking-wider">OUR 5 KEY TO SUCCESS</h3>
        <div className="space-y-6 sm:space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center">{step.icon}</div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 tracking-wider">{step.title}</h4>
                <p className="text-[14px] text-gray-500 mt-1 leading-tight">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
