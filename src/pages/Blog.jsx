import A from "../lib/A.jsx";
import usePageChrome from "../lib/usePageChrome.js";
import Header5 from "../sections/Header5.jsx";
import NewsCardFeatured from "../sections/NewsCardFeatured.jsx";
import FilterNews from "../sections/FilterNews.jsx";
import NewsroomGridInner from "../sections/NewsroomGridInner.jsx";
import FooterMain5 from "../sections/FooterMain5.jsx";
import CookiesWrap2 from "../sections/CookiesWrap2.jsx";
import css0 from "../styles/14-_slug_.C1n5o3pd.css?inline"; // only this page loads it
import css1 from "../styles/15-_slug_.BC6yS-M8.css?inline"; // only this page loads it
import css2 from "../styles/inline-39.css?inline"; // only this page loads it
import css3 from "../styles/inline-40.css?inline"; // only this page loads it
import css4 from "../styles/inline-24.css?inline"; // only this page loads it
import css5 from "../styles/inline-41.css?inline"; // only this page loads it
import css6 from "../styles/inline-13.css?inline"; // only this page loads it
import css7 from "../styles/inline-42.css?inline"; // only this page loads it
import css8 from "../styles/inline-43.css?inline"; // only this page loads it

// Route /blog — 6 section(s), in page order.
export default function Blog() {
  usePageChrome({ title: "Insights on brand strategy and AI | brand.ai", html: { "lang": "en", "style": "--footer-dif: 0px; --footer-height: 900px;" }, body: { "style": "" } });
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
    <div id="__nuxt">
      <div id="layout">
        <Header5 />
        <main id="main" role="main">
          <div id="main-inner">
            <div className="page page-newsroom">
              <div className="page-inner">
                <header className="page-header">
                  <h1 className="page-title">Blog</h1>
                </header>
                <section className="page-content">
                  <div className="page-newsroom-index">
                    <div className="newsroom-grid">
                      <div>
                        <NewsCardFeatured />
                        <FilterNews />
                        <NewsroomGridInner />
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
        <FooterMain5 />
        <div className="controller-page-scroll"></div>
        <CookiesWrap2 />
      </div>
    </div>
    <div id="teleports"></div>
    </>
  );
}
