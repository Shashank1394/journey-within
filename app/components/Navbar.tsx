"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [hidden, setHidden] = useState(false);
	const lastScrollY = useRef(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentY = window.scrollY;
			const scrollingDown = currentY > lastScrollY.current;

			// Hide when scrolling down past 80px, show when scrolling up
			if (scrollingDown && currentY > 80) {
				setHidden(true);
				setMenuOpen(false);
			} else {
				setHidden(false);
			}

			lastScrollY.current = currentY;
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`navbar-background${hidden ? " navbar-background--hidden" : ""}`}>
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
									<Link href="/">Home</Link>
								</li>
								<li>
									<Link href="/about">About</Link>
								</li>
								<li>
									<Link href="/upcoming-journey">Upcoming Journey</Link>
								</li>
								<li>
									<Link href="/enquire">Enquire</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
