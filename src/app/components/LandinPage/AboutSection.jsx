import { ClipboardList, PenTool, Code, CheckCircle, Headphones } from "lucide-react";

export default function AboutSection() {
  const steps = [
    {
      title: "PLANNING",
      desc: "Project Analysis, Consultation & Research, ERP and much more.",
      icon: <ClipboardList className="w-5 h-5 text-blue-900" />,
    },
    {
      title: "DESIGN",
      desc: "Wireframes, Design Concepts, Revisions & Finalization & Creativity.",
      icon: <PenTool className="w-5 h-5 text-blue-900" />,
    },
    {
      title: "DEVELOPMENT",
      desc: "Content Integration, Programming code for custom requirements.",
      icon: <Code className="w-5 h-5 text-blue-900" />,
    },
    {
      title: "TESTING",
      desc: "Testing, Testing & Testing we test your product then we deliver.",
      icon: <CheckCircle className="w-5 h-5 text-blue-900" />,
    },
    {
      title: "DELIVERY & SUPPORT",
      desc: "We are delivering your project on time with full support to client.",
      icon: <Headphones className="w-5 h-5 text-blue-900" />,
    },
  ];

  return (
    <section className=" py-24  flex flex-col lg:flex-row w-full min-h-[600px] px-20 overflow-hidden bg-white">
      {/* LEFT COLUMN: About Intro (Dark Blue) */}
      <div className="bg-[#003B6D] p-10 lg:w-1/3 flex flex-col justify-center text-white">
        <h2 className="text-4xl font-light tracking-widest mb-6">
          ABOUT AGENTICSENSE
        </h2>
        <p className="text-md leading-relaxed opacity-90 mb-8">
          AgenticSense focuses on helping small to medium, medium to big size company owners 
          develop integrate and maintain AI Automation systems that will prove beneficial 
          and effective for their operational needs. Our company has acquired exceptional 
          talent over the years that range from system experts to professional developers.
        </p>
        <button className="self-start px-6 py-2 bg-white text-[#003B6D] text-[10px] font-bold rounded-full hover:bg-gray-100 transition-colors uppercase tracking-wider">
          → About AgenticSense
        </button>
      </div>

      {/* MIDDLE COLUMN: Image */}
      <div className="relative lg:w-1/3 min-h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1599110906885-b024c90c2773?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8" // Replace with your actual team/professional image
          alt="Professional Team"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* RIGHT COLUMN: Keys to Success */}
      <div className="bg-[#F7F7F7] p-10 lg:w-1/3 flex flex-col justify-center">
        <h3 className="text-3xl font-light text-gray-800 mb-10 tracking-wider">
          OUR 5 KEY TO SUCCESS
        </h3>
        
        <div className="space-y-8 "> 
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 border border-gray-200 rounded-full flex items-center justify-center">
                {step.icon}
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900 tracking-wider">
                  {step.title}
                </h4>
                <p className="text-[14px] text-gray-500 mt-1 leading-tight">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}