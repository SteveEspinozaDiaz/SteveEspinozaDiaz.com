import styles from "@/styles/components/BasicPagePreview.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={styles["navbar__wrapper"]}>
      <nav className={styles["navbar__main"]}>
        <input
          className={styles["navbar__burger-menu"]}
          type="checkbox"
          onChange={() => setIsChecked(!isChecked)}
          checked={isChecked}
          name=""
          id=""
        />
        <div className={styles["navbar__title"]}>
          <a href="http://localhost:3000">
            <span>SteveEspinozaDiaz.com</span>
          </a>
        </div>
        <ul className={styles["navbar__links"]}>
          <Link href="/about">
            <li>
              <span>About</span>
            </li>
          </Link>
          <Link href="/notes">
            <li>
              <span>Notes</span>
            </li>
          </Link>
          {/* <Link href="/research">
            <li>
              <span>Research</span>
            </li>
          </Link> */}
          <Link href="/projects">
            <li>
              <span>Projects</span>
            </li>
          </Link>
          <Link href="/art">
            <li>
              <span>Art</span>
            </li>
          </Link>
          <Link href="/blog">
            <li>
              <span>Blog</span>
            </li>
          </Link>
        </ul>
        <div className={styles["navbar__extra-options"]}>
          <span>[M]</span>
        </div>
      </nav>
    </div>
  );
}
