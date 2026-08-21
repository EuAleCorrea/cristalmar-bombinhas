"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";
import { IconType } from "react-icons";

export interface StaggeredSelectOption {
  value: string;
  label: string;
  icon?: IconType | React.ComponentType<{ className?: string }>;
  badge?: string;
}

export interface AnimatedStaggeredSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: StaggeredSelectOption[];
  placeholder?: string;
  label?: string;
  icon?: React.ComponentType<{ className?: string }>;
  variant?: "default" | "capsule" | "filter" | "minimal";
  className?: string;
  menuClassName?: string;
  disabled?: boolean;
}

const menuVariants: Variants = {
  closed: {
    opacity: 0,
    y: -8,
    scale: 0.97,
    transition: {
      duration: 0.14,
      ease: [0.4, 0, 1, 1], // saída rápida e limpa
    },
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.22,
      ease: [0.16, 1, 0.3, 1], // curva suave Apple-style
      staggerChildren: 0.025,
      delayChildren: 0.03,
    },
  },
};

const itemVariants: Variants = {
  closed: {
    opacity: 0,
    x: -4,
    transition: {
      duration: 0.1,
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.16,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const actionIconVariants: Variants = {
  closed: { scale: 0.8, opacity: 0 },
  open: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.18, ease: "easeOut" },
  },
};

export function AnimatedStaggeredSelect({
  value,
  onChange,
  options,
  placeholder = "Selecione...",
  label,
  icon: HeaderIcon,
  variant = "default",
  className = "",
  menuClassName = "",
  disabled = false,
}: AnimatedStaggeredSelectProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Fecha o dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fechar no Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [open]);

  const selectedOption = options.find((opt) => opt.value === value);
  const displayLabel = selectedOption ? selectedOption.label : placeholder;

  // Estilos conforme a variante visual
  const getButtonStyles = () => {
    if (variant === "capsule") {
      return "w-full bg-transparent text-left flex items-center justify-between text-xs font-bold text-[#1E2638] focus:outline-none cursor-pointer py-0.5";
    }
    if (variant === "filter") {
      return "w-full bg-slate-50 hover:bg-slate-100/90 border border-slate-200 text-slate-800 rounded-xl px-3 py-2 text-xs font-bold flex items-center justify-between transition-all cursor-pointer focus:ring-2 focus:ring-[#3B82F6] focus:outline-none";
    }
    if (variant === "minimal") {
      return "bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800 flex items-center justify-between gap-2 focus:outline-none cursor-pointer hover:bg-slate-100 transition-all";
    }
    // default
    return "w-full bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs font-bold text-[#1E2638] flex items-center justify-between transition-all cursor-pointer focus:ring-2 focus:ring-[#3B82F6] focus:outline-none";
  };

  return (
    <div
      ref={containerRef}
      className={`relative text-left ${open ? "z-50" : "z-10"} ${className}`}
    >
      {label && (
        <label className="block text-[10px] font-extrabold uppercase text-slate-500 tracking-wider mb-1 flex items-center gap-1 select-none">
          {HeaderIcon && <HeaderIcon className="w-3.5 h-3.5 text-[#3B82F6]" />}
          {label}
        </label>
      )}

      <div className="relative">
        <button
          type="button"
          disabled={disabled}
          onClick={() => setOpen((prev) => !prev)}
          className={`${getButtonStyles()} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          <div className="flex items-center gap-2 truncate pr-2">
            {selectedOption?.icon && (
              <span className="text-[#3B82F6] shrink-0 text-sm">
                <selectedOption.icon className="w-3.5 h-3.5" />
              </span>
            )}
            <span
              className={`truncate ${
                !selectedOption && value === ""
                  ? "text-slate-400 font-normal"
                  : "text-slate-900 font-bold"
              }`}
            >
              {displayLabel}
            </span>
          </div>

          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-400 shrink-0 ml-1.5"
          >
            <ChevronDown className="w-3.5 h-3.5" />
          </motion.span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className={`flex flex-col gap-1 p-1.5 rounded-2xl bg-white/98 backdrop-blur-md shadow-2xl border border-slate-200/90 absolute top-[112%] left-0 w-full min-w-[200px] max-h-64 overflow-y-auto z-[9999] pointer-events-auto ${menuClassName}`}
              role="listbox"
            >
              {options.map((opt) => {
                const isSelected = opt.value === value;
                const OptIcon = opt.icon;

                return (
                  <motion.li
                    key={opt.value}
                    variants={itemVariants}
                    whileHover={{ x: 2, transition: { duration: 0.12 } }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      onChange(opt.value);
                      setOpen(false);
                    }}
                    role="option"
                    aria-selected={isSelected}
                    className={`flex items-center justify-between gap-2 w-full px-3 py-2.5 text-xs font-semibold rounded-xl transition-colors cursor-pointer select-none ${
                      isSelected
                        ? "bg-sky-50 text-[#0284C7] font-bold"
                        : "text-slate-700 hover:bg-slate-100/70 hover:text-slate-900"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      {OptIcon && (
                        <motion.span
                          variants={actionIconVariants}
                          className={`text-sm shrink-0 ${
                            isSelected ? "text-[#0284C7]" : "text-slate-400"
                          }`}
                        >
                          <OptIcon className="w-3.5 h-3.5" />
                        </motion.span>
                      )}
                      <span className="truncate">{opt.label}</span>
                    </div>

                    {isSelected && (
                      <Check className="w-3.5 h-3.5 text-[#0284C7] shrink-0" />
                    )}
                  </motion.li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default AnimatedStaggeredSelect;
