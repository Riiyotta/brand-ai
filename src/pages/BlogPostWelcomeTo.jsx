import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import Header17 from "../sections/Header17.jsx";
import PageWrapper2 from "../sections/PageWrapper2.jsx";
import PostRelated3 from "../sections/PostRelated3.jsx";
import FooterMain29 from "../sections/FooterMain29.jsx";
import css0 from "../styles/14-_slug_.C1n5o3pd.css?inline"; // only this page loads it
import css1 from "../styles/15-_slug_.BC6yS-M8.css?inline"; // only this page loads it
import css2 from "../styles/inline-59.css?inline"; // only this page loads it
import css3 from "../styles/inline-60.css?inline"; // only this page loads it
import css4 from "../styles/inline-13.css?inline"; // only this page loads it
import css5 from "../styles/inline-19.css?inline"; // only this page loads it
import css6 from "../styles/inline-66.css?inline"; // only this page loads it
import css7 from "../styles/inline-55.css?inline"; // only this page loads it
import css8 from "../styles/inline-63.css?inline"; // only this page loads it
import css9 from "../styles/inline-65.css?inline"; // only this page loads it
import css10 from "../styles/inline-24.css?inline"; // only this page loads it
import css11 from "../styles/inline-43.css?inline"; // only this page loads it

// Route /blog/post/welcome-to-brand-ai — 4 section(s), in page order.
export default function BlogPostWelcomeTo() {
  usePageChrome({ title: "Welcome to brand.ai, the platform we always wanted", html: { "lang": "en", "style": "--footer-dif: 0px; --footer-height: 900px;" }, body: { "style": "" } });
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
    <div id="__nuxt">
      <div id="layout">
        <Header17 />
        <main id="main" role="main">
          <div id="main-inner">
            <div className="page page-post" data-v-3d1fee30="">
              <PageWrapper2 />
              <PostRelated3 />
            </div>
          </div>
        </main>
        <FooterMain29 />
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
