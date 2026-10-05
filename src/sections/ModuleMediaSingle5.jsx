import A from "../lib/A.jsx";

// module-mediaSingle — the section's real markup, read from the rendered page (route /teams, section 8).
export default function ModuleMediaSingle5() {
  return (
    <section className="module-mediaSingle module" data-scheme="light" data-next-scheme="light" data-prev-scheme="light" module-index="8" data-scroll="false" data-hidden="false" data-clone-section="ModuleMediaSingle5">
      <div className="module-mediaSingle-inner">
        <div className="textBlock module-mediaSingle-textBlock" data-reveal="">
          <div className="textBlock-inner" data-reveal="">
            <p className="heading" data-reveal="">Enterprise</p>
            <h3 className="headline" data-reveal="">
              <div className="rich-text rich-text-format" data-reveal="">
                <p data-reveal="">Designed for bigger global teams</p>
              </div>
            </h3>
            <div className="cta-wrapper" data-reveal="">
              <A href="/enterprise" className="button-cta" data-reveal="">Learn more</A>
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
