"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayPicker } from "react-day-picker";
import { ptBR } from "date-fns/locale";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  locale = ptBR,
  components: userComponents,
  ...props
}: CalendarProps) {
  const defaultClassNames = {
    months: "relative flex flex-col sm:flex-row gap-4 select-none",
    month: "w-full space-y-2",
    month_caption: "relative mx-8 mb-1 flex h-8 items-center justify-center z-20",
    caption_label: "text-xs font-black text-slate-800 capitalize tracking-wide",
    nav: "absolute top-0 flex w-full justify-between z-10",
    button_previous: cn(
      buttonVariants({ variant: "outline" }),
      "h-7 w-7 bg-slate-50 p-0 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 cursor-pointer",
    ),
    button_next: cn(
      buttonVariants({ variant: "outline" }),
      "h-7 w-7 bg-slate-50 p-0 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 cursor-pointer",
    ),
    weekday: "size-8 p-0 text-[10px] font-bold text-slate-400 uppercase text-center",
    day_button:
      "relative flex size-8 items-center justify-center whitespace-nowrap rounded-xl p-0 text-slate-800 font-bold text-xs outline-offset-2 hover:bg-sky-100/70 hover:text-[#0284C7] focus:outline-none focus-visible:z-10 group-data-[selected]:bg-[#3B82F6] group-data-[selected]:text-white group-data-[disabled]:text-slate-300 group-data-[disabled]:line-through group-data-[outside]:text-slate-300 transition-colors cursor-pointer",
    day: "group size-8 px-0 text-xs",
    range_start: "range-start",
    range_end: "range-end",
    range_middle: "range-middle",
    today: "border border-sky-500 font-extrabold text-[#3B82F6]",
    outside: "text-slate-300 opacity-50",
    hidden: "invisible",
    week_number: "size-8 p-0 text-[10px] font-medium text-slate-400",
  };

  const defaultComponents = {
    Chevron: (props: any) => {
      if (props.orientation === "left") {
        return <ChevronLeft size={16} strokeWidth={2} {...props} aria-hidden="true" />;
      }
      return <ChevronRight size={16} strokeWidth={2} {...props} aria-hidden="true" />;
    },
  };

  const mergedComponents = {
    ...defaultComponents,
    ...userComponents,
  };

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      locale={locale}
      className={cn("w-fit p-3", className)}
      classNames={{
        ...defaultClassNames,
        ...classNames,
      }}
      components={mergedComponents}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
