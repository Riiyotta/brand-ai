// IA section(s): hero.module-coverstacked (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// module-coverStacked — the section's real markup, read from the rendered page (route /enterprise, section 1).
export default function ModuleCoverStacked7() {
  return (
    <section className="module-coverStacked module" data-scheme="light" data-next-scheme="light" data-prev-scheme="light" data-scroll="false" data-hidden="false" data-clone-section="ModuleCoverStacked7">
      <div className="textBlock module-coverStacked-textBlock" data-reveal="">
        <div className="textBlock-inner" data-reveal="">
          <h1 className="headline" style={{ "maxWidth": "990px" }} data-reveal="">One truth. Every team. Every time.</h1>
          <div className="paragraph" data-reveal="">
            <p data-reveal="">50 channels. 20 partners. 10 regions. Brand.ai gives everyone in your company the same intelligent foundation to move fast and keep your brand distinctive.</p>
          </div>
          <div className="cta-wrapper" data-reveal="">
            <A href="/book-a-demo" className="button-cta" data-reveal="">Book a demo</A>
          </div>
        </div>
      </div>
      <div className="module-coverStacked-media-wrapper">
        <div className="module-coverStacked-media--radius-lg module-coverStacked-media">
          <div className="media image bento-empty bento-style-overlay" data-orientation="landscape">
            <img className="lazypreload lazyloaded" data-sizes="false" sizes="false" alt="A sleek chat input box with the prompt “Ask anything” floats over a blurred close-up of airplane windows on a light, minimalist background." width="2400" height="1200" fetchPriority="high" />
          </div>
        </div>
      </div>
    </section>
  );
}
