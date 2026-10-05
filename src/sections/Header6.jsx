import A from "../lib/A.jsx";

// header — the section's real markup, read from the rendered page (route /book-a-demo, section 0; shared by 9 routes).
export default function Header6() {
  return (
    <header className="header header-main" data-clone-section="Header6">
      <nav className="header-nav" data-flip-id="auto-1" data-reveal="">
        <div className="header-nav-top">
          <A href="/" className="header-nav-logo" aria-label="brand.ai">
            <div className="logo-sprite" style={{ "backgroundPosition": "100% 0%" }}></div>
            <span>brand.ai</span>
          </A>
          <ul className="nav-top" data-flip-id="auto-2" data-reveal="">
            <li className="has-submenu" data-reveal="">
              <button id="nav-trigger-89009017eae1" type="button" className="button-clear" aria-expanded="false" aria-controls="nav-submenu-89009017eae1" data-reveal="">Product</button>
            </li>
            <li className="has-submenu" data-reveal="">
              <button id="nav-trigger-6324c340ad2c" type="button" className="button-clear" aria-expanded="false" aria-controls="nav-submenu-6324c340ad2c" data-reveal="">Solutions</button>
            </li>
            <li className="" data-reveal="">
              <A href="/security" className="button-clear" data-reveal="">Security</A>
            </li>
            <li className="" data-reveal="">
              <A href="/company" className="button-clear" data-reveal="">Company</A>
            </li>
            <li className="" data-reveal="">
              <A href="/careers" className="button-clear" data-reveal="">Careers</A>
            </li>
            <li className="" data-reveal="">
              <A href="/blog" className="button-clear" data-reveal="">Blog</A>
            </li>
            <li className="push-right" data-reveal="">
              <a target="_blank" rel="noopener" className="button-clear is-app-link" data-reveal="">Log in</a>
            </li>
            <li className="" data-reveal="">
              <div role="button" tabIndex="0" className="button-clear button-solid" data-reveal="">
                {" "}
                Book a demo
                {" "}
              </div>
            </li>
          </ul>
        </div>
        <div className="header-submenu-wrapper" style={{ "--h-width": "941px" }}>
          {" "}
          {" "}
          {" "}
          {" "}
          {" "}
          {" "}
          {" "}
          {" "}
          {" "}
          {" "}
          {" "}
          {" "}
          {" "}
          {" "}
          {" "}
          {" "}
          {" "}
          {" "}
          {" "}
          {" "}
          {" "}
          {" "}
        </div>
      </nav>
    </header>
  );
}
