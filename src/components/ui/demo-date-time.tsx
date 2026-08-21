"use client";

import { DateTimeInput } from "@/components/ui/date-time-input";

export default function DateTimeDemoPage() {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-card border border-slate-200">
      <DateTimeInput />
    </div>
  );
}
