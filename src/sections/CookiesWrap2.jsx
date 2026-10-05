import A from "../lib/A.jsx";

// cookiesWrap — the section's real markup, read from the rendered page (route /careers, section 7; shared by 7 routes).
export default function CookiesWrap2() {
  return (
    <div id="cookiesWrap" className="cookies-wrapper" style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate(0px, 0px)", "opacity": "1", "visibility": "inherit" }} data-clone-section="CookiesWrap2">
      <div className="message">
        <p>
          {"This site uses "}
          <A href="/legal/privacy" className="">cookies</A>
          .
        </p>
        <div className="close">Accept</div>
      </div>
    </div>
  );
}
