import A from "../lib/A.jsx";

// news-card-featured — the section's real markup, read from the rendered page (route /blog, section 1).
export default function NewsCardFeatured() {
  return (
    <A href="/blog/post/welcome-to-brand-ai" className="news-card-featured newsroom-grid-featured" data-clone-section="NewsCardFeatured">
      <div className="news-card-media">
        <div className="media image" data-orientation="landscape">
          <img className=" lazyloaded" data-sizes="false" sizes="false" width="4096" height="2304" src="/_ext/cdn.sanity.io/images/3zwn2ers/fullsite/6e759f73fbc6850addbc26b1be8cb24e9eb30a0f-4096x2304__b31158bd.png" alt="Abstract 3D rendering of glossy black, bubble-like shapes arranged symmetrically on a dark background, forming a fluid, organic pattern." fetchPriority="auto" srcSet="/_ext/cdn.sanity.io/images/3zwn2ers/fullsite/6e759f73fbc6850addbc26b1be8cb24e9eb30a0f-4096x2304__a80b8a21.png 200w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/6e759f73fbc6850addbc26b1be8cb24e9eb30a0f-4096x2304__776fcd47.png 400w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/6e759f73fbc6850addbc26b1be8cb24e9eb30a0f-4096x2304__c9d274c0.png 600w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/6e759f73fbc6850addbc26b1be8cb24e9eb30a0f-4096x2304__7b2bace0.png 800w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/6e759f73fbc6850addbc26b1be8cb24e9eb30a0f-4096x2304__20ab9b9d.png 1000w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/6e759f73fbc6850addbc26b1be8cb24e9eb30a0f-4096x2304__520c86ad.png 1200w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/6e759f73fbc6850addbc26b1be8cb24e9eb30a0f-4096x2304__0ff6edc9.png 1400w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/6e759f73fbc6850addbc26b1be8cb24e9eb30a0f-4096x2304__b31158bd.png 1600w, /_ext/cdn.sanity.io/images/3zwn2ers/fullsite/6e759f73fbc6850addbc26b1be8cb24e9eb30a0f-4096x2304__4cbfb401.png 1800w" />
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
  );
}
