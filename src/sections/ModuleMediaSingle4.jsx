// IA section(s): content.module-mediasingle (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// module-mediaSingle — the section's real markup, read from the rendered page (route /enterprise, section 11).
export default function ModuleMediaSingle4() {
  return (
    <section className="module-mediaSingle module" data-scheme="light" data-next-scheme="light" data-prev-scheme="light" module-index="11" data-scroll="false" data-hidden="false" data-clone-section="ModuleMediaSingle4">
      <div className="module-mediaSingle-inner">
        <div className="textBlock module-mediaSingle-textBlock" data-reveal="">
          <div className="textBlock-inner" data-reveal="">
            <p className="heading" data-reveal="">Teams</p>
            <h3 className="headline" data-reveal="">
              <div className="rich-text rich-text-format" data-reveal="">
                <p data-reveal="">Built for teams scaling fast</p>
              </div>
            </h3>
            <div className="cta-wrapper" data-reveal="">
              <A href="/teams" className="button-cta" data-reveal="">Learn more</A>
            </div>
          </div>
        </div>
        <div className="module-mediaSingle-media-wrapper">
          <div className="module-mediaSingle-media module-mediaSingle-media--radius-lg">
            <div className="media image bento-empty bento-style-overlay" data-orientation="landscape">
              <img className=" lazyloaded" data-sizes="false" sizes="false" width="2400" height="1200" alt="" fetchPriority="auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
