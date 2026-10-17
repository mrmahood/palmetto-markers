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
import { richlandLessons } from "./richland";
import { richlandLessonsB } from "./richland-b";
import { richlandLessonsC } from "./richland-c";
import { richlandLessonsD } from "./richland-d";
import { richlandLessonsE } from "./richland-e";
import { richlandLessonsF } from "./richland-f";
import { richlandLessonsG } from "./richland-g";
import { richlandLessonsH } from "./richland-h";
import { richlandLessonsI } from "./richland-i";
import { richlandLessonsJ } from "./richland-j";
import { richlandLessonsK } from "./richland-k";
import { richlandLessonsL } from "./richland-l";
import { richlandLessonsM } from "./richland-m";
import { richlandLessonsN } from "./richland-n";
import { richlandLessonsO } from "./richland-o";
import { richlandLessonsP } from "./richland-p";
import { richlandLessonsQ } from "./richland-q";
import { richlandLessonsR } from "./richland-r";
import { richlandLessonsS } from "./richland-s";
import { richlandLessonsT } from "./richland-t";
import { richlandLessonsU } from "./richland-u";
import { richlandLessonsV } from "./richland-v";
import { richlandLessonsW } from "./richland-w";
import { richlandLessonsX } from "./richland-x";
import { richlandLessonsY } from "./richland-y";
import { richlandLessonsZ } from "./richland-z";
import { richlandLessonsAA } from "./richland-aa";
import { richlandLessonsAB } from "./richland-ab";
import { richlandLessonsAC } from "./richland-ac";
import { richlandLessonsAD } from "./richland-ad";
import { richlandLessonsAE } from "./richland-ae";
import { richlandLessonsAF } from "./richland-af";
import { richlandLessonsAG } from "./richland-ag";
import { richlandLessonsAH } from "./richland-ah";
import { richlandLessonsAI } from "./richland-ai";
import { richlandLessonsAJ } from "./richland-aj";
import { richlandLessonsAK } from "./richland-ak";
import { richlandLessonsAL } from "./richland-al";
import { richlandLessonsAM } from "./richland-am";
import { richlandLessonsAN } from "./richland-an";
import { richlandLessonsAO } from "./richland-ao";
import { richlandLessonsAP } from "./richland-ap";
import { richlandLessonsAQ } from "./richland-aq";
import { richlandLessonsAR } from "./richland-ar";
import { richlandLessonsAS } from "./richland-as";
import { richlandLessonsAT } from "./richland-at";
import { charlestonLessonsA } from "./charleston-a";
import { charlestonLessonsB } from "./charleston-b";
import { charlestonLessonsC } from "./charleston-c";
import { charlestonLessonsD } from "./charleston-d";
import { charlestonLessonsE } from "./charleston-e";
import { charlestonLessonsF } from "./charleston-f";
import { charlestonLessonsG } from "./charleston-g";
import { charlestonLessonsH } from "./charleston-h";
import { charlestonLessonsI } from "./charleston-i";
import { charlestonLessonsJ } from "./charleston-j";
import { charlestonLessonsK } from "./charleston-k";
import { charlestonLessonsL } from "./charleston-l";
import { charlestonLessonsM } from "./charleston-m";
import { charlestonLessonsN } from "./charleston-n";
import { charlestonLessonsO } from "./charleston-o";
import { charlestonLessonsP } from "./charleston-p";
import { charlestonLessonsQ } from "./charleston-q";
import { charlestonLessonsR } from "./charleston-r";
import { charlestonLessonsS } from "./charleston-s";
import { charlestonLessonsT } from "./charleston-t";
import { charlestonLessonsU } from "./charleston-u";
import { charlestonLessonsV } from "./charleston-v";
import { charlestonLessonsW } from "./charleston-w";
import { charlestonLessonsX } from "./charleston-x";
import { charlestonLessonsY } from "./charleston-y";
import { charlestonLessonsZ } from "./charleston-z";
import { charlestonLessonsAA } from "./charleston-aa";
import { charlestonLessonsAB } from "./charleston-ab";
import { charlestonLessonsAC } from "./charleston-ac";
import { charlestonLessonsAD } from "./charleston-ad";
import { charlestonLessonsAE } from "./charleston-ae";
import { charlestonLessonsAF } from "./charleston-af";
import { charlestonLessonsAG } from "./charleston-ag";
import { charlestonLessonsAH } from "./charleston-ah";

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
  ...richlandLessons,
  ...richlandLessonsB,
  ...richlandLessonsC,
  ...richlandLessonsD,
  ...richlandLessonsE,
  ...richlandLessonsF,
  ...richlandLessonsG,
  ...richlandLessonsH,
  ...richlandLessonsI,
  ...richlandLessonsJ,
  ...richlandLessonsK,
  ...richlandLessonsL,
  ...richlandLessonsM,
  ...richlandLessonsN,
  ...richlandLessonsO,
  ...richlandLessonsP,
  ...richlandLessonsQ,
  ...richlandLessonsR,
  ...richlandLessonsS,
  ...richlandLessonsT,
  ...richlandLessonsU,
  ...richlandLessonsV,
  ...richlandLessonsW,
  ...richlandLessonsX,
  ...richlandLessonsY,
  ...richlandLessonsZ,
  ...richlandLessonsAA,
  ...richlandLessonsAB,
  ...richlandLessonsAC,
  ...richlandLessonsAD,
  ...richlandLessonsAE,
  ...richlandLessonsAF,
  ...richlandLessonsAG,
  ...richlandLessonsAH,
  ...richlandLessonsAI,
  ...richlandLessonsAJ,
  ...richlandLessonsAK,
  ...richlandLessonsAL,
  ...richlandLessonsAM,
  ...richlandLessonsAN,
  ...richlandLessonsAO,
  ...richlandLessonsAP,
  ...richlandLessonsAQ,
  ...richlandLessonsAR,
  ...richlandLessonsAS,
  ...richlandLessonsAT,
  ...charlestonLessonsA,
  ...charlestonLessonsB,
  ...charlestonLessonsC,
  ...charlestonLessonsD,
  ...charlestonLessonsE,
  ...charlestonLessonsF,
  ...charlestonLessonsG,
  ...charlestonLessonsH,
  ...charlestonLessonsI,
  ...charlestonLessonsJ,
  ...charlestonLessonsK,
  ...charlestonLessonsL,
  ...charlestonLessonsM,
  ...charlestonLessonsN,
  ...charlestonLessonsO,
  ...charlestonLessonsP,
  ...charlestonLessonsQ,
  ...charlestonLessonsR,
  ...charlestonLessonsS,
  ...charlestonLessonsT,
  ...charlestonLessonsU,
  ...charlestonLessonsV,
  ...charlestonLessonsW,
  ...charlestonLessonsX,
  ...charlestonLessonsY,
  ...charlestonLessonsZ,
  ...charlestonLessonsAA,
  ...charlestonLessonsAB,
  ...charlestonLessonsAC,
  ...charlestonLessonsAD,
  ...charlestonLessonsAE,
  ...charlestonLessonsAF,
  ...charlestonLessonsAG,
  ...charlestonLessonsAH,
]) {
  LESSONS[lesson.markerId] = lesson;
}

export function lessonFor(markerId: string): MarkerLesson | undefined {
  return LESSONS[markerId];
}

export type { MarkerLesson } from "./types";
