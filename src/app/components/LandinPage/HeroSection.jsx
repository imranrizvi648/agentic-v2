"use client";

import { useEffect, useRef } from "react";
import "./styles/agentic-sense.css";

/* ============================================================
   AGENTICSENSE CINEMATIC HERO — Next.js version
   Markup, classnames, timings, and font sizes are unchanged
   from the original HTML/CSS/JS. Only the sequencer logic is
   ported into a React useEffect (still uses classList + DOM
   refs directly, same as the original vanilla JS).
============================================================ */

export default function HeroSlider() {
  const filmRef = useRef(null);

  useEffect(() => {
    const root = filmRef.current;
    if (!root) return;

    const scenes = [...root.querySelectorAll(".scene")];
    const flash = root.querySelector("#flash");
    const timeline = root.querySelector("#timelineProgress");

    let index = 0;
    let sceneTimer = null;
    let isRunning = false;

    const durations = scenes.map((scene) =>
      Number(scene.dataset.duration || 3800)
    );

    const totalDuration = durations.reduce(
      (total, value) => total + value,
      0
    );

    function restartSceneAnimations(scene) {
      scene.classList.remove("active");
      void scene.offsetWidth;
      scene.classList.add("active");
    }

    function transitionFlash() {
      flash.classList.remove("go");
      void flash.offsetWidth;
      flash.classList.add("go");
    }

    function showScene(sceneIndex) {
      scenes.forEach((scene) => scene.classList.remove("active"));
      restartSceneAnimations(scenes[sceneIndex]);
    }

    function runScene() {
      if (index >= scenes.length) {
        sceneTimer = setTimeout(restartFilm, 700);
        return;
      }

      showScene(index);

      const duration = durations[index];

      sceneTimer = setTimeout(() => {
        if (index === 0 || index === 3 || index === 5 || index === 8) {
          transitionFlash();
        }

        index++;

        setTimeout(runScene, 180);
      }, duration);
    }

    function startTimeline() {
      timeline.style.transition = "none";
      timeline.style.width = "0%";

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          timeline.style.transition = `width ${totalDuration}ms linear`;
          timeline.style.width = "100%";
        });
      });
    }

    function startFilm() {
      if (isRunning) return;
      isRunning = true;
      index = 0;
      startTimeline();
      runScene();
    }

    function restartFilm() {
      clearTimeout(sceneTimer);
      scenes.forEach((scene) => scene.classList.remove("active"));
      index = 0;
      startTimeline();
      setTimeout(runScene, 150);
    }

    function handleVisibility() {
      if (document.hidden) {
        clearTimeout(sceneTimer);
      } else {
        restartFilm();
      }
    }

    document.addEventListener("visibilitychange", handleVisibility);

    const startTimer = setTimeout(startFilm, 250);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      clearTimeout(sceneTimer);
      clearTimeout(startTimer);
    };
  }, []);

  return (
    <div className="film" id="film" ref={filmRef}>
      {/* atmospheric background */}
      <div className="ambient"></div>
      <div className="grid"></div>
      <div className="grain"></div>

      

      {/* ======================================================
          SCENE 01 — DISRUPT EXPECTATION
      ======================================================= */}
      <section className="scene center" data-duration="4200">
        <div className="streak"></div>

        <div className="content">
          

          <div className="mask line-1">
            <span className="hero-word medium">WE DON&apos;T BUILD</span>
          </div>

          <div className="mask line-2">
            <span className="hero-word">CHATBOTS.</span>
          </div>

          <div className="mask line-3">
            <span className="hero-word medium purple">WE BUILD SYSTEMS.</span>
          </div>
        </div>

        <div className="ghost">AI</div>
      </section>

      {/* ======================================================
          SCENE 02 — DISCOVERY
      ======================================================= */}
      <section className="scene left" data-duration="3900">
        <div className="streak"></div>

        <div className="content">
          

          <div className="mask line-1">
            <span className="hero-word small">BEFORE AI,</span>
          </div>

          <div className="mask line-2">
            <span className="hero-word medium purple">WE UNDERSTAND</span>
          </div>

          <div className="mask line-3">
            <span className="hero-word medium">THE OPERATION.</span>
          </div>

          <div className="tech-row">
            <span className="tech">Process Discovery</span>
            <span className="tech">Process Mining</span>
            <span className="tech">Workflow Mapping</span>
            <span className="tech">AI Readiness</span>
          </div>
        </div>

        <div className="ghost">DISCOVER</div>
      </section>

      {/* ======================================================
          SCENE 03 — ARCHITECTURE
      ======================================================= */}
      <section className="scene right" data-duration="3900">
        <div className="streak"></div>

        <div className="content">
          

          <div className="mask line-1">
            <span className="hero-word small">WE TURN</span>
          </div>

          <div className="mask line-2">
            <span className="hero-word medium">BUSINESS</span>
          </div>

          <div className="mask line-3">
            <span className="hero-word medium purple">INTO INTELLIGENCE.</span>
          </div>

          <div className="tech-row">
            <span className="tech">Multi-Agent Systems</span>
            <span className="tech">Orchestration</span>
            <span className="tech">Human-in-the-Loop</span>
            <span className="tech">AI Architecture</span>
          </div>
        </div>
      </section>

      {/* ======================================================
          SCENE 04 — AGENTS
      ======================================================= */}
      <section className="scene center" data-duration="3700">
        <div className="content">
          <div className="action-stack">
           

            <div className="action">
              <span>ACT.</span>
            </div>

            <div className="action">
              <span>COORDINATE.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SCENE 05 — ENTERPRISE INTEGRATION
      ======================================================= */}
      <section className="scene center" data-duration="3900">
        <div className="streak"></div>

        <div className="content">
        
          <div className="mask line-1">
            <span className="hero-word small">AI CONNECTED</span>
          </div>

          <div className="mask line-2">
            <span className="hero-word medium purple">TO YOUR</span>
          </div>

          <div className="mask line-3">
            <span className="hero-word">ENTERPRISE.</span>
          </div>
        </div>

        <div className="ticker-wrap">
          <div className="ticker">
            SAP <i>•</i>
            ERP <i>•</i>
            CRM <i>•</i>
            APIs <i>•</i>
            DATABASES <i>•</i>
            LEGACY SYSTEMS <i>•</i>
            SAP <i>•</i>
            ERP <i>•</i>
            CRM <i>•</i>
            APIs <i>•</i>
            DATABASES <i>•</i>
            LEGACY SYSTEMS <i>•</i>
          </div>
        </div>
      </section>

      {/* ======================================================
          SCENE 06 — DOCUMENT AI
      ======================================================= */}
      <section className="scene left" data-duration="3800">
        <div className="content">
       

          <div className="mask line-1">
            <span className="hero-word medium">DOCUMENTS</span>
          </div>

          <div className="mask line-2">
            <span className="hero-word small purple">BECOME DATA.</span>
          </div>

          <div className="mask line-3">
            <span className="hero-word medium">DATA BECOMES</span>
          </div>

          <div className="mask line-3">
            <span className="hero-word small purple">ACTION.</span>
          </div>

          <div className="tech-row">
            <span className="tech">Document AI</span>
            <span className="tech">Extraction</span>
            <span className="tech">Validation</span>
            <span className="tech">Classification</span>
          </div>
        </div>
      </section>

      {/* ======================================================
          SCENE 07 — OPERATIONAL AUTOMATION
      ======================================================= */}
      <section className="scene right" data-duration="4000">
        <div className="content">
       

          <div className="mask line-1">
            <span className="hero-word small">AUTOMATE</span>
          </div>

          <div className="mask line-2">
            <span className="hero-word medium purple">THE WORK</span>
          </div>

          <div className="mask line-3">
            <span className="hero-word medium">THAT SLOWS</span>
          </div>

          <div className="mask line-3">
            <span className="hero-word medium">YOU DOWN.</span>
          </div>

          <div className="tech-row">
            <span className="tech">Finance</span>
            <span className="tech">Reconciliation</span>
            <span className="tech">Operations</span>
            <span className="tech">Reporting</span>
            <span className="tech">Exception Handling</span>
          </div>
        </div>
      </section>

      {/* ======================================================
          SCENE 08 — KNOWLEDGE
      ======================================================= */}
      <section className="scene center" data-duration="3600">
        <div className="content">
       

          <div className="mask line-1">
            <span className="hero-word medium">YOUR KNOWLEDGE.</span>
          </div>

          <div className="mask line-2">
            <span className="hero-word purple">ACTIVATED.</span>
          </div>

          <div className="tech-row">
            <span className="tech">Enterprise RAG</span>
            <span className="tech">Policies</span>
            <span className="tech">SOPs</span>
            <span className="tech">AI Copilots</span>
            <span className="tech">Semantic Search</span>
          </div>
        </div>

        <div className="ghost">KNOW</div>
      </section>

      {/* ======================================================
          SCENE 09 — PRODUCTION
      ======================================================= */}
      <section className="scene left" data-duration="3600">
        <div className="content">
       

          <div className="mask line-1">
            <span className="hero-word small">NOT A DEMO.</span>
          </div>

          <div className="mask line-2">
            <span className="hero-word purple">PRODUCTION.</span>
          </div>

          <div className="tech-row">
            <span className="tech">Secure</span>
            <span className="tech">Governed</span>
            <span className="tech">Observable</span>
            <span className="tech">Scalable</span>
            <span className="tech">Auditable</span>
          </div>
        </div>
      </section>

      {/* ======================================================
          SCENE 10 — FINAL BRAND
      ======================================================= */}
      <section className="scene center" data-duration="5200">
        <div className="streak"></div>

        <div className="content">
          

          <div className="mask line-1">
            <span className="final-logo">
              Agentic<span className="purple">Sense</span>
            </span>
          </div>

          <div className="final-tagline">Your Agentic AI Technology Arm.</div>

          <div className="final-contact">
            <span>agenticsense.co</span>
            <span className="dot"></span>
            <span>info@agenticsense.co</span>
            <span className="dot"></span>
            <span>+92 321 3551490</span>
          </div>
        </div>
      </section>

      {/* transition overlay */}
      <div className="flash" id="flash"></div>

      {/* film progress */}
     
    </div>
  );
}
