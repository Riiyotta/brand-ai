import A from "../lib/A.jsx";

// current-roles — the section's real markup, read from the rendered page (route /careers, section 5).
export default function CurrentRoles() {
  return (
    <section className="module-careers module-split module" id="current-roles" data-scheme="light" data-next-scheme="light" data-prev-scheme="light" module-index="4" data-scroll="true" data-scroll-anchor="current-roles" data-hidden="false" data-clone-section="CurrentRoles">
      <div className="module-inner">
        <div className="module-heading careers-heading" data-reveal="">
          <h3 className="headline" data-reveal="">
            <div className="rich-text rich-text-format" data-reveal="">
              <p data-reveal="">Open roles</p>
            </div>
          </h3>
        </div>
        <div className="module-content careers-content">
          <div className="careers-category" data-reveal="">
            <h2 className="careers-category-heading" data-reveal="">Engineering</h2>
            <div className="careers-category-content" data-reveal="">
              <A href="/careers/senior-software-engineer" className="careers-category-item" data-reveal="">
                <h3 className="title" data-reveal="">Senior Software Engineer</h3>
                <div className="location" data-reveal="">Remote (USA and Australia)</div>
                <div className="message">Learn more →</div>
              </A>
              <A href="/careers/forward-deployed-engineer" className="careers-category-item" data-reveal="">
                <h3 className="title" data-reveal="">Forward Deployed Engineer</h3>
                <div className="location" data-reveal="">Remote (USA)</div>
                <div className="message">Learn more →</div>
              </A>
              <A href="/careers/software-engineer" className="careers-category-item" data-reveal="">
                <h3 className="title" data-reveal="">Software Engineer</h3>
                <div className="location" data-reveal="">Remote (USA)</div>
                <div className="message">Learn more →</div>
              </A>
            </div>
          </div>
          <div className="careers-category" style={{ "display": "none", "translate": "none", "rotate": "none", "scale": "none", "transform": "translate(0px, 32px)", "opacity": "0", "visibility": "hidden" }}>
            <h2 className="careers-category-heading">Marketing</h2>
            <div className="careers-category-content"></div>
          </div>
          <div className="careers-category" data-reveal="">
            <h2 className="careers-category-heading" data-reveal="">Product</h2>
            <div className="careers-category-content" data-reveal="">
              <A href="/careers/digital-designer" className="careers-category-item" data-reveal="">
                <h3 className="title" data-reveal="">Digital Designer</h3>
                <div className="location" data-reveal="">Remote</div>
                <div className="message">Learn more →</div>
              </A>
              <A href="/careers/product-designer" className="careers-category-item" data-reveal="">
                <h3 className="title" data-reveal="">Product Designer</h3>
                <div className="location" data-reveal="">Remote</div>
                <div className="message">Learn more →</div>
              </A>
              <A href="/careers/brand-support-specialist" className="careers-category-item" data-reveal="">
                <h3 className="title" data-reveal="">Brand Support Specialist</h3>
                <div className="location" data-reveal="">Remote</div>
                <div className="message">Learn more →</div>
              </A>
              <A href="/careers/brand-engineer" className="careers-category-item" data-reveal="">
                <h3 className="title" data-reveal="">Brand Engineer</h3>
                <div className="location" data-reveal="">Remote</div>
                <div className="message">Learn more →</div>
              </A>
            </div>
          </div>
          <div className="careers-category" style={{ "display": "none", "translate": "none", "rotate": "none", "scale": "none", "transform": "translate(0px, 32px)", "opacity": "0", "visibility": "hidden" }}>
            <h2 className="careers-category-heading">Product</h2>
            <div className="careers-category-content"></div>
          </div>
          <div className="careers-category" data-reveal="">
            <h2 className="careers-category-heading" data-reveal="">Sales</h2>
            <div className="careers-category-content" data-reveal="">
              <A href="/careers/account-executive" className="careers-category-item" data-reveal="">
                <h3 className="title" data-reveal="">Account Executive, Enterprise</h3>
                <div className="location" data-reveal="">Remote</div>
                <div className="message">Learn more →</div>
              </A>
              <a className="careers-category-item" target="_blank" href="mailto:careers@brand.ai" data-reveal="">
                <h3 className="title" data-reveal="">Copywriter (Freelance)</h3>
                <div className="location" data-reveal="">Remote</div>
                <div className="message">Get in touch ↗</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
