import { Search, Cpu, Rocket, ShieldCheck, BarChart3 } from "lucide-react";

export default function AboutSection() {
  const steps = [
    { title: "DISCOVER", desc: "We align on business goals, map high-value use cases and assess your data, systems and controls.", icon: <Search className="w-5 h-5 text-blue-900" /> },
    { title: "DESIGN", desc: "We define the target architecture, integration approach, governance model and success metrics.", icon: <Cpu className="w-5 h-5 text-blue-900" /> },
    { title: "BUILD", desc: "We develop agents against your real data and integration constraints — proven beyond a demo.", icon: <Rocket className="w-5 h-5 text-blue-900" /> },
    { title: "DEPLOY", desc: "We integrate, test and ship to your production environment with monitoring and audit logging.", icon: <ShieldCheck className="w-5 h-5 text-blue-900" /> },
    { title: "SCALE", desc: "We expand coverage, tune performance and provide ongoing support, retraining and optimisation.", icon: <BarChart3 className="w-5 h-5 text-blue-900" /> },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 flex flex-col lg:flex-row w-full min-h-auto lg:min-h-[600px] px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden bg-white gap-0">
      {/* LEFT: About Intro */}
      <div className="bg-[#1a194d] p-8 sm:p-10 lg:w-1/3 flex flex-col justify-center text-white">
        <h2 className="text-3xl sm:text-4xl font-light tracking-widest mb-4 sm:mb-6">ABOUT AGENTICSENSE</h2>
        <p className="text-sm sm:text-md leading-relaxed opacity-90 mb-6 sm:mb-8">
          AgenticSense builds intelligent AI agents that help businesses automate work, make smarter decisions and scale faster. We specialize in ERP-native AI integration, finance automation and business process automation delivering production-grade systems, not pilots that never ship.
        </p>
      <p className="text-sm leading-relaxed opacity-70 mb-6 sm:mb-8">
  Our distributed team of AI engineers and enterprise architects bridges the gap between complex business logic and cutting-edge technology, ensuring seamless, production-grade deployment for every client.
</p>
        <a href="/about" className="self-start px-6 py-2 bg-white text-[#1a194d] text-[10px] font-bold rounded-full hover:bg-gray-100 transition-colors uppercase tracking-wider">
          → About AgenticSense
        </a>
      </div>

      {/* MIDDLE: Image */}
      <div className="relative bg-black/50 lg:w-1/3 min-h-[260px] sm:min-h-[360px] lg:min-h-0">
        <img src="/about.webp" alt="AgenticSense AI team building intelligent automation systems" className="absolute inset-0 w-full h-full object-cover" />
      </div>

      {/* RIGHT: How We Work */}
      <div className="bg-[#EFF2F9] p-8 sm:p-10 lg:w-1/3 flex flex-col justify-center">
        <h3 className="text-2xl sm:text-3xl font-light text-gray-800 mb-8 sm:mb-10 tracking-wider">HOW WE DELIVER</h3>
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
