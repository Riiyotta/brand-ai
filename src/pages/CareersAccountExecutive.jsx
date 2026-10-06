import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import Header6 from "../sections/Header6.jsx";
import MainInner12 from "../sections/MainInner12.jsx";
import FooterMain21 from "../sections/FooterMain21.jsx";
import css0 from "../styles/16-_slug_.KoadpnJY.css?inline"; // only this page loads it
import css1 from "../styles/inline-56.css?inline"; // only this page loads it
import css2 from "../styles/inline-19.css?inline"; // only this page loads it
import css3 from "../styles/inline-55.css?inline"; // only this page loads it
import css4 from "../styles/inline-57.css?inline"; // only this page loads it

// Route /careers/account-executive — 3 section(s), in page order.
export default function CareersAccountExecutive() {
  usePageChrome({ title: "Account Executive, Enterprise - Remote | brand.ai", html: { "lang": "en", "style": "--footer-dif: 0px; --footer-height: 900px;" }, body: { "style": "" } });
  return (
    <>
      <style>{css0}</style>
      <style>{css1}</style>
      <style>{css2}</style>
      <style>{css3}</style>
      <style>{css4}</style>
    <div id="__nuxt">
      <div id="layout">
        <Header6 />
        <main id="main" role="main">
          <MainInner12 />
        </main>
        <FooterMain21 />
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
