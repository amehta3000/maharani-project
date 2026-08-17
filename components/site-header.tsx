import Link from "next/link";

type SiteHeaderProps = {
  current?: "home" | "about";
};

export function SiteHeader({ current = "home" }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        The GRID LIFE AI
      </Link>
      <nav className="main-nav" aria-label="Primary">
        <Link className={current === "home" ? "active" : ""} href="/">
          Home
        </Link>
        <a href="https://www.instagram.com/thegridlifeai/" rel="noreferrer" target="_blank">
          Instagram
        </a>
        <Link className={current === "about" ? "active" : ""} href="/about">
          About
        </Link>
      </nav>
    </header>
  );
}
