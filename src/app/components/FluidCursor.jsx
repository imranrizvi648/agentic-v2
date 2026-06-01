"use client";
import { useEffect, useRef } from 'react';

export default function FluidCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let points = [];
    
    // Video wale high-density premium colors
    const colors = [
      { r: 168, g: 85, b: 247 }, // Neon Purple
      { r: 34, g: 211, b: 238 }, // Bright Cyan
      { r: 99, g: 102, b: 241 }, // Indigo
      { r: 59, g: 130, b: 246 }, // Royal Blue
      { r: 236, g: 72, b: 153 }  // Pink
    ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initial position tracking fix
    let lastMouseX = null;
    let lastMouseY = null;

    const createFluid = (x, y, vx, vy) => {
      // Fluid density badha di taake video jaisa thick trail bane
      const particleCount = 8; 
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 2.5;
        
        points.push({
          x: x,
          y: y,
          // Momentum balancing
          vx: vx * 0.25 + Math.cos(angle) * speed,
          vy: vy * 0.25 + Math.sin(angle) * speed,
          alpha: 1.0,
          size: Math.random() * 20 + 12, 
          color: colors[Math.floor(Math.random() * colors.length)],
          rotation: Math.random() * Math.PI,
          rotSpeed: (Math.random() - 0.5) * 0.05
        });
      }
    };

    const handleMouseMove = (e) => {
      // Agar pehli baar move ho raha hai toh current position set karo
      if (lastMouseX === null || lastMouseY === null) {
        lastMouseX = e.clientX;
        lastMouseY = e.clientY;
        return;
      }

      const vx = e.clientX - lastMouseX;
      const vy = e.clientY - lastMouseY;
      
      createFluid(e.clientX, e.clientY, vx, vy);
      
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const t = e.touches[0];
        if (lastMouseX === null || lastMouseY === null) {
          lastMouseX = t.clientX;
          lastMouseY = t.clientY;
          return;
        }
        const vx = t.clientX - lastMouseX;
        const vy = t.clientY - lastMouseY;
        createFluid(t.clientX, t.clientY, vx, vy);
        lastMouseX = t.clientX;
        lastMouseY = t.clientY;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    // Render loop
    let animationFrameId;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = points.length - 1; i >= 0; i--) {
        const p = points[i];
        
        p.x += p.vx;
        p.y += p.vy;
        
        // Fluid drag (is se liquid curls bante hain)
        p.vx *= 0.95;
        p.vy *= 0.95;
        p.vy -= 0.02; // Halka sa smoke upward lift
        
        p.rotation += p.rotSpeed;
        p.alpha -= 0.015; // Smooth fading
        p.size += 0.5;    // Particle expansion

        if (p.alpha <= 0) {
          points.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        
        // Neon glow physics
        ctx.shadowBlur = 20;
        ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`;
        
        const gradient = ctx.createRadialGradient(p.x, p.y, p.size * 0.05, p.x, p.y, p.size);
        gradient.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 1)`);
        gradient.addColorStop(0.2, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.5)`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ 
        zIndex: 99999, // Sab se top par layer rakhi hai
        mixBlendMode: 'screen', // Dark backgrounds par behtareen shine karega
        backgroundColor: 'transparent',
        display: 'block'
      }}
    />
  );
}