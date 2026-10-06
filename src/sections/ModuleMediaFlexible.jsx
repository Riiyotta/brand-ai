// IA section(s): content.module-mediaflexible (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// module-mediaFlexible — the section's real markup, read from the rendered page (route /product, section 4).
export default function ModuleMediaFlexible() {
  return (
    <section className="module-mediaFlexible module" data-scheme="light" data-next-scheme="light" data-prev-scheme="light" module-index="3" data-scroll="false" data-hidden="false" data-clone-section="ModuleMediaFlexible">
      <div className="textBlock module-mediaFlexible-textBlock has-emphasis" data-reveal="">
        <div className="textBlock-inner" data-reveal="">
          <h3 className="headline headline--has-emphasis" data-reveal="">
            <div className="rich-text rich-text-format" data-reveal="">
              <p data-reveal="">
                <strong data-reveal="">Brand OS</strong>
                {""}
                <br />
                Four intelligence layers
                <br />
                working together
              </p>
            </div>
          </h3>
          <div className="cta-wrapper" data-reveal="">
            <A href="/brand-os" className="button-cta" data-reveal="">Learn more</A>
          </div>
        </div>
      </div>
      <div className="module-mediaFlexible-media-wrapper" style={{ "--columns": "12" }}>
        <div className="module-mediaFlexible-media module-mediaFlexible-media--half">
          <div className="media image bento-style-overlay" data-orientation="portrait">
            <div className="bentoText-wrapper" data-brightness="0.9188683137254898">
              <div className="bentoText-heading">Brand Foundation</div>
              <div className="bentoText-text">
                <p>Machine-readable rules based on your brand guidelines, business strategy, research, tone of voice, and competitive audits.</p>
              </div>
            </div>
            <img className=" lazyloaded" data-sizes="false" sizes="false" width="1560" height="1950" alt="" fetchPriority="auto" />
          </div>
        </div>
        <div className="module-mediaFlexible-media module-mediaFlexible-media--half">
          <div className="media video mux bento-style-overlay" data-orientation="false">
            <div className="bentoText-wrapper">
              <div className="bentoText-heading">Brand Ontology</div>
              <div className="bentoText-text">
                <p>An always-on engine that looks at 30+ signals across business and culture to help find you new opportunities.</p>
              </div>
            </div>
            <video autoPlay loop muted playsInline preload="none" className="" width="39000" height="48700" fetchPriority="auto"></video>
          </div>
        </div>
        <div className="module-mediaFlexible-media module-mediaFlexible-media--half">
          <div className="media image bento-style-overlay" data-orientation="portrait">
            <div className="bentoText-wrapper is-light" data-brightness="0.10588235294117647">
              <div className="bentoText-heading">Connected Applications</div>
              <div className="bentoText-text">
                <p>Secure OAuth integrations with Figma, Notion, Google Drive, Slack, Shopify. Brand OS learns from actual work.</p>
              </div>
            </div>
            <img className=" lazyloaded" data-sizes="false" sizes="false" width="1560" height="1950" alt="" fetchPriority="auto" />
          </div>
        </div>
        <div className="module-mediaFlexible-media module-mediaFlexible-media--half">
          <div className="media image bento-style-overlay" data-orientation="portrait">
            <div className="bentoText-wrapper" data-brightness="0.919695036764707">
              <div className="bentoText-heading">Daily Signals</div>
              <div className="bentoText-text">
                <p>Get updates and sentiment analysis from every article, podcast, substack, social post, and more.</p>
              </div>
            </div>
            <img className=" lazyloaded" data-sizes="false" sizes="false" width="1560" height="1950" alt="" fetchPriority="auto" />
          </div>
        </div>
        <div className="module-mediaFlexible-media module-mediaFlexible-media--full">
          <div className="media video mux bento-style-after" data-orientation="false">
            <video autoPlay loop muted playsInline preload="none" className="" width="1600" height="900" fetchPriority="auto"></video>
            <div className="bentoText-wrapper bentoText-after">
              <div className="bentoText-heading">Explore across filetypes</div>
              <div className="bentoText-text">
                <p>{"Search the entire history of your brand. Your library includes every kind of asset ever created or launched. "}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
