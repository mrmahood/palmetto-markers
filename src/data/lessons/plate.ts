import type { LessonArt } from "./types";

/**
 * Locked plate for every file in public/images/lessons.
 *
 * Olive-green ink on warm beige paper — the same family as a United States
 * dollar bill. The site chrome is indigo and white. These pictures are not.
 * Do not recolor them, and do not add a full-color or navy illustration.
 *
 * Measured across the set: green leads red and blue, saturation stays under
 * about 36, sunlit paper sits near #e4dcc4, and shade ink sits near #304034.
 * scripts/check-lesson-plate.py rejects a file that leaves this range.
 */
export const LESSON_PLATE = {
  id: "dollar-bill",
  paper: "#e4dcc4",
  olive: "#7c8464",
  ink: "#304034",
} as const;

/** Use this wording for any new lesson illustration. */
export const LESSON_PLATE_BRIEF =
  "Illustration in the locked Palmetto Markers lesson plate: olive-green ink on warm beige paper, like a United States dollar bill, low saturation, soft engraved light. No navy, no full-color daylight, no photographic color.";

export function lessonArt(file: string, label: string): LessonArt {
  return { src: `/images/lessons/${file}`, label };
}
