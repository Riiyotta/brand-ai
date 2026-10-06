// IA section(s): shell.header (ia/ia.json, design-repo/sections/)
import A from "../lib/A.jsx";

// header — the section's real markup, read from the rendered page (route /home, section 0).
export default function Header16() {
  return (
    <header className="header header-main" data-clone-section="Header16">
      <nav className="header-nav" data-flip-id="auto-1" data-reveal="">
        <div className="header-nav-top">
          <A href="/" className="header-nav-logo" aria-label="brand.ai">
            <div className="logo-sprite" style={{ "backgroundPosition": "100% 0%" }}></div>
            <span>brand.ai</span>
          </A>
          <ul className="nav-top" data-flip-id="auto-2" data-reveal="">
            <li className="has-submenu">
              <button id="nav-trigger-89009017eae1" type="button" className="button-clear" aria-expanded="false" aria-controls="nav-submenu-89009017eae1">
                Product
                <div className="header-submenu-item" id="nav-submenu-89009017eae1" data-key="89009017eae1" data-activemenu="89009017eae1" data-visible="true" data-hover-panel="">
                  <div className="submenu-item-inner">
                    <div className="submenu-item-column w-50">
                      <div className="submenu-item-column-item">
                        <A href="/product" className="submenu-item-column-item-inner">
                          <div className="title">Product Overview</div>
                          <div className="description">Your Brand OS</div>
                          <div className="media image" data-orientation="landscape">
                            <img className=" lazyloaded" data-sizes="false" sizes="false" width="1340" height="720" src="/_ext/cdn.sanity.io/images/3zwn2ers/fullsite/2189b6612b29be822ba07ada37a24e3fa3d9c00c-1340x720__b31158bd.png" alt="" fetchPriority="auto" srcSet="/_ext/cdn.sanity.io/images/3zwn2ers/fullsite/2189b6612b29be822ba07ada37a24e3fa3d9c00c-1340x720__b31158bd.png 1600w" />
                            {" "}
                            {" "}
                          </div>
                        </A>
                      </div>
                    </div>
                    <div className="submenu-item-column w-50">
                      <div className="submenu-item-column-item">
                        <A href="/brand-os" className="submenu-item-column-item-inner">
                          <div className="title">Brand OS</div>
                          <div className="description">Your brand, codified</div>
                        </A>
                      </div>
                      <div className="submenu-item-column-item">
                        <A href="/brand-studio" className="submenu-item-column-item-inner">
                          <div className="title">Brand Studio</div>
                          <div className="description">Plan and create in one canvas</div>
                        </A>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
            <li className="has-submenu">
              <button id="nav-trigger-6324c340ad2c" type="button" className="button-clear" aria-expanded="false" aria-controls="nav-submenu-6324c340ad2c">
                Solutions
                <div className="header-submenu-item" id="nav-submenu-6324c340ad2c" data-key="6324c340ad2c" data-activemenu="6324c340ad2c" data-visible="true" data-hover-panel="">
                  <div className="submenu-item-inner">
                    <div className="submenu-item-column w-50">
                      <div className="submenu-item-column-item">
                        <A href="/teams" className="submenu-item-column-item-inner">
                          <div className="title">For Teams</div>
                          <div className="media image" data-orientation="landscape">
                            <img className=" lazyloaded" data-sizes="false" sizes="false" width="739" height="684" src="/_ext/cdn.sanity.io/images/3zwn2ers/fullsite/0a5ac5adc3c51293b48aa0c3ac0c1f4131970b94-739x684__4cbfb401.png" alt="" fetchPriority="auto" srcSet="/_ext/cdn.sanity.io/images/3zwn2ers/fullsite/0a5ac5adc3c51293b48aa0c3ac0c1f4131970b94-739x684__4cbfb401.png 1800w" />
                            {" "}
                            {" "}
                          </div>
                        </A>
                      </div>
                    </div>
                    <div className="submenu-item-column w-50">
                      <div className="submenu-item-column-item">
                        <A href="/enterprise" className="submenu-item-column-item-inner">
                          <div className="title">{"For Enterprise "}</div>
                          <div className="media image" data-orientation="landscape">
                            <img className=" lazyloaded" data-sizes="false" sizes="false" width="739" height="684" src="/_ext/cdn.sanity.io/images/3zwn2ers/fullsite/2384ba12de2d410f2b58ae56b6fafae0265fc54b-739x684__4cbfb401.png" alt="" fetchPriority="auto" srcSet="/_ext/cdn.sanity.io/images/3zwn2ers/fullsite/2384ba12de2d410f2b58ae56b6fafae0265fc54b-739x684__4cbfb401.png 1800w" />
                            {" "}
                            {" "}
                          </div>
                        </A>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
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
              <A href="/blog" className="button-clear">Blog</A>
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
