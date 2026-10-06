// IA section(s): hero.main-inner (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// main-inner — the section's real markup, read from the rendered page (route /blog/infrastructure, section 1).
export default function MainInner13() {
  return (
    <div id="main-inner" data-clone-section="MainInner13">
      <div className="page page-newsroom">
        <div className="page-inner">
          <header className="page-header">
            <h1 className="page-title">Blog</h1>
          </header>
          <section className="page-content">
            <div className="page-newsroom-slug">
              <div className="newsroom-grid">
                <div>
                  <div className="newsroom-filters" aria-label="Filter news">
                    <div className="newsroom-filters-inner">
                      <div className="newsroom-filters-tags">
                        <A href="/blog" className="router-link-active newsroom-filters-tag is-all" role="button">{" All "}</A>
                        <A aria-current="page" href="/blog/infrastructure" className="router-link-active router-link-exact-active newsroom-filters-tag is-active" role="button">Infrastructure</A>
                        <A href="/blog/insights" className="newsroom-filters-tag" role="button">Insights</A>
                        <A href="/blog/product" className="newsroom-filters-tag" role="button">Product</A>
                        <A href="/blog/company" className="newsroom-filters-tag" role="button">Company</A>
                        <A href="/blog/interviews" className="newsroom-filters-tag" role="button">Interviews</A>
                      </div>
                    </div>
                  </div>
                  <div className="newsroom-grid-inner">
                    <A href="/blog/post/why-most-ai-pilots-never-leave-the-lab" className="news-card">
                      <div className="news-card-media">
                        <div className="media image" data-orientation="landscape">
                          <img className=" lazyloaded" data-sizes="false" sizes="false" width="1620" height="1620" src="/_ext/cdn.sanity.io/images/3zwn2ers/fullsite/5e6c110d1ab85a685d7e92f604f45220010e42a3-1620x1620__b31158bd.png" alt="" fetchPriority="auto" srcSet="/_ext/cdn.sanity.io/images/3zwn2ers/fullsite/5e6c110d1ab85a685d7e92f604f45220010e42a3-1620x1620__a80b8a21.png 200w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/5e6c110d1ab85a685d7e92f604f45220010e42a3-1620x1620__776fcd47.png 400w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/5e6c110d1ab85a685d7e92f604f45220010e42a3-1620x1620__c9d274c0.png 600w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/5e6c110d1ab85a685d7e92f604f45220010e42a3-1620x1620__7b2bace0.png 800w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/5e6c110d1ab85a685d7e92f604f45220010e42a3-1620x1620__20ab9b9d.png 1000w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/5e6c110d1ab85a685d7e92f604f45220010e42a3-1620x1620__520c86ad.png 1200w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/5e6c110d1ab85a685d7e92f604f45220010e42a3-1620x1620__0ff6edc9.png 1400w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/5e6c110d1ab85a685d7e92f604f45220010e42a3-1620x1620__b31158bd.png 1600w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/5e6c110d1ab85a685d7e92f604f45220010e42a3-1620x1620__07385d44.png 1620w" />
                          {" "}
                          {" "}
                        </div>
                      </div>
                      <div className="news-card-content">
                        <div className="news-card-title">Why most AI pilots never leave the lab</div>
                        <div className="news-card-meta">
                          <div className="news-tag">Infrastructure</div>
                          <div className="news-date">Apr 2026</div>
                        </div>
                      </div>
                    </A>
                    <A href="/blog/post/brand-engineers-the-role-that-didn-t-exist-until-now" className="news-card">
                      <div className="news-card-media">
                        <div className="media video mux" data-orientation="false">
                          <video autoPlay loop playsInline preload="metadata" poster="/_ext/image.mux.com/uxGH4I01t2nFTyUrMCiwRiv4WP8025c00qWmZefKQN51Kg/thumbnail__84f7228a.jpg" className="" width="100" height="100" fetchPriority="auto" src="/_ext/stream.mux.com/uxGH4I01t2nFTyUrMCiwRiv4WP8025c00qWmZefKQN51Kg/high.mp4" muted></video>
                        </div>
                      </div>
                      <div className="news-card-content">
                        <div className="news-card-title">{"Brand engineers: The role that didn't exist until now"}</div>
                        <div className="news-card-meta">
                          <div className="news-tag">Infrastructure</div>
                          <div className="news-date">Mar 2026</div>
                        </div>
                      </div>
                    </A>
                    <A href="/blog/post/how-brand-engineering-is-shaping-modern-brands" className="news-card">
                      <div className="news-card-media">
                        <div className="media video mux" data-orientation="false">
                          <video autoPlay loop playsInline preload="metadata" poster="/_ext/image.mux.com/c400iuZDtrPy8Ghz2Qjqxx4y2ki7QW6Mx02024ZC013uCvI/thumbnail__84f7228a.jpg" className="" width="100" height="100" fetchPriority="auto" src="/_ext/stream.mux.com/c400iuZDtrPy8Ghz2Qjqxx4y2ki7QW6Mx02024ZC013uCvI/high.mp4" muted></video>
                        </div>
                      </div>
                      <div className="news-card-content">
                        <div className="news-card-title">{"How brand engineering is shaping modern brands "}</div>
                        <div className="news-card-meta">
                          <div className="news-tag">Infrastructure</div>
                          <div className="news-date">Mar 2026</div>
                        </div>
                      </div>
                    </A>
                    <A href="/blog/post/every-brand-needs-a-living-operating-system-not-a-pdf" className="news-card">
                      <div className="news-card-media">
                        <div className="media image" data-orientation="landscape">
                          <img className=" lazyloaded" data-sizes="false" sizes="false" width="1620" height="1620" src="/_ext/cdn.sanity.io/images/3zwn2ers/fullsite/1dd64d983858cb401cd131d402b6e406d4d47f63-1620x1620__b31158bd.png" alt="" fetchPriority="auto" srcSet="/_ext/cdn.sanity.io/images/3zwn2ers/fullsite/1dd64d983858cb401cd131d402b6e406d4d47f63-1620x1620__a80b8a21.png 200w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/1dd64d983858cb401cd131d402b6e406d4d47f63-1620x1620__776fcd47.png 400w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/1dd64d983858cb401cd131d402b6e406d4d47f63-1620x1620__c9d274c0.png 600w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/1dd64d983858cb401cd131d402b6e406d4d47f63-1620x1620__7b2bace0.png 800w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/1dd64d983858cb401cd131d402b6e406d4d47f63-1620x1620__20ab9b9d.png 1000w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/1dd64d983858cb401cd131d402b6e406d4d47f63-1620x1620__520c86ad.png 1200w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/1dd64d983858cb401cd131d402b6e406d4d47f63-1620x1620__0ff6edc9.png 1400w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/1dd64d983858cb401cd131d402b6e406d4d47f63-1620x1620__b31158bd.png 1600w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/1dd64d983858cb401cd131d402b6e406d4d47f63-1620x1620__07385d44.png 1620w" />
                          {" "}
                          {" "}
                        </div>
                      </div>
                      <div className="news-card-content">
                        <div className="news-card-title">Every brand needs a living operating system, not a PDF</div>
                        <div className="news-card-meta">
                          <div className="news-tag">Infrastructure</div>
                          <div className="news-date">Jan 2026</div>
                        </div>
                      </div>
                    </A>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
