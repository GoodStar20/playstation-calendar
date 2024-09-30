export interface ICalendarEvent {
  id: string;
  imageFilenameFull: string;
  imageFilenameThumb: string;
  launchDate: string;
  learnMoreLink: string;
  purchaseLink: string;
  summary: string;
  title: string;
}

export interface ICalendarEvents {
  [key: string]: ICalendarEvent;
}

export type ICalendarCells = Array<Array<string | null>>;
