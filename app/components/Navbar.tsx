"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

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
                {menuOpen ? <X size={32} /> : <Menu size={32} />}
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
