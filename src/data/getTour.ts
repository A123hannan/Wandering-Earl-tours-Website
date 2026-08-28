import { toursData } from "./data";
import { destCardDetils } from "./2024data";
import { destCardDetils2025 } from "./2025data";
import { Tour } from "./type";

export function getTourById(id: number | string | undefined): Tour | undefined {
  if (id === undefined || id === null || id === "") return undefined;

  const numericId = Number(id);

  // Search in toursData
  const tourFromData = toursData.find((t) => t.id === numericId);
  if (tourFromData) return tourFromData;

  // Search in 2025 data
  const tourFrom2025 = destCardDetils2025.find((t) => t.id === numericId);
  if (tourFrom2025) return tourFrom2025;

  // Search in 2024 data
  const tourFrom2024 = destCardDetils.find((t) => t.id === numericId);
  if (tourFrom2024) return tourFrom2024;

  // No match found — return undefined so the page can call notFound()
  return undefined;
}
