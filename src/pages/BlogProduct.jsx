import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import Header14 from "../sections/Header14.jsx";
import MainInner15 from "../sections/MainInner15.jsx";
import FooterMain24 from "../sections/FooterMain24.jsx";
import css0 from "../styles/15-_slug_.BC6yS-M8.css?inline"; // only this page loads it
import css1 from "../styles/14-_slug_.C1n5o3pd.css?inline"; // only this page loads it
import css2 from "../styles/inline-39.css?inline"; // only this page loads it
import css3 from "../styles/inline-58.css?inline"; // only this page loads it
import css4 from "../styles/inline-24.css?inline"; // only this page loads it
import css5 from "../styles/inline-42.css?inline"; // only this page loads it
import css6 from "../styles/inline-43.css?inline"; // only this page loads it
import css7 from "../styles/inline-13.css?inline"; // only this page loads it

// Route /blog/product — 3 section(s), in page order.
export default function BlogProduct() {
  usePageChrome({ title: "Product – brand.ai", html: { "lang": "en", "style": "--footer-dif: 0px; --footer-height: 28px;" }, body: { "style": "" } });
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
        <Header14 />
        <main id="main" role="main">
          <MainInner15 />
        </main>
        <FooterMain24 />
        <div className="controller-page-scroll"></div>
        <div id="cookiesWrap" className="cookies-wrapper" data-reveal="">
          <div className="message" data-reveal="">
            <p data-reveal="">
              {"This site uses "}
              <A href="/legal/privacy" className="">cookies</A>
              .
            </p>
            <div className="close" data-reveal="">Accept</div>
          </div>
        </div>
      </div>
    </div>
    <div id="teleports"></div>
    </>
  );
}
