"use client";

import * as React from "react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar as CalendarIcon, Clock, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const menuVariants: Variants = {
  closed: {
    opacity: 0,
    y: -8,
    scale: 0.97,
    transition: {
      duration: 0.14,
      ease: [0.4, 0, 1, 1],
    },
  },
  open: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.22,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function DateTimeInput() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [time, setTime] = React.useState("12:00");
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

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

  return (
    <div className="flex flex-col gap-4">
      {/* Date Picker com Framer Motion */}
      <div ref={containerRef} className="flex flex-col gap-1.5 relative">
        <Label className="text-xs font-medium">Data</Label>
        
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className={cn(
              "w-[250px] bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-bold flex items-center justify-between transition-all cursor-pointer focus:ring-2 focus:ring-[#3B82F6] focus:outline-none",
              !date && "text-muted-foreground"
            )}
          >
            <div className="flex items-center gap-2 truncate">
              <CalendarIcon className="h-4 w-4 text-[#3B82F6] shrink-0" />
              <span>
                {date ? format(date, "dd/MM/yyyy", { locale: ptBR }) : "Selecione a data"}
              </span>
            </div>
            <motion.span
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-slate-400"
            >
              <ChevronDown className="w-3.5 h-3.5" />
            </motion.span>
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
                  onSelect={(d) => {
                    setDate(d);
                    setOpen(false);
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Time Picker */}
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="time" className="text-xs font-medium">
          Horário
        </Label>
        <div className="relative w-[250px]">
          <Input
            id="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            step="60" // minute granularity
            className="pl-8"
          />
          <Clock className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        </div>
      </div>

      {/* Preview */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-xs text-slate-600 font-semibold">
        Selecionado:{" "}
        {date ? (
          <span className="text-[#3B82F6] font-bold">
            {format(date, "dd/MM/yyyy", { locale: ptBR })} às {time}
          </span>
        ) : (
          "Nenhuma data selecionada"
        )}
      </div>
    </div>
  );
}

export { DateTimeInput };
