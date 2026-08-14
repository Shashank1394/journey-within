import type { SVGProps } from "react";
import ItineraryLine from "../../../public/assets/itinerary/itinerary-line.svg";

// Adjust these design-canvas values to size or reposition the timeline.
// ScaledTimelineDays scales the entire 1200px canvas, so this placement stays
// proportional at every viewport size.
const TIMELINE_LAYOUT = {
  width: 458,
  height: 5157,
  top: 250,
  left: 470,
} as const;

// The imported SVG replaces the previously hand-authored timeline paths.
// Retained as an empty export for ScaledTimelineDays' existing API.
export const TIMELINE_SUBPATHS = [] as const;

interface TimelinePathProps extends SVGProps<SVGSVGElement> {
  pathRefs?: React.RefObject<SVGPathElement>[];
}

const TimelinePath = ({ pathRefs, ...props }: TimelinePathProps) => {
  void pathRefs;

  return (
    <ItineraryLine
      {...props}
      width={TIMELINE_LAYOUT.width}
      height={TIMELINE_LAYOUT.height}
      viewBox="0 0 2776 27180"
      preserveAspectRatio="none"
      style={{
        ...props.style,
        position: "absolute",
        width: TIMELINE_LAYOUT.width,
        height: TIMELINE_LAYOUT.height,
        top: TIMELINE_LAYOUT.top,
        left: TIMELINE_LAYOUT.left,
      }}
    />
  );
};

export default TimelinePath;
