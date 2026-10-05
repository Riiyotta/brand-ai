import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import Header8 from "../sections/Header8.jsx";
import MainInner2 from "../sections/MainInner2.jsx";
import FooterMain12 from "../sections/FooterMain12.jsx";
import CookiesWrap from "../sections/CookiesWrap.jsx";
import css0 from "../styles/inline-27.css?inline"; // only this page loads it
import css1 from "../styles/inline-10.css?inline"; // only this page loads it
import css2 from "../styles/inline-53.css?inline"; // only this page loads it
import css3 from "../styles/inline-19.css?inline"; // only this page loads it
import css4 from "../styles/inline-34.css?inline"; // only this page loads it
import css5 from "../styles/inline-35.css?inline"; // only this page loads it

// Route /faq — 4 section(s), in page order.
export default function Faq() {
  usePageChrome({ title: "Frequently asked questions | brand.ai", html: { "lang": "en", "style": "--footer-dif: 0px; --footer-height: 28px;" }, body: { "style": "" } });
  return (
    <>
      <style>{css0}</style>
      <style>{css1}</style>
      <style>{css2}</style>
      <style>{css3}</style>
      <style>{css4}</style>
      <style>{css5}</style>
    <div id="__nuxt">
      <div id="layout">
        <Header8 />
        <main id="main" role="main">
          <MainInner2 />
        </main>
        <FooterMain12 />
        <div className="controller-page-scroll"></div>
        <CookiesWrap />
      </div>
    </div>
    <div id="teleports"></div>
    </>
  );
}
