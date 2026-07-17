"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar-background">
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
                aria-label="Toggle navigation"
              >
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
