"use client";

import {
  FiEdit,
  FiChevronDown,
  FiTrash,
  FiShare,
  FiPlusSquare,
} from "react-icons/fi";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Dispatch, SetStateAction, useState, useRef, useEffect } from "react";
import { IconType } from "react-icons";

export interface StaggeredDropDownItem {
  text: string;
  Icon?: IconType | React.ComponentType<{ className?: string }>;
  onClick?: () => void;
}

export interface StaggeredDropDownProps {
  label?: string;
  items?: StaggeredDropDownItem[];
  buttonClassName?: string;
  menuClassName?: string;
  align?: "left" | "right" | "center";
}

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
      staggerChildren: 0.03,
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

interface OptionProps {
  text: string;
  Icon?: IconType | React.ComponentType<{ className?: string }>;
  setOpen: Dispatch<SetStateAction<boolean>>;
  onClick?: () => void;
}

const Option = ({ text, Icon, setOpen, onClick }: OptionProps) => {
  return (
    <motion.li
      variants={itemVariants}
      whileHover={{ x: 2, transition: { duration: 0.12 } }}
      whileTap={{ scale: 0.98 }}
      onClick={() => {
        if (onClick) onClick();
        setOpen(false);
      }}
      className="flex items-center gap-2.5 w-full p-2.5 text-xs font-semibold whitespace-nowrap rounded-xl hover:bg-sky-50 text-slate-700 hover:text-[#0284C7] transition-colors cursor-pointer select-none"
    >
      {Icon && (
        <motion.span variants={actionIconVariants} className="text-sky-500 text-sm shrink-0">
          <Icon />
        </motion.span>
      )}
      <span className="truncate">{text}</span>
    </motion.li>
  );
};

export const StaggeredDropDown = ({
  label = "Ações",
  items,
  buttonClassName,
  menuClassName,
  align = "left",
}: StaggeredDropDownProps) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const defaultItems: StaggeredDropDownItem[] = [
    { text: "Editar", Icon: FiEdit },
    { text: "Duplicar", Icon: FiPlusSquare },
    { text: "Compartilhar", Icon: FiShare },
    { text: "Remover", Icon: FiTrash },
  ];

  const renderItems = items || defaultItems;

  const getAlignClass = () => {
    if (align === "right") return "right-0 origin-top-right";
    if (align === "center") return "left-1/2 -translate-x-1/2 origin-top";
    return "left-0 origin-top-left";
  };

  return (
    <div
      ref={containerRef}
      className={`relative inline-block text-left ${open ? "z-50" : "z-10"}`}
    >
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((pv) => !pv)}
          className={
            buttonClassName ||
            "flex items-center gap-2 px-4 py-2.5 rounded-2xl text-white bg-[#3B82F6] hover:bg-[#2563EB] active:scale-95 transition-all shadow-md font-bold text-xs cursor-pointer"
          }
        >
          <span>{label}</span>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <FiChevronDown />
          </motion.span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className={`flex flex-col gap-1 p-2 rounded-2xl bg-white/98 backdrop-blur-md shadow-2xl border border-slate-200/90 absolute top-[115%] min-w-48 overflow-hidden z-[9999] pointer-events-auto ${getAlignClass()} ${
                menuClassName || ""
              }`}
            >
              {renderItems.map((item, idx) => (
                <Option
                  key={idx}
                  setOpen={setOpen}
                  Icon={item.Icon}
                  text={item.text}
                  onClick={item.onClick}
                />
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default StaggeredDropDown;
