import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import Header16 from "../sections/Header16.jsx";
import ModuleCoverStacked9 from "../sections/ModuleCoverStacked9.jsx";
import ModuleLogos from "../sections/ModuleLogos.jsx";
import ModuleHeroInline2 from "../sections/ModuleHeroInline2.jsx";
import ModuleCenteredHeadline from "../sections/ModuleCenteredHeadline.jsx";
import ModuleFeaturesTimed from "../sections/ModuleFeaturesTimed.jsx";
import ModuleFeaturesTimed2 from "../sections/ModuleFeaturesTimed2.jsx";
import ModuleMediaFilterGrid from "../sections/ModuleMediaFilterGrid.jsx";
import ModuleQuotes4 from "../sections/ModuleQuotes4.jsx";
import ModuleNews from "../sections/ModuleNews.jsx";
import ModuleDownload from "../sections/ModuleDownload.jsx";
import FooterMain28 from "../sections/FooterMain28.jsx";
import css0 from "../styles/inline-27.css?inline"; // only this page loads it
import css1 from "../styles/inline-10.css?inline"; // only this page loads it
import css2 from "../styles/inline-11.css?inline"; // only this page loads it
import css3 from "../styles/inline-12.css?inline"; // only this page loads it
import css4 from "../styles/inline-13.css?inline"; // only this page loads it
import css5 from "../styles/inline-14.css?inline"; // only this page loads it
import css6 from "../styles/inline-15.css?inline"; // only this page loads it
import css7 from "../styles/inline-16.css?inline"; // only this page loads it
import css8 from "../styles/inline-17.css?inline"; // only this page loads it
import css9 from "../styles/inline-18.css?inline"; // only this page loads it
import css10 from "../styles/inline-19.css?inline"; // only this page loads it
import css11 from "../styles/inline-20.css?inline"; // only this page loads it
import css12 from "../styles/inline-21.css?inline"; // only this page loads it
import css13 from "../styles/inline-22.css?inline"; // only this page loads it
import css14 from "../styles/inline-23.css?inline"; // only this page loads it
import css15 from "../styles/inline-24.css?inline"; // only this page loads it
import css16 from "../styles/inline-25.css?inline"; // only this page loads it

// Route /home — 12 section(s), in page order.
export default function HomePage2() {
  usePageChrome({ title: "brand.ai | AI for brand management", html: { "lang": "en", "style": "--footer-dif: 0px; --footer-height: 900px;" }, body: { "style": "" } });
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
      <style>{css16}</style>
    <div id="__nuxt">
      <div id="layout">
        <Header16 />
        <main id="main" role="main">
          <div id="main-inner">
            <div className="page page-slug">
              <div className="modules-wrapper">
                <ModuleCoverStacked9 />
                <ModuleLogos />
                <ModuleHeroInline2 />
                <ModuleCenteredHeadline />
                <ModuleFeaturesTimed />
                <ModuleFeaturesTimed2 />
                <ModuleMediaFilterGrid />
                <ModuleQuotes4 />
                <ModuleNews />
                <ModuleDownload />
              </div>
            </div>
          </div>
        </main>
        <FooterMain28 />
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
