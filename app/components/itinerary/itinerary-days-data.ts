export interface ItineraryDay {
	day: string;
	date: string;
	description: string[];
	image: string;
	imageAlt: string;
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
			"- Visit to Devprayag with a sacred immersion (if we feel ready for it).",
			"- Travel from Devprayag to Pandukeshwar, visit Rudraprayag, Karnaprayag, and Nandaprayag along the way.",
			"- Overnight stay in Pandukeshwar for acclimatization (around 2000 m).",
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
			"- Drive to Joshimath.",
			"- Cable car ride to Auli ski resort (3000 m) — panoramic Himalayan views.",
			"- Evening: family constellation session.",
			"- Overnight stay in Joshimath.",
		],
		image: "/assets/itinerary/34.png",
		imageAlt: "Cable car over Himalayan mountains",
	},
	{
		day: "Day 6",
		date: "15 Oct",
		description: [
			"- Drive to Hemkund Sahib base (Govindghat).",
			"- Trek to Ghangaria (9 km, 1000 m ascent).",
			"- Overnight stay in Ghangaria.",
		],
		image: "/assets/itinerary/35.png",
		imageAlt: "Valley of Flowers trek",
	},
];

export default itineraryDays;
