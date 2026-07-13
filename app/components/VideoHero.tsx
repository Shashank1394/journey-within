"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const VideoHero = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [navbarVisible, setNavbarVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			setNavbarVisible(window.scrollY === 0);
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

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
			<header
				className={`video-hero__navbar ${
					navbarVisible || menuOpen ? "video-hero__navbar--visible" : ""
				}`}>
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
									<Image
										src={
											menuOpen
												? "/assets/hamburger/cross.png"
												: "/assets/hamburger/menu.png"
										}
										alt={menuOpen ? "Close menu" : "Open menu"}
										width={36}
										height={36}
									/>
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
