import A from "../lib/A.jsx";

// module-mediaSingle — the section's real markup, read from the rendered page (route /company, section 4).
export default function ModuleMediaSingle() {
  return (
    <section className="module-mediaSingle module" data-scheme="light" data-next-scheme="light" data-prev-scheme="light" module-index="3" data-scroll="false" data-hidden="false" data-clone-section="ModuleMediaSingle">
      <div className="module-mediaSingle-inner">
        <div className="textBlock module-mediaSingle-textBlock" data-reveal="">
          <div className="textBlock-inner" data-reveal="">
            <h5 className="heading" data-reveal="">Work with us</h5>
            <h3 className="headline" data-reveal="">
              <div className="rich-text rich-text-format" data-reveal="">
                <p data-reveal="">We believe in a collision of disciplines. Strategists who code. Engineers who love typography. Our tools compound creativity. If you respect the craft, we should talk.</p>
              </div>
            </h3>
            <div className="cta-wrapper" data-reveal="">
              <A href="/careers" className="button-cta" data-reveal="">{"View open roles "}</A>
            </div>
          </div>
        </div>
        <div className="module-mediaSingle-media-wrapper">
          <div className="module-mediaSingle-media module-mediaSingle-media--radius-sm">
            <div className="media video mux bento-empty bento-style-overlay" data-orientation="false">
              <video autoPlay loop muted playsInline preload="none" poster="/_ext/image.mux.com/LVelvUEUaPMOuZFmsMIDR47iGGwngX9VNP7p4vt02ajE/thumbnail__d1f54ac2.jpg" className="" width="1600" height="900" fetchPriority="auto" src="/_ext/stream.mux.com/LVelvUEUaPMOuZFmsMIDR47iGGwngX9VNP7p4vt02ajE/high.mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
