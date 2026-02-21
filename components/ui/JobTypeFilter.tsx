"use client";

import { useState } from "react";
import { Warehouse, Factory, Wrench, LayoutGrid } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/context/LanguageContext";

const jobTypes = [
  { id: "all", labelKey: "jobFilter.allJobs", icon: LayoutGrid },
  { id: "warehouse", labelKey: "jobFilter.warehouse", icon: Warehouse },
  { id: "manufacturing", labelKey: "jobFilter.manufacturing", icon: Factory },
  { id: "skilled-trades", labelKey: "jobFilter.skilledTrades", icon: Wrench },
];

interface JobTypeFilterProps {
  className?: string;
}

export function JobTypeFilter({ className }: JobTypeFilterProps) {
  const [active, setActive] = useState("all");
  const { t } = useTranslation();

  return (
    <div className={cn("flex flex-wrap items-center justify-center gap-2", className)}>
      {jobTypes.map((type) => {
        const Icon = type.icon;
        return (
          <button
            key={type.id}
            onClick={() => setActive(type.id)}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200",
              active === type.id
                ? "bg-orange-action text-white shadow-[0_2px_10px_rgba(234,88,12,0.25)]"
                : "bg-white border border-slate-200 text-slate-600 hover:border-orange-action/50 hover:text-orange-action"
            )}
          >
            <Icon className="w-4 h-4" />
            {t(type.labelKey)}
          </button>
        );
      })}
    </div>
  );
}
