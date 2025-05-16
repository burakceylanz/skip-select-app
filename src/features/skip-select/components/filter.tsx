import { useState, useEffect } from "react";
import type { FilterProps, FilterValues } from "@/features/skip-select/types";

// Options for hire period select
const hirePeriodOptions: { label: string; value: number | null }[] = [
  { label: "All", value: null },
  { label: "7 days", value: 7 },
  { label: "14 days", value: 14 },
  { label: "21 days", value: 21 },
];

// Options for filter type select
const filterTypeOptions: {
  label: string;
  value: FilterValues["filterType"];
}[] = [
  { label: "All", value: "all" },
  { label: "Allowed on road only", value: "allowed_on_road" },
  { label: "Allows heavy waste only", value: "allows_heavy_waste" },
];

export default function Filter({ onFilterChange }: FilterProps) {
  const [hirePeriod, setHirePeriod] = useState<number | null>(null);
  const [filterType, setFilterType] =
    useState<FilterValues["filterType"]>("all");

  // Notify parent on any filter change
  useEffect(() => {
    onFilterChange({ hirePeriod, filterType });
  }, [hirePeriod, filterType, onFilterChange]);

  return (
    <div className="py-1.5 sm:py-6 px-12 text-white flex flex-col sm:flex-row items-center gap-4 justify-between">
      {/* Hire Period Select */}
      <div className="w-full sm:w-auto flex flex-col">
        <label htmlFor="hire-period" className="text-sm mb-1">
          Hire Period
        </label>
        <select
          id="hire-period"
          className="bg-secondary border border-border-color rounded px-3 py-2 outline-none"
          value={hirePeriod ?? ""}
          onChange={(e) => {
            const val = e.target.value;
            setHirePeriod(val === "" ? null : parseInt(val));
          }}
        >
          {hirePeriodOptions.map((opt) => (
            <option key={opt.label} value={opt.value ?? ""}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      {/* Filter Type Select */}
      <div className="w-full sm:w-auto flex flex-col">
        <label htmlFor="filter-type" className="text-sm mb-1">
          Other Filters
        </label>
        <select
          id="filter-type"
          className="bg-secondary border border-border-color rounded px-3 py-2 outline-none"
          value={filterType}
          onChange={(e) =>
            setFilterType(e.target.value as FilterValues["filterType"])
          }
        >
          {filterTypeOptions.map((opt) => (
            <option key={opt.label} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
