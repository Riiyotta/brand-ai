// textBlock — the section's real markup, read from the rendered page (route /brand-os, section 3).
export default function TextBlock() {
  return (
    <div className="textBlock module-mediaFlexible-textBlock has-emphasis" data-reveal="" data-clone-section="TextBlock">
      <div className="textBlock-inner" data-reveal="">
        <h3 className="headline headline--has-emphasis" data-reveal="">
          <div className="rich-text rich-text-format" data-reveal="">
            <p data-reveal="">
              <strong data-reveal="">Brand Foundation</strong>
              {""}
              <br />
              Your brand becomes
              <br />
              structured intelligence
            </p>
          </div>
        </h3>
        <div className="paragraph" data-reveal="">
          <div className="rich-text rich-text-format" data-reveal="">
            <p data-reveal="">{"Brand.ai automatically turns your guidelines and documents into machine-readable rules. So every team always knows exactly what's on brand."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
