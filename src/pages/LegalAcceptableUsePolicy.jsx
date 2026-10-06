import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import Header6 from "../sections/Header6.jsx";
import MainInner4 from "../sections/MainInner4.jsx";
import FooterMain14 from "../sections/FooterMain14.jsx";
import css0 from "../styles/inline-54.css?inline"; // only this page loads it
import css1 from "../styles/inline-19.css?inline"; // only this page loads it
import css2 from "../styles/inline-55.css?inline"; // only this page loads it

// Route /legal/acceptable-use-policy — 3 section(s), in page order.
export default function LegalAcceptableUsePolicy() {
  usePageChrome({ title: "Acceptable Use Policy | brand.ai", html: { "lang": "en", "style": "--footer-dif: 0px; --footer-height: 900px;" }, body: { "style": "" } });
  return (
    <>
      <style>{css0}</style>
      <style>{css1}</style>
      <style>{css2}</style>
    <div id="__nuxt">
      <div id="layout">
        <Header6 />
        <main id="main" role="main">
          <MainInner4 />
        </main>
        <FooterMain14 />
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
