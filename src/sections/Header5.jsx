import A from "../lib/A.jsx";

// header — the section's real markup, read from the rendered page (route /blog, section 0).
export default function Header5() {
  return (
    <header className="header header-main" data-clone-section="Header5">
      <nav className="header-nav" data-flip-id="auto-1">
        <div className="header-nav-top">
          <A href="/" className="header-nav-logo" aria-label="brand.ai">
            <div className="logo-sprite" style={{ "backgroundPosition": "100% 0%" }}></div>
            <span>brand.ai</span>
          </A>
          <ul className="nav-top" data-flip-id="auto-2" style={{ "visibility": "inherit", "opacity": "1" }}>
            <li className="has-submenu">
              <button id="nav-trigger-89009017eae1" type="button" className="button-clear" aria-expanded="false" aria-controls="nav-submenu-89009017eae1">Product</button>
            </li>
            <li className="has-submenu">
              <button id="nav-trigger-6324c340ad2c" type="button" className="button-clear" aria-expanded="false" aria-controls="nav-submenu-6324c340ad2c">Solutions</button>
            </li>
            <li className="">
              <A href="/security" className="button-clear">Security</A>
            </li>
            <li className="">
              <A href="/company" className="button-clear">Company</A>
            </li>
            <li className="">
              <A href="/careers" className="button-clear">Careers</A>
            </li>
            <li className="">
              <A aria-current="page" href="/blog" className="router-link-active router-link-exact-active button-clear">Blog</A>
            </li>
            <li className="push-right">
              <a target="_blank" rel="noopener" className="button-clear is-app-link">Log in</a>
            </li>
            <li className="">
              <div role="button" tabIndex="0" className="button-clear button-solid">
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
