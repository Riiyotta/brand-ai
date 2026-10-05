import A from "../lib/A.jsx";

// module-mediaFlexible — the section's real markup, read from the rendered page (route /product, section 5).
export default function ModuleMediaFlexible2() {
  return (
    <section className="module-mediaFlexible module" data-scheme="light" data-next-scheme="light" data-prev-scheme="light" module-index="4" data-scroll="false" data-hidden="false" data-clone-section="ModuleMediaFlexible2">
      <div className="textBlock module-mediaFlexible-textBlock has-emphasis" data-reveal="">
        <div className="textBlock-inner" data-reveal="">
          <h3 className="headline headline--has-emphasis" data-reveal="">
            <div className="rich-text rich-text-format" data-reveal="">
              <p data-reveal="">
                <strong data-reveal="">
                  Brand Studio
                  <br />
                  {""}
                </strong>
                Where intelligence
                <br />
                becomes execution
              </p>
            </div>
          </h3>
          <div className="cta-wrapper" data-reveal="">
            <A href="/brand-studio" className="button-cta" data-reveal="">Learn more</A>
          </div>
        </div>
      </div>
      <div className="module-mediaFlexible-media-wrapper" style={{ "--columns": "12" }}>
        <div className="module-mediaFlexible-media module-mediaFlexible-media--half">
          <div className="media image bento-style-overlay" data-orientation="portrait">
            <div className="bentoText-wrapper" data-brightness="0.9187283333333336">
              <div className="bentoText-heading">Assistant</div>
              <div className="bentoText-text">
                <p>Create on-brand copy, strategy, images, and presentations. Built on Claude, governed by your standards, and trained on your Brand OS.</p>
              </div>
            </div>
            <img className=" lazyloaded" data-sizes="false" sizes="false" width="1560" height="1950" alt="" fetchPriority="auto" />
          </div>
        </div>
        <div className="module-mediaFlexible-media module-mediaFlexible-media--half">
          <div className="media image bento-style-overlay" data-orientation="portrait">
            <div className="bentoText-wrapper" data-brightness="0.8701241421568632">
              <div className="bentoText-heading">Canvas</div>
              <div className="bentoText-text">
                <p>Visual strategy sandbox for moodboards, campaign planning, and connecting ideas. Export to decks, spreadsheets, or images.</p>
              </div>
            </div>
            <img className=" lazyloaded" data-sizes="false" sizes="false" width="1170" height="1463" alt="" fetchPriority="auto" />
          </div>
        </div>
        <div className="module-mediaFlexible-media module-mediaFlexible-media--half">
          <div className="media image bento-style-overlay" data-orientation="portrait">
            <div className="bentoText-wrapper" data-brightness="0.9051425857843142">
              <div className="bentoText-heading">Projects</div>
              <div className="bentoText-text">
                <p>Organize briefs, research, and teams around what matters. Agency partners will work within your guardrails automatically.</p>
              </div>
            </div>
            <img className=" lazyloaded" data-sizes="false" sizes="false" width="1560" height="1950" alt="" fetchPriority="auto" />
          </div>
        </div>
        <div className="module-mediaFlexible-media module-mediaFlexible-media--half">
          <div className="media video mux bento-style-overlay" data-orientation="false">
            <div className="bentoText-wrapper">
              <div className="bentoText-heading">Brand Check</div>
              <div className="bentoText-text">
                <p>Catch brand and cultural risks before launch. Risk scores, suggested fixes, and approval audit trails for every output.</p>
              </div>
            </div>
            <video autoPlay loop muted playsInline preload="none" className="" width="39000" height="48700" fetchPriority="auto"></video>
          </div>
        </div>
      </div>
    </section>
  );
}
