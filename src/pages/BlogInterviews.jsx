import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import Header10 from "../sections/Header10.jsx";
import MainInner17 from "../sections/MainInner17.jsx";
import FooterMain23 from "../sections/FooterMain23.jsx";
import CookiesWrap from "../sections/CookiesWrap.jsx";
import css0 from "../styles/15-_slug_.BC6yS-M8.css?inline"; // only this page loads it
import css1 from "../styles/14-_slug_.C1n5o3pd.css?inline"; // only this page loads it
import css2 from "../styles/inline-39.css?inline"; // only this page loads it
import css3 from "../styles/inline-58.css?inline"; // only this page loads it
import css4 from "../styles/inline-24.css?inline"; // only this page loads it
import css5 from "../styles/inline-42.css?inline"; // only this page loads it
import css6 from "../styles/inline-43.css?inline"; // only this page loads it
import css7 from "../styles/inline-13.css?inline"; // only this page loads it

// Route /blog/interviews — 4 section(s), in page order.
export default function BlogInterviews() {
  usePageChrome({ title: "Interviews – brand.ai", html: { "lang": "en", "style": "--footer-dif: 0px; --footer-height: 900px;" }, body: { "style": "" } });
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
          <MainInner17 />
        </main>
        <FooterMain23 />
        <div className="controller-page-scroll"></div>
        <CookiesWrap />
      </div>
    </div>
    <div id="teleports"></div>
    </>
  );
}
