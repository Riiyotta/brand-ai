// IA section(s): hero.module-coverstacked (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// module-coverStacked — the section's real markup, read from the rendered page (route /product, section 1).
export default function ModuleCoverStacked6() {
  return (
    <section className="module-coverStacked module" data-scheme="light" data-next-scheme="light" data-prev-scheme="light" data-scroll="false" data-hidden="false" data-clone-section="ModuleCoverStacked6">
      <div className="textBlock module-coverStacked-textBlock" data-reveal="">
        <div className="textBlock-inner">
          <h1 className="headline" style={{ "maxWidth": "1110px" }}>The operating system for modern brand work</h1>
          <div className="paragraph">
            <p>Align your strategy, design systems, voice, and market signals in one powerful hub. Designed to sync every team and every channel.</p>
          </div>
          <div className="cta-wrapper">
            <A href="/book-a-demo" className="button-cta">Book a demo</A>
          </div>
        </div>
      </div>
      <div className="module-coverStacked-media-wrapper">
        <div className="module-coverStacked-media--radius-sm module-coverStacked-media">
          <div className="media video mux bento-empty bento-style-overlay" data-orientation="false">
            <video autoPlay loop muted playsInline preload="auto" width="200" height="100" fetchPriority="high"></video>
          </div>
        </div>
      </div>
    </section>
  );
}
