"use client";

import { useEffect, useRef } from "react";

/**
 * AgenticSense Cinematic Hero — exact original content & scene order
 * Styles scoped to .as-hero (page scroll + site UI stay intact)
 */
export default function HeroSlider() {
  const filmRef = useRef(null);
  const flashRef = useRef(null);
  const timelineRef = useRef(null);

  useEffect(() => {
    const root = filmRef.current;
    if (!root) return;

    const scenes = [...root.querySelectorAll(".scene")];
    const flash = flashRef.current;
    const timeline = timelineRef.current;
    if (!scenes.length || !flash || !timeline) return;

    let index = 0;
    let sceneTimer = null;
    let isRunning = false;

    const durations = scenes.map((scene) =>
      Number(scene.dataset.duration || 3800)
    );
    const totalDuration = durations.reduce((a, b) => a + b, 0);

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
      scenes.forEach((s) => s.classList.remove("active"));
      restartSceneAnimations(scenes[sceneIndex]);
    }

    function runScene() {
      if (index >= scenes.length) {
        sceneTimer = setTimeout(restartFilm, 950);
        return;
      }
      showScene(index);
      const duration = durations[index];
      sceneTimer = setTimeout(() => {
        if ([0, 1, 3, 4, 6].includes(index)) transitionFlash();
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
      scenes.forEach((s) => s.classList.remove("active"));
      index = 0;
      startTimeline();
      setTimeout(runScene, 150);
    }

    const onVis = () => {
      if (document.hidden) clearTimeout(sceneTimer);
      else restartFilm();
    };
    document.addEventListener("visibilitychange", onVis);
    const boot = setTimeout(startFilm, 250);

    return () => {
      clearTimeout(boot);
      clearTimeout(sceneTimer);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div className="as-hero">
      <style
        dangerouslySetInnerHTML={{
          __html: `.as-hero {
            --navy: #030b1f;
            --indigo: #625eff;
            --white: #ffffff;
            --muted: rgba(255, 255, 255, .62);
            --line: rgba(255, 255, 255, .10);
            --glass: rgba(255, 255, 255, .045);
        }.as-hero,
        .as-hero * { box-sizing: border-box; }.as-hero {
            margin: 0;
            padding: 0;
            color: var(--white);
            font-family: Inter, "Helvetica Neue", Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
        }.as-hero /* removed global html/body */

        /* removed body overflow lock */

        .as-hero {
            position: relative;
            width: 100%;
            isolation: isolate;
        }.as-hero .film {
            position: relative;
            width: 100%;
            height: 100vh;
            min-height: 100vh;
            max-height: 100vh;
            overflow: hidden;
            isolation: isolate;
            background:
                radial-gradient(circle at 80% 18%, rgba(98, 94, 255, .16), transparent 32%),
                radial-gradient(circle at 18% 78%, rgba(98, 94, 255, .09), transparent 28%),
                var(--navy);
        }.as-hero .ambient {
            position: absolute;
            width: 50vw;
            height: 50vw;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(98, 94, 255, .18) 0%, rgba(98, 94, 255, .06) 38%, transparent 70%);
            filter: blur(35px);
            top: -24vw;
            right: -12vw;
            animation: ambientFloat 12s ease-in-out infinite alternate;
            pointer-events: none;
            z-index: -5;
        }.as-hero .grid {
            position: absolute;
            inset: -25%;
            background-image:
                linear-gradient(rgba(255, 255, 255, .028) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, .028) 1px, transparent 1px);
            background-size: 5vw 5vw;
            transform: perspective(900px) rotateX(64deg) scale(1.35);
            transform-origin: center bottom;
            opacity: .55;
            animation: gridTravel 18s linear infinite;
            pointer-events: none;
            z-index: -6;
        }.as-hero .grain {
            position: absolute;
            inset: -50%;
            opacity: .025;
            pointer-events: none;
            background-image: repeating-radial-gradient(circle, rgba(255, 255, 255, .8) 0 1px, transparent 1px 3px);
            background-size: 7px 7px;
            animation: grainMove .25s steps(2) infinite;
            z-index: 50;
        }.as-hero .streak {
            position: absolute;
            width: 48vw;
            height: 1px;
            left: -52vw;
            top: 50%;
            background: linear-gradient(90deg, transparent, var(--indigo), transparent);
            box-shadow: 0 0 18px rgba(98, 94, 255, .45);
            opacity: 0;
            z-index: 25;
        }.as-hero .scene.active .streak {
            animation: streak .9s ease both;
        }.as-hero .brand {
            position: absolute;
            top: 4vh;
            left: 5vw;
            z-index: 100;
            display: flex;
            align-items: center;
            font-size: clamp(13px, 1vw, 18px);
            font-weight: 800;
            letter-spacing: -.04em;
        }.as-hero .brand-mark {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            margin-right: 10px;
            background: var(--indigo);
            box-shadow: 0 0 0 6px rgba(98, 94, 255, .08), 0 0 18px rgba(98, 94, 255, .45);
        }.as-hero .brand-accent {
            color: var(--indigo);
        }.as-hero .scene {
            position: absolute;
            inset: 0;
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
            overflow: hidden;
            transition: opacity .3s linear, visibility .3s linear;
        }.as-hero .scene.active {
            opacity: 1;
            visibility: visible;
        }.as-hero .content {
            position: absolute;
            inset: 0;
            padding: 13vh 7vw 10vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }.as-hero .left .content {
            align-items: flex-start;
            text-align: left;
        }.as-hero .center .content {
            align-items: center;
            text-align: center;
        }.as-hero .right .content {
            align-items: flex-end;
            text-align: right;
        }.as-hero .overline {
            overflow: hidden;
            color: var(--indigo);
            font-size: clamp(10px, .78vw, 14px);
            font-weight: 800;
            letter-spacing: .19em;
            text-transform: uppercase;
            margin-bottom: 2.2vh;
        }.as-hero .overline span {
            display: block;
        }.as-hero .mask {
            overflow: hidden;
            padding-bottom: 0.18em;
        }.as-hero .mask>span {
            display: block;
        }.as-hero .hero-word {
            position: relative;
            display: block;
            font-size: clamp(52px, 8.7vw, 170px);
            line-height: .84;
            letter-spacing: -.075em;
            font-weight: 900;
            text-transform: uppercase;
        }.as-hero .hero-word.medium {
            font-size: clamp(44px, 6.8vw, 135px);
        }.as-hero .hero-word.small {
            font-size: clamp(32px, 4.8vw, 94px);
        }.as-hero .purple {
            color: var(--indigo);
        }.as-hero .support {
            max-width: 850px;
            margin-top: 3vh;
            color: var(--muted);
            font-size: clamp(14px, 1.08vw, 20px);
            font-weight: 500;
            line-height: 1.55;
            letter-spacing: -.012em;
        }.as-hero .ghost {
            position: absolute;
            right: -3vw;
            bottom: -5vh;
            font-size: 24vw;
            font-weight: 950;
            letter-spacing: -.11em;
            line-height: .75;
            color: rgba(98, 94, 255, .05);
            pointer-events: none;
            white-space: nowrap;
        }.as-hero .tech-row {
            display: flex;
            flex-wrap: wrap;
            gap: clamp(8px, .75vw, 14px);
            margin-top: 3.2vh;
        }.as-hero .center .tech-row {
            justify-content: center;
        }.as-hero .right .tech-row {
            justify-content: flex-end;
        }.as-hero .tech {
            padding: 10px 15px;
            border: 1px solid var(--line);
            border-radius: 999px;
            background: var(--glass);
            color: rgba(255, 255, 255, .78);
            backdrop-filter: blur(14px);
            font-size: clamp(10px, .72vw, 13px);
            font-weight: 700;
            letter-spacing: .01em;
            opacity: 0;
            transform: translateY(18px) scale(.95);
        }.as-hero .scene.active .tech {
            animation: tagIn .58s cubic-bezier(.16, 1, .3, 1) both;
        }.as-hero .scene.active .tech:nth-child(1) {
            animation-delay: .62s;
        }.as-hero .scene.active .tech:nth-child(2) {
            animation-delay: .70s;
        }.as-hero .scene.active .tech:nth-child(3) {
            animation-delay: .78s;
        }.as-hero .scene.active .tech:nth-child(4) {
            animation-delay: .86s;
        }.as-hero .scene.active .tech:nth-child(5) {
            animation-delay: .94s;
        }.as-hero .scene.active .tech:nth-child(6) {
            animation-delay: 1.02s;
        }.as-hero .action-stack {
            width: 100%;
        }.as-hero .action {
            overflow: hidden;
            height: 1em;
            display: flex;
            align-items: center;
            font-size: clamp(58px, 11vw, 210px);
            font-weight: 950;
            line-height: .8;
            letter-spacing: -.085em;
            text-transform: uppercase;
        }.as-hero .action span {
            display: block;
        }.as-hero .action:nth-child(2) {
            justify-content: center;
            color: var(--indigo);
        }.as-hero .action:nth-child(3) {
            justify-content: flex-end;
        }.as-hero /* Agentic loop removed — replaced by Why Us scene */
        .network {
            position: relative;
            width: min(74vw, 1060px);
            height: min(52vh, 470px);
            margin-top: 1vh;
        }.as-hero .network svg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            overflow: visible;
        }.as-hero .network path {
            fill: none;
            stroke: rgba(98, 94, 255, .32);
            stroke-width: 1;
            stroke-dasharray: 5 8;
            animation: dash 8s linear infinite;
        }.as-hero .n-core {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 175px;
            height: 175px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 25px;
            background: radial-gradient(circle at 35% 30%, rgba(98, 94, 255, .9), rgba(40, 38, 115, .95));
            border: 1px solid rgba(255, 255, 255, .18);
            box-shadow: 0 0 70px rgba(98, 94, 255, .22), inset 0 0 35px rgba(255, 255, 255, .06);
            font-size: 16px;
            font-weight: 900;
            letter-spacing: .12em;
            
        }.as-hero .n-node {
            position: absolute;
            min-width: 125px;
            padding: 12px 14px;
            border: 1px solid rgba(255, 255, 255, .11);
            border-radius: 12px;
            background: rgba(255, 255, 255, .045);
            backdrop-filter: blur(10px);
            text-align: center;
            font-size: 10px;
            font-weight: 800;
            letter-spacing: .11em;
            color: rgba(255, 255, 255, .72);
            opacity: 0;
        }
        .as-hero .final-logo-mask {
  overflow: visible;
  padding-bottom: 0.2em;
}    
        .as-hero .n1 {
            left: 0;
            top: 4%;
        }.as-hero .n2 {
            right: 0;
            top: 4%;
        }.as-hero .n3 {
            left: 4%;
            bottom: 5%;
        }.as-hero .n4 {
            right: 4%;
            bottom: 5%;
        }.as-hero .scene.active .n-node {
            animation: nodeIn .65s cubic-bezier(.16, 1, .3, 1) both;
        }.as-hero .scene.active .n1 {
            animation-delay: .35s;
        }.as-hero .scene.active .n2 {
            animation-delay: .48s;
        }.as-hero .scene.active .n3 {
            animation-delay: .61s;
        }.as-hero .scene.active .n4 {
            animation-delay: .74s;
        }.as-hero .metrics {
            display: flex;
            gap: clamp(24px, 4vw, 70px);
            margin-top: 4vh;
            flex-wrap: wrap;
            justify-content: center;
        }.as-hero .metric {
            min-width: 155px;
            text-align: left;
            padding: 17px 0 0 17px;
            border-left: 2px solid rgba(98, 94, 255, .72);
        }.as-hero .metric b {
            display: block;
            font-size: clamp(21px, 2vw, 34px);
            line-height: 1;
            letter-spacing: -.04em;
        }.as-hero .metric span {
            display: block;
            margin-top: 7px;
            color: var(--muted);
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: .11em;
        }.as-hero .final-logo {
            font-size: clamp(62px, 10.7vw, 205px);
          line-height: 0.95;
padding-bottom: 0.06em;
            font-weight: 950;
            letter-spacing: -.085em;
        }.as-hero .final-tagline {
            margin-top: 3vh;
            font-size: clamp(18px, 1.9vw, 36px);
            font-weight: 700;
            line-height: 1.15;
            letter-spacing: -.035em;
        }.as-hero .final-contact {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 4.5vh;
            color: rgba(255, 255, 255, .52);
            font-size: clamp(10px, .9vw, 15px);
            font-weight: 650;
        }.as-hero .dot {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: var(--indigo);
        }.as-hero .flash {
            position: absolute;
            inset: 0;
            background: var(--indigo);
            transform: scaleX(0);
            transform-origin: left;
            pointer-events: none;
            z-index: 200;
        }.as-hero .flash.go {
            animation: flashTransition .46s cubic-bezier(.7, 0, .3, 1);
        }.as-hero .timeline {
           display: none !important;
        }.as-hero .timeline-progress {
            height: 100%;
            width: 0;
            background: var(--indigo);
            transform-origin: left;
        }.as-hero .scene.active .overline span {
            animation: revealSmall .65s .05s cubic-bezier(.16, 1, .3, 1) both;
        }.as-hero .scene.active .line-1 span {
            animation: cinematicReveal .72s .12s cubic-bezier(.16, 1, .3, 1) both;
        }.as-hero .scene.active .line-2 span {
            animation: cinematicReveal .8s .22s cubic-bezier(.16, 1, .3, 1) both;
        }.as-hero .scene.active .line-3 span {
            animation: cinematicReveal .86s .32s cubic-bezier(.16, 1, .3, 1) both;
        }.as-hero .scene.active .support {
            animation: fadeSupport .75s .55s cubic-bezier(.16, 1, .3, 1) both;
        }.as-hero .scene.active .ghost {
            animation: ghostMove 4s cubic-bezier(.16, 1, .3, 1) both;
        }.as-hero .scene.active .action:nth-child(1) span {
            animation: actionLeft .8s .1s cubic-bezier(.16, 1, .3, 1) both;
        }.as-hero .scene.active .action:nth-child(2) span {
            animation: actionScale .8s .3s cubic-bezier(.16, 1, .3, 1) both;
        }.as-hero .scene.active .action:nth-child(3) span {
            animation: actionRight .8s .5s cubic-bezier(.16, 1, .3, 1) both;
        }

        @keyframes cinematicReveal {
            0% {
                opacity: 0;
                transform: translateY(115%) skewY(5deg) scaleY(1.08);
                filter: blur(8px);
            }
            100% {
                opacity: 1;
                transform: none;
                filter: blur(0);
            }
        }
        @keyframes revealSmall {
            from {
                opacity: 0;
                transform: translateY(130%);
            }
            to {
                opacity: 1;
                transform: none;
            }
        }
        @keyframes fadeSupport {
            from {
                opacity: 0;
                transform: translateY(22px);
                filter: blur(5px);
            }
            to {
                opacity: 1;
                transform: none;
                filter: blur(0);
            }
        }
        @keyframes ghostMove {
            from {
                opacity: 0;
                transform: translateX(8vw);
            }
            to {
                opacity: 1;
                transform: none;
            }
        }
        @keyframes tagIn {
            from {
                opacity: 0;
                transform: translateY(18px) scale(.95);
                filter: blur(4px);
            }
            to {
                opacity: 1;
                transform: none;
                filter: blur(0);
            }
        }
        @keyframes actionLeft {
            from {
                opacity: 0;
                transform: translateX(-15vw);
                filter: blur(16px);
            }
            to {
                opacity: 1;
                transform: none;
                filter: blur(0);
            }
        }
        @keyframes actionRight {
            from {
                opacity: 0;
                transform: translateX(15vw);
                filter: blur(16px);
            }
            to {
                opacity: 1;
                transform: none;
                filter: blur(0);
            }
        }
        @keyframes actionScale {
            from {
                opacity: 0;
                transform: scale(2);
                filter: blur(24px);
            }
            to {
                opacity: 1;
                transform: scale(1);
                filter: blur(0);
            }
        }
        @keyframes nodeIn {
            from {
                opacity: 0;
                transform: translateY(18px) scale(.95);
                filter: blur(5px);
            }
            to {
                opacity: 1;
                transform: none;
                filter: blur(0);
            }
        }
        @keyframes dash {
            to {
                stroke-dashoffset: -120;
            }
        }
        @keyframes flashTransition {
            0% {
                transform: scaleX(0);
                transform-origin: left;
            }
            48% {
                transform: scaleX(1);
                transform-origin: left;
            }
            52% {
                transform: scaleX(1);
                transform-origin: right;
            }
            100% {
                transform: scaleX(0);
                transform-origin: right;
            }
        }
        @keyframes streak {
            0% {
                opacity: 0;
                transform: translateX(0);
            }
            20% {
                opacity: .7;
            }
            100% {
                opacity: 0;
                transform: translateX(155vw);
            }
        }
        @keyframes ambientFloat {
            from {
                transform: translate3d(0, 0, 0);
            }
            to {
                transform: translate3d(-8vw, 10vh, 0);
            }
        }
        @keyframes gridTravel {
            from {
                transform: perspective(900px) rotateX(64deg) translateY(0) scale(1.35);
            }
            to {
                transform: perspective(900px) rotateX(64deg) translateY(5vw) scale(1.35);
            }
        }
        @keyframes grainMove {
            0% {
                transform: translate(0, 0);
            }
            25% {
                transform: translate(2%, 1%);
            }
            50% {
                transform: translate(-1%, 2%);
            }
            75% {
                transform: translate(1%, -2%);
            }
            100% {
                transform: translate(-2%, 1%);
            }
        }.as-hero /* ================================================================ */
        /* CINEMATIC HERO V2 — PREMIUM WEBSITE-NATIVE EXTENSIONS           */
        /* ================================================================ */

        .category-scene .content {
            align-items: center;
            text-align: center;
        }.as-hero .category-wrap {
            position: relative;
            width: min(94vw, 1500px);
            display: flex;
            flex-direction: column;
            align-items: center;
        }.as-hero .category-wrap::before {
            content: "";
            position: absolute;
            left: 50%;
            top: 52%;
            width: min(80vw, 1180px);
            height: 250px;
            transform: translate(-50%, -50%);
            background: radial-gradient(ellipse, rgba(98,94,255,.13), transparent 68%);
            filter: blur(26px);
            pointer-events: none;
            z-index: -1;
        }.as-hero .micro-lockup {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 14px;
            margin-top: 3.2vh;
            color: rgba(255,255,255,.42);
            font-size: clamp(9px,.70vw,13px);
            font-weight: 750;
            letter-spacing: .13em;
            text-transform: uppercase;
            opacity: 0;
            transform: translateY(16px);
        }.as-hero .micro-line {
            width: clamp(32px,4vw,72px);
            height: 1px;
            background: rgba(255,255,255,.14);
        }.as-hero .scene.active .micro-lockup {
            animation: premiumFadeUp .72s .82s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .slice {
            position: absolute;
            left: -8%;
            right: -8%;
            height: 11vh;
            opacity: 0;
            pointer-events: none;
            z-index: 35;
            mix-blend-mode: screen;
            background: linear-gradient(90deg, transparent, rgba(98,94,255,.12), rgba(255,255,255,.05), transparent);
            transform: skewY(-3deg);
        }.as-hero .slice-a {
            top: 22%;
        }.as-hero .slice-b {
            top: 62%;
        }.as-hero .scene.active .slice-a {
            animation: premiumSlice 1.15s .12s cubic-bezier(.7,0,.3,1) both;
        }.as-hero .scene.active .slice-b {
            animation: premiumSlice 1.15s .32s cubic-bezier(.7,0,.3,1) both;
        }.as-hero .corner-code {
            position: absolute;
            right: 2vw;
            top: 50%;
            transform: translateY(-50%);
            writing-mode: vertical-rl;
            color: rgba(255,255,255,.13);
            font-size: 8px;
            line-height: 1;
            font-weight: 750;
            letter-spacing: .18em;
            text-transform: uppercase;
            opacity: 0;
            z-index: 22;
        }.as-hero .scene.active .corner-code {
            animation: premiumFadeIn .8s .92s ease both;
        }.as-hero .action-stack-four .action {
            height: .86em;
            font-size: clamp(52px,9.0vw,172px);
        }.as-hero .action-stack-four .action:nth-child(1) {
            justify-content: flex-start;
            color: var(--white);
        }.as-hero .action-stack-four .action:nth-child(2) {
            justify-content: center;
            color: var(--indigo);
        }.as-hero .action-stack-four .action:nth-child(3) {
            justify-content: flex-end;
            color: var(--white);
        }.as-hero .action-stack-four .action:nth-child(4) {
            justify-content: center;
            color: rgba(255,255,255,.72);
        }.as-hero .scene.active .action-stack-four .action:nth-child(4) span {
            animation: premiumActionLift .8s .66s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .action-support {
            margin-top: 2.6vh !important;
        }.as-hero .orchestration-content {
            padding-top: 11vh;
            padding-bottom: 8vh;
        }.as-hero .enterprise-network {
            position: relative;
            width: min(88vw,1280px);
            height: min(55vh,540px);
            margin-top: 1.2vh;
        }.as-hero .network-lines {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            overflow: visible;
        }.as-hero .network-path {
            fill: none;
            stroke: rgba(98,94,255,.30);
            stroke-width: 1.25;
            stroke-dasharray: 7 11;
            vector-effect: non-scaling-stroke;
            opacity: 0;
        }.as-hero .network-path.soft {
            stroke: rgba(255,255,255,.11);
            stroke-dasharray: 3 12;
        }.as-hero .scene.active .network-path {
            animation: premiumPathIn .8s .18s cubic-bezier(.16,1,.3,1) forwards,
                       premiumPathTravel 7s 1s linear infinite;
        }.as-hero .orchestration-core {
            position: absolute;
            left: 50%;
            top: 50%;
            width: clamp(154px,13vw,216px);
            aspect-ratio: 1;
            transform: translate(-50%,-50%) scale(.68);
            border: 1px solid rgba(255,255,255,.18);
            border-radius: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 8px;
            text-align: center;
            padding: 24px;
            opacity: 0;
            background: radial-gradient(circle at 34% 28%, rgba(128,125,255,.97), rgba(98,94,255,.74) 32%, rgba(26,28,78,.97) 74%);
            box-shadow: 0 0 90px rgba(98,94,255,.24), inset 0 0 38px rgba(255,255,255,.06);
            z-index: 6;
        }.as-hero .orchestration-core::before,
        .as-hero .orchestration-core::after {
            content: "";
            position: absolute;
            border-radius: 50%;
            border: 1px solid rgba(98,94,255,.18);
            pointer-events: none;
        }.as-hero .orchestration-core::before {
            inset: -22px;
            animation: premiumCoreRing 3.4s ease-in-out infinite;
        }.as-hero .orchestration-core::after {
            inset: -46px;
            border-color: rgba(98,94,255,.10);
            animation: premiumCoreRing 3.4s .55s ease-in-out infinite;
        }.as-hero .scene.active .orchestration-core {
            animation: premiumCoreIn .95s .36s cubic-bezier(.22,1,.36,1) both;
        }.as-hero .core-eyebrow {
            color: rgba(255,255,255,.58);
            font-size: clamp(8px,.58vw,11px);
            font-weight: 780;
            letter-spacing: .17em;
            text-transform: uppercase;
        }.as-hero .orchestration-core strong {
            font-size: clamp(13px,1.10vw,20px);
            line-height: 1.05;
            font-weight: 900;
            letter-spacing: -.02em;
        }.as-hero .core-status {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 6px;
            color: rgba(255,255,255,.52);
            font-size: 8px;
            font-weight: 760;
            letter-spacing: .12em;
        }.as-hero .core-status i {
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #62e5b7;
            box-shadow: 0 0 14px rgba(98,229,183,.72);
        }.as-hero .e-node {
            position: absolute;
            min-width: clamp(130px,12vw,190px);
            padding: 13px 16px;
            border: 1px solid rgba(255,255,255,.10);
            border-radius: 14px;
            opacity: 0;
            background: linear-gradient(180deg,rgba(255,255,255,.060),rgba(255,255,255,.028));
            box-shadow: 0 18px 44px rgba(0,0,0,.20);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            transform: translateY(18px) scale(.94);
            z-index: 5;
        }.as-hero .node-title {
            display: flex;
            align-items: center;
            gap: 8px;
            color: rgba(255,255,255,.82);
            font-size: clamp(8px,.68vw,11px);
            font-weight: 820;
            letter-spacing: .08em;
            text-transform: uppercase;
        }.as-hero .node-title i {
            width: 7px;
            height: 7px;
            flex: 0 0 7px;
            border-radius: 50%;
            background: var(--indigo);
            box-shadow: 0 0 16px rgba(98,94,255,.58);
        }.as-hero .node-meta {
            display: block;
            margin-top: 7px;
            color: rgba(255,255,255,.42);
            font-size: clamp(8px,.59vw,10px);
            line-height: 1.4;
            font-weight: 620;
        }.as-hero .node-llm {
            left: 1%;
            top: 4%;
        }.as-hero .node-rag {
            right: 1%;
            top: 4%;
        }.as-hero .node-erp {
            left: 2%;
            bottom: 4%;
        }.as-hero .node-people {
            right: 2%;
            bottom: 4%;
        }.as-hero .node-rules {
            left: 50%;
            top: 1%;
            transform: translateX(-50%) translateY(18px) scale(.94);
        }.as-hero .node-action {
            left: 50%;
            bottom: 1%;
            transform: translateX(-50%) translateY(18px) scale(.94);
        }.as-hero .scene.active .node-llm {
            animation: premiumNodeIn .62s .48s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .node-rag {
            animation: premiumNodeIn .62s .58s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .node-erp {
            animation: premiumNodeIn .62s .68s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .node-people {
            animation: premiumNodeIn .62s .78s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .node-rules {
            animation: premiumNodeCentered .62s .88s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .node-action {
            animation: premiumNodeCentered .62s .98s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .data-packet {
            position: absolute;
            z-index: 8;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            opacity: 0;
            background: #807dff;
            box-shadow: 0 0 18px rgba(98,94,255,.86);
        }.as-hero .packet-1 {
            left: 17%;
            top: 25%;
        }.as-hero .packet-2 {
            right: 16%;
            top: 25%;
        }.as-hero .packet-3 {
            left: 18%;
            bottom: 24%;
        }.as-hero .packet-4 {
            right: 17%;
            bottom: 24%;
        }.as-hero .scene.active .packet-1 {
            animation: premiumPacketOne 1.55s .95s cubic-bezier(.7,0,.3,1) infinite;
        }.as-hero .scene.active .packet-2 {
            animation: premiumPacketTwo 1.72s 1.10s cubic-bezier(.7,0,.3,1) infinite;
        }.as-hero .scene.active .packet-3 {
            animation: premiumPacketThree 1.62s 1.20s cubic-bezier(.7,0,.3,1) infinite;
        }.as-hero .scene.active .packet-4 {
            animation: premiumPacketFour 1.78s 1.34s cubic-bezier(.7,0,.3,1) infinite;
        }.as-hero .execution-pipeline {
            width: min(92vw,1380px);
            margin-top: 3.5vh;
        }.as-hero .pipeline-rail {
            position: relative;
            display: grid;
            grid-template-columns: repeat(6,minmax(0,1fr));
            gap: clamp(8px,1vw,16px);
        }.as-hero .pipeline-rail::before {
            content: "";
            position: absolute;
            left: 6%;
            right: 6%;
            top: 34px;
            height: 1px;
            z-index: -1;
            background: linear-gradient(90deg,transparent,rgba(98,94,255,.20),rgba(98,94,255,.52),rgba(98,94,255,.20),transparent);
        }.as-hero .pipeline-step {
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-width: 0;
            opacity: 0;
            transform: translateY(18px);
        }.as-hero .pipeline-icon {
            width: 68px;
            height: 68px;
            border: 1px solid rgba(255,255,255,.10);
            border-radius: 18px;
            display: grid;
            place-items: center;
            color: #807dff;
            background: rgba(255,255,255,.04);
            box-shadow: 0 18px 36px rgba(0,0,0,.18);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            font-size: 12px;
            font-weight: 850;
            letter-spacing: .08em;
        }.as-hero .pipeline-step b {
            margin-top: 14px;
            color: rgba(255,255,255,.82);
            font-size: clamp(9px,.72vw,12px);
            line-height: 1.2;
            font-weight: 820;
            letter-spacing: .08em;
            text-align: center;
        }.as-hero .pipeline-step > span {
            max-width: 150px;
            margin-top: 7px;
            color: rgba(255,255,255,.40);
            font-size: clamp(8px,.60vw,10px);
            line-height: 1.4;
            text-align: center;
        }.as-hero .pipeline-pulse {
            position: absolute;
            left: 6%;
            top: 30px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            opacity: 0;
            background: #807dff;
            box-shadow: 0 0 20px rgba(98,94,255,.90);
        }.as-hero .scene.active .pipeline-step:nth-child(1) {
            animation: premiumPipelineStep .58s .38s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .pipeline-step:nth-child(2) {
            animation: premiumPipelineStep .58s .48s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .pipeline-step:nth-child(3) {
            animation: premiumPipelineStep .58s .58s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .pipeline-step:nth-child(4) {
            animation: premiumPipelineStep .58s .68s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .pipeline-step:nth-child(5) {
            animation: premiumPipelineStep .58s .78s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .pipeline-step:nth-child(6) {
            animation: premiumPipelineStep .58s .88s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .pipeline-pulse {
            animation: premiumPipelinePulse 3.4s .90s linear infinite;
        }.as-hero .outcome-grid {
            width: min(88vw,1280px);
            display: grid;
            grid-template-columns: repeat(4,minmax(0,1fr));
            gap: clamp(10px,1.2vw,18px);
            margin-top: 4vh;
        }.as-hero .outcome-card {
            position: relative;
            overflow: hidden;
            min-height: clamp(150px,18vh,198px);
            padding: clamp(22px,2vw,32px);
            border: 1px solid rgba(255,255,255,.10);
            border-radius: 20px;
            opacity: 0;
            transform: translateY(22px) scale(.98);
            text-align: left;
            background: linear-gradient(180deg,rgba(255,255,255,.056),rgba(255,255,255,.026));
            box-shadow: 0 20px 50px rgba(0,0,0,.20);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
        }.as-hero .outcome-card::before {
            content: "";
            position: absolute;
            left: -20%;
            right: -20%;
            top: -60%;
            height: 120%;
            opacity: .64;
            background: radial-gradient(circle,rgba(98,94,255,.16),transparent 65%);
            pointer-events: none;
        }.as-hero .outcome-eyebrow {
            position: relative;
            color: rgba(255,255,255,.42);
            font-size: 9px;
            font-weight: 760;
            letter-spacing: .15em;
        }.as-hero .outcome-card b {
            position: relative;
            display: block;
            margin-top: 20px;
            font-size: clamp(24px,2.4vw,44px);
            line-height: .95;
            font-weight: 900;
            letter-spacing: -.05em;
        }.as-hero .outcome-card p {
            position: relative;
            margin-top: 12px;
            color: rgba(255,255,255,.50);
            font-size: clamp(10px,.74vw,13px);
            line-height: 1.45;
            font-weight: 520;
        }.as-hero .outcome-card > i {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(90deg,#625eff,#a4a1ff);
            box-shadow: 0 0 20px rgba(98,94,255,.48);
        }.as-hero .scene.active .outcome-card:nth-child(1) {
            animation: premiumCardIn .64s .40s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .outcome-card:nth-child(2) {
            animation: premiumCardIn .64s .52s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .outcome-card:nth-child(3) {
            animation: premiumCardIn .64s .64s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .outcome-card:nth-child(4) {
            animation: premiumCardIn .64s .76s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .outcome-card:nth-child(1) > i {
            animation: premiumBarGrow 1s .80s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .outcome-card:nth-child(2) > i {
            animation: premiumBarGrow 1s .92s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .outcome-card:nth-child(3) > i {
            animation: premiumBarGrow 1s 1.04s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .outcome-card:nth-child(4) > i {
            animation: premiumBarGrow 1s 1.16s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .final-cta-row {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 12px;
            margin-top: 4vh;
            opacity: 0;
            transform: translateY(18px);
        }.as-hero .cinematic-cta {
            position: relative;
            overflow: hidden;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            min-height: 50px;
            padding: 0 21px;
            border: 1px solid rgba(255,255,255,.10);
            border-radius: 999px;
            color: rgba(255,255,255,.84);
            font-size: 12px;
            font-weight: 780;
            letter-spacing: .02em;
            text-decoration: none;
            pointer-events: auto;
            cursor: pointer;
            transition: transform .24s cubic-bezier(.16,1,.3,1), border-color .24s ease, box-shadow .24s ease, background .24s ease;
        }.as-hero .cinematic-cta::before {
            content: "";
            position: absolute;
            inset: 0;
            opacity: 0;
            background: linear-gradient(110deg,transparent 20%,rgba(255,255,255,.13) 45%,transparent 70%);
            transform: translateX(-120%);
            transition: transform .55s cubic-bezier(.16,1,.3,1), opacity .2s ease;
        }.as-hero .cinematic-cta:hover {
            transform: translateY(-2px);
        }.as-hero .cinematic-cta:hover::before {
            opacity: 1;
            transform: translateX(120%);
        }.as-hero .cinematic-cta span {
            position: relative;
            z-index: 2;
            transition: transform .24s cubic-bezier(.16,1,.3,1);
        }.as-hero .cinematic-cta:hover span {
            transform: translateX(3px);
        }.as-hero .primary-cta {
            border-color: rgba(98,94,255,.46);
            color: #fff;
            background: linear-gradient(180deg,rgba(98,94,255,.98),rgba(77,73,232,.98));
            box-shadow: 0 14px 40px rgba(98,94,255,.24);
        }.as-hero .primary-cta:hover {
            box-shadow: 0 18px 48px rgba(98,94,255,.34);
        }.as-hero .secondary-cta {
            background: rgba(255,255,255,.04);
            backdrop-filter: blur(14px);
            -webkit-backdrop-filter: blur(14px);
        }.as-hero .scene.active .final-cta-row {
            animation: premiumFadeUp .78s .82s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .lifecycle-row {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 26px;
            color: rgba(255,255,255,.30);
            font-size: 9px;
            font-weight: 760;
            letter-spacing: .10em;
            text-transform: uppercase;
            opacity: 0;
        }.as-hero .lifecycle-row i {
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #625eff;
        }.as-hero .scene.active .lifecycle-row {
            animation: premiumFadeUp .78s .98s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .film::before {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: -2;
            background: radial-gradient(circle at 50% 50%,rgba(98,94,255,.025),transparent 48%);
        }.as-hero .film[data-scene="orchestration"]::before {
            background: radial-gradient(circle at 50% 52%,rgba(98,94,255,.10),transparent 44%);
        }.as-hero .film[data-scene="final"]::before {
            background: radial-gradient(circle at 50% 50%,rgba(98,94,255,.12),transparent 46%);
        }.as-hero .scene strong {
            color: rgba(255,255,255,.88);
            font-weight: 760;
        }

        @keyframes premiumFadeUp {
            from {
                opacity: 0;
                transform: translateY(18px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes premiumFadeIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes premiumSlice {
            0% {
                opacity: 0;
                transform: translateX(-10vw) skewY(-3deg);
                filter: blur(12px);
            }
            22% {
                opacity: .55;
            }
            100% {
                opacity: 0;
                transform: translateX(24vw) skewY(-3deg);
                filter: blur(0);
            }
        }

        @keyframes premiumActionLift {
            from {
                opacity: 0;
                transform: translateY(100%);
                filter: blur(14px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
                filter: blur(0);
            }
        }

        @keyframes premiumPathIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes premiumPathTravel {
            to {
                stroke-dashoffset: -160;
            }
        }

        @keyframes premiumCoreIn {
            from {
                opacity: 0;
                transform: translate(-50%,-50%) scale(.62);
                filter: blur(14px);
            }
            to {
                opacity: 1;
                transform: translate(-50%,-50%) scale(1);
                filter: blur(0);
            }
        }

        @keyframes premiumCoreRing {
            0%,100% {
                opacity: .18;
                transform: scale(.95);
            }
            50% {
                opacity: .46;
                transform: scale(1.05);
            }
        }

        @keyframes premiumNodeIn {
            from {
                opacity: 0;
                transform: translateY(18px) scale(.94);
                filter: blur(6px);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
                filter: blur(0);
            }
        }

        @keyframes premiumNodeCentered {
            from {
                opacity: 0;
                transform: translateX(-50%) translateY(18px) scale(.94);
                filter: blur(6px);
            }
            to {
                opacity: 1;
                transform: translateX(-50%) translateY(0) scale(1);
                filter: blur(0);
            }
        }

        @keyframes premiumPacketOne {
            0% {
                opacity: 0;
                transform: translate(0,0) scale(.6);
            }
            12% {
                opacity: 1;
            }
            80% {
                opacity: .95;
            }
            100% {
                opacity: 0;
                transform: translate(calc(33vw - 80px),calc(25vh - 52px)) scale(1);
            }
        }

        @keyframes premiumPacketTwo {
            0% {
                opacity: 0;
                transform: translate(0,0) scale(.6);
            }
            12% {
                opacity: 1;
            }
            80% {
                opacity: .95;
            }
            100% {
                opacity: 0;
                transform: translate(calc(-33vw + 80px),calc(25vh - 52px)) scale(1);
            }
        }

        @keyframes premiumPacketThree {
            0% {
                opacity: 0;
                transform: translate(0,0) scale(.6);
            }
            12% {
                opacity: 1;
            }
            80% {
                opacity: .95;
            }
            100% {
                opacity: 0;
                transform: translate(calc(32vw - 70px),calc(-24vh + 52px)) scale(1);
            }
        }

        @keyframes premiumPacketFour {
            0% {
                opacity: 0;
                transform: translate(0,0) scale(.6);
            }
            12% {
                opacity: 1;
            }
            80% {
                opacity: .95;
            }
            100% {
                opacity: 0;
                transform: translate(calc(-32vw + 70px),calc(-24vh + 52px)) scale(1);
            }
        }

        @keyframes premiumPipelineStep {
            from {
                opacity: 0;
                transform: translateY(18px);
                filter: blur(5px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
                filter: blur(0);
            }
        }

        @keyframes premiumPipelinePulse {
            0% {
                left: 6%;
                opacity: 0;
            }
            8% {
                opacity: 1;
            }
            92% {
                opacity: 1;
            }
            100% {
                left: 94%;
                opacity: 0;
            }
        }

        @keyframes premiumCardIn {
            from {
                opacity: 0;
                transform: translateY(22px) scale(.98);
                filter: blur(6px);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
                filter: blur(0);
            }
        }

        @keyframes premiumBarGrow {
            from {
                width: 0;
            }
            to {
                width: 100%;
            }
        }

        @media(max-width:1100px) {
            .enterprise-network {
                width: 92vw;
                height: min(52vh,490px);
            }.as-hero .e-node {
                min-width: 125px;
            }.as-hero .outcome-grid {
                width: 92vw;
            }.as-hero .action-stack-four .action {
                font-size: clamp(48px,10vw,120px);
            }
        }

        @media(max-width:800px) {
            .content {
                padding: 12vh 6vw 11vh;
            }.as-hero .hero-word {
                font-size: 13vw;
                line-height: .88;
            }.as-hero .hero-word.medium {
                font-size: 11vw;
            }.as-hero .hero-word.small {
                font-size: 8.4vw;
            }.as-hero .support {
                max-width: 90vw;
                font-size: 3.5vw;
            }.as-hero .action {
                font-size: 15.5vw;
            }.as-hero .grid {
                background-size: 14vw 14vw;
            }.as-hero .network {
                width: 90vw;
                height: 44vh;
            }.as-hero .n-core {
                width: 135px;
                height: 135px;
                font-size: 12px;
            }.as-hero .n-node {
                min-width: 100px;
                font-size: 8px;
                padding: 10px 8px;
            }.as-hero .final-contact {
                justify-content: center;
            }.as-hero .brand {
                left: 6vw;
            }.as-hero .timeline {
                left: 6vw;
                right: 6vw;
            }
        }

        @media(prefers-reduced-motion:reduce) {
            *,
            *::before,
            *::after {
                animation-duration: .01ms !important;
                animation-iteration-count: 1 !important;
            }
        }.as-hero /* ================================================================== */
        /* MESSAGE-FIRST V2 — STRATEGIC STORY LAYER                          */
        /* ================================================================== */

        .message-scene .content {
            z-index: 4;
        }.as-hero .statement-wrap {
            position: relative;
            width: min(92vw, 1480px);
        }.as-hero .statement-wrap.centered {
            margin-inline: auto;
            text-align: center;
        }.as-hero .statement-wrap.lefted {
            margin-right: auto;
            text-align: left;
        }.as-hero .statement-wrap.righted {
            margin-left: auto;
            text-align: right;
        }.as-hero .brand-thesis {
            max-width: 980px;
            margin-top: 2.6vh;
            color: rgba(255,255,255,.56);
            font-size: clamp(13px, .98vw, 18px);
            line-height: 1.6;
            letter-spacing: -.012em;
            opacity: 0;
            transform: translateY(20px);
        }.as-hero .center .brand-thesis {
            margin-inline: auto;
        }.as-hero .right .brand-thesis {
            margin-left: auto;
        }.as-hero .scene.active .brand-thesis {
            animation: fadeSupport .75s .68s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .thesis-line {
            display: flex;
            align-items: center;
            gap: 12px;
            margin-top: 3vh;
            color: rgba(255,255,255,.34);
            font-size: clamp(9px, .68vw, 12px);
            font-weight: 800;
            letter-spacing: .15em;
            text-transform: uppercase;
            opacity: 0;
        }.as-hero .center .thesis-line {
            justify-content: center;
        }.as-hero .right .thesis-line {
            justify-content: flex-end;
        }.as-hero .thesis-line::before,
        .as-hero .thesis-line::after {
            content: "";
            width: clamp(24px, 3.5vw, 62px);
            height: 1px;
            background: rgba(255,255,255,.12);
        }.as-hero .scene.active .thesis-line {
            animation: fadeSupport .7s .82s cubic-bezier(.16,1,.3,1) both;
        }.as-hero /* ------------------------------------------------------------------ */
        /* SCENE 01 — PATTERN INTERRUPT                                       */
        /* ------------------------------------------------------------------ */

        .pattern-scene .content {
            align-items: center;
            text-align: center;
        }.as-hero .pattern-scene .hero-word {
            line-height: .82;
        }.as-hero .pattern-divider {
            width: min(64vw, 860px);
            height: 1px;
            margin: 3.1vh auto 0;
            overflow: hidden;
            background: rgba(255,255,255,.08);
            opacity: 0;
        }.as-hero .pattern-divider::after {
            content: "";
            display: block;
            width: 36%;
            height: 100%;
            background: linear-gradient(
                90deg,
                transparent,
                rgba(98,94,255,.95),
                rgba(255,255,255,.52),
                transparent
            );
            transform: translateX(-140%);
        }.as-hero .scene.active .pattern-divider {
            animation: fadeInOnly .4s .62s ease both;
        }.as-hero .scene.active .pattern-divider::after {
            animation: patternScan 1.25s .68s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .pattern-caption {
            display: flex;
            justify-content: center;
            gap: clamp(10px, 1.6vw, 26px);
            margin-top: 2.2vh;
            color: rgba(255,255,255,.32);
            font-size: clamp(9px, .66vw, 12px);
            font-weight: 800;
            letter-spacing: .14em;
            text-transform: uppercase;
            opacity: 0;
        }.as-hero .pattern-caption span {
            position: relative;
        }.as-hero .pattern-caption span + span::before {
            content: "";
            position: absolute;
            left: calc(clamp(10px, 1.6vw, 26px) / -2);
            top: 50%;
            width: 3px;
            height: 3px;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            background: #625eff;
        }.as-hero .scene.active .pattern-caption {
            animation: fadeSupport .68s .9s cubic-bezier(.16,1,.3,1) both;
        }.as-hero /* ------------------------------------------------------------------ */
        /* SCENE 02 — CONVENTIONAL AI LIMITATION                              */
        /* ------------------------------------------------------------------ */

        .conventional-grid {
            width: min(90vw, 1260px);
            margin-top: 3.8vh;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: clamp(10px, 1.15vw, 18px);
        }.as-hero .conventional-card {
            position: relative;
            min-height: clamp(126px, 16vh, 176px);
            padding: clamp(20px, 1.8vw, 28px);
            overflow: hidden;
            border: 1px solid rgba(255,255,255,.09);
            border-radius: 18px;
            background:
                linear-gradient(180deg, rgba(255,255,255,.052), rgba(255,255,255,.023));
            box-shadow: 0 18px 50px rgba(0,0,0,.22);
            backdrop-filter: blur(14px);
            opacity: 0;
            transform: translateY(22px) scale(.97);
        }.as-hero .conventional-card::before {
            content: "";
            position: absolute;
            inset: auto -25% -70% -25%;
            height: 120%;
            background: radial-gradient(circle, rgba(98,94,255,.10), transparent 66%);
            pointer-events: none;
        }.as-hero .conventional-card .c-index {
            position: relative;
            color: rgba(98,94,255,.78);
            font-size: 9px;
            font-weight: 800;
            letter-spacing: .16em;
            text-transform: uppercase;
        }.as-hero .conventional-card strong {
            position: relative;
            display: block;
            margin-top: 18px;
            color: rgba(255,255,255,.88);
            font-size: clamp(20px, 2vw, 36px);
            line-height: .95;
            letter-spacing: -.045em;
        }.as-hero .conventional-card p {
            position: relative;
            margin-top: 11px;
            color: rgba(255,255,255,.42);
            font-size: clamp(10px, .76vw, 13px);
            line-height: 1.45;
        }.as-hero .conventional-card .limit {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 2px;
            transform: scaleX(0);
            transform-origin: left;
            background: linear-gradient(90deg, rgba(98,94,255,.92), transparent);
        }.as-hero .scene.active .conventional-card:nth-child(1) {
            animation: msgCardIn .62s .40s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .conventional-card:nth-child(2) {
            animation: msgCardIn .62s .52s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .conventional-card:nth-child(3) {
            animation: msgCardIn .62s .64s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .conventional-card:nth-child(1) .limit {
            animation: limitGrow .9s .82s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .conventional-card:nth-child(2) .limit {
            animation: limitGrow .9s .94s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .conventional-card:nth-child(3) .limit {
            animation: limitGrow .9s 1.06s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .conventional-verdict {
            margin-top: 3.1vh;
            text-align: center;
            color: rgba(255,255,255,.44);
            font-size: clamp(11px, .86vw, 15px);
            font-weight: 650;
            letter-spacing: .01em;
            opacity: 0;
        }.as-hero .conventional-verdict strong {
            color: rgba(255,255,255,.94);
            font-weight: 850;
        }.as-hero .scene.active .conventional-verdict {
            animation: fadeSupport .72s 1.0s cubic-bezier(.16,1,.3,1) both;
        }.as-hero /* ------------------------------------------------------------------ */
        /* SCENE 03 — BUSINESS FIRST                                          */
        /* ------------------------------------------------------------------ */

        .business-first-stage {
            position: relative;
            width: min(88vw, 1160px);
            min-height: min(38vh, 350px);
            margin-top: 3vh;
        }.as-hero .business-first-core {
            position: absolute;
            left: 50%;
            top: 50%;
            width: clamp(170px, 15vw, 238px);
            aspect-ratio: 1;
            transform: translate(-50%, -50%) scale(.74);
            border-radius: 50%;
            display: grid;
            place-items: center;
            text-align: center;
            padding: 26px;
            opacity: 0;
            border: 1px solid rgba(255,255,255,.16);
            background:
                radial-gradient(circle at 34% 28%, rgba(128,125,255,.96), rgba(98,94,255,.72) 34%, rgba(22,25,73,.98) 78%);
            box-shadow:
                0 0 90px rgba(98,94,255,.22),
                inset 0 0 34px rgba(255,255,255,.06);
        }.as-hero .business-first-core::before,
        .as-hero .business-first-core::after {
            content: "";
            position: absolute;
            border-radius: 50%;
            border: 1px solid rgba(98,94,255,.14);
        }.as-hero .business-first-core::before {
            inset: -24px;
        }.as-hero .business-first-core::after {
            inset: -48px;
            border-color: rgba(98,94,255,.08);
        }.as-hero .business-first-core span {
            color: rgba(255,255,255,.52);
            font-size: 9px;
            font-weight: 800;
            letter-spacing: .14em;
            text-transform: uppercase;
        }.as-hero .business-first-core strong {
            display: block;
            margin-top: 7px;
            font-size: clamp(14px, 1.25vw, 22px);
            line-height: 1.02;
            letter-spacing: -.03em;
        }.as-hero .scene.active .business-first-core {
            animation: businessCoreIn .9s .42s cubic-bezier(.22,1,.36,1) both;
        }.as-hero .business-node {
            position: absolute;
            min-width: clamp(112px, 10vw, 156px);
            padding: 12px 14px;
            border: 1px solid rgba(255,255,255,.09);
            border-radius: 999px;
            color: rgba(255,255,255,.72);
            background: rgba(255,255,255,.04);
            backdrop-filter: blur(12px);
            text-align: center;
            font-size: clamp(9px, .68vw, 11px);
            font-weight: 800;
            letter-spacing: .09em;
            text-transform: uppercase;
            opacity: 0;
        }.as-hero .business-node::before {
            content: "";
            display: inline-block;
            width: 5px;
            height: 5px;
            margin-right: 7px;
            border-radius: 50%;
            background: #625eff;
            box-shadow: 0 0 12px rgba(98,94,255,.55);
            vertical-align: 1px;
        }.as-hero .business-node.b1 {
            left: 4%;
            top: 6%;
        }.as-hero .business-node.b2 {
            right: 4%;
            top: 6%;
        }.as-hero .business-node.b3 {
            left: 0;
            top: 48%;
        }.as-hero .business-node.b4 {
            right: 0;
            top: 48%;
        }.as-hero .business-node.b5 {
            left: 8%;
            bottom: 3%;
        }.as-hero .business-node.b6 {
            right: 8%;
            bottom: 3%;
        }.as-hero .scene.active .business-node.b1 {
            animation: businessNodeIn .55s .62s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .business-node.b2 {
            animation: businessNodeIn .55s .70s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .business-node.b3 {
            animation: businessNodeIn .55s .78s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .business-node.b4 {
            animation: businessNodeIn .55s .86s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .business-node.b5 {
            animation: businessNodeIn .55s .94s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .business-node.b6 {
            animation: businessNodeIn .55s 1.02s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .business-connector {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            overflow: visible;
            pointer-events: none;
        }.as-hero .business-connector path {
            fill: none;
            stroke: rgba(98,94,255,.18);
            stroke-width: 1;
            stroke-dasharray: 5 9;
            opacity: 0;
        }.as-hero .scene.active .business-connector path {
            animation:
                connectorIn .6s .52s ease both,
                dash 8s 1s linear infinite;
        }.as-hero /* ------------------------------------------------------------------ */
        /* SCENE 04 — CATEGORY DEFINITION                                     */
        /* ------------------------------------------------------------------ */

        .category-definition .comparison-lockup {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: clamp(12px, 2vw, 34px);
            margin-top: 3.3vh;
            color: rgba(255,255,255,.38);
            font-size: clamp(9px, .68vw, 12px);
            font-weight: 800;
            letter-spacing: .13em;
            text-transform: uppercase;
            opacity: 0;
        }.as-hero .comparison-lockup .arrow {
            color: #625eff;
            font-size: clamp(18px, 1.6vw, 28px);
            letter-spacing: 0;
        }.as-hero .scene.active .comparison-lockup {
            animation: fadeSupport .68s .82s cubic-bezier(.16,1,.3,1) both;
        }.as-hero /* ------------------------------------------------------------------ */
        /* SCENE 05 — COMPLETE SYSTEM                                         */
        /* ------------------------------------------------------------------ */

        .system-message {
            margin-top: 2vh;
            color: rgba(255,255,255,.42);
            font-size: clamp(10px, .74vw, 13px);
            font-weight: 750;
            letter-spacing: .10em;
            text-transform: uppercase;
            opacity: 0;
        }.as-hero .scene.active .system-message {
            animation: fadeSupport .65s 1.15s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .system-message strong {
            color: rgba(255,255,255,.84);
        }.as-hero /* ------------------------------------------------------------------ */
        /* SCENE 06 — END-TO-END ACCOUNTABILITY                              */
        /* ------------------------------------------------------------------ */

        .delivery-track {
            position: relative;
            width: min(92vw, 1360px);
            margin-top: 4vh;
            display: grid;
            grid-template-columns: repeat(6, minmax(0, 1fr));
            gap: clamp(8px, .85vw, 14px);
        }.as-hero .delivery-track::before {
            content: "";
            position: absolute;
            left: 6%;
            right: 6%;
            top: 30px;
            height: 1px;
            background: linear-gradient(
                90deg,
                transparent,
                rgba(98,94,255,.26),
                rgba(98,94,255,.58),
                rgba(98,94,255,.26),
                transparent
            );
        }.as-hero .delivery-step {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            opacity: 0;
            transform: translateY(18px);
        }.as-hero .delivery-step .step-dot {
            width: 60px;
            height: 60px;
            display: grid;
            place-items: center;
            border: 1px solid rgba(255,255,255,.10);
            border-radius: 18px;
            color: #807dff;
            background: rgba(3,11,31,.86);
            box-shadow: 0 16px 38px rgba(0,0,0,.24);
            font-size: 13px;
            font-weight: 900;
            letter-spacing: -.02em;
        }.as-hero .delivery-step strong {
            margin-top: 14px;
            color: rgba(255,255,255,.82);
            font-size: clamp(9px, .72vw, 12px);
            font-weight: 850;
            letter-spacing: .09em;
            text-transform: uppercase;
        }.as-hero .delivery-step span {
            max-width: 150px;
            margin-top: 7px;
            color: rgba(255,255,255,.34);
            font-size: clamp(8px, .60vw, 10px);
            line-height: 1.4;
        }.as-hero .delivery-pulse {
            position: absolute;
            left: 6%;
            top: 26px;
            z-index: 5;
            width: 9px;
            height: 9px;
            border-radius: 50%;
            opacity: 0;
            background: #807dff;
            box-shadow:
                0 0 0 5px rgba(98,94,255,.10),
                0 0 20px rgba(98,94,255,.72);
        }.as-hero .scene.active .delivery-step:nth-child(1) {
            animation: deliveryIn .55s .40s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .delivery-step:nth-child(2) {
            animation: deliveryIn .55s .50s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .delivery-step:nth-child(3) {
            animation: deliveryIn .55s .60s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .delivery-step:nth-child(4) {
            animation: deliveryIn .55s .70s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .delivery-step:nth-child(5) {
            animation: deliveryIn .55s .80s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .delivery-step:nth-child(6) {
            animation: deliveryIn .55s .90s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .delivery-pulse {
            animation: deliveryPulse 3.1s 1s linear infinite;
        }.as-hero .accountability-lockup {
            margin-top: 3.4vh;
            color: rgba(255,255,255,.38);
            font-size: clamp(10px, .78vw, 13px);
            font-weight: 780;
            letter-spacing: .10em;
            text-transform: uppercase;
            opacity: 0;
        }.as-hero .accountability-lockup strong {
            color: rgba(255,255,255,.92);
        }.as-hero .scene.active .accountability-lockup {
            animation: fadeSupport .7s 1.1s cubic-bezier(.16,1,.3,1) both;
        }.as-hero /* ------------------------------------------------------------------ */
        /* SCENE 07 — BETTER BUSINESS                                         */
        /* ------------------------------------------------------------------ */

        .business-impact-words {
            width: min(92vw, 1320px);
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: clamp(9px, 1vw, 15px);
            margin-top: 3.4vh;
        }.as-hero .impact-word {
            position: relative;
            overflow: hidden;
            min-height: clamp(70px, 9vh, 96px);
            display: flex;
            align-items: center;
            padding: 0 clamp(18px, 2vw, 30px);
            border: 1px solid rgba(255,255,255,.08);
            border-radius: 16px;
            background: rgba(255,255,255,.034);
            color: rgba(255,255,255,.78);
            font-size: clamp(24px, 2.8vw, 52px);
            font-weight: 920;
            letter-spacing: -.055em;
            text-transform: uppercase;
            opacity: 0;
            transform: translateY(18px);
        }.as-hero .impact-word:nth-child(even) {
            justify-content: flex-end;
            text-align: right;
        }.as-hero .impact-word::after {
            content: "";
            position: absolute;
            inset: 0;
            transform: translateX(-120%);
            background: linear-gradient(
                100deg,
                transparent,
                rgba(98,94,255,.12),
                transparent
            );
        }.as-hero .scene.active .impact-word:nth-child(1) {
            animation: deliveryIn .56s .42s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .impact-word:nth-child(2) {
            animation: deliveryIn .56s .54s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .impact-word:nth-child(3) {
            animation: deliveryIn .56s .66s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .impact-word:nth-child(4) {
            animation: deliveryIn .56s .78s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .scene.active .impact-word::after {
            animation: impactSweep 1.1s .95s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .better-business-lockup {
            margin-top: 3.4vh;
            text-align: center;
            opacity: 0;
        }.as-hero .better-business-lockup span {
            display: block;
            color: rgba(255,255,255,.36);
            font-size: clamp(10px, .72vw, 12px);
            font-weight: 800;
            letter-spacing: .15em;
            text-transform: uppercase;
        }.as-hero .better-business-lockup strong {
            display: block;
            margin-top: 8px;
            color: rgba(255,255,255,.94);
            font-size: clamp(22px, 2.4vw, 44px);
            line-height: 1;
            font-weight: 920;
            letter-spacing: -.05em;
        }.as-hero .better-business-lockup strong em {
            color: #807dff;
            font-style: normal;
        }.as-hero .scene.active .better-business-lockup {
            animation: fadeSupport .72s 1.05s cubic-bezier(.16,1,.3,1) both;
        }.as-hero /* ------------------------------------------------------------------ */
        /* SCENE 08 — FINAL PROMISE                                           */
        /* ------------------------------------------------------------------ */

        .promise-line {
            max-width: 960px;
            margin-top: 2.5vh;
            color: rgba(255,255,255,.58);
            font-size: clamp(13px, 1vw, 18px);
            line-height: 1.55;
            opacity: 0;
        }.as-hero .scene.active .promise-line {
            animation: fadeSupport .72s .68s cubic-bezier(.16,1,.3,1) both;
        }.as-hero .promise-pill-row {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 8px;
            margin-top: 2.7vh;
            opacity: 0;
        }.as-hero .promise-pill {
            padding: 9px 13px;
            border: 1px solid rgba(255,255,255,.09);
            border-radius: 999px;
            background: rgba(255,255,255,.035);
            color: rgba(255,255,255,.48);
            font-size: clamp(8px, .62vw, 10px);
            font-weight: 800;
            letter-spacing: .10em;
            text-transform: uppercase;
        }.as-hero .scene.active .promise-pill-row {
            animation: fadeSupport .72s .84s cubic-bezier(.16,1,.3,1) both;
        }.as-hero /* ------------------------------------------------------------------ */
        /* KEYFRAMES                                                          */
        /* ------------------------------------------------------------------ */

        @keyframes fadeInOnly {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes patternScan {
            from {
                transform: translateX(-140%);
            }
            to {
                transform: translateX(380%);
            }
        }

        @keyframes msgCardIn {
            from {
                opacity: 0;
                transform: translateY(22px) scale(.97);
                filter: blur(6px);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
                filter: blur(0);
            }
        }

        @keyframes limitGrow {
            from {
                transform: scaleX(0);
            }
            to {
                transform: scaleX(1);
            }
        }

        @keyframes businessCoreIn {
            from {
                opacity: 0;
                transform: translate(-50%, -50%) scale(.68);
                filter: blur(12px);
            }
            to {
                opacity: 1;
                transform: translate(-50%, -50%) scale(1);
                filter: blur(0);
            }
        }

        @keyframes businessNodeIn {
            from {
                opacity: 0;
                transform: translateY(12px) scale(.94);
                filter: blur(5px);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
                filter: blur(0);
            }
        }

        @keyframes connectorIn {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        @keyframes deliveryIn {
            from {
                opacity: 0;
                transform: translateY(18px);
                filter: blur(5px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
                filter: blur(0);
            }
        }

        @keyframes deliveryPulse {
            0% {
                left: 6%;
                opacity: 0;
            }
            8% {
                opacity: 1;
            }
            92% {
                opacity: 1;
            }
            100% {
                left: 94%;
                opacity: 0;
            }
        }

        @keyframes impactSweep {
            from {
                transform: translateX(-120%);
            }
            to {
                transform: translateX(120%);
            }
        }.as-hero /* ------------------------------------------------------------------ */
        /* MESSAGE-FIRST RESPONSIVE                                            */
        /* ------------------------------------------------------------------ */

        @media (max-width: 900px) {
            .conventional-grid {
                width: 92vw;
                grid-template-columns: repeat(3, minmax(0,1fr));
            }.as-hero .conventional-card {
                padding: 18px 14px;
            }.as-hero .business-first-stage {
                width: 92vw;
            }.as-hero .delivery-track {
                width: 92vw;
            }.as-hero .delivery-step .step-dot {
                width: 52px;
                height: 52px;
            }
        }

        @media (max-width: 760px) {
            .pattern-caption {
                gap: 10px;
                font-size: 8px;
                letter-spacing: .10em;
            }.as-hero .conventional-grid {
                grid-template-columns: 1fr;
                gap: 8px;
                margin-top: 2.2vh;
            }.as-hero .conventional-card {
                min-height: auto;
                padding: 14px 16px;
            }.as-hero .conventional-card strong {
                margin-top: 8px;
                font-size: 5.8vw;
            }.as-hero .conventional-card p {
                display: none;
            }.as-hero .conventional-verdict {
                margin-top: 2vh;
                padding-inline: 10px;
            }.as-hero .business-first-stage {
                min-height: 42vh;
            }.as-hero .business-first-core {
                width: 128px;
            }.as-hero .business-first-core::before {
                inset: -15px;
            }.as-hero .business-first-core::after {
                inset: -30px;
            }.as-hero .business-node {
                min-width: 92px;
                padding: 9px 10px;
                font-size: 8px;
            }.as-hero .business-node.b1 {
                left: 0;
                top: 5%;
            }.as-hero .business-node.b2 {
                right: 0;
                top: 5%;
            }.as-hero .business-node.b3 {
                left: -1%;
                top: 48%;
            }.as-hero .business-node.b4 {
                right: -1%;
                top: 48%;
            }.as-hero .business-node.b5 {
                left: 3%;
                bottom: 4%;
            }.as-hero .business-node.b6 {
                right: 3%;
                bottom: 4%;
            }.as-hero .category-definition .comparison-lockup {
                gap: 9px;
                font-size: 8px;
                letter-spacing: .08em;
            }.as-hero .delivery-track {
                grid-template-columns: repeat(3, minmax(0, 1fr));
                row-gap: 24px;
            }.as-hero .delivery-track::before,
        .as-hero .delivery-pulse {
                display: none;
            }.as-hero .delivery-step span {
                display: none;
            }.as-hero .delivery-step .step-dot {
                width: 48px;
                height: 48px;
                border-radius: 14px;
            }.as-hero .business-impact-words {
                width: 92vw;
                gap: 8px;
            }.as-hero .impact-word {
                min-height: 62px;
                padding: 0 14px;
                font-size: 6vw;
            }.as-hero .brand-thesis,
        .as-hero .promise-line {
                max-width: 90vw;
                font-size: 3.5vw;
            }.as-hero .promise-pill {
                font-size: 7px;
                padding: 7px 9px;
            }
        }

        @media (max-width: 420px) {
            .pattern-caption span:nth-child(2) {
                display: none;
            }.as-hero .business-first-stage {
                min-height: 39vh;
            }.as-hero .business-node {
                min-width: 82px;
                padding-inline: 8px;
                letter-spacing: .06em;
            }.as-hero .business-node::before {
                display: none;
            }.as-hero .better-business-lockup strong {
                font-size: 7vw;
            }
        }

    `,
        }}
      />

      <div
        className="film"
        id="film"
        ref={filmRef}
        aria-label="AgenticSense cinematic brand film"
        data-agenticsense-hero-version="2.0-message-first"
      >


        <div className="ambient" />
        <div className="grid" />
        <div className="grain" />




        {/* ============================================================= */}
        {/* 01: PATTERN INTERRUPT — AI IS EVERYWHERE */}
        {/* ============================================================= */}
        <section
            className="scene center message-scene pattern-scene"
            data-duration="3300"
            aria-label="AI is everywhere, execution is not"
        >
            <div className="streak" />
            <div className="slice slice-a" />
            <div className="slice slice-b" />

            <div className="content">
                <div className="statement-wrap centered">
                  

                    <div className="mask line-1">
                        <span className="hero-word medium">
                            AI IS EVERYWHERE.
                        </span>
                    </div>

                    <div className="mask line-2">
                        <span className="hero-word medium purple">
                            EXECUTION ISN&apos;T.
                        </span>
                    </div>

                    <div className="pattern-divider" />

                   
                </div>
            </div>

            <div className="ghost">EXECUTE</div>
          
        </section>

        {/* ============================================================= */}
        {/* 02: CONVENTIONAL AI LIMITATION */}
        {/* ============================================================= */}
        <section
            className="scene center message-scene conventional-scene"
            data-duration="3900"
            aria-label="Conventional AI helps but often stops before execution"
        >
            <div className="streak" />

            <div className="content">
             

                <div className="mask line-1">
                    <span className="hero-word small">
                        IT CAN HELP.
                    </span>
                </div>

                <div className="mask line-2">
                    <span className="hero-word small purple">
                        BUT DOES IT RUN THE WORK?
                    </span>
                </div>

                <div className="conventional-grid">
                    <div className="conventional-card">
                        <span className="c-index">01 / ASSIST</span>
                        <strong>CHATBOTS.</strong>
                        <p>
                            Useful for conversation and answers
                            often disconnected from operational execution.
                        </p>
                        <span className="limit" />
                    </div>

                    <div className="conventional-card">
                        <span className="c-index">02 / SUPPORT</span>
                        <strong>COPILOTS.</strong>
                        <p>
                            Powerful assistance for people 
                            but the human still carries the process forward.
                        </p>
                        <span className="limit" />
                    </div>

                    <div className="conventional-card">
                        <span className="c-index">03 / AUTOMATE</span>
                        <strong>POINT SOLUTIONS.</strong>
                        <p>
                            Automate isolated steps 
                            while the end-to-end workflow stays fragmented.
                        </p>
                        <span className="limit" />
                    </div>
                </div>

                <div className="conventional-verdict">
                    Conventional AI can <strong>answer a request.</strong>
                    Agentic AI can <strong>move a process forward.</strong>
                </div>
            </div>

           
        </section>

        {/* ============================================================= */}
        {/* 03: AGENTICSENSE BELIEF — BUSINESS FIRST */}
        {/* ============================================================= */}
        <section
            className="scene center message-scene business-first-scene"
            data-duration="4100"
            aria-label="AgenticSense starts with the business, not the technology"
        >
            <div className="streak" />

            <div className="content">
            

                <div className="mask line-1">
                    <span className="hero-word small">
                        WE DON&apos;T START WITH AI.
                    </span>
                </div>

                <div className="mask line-2">
                    <span className="hero-word medium purple">
                        WE START WITH YOUR BUSINESS.
                    </span>
                </div>

                {/* <div className="business-first-stage">
                    <svg
                        className="business-connector"
                        viewBox="0 0 1100 360"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <path d="M145 45 C340 85 390 130 550 180"  />
                        <path d="M955 45 C760 85 710 130 550 180"  />
                        <path d="M115 180 C310 180 385 180 550 180"  />
                        <path d="M985 180 C790 180 715 180 550 180"  />
                        <path d="M165 325 C345 280 410 235 550 180"  />
                        <path d="M935 325 C755 280 690 235 550 180"  />
                    </svg>

                    <div className="business-first-core">
                        <div>
                            <span>START HERE</span>
                            <strong>
                                BUSINESS<br />
                                OUTCOME
                            </strong>
                        </div>
                    </div>

                    <div className="business-node b1">PROCESS</div>
                    <div className="business-node b2">DECISIONS</div>
                    <div className="business-node b3">DATA</div>
                    <div className="business-node b4">PEOPLE</div>
                    <div className="business-node b5">SYSTEMS</div>
                    <div className="business-node b6">CONSTRAINTS</div>
                </div> */}

                <div className="brand-thesis">
                    We identify where intelligence can actually improve
                    how the business operates then engineer the right system around it.
                </div>
            </div>

            <div className="ghost">BUSINESS</div>
         
        </section>

        {/* ============================================================= */}
        {/* 04: CATEGORY DEFINITION */}
        {/* ============================================================= */}
        <section
            className="scene center message-scene category-definition"
            data-duration="4000"
            aria-label="AgenticSense builds complete Agentic AI Systems, not just AI agents"
        >
            <div className="streak" />
            <div className="slice slice-a" />

            <div className="content">
              

                <div className="mask line-1">
                    <span className="hero-word small">
                        WE DON&apos;T JUST BUILD
                    </span>
                </div>

                <div className="mask line-2">
                    <span className="hero-word medium">
                        AI AGENTS.
                    </span>
                </div>

                <div className="mask line-3">
                    <span className="hero-word medium purple">
                        WE BUILD COMPLETE
                    </span>
                </div>

                <div className="mask line-4">
                    <span className="hero-word medium purple">
                        AGENTIC AI SYSTEMS.
                    </span>
                </div>

               

            </div>

            <div className="ghost">SYSTEMS</div>
          
        </section>

        {/* ============================================================= */}
        {/* 05: WHAT COMPLETE MEANS — ENTERPRISE ORCHESTRATION */}
        {/* ============================================================= */}
        <section
            className="scene center orchestration-scene message-scene"
            data-duration="4900"
            aria-label="Complete Agentic AI System embedded across enterprise operations"
        >
            <div className="streak" />

            <div className="content orchestration-content">
               

                <div className="mask line-1">
                    <span className="hero-word small">
                        INTELLIGENCE.
                    </span>
                </div>

                <div className="mask line-2">
                    <span className="hero-word small purple">
                        EMBEDDED INTO OPERATIONS.
                    </span>
                </div>

                {/* <div className="enterprise-network">
                    <svg
                        className="network-lines"
                        viewBox="0 0 1200 560"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <path
                            className="network-path"
                            d="M135 94 C330 120 410 210 600 280"
                          />

                        <path
                            className="network-path"
                            d="M1065 94 C870 120 790 210 600 280"
                          />

                        <path
                            className="network-path"
                            d="M150 468 C340 420 430 350 600 280"
                          />

                        <path
                            className="network-path"
                            d="M1050 468 C860 420 770 350 600 280"
                          />

                        <path
                            className="network-path soft"
                            d="M600 78 C600 150 600 210 600 280"
                          />

                        <path
                            className="network-path soft"
                            d="M600 486 C600 420 600 350 600 280"
                          />
                    </svg>

                    <div className="orchestration-core">
                        <span className="core-eyebrow">CORE</span>
                        <strong>
                            AGENTIC<br />
                            ORCHESTRATION
                        </strong>
                        <span className="core-status">
                            <i />
                            GOVERNED
                        </span>
                    </div>

                    <div className="e-node node-llm">
                        <span className="node-title">
                            <i />
                            AI / MODELS
                        </span>
                        <span className="node-meta">
                            Reasoning, planning & intelligence
                        </span>
                    </div>

                    <div className="e-node node-rag">
                        <span className="node-title">
                            <i />
                            ENTERPRISE KNOWLEDGE
                        </span>
                        <span className="node-meta">
                            Policies, records, context & RAG
                        </span>
                    </div>

                    <div className="e-node node-erp">
                        <span className="node-title">
                            <i />
                            ERP / CRM / APIS
                        </span>
                        <span className="node-meta">
                            Systems of record, tools & applications
                        </span>
                    </div>

                    <div className="e-node node-people">
                        <span className="node-title">
                            <i />
                            PEOPLE / APPROVALS
                        </span>
                        <span className="node-meta">
                            Judgment, escalation & accountability
                        </span>
                    </div>

                    <div className="e-node node-rules">
                        <span className="node-title">
                            <i />
                            BUSINESS RULES
                        </span>
                        <span className="node-meta">
                            Permissions, policy & guardrails
                        </span>
                    </div>

                    <div className="e-node node-action">
                        <span className="node-title">
                            <i />
                            ACTION / EXECUTION
                        </span>
                        <span className="node-meta">
                            Governed action inside real workflows
                        </span>
                    </div>

                    <span className="data-packet packet-1" />
                    <span className="data-packet packet-2" />
                    <span className="data-packet packet-3" />
                    <span className="data-packet packet-4" />
                </div> */}

                <div className="system-message">
                    <strong>SIGNAL → DECISION → ACTION</strong>
                      /  
                    ONE ORCHESTRATED OPERATING SYSTEM
                </div>
            </div>

           
        </section>

        {/* ============================================================= */}
        {/* 06: WHY AGENTICSENSE IS NOT CONVENTIONAL */}
        {/* ============================================================= */}
        <section
            className="scene center message-scene delivery-scene"
            data-duration="4300"
            aria-label="AgenticSense is accountable end to end"
        >
            <div className="streak" />

            <div className="content">
              

                <div className="mask line-1">
                    <span className="hero-word small">
                        NOT AN AI FEATURE SHOP.
                    </span>
                </div>

                <div className="mask line-2">
                    <span className="hero-word medium purple">
                        ACCOUNTABLE END-TO-END.
                    </span>
                </div>

                <div className="delivery-track">
                    <div className="delivery-step">
                        <div className="step-dot">01</div>
                        <strong>DISCOVER</strong>
                        <span>Understand the business problem.</span>
                    </div>

                    <div className="delivery-step">
                        <div className="step-dot">02</div>
                        <strong>ARCHITECT</strong>
                        <span>Design the operating model and system.</span>
                    </div>

                    <div className="delivery-step">
                        <div className="step-dot">03</div>
                        <strong>ENGINEER</strong>
                        <span>Build production-grade intelligence.</span>
                    </div>

                    <div className="delivery-step">
                        <div className="step-dot">04</div>
                        <strong>INTEGRATE</strong>
                        <span>Connect data, tools and enterprise apps.</span>
                    </div>

                    <div className="delivery-step">
                        <div className="step-dot">05</div>
                        <strong>DEPLOY</strong>
                        <span>Move from prototype into real operations.</span>
                    </div>

                    <div className="delivery-step">
                        <div className="step-dot">06</div>
                        <strong>OPERATE</strong>
                        <span>Govern, optimize and scale continuously.</span>
                    </div>

                    <span
                        className="delivery-pulse"
                        aria-hidden="true"
                     />
                </div>

                <div className="accountability-lockup">
                    NOT “BUILD & HAND OVER.”
                      →  
                    <strong>OWN THE COMPLETE SYSTEM LIFECYCLE.</strong>
                </div>
            </div>

            <div className="ghost">END-TO-END</div>
        
        </section>

        {/* ============================================================= */}
        {/* 07: BUSINESS MESSAGE */}
        {/* ============================================================= */}
        <section
            className="scene center message-scene business-impact-scene"
            data-duration="4100"
            aria-label="The goal is a better business, not more AI"
        >
            <div className="streak" />

            <div className="content">
             

                <div className="mask line-1">
                    <span className="hero-word small">
                        THE GOAL ISN&apos;T
                    </span>
                </div>

                <div className="mask line-2">
                    <span className="hero-word medium purple">
                        MORE AI.
                    </span>
                </div>

                <div className="business-impact-words">
                    <div className="impact-word">
                        MOVE FASTER.
                    </div>

                    <div className="impact-word">
                        OPERATE SMARTER.
                    </div>

                    <div className="impact-word">
                        REDUCE FRICTION.
                    </div>

                    <div className="impact-word">
                        CREATE CAPACITY.
                    </div>
                </div>

                <div className="better-business-lockup">
                    <span>THE REAL OUTCOME</span>
                    <strong>
                        A <em>BETTER BUSINESS.</em>
                    </strong>
                </div>
            </div>

            <div className="ghost">IMPACT</div>
          
        </section>

        {/* ============================================================= */}
        {/* 08: FINAL BRAND PROMISE */}
        {/* ============================================================= */}
        <section
            className="scene center message-scene final-scene"
            data-duration="5400"
            aria-label="AgenticSense complete Agentic AI Systems"
        >
            <div className="streak" />
            <div className="slice slice-a" />

            <div className="content">
                <div className="final-wrap">
                    

                    <div className="mask line-1 final-logo-mask">
                        <span className="final-logo">
                            Agentic<span className="purple">Sense</span>
                        </span>
                    </div>

                    <div className="final-tagline">
                        We Build Complete
                        <span className="purple">
                            Agentic AI Systems.
                        </span>
                    </div>

                    <div className="promise-line">
                        From business problem to production execution
                        intelligent systems designed around your operations,
                        integrated with your enterprise,
                        and governed by your rules.
                    </div>

                    <div className="promise-pill-row">
                        <span className="promise-pill">BUSINESS-FIRST</span>
                        <span className="promise-pill">PRODUCTION-GRADE</span>
                        <span className="promise-pill">INTEGRATED</span>
                        <span className="promise-pill">GOVERNED</span>
                        <span className="promise-pill">END-TO-END</span>
                    </div>

                    <div className="final-ctas">
                        <a
                            className="cta primary"
                            href="#agentic-ai-systems"
                            aria-label="Explore Agentic AI Systems"
                        >
                            <span>EXPLORE AGENTIC AI SYSTEMS</span>
                            <i>→</i>
                        </a>

                        <a
                            className="cta secondary"
                            href="#contact"
                            aria-label="Talk to AgenticSense"
                        >
                            <span>TALK TO AGENTICSENSE</span>
                            <i>→</i>
                        </a>
                    </div>

                    <div className="final-micro">
                        <span>STRATEGY</span>
                        <i />
                        <span>ENGINEERING</span>
                        <i />
                        <span>INTEGRATION</span>
                        <i />
                        <span>EXECUTION</span>
                    </div>
                </div>
            </div>

            
        </section>

        
    
        <div className="flash" id="flash" ref={flashRef} />
        <div className="timeline" aria-hidden="true">
  <div
    className="timeline-progress"
    id="timelineProgress"
    ref={timelineRef}
  />
</div>
        
      </div>
    </div>
  );
}