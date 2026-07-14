export interface ItineraryElementLayout {
  /** CSS grid column, e.g. `1 / span 6`. */
  column?: string;
  /** Maximum rendered width, e.g. `31rem`. */
  maxWidth?: string;
  /** Horizontal nudge, e.g. `-1rem`. */
  x?: string;
  /** Vertical nudge, e.g. `1.5rem`. */
  y?: string;
  /** Horizontal alignment inside its grid area. */
  align?: "start" | "center" | "end";
  /** Text alignment; only used by the text block. */
  textAlign?: "left" | "center" | "right";
}

export interface ItineraryDay {
  id: number;

  day: string;
  date: string;

  description: string[];

  image?: string;
  imageAlt: string;
  /** Independent placement controls for this day's text and illustration. */
  layout?: {
    minHeight?: string;
    text?: ItineraryElementLayout;
    image?: ItineraryElementLayout;
  };
  /** CSS object-position value, for example "center top". */
  imagePosition?: string;
  /** Moves the illustration inside its grid column. */
  imageOffset?: { x?: string; y?: string };
  /** Moves the text inside its grid column. */
  textOffset?: { x?: string; y?: string };

  variant?: "left" | "right";
}
