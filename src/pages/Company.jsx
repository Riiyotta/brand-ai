import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import Header3 from "../sections/Header3.jsx";
import ModuleCoverStacked2 from "../sections/ModuleCoverStacked2.jsx";
import ModuleCenteredHeadline2 from "../sections/ModuleCenteredHeadline2.jsx";
import ModuleFeaturesNumbered from "../sections/ModuleFeaturesNumbered.jsx";
import ModuleMediaSingle from "../sections/ModuleMediaSingle.jsx";
import ModuleMediaSingle2 from "../sections/ModuleMediaSingle2.jsx";
import ModuleNews2 from "../sections/ModuleNews2.jsx";
import FooterMain3 from "../sections/FooterMain3.jsx";
import CookiesWrap from "../sections/CookiesWrap.jsx";
import css0 from "../styles/inline-27.css?inline"; // only this page loads it
import css1 from "../styles/inline-10.css?inline"; // only this page loads it
import css2 from "../styles/inline-11.css?inline"; // only this page loads it
import css3 from "../styles/inline-13.css?inline"; // only this page loads it
import css4 from "../styles/inline-16.css?inline"; // only this page loads it
import css5 from "../styles/inline-36.css?inline"; // only this page loads it
import css6 from "../styles/inline-18.css?inline"; // only this page loads it
import css7 from "../styles/inline-19.css?inline"; // only this page loads it
import css8 from "../styles/inline-37.css?inline"; // only this page loads it
import css9 from "../styles/inline-12.css?inline"; // only this page loads it
import css10 from "../styles/inline-23.css?inline"; // only this page loads it
import css11 from "../styles/inline-24.css?inline"; // only this page loads it

// Route /company — 9 section(s), in page order.
export default function Company() {
  usePageChrome({ title: "Tools for those who believe in brand | brand.ai", html: { "lang": "en", "style": "--footer-dif: 0px; --footer-height: 28px;" }, body: { "style": "" } });
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
        <Header3 />
        <main id="main" role="main">
          <div id="main-inner">
            <div className="page page-slug">
              <div className="modules-wrapper">
                <ModuleCoverStacked2 />
                <ModuleCenteredHeadline2 />
                <ModuleFeaturesNumbered />
                <ModuleMediaSingle />
                <ModuleMediaSingle2 />
                <ModuleNews2 />
              </div>
            </div>
          </div>
        </main>
        <FooterMain3 />
        <div className="controller-page-scroll"></div>
        <CookiesWrap />
      </div>
    </div>
    <div id="teleports"></div>
    </>
  );
}
