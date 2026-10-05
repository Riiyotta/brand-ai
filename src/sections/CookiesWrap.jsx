import A from "../lib/A.jsx";

// cookiesWrap — the section's real markup, read from the rendered page (route /, section 12; shared by 22 routes).
export default function CookiesWrap() {
  return (
    <div id="cookiesWrap" className="cookies-wrapper" data-reveal="" data-clone-section="CookiesWrap">
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
