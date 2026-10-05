import A from "../lib/A.jsx";

// module-coverStacked — the section's real markup, read from the rendered page (route /, section 1; shared by 2 routes).
export default function ModuleCoverStacked() {
  return (
    <section className="module-coverStacked module" data-scheme="light" data-next-scheme="light" data-prev-scheme="light" data-scroll="false" data-hidden="false" data-clone-section="ModuleCoverStacked">
      <div className="textBlock module-coverStacked-textBlock">
        <div className="textBlock-inner">
          <h1 className="headline">Your brand, as source code</h1>
          <div className="paragraph">
            <p>Brand infrastructure your teams run on and your agents answer to. Owned by you. Enforced everywhere.</p>
          </div>
          <div className="cta-wrapper">
            <A href="/book-a-demo" className="button-cta">Book a demo</A>
          </div>
        </div>
      </div>
      <div className="module-coverStacked-media-wrapper">
        <div className="module-coverStacked-media--radius-lg module-coverStacked-media">
          <div className="media video mux bento-empty bento-style-overlay" data-orientation="false">
            <video autoPlay loop muted playsInline preload="auto" poster="/_ext/image.mux.com/00SwbpWBFsYt68U02Sx5mij9CppoC01wi7QrSV9IWxGEEw/thumbnail__d1f54ac2.jpg" width="1600" height="900" fetchPriority="high" src="/_ext/stream.mux.com/00SwbpWBFsYt68U02Sx5mij9CppoC01wi7QrSV9IWxGEEw/high.mp4"></video>
          </div>
        </div>
      </div>
    </section>
  );
}
