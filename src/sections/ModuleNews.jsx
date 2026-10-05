// module-news — the section's real markup, read from the rendered page (route /, section 9; shared by 2 routes).
export default function ModuleNews() {
  return (
    <section className="module-news is-grid module" data-scheme="light" data-next-scheme="light" data-prev-scheme="light" module-index="8" data-scroll="false" data-hidden="false" data-clone-section="ModuleNews">
      <div className="module-news-inner">
        <div className="textBlock module-news-textBlock is-only-headline is-no-paragraph" data-reveal="">
          <div className="textBlock-inner" data-reveal="">
            <h4 className="headline" data-reveal="">Updates and insights</h4>
          </div>
        </div>
        <div className="module-news-posts-wrapper"></div>
      </div>
    </section>
  );
}
