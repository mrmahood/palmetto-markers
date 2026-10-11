/** A hands-on marker lesson. Facts live in the record, not in the player. */

export type LessonArt = {
  src: string;
  label: string;
};

export type LessonHotspot = {
  id: string;
  label: string;
  /** Percent from the left of the illustration. */
  x: number;
  /** Percent from the top of the illustration. */
  y: number;
  fact: string;
};

export type LessonEvent = {
  id: string;
  year: string;
  label: string;
  why: string;
};

export type LessonSource = {
  id: string;
  label: string;
};

type LessonPanelBase = {
  id: string;
  kicker: string;
  title: string;
  /** Spoken in the part dots, after "Part N:". */
  partLabel: string;
};

export type LessonScenePanel = LessonPanelBase & {
  kind: "scene";
  art: LessonArt;
  hotspots: LessonHotspot[];
};

export type LessonNumbersPanel = LessonPanelBase & {
  kind: "numbers";
  value: number;
  unit: string;
  meant: string;
};

export type LessonComparePanel = LessonPanelBase & {
  kind: "compare";
  thenArt: LessonArt;
  nowArt: LessonArt;
  thenCaption: string;
  nowCaption: string;
};

export type LessonOrderPanel = LessonPanelBase & {
  kind: "order";
  prompt: string;
  /** Chronological order. */
  events: LessonEvent[];
  /** Button order. Ids must match events. */
  offer: string[];
  doneLine: string;
};

export type LessonTakeawayPanel = LessonPanelBase & {
  kind: "takeaway";
  lines: string[];
};

export type LessonPanel =
  | LessonScenePanel
  | LessonNumbersPanel
  | LessonComparePanel
  | LessonOrderPanel
  | LessonTakeawayPanel;

export type MarkerLesson = {
  markerId: string;
  title: string;
  intro: string;
  timelineLabel: string;
  panels: LessonPanel[];
  sources: LessonSource[];
};
