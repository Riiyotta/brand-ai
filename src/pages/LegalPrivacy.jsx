import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import Header6 from "../sections/Header6.jsx";
import MainInner3 from "../sections/MainInner3.jsx";
import FooterMain13 from "../sections/FooterMain13.jsx";
import CookiesWrap3 from "../sections/CookiesWrap3.jsx";
import css0 from "../styles/inline-54.css?inline"; // only this page loads it
import css1 from "../styles/inline-19.css?inline"; // only this page loads it
import css2 from "../styles/inline-55.css?inline"; // only this page loads it

// Route /legal/privacy — 4 section(s), in page order.
export default function LegalPrivacy() {
  usePageChrome({ title: "Privacy Policy – brand.ai", html: { "lang": "en", "style": "--footer-dif: 0px; --footer-height: 900px;" }, body: { "style": "" } });
  return (
    <>
      <style>{css0}</style>
      <style>{css1}</style>
      <style>{css2}</style>
    <div id="__nuxt">
      <div id="layout">
        <Header6 />
        <main id="main" role="main">
          <MainInner3 />
        </main>
        <FooterMain13 />
        <div className="controller-page-scroll"></div>
        <CookiesWrap3 />
      </div>
    </div>
    <div id="teleports"></div>
    </>
  );
}
