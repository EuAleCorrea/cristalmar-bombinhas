"use client";

import * as React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar as CalendarIcon, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";

export interface DatePickerProps {
  date?: Date | undefined;
  onSelect?: (date: Date | undefined) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  minDate?: Date;
  maxDate?: Date;
  className?: string;
  buttonClassName?: string;
  allowClear?: boolean;
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
    },
  },
};

export function DatePicker({
  date,
  onSelect,
  placeholder = "dd/mm/aaaa",
  label,
  disabled = false,
  minDate,
  maxDate,
  className = "",
  buttonClassName = "",
  allowClear = false,
}: DatePickerProps) {
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Fecha o popover ao clicar fora
  React.useEffect(() => {
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
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [open]);

  const handleSelect = (selectedDate: Date | undefined) => {
    if (onSelect) {
      onSelect(selectedDate);
    }
    setOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onSelect) {
      onSelect(undefined);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative text-left w-full", open ? "z-50" : "z-10", className)}
    >
      {label && (
        <label className="block text-[10px] font-extrabold uppercase text-slate-500 tracking-wider mb-1 flex items-center gap-1 select-none">
          <CalendarIcon className="w-3.5 h-3.5 text-[#3B82F6]" />
          {label}
        </label>
      )}

      <div className="relative">
        <button
          type="button"
          disabled={disabled}
          onClick={() => setOpen((prev) => !prev)}
          className={cn(
            "w-full bg-slate-50 hover:bg-slate-100/90 border border-slate-200 text-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-bold flex items-center justify-between transition-all cursor-pointer focus:ring-2 focus:ring-[#3B82F6] focus:outline-none",
            !date && "text-slate-400 font-normal",
            disabled && "opacity-50 cursor-not-allowed",
            buttonClassName
          )}
          aria-haspopup="dialog"
          aria-expanded={open}
        >
          <div className="flex items-center gap-2 truncate pr-2">
            <CalendarIcon className="w-3.5 h-3.5 text-[#3B82F6] shrink-0" />
            <span className={cn("truncate", date ? "text-slate-900 font-bold" : "text-slate-400 font-normal")}>
              {date ? format(date, "dd/MM/yyyy", { locale: ptBR }) : placeholder}
            </span>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            {allowClear && date && (
              <span
                role="button"
                tabIndex={0}
                onClick={handleClear}
                className="p-0.5 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors cursor-pointer"
              >
                <X className="w-3 h-3" />
              </span>
            )}
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-slate-400"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </motion.span>
          </div>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="w-auto p-1.5 z-[9999] rounded-2xl bg-white/98 backdrop-blur-md border border-slate-200/90 shadow-2xl absolute top-[112%] left-0 overflow-hidden pointer-events-auto"
            >
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleSelect}
                disabled={(day: Date) => {
                  if (minDate && day < minDate) return true;
                  if (maxDate && day > maxDate) return true;
                  return false;
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default DatePicker;
