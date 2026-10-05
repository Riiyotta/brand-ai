import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import Header4 from "../sections/Header4.jsx";
import ModuleCoverStacked3 from "../sections/ModuleCoverStacked3.jsx";
import ModuleFeaturesUnpacked2 from "../sections/ModuleFeaturesUnpacked2.jsx";
import ModuleFeaturesNumbered2 from "../sections/ModuleFeaturesNumbered2.jsx";
import ModuleQuotes2 from "../sections/ModuleQuotes2.jsx";
import CurrentRoles from "../sections/CurrentRoles.jsx";
import FooterMain4 from "../sections/FooterMain4.jsx";
import CookiesWrap2 from "../sections/CookiesWrap2.jsx";
import css0 from "../styles/inline-27.css?inline"; // only this page loads it
import css1 from "../styles/inline-10.css?inline"; // only this page loads it
import css2 from "../styles/inline-11.css?inline"; // only this page loads it
import css3 from "../styles/inline-13.css?inline"; // only this page loads it
import css4 from "../styles/inline-32.css?inline"; // only this page loads it
import css5 from "../styles/inline-18.css?inline"; // only this page loads it
import css6 from "../styles/inline-19.css?inline"; // only this page loads it
import css7 from "../styles/inline-36.css?inline"; // only this page loads it
import css8 from "../styles/inline-22.css?inline"; // only this page loads it
import css9 from "../styles/inline-38.css?inline"; // only this page loads it

// Route /careers — 8 section(s), in page order.
export default function Careers() {
  usePageChrome({ title: "Join toolmakers between code and craft | brand.ai", html: { "lang": "en", "style": "--footer-dif: 0px; --footer-height: 28px;" }, body: { "style": "" } });
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
    <div id="__nuxt">
      <div id="layout">
        <Header4 />
        <main id="main" role="main">
          <div id="main-inner">
            <div className="page page-slug">
              <div className="modules-wrapper">
                <ModuleCoverStacked3 />
                <ModuleFeaturesUnpacked2 />
                <ModuleFeaturesNumbered2 />
                <ModuleQuotes2 />
                <CurrentRoles />
              </div>
            </div>
          </div>
        </main>
        <FooterMain4 />
        <div className="controller-page-scroll"></div>
        <CookiesWrap2 />
      </div>
    </div>
    <div id="teleports"></div>
    </>
  );
}
