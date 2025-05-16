import BackgroundGrid from "@/common/components/background-grid";
import Footer from "@/features/skip-select/components/footer";
import type { FilterValues, SkipType } from "@/features/skip-select/types";
import Filter from "@/features/skip-select/components/filter";
import List from "@/features/skip-select/components/list";
import { getSkips } from "@/features/skip-select/services/skip-select-service";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/common/components/loading";
import { useState } from "react";

export default function SkipSelect() {
  // filtered skip list
  const [filters, setFilters] = useState<FilterValues>({
    hirePeriod: null,
    filterType: "all",
  });

  // Fetch skip data
  const {
    isPending,
    isError,
    data: skipList,
    error,
  } = useQuery<SkipType[], unknown>({
    queryKey: ["skips"],
    queryFn: getSkips,
  });

  // Show loader while fetching list
  if (isPending) {
    return <Loading />;
  }

  // Display error message on fetch failure
  if (isError) {
    return (
      <span>
        Error:{" "}
        {error && typeof error === "object" && "message" in error
          ? (error as Error).message
          : "An unknown error occurred"}
      </span>
    );
  }

  // Apply filters to the skip list
  const filteredList = skipList?.filter((item) => {
    const hirePeriodMatch =
      filters.hirePeriod === null ||
      item.hire_period_days === filters.hirePeriod;

    const filterTypeMatch =
      filters.filterType === "all" ||
      (filters.filterType === "allowed_on_road" && item.allowed_on_road) ||
      (filters.filterType === "allows_heavy_waste" && item.allows_heavy_waste);

    return hirePeriodMatch && filterTypeMatch;
  });

  return (
    <section className="bg-secondary min-h-screen flex flex-col sm:items-center justify-start relative">
      {/* Header */}
      <div className="flex flex-col gap-2.5 items-center justify-center py-6 px-8">
        <h1 className="text-primary">Choose Your Skip Size</h1>
        <p className="text-primary text-center">
          Select the skip size that best suits your needs
        </p>
      </div>

      {/* Filters */}
      <Filter onFilterChange={setFilters} />

      {/* List of skips */}
      <List list={filteredList || []} />

      {/* Background decoration */}
      <BackgroundGrid />

      {/* Sticky footer with actions */}
      <Footer />
    </section>
  );
}
