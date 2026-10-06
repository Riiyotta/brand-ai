// IA section(s): content.module-news (ia/ia.json, design-repo/sections/)
// module-news — the section's real markup, read from the rendered page (route /company, section 6).
export default function ModuleNews2() {
  return (
    <section className="module-news is-grid module" data-scheme="light" data-next-scheme="light" data-prev-scheme="light" module-index="5" data-scroll="false" data-hidden="false" data-clone-section="ModuleNews2">
      <div className="module-news-inner">
        <div className="textBlock module-news-textBlock is-only-headline is-no-paragraph" data-reveal="">
          <div className="textBlock-inner" data-reveal="">
            <h3 className="headline" data-reveal="">Updates and insights</h3>
          </div>
        </div>
        <div className="module-news-posts-wrapper"></div>
      </div>
    </section>
  );
}
