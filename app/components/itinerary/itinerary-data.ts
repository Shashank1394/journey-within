import { ItineraryDay } from "./itinerary.types";

const leftText = {
  text: { column: "1 / span 6", maxWidth: "31rem", y: "-1rem" },
  image: {
    column: "7 / span 6",
    maxWidth: "30rem",
    x: "1rem",
    align: "end" as const,
  },
};

const rightText = {
  text: {
    column: "6 / span 7",
    maxWidth: "32rem",
    y: "-0.5rem",
    align: "end" as const,
    textAlign: "right" as const,
  },
  image: {
    column: "1 / span 5",
    maxWidth: "24rem",
    x: "0.5rem",
    align: "start" as const,
  },
};

const itineraryDays: ItineraryDay[] = [
  {
    id: 1,
    day: "Day 1",
    date: "10 Oct",
    image: "/assets/itinerary/1.png",
    imageAlt: "Airplane arriving at Rishikesh",
    description: [
      "Arrival at Rishikesh airport (important to arrive before 3 PM).",
      "Afternoon: 3-hour drive to Devprayag.",
      "Evening: Dinner at the hotel and relaxation.",
    ],
    layout: {
      minHeight: "31rem",
      ...leftText,
      image: { ...leftText.image, y: "2rem" },
    },
  },
  {
    id: 2,
    day: "Day 2",
    date: "11 Oct",
    image: "/assets/itinerary/2.png",
    imageAlt: "Forest and river landscape",
    description: [
      "Visit to Devprayag, with a sacred immersion (if we feel ready for it).",
      "Travel from Devprayag to Pandukeshwar, visiting Rudraprayag, Karnaprayag, and Nandaprayag along the way.",
      "Overnight stay in Pandukeshwar for acclimatization (around 2000 m).",
    ],
    layout: {
      minHeight: "33rem",
      ...rightText,
      text: { ...rightText.text, maxWidth: "34rem", x: "-0.5rem", y: "-1rem" },
      image: { ...rightText.image, maxWidth: "23rem", y: "-26rem" },
    },
  },
  {
    id: 3,
    day: "Day 3",
    date: "12 Oct",
    image: "/assets/itinerary/3.png",
    imageAlt: "Badrinath temple",
    description: [
      "Travel from Pandukeshwar to Badrinath (around 2 hours).",
      "Afternoon visit to the temple and darshan (queue time approximately 2-3 hours).",
      "Overnight stay in Badrinath (3100 m).",
    ],
    layout: {
      minHeight: "31rem",
      text: { ...leftText.text, y: "-35rem" },
      image: { ...leftText.image, maxWidth: "34rem", y: "-45.5rem" },
    },
  },
  {
    id: 4,
    day: "Day 4",
    date: "13 Oct",
    image: "/assets/itinerary/4.png",
    imageAlt: "Hikers trekking in the Himalayas",
    description: [
      "Visit to Mana, a high Himalayan village with optional shopping.",
      "Trek to Vasundhara Falls (10 km, 600 m).",
      "Overnight stay in Badrinath (3100 m).",
    ],
    layout: {
      minHeight: "31rem",
      ...rightText,
      text: { ...rightText.text, x: "-1rem", y: "1rem" },
      image: {
        ...rightText.image,
        maxWidth: "28rem",
        x: "-0.5rem",
        y: "-1rem",
      },
    },
  },
  {
    id: 5,
    day: "Day 5",
    date: "14 Oct",
    image: "/assets/itinerary/5.png",
    imageAlt: "Cable car over Himalayan mountains",
    description: [
      "Travel from Badrinath to Chopta (around 7 hours).",
      "Visit the Gopinath Temple along the way.",
      "Overnight stay at The Aipan Resort, the accommodation of our guide.",
    ],
    layout: {
      minHeight: "31rem",
      ...leftText,
      image: { ...leftText.image, maxWidth: "29rem" },
    },
  },
  {
    id: 6,
    day: "Day 6",
    date: "15 Oct",
    image: "/assets/itinerary/6.png",
    imageAlt: "Valley of Flowers trek",
    description: [
      "Rest day at The Aipan Resort.",
      "Morning connection with the local inhabitants.",
      "Afternoon Family Constellations session.",
    ],
    layout: { minHeight: "28rem", ...rightText },
  },
  {
    id: 7,
    day: "Day 7",
    date: "16 Oct",
    image: "/assets/itinerary/7.png",
    imageAlt: "Trekking in the Himalayas",
    description: [
      "Trek to Tungnath Mandir, the highest Shiva temple in the world (8 km, +800 m).",
      "Optional trek to Chandrashila viewpoint (3690 m).",
      "Overnight stay at The Aipan Resort.",
    ],
    layout: { minHeight: "30rem", ...leftText },
  },
  {
    id: 8,
    day: "Day 8",
    date: "17 Oct",
    image: "/assets/itinerary/8.png",
    imageAlt: "Aipan art workshop",
    description: [
      "Rest day at The Aipan Resort.",
      "Morning cooking class and Aipan art workshop.",
      "Afternoon Family Constellations session.",
    ],
    layout: { minHeight: "28rem", ...rightText },
  },
  {
    id: 9,
    day: "Day 9",
    date: "18 Oct",
    image: "/assets/itinerary/9.png",
    imageAlt: "Journey to Ransi",
    description: [
      "Journey to Ransi with a visit to Omkareshwar Temple (3 hours).",
      "Trek from Ransi to Gaundhar Village (7.5 km, +500 m / -300 m).",
      "Overnight stay in Khadara (2000 m).",
    ],
    layout: { minHeight: "30rem", ...leftText },
  },
  {
    id: 10,
    day: "Day 10",
    date: "19 Oct",
    image: "/assets/itinerary/10.png",
    imageAlt: "Madhyamaheshwar trek",
    description: [
      "Great trek to Madhyamaheshwar Temple (7.5 km, +1200 m elevation gain, approximately 8 AM–5 PM).",
      "Overnight stay in a traditional Himalayan mountain lodge near the temple (3500 m).",
    ],
    layout: { minHeight: "28rem", ...rightText },
  },
  {
    id: 11,
    day: "Day 11",
    date: "20 Oct",
    image: "/assets/itinerary/11.png",
    imageAlt: "Boodha Madhyamaheshwar trek",
    description: [
      "Trek to Boodha Madhyamaheshwar (~6 km, ±300 m).",
      "Meditation and Aarti at high altitude.",
      "Overnight stay near Madhyamaheshwar (3500 m).",
    ],
    layout: { minHeight: "30rem", ...leftText },
  },
  {
    id: 12,
    day: "Day 12",
    date: "21 Oct",
    image: "/assets/itinerary/12.png",
    imageAlt: "Return trek to Gaundhar Village",
    description: [
      "Downhill trek back to Gaundhar Village (15 km, -1800 m).",
      "Overnight stay at The Aipan Resort.",
    ],
    layout: { minHeight: "27rem", ...rightText },
  },
  {
    id: 13,
    day: "Day 13",
    date: "22 Oct",
    // image: "",
    imageAlt: "Journey back to Rishikesh",
    description: [
      "Travel back to Rishikesh (around 7 hours), visiting the suspended Dari Devi Temple on the way.",
      "Well-deserved rest in Rishikesh.",
    ],
    layout: { minHeight: "28rem", ...leftText },
  },
  {
    id: 14,
    day: "Day 14",
    date: "23 Oct",
    image: "/assets/itinerary/14.png",
    imageAlt: "Ganga Aarti in Rishikesh",
    description: [
      "Rest day and shopping in Rishikesh.",
      "Beautiful Ganga Aarti in the afternoon.",
      "Overnight stay in Rishikesh.",
    ],
    layout: { minHeight: "28rem", ...rightText },
  },
  {
    id: 15,
    day: "Day 15",
    date: "24 Oct",
    // image: "",
    imageAlt: "Departure from Rishikesh",
    description: ["Return home from Rishikesh airport.", "Bye bye Himalayas!"],
    layout: {
      minHeight: "26rem",
      ...leftText,
      image: { ...leftText.image, maxWidth: "29rem" },
    },
  },
];

export default itineraryDays;
