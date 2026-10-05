import A from "../lib/A.jsx";

// cookiesWrap — the section's real markup, read from the rendered page (route /blog/infrastructure, section 3).
export default function CookiesWrap4() {
  return (
    <div id="cookiesWrap" className="cookies-wrapper" style={{ "translate": "none", "rotate": "none", "scale": "none", "transform": "translate(0px, 0px)", "opacity": "1", "visibility": "inherit" }} data-clone-section="CookiesWrap4">
      <div className="message" data-reveal="">
        <p data-reveal="">
          {"This site uses "}
          <A href="/legal/privacy" className="">cookies</A>
          .
        </p>
        <div className="close" data-reveal="">Accept</div>
      </div>
    </div>
  );
}
