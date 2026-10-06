// IA section(s): hero.module-coverstacked (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// module-coverStacked — the section's real markup, read from the rendered page (route /brand-os, section 1).
export default function ModuleCoverStacked4() {
  return (
    <section className="module-coverStacked module" data-scheme="light" data-next-scheme="light" data-prev-scheme="light" data-scroll="false" data-hidden="false" data-clone-section="ModuleCoverStacked4">
      <div className="textBlock module-coverStacked-textBlock" data-reveal="">
        <div className="textBlock-inner" data-reveal="">
          <h1 className="headline" style={{ "maxWidth": "1100px" }} data-reveal="">Your brand, engineered into living intelligence</h1>
          <div className="paragraph" data-reveal="">
            <p data-reveal="">Four data layers transform guidelines, strategy, and market signals into a system  every team can deploy from. Governed by your standards to stay on brand at scale.</p>
          </div>
          <div className="cta-wrapper" data-reveal="">
            <A href="/book-a-demo" className="button-cta" data-reveal="">Book a demo</A>
          </div>
        </div>
      </div>
      <div className="module-coverStacked-media-wrapper">
        <div className="module-coverStacked-media--radius-sm module-coverStacked-media">
          <div className="media video mux bento-empty bento-style-overlay" data-orientation="false">
            <video autoPlay loop muted playsInline preload="auto" poster="/_ext/image.mux.com/WYkQXkGBYQ02QdicO2qUuEd2zthxxWq02tpQne2Gq4d7s/thumbnail__9a58980a.jpg" width="200" height="100" fetchPriority="high" src="/_ext/stream.mux.com/WYkQXkGBYQ02QdicO2qUuEd2zthxxWq02tpQne2Gq4d7s/1080p.mp4"></video>
          </div>
        </div>
      </div>
    </section>
  );
}
