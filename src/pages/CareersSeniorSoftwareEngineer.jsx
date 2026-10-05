import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import Header6 from "../sections/Header6.jsx";
import MainInner5 from "../sections/MainInner5.jsx";
import FooterMain15 from "../sections/FooterMain15.jsx";
import CookiesWrap from "../sections/CookiesWrap.jsx";
import css0 from "../styles/16-_slug_.KoadpnJY.css?inline"; // only this page loads it
import css1 from "../styles/inline-56.css?inline"; // only this page loads it
import css2 from "../styles/inline-19.css?inline"; // only this page loads it
import css3 from "../styles/inline-55.css?inline"; // only this page loads it
import css4 from "../styles/inline-57.css?inline"; // only this page loads it

// Route /careers/senior-software-engineer — 4 section(s), in page order.
export default function CareersSeniorSoftwareEngineer() {
  usePageChrome({ title: "Senior Software Engineer - Remote | brand.ai", html: { "lang": "en", "style": "--footer-dif: 0px; --footer-height: 900px;" }, body: { "style": "" } });
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
          <MainInner5 />
        </main>
        <FooterMain15 />
        <div className="controller-page-scroll"></div>
        <CookiesWrap />
      </div>
    </div>
    <div id="teleports"></div>
    </>
  );
}
