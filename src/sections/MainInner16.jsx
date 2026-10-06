// IA section(s): hero.main-inner (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// main-inner — the section's real markup, read from the rendered page (route /blog/company, section 1).
export default function MainInner16() {
  return (
    <div id="main-inner" data-clone-section="MainInner16">
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
                        <A href="/blog/infrastructure" className="newsroom-filters-tag" role="button">Infrastructure</A>
                        <A href="/blog/insights" className="newsroom-filters-tag" role="button">Insights</A>
                        <A href="/blog/product" className="newsroom-filters-tag" role="button">Product</A>
                        <A aria-current="page" href="/blog/company" className="router-link-active router-link-exact-active newsroom-filters-tag is-active" role="button">Company</A>
                        <A href="/blog/interviews" className="newsroom-filters-tag" role="button">Interviews</A>
                      </div>
                    </div>
                  </div>
                  <div className="newsroom-grid-inner">
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
                    <A href="/blog/post/welcome-to-brand-ai" className="news-card">
                      <div className="news-card-media">
                        <div className="media image" data-orientation="landscape">
                          <img className=" lazyloaded" data-sizes="false" sizes="false" width="1620" height="1620" src="/_ext/cdn.sanity.io/images/3zwn2ers/fullsite/543bf8f6353758569db43afc30ffcd9a554c1544-1620x1620__b31158bd.png" alt="Abstract 3D rendering of glossy black, interconnected droplet-like shapes forming a symmetrical, organic pattern on a dark background." fetchPriority="auto" srcSet="/_ext/cdn.sanity.io/images/3zwn2ers/fullsite/543bf8f6353758569db43afc30ffcd9a554c1544-1620x1620__a80b8a21.png 200w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/543bf8f6353758569db43afc30ffcd9a554c1544-1620x1620__776fcd47.png 400w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/543bf8f6353758569db43afc30ffcd9a554c1544-1620x1620__c9d274c0.png 600w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/543bf8f6353758569db43afc30ffcd9a554c1544-1620x1620__7b2bace0.png 800w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/543bf8f6353758569db43afc30ffcd9a554c1544-1620x1620__20ab9b9d.png 1000w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/543bf8f6353758569db43afc30ffcd9a554c1544-1620x1620__520c86ad.png 1200w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/543bf8f6353758569db43afc30ffcd9a554c1544-1620x1620__0ff6edc9.png 1400w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/543bf8f6353758569db43afc30ffcd9a554c1544-1620x1620__b31158bd.png 1600w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/543bf8f6353758569db43afc30ffcd9a554c1544-1620x1620__07385d44.png 1620w" />
                          {" "}
                          {" "}
                        </div>
                      </div>
                      <div className="news-card-content">
                        <div className="news-card-title">Welcome to brand.ai, the platform we always wanted</div>
                        <div className="news-card-meta">
                          <div className="news-tag">Company</div>
                          <div className="news-date">Dec 2025</div>
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
