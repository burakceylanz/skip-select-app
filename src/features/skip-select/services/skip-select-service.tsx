import type { SkipType } from "@/features/skip-select/types";
import apiClient from "@/common/services/apiClient";

/**
 * getSkips: Retrieves an array of skips for a given postcode and area.
 * Uses the shared apiClient which handles base URL and JSON headers.
 * @returns Promise<SkipType[]> - list of skips matching the location
 */

// GET request to fetch skips endpoint with query parameters
export const getSkips = async (): Promise<SkipType[]> => {
  const { data } = await apiClient.get(
    "/api/skips/by-location?postcode=NR32&area=Lowestoft"
  );
  return data;
};
