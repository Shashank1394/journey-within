"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const StickyNavbar = () => {
	const [visible, setVisible] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const lastScrollY = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentY = window.scrollY;
			const scrollingUp = currentY < lastScrollY.current;
			// Only show when past the video (not at the very top)
			const pastVideo = currentY > 80;

			if (scrollingUp && pastVideo) {
				setVisible(true);
			} else {
				setVisible(false);
				setMenuOpen(false);
			}

			lastScrollY.current = currentY;
		};

		lastScrollY.current = window.scrollY;
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`sticky-navbar${visible ? " sticky-navbar--visible" : ""}`}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<nav>
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
											: "/assets/hamburger/menu.svg"
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
	);
};

export default StickyNavbar;
