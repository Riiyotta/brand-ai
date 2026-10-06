// IA section(s): content.module-download (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// module-download — the section's real markup, read from the rendered page (route /product, section 12).
export default function ModuleDownload4() {
  return (
    <section className="module-download module-download--book-a-demo module" data-scheme="light" data-next-scheme="light" data-prev-scheme="light" module-index="11" data-scroll="false" data-hidden="false" data-clone-section="ModuleDownload4">
      <div className="module-download-inner">
        <div className="icon" aria-hidden="true">
          <div className="icon-inner">
            <img src="/_ext/cdn.sanity.io/files/3zwn2ers/fullsite/fcabeb87c216a87f0e8950b7a7ab0f316fbd1f73.svg" alt="" className="icon-img" />
          </div>
        </div>
        <h3 className="headline" style={{ "maxWidth": "680px" }} data-reveal="">Get a personalized demo for your brand</h3>
        <div className="rich-text rich-text-format paragraph" data-reveal="">
          <p data-reveal="">See how brand.ai helps you get time back for high-impact work.</p>
        </div>
        <div className="cta">
          <A href="/book-a-demo" className="button-cta">Book a demo</A>
        </div>
      </div>
    </section>
  );
}
