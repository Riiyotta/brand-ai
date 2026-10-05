import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import Header7 from "../sections/Header7.jsx";
import MainInner10 from "../sections/MainInner10.jsx";
import FooterMain17 from "../sections/FooterMain17.jsx";
import css0 from "../styles/16-_slug_.KoadpnJY.css?inline"; // only this page loads it
import css1 from "../styles/inline-56.css?inline"; // only this page loads it
import css2 from "../styles/inline-19.css?inline"; // only this page loads it
import css3 from "../styles/inline-55.css?inline"; // only this page loads it
import css4 from "../styles/inline-57.css?inline"; // only this page loads it

// Route /careers/brand-support-specialist — 3 section(s), in page order.
export default function CareersBrandSupportSpecialist() {
  usePageChrome({ title: "Brand Support Specialist - Remote | brand.ai", html: { "lang": "en", "style": "--footer-dif: 0px; --footer-height: 900px;" }, body: { "style": "" } });
  return (
    <>
      <style>{css0}</style>
      <style>{css1}</style>
      <style>{css2}</style>
      <style>{css3}</style>
      <style>{css4}</style>
    <div id="__nuxt">
      <div id="layout">
        <Header7 />
        <main id="main" role="main">
          <MainInner10 />
        </main>
        <FooterMain17 />
        <div className="controller-page-scroll"></div>
        <div id="cookiesWrap" className="cookies-wrapper" style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate(0px, 0px)", "opacity": "1", "visibility": "inherit" }}>
          <div className="message">
            <p>
              {"This site uses "}
              <A href="/legal/privacy" className="">cookies</A>
              .
            </p>
            <div className="close">Accept</div>
          </div>
        </div>
      </div>
    </div>
    <div id="teleports"></div>
    </>
  );
}
