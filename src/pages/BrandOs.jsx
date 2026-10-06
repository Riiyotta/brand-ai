import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import Header7 from "../sections/Header7.jsx";
import ModuleCoverStacked4 from "../sections/ModuleCoverStacked4.jsx";
import ModuleHeadlineFloating from "../sections/ModuleHeadlineFloating.jsx";
import TextBlock from "../sections/TextBlock.jsx";
import ModuleMediaFlexibleMediaWrapper from "../sections/ModuleMediaFlexibleMediaWrapper.jsx";
import TextBlock2 from "../sections/TextBlock2.jsx";
import ModuleMediaFlexibleMediaWrapper2 from "../sections/ModuleMediaFlexibleMediaWrapper2.jsx";
import Newsroom from "../sections/Newsroom.jsx";
import ConnectedApplications from "../sections/ConnectedApplications.jsx";
import ModuleFeaturesInline2 from "../sections/ModuleFeaturesInline2.jsx";
import ModuleCenteredHeadline3 from "../sections/ModuleCenteredHeadline3.jsx";
import ModuleFaq2 from "../sections/ModuleFaq2.jsx";
import ModuleDownload from "../sections/ModuleDownload.jsx";
import ModuleNews3 from "../sections/ModuleNews3.jsx";
import FooterMain7 from "../sections/FooterMain7.jsx";
import css0 from "../styles/inline-27.css?inline"; // only this page loads it
import css1 from "../styles/inline-10.css?inline"; // only this page loads it
import css2 from "../styles/inline-11.css?inline"; // only this page loads it
import css3 from "../styles/inline-12.css?inline"; // only this page loads it
import css4 from "../styles/inline-13.css?inline"; // only this page loads it
import css5 from "../styles/inline-48.css?inline"; // only this page loads it
import css6 from "../styles/inline-49.css?inline"; // only this page loads it
import css7 from "../styles/inline-18.css?inline"; // only this page loads it
import css8 from "../styles/inline-19.css?inline"; // only this page loads it
import css9 from "../styles/inline-31.css?inline"; // only this page loads it
import css10 from "../styles/inline-16.css?inline"; // only this page loads it
import css11 from "../styles/inline-33.css?inline"; // only this page loads it
import css12 from "../styles/inline-34.css?inline"; // only this page loads it
import css13 from "../styles/inline-35.css?inline"; // only this page loads it
import css14 from "../styles/inline-25.css?inline"; // only this page loads it
import css15 from "../styles/inline-23.css?inline"; // only this page loads it
import css16 from "../styles/inline-24.css?inline"; // only this page loads it

// Route /brand-os — 15 section(s), in page order.
export default function BrandOs() {
  usePageChrome({ title: "Turn brand guidelines into intelligent systems | brand.ai", html: { "lang": "en", "style": "--footer-dif: 0px; --footer-height: 28px;" }, body: { "style": "" } });
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
        <Header7 />
        <main id="main" role="main">
          <div id="main-inner">
            <div className="page page-slug">
              <div className="modules-wrapper">
                <ModuleCoverStacked4 />
                <ModuleHeadlineFloating />
                <section className="module-mediaFlexible module" data-scheme="light" data-next-scheme="light" data-prev-scheme="light" module-index="2" data-scroll="true" data-scroll-anchor="brand-foundation" id="brand-foundation" data-hidden="false">
                  <TextBlock />
                  <ModuleMediaFlexibleMediaWrapper />
                </section>
                <section className="module-mediaFlexible module" data-scheme="light" data-next-scheme="light" data-prev-scheme="light" module-index="3" data-scroll="true" data-scroll-anchor="brand-ontology" id="brand-ontology" data-hidden="false">
                  <TextBlock2 />
                  <ModuleMediaFlexibleMediaWrapper2 />
                </section>
                <Newsroom />
                <ConnectedApplications />
                <ModuleFeaturesInline2 />
                <ModuleCenteredHeadline3 />
                <ModuleFaq2 />
                <ModuleDownload />
                <ModuleNews3 />
              </div>
            </div>
          </div>
        </main>
        <FooterMain7 />
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
