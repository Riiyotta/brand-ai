import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import Header10 from "../sections/Header10.jsx";
import MainInner16 from "../sections/MainInner16.jsx";
import FooterMain22 from "../sections/FooterMain22.jsx";
import CookiesWrap from "../sections/CookiesWrap.jsx";
import css0 from "../styles/15-_slug_.BC6yS-M8.css?inline"; // only this page loads it
import css1 from "../styles/14-_slug_.C1n5o3pd.css?inline"; // only this page loads it
import css2 from "../styles/inline-39.css?inline"; // only this page loads it
import css3 from "../styles/inline-58.css?inline"; // only this page loads it
import css4 from "../styles/inline-24.css?inline"; // only this page loads it
import css5 from "../styles/inline-42.css?inline"; // only this page loads it
import css6 from "../styles/inline-43.css?inline"; // only this page loads it
import css7 from "../styles/inline-13.css?inline"; // only this page loads it

// Route /blog/company — 4 section(s), in page order.
export default function BlogCompany() {
  usePageChrome({ title: "Company – brand.ai", html: { "lang": "en", "style": "--footer-dif: 0px; --footer-height: 28px;" }, body: { "style": "" } });
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
    <div id="__nuxt">
      <div id="layout">
        <Header10 />
        <main id="main" role="main">
          <MainInner16 />
        </main>
        <FooterMain22 />
        <div className="controller-page-scroll"></div>
        <CookiesWrap />
      </div>
    </div>
    <div id="teleports"></div>
    </>
  );
}
