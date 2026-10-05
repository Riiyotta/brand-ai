import A from "../lib/A.jsx";

// module-download — the section's real markup, read from the rendered page (route /security, section 5).
export default function ModuleDownload2() {
  return (
    <section className="module-download module-download--book-a-demo module" data-scheme="dark" data-next-scheme="dark" data-prev-scheme="dark" module-index="5" data-scroll="false" data-hidden="false" data-clone-section="ModuleDownload2">
      <div className="module-download-inner">
        <div className="icon" aria-hidden="true">
          <div className="icon-inner">
            <img src="/_ext/cdn.sanity.io/files/3zwn2ers/fullsite/fcabeb87c216a87f0e8950b7a7ab0f316fbd1f73.svg" alt="" className="icon-img" />
          </div>
        </div>
        <h3 className="headline" data-reveal="">Serious about security?</h3>
        <div className="rich-text rich-text-format paragraph" data-reveal="">
          <p data-reveal="">Book a demo to see brand.ai in action.</p>
        </div>
        <div className="cta">
          <A href="/book-a-demo" className="button-cta">Book a demo</A>
        </div>
      </div>
    </section>
  );
}
