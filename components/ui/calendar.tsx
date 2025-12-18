"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export function Calendar({ className, classNames, ...props }: CalendarProps) {
  return (
    <div className={cn("rounded-2xl border border-slate-200 bg-white p-3 shadow-soft", className)}>
      <DayPicker
        showOutsideDays
        className="w-full"
        classNames={{
          months: "flex flex-col sm:flex-row gap-4",
          month: "space-y-4",
          caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-sm font-semibold",
          nav: "space-x-1 flex items-center",
          nav_button: "h-8 w-8 bg-white border border-slate-200 rounded-full hover:bg-slate-50",
          table: "w-full border-collapse space-y-1",
          head_row: "flex",
          head_cell: "text-slate-500 rounded-md w-9 font-medium text-xs",
          row: "flex w-full mt-2",
          cell: "h-9 w-9 text-center text-sm p-0 relative",
          day: "h-9 w-9 rounded-full hover:bg-slate-100 focus-ring",
          day_selected: "bg-brand-blue text-white hover:bg-brand-blue/90",
          day_today: "border border-brand-green",
          day_outside: "text-slate-300",
          day_disabled: "text-slate-300 opacity-50",
          ...classNames,
        }}
        {...props}
      />
    </div>
  );
}
