export interface ItineraryDay {
	day: string;
	date: string;
	description: string[];
	image: string;
	imageAlt: string;
	/** CSS object-position value e.g. "center top", "left 30%", "50% 20%" */
	imagePosition?: string;
}

const itineraryDays: ItineraryDay[] = [
	{
		day: "Day 1",
		date: "10 Oct",
		description: [
			"- Arrival at Rishikesh airport (important to arrive before 3 PM).",
			"- Afternoon: 3-hour drive to Devprayag.",
			"- Evening: dinner at the hotel and relaxation.",
		],
		image: "/assets/itinerary/30.png",
		imageAlt: "Airplane arriving at Rishikesh",
	},
	{
		day: "Day 2",
		date: "11 Oct",
		description: [
			"- Visit to Devprayag, with a sacred immersion (if we feel ready for it).",
			"- Travel from Devprayag to Pandukeshwar, visit Rudraprayag, Karnaprayag, and Nandaprayag along the way.",
			"- Overnight stay in Pandukeshwar for acclimization (around 2000 m).",
		],
		image: "/assets/itinerary/31.png",
		imageAlt: "Forest and river landscape",
	},
	{
		day: "Day 3",
		date: "12 Oct",
		description: [
			"- Travel from Pandukeshwar to Badrinath (around 2 hours).",
			"- Afternoon visit to the temple and darshan (the queue, which is part of the experience, will be about 2-3 hours).",
			"- Overnight stay in Badrinath (3100 m).",
		],
		image: "/assets/itinerary/32.png",
		imageAlt: "Badrinath temple",
	},
	{
		day: "Day 4",
		date: "13 Oct",
		description: [
			"- Visit to Mana, a high Himalayan village with optional shopping.",
			"- Trek to Vasundhara Falls (10 km, 600 m).",
			"- Overnight stay in Badrinath (3100 m).",
		],
		image: "/assets/itinerary/33.png",
		imageAlt: "Hikers trekking in the Himalayas",
	},
	{
		day: "Day 5",
		date: "14 Oct",
		description: [
			"- Travel from Badrinath to Chopta (around 7 hours).",
			"- The long journey will be split in two with a visit to the Gopinath Temple along the way.",
			"- Overnight stay at The Aipan Resort, the accommodation of our guide.",
		],
		image: "/assets/itinerary/34.png",
		imageAlt: "Cable car over Himalayan mountains",
	},
	{
		day: "Day 6",
		date: "15 Oct",
		description: [
			"- Rest day at The Aipan Resort.",
			"- In the morning, we will connect with the local inhabitants of the area.",
			"- In the afternoon, a Family Constellations session will be held.",
		],
		image: "/assets/itinerary/35.png",
		imageAlt: "Valley of Flowers trek",
	},
	{
		day: "Day 7",
		date: "16 Oct",
		description: [
			"- Trekking day to the revered Tungnath Mandir, the highest Shiva Temple in the world (8 km, +800 m).",
			"- If we have enough strength, we may continue up to the beautiful viewpoint of Chandrashila (3690 m).",
			"- Overnight stay at The Aipan Resort",
		],
		image: "/assets/itinerary/35.png",
		imageAlt: "Valley of Flowers trek",
	},
	{
		day: "Day 8",
		date: "17 Oct",
		description: [
			"- Rest day at The Aipan Resort",
			"- In the morning, a cooking class and an Aipan art workshop will be organized",
			"- In the afternoon, we will hold another Family Constellations session.",
		],
		image: "/assets/itinerary/35.png",
		imageAlt: "Valley of Flowers trek",
	},
	{
		day: "Day 9",
		date: "18 Oct",
		description: [
			"- Journey to Ransi with a visit to Omkareshwar Temple (3 hours)",
			"- Trek from Ransi to Gaundhar Village (7.5 km, 500 m up, 300 m down)",
			"- Overnight stay in Khadara (2000 m)",
		],
		image: "/assets/itinerary/35.png",
		imageAlt: "Valley of Flowers trek",
	},
	{
		day: "Day 10",
		date: "19 Oct",
		description: [
			"- The day of the great trek to the Madhyamaheshwar Temple has arrived. (7.5 km, +1,200 m elevation gain) 8:00 AM - 5:00 PM",
			"- Overnight stay in a traditional Himalayan mountain lodge near the temple (3,500 m).",
		],
		image: "/assets/itinerary/35.png",
		imageAlt: "Valley of Flowers trek",
	},
	{
		day: "Day 11",
		date: "20 Oct",
		description: [
			"- Trekking to Boodha Madhyamaheshwar (~6 km, +/-300 m)",
			"- Meditation and Aarti at high altitude",
			"- Overnight stay in a Himalayan shelter near Madhyamaheshwar (3500 m)",
		],
		image: "/assets/itinerary/35.png",
		imageAlt: "Valley of Flowers trek",
	},
	{
		day: "Day 12",
		date: "21 Oct",
		description: [
			"- Downhill trek back to Gaundhar Village (15 km, -1800 m)",
			"- Overnight stay at The Aipan Resort",
		],
		image: "/assets/itinerary/35.png",
		imageAlt: "Valley of Flowers trek",
	},
	{
		day: "Day 13",
		date: "22 Oct",
		description: [
			"- Travel day back to Rishikesh (7 hours), with a visit to the beautiful suspended temple of Dari Devi along the way.",
			"- Well-deserved rest in Rishikesh.",
		],
		image: "/assets/itinerary/35.png",
		imageAlt: "Valley of Flowers trek",
	},
	{
		day: "Day 14",
		date: "23 Oct",
		description: [
			"- Rest day and shopping in Rishikesh",
			"- Beautiful Ganga Aarti in the afternoon",
			"- Overnight stay in Rishikesh",
		],
		image: "/assets/itinerary/35.png",
		imageAlt: "Valley of Flowers trek",
	},
	{
		day: "Day 15",
		date: "24 Oct",
		description: [
			"- Return home from Rishikesh airport.",
			"- Bye bye Himalayas!!",
		],
		image: "/assets/itinerary/35.png",
		imageAlt: "Valley of Flowers trek",
	},
];

export default itineraryDays;
