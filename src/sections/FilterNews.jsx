import A from "../lib/A.jsx";

// Filter news — the section's real markup, read from the rendered page (route /blog, section 2).
export default function FilterNews() {
  return (
    <div className="newsroom-filters" aria-label="Filter news" data-clone-section="FilterNews">
      <div className="newsroom-filters-inner">
        <div className="newsroom-filters-tags">
          <A aria-current="page" href="/blog" className="router-link-active router-link-exact-active newsroom-filters-tag is-all is-active" role="button">{" All "}</A>
          <A href="/blog/infrastructure" className="newsroom-filters-tag" role="button">Infrastructure</A>
          <A href="/blog/insights" className="newsroom-filters-tag" role="button">Insights</A>
          <A href="/blog/product" className="newsroom-filters-tag" role="button">Product</A>
          <A href="/blog/company" className="newsroom-filters-tag" role="button">Company</A>
          <A href="/blog/interviews" className="newsroom-filters-tag" role="button">Interviews</A>
        </div>
      </div>
    </div>
  );
}
