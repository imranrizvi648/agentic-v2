"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Mic, Phone, MessageCircle, Brain, ShieldCheck, Workflow, Volume2 } from "lucide-react";

/* ============================================================================
   Voice & Conversational AI
   AgenticSense Service Sub-page
   Design system aligned with the existing service pages.
============================================================================ */

const capabilities = [
  {
    title: "Natural Conversations",
    text: "Let people interact with your business using natural language instead of rigid menus, forms or scripted conversations.",
  },
  {
    title: "Voice Understanding",
    text: "AI agents understand spoken requests, intent and context so conversations can move naturally from one question to the next.",
  },
  {
    title: "Context-Aware Responses",
    text: "Give customers and employees relevant answers by combining conversation history with approved business information.",
  },
  {
    title: "Business System Access",
    text: "Connect conversational agents with the systems they need to retrieve information, update records and support business processes.",
  },
  {
    title: "Human Handoff",
    text: "When a conversation needs human attention, the agent can transfer the interaction with the relevant context already captured.",
  },
];

const conversationSteps = [
  {
    title: "Listen",
    text: "The agent receives the customer's voice or message and understands what they are trying to accomplish.",
  },
  {
    title: "Understand",
    text: "Intent, context and conversation history are combined to determine the right response or next action.",
  },
  {
    title: "Respond",
    text: "The agent provides a clear, natural response through voice or digital conversation.",
  },
  {
    title: "Act",
    text: "If action is required, the agent connects with the relevant business workflow or system.",
  },
];

const useCases = [
  {
    title: "Customer Service",
    text: "Handle common questions, requests and service interactions without forcing customers through complicated menus or long wait times.",
  },
  {
    title: "Voice Assistants",
    text: "Create intelligent voice experiences that can understand requests, retrieve information and guide users through a conversation.",
  },
  {
    title: "Employee Support",
    text: "Give employees a faster way to access internal information, policies, procedures and business services through conversation.",
  },
  {
    title: "Sales & Qualification",
    text: "Engage prospects naturally, understand their needs, qualify opportunities and route conversations to the right team.",
  },
];

const advantages = [
  {
    title: "Conversations instead of commands",
    text: "People can explain what they need in their own words. The agent interprets the request rather than forcing them to learn a predefined interaction flow.",
    icon: MessageCircle,
  },
  {
    title: "Context stays with the conversation",
    text: "The agent remembers what has already been discussed so users do not have to repeatedly explain the same problem or request.",
    icon: Brain,
  },
  {
    title: "Connected to real work",
    text: "Conversational AI becomes more useful when it can retrieve information and trigger actions across the systems your teams already use.",
    icon: Workflow,
  },
];

/* ============================================================================
   HERO BACKGROUND
============================================================================ */

function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#1a194d]" />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 82% 20%, rgba(98,94,255,0.26), transparent 32%), radial-gradient(circle at 15% 85%, rgba(70,65,170,0.16), transparent 35%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#12103c]/90 via-[#12103c]/55 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1a194d] to-transparent" />
    </div>
  );
}

/* ============================================================================
   PAGE
============================================================================ */

export default function VoiceConversationalAIPage() {
  return (
    <main className="bg-white text-brand-primary font-sans selection:bg-brand-secondary/20">

      {/* ======================================================================
          HERO
      ====================================================================== */}

      <section
        aria-label="Voice & Conversational AI"
        className="relative min-h-[72vh] overflow-hidden flex items-center"
      >
        <HeroBackground />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24 sm:py-28 md:py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-8">

              <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-[1.1] tracking-tight text-white">
                Make every conversation
                <span className="text-[#a095ff]">
                  {" "}
                  more intelligent.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base sm:text-lg leading-relaxed text-white/60">
                AgenticSense helps businesses build voice and conversational
                AI experiences that understand people, respond naturally and
                connect conversations with real business actions.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">

                <Link
                  href="/proposal"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-secondary px-5 sm:px-6 py-3.5 text-sm font-bold text-white transition hover:opacity-90"
                >
                  Discuss Your AI Experience
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#capabilities"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/[0.06] px-5 sm:px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Explore Conversational AI
                  <ArrowDownIcon />
                </Link>

              </div>
            </div>

            {/* HERO VISUAL */}

            <div className="hidden lg:block lg:col-span-4">

              <div className="relative ml-auto w-[290px]">

                <div className="absolute -left-8 top-12 h-28 w-28 rounded-full border border-[#a095ff]/20" />

                <div className="absolute -right-5 bottom-5 h-20 w-20 rounded-full border border-white/10" />

                <div className="relative border border-white/10 bg-white/[0.055] backdrop-blur-sm p-6">

                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <span className="text-[10px] tracking-[0.2em] text-white/35">
                      Live conversation
                    </span>

                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#a095ff]" />
                      <span className="text-[10px] text-white/35">
                        Active
                      </span>
                    </div>
                  </div>

                  <div className="py-7">

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-10 items-center justify-center border border-white/15 bg-white/[0.04]">
                        <Mic className="h-5 w-5 text-white/60" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Customer speaks
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          Voice · intent · context
                        </p>
                      </div>

                    </div>

                    <div className="ml-5 h-8 w-px bg-white/10" />

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-10 items-center justify-center border border-brand-secondary/30 bg-brand-secondary/10">
                        <Brain className="h-5 w-5 text-[#a095ff]" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          AI understands
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          Meaning · history · need
                        </p>
                      </div>

                    </div>

                    <div className="ml-5 h-8 w-px bg-white/10" />

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-10 items-center justify-center border border-white/15">
                        <Volume2 className="h-5 w-5 text-[#a095ff]" />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-white">
                          Natural response
                        </p>

                        <p className="mt-1 text-xs text-white/35">
                          Answer · action · handoff
                        </p>
                      </div>

                    </div>

                  </div>

                  <div className="border-t border-white/10 pt-5">

                    <div className="flex items-center justify-between">

                      <span className="text-[10px] tracking-[0.18em] text-white/30">
                        Conversation intelligence
                      </span>

                      <Phone className="h-4 w-4 text-[#a095ff]/60" />

                    </div>

                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          INTRO
      ====================================================================== */}

      <section className="relative overflow-hidden bg-slate-50/50 py-16 sm:py-24">

        <div className="absolute right-0 top-0 h-full w-[30%] bg-gradient-to-l from-brand-secondary/[0.035] to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="max-w-5xl">

            <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              People shouldn't have to learn
              <span className="text-brand-secondary">
                {" "}
                how to talk to your systems.
              </span>
            </h2>

          </div>

          <div className="mt-16 grid lg:grid-cols-12 gap-10">

            <div className="lg:col-span-4">

              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-brand-primary/35">
                The old experience
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm font-semibold">

                <span>Menu</span>

                <ArrowRight className="h-4 w-4 text-brand-secondary" />

                <span>Option</span>

                <ArrowRight className="h-4 w-4 text-brand-secondary" />

                <span>Repeat</span>

                <ArrowRight className="h-4 w-4 text-brand-secondary" />

                <span>Wait</span>

              </div>

            </div>

            <div className="lg:col-span-8">

              <p className="max-w-3xl text-base sm:text-lg leading-relaxed font-semibold">
                Customers and employees increasingly expect technology to
                understand simple human requests. Yet many business
                interactions still depend on rigid menus, forms, scripts and
                repetitive handoffs.
              </p>

              <p className="mt-6 max-w-3xl text-sm sm:text-base leading-relaxed text-brand-primary/60">
                Conversational AI changes that interaction. Instead of asking
                people to adapt to the system, the system can understand the
                way people naturally communicate and guide the conversation
                toward a useful outcome.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          CAPABILITIES
      ====================================================================== */}

      <section
        id="capabilities"
        className="py-16 sm:py-24 bg-white"
      >

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">

            <div className="max-w-3xl">

              <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                From simple conversations
                <br />
                <span className="text-brand-secondary">
                  to intelligent experiences.
                </span>
              </h2>

            </div>

            <p className="max-w-sm text-sm leading-relaxed text-brand-primary/60">
              Give people a more natural way to interact with your business
              while connecting every conversation to the information and
              workflows behind it.
            </p>

          </div>

          <div className="mt-16 grid lg:grid-cols-12 gap-0 border-t border-brand-primary/10">

            <div className="lg:col-span-5 py-10 lg:pr-16 border-b lg:border-b-0 lg:border-r border-brand-primary/10">

              <div className="flex items-center gap-3">
                <Mic className="h-5 w-5 text-brand-secondary" />
                <span className="h-px flex-1 bg-brand-primary/10" />
              </div>

              <h3 className="mt-6 text-xl sm:text-2xl font-bold">
                Understand people naturally
              </h3>

              <p className="mt-5 text-sm leading-relaxed text-brand-primary/60 max-w-md">
                Conversational agents can interpret natural language, spoken
                requests and changing conversation context instead of relying
                only on fixed commands or scripted responses.
              </p>

              <div className="mt-8 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-secondary">
                Voice
                <span className="h-px w-6 bg-brand-secondary/40" />
                Context
              </div>

            </div>

            <div className="lg:col-span-7 py-10 lg:pl-16">

              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-10">

                {capabilities.slice(1).map((item) => (
                  <div key={item.title}>

                    <div className="flex items-center gap-3">
                      <span className="h-px flex-1 bg-brand-primary/10" />
                    </div>

                    <h3 className="mt-5 text-base sm:text-lg font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      {item.text}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          CONVERSATION INTELLIGENCE
      ====================================================================== */}

      <section className="bg-slate-50/50 py-16 sm:py-24">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-5">

              <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                A conversation is more
                <br />
                <span className="text-brand-secondary">
                  than a question and answer.
                </span>
              </h2>

              <p className="mt-7 text-sm sm:text-base leading-relaxed text-brand-primary/60 max-w-lg">
                Useful conversational AI understands what has already been
                said, what the person is trying to achieve and what should
                happen next.
              </p>

            </div>

            <div className="lg:col-span-7">

              <div className="relative min-h-[420px]">

                {/* USER MESSAGE */}

                <div className="absolute left-0 top-10 w-[72%] border border-brand-primary/10 bg-white p-7 shadow-[0_20px_60px_rgba(26,25,77,0.06)]">

                  <div className="flex items-center justify-between">

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-primary/30">
                      Customer request
                    </span>

                    <Mic className="h-4 w-4 text-brand-secondary" />

                  </div>

                  <div className="mt-8">

                    <p className="text-sm font-semibold leading-relaxed text-brand-primary/70">
                      "I need to change my appointment and I'd prefer
                      something later this week."
                    </p>

                    <div className="mt-7 space-y-3">

                      <div className="h-2 w-[78%] bg-brand-primary/10" />

                      <div className="h-2 w-[56%] bg-brand-primary/10" />

                      <div className="h-2 w-[64%] bg-brand-primary/10" />

                    </div>

                  </div>
                </div>

                {/* AI UNDERSTANDING */}

                <div className="absolute right-0 top-0 w-[54%] border border-brand-secondary/25 bg-brand-secondary p-7 text-white">

                  <div className="flex items-center gap-3">

                    <Brain className="h-4 w-4 text-[#d5d2ff]" />

                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                      Agent understanding
                    </span>

                  </div>

                  <div className="mt-8 space-y-5">

                    <div>

                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        Intent
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        Reschedule appointment
                      </p>

                    </div>

                    <div>

                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        Context
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        Existing appointment
                      </p>

                    </div>

                    <div>

                      <p className="text-[10px] uppercase tracking-widest text-white/45">
                        Next action
                      </p>

                      <p className="mt-1 text-sm font-bold">
                        Check availability
                      </p>

                    </div>

                  </div>

                </div>

                {/* RESPONSE */}

                <div className="absolute bottom-0 left-[22%] w-[55%] border border-brand-primary/10 bg-[#12103c] p-6 text-white">

                  <div className="flex items-center gap-4">

                    <Volume2 className="h-5 w-5 text-[#a095ff]" />

                    <div>

                      <p className="text-sm font-bold">
                        Natural response
                      </p>

                      <p className="mt-1 text-xs text-white/40">
                        "I can help with that. Let me check the available
                        times for you."
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          HOW IT WORKS
      ====================================================================== */}

      <section
        id="how-it-works"
        className="bg-[#12103c] py-16 sm:py-24 text-white"
      >

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="max-w-3xl">

            <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
              Conversation starts naturally.
              <br />
              <span className="text-[#a095ff]">
                Intelligence takes it forward.
              </span>
            </h2>

          </div>

          <div className="mt-16 relative">

            <div className="hidden md:block absolute top-7 left-7 right-7 h-px bg-white/10" />

            <div className="grid md:grid-cols-4 gap-10 md:gap-6">

              {conversationSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative"
                >

                  <div className="relative z-10 flex h-14 w-14 items-center justify-center border border-white/15 bg-[#12103c]">

                    <span className="text-xs font-bold text-[#a095ff]">
                      0{index + 1}
                    </span>

                  </div>

                  <h3 className="mt-7 text-base sm:text-lg font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/50">
                    {step.text}
                  </p>

                </div>
              ))}

            </div>

          </div>

          <div className="mt-20 border-t border-white/10 pt-7 flex flex-col sm:flex-row sm:items-center justify-between gap-5">

            <p className="text-sm text-white/40">
              The conversation feels natural. The intelligence behind it stays
              connected to the business.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#a095ff]">

              Conversational intelligence

              <ArrowRight className="h-4 w-4" />

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================================
          USE CASES
      ====================================================================== */}

      <section className="py-16 sm:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid lg:grid-cols-12 gap-12">

            <div className="lg:col-span-4">

              <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">

                Wherever people
                <span className="text-brand-secondary">
                  {" "}
                  need to be heard.
                </span>

              </h2>

              <p className="mt-6 text-sm leading-relaxed text-brand-primary/60">
                Voice and conversational AI can support customers, employees
                and business teams anywhere interaction is currently slowed by
                repetitive questions and manual processes.
              </p>

              <div className="mt-10 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-secondary">

                Start focused

                <ArrowRight className="h-4 w-4" />

                Expand

              </div>

            </div>

            <div className="lg:col-span-8">

              <div className="grid sm:grid-cols-2 gap-x-12">

                {useCases.map((item, index) => (
                  <div
                    key={item.title}
                    className={`py-8 ${
                      index < 2
                        ? "border-b border-brand-primary/10"
                        : ""
                    }`}
                  >

                    <div className="flex items-start justify-end gap-5">

                      <ArrowUpRight className="h-4 w-4 text-brand-primary/20" />

                    </div>

                    <h3 className="mt-7 text-base sm:text-lg font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                      {item.text}
                    </p>

                  </div>
                ))}

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ======================================================================
          BUSINESS IMPACT
      ====================================================================== */}

      <section className="bg-slate-50/50 py-16 sm:py-24">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="mt-7 grid lg:grid-cols-12 gap-12 items-end">

            <div className="lg:col-span-7">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">

                Better conversations create
                <span className="text-brand-secondary">
                  {" "}
                  better experiences.
                </span>

              </h2>

            </div>

            <div className="lg:col-span-5">

              <p className="text-sm sm:text-base leading-relaxed text-brand-primary/60">
                When people can communicate naturally with your business,
                interactions become easier to start, easier to complete and
                easier to connect with the work happening behind the scenes.
              </p>

            </div>

          </div>

          <div className="mt-16 grid sm:grid-cols-3 border-y border-brand-primary/10">

            <div className="py-9 sm:pr-8 sm:border-r border-brand-primary/10">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Natural
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Human-like interactions
              </p>

            </div>

            <div className="py-9 sm:px-8 sm:border-r border-brand-primary/10">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Connected
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Conversations linked to systems
              </p>

            </div>

            <div className="py-9 sm:pl-8">

              <p className="text-3xl sm:text-4xl font-bold tracking-tight">
                Scalable
              </p>

              <p className="mt-3 text-sm font-semibold text-brand-primary/55">
                Support across more interactions
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================================
          WHY AGENTICSENSE
      ====================================================================== */}

      <section className="py-16 sm:py-24 bg-white">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid lg:grid-cols-12 gap-12">

            <div className="lg:col-span-5">

              <h2 className="mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">

                Don't just build
                <br />

                <span className="text-brand-secondary">
                  another chatbot.
                </span>

              </h2>

            </div>

            <div className="lg:col-span-7">

              <div className="space-y-12">

                {advantages.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="flex gap-6"
                    >

                      <div className="shrink-0 pt-1">

                        <Icon className="h-5 w-5 text-brand-secondary" />

                      </div>

                      <div>

                        <h3 className="text-base sm:text-lg font-bold">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-brand-primary/60">
                          {item.text}
                        </p>

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================================
          TRUST / CONTROL
      ====================================================================== */}

      <section className="bg-slate-50/50 py-16 sm:py-24">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6">

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">

                Natural interaction.
                <br />

                <span className="text-brand-secondary">
                  Enterprise control.
                </span>

              </h2>

              <p className="mt-7 max-w-xl text-sm sm:text-base leading-relaxed text-brand-primary/60">
                Conversational experiences should feel simple for the person
                using them while remaining controlled and connected behind the
                scenes. Define the information agents can access, the actions
                they can take and when a human should step in.
              </p>

            </div>

            <div className="lg:col-span-6">

              <div className="border-t border-brand-primary/10">

                <div className="py-7 border-b border-brand-primary/10 flex items-start gap-5">

                  <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-brand-secondary" />

                  <div>

                    <h3 className="text-base font-bold">
                      Controlled access
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-brand-primary/60">
                      Connect agents only to the information and systems they
                      need for the conversation.
                    </p>

                  </div>

                </div>

                <div className="py-7 border-b border-brand-primary/10 flex items-start gap-5">

                  <Workflow className="mt-1 h-5 w-5 shrink-0 text-brand-secondary" />

                  <div>

                    <h3 className="text-base font-bold">
                      Action-aware workflows
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-brand-primary/60">
                      Move beyond answering questions by connecting
                      conversations with real business processes.
                    </p>

                  </div>

                </div>

                <div className="py-7 flex items-start gap-5">

                  <Phone className="mt-1 h-5 w-5 shrink-0 text-brand-secondary" />

                  <div>

                    <h3 className="text-base font-bold">
                      Human when needed
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-brand-primary/60">
                      Escalate conversations when complexity, sensitivity or
                      business judgment requires a person.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ======================================================================
          CTA
      ====================================================================== */}

      <section className="relative overflow-hidden bg-[#12103c] py-16 sm:py-24 text-white">

        <div
          aria-hidden="true"
          className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full border border-brand-secondary/15"
        />

        <div
          aria-hidden="true"
          className="absolute right-0 top-0 h-[360px] w-[360px] rounded-full bg-brand-secondary/10 blur-3xl"
        />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

          <div className="grid lg:grid-cols-12 gap-12">

            <div className="lg:col-span-8">

              <h2 className="mt-7 max-w-4xl text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight tracking-tight">
                Ready to make your customer and employee interactions feel more
                natural?
              </h2>

              <p className="mt-7 max-w-2xl text-sm sm:text-base leading-relaxed text-white/50">
                Tell us where conversations currently slow your teams down,
                which channels matter and what you want your AI experience to
                accomplish. We can help identify where voice and conversational
                agents can create the most value.
              </p>

            </div>

            <div className="lg:col-span-4 lg:flex lg:items-end lg:justify-end">

              <Link
                href="/proposal"
                className="inline-flex items-center gap-3 rounded-md bg-brand-secondary px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-bold text-white transition hover:opacity-90"
              >
                Discuss Your AI Experience
                <ArrowRight className="h-4 w-4" />
              </Link>

            </div>

          </div>

          <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-7">

            {[
              "Natural voice interactions",
              "Context-aware conversations",
              "Connected business systems",
              "Human handoff when needed",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs font-semibold text-white/45"
              >

                <Check className="h-3.5 w-3.5 text-[#a095ff]" />

                {item}

              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}

/* ============================================================================
   SMALL HERO ICON
============================================================================ */

function ArrowDownIcon() {
  return (
    <span className="flex h-4 w-4 items-center justify-center">
      <span className="h-1.5 w-1.5 border-b border-r border-white rotate-45 -translate-y-[2px]" />
    </span>
  );
}