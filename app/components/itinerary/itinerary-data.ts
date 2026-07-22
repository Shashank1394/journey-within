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
      text: { ...leftText.text, maxWidth: "24rem", y: "-15%", x: "60%" },
      image: { ...leftText.image, y: "-48%", x: "0%", maxWidth: "70%" },
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
      text: { ...rightText.text, maxWidth: "100%", x: "-5%", y: "-40%" },
      image: {
        ...rightText.image,
        maxWidth: "70%",
        x: "-6%",
        y: "-82%",
      },
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
      text: { ...leftText.text, y: "-30rem", x: "2rem" },
      image: { ...leftText.image, maxWidth: "38rem", y: "-35rem" },
    },
  },

  //   --timeline-min-height: 31rem;
  // --timeline-text-column: 1 / span 6;
  // --timeline-text-width: 31rem;
  // --timeline-text-x: 0px;
  // --timeline-text-y: -30rem;
  // --timeline-text-align: left;
  // --timeline-text-justify: start;
  // --timeline-image-column: 7 / span 6;
  // --timeline-image-width: 34rem;
  // --timeline-image-x: 1rem;
  // --timeline-image-y: -26rem;
  // --timeline-image-justify: end;
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
      text: { ...rightText.text, x: "-2rem", y: "-32rem" },
      image: {
        ...rightText.image,
        maxWidth: "34rem",
        x: "0rem",
        y: "-52rem",
      },
    },
  },
  //     --timeline-min-height: 31rem;
  //     --timeline-text-column: 6 / span 7;
  //     --timeline-text-width: 34rem;
  //     --timeline-text-x: -2rem;
  //     --timeline-text-y: -32rem;
  //     --timeline-text-align: right;
  //     --timeline-text-justify: end;
  //     --timeline-image-column
  // 1 / span 5
  // : 1 / span 5;
  //     --timeline-image-width: 34rem;
  //     --timeline-image-x: 0rem;
  //     --timeline-image-y: -52rem;
  //     --timeline-image-justify: start;
  {
    id: 5,
    day: "Day 5",
    date: "14 Oct",
    image: "/assets/itinerary/5.png",
    imageAlt: "Cable car over Himalayan mountains",
    description: [
      "Travel from Badrinath to Chopta (around 7 hours).",
      "The long journey will be split in two with a visit to the Gopinath Temple along the way.",
      "Overnight stay at The Aipan Resort, the accommodation of our guide.",
    ],
    layout: {
      minHeight: "31rem",
      text: { ...leftText.text, y: "-53rem", x: "2rem" },
      image: { ...leftText.image, maxWidth: "26rem", y: "-46rem" },
    },
  },
  //   --timeline-min-height: 31rem;
  // --timeline-text-column: 1 / span 6;
  // --timeline-text-width: 33rem;
  // --timeline-text-x: 2rem;
  // --timeline-text-y: -53rem;
  // --timeline-text-align: left;
  // --timeline-text-justify: start;
  // --timeline-image-column: 7 / span 6;
  // --timeline-image-width: 29rem;
  // --timeline-image-x: 0rem;
  // --timeline-image-y: -46rem;
  // --timeline-image-justify: end;
  {
    id: 6,
    day: "Day 6",
    date: "15 Oct",
    image: "/assets/itinerary/6.png",
    imageAlt: "Valley of Flowers trek",
    description: [
      "Rest day at The Aipan Resort.",
      "In the morning we will connect with the local inhabitatnts of the area.",
      "In the afternoon a Family Constellations session will be held.",
    ],
    layout: {
      minHeight: "28rem",
      text: { ...rightText.text, maxWidth: "38rem", y: "-40rem", x: "-2rem" },
      image: { ...rightText.image, y: "-70rem", x: "2rem" },
    },
  },
  //   --timeline-min-height: 28rem;
  // --timeline-text-column: 6 / span 7;
  // --timeline-text-width: 32rem;
  // --timeline-text-x: -2rem;
  // --timeline-text-y: -40rem;
  // --timeline-text-align: right;
  // --timeline-text-justify: end;
  // --timeline-image-column: 1 / span 5;
  // --timeline-image-width: 24rem;
  // --timeline-image-x: 2rem;
  // --timeline-image-y: -70rem;
  // --timeline-image-justify: start;
  {
    id: 7,
    day: "Day 7",
    date: "16 Oct",
    image: "/assets/itinerary/7.png",
    imageAlt: "Trekking in the Himalayas",
    description: [
      "Trekking day to the revered Tungnath Mandir, the highest Shiva Temple in the world (8 km, +800 m).",
      "If we have enough strength, we may continue up to the beautiful viewpoint of Chandrashila (3690 m).",
      "Overnight stay at The Aipan Resort.",
    ],
    layout: {
      minHeight: "30rem",
      text: { ...leftText.text, x: "3rem", y: "-76rem" },
      image: { ...leftText.image, maxWidth: "70%", x: "1rem", y: "-74rem" },
    },
  },
  // --timeline-min-height: 30rem;
  // --timeline-text-column: 1 / span 6;
  // --timeline-text-width: 31rem;
  // --timeline-text-x: 3rem;
  // --timeline-text-y: -76rem;
  // --timeline-text-align: left;
  // --timeline-text-justify: start;
  // --timeline-image-column: 7 / span 6;
  // --timeline-image-width: 70%;
  // --timeline-image-x: 1rem;
  // --timeline-image-y: -77rem;
  // --timeline-image-justify: end;
  {
    id: 8,
    day: "Day 8",
    date: "17 Oct",
    image: "/assets/itinerary/8.png",
    imageAlt: "Aipan art workshop",
    description: [
      "Rest day at The Aipan Resort",
      "In the morning, a cooking class and an Aipan art workshop will be organized",
      "In the afternoon, we will hold another Family Constellations session.",
    ],
    layout: {
      minHeight: "28rem",
      text: { ...rightText.text, maxWidth: "44rem", x: "-5rem", y: "-74rem" },
      image: { ...rightText.image, x: "-6rem", y: "-90rem", maxWidth: "22rem" },
    },
  },
  //   --timeline-text-x: -5rem;
  // --timeline-text-y: -74rem;
  // --timeline-text-align: right;
  // --timeline-text-justify: end;
  // --timeline-image-column: 1 / span 5;
  // --timeline-image-width: 24rem;
  // --timeline-image-x: -6rem;
  // --timeline-image-y: -94rem;
  {
    id: 9,
    day: "Day 9",
    date: "18 Oct",
    image: "/assets/itinerary/9.png",
    imageAlt: "Journey to Ransi",
    description: [
      "Journey to Ransi with a visit to Omkareshwar Temple (3 hours)",
      "Trek from Ransi to Gaundhar Village (7.5 km, 500 m up, 300 m down)",
      "Overnight stay in Khadara (2000 m).",
    ],
    layout: {
      minHeight: "30rem",
      text: { ...leftText.text, maxWidth: "26rem", x: "2rem", y: "-96rem" },
      image: { ...leftText.image, maxWidth: "65%", x: "-6rem", y: "-102rem" },
    },
  },
  // --timeline-text-width: 31rem;
  //   --timeline-text-x: 2rem;
  //   --timeline-text-y: -96rem;
  //   --timeline-text-align: left;
  //   --timeline-text-justify: start;
  //   --timeline-image-column: 7 / span 6;
  //   --timeline-image-width: 70%;
  //   --timeline-image-x: -6rem;
  //   --timeline-image-y: -102rem;
  {
    id: 10,
    day: "Day 10",
    date: "19 Oct",
    image: "/assets/itinerary/10.png",
    imageAlt: "Madhyamaheshwar trek",
    description: [
      "The day of the great trek to the Madhyamaheshwar Temple has arrived. (7.5km, +1,200m elevation gain) 8:00 AM - 5:00 PM",
      "Overnight stay in a traditional Himalayan mountain lodge near the temple (3,500 m).",
    ],
    layout: {
      minHeight: "28rem",
      text: { ...rightText.text, maxWidth: "20rem", x: "-5rem", y: "-100rem" },
      image: { ...rightText.image, maxWidth: "100%", x: "16rem", y: "-114rem" },
    },
  },
  //   --timeline-min-height: 28rem;
  // --timeline-text-column: 6 / span 7;
  // --timeline-text-width: 32rem;
  // --timeline-text-x: -5rem;
  // --timeline-text-y: -100rem;
  // --timeline-text-align: right;
  // --timeline-text-justify: end;
  // --timeline-image-column: 1 / span 5;
  // --timeline-image-width: 100%;
  // --timeline-image-x: 16rem;
  // --timeline-image-justify: start;
  // --timeline-image-y: -108rem;
  {
    id: 11,
    day: "Day 11",
    date: "20 Oct",
    image: "/assets/itinerary/11.png",
    imageAlt: "Boodha Madhyamaheshwar trek",
    description: [
      "Trek to Boodha Madhyamaheshwar (~6 km, ±300 m).",
      "Meditation and Aarti at high altitude.",
      "Overnight stay in a Himalayan shelter near Madhyamaheshwar (3500 m)",
    ],
    layout: {
      minHeight: "30rem",
      text: { ...leftText.text, maxWidth: "31rem", x: "6rem", y: "-124rem" },
      image: { ...leftText.image, x: "1rem", y: "-118rem" },
    },
  },
  //   --timeline-min-height: 30rem;
  // --timeline-text-column: 1 / span 6;
  // --timeline-text-width: 31rem;
  // --timeline-text-x: 6rem;
  // --timeline-text-y: -124rem;
  // --timeline-text-align: left;
  // --timeline-text-justify: start;
  // --timeline-image-column: 7 / span 6;
  // --timeline-image-width: 30rem;
  // --timeline-image-x: 1rem;
  // --timeline-image-y: -118rem;
  // --timeline-image-justify: end;
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
    layout: {
      minHeight: "27rem",
      text: { ...rightText.text, x: "-5rem", y: "-112rem" },
      image: { ...rightText.image, maxWidth: "150%", x: "3rem", y: "-128rem" },
    },
  },
  //   --timeline-min-height: 27rem;
  // --timeline-text-column: 6 / span 7;
  // --timeline-text-width: 20rem;
  // --timeline-text-x: -5rem;
  // --timeline-text-y: -112rem;
  // --timeline-text-align: right;
  // --timeline-text-justify: end;
  // --timeline-image-column: 1 / span 5;
  // --timeline-image-width: 150%;
  //     --timeline-image-x: 3rem;
  //     --timeline-image-y: -128rem;
  // --timeline-image-justify: start;
  {
    id: 13,
    day: "Day 13",
    date: "22 Oct",
    // image: "",
    imageAlt: "Journey back to Rishikesh",
    description: [
      "Travel day back to Rishikesh (7 hours), with a visit to the beautiful suspended temple of Dari Devi along the way.",
      "Well-deserved rest in Rishikesh.",
    ],
    layout: {
      minHeight: "28rem",
      text: { ...leftText.text, maxWidth: "24rem", x: "5rem", y: "-142rem" },
    },
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
    layout: {
      minHeight: "28rem",
      text: { ...rightText.text, x: "-20rem", y: "-148rem" },
      image: { ...rightText.image, maxWidth: "100%", x: "-5rem", y: "-162rem" },
    },
  },
  //   --timeline-min-height: 28rem;
  //     --timeline-text-column: 6 / span 7;
  //     --timeline-text-width: 32rem;
  //     --timeline-text-x: -20rem;
  //     --timeline-text-y: -148rem;
  //     --timeline-text-align
  // right
  // : right;
  //     --timeline-text-justify: end;
  //     --timeline-image-column: 1 / span 5;
  //     --timeline-image-width: 100%;
  //     --timeline-image-x: -5rem;
  //     --timeline-image-y: -162rem;
  //     --timeline-image-justify: start;
  {
    id: 15,
    day: "Day 15",
    date: "24 Oct",
    image: "/assets/itinerary/15.png",
    imageAlt: "Departure from Rishikesh",
    description: ["Return home from Rishikesh airport.", "Bye bye Himalayas!"],
    layout: {
      minHeight: "26rem",
      text: { ...leftText.text, x: "25rem", y: "-170rem" },
      image: { ...leftText.image, maxWidth: "70%", x: "0rem", y: "-180rem" },
    },
  },
  // --timeline-text-x: 25rem;
  //   --timeline-text-y: -170rem;
];

export default itineraryDays;
