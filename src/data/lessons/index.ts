import { beaufortLessons } from "./beaufort";
import { beaufortLessonsB } from "./beaufort-b";
import { beaufortLessonsC } from "./beaufort-c";
import { beaufortLessonsD } from "./beaufort-d";
import { beaufortLessonsE } from "./beaufort-e";
import { pennLesson } from "./penn-school";
import type { MarkerLesson } from "./types";
import { yorkLessons } from "./york";
import { yorkLessonsB } from "./york-b";
import { yorkLessonsC } from "./york-c";
import { yorkLessonsD } from "./york-d";
import { yorkLessonsE } from "./york-e";
import { yorkLessonsF } from "./york-f";
import { yorkLessonsG } from "./york-g";
import { yorkLessonsH } from "./york-h";

const LESSONS: Record<string, MarkerLesson> = {
  [pennLesson.markerId]: pennLesson,
};

for (const lesson of [
  ...beaufortLessons,
  ...beaufortLessonsB,
  ...beaufortLessonsC,
  ...beaufortLessonsD,
  ...beaufortLessonsE,
  ...yorkLessons,
  ...yorkLessonsB,
  ...yorkLessonsC,
  ...yorkLessonsD,
  ...yorkLessonsE,
  ...yorkLessonsF,
  ...yorkLessonsG,
  ...yorkLessonsH,
]) {
  LESSONS[lesson.markerId] = lesson;
}

export function lessonFor(markerId: string): MarkerLesson | undefined {
  return LESSONS[markerId];
}

export type { MarkerLesson } from "./types";
