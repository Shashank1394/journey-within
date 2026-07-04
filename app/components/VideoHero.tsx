"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const VideoHero = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<section className="video-hero">
			{/* Full-bleed background video */}
			<video
				className="video-hero__video"
				src="/assets/intro-vid.mp4"
				autoPlay
				muted
				loop
				playsInline
			/>

			{/* Dark overlay so navbar + any text stay readable */}
			<div className="video-hero__overlay" aria-hidden="true" />

			{/* Navbar — floats on top of the video */}
			<header className="video-hero__navbar">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<nav className="video-hero__nav">
								<Link href="/">
									<h1>Journey Within</h1>
								</Link>

								<button
									className="hamburger"
									onClick={() => setMenuOpen(!menuOpen)}
									aria-label="Toggle navigation">
									{menuOpen ? <X size={32} /> : <Menu size={32} />}
								</button>

								<ul className={menuOpen ? "menu-open" : ""}>
									<li>
										<Link href="/" onClick={() => setMenuOpen(false)}>
											Home
										</Link>
									</li>
									<li>
										<Link href="/about" onClick={() => setMenuOpen(false)}>
											About
										</Link>
									</li>
									<li>
										<Link
											href="/upcoming-journey"
											onClick={() => setMenuOpen(false)}>
											Upcoming Journey
										</Link>
									</li>
									<li>
										<Link href="/enquire" onClick={() => setMenuOpen(false)}>
											Enquire
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</section>
	);
};

export default VideoHero;
