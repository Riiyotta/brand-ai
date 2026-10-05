import A from "../lib/A.jsx";

// main-inner — the section's real markup, read from the rendered page (route /careers/senior-software-engineer, section 1).
export default function MainInner5() {
  return (
    <div id="main-inner" data-clone-section="MainInner5">
      <div className="page page-career">
        <div className="page-wrapper">
          <div className="page-inner">
            <header className="career-header">
              <div className="career-header-inner">
                <div className="career-location">Remote (USA and Australia)</div>
                <h1 className="career-title">Senior Software Engineer</h1>
                <div className="career-tagLine">Full-time • Reports to VP, Product</div>
                <div className="career-meta">
                  <a href="mailto:careers@brand.ai" className="button-cta">Apply</a>
                </div>
              </div>
            </header>
            <div className="career-content">
              <div className="rich-text rich-text-format">
                <h2>About us</h2>
                <p>{"brand.ai sits at the intersection of artificial intelligence and brand identity. We're building technology that fundamentally reimagines how brands evolve and express themselves in the world. Our platform enables brands to develop coherent identities that adapt and respond to the rapidly shifting technologically driven cultural landscape while maintaining authenticity."}</p>
                <p>{"We're not just another martech tool: we're building a layer 1 platform that becomes the foundational infrastructure for how brands manage and extend their DNA in an AI-driven world."}</p>
                <h2>About you</h2>
                <p>{"We're seeking a Senior Software Engineer to help design and build the infrastructure that powers AI-driven brand transformation. You combine deep technical fundamentals with genuine curiosity about how AI is reshaping creative work."}</p>
                <h2>{"What you'll do"}</h2>
                <ul _type="@list" _key="741574c432ea-parent" mode="html" level="1" index="6" isinline="false">
                  <li _key="741574c432ea" _type="block" level="1" listitem="bullet" index="0" isinline="false">Design and build scalable backend systems, APIs, and data pipelines for our AI-driven platform</li>
                  <li _key="47eee050f5ba" _type="block" level="1" listitem="bullet" index="1" isinline="false">Be part of architectural decisions and set standards for reliability, security, and performance</li>
                  <li _key="dc1f121fddd8" _type="block" level="1" listitem="bullet" index="2" isinline="false">Integrate and orchestrate LLMs and generative AI systems, including evaluation frameworks for brand consistency</li>
                  <li _key="d3de850c50a3" _type="block" level="1" listitem="bullet" index="3" isinline="false">Ship features that make complex AI capabilities feel effortless for creative professionals</li>
                  <li _key="9f3bfc4748a7" _type="block" level="1" listitem="bullet" index="4" isinline="false">Shape engineering culture as a senior early team member</li>
                </ul>
                <h2>{"What we're looking for"}</h2>
                <ul _type="@list" _key="61ac179c9fe6-parent" mode="html" level="1" index="8" isinline="false">
                  <li _key="61ac179c9fe6" _type="block" level="1" listitem="bullet" index="0" isinline="false">8+ years building and operating production systems</li>
                  <li _key="b8f0217bc64b" _type="block" level="1" listitem="bullet" index="1" isinline="false">Proficiency in modern backend languages (Python, TypeScript/Node.js, Go) plus frontend fluency (React, TypeScript)</li>
                  <li _key="a9ca6cd439ab" _type="block" level="1" listitem="bullet" index="2" isinline="false">Hands-on experience integrating LLMs and generative AI into production products</li>
                  <li _key="69a128626280" _type="block" level="1" listitem="bullet" index="3" isinline="false">Experience with cloud platforms, containerization, and database design</li>
                  <li _key="38ad8b996a26" _type="block" level="1" listitem="bullet" index="4" isinline="false">Startup mindset: autonomous, pragmatic, comfortable with ambiguity</li>
                  <li _key="17683a9e5ed0" _type="block" level="1" listitem="bullet" index="5" isinline="false">Genuine curiosity about AI, creativity, and brand work</li>
                </ul>
                <p>
                  <em>
                    {"Apply at "}
                    <a href="mailto:careers@brand.ai" className="richtext-link" _key="ddf8040ff882" _type="link" nofollow="false">careers@brand.ai</a>
                    {" with resume, GitHub or portfolio of technical work, and a brief note on why you're excited about brand.ai. We’re hiring in both USA and Australia."}
                  </em>
                </p>
              </div>
              <div className="career-back">
                <A href="/careers#careers" className="career-back-button">
                  <svg className="icon-chevron-left" width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="5.16693" y="9.66699" width="6.6" height="1.2" transform="rotate(-135 5.16693 9.66699)" fill="#262626" />
                    <rect x="6.01556" y="1.18164" width="6" height="1.2" transform="rotate(135 6.01556 1.18164)" fill="#262626" />
                  </svg>
                  <span>Back to Careers</span>
                </A>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
