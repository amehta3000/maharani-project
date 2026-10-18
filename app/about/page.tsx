import { SiteHeader } from "@/components/site-header";
import { aboutHeroImage, magazineImage } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <main className="site-shell about-page">
      <SiteHeader current="about" />

      <section className="about-hero-banner">
        <img alt="The Grid Life AI header banner" className="about-hero-image" src={aboutHeroImage} />
        <div className="about-hero-title">THEGRIDLIFEAI</div>
      </section>

      <section className="about-editorial">
        <div className="about-editorial-grid">
          <div className="about-editorial-image-wrap">
            <img alt="Weird magazine cover" className="about-editorial-image" src={magazineImage} />
          </div>

          <div className="about-editorial-copy">
            <div className="about-block">
              <h2>About</h2>
              <p>
                This artistic space showcases a collection of characters and situations that
                possibly may have been, all born from the confluence of AI, imagination, and my
                creative vision. My exploration with generative AI involves juxtaposing the
                unconventional against familiar, reimagining beauty and beyond.
              </p>
            </div>

            <div className="about-block">
              <h2>About me:</h2>
              <p>Just an entity residing in Los Angeles, inserting moments in time.</p>
            </div>

            <div className="about-block">
              <h2>Follow:</h2>
              <p>
                <a href="https://www.instagram.com/thegridlifeai/" rel="noreferrer" target="_blank">
                  @thegridlifeai
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <p className="footer-line footer-line-en">
          A{" "}
          <a className="footer-credit-link" href="https://superfresh.la" rel="noreferrer" target="_blank">
            Superfresh
          </a>{" "}
          project.
        </p>
      </footer>
    </main>
  );
}
