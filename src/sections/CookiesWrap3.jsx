import A from "../lib/A.jsx";

// cookiesWrap — the section's real markup, read from the rendered page (route /legal/privacy, section 3).
export default function CookiesWrap3() {
  return (
    <div id="cookiesWrap" className="cookies-wrapper" data-reveal="" data-clone-section="CookiesWrap3">
      <div className="message" data-reveal="">
        <p data-reveal="">
          {"This site uses "}
          <A aria-current="page" href="/legal/privacy" className="router-link-active router-link-exact-active">cookies</A>
          .
        </p>
        <div className="close" data-reveal="">Accept</div>
      </div>
    </div>
  );
}
