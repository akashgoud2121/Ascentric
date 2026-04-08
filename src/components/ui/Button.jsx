import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { cn } from "../../lib/utils";

export default function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  as: Component = "button",
  ...props
}) {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Magnetic effect values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  useEffect(() => {
    const checkTouch = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };
    checkTouch();
    window.addEventListener("resize", checkTouch);
    return () => window.removeEventListener("resize", checkTouch);
  }, []);
  
  const handleMouseMove = (e) => {
    if (isMobile) return;

    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    mouseX.set(x * 0.35); // 35% movement
    mouseY.set(y * 0.35);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const variants = {
    primary: "bg-primary text-primary-foreground shadow-[0_10px_30px_rgba(20,15,12,0.15)] hover:shadow-[0_20px_40px_rgba(20,15,12,0.2)]",
    secondary: "bg-secondary text-secondary-foreground",
    glass: "glass border-foreground/10 text-foreground hover:bg-foreground/5",
    outline: "border-2 border-foreground/10 text-foreground hover:bg-foreground/5",
    ghost: "text-foreground hover:bg-foreground/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg font-bold",
  };

  const MotionComponent = motion[Component] || motion.button;

  return (
    <MotionComponent
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: !isMobile ? springX : 0,
        y: !isMobile ? springY : 0,
      }}
      whileHover={{ scale: isMobile ? 1 : 1.02 }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        "relative inline-flex items-center justify-center rounded-2xl transition-shadow duration-300 active:scale-95 disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
      
      {/* Shine effect for primary */}
      {variant === "primary" && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 to-transparent pointer-events-none opacity-50" />
      )}
    </MotionComponent>
  );
}
