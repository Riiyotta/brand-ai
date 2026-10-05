import A from "../lib/A.jsx";

// module-coverStacked — the section's real markup, read from the rendered page (route /enterprise, section 1).
export default function ModuleCoverStacked7() {
  return (
    <section className="module-coverStacked module" data-scheme="light" data-next-scheme="light" data-prev-scheme="light" data-scroll="false" data-hidden="false" data-clone-section="ModuleCoverStacked7">
      <div className="textBlock module-coverStacked-textBlock" data-reveal="">
        <div className="textBlock-inner">
          <h1 className="headline" style={{ "maxWidth": "990px" }}>One truth. Every team. Every time.</h1>
          <div className="paragraph">
            <p>50 channels. 20 partners. 10 regions. Brand.ai gives everyone in your company the same intelligent foundation to move fast and keep your brand distinctive.</p>
          </div>
          <div className="cta-wrapper">
            <A href="/book-a-demo" className="button-cta">Book a demo</A>
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
