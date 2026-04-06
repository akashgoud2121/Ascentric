import { motion } from "framer-motion";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../lib/utils";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const options = [
    { id: "light", icon: <Sun className="w-4 h-4" /> },
    { id: "system", icon: <Monitor className="w-4 h-4" /> },
    { id: "dark", icon: <Moon className="w-4 h-4" /> },
  ];

  return (
    <div className="flex items-center glass p-1 rounded-full border-foreground/5 bg-foreground/5">
      {options.map((opt) => (
        <button
          key={opt.id}
          onClick={() => setTheme(opt.id)}
          className={cn(
            "relative p-2 rounded-full transition-all duration-300",
            theme === opt.id ? "text-primary" : "text-foreground/40 hover:text-foreground/70"
          )}
        >
          {theme === opt.id && (
            <motion.div
              layoutId="activeTheme"
              className="absolute inset-0 bg-background rounded-full shadow-sm -z-10"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {opt.icon}
        </button>
      ))}
    </div>
  );
}
