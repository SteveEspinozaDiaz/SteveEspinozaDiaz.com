import Link from "next/link";

import path from "path";

const destination = path.join(
  "web-development",
  "build-personal-website-gh-pages-html-css"
);

export default function WebDevelopment() {
  return (
    <div>
      <h1>Web Development Tutorials</h1>
      <span style={{ color: "tomato" }}>
        <Link href={destination}>
          Build a Personal Website with GitHub Pages, HTML, and CSS
        </Link>
      </span>
    </div>
  );
}
