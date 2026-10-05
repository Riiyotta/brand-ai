import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import Header7 from "../sections/Header7.jsx";
import ModuleCoverStacked5 from "../sections/ModuleCoverStacked5.jsx";
import ModuleHeadlineFloating2 from "../sections/ModuleHeadlineFloating2.jsx";
import Assistant from "../sections/Assistant.jsx";
import Canvas from "../sections/Canvas.jsx";
import Projects from "../sections/Projects.jsx";
import Brandcheck from "../sections/Brandcheck.jsx";
import ModuleDownload3 from "../sections/ModuleDownload3.jsx";
import ModuleFaq3 from "../sections/ModuleFaq3.jsx";
import ModuleNews4 from "../sections/ModuleNews4.jsx";
import FooterMain8 from "../sections/FooterMain8.jsx";
import CookiesWrap from "../sections/CookiesWrap.jsx";
import css0 from "../styles/inline-27.css?inline"; // only this page loads it
import css1 from "../styles/inline-10.css?inline"; // only this page loads it
import css2 from "../styles/inline-11.css?inline"; // only this page loads it
import css3 from "../styles/inline-12.css?inline"; // only this page loads it
import css4 from "../styles/inline-13.css?inline"; // only this page loads it
import css5 from "../styles/inline-48.css?inline"; // only this page loads it
import css6 from "../styles/inline-49.css?inline"; // only this page loads it
import css7 from "../styles/inline-18.css?inline"; // only this page loads it
import css8 from "../styles/inline-19.css?inline"; // only this page loads it
import css9 from "../styles/inline-25.css?inline"; // only this page loads it
import css10 from "../styles/inline-33.css?inline"; // only this page loads it
import css11 from "../styles/inline-34.css?inline"; // only this page loads it
import css12 from "../styles/inline-35.css?inline"; // only this page loads it
import css13 from "../styles/inline-23.css?inline"; // only this page loads it
import css14 from "../styles/inline-24.css?inline"; // only this page loads it

// Route /brand-studio — 12 section(s), in page order.
export default function BrandStudio() {
  usePageChrome({ title: "Where brand intelligence meets execution | brand.ai", html: { "lang": "en", "style": "--footer-dif: 0px; --footer-height: 28px;" }, body: { "style": "" } });
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
    <div id="__nuxt">
      <div id="layout">
        <Header7 />
        <main id="main" role="main">
          <div id="main-inner">
            <div className="page page-slug">
              <div className="modules-wrapper">
                <ModuleCoverStacked5 />
                <ModuleHeadlineFloating2 />
                <Assistant />
                <Canvas />
                <Projects />
                <Brandcheck />
                <ModuleDownload3 />
                <ModuleFaq3 />
                <ModuleNews4 />
              </div>
            </div>
          </div>
        </main>
        <FooterMain8 />
        <div className="controller-page-scroll"></div>
        <CookiesWrap />
      </div>
    </div>
    <div id="teleports"></div>
    </>
  );
}
