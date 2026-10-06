// IA section(s): content.module-mediaflexible (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// module-mediaFlexible — the section's real markup, read from the rendered page (route /product, section 9).
export default function ModuleMediaFlexible4() {
  return (
    <section className="module-mediaFlexible module" data-scheme="light" data-next-scheme="light" data-prev-scheme="light" module-index="8" data-scroll="false" data-hidden="false" data-clone-section="ModuleMediaFlexible4">
      <div className="textBlock module-mediaFlexible-textBlock" data-reveal="">
        <div className="textBlock-inner" data-reveal="">
          <p className="heading" data-reveal="">Plans</p>
          <h3 className="headline" data-reveal="">
            <div className="rich-text rich-text-format" data-reveal="">
              <p data-reveal="">Built to scale across any organization</p>
            </div>
          </h3>
        </div>
      </div>
      <div className="module-mediaFlexible-media-wrapper" style={{ "--columns": "12" }}>
        <div className="module-mediaFlexible-media module-mediaFlexible-media--half">
          <A href="/teams" className="media image is-bento-link bento-style-overlay" data-orientation="landscape">
            <div className="bentoText-wrapper" data-brightness="0.6876033235294114">
              <div className="bentoText-heading">Teams</div>
              <div className="bentoText-text">
                <p>Full platform power without complexity. Scale up, stay consistent, and ship on-brand work.</p>
              </div>
              <div className="bentoText-cta">Learn more</div>
            </div>
            <img className=" lazyloaded" data-sizes="false" sizes="false" width="1170" height="1170" alt="" fetchPriority="auto" />
          </A>
        </div>
        <div className="module-mediaFlexible-media module-mediaFlexible-media--half">
          <A href="/enterprise" className="media image is-bento-link bento-style-overlay" data-orientation="landscape">
            <div className="bentoText-wrapper" data-brightness="0.925993431372549">
              <div className="bentoText-heading">Enterprise</div>
              <div className="bentoText-text">
                <p>Built for Fortune 500 companies. Custom workflows, multi-brand hierarchies, and dedicated support.</p>
              </div>
              <div className="bentoText-cta">Learn more</div>
            </div>
            <img className=" lazyloaded" data-sizes="false" sizes="false" width="1170" height="1170" alt="" fetchPriority="auto" />
          </A>
        </div>
      </div>
    </section>
  );
}
