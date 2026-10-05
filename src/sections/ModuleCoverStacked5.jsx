import A from "../lib/A.jsx";

// module-coverStacked — the section's real markup, read from the rendered page (route /brand-studio, section 1).
export default function ModuleCoverStacked5() {
  return (
    <section className="module-coverStacked module" data-scheme="light" data-next-scheme="light" data-prev-scheme="light" data-scroll="false" data-hidden="false" data-clone-section="ModuleCoverStacked5">
      <div className="textBlock module-coverStacked-textBlock">
        <div className="textBlock-inner">
          <h1 className="headline" style={{ "maxWidth": "1110px" }}>Where brand intelligence becomes execution</h1>
          <div className="paragraph">
            <p>
              Assistant, Canvas, Projects, Brand Check.
              <br />
              Four unique tools that turn structured data into on-brand work at scale.
            </p>
          </div>
          <div className="cta-wrapper">
            <A href="/book-a-demo" className="button-cta">Book a demo</A>
          </div>
        </div>
      </div>
      <div className="module-coverStacked-media-wrapper">
        <div className="module-coverStacked-media--radius-sm module-coverStacked-media">
          <div className="media video mux bento-empty bento-style-overlay" data-orientation="false">
            <video autoPlay loop muted playsInline preload="auto" poster="/_ext/image.mux.com/aJdCTDaKA9HITnwbCzUPyZAyy2EYx98m92YaOaloQoQ/thumbnail__9a58980a.jpg" width="200" height="100" fetchPriority="high" src="/_ext/stream.mux.com/aJdCTDaKA9HITnwbCzUPyZAyy2EYx98m92YaOaloQoQ/high.mp4"></video>
          </div>
        </div>
      </div>
    </section>
  );
}
