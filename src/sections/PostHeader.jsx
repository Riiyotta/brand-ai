// IA section(s): shell.post-header (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// post-header — the section's real markup, read from the rendered page (route /blog/post/brands-of-loving-grace-and-humans-who-use-ai-for-good, section 1).
export default function PostHeader() {
  return (
    <header className="post-header" data-v-3d1fee30="" data-clone-section="PostHeader">
      <div className="post-meta" data-v-3d1fee30="" data-reveal="">
        <div className="post-reading-time" data-v-3d1fee30="" data-reveal="">
          26m read
          <span className="post-meta-separator" data-v-3d1fee30="" data-reveal="">{" • "}</span>
        </div>
        <div className="post-tag" data-v-3d1fee30="" data-reveal="">
          <A href="/blog/insights" className="" data-v-3d1fee30="" data-reveal="">Insights</A>
          <span className="post-meta-separator" data-v-3d1fee30="" data-reveal="">{" • "}</span>
        </div>
        <div className="post-date" data-v-3d1fee30="" data-reveal="">Feb 2026</div>
      </div>
      <h1 className="post-title" data-v-3d1fee30="" data-reveal="">Brands of loving grace, and humans who use AI for good</h1>
      <div className="news-keyCollaborators post-keyCollaborators" data-v-3d1fee30="" data-reveal="">
        <div className="news-keyCollaborators-inner" data-reveal="">
          <div className="news-keyCollaborators-item" data-reveal="">
            <div className="media image news-keyCollaborators-item-image" data-orientation="landscape" data-reveal="">
              <img className=" lazyloaded" data-sizes="false" sizes="false" width="800" height="800" alt="" fetchPriority="auto" data-reveal="" />
            </div>
            <div className="news-keyCollaborators-item-author" data-reveal="">
              <span className="name" data-reveal="">Michael Carter</span>
              <span className="position" data-reveal="">{"Founder & CEO, brand.ai"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="post-featured-image" data-v-3d1fee30="">
        <div className="media video mux" data-orientation="false" data-v-3d1fee30="">
          <video autoPlay loop muted playsInline preload="metadata" className="" width="1600" height="900" fetchPriority="auto"></video>
        </div>
      </div>
    </header>
  );
}
