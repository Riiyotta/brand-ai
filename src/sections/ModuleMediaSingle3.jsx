// IA section(s): content.module-mediasingle (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// module-mediaSingle — the section's real markup, read from the rendered page (route /product, section 13).
export default function ModuleMediaSingle3() {
  return (
    <section className="module-mediaSingle module" data-scheme="light" data-next-scheme="light" data-prev-scheme="light" module-index="12" data-scroll="false" data-hidden="false" data-clone-section="ModuleMediaSingle3">
      <div className="module-mediaSingle-inner">
        <div className="textBlock module-mediaSingle-textBlock" data-reveal="">
          <div className="textBlock-inner" data-reveal="">
            <p className="heading" data-reveal="">Company</p>
            <h3 className="headline" data-reveal="">
              <div className="rich-text rich-text-format" data-reveal="">
                <p data-reveal="">Created by brand builders and technologists who care about craft</p>
              </div>
            </h3>
            <div className="cta-wrapper" data-reveal="">
              <A href="/company" className="button-cta" data-reveal="">Learn more</A>
            </div>
          </div>
        </div>
        <div className="module-mediaSingle-media-wrapper">
          <div className="module-mediaSingle-media module-mediaSingle-media--radius-lg">
            <div className="media video mux bento-empty bento-style-overlay" data-orientation="false">
              <video autoPlay loop muted playsInline preload="none" className="" width="1600" height="900" fetchPriority="auto"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
