import A from "../lib/A.jsx";

// module-coverStacked — the section's real markup, read from the rendered page (route /teams, section 1).
export default function ModuleCoverStacked8() {
  return (
    <section className="module-coverStacked module" data-scheme="light" data-next-scheme="light" data-prev-scheme="light" data-scroll="false" data-hidden="false" data-clone-section="ModuleCoverStacked8">
      <div className="textBlock module-coverStacked-textBlock">
        <div className="textBlock-inner">
          <h1 className="headline" style={{ "maxWidth": "800px" }}>Built for teams scaling fast</h1>
          <div className="paragraph">
            <p>Get full-platform power without enterprise complexity. Includes Brand OS, Brand Studio tools, security essentials, and more.</p>
          </div>
          <div className="cta-wrapper">
            <A href="/book-a-demo" className="button-cta">Book a demo</A>
          </div>
        </div>
      </div>
      <div className="module-coverStacked-media-wrapper">
        <div className="module-coverStacked-media--radius-lg module-coverStacked-media">
          <div className="media image bento-empty bento-style-overlay" data-orientation="landscape">
            <img className="lazypreload ls-is-cached lazyloaded" data-sizes="false" sizes="false" alt="Close-up of a house roof covered with solar panels under a partly cloudy sky, with two cursor icons labeled “James” and “Jana” pointing at the scene." width="2400" height="1200" fetchPriority="high" />
          </div>
        </div>
      </div>
    </section>
  );
}
