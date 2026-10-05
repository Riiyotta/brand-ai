import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import Header6 from "../sections/Header6.jsx";
import MainInner from "../sections/MainInner.jsx";
import FooterMain6 from "../sections/FooterMain6.jsx";
import CookiesWrap from "../sections/CookiesWrap.jsx";
import css0 from "../styles/inline-27.css?inline"; // only this page loads it
import css1 from "../styles/inline-10.css?inline"; // only this page loads it
import css2 from "../styles/inline-44.css?inline"; // only this page loads it
import css3 from "../styles/inline-45.css?inline"; // only this page loads it
import css4 from "../styles/inline-13.css?inline"; // only this page loads it
import css5 from "../styles/inline-46.css?inline"; // only this page loads it
import css6 from "../styles/inline-47.css?inline"; // only this page loads it

// Route /book-a-demo — 4 section(s), in page order.
export default function BookADemo() {
  usePageChrome({ title: "Book a Personalized brand.ai Demo for Your Team | brand.ai", html: { "lang": "en", "class": "is-dark", "style": "--footer-dif: 0px; --footer-height: 28px;" }, body: { "style": "" } });
  return (
    <>
      <style>{css0}</style>
      <style>{css1}</style>
      <style>{css2}</style>
      <style>{css3}</style>
      <style>{css4}</style>
      <style>{css5}</style>
      <style>{css6}</style>
    <div id="__nuxt">
      <div id="layout">
        <Header6 />
        <main id="main" role="main">
          <MainInner />
        </main>
        <FooterMain6 />
        <div className="controller-page-scroll"></div>
        <CookiesWrap />
      </div>
    </div>
    <div id="teleports"></div>
    {" "}
    {" "}
    </>
  );
}
