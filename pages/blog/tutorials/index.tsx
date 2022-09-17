import Link from "next/link";

export default function TutorialsHomePage() {
  return (
    <div>
      <h1>TutorialsHomePage</h1>

      <h2>Programming Tutorials</h2>
      <h3>Web Development</h3>
      <Link href="/blog/tutorials/programming/web-development/build-personal-website-gh-pages-html-css">
        Build a Personal Website using GitHub Pages, HTML, and CSS
      </Link>
      <br />
      <Link href="/blog/tutorials/programming/web-development/build-personal-website-gh-pages-react">
        Build a Personal Website using GitHub Pages and React
      </Link>
      <p>Examples</p>
      <h3>Scientific Computing</h3>
      <h2>Art Tutorials</h2>

      <h2>Math Tutorials</h2>
    </div>
  );
}
