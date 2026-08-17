import Link from "next/link";
import { Gallery } from "@/components/gallery";
import { SiteHeader } from "@/components/site-header";
import { galleryItems, heroImage } from "@/lib/site-data";

export default function HomePage() {
  return (
    <main className="site-shell">
      <SiteHeader current="home" />

      <section className="poster-hero">
        <p className="poster-kicker">Maharani: Orchid Series</p>
        <img alt="Maharani Orchid Series Title" className="poster-image" src={heroImage} />
        <p className="poster-prompt">
          &apos;a beautiful South Asian Indian woman adorned with massive orchid blossoms&apos;
        </p>
        <Link className="poster-link" href="#about">
          Absorb &amp; Learn More
        </Link>
      </section>

      <section className="gallery-section">
        <Gallery items={galleryItems} />
      </section>

      <section className="editorial-section" id="about">
        <div className="editorial-copy">
          <h2>Maharani: Orchid Series</h2>
          <p>
            Fascinated by AI&apos;s interpretation of the prompt{" "}
            <em>
              &apos;a beautiful South Asian Indian woman adorned with massive orchid blossoms,&apos;
            </em>{" "}
            I embarked on a journey of self-reflection, confronting shared biases. My work with
            generative AI began as an exploration of imagined moments, juxtaposing unconventional
            models against traditionally familiar backdrops. This process led me to reconsider my
            perceptions of beauty, their origins, and their influence on AI&apos;s training. These
            100 portraits mark the beginning of my artistic quest into the nuances of beauty,
            shaped by collective intelligence and machine learning.
          </p>
          <p>
            <strong>Process:</strong> Birthed from imagination, each portrait is realized in
            Midjourney, later refined with Photoshop and organized with Python, courtesy of
            ChatGPT. The code meticulously overlays watermarks, renames files, and arranges the
            images in a subtle gradient based on color dominance. Every model, devoid of a single
            reference, is a reflection of influences and ultimately a new creation.
          </p>

          <div className="newsletter-layout">
            <div className="newsletter-copy">
              <p>
                If you enjoy this work, please consider sharing and subscribing to my infrequent
                newsletter.
              </p>
              <h3>
                Sign up for a free 12x18 inch printable poster of the Maharani: Orchid Series, and
                receive synthography tips and news every now and then.
              </h3>
              <form className="editorial-form">
                <label className="sr-only" htmlFor="poster-email">
                  Email address
                </label>
                <input
                  id="poster-email"
                  name="email"
                  placeholder="Enter your email"
                  type="email"
                />
                <button type="button">Submit</button>
              </form>
            </div>

            <div className="editorial-poster-wrap" aria-label="Maharani poster preview">
              <img
                alt="Maharani poster"
                className="editorial-poster"
                loading="lazy"
                src="https://cdn.prod.website-files.com/6578077bacaaaf77846027af/658e488c93829cd0bf4485c0_thegridlifeai_maharani_1200px_poster.png"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-socials" aria-label="Social links">
          <a
            aria-label="Instagram"
            className="footer-icon-link"
            href="https://www.instagram.com/thegridlifeai/"
            rel="noreferrer"
            target="_blank"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="3" ry="3" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.25" fill="currentColor" />
            </svg>
          </a>
          <a
            aria-label="Facebook"
            className="footer-icon-link"
            href="https://www.facebook.com/profile.php?id=100090541965046"
            rel="noreferrer"
            target="_blank"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3.1l.9-4H13V9c0-.7.3-1 1-1Z" fill="currentColor" />
            </svg>
          </a>
          <a
            aria-label="Email"
            className="footer-icon-link"
            href="mailto:the.grid.life.ai@gmail.com?subject=Saying%20hello%20to%20the%20grid%20life%20ai"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 6h18v12H3z" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </a>
        </div>
        <p className="footer-line footer-line-en">NO THING IS REAL</p>
        <p className="footer-line footer-line-hi">कुछ भी असली नहीं है</p>
      </footer>
    </main>
  );
}
