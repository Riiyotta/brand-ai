import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import Header2 from "../sections/Header2.jsx";
import ModuleCoverColumns from "../sections/ModuleCoverColumns.jsx";
import ModuleFeaturesCertification from "../sections/ModuleFeaturesCertification.jsx";
import ModuleFeaturesInline from "../sections/ModuleFeaturesInline.jsx";
import ModuleFeaturesUnpacked from "../sections/ModuleFeaturesUnpacked.jsx";
import ModuleDownload2 from "../sections/ModuleDownload2.jsx";
import ModuleFaq from "../sections/ModuleFaq.jsx";
import FooterMain2 from "../sections/FooterMain2.jsx";
import CookiesWrap from "../sections/CookiesWrap.jsx";
import css0 from "../styles/inline-27.css?inline"; // only this page loads it
import css1 from "../styles/inline-10.css?inline"; // only this page loads it
import css2 from "../styles/inline-28.css?inline"; // only this page loads it
import css3 from "../styles/inline-13.css?inline"; // only this page loads it
import css4 from "../styles/inline-29.css?inline"; // only this page loads it
import css5 from "../styles/inline-18.css?inline"; // only this page loads it
import css6 from "../styles/inline-19.css?inline"; // only this page loads it
import css7 from "../styles/inline-12.css?inline"; // only this page loads it
import css8 from "../styles/inline-30.css?inline"; // only this page loads it
import css9 from "../styles/inline-31.css?inline"; // only this page loads it
import css10 from "../styles/inline-32.css?inline"; // only this page loads it
import css11 from "../styles/inline-22.css?inline"; // only this page loads it
import css12 from "../styles/inline-25.css?inline"; // only this page loads it
import css13 from "../styles/inline-33.css?inline"; // only this page loads it
import css14 from "../styles/inline-34.css?inline"; // only this page loads it
import css15 from "../styles/inline-35.css?inline"; // only this page loads it

// Route /security — 9 section(s), in page order.
export default function Security() {
  usePageChrome({ title: "SOC 2 certified, zero training on your data | brand.ai", html: { "lang": "en", "class": "is-dark", "style": "--footer-dif: 0px; --footer-height: 28px;" }, body: { "style": "" } });
  return (
    <>
      <style>{css0}</style>
      <style>{css1}</style>
      <style>{css2}</style>
      <style>{css3}</style>
      <style>{css4}</style>
      <style>{css5}</style>
      <style>{css6}</style>
      <style>{css7}</style>
      <style>{css8}</style>
      <style>{css9}</style>
      <style>{css10}</style>
      <style>{css11}</style>
      <style>{css12}</style>
      <style>{css13}</style>
      <style>{css14}</style>
      <style>{css15}</style>
    <div id="__nuxt">
      <div id="layout">
        <Header2 />
        <main id="main" role="main">
          <div id="main-inner">
            <div className="page page-slug">
              <div className="modules-wrapper">
                <ModuleCoverColumns />
                <ModuleFeaturesCertification />
                <ModuleFeaturesInline />
                <ModuleFeaturesUnpacked />
                <section className="module-quotes module" data-scheme="dark" data-next-scheme="dark" data-prev-scheme="dark" module-index="4" data-scroll="false" data-hidden="true">
                  <div className="module-quotes-inner" style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate(0px, 32px)", "opacity": "0", "visibility": "hidden" }}>
                    <div className="module-quotes-items">
                      <div className="module-quotes-item is-largest is-active">
                        <div className="modules-quotes-item-inner">
                          <p className="module-quote-text">“It brings a level of creativity  to something so functional which overall enhances our work”</p>
                          <div className="module-quote-author-wrapper">
                            <div className="module-quote-author">
                              <span className="name">Julia Lebosse</span>
                              <span className="position">Marketing Director at F1</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <ModuleDownload2 />
                <ModuleFaq />
              </div>
            </div>
          </div>
        </main>
        <FooterMain2 />
        <div className="controller-page-scroll"></div>
        <CookiesWrap />
      </div>
    </div>
    <div id="teleports"></div>
    </>
  );
}
