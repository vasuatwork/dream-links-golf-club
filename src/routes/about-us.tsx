import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/about-us.css?raw";

export const Route = createFileRoute("/about-us")({
  head: () => ({ meta: [{ title: "About DreamLinks | Sleep and Relaxation for Everyone" }, { name: "description", content: "Learn how DreamLinks brings golf-inspired calm, nature sounds, and personalized relaxation together in one app." }, { property: "og:title", content: "About DreamLinks | Sleep and Relaxation for Everyone" }, { property: "og:description", content: "Learn how DreamLinks brings golf-inspired calm, nature sounds, and personalized relaxation together in one app." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  staticData: { importedDocument: { html: { "lang": "en-US" }, body: { "className": "page page-id-999 acmthemes-theme acm-btn-default default-breakpoint blog-2-columns has-breadcrumbs elementor-kit-7", "data-elementor-device-mode": "desktop" } } },
  component: Index,
});

function Index() {
  useImportedLayout();
  return (
    <>
      <style>{capturedCSS}</style>
      <ImportedNav />
      <div id="outer-wrap" className={"\x77rap-boxshadow site clr mm-page"}>
        <div id="wrap" className={"clr"}>
          <div className={"siteheader-holder"} style={{ height: "120px", display: "none" }} />
          <ImportedHeader />
          <div className={"page-header"}>
            <div className={"page-header-wrap hero_wave_dark"}><svg id="hero-wave-dark-svg" width="2099" height="550" viewBox="0 0 2099 550" fill="none" xmlns="http://www.w3.org/2000/svg"><path className={"wave-path-one"} d="M1414.27 94.5C1299.88 25.3 1263.47 -11.5 1263.47 -35.5L2214.05 -218C2234.35 -101 2248.46 86.3 2214.05 169.5C2171.05 273.5 1979.48 469.5 1744.9 435.5C1589.08 412.914 1557.24 181 1414.27 94.5Z" fill="white" fillOpacity="0.1" /><path className={"wave-path-two"} d="M1811.37 310.5C1463.97 224 1370.51 458.833 1364 596L2247.56 722.5L2260.41 250C2199.53 206.5 2035.93 366.415 1811.37 310.5Z" fill="white" fillOpacity="0.1" /><path className={"wave-path-three"} d="M669.904 310.294C364.399 253.294 273.5 277.088 184 335.294C94.5 393.5 32.5 463.5 3 566C-26.5 668.5 184 746.294 184 746.294L1078.73 780.294L1188.76 554.294C1201.61 525.794 1265.84 359.794 1169.77 310.294C1040.76 216.794 826.897 342.312 669.904 310.294Z" fill="#FFFCFC" fillOpacity="0.1" /></svg> <svg id="hero-wave-divider" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1879.8 203" xmlSpace="preserve" {...({ version: "1.1", "enable-background": "new 0 0 1879.8 203" } as any)}><path className={"wave-divider"} fill="#F6F4FE" d={"M0,0c6.1,7.9,11.9,16,18.3,23.6C34.6,43,53.6,59.4,74.3,73.8c49.4,34.4,104.4,55.8,162.5,69.8\n      c32.8,7.9,66,12.9,99.5,16.4c44,4.6,88.1,4.7,132.2,3.5c26.6-0.7,53.1-3.4,79.6-5.5c26.9-2.2,53.7-4.7,80.5-7.3\n      c25.3-2.4,50.7-5.1,76-7.6c24.7-2.5,49.3-4.8,74-7.4c27.6-2.8,55.3-5.8,82.9-8.6c21.5-2.2,43.1-4.3,64.6-6.2\n      c22.7-2.1,45.4-4.1,68.1-5.8c16.6-1.3,33.2-2.6,49.8-3.1c25.1-0.8,50.3-1.3,75.4-1.1c56.5,0.5,111.6,9.1,165.5,26.7\n      c56.6,18.5,114.4,32.4,173.2,41.9c29.2,4.7,58.7,7.9,88.1,11.4c31.7,3.7,63.5,3.9,95.3,2.7c44.3-1.7,87.9-8.1,129.4-24.7\n      c44.4-17.8,79.7-46,100.6-90.1c2.9-6.2,5.4-12.5,8.1-18.8c0,47.7,0,95.3,0,143c-626.6,0-1253.2,0-1879.8,0C0,135.3,0,67.6,0,0z"} /></svg><div className={"\x63ontainer clr page-header-inner"}><h1 className={"page-header-title clr"} itemProp="headline">
      				About Us				</h1><nav className={"site-breadcrumbs clr"}><span><span><a href="/">Home</a></span> » <span className={"breadcrumb_last"} aria-current="page">About Us</span></span></nav></div></div>
          </div>
          <main id="main" className={"site-main clr"}>
            <div data-elementor-id="999" className={"elementor elementor-999"}>
              <ImportedSectionRelaxSleepBetterWith />
              <ImportedSectionEverythingYouNeedFor />
              <section className={"elementor-section elementor-top-section elementor-element elementor-element-2ae933fc elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
                <div className={"elementor-container elementor-column-gap-default"}>
                  <div className={"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-135ce5b4"} data-element_type="column">
                    <div className={"elementor-widget-wrap elementor-element-populated"}>
                      <section className={"elementor-section elementor-inner-section elementor-element elementor-element-4318d0ab elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
                        <div className={"elementor-container elementor-column-gap-default"}>
                          <div className={"elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-6917a109"} data-element_type="column">
                            <div className={"elementor-widget-wrap elementor-element-populated"}>
                              <div className={"elementor-element elementor-element-76c03226 elementor-widget elementor-widget-apper_heading"}>
                                <div className={"elementor-widget-container"}>
                                  <div className={"acm-heading no-line \x63ontent-center-align-align"}>
                                    <h2 className={"acm-title"}>
                                      <span>Why Thousands Choose DreamLinks</span>
                                    </h2>
                                    <div className={"acm_heading-desc"}>
                                      <p><strong>Experience Better Sleep with Every Night</strong>From <strong>Golf Sleep Sounds</strong> to <strong>Nature Sounds</strong>, DreamLinks combines science-backed relaxation with beautiful design to help you sleep better, reduce stress, and wake up refreshed.</p>
                                    </div>
                                    <div className={"acm-heading-border"} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </section>
              <ImportedSection />
              <ImportedSectionEveryGreatTomorrowBegins />
              <ImportedSectionWeBelieveBetterSleep />
            </div>
            <div className={"purple_backdrop"} />
          </main>
          <ImportedFooter />
        </div>
      </div>
      <span id="elementor-device-mode" className={"elementor-screen-only"} />
      <svg style={{ display: "none" }} className={"e-font-icon-svg-symbols"} />
      <div id="mm-blocker" />
    </>
  );
}

function ImportedNav() {
  return (
    <nav id="acm-mobile-menu" className={"menu-main-menu-container mm-menu mm-horizontal mm-ismenu mm-front mm-hasheader"}>
      <div className={"mm-header"}>
        <a className={"mm-prev"} href="#" style={{ display: "none" }} />
        <span className={"mm-title"}>Menu</span>
        <a className={"mm-next"} href="#" style={{ display: "none" }} />
      </div>
      <ul id="acm-mmenu" className={"acm-mmenu mm-list mm-panel mm-opened mm-current"}>
        <li id="menu-item-363" className={"menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-363"}>
          <a className={"acm-mmenu-item-a"} href="/">Home</a>
        </li>
        <li id="menu-item-1951" className={"menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-999 current_page_item menu-item-1951"}>
          <a aria-current="page" className={"acm-mmenu-item-a"} href="#">About Us</a>
        </li>
        <li id="menu-item-1952" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-1952"}>
          <a className={"acm-mmenu-item-a"} href="/contact">Contact</a>
        </li>
        <li id="menu-item-2275" className={"menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2275"}>
          <em className={"mm-counter"}>5</em>
          <a className={"mm-subopen"} href="#mm-m0-p1" />
          <a className={"acm-mmenu-item-a"} href="#">Sounds</a>
        </li>
        <li id="menu-item-1953" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-1953"}>
          <a className={"acm-mmenu-item-a"} href="/blog">Blog</a>
        </li>
        <li id="menu-item-2183" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-2183"}>
          <a className={"acm-mmenu-item-a"} href="/frequently-asked-questions">FAQ</a>
        </li>
        <li className={"menu-item nav-menu-button mobile-cta"}>
          <a className={"nav-cta-btn"} href="#">Subscribe Now</a>
        </li>
      </ul>
      <ul className={"sub-menu mm-list mm-panel"} id="mm-m0-p1">
        <li className={"mm-subtitle"}>
          <a className={"mm-subclose"} href="#acm-mmenu">Sounds</a>
        </li>
        <li id="menu-item-2278" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-2278"}>
          <a className={"acm-mmenu-item-a"} href="/golf-sounds">Golf Sounds</a>
        </li>
        <li id="menu-item-2286" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-2286"}>
          <a className={"acm-mmenu-item-a"} href="/baby-sleep-sounds">Baby Sleep Sounds</a>
        </li>
        <li id="menu-item-2608" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-2608"}>
          <a className={"acm-mmenu-item-a"} href="/nature-sounds">Nature Sounds</a>
        </li>
        <li id="menu-item-2289" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-2289"}>
          <a className={"acm-mmenu-item-a"} href="/healing-sounds">Healing Sounds</a>
        </li>
        <li id="menu-item-2292" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-2292"}>
          <a className={"acm-mmenu-item-a"} href="/random-sounds">Random Sounds</a>
        </li>
      </ul>
    </nav>
  );
}

function ImportedHeader() {
  return (
    <header id="site-header" className={"hero_wave_light menu-light header-dark sticky-dark-menu clr"} itemScope itemType="http://schema.org/WPHeader" data-site-import-scroll-header={"{\"desktop\":{\"added\":[\"sticky\"],\"removed\":[],\"threshold\":648},\"mobile\":{\"added\":[\"sticky\"],\"removed\":[],\"threshold\":633}}"}>
      <div id="site-header-inner" className={"clr  \x63ontainer hero_wave_light"}>
        <div id="site-logo" className={"clr"} itemScope itemType="http://schema.org/Brand">
          <div id="site-logo-inner" className={"clr"}>
            <a className={"full-screen-logo-link"} href="/" itemProp="url" rel="home">
              <img src="/site-assets/57805f401fca30fb.png" className={"full-screen-logo"} width="200" height="100" alt="" />
            </a>
            <a className={"full-screen-light-ver-logo-link"} href="/" itemProp="url" rel="home">
              <img src="/site-assets/57805f401fca30fb.png" className={"light-ver-logo"} width="200" height="100" alt="" />
            </a>
          </div>
          <div className={"acmthemes-mobile-menu-icon clr"}>
            <a className={"hamburger-icon"} href="#acm-mobile-menu">
              <i className={"icon icon-menu"} />
            </a>
          </div>
        </div>
        <div id="site-navigation-wrap" className={"clr"}>
          <nav id="site-navigation" className={"navigation main-navigation clr"} itemScope itemType="http://schema.org/SiteNavigationElement">
            <ul id="menu-main-menu" className={"main-menu dropdown-menu sf-menu sf-js-enabled"} style={{ touchAction: "pan-y" }}>
              <li className={"menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-363"}>
                <a className={"menu-link"} href="/">
                  <span className={"\x74ext-wrap"}>Home</span>
                </a>
              </li>
              <li className={"menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-999 current_page_item menu-item-1951"}>
                <a className={"menu-link"} href="#">
                  <span className={"\x74ext-wrap"}>About Us</span>
                </a>
              </li>
              <li className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-1952"}>
                <a className={"menu-link"} href="/contact">
                  <span className={"\x74ext-wrap"}>Contact</span>
                </a>
              </li>
              <li className={"menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-2275 nomega-dropdown"}>
                <a className={"menu-link sf-with-ul"} href="#">
                  <span className={"\x74ext-wrap"}>Sounds <span className={"nav-arrow fa fa-angle-down"} /></span>
                </a>
                <ul className={"sub-menu"} style={{ display: "none" }}>
                  <li className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-2278"}>
                    <a className={"menu-link"} href="/golf-sounds">
                      <span className={"\x74ext-wrap"}>Golf Sounds</span>
                    </a>
                  </li>
                  <li className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-2286"}>
                    <a className={"menu-link"} href="/baby-sleep-sounds">
                      <span className={"\x74ext-wrap"}>Baby Sleep Sounds</span>
                    </a>
                  </li>
                  <li className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-2608"}>
                    <a className={"menu-link"} href="/nature-sounds">
                      <span className={"\x74ext-wrap"}>Nature Sounds</span>
                    </a>
                  </li>
                  <li className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-2289"}>
                    <a className={"menu-link"} href="/healing-sounds">
                      <span className={"\x74ext-wrap"}>Healing Sounds</span>
                    </a>
                  </li>
                  <li className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-2292"}>
                    <a className={"menu-link"} href="/random-sounds">
                      <span className={"\x74ext-wrap"}>Random Sounds</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-1953"}>
                <a className={"menu-link"} href="/blog">
                  <span className={"\x74ext-wrap"}>Blog</span>
                </a>
              </li>
              <li className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-2183"}>
                <a className={"menu-link"} href="/frequently-asked-questions">
                  <span className={"\x74ext-wrap"}>FAQ</span>
                </a>
              </li>
            </ul>
            <div id="searchform-header-replace" className={"header-searchform-wrap clr"}>
              <form method="get" className={"header-searchform"}><input className={"field"} type="search" name="s" autoComplete="off" defaultValue="" placeholder="Search by Title, Category or ISBN" /> <input type="hidden" name="post_type" defaultValue="product" /></form>
              <span id="searchform-header-replace-close" className={"icon-close"} />
            </div>
          </nav>
        </div>
        <div className={"woo-cart-item header-right"} />
      </div>
    </header>
  );
}

function ImportedSectionRelaxSleepBetterWith() {
  return (
    <section className={"elementor-section elementor-top-section elementor-element elementor-element-e6c4ba1 elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
      <div className={"elementor-container elementor-column-gap-default"}>
        <div className={"elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-b891c5b"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-9af66a4 elementor-widget elementor-widget-apper_heading"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-heading no-line \x63ontent-left-align"}>
                  <h2 className={"acm-title"}>
                    <span>Relax &amp; Sleep Better with Golf-Inspired Sounds for Everyone</span>
                  </h2>
                  <div className={"acm-heading-border"} />
                </div>
              </div>
            </div>
            <div className={"elementor-element elementor-element-8b4e791 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"}>
              <p>Dream Links is a premium relaxation and sleep app inspired by the peaceful atmosphere of the golf course—but designed for everyone.</p>
              <p>Whether you’re looking to unwind after a long day, improve your focus, meditate, or enjoy deeper, more restful sleep, Dream Links offers a growing library of high-quality audio experiences to suit every mood and lifestyle.</p>
              <p>While our signature golf-inspired soundscapes capture the calming beauty of nature, the app also features a wide variety of relaxing sounds including rain, ocean waves, forests, birds, streams, white noise, meditation audio, ambient music, and many more. There’s something for everyone, whether you’re a golfer or simply someone who enjoys peaceful sounds.</p>
              <p>Create your perfect listening experience with personalized playlists, smart sleep timers, and beautifully curated sound collections that help reduce stress, improve focus, and support better sleep anytime, anywhere.</p>
              <p>At Dream Links, golf is our inspiration—but relaxation is for everyone.</p>
            </div>
          </div>
        </div>
        <div className={"elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-26ca03b"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-79f554e elementor-widget elementor-widget-apper_img_stack"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-image-animator app_solution_section clr"}>
                  <ul className={"app-previews"}>
                    <li>
                      <img fetchPriority="high" decoding="async" width="450" height="300" src="/site-assets/64f61abf009bd343.webp" className={"apper-img-stack"} alt="" />
                    </li>
                    <li>
                      <img loading="lazy" decoding="async" width="210" height="210" src="/site-assets/7cb0ebc5d30cb4c0.webp" className={"apper-img-stack"} alt="" />
                    </li>
                    <li>
                      <img loading="lazy" decoding="async" width="315" height="391" src="/site-assets/d927796f2b05bd10.webp" className={"apper-img-stack"} alt="" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionEverythingYouNeedFor() {
  return (
    <section className={"elementor-section elementor-top-section elementor-element elementor-element-19945e9f acm_gradient-bg-left acm_section_85 elementor-section-boxed elementor-section-height-default elementor-section-height-default"}>
      <div className={"elementor-container elementor-column-gap-default"}>
        <div className={"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3676d507"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <section className={"elementor-section elementor-inner-section elementor-element elementor-element-48fd8adf elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
              <div className={"elementor-container elementor-column-gap-default"}>
                <div className={"elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-22da76b6"} data-element_type="column">
                  <div className={"elementor-widget-wrap elementor-element-populated"}>
                    <div className={"elementor-element elementor-element-757f006e elementor-widget elementor-widget-image"}>
                      <img loading="lazy" decoding="async" width="1024" height="576" src="/site-assets/6e40880479b6ee57.png" className={"attachment-large \x73ize-large wp-image-2063"} alt="" srcSet="/site-assets/6e40880479b6ee57.png 1024w, /site-assets/c5e20cd376900e08.png 300w, /site-assets/61552194c135a7a1.png 768w, /site-assets/c31b7032595d9456.png 1280w" sizes="(max-width: 1024px) 100vw, 1024px" />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={"elementor-section elementor-inner-section elementor-element elementor-element-1a307816 elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
              <div className={"elementor-container elementor-column-gap-no"}>
                <div className={"elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-a27c946"} data-element_type="column">
                  <div className={"elementor-widget-wrap elementor-element-populated"}>
                    <div className={"elementor-element elementor-element-44ec696 elementor-widget elementor-widget-apper_heading"}>
                      <div className={"elementor-widget-container"}>
                        <div className={"acm-heading no-line \x63ontent-center-align-align"}>
                          <h2 className={"acm-title"}>
                            <span>Everything You Need for Better Sleep, All in One App</span>
                          </h2>
                          <div className={"acm_heading-desc"}>
                            <p>DreamLinks combines <a href="/"><strong>Golf Sleep Sounds</strong></a>, <strong>Relaxing Nature Sounds</strong>, <strong>White Noise</strong>, and smart sleep tools to help you fall asleep faster, reduce stress, and wake up feeling refreshed. Experience a personalised sleep journey designed for peaceful nights and healthier mornings.</p>
                          </div>
                          <div className={"acm-heading-border"} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={"elementor-section elementor-inner-section elementor-element elementor-element-720e7fb3 elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
              <div className={"elementor-container elementor-column-gap-default"}>
                <div className={"elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-27f85786"} data-element_type="column">
                  <div className={"elementor-widget-wrap elementor-element-populated"}>
                    <div className={"elementor-element elementor-element-70b33764 \x63ontent-align--left \x63ontent-align--mobile-center elementor-widget elementor-widget-apper_icon_box"}>
                      <div className={"elementor-widget-container"}>
                        <div className={"acm-iconbox icon-top"}>
                          <div className={"iconbox-wrap    \x61lign-left icon-type-framed icon-shadow"}>
                            <div className={"acm-icon"}>
                              <i aria-hidden="true" className={"fas fa-music"} />
                            </div>
                            <div className={"acm-icon-content"}>
                              <div className={"acm-icon-heading"}>
    						Golf Sleep Sounds					</div>
                              <div className={"acm-icon-desc"}>
    						Relax with exclusive Golf Sleep Sounds and authentic Golf Course Ambience that recreate the peaceful atmosphere of lush fairways, helping you unwind naturally before bedtime.					</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-4ae5945e"} data-element_type="column">
                  <div className={"elementor-widget-wrap elementor-element-populated"}>
                    <div className={"elementor-element elementor-element-47f8f028 \x63ontent-align--left \x63ontent-align--mobile-center elementor-widget elementor-widget-apper_icon_box"}>
                      <div className={"elementor-widget-container"}>
                        <div className={"acm-iconbox icon-top"}>
                          <div className={"iconbox-wrap    \x61lign-left icon-type-framed icon-shadow"}>
                            <div className={"acm-icon"}>
                              <i aria-hidden="true" className={"fab fa-soundcloud"} />
                            </div>
                            <div className={"acm-icon-content"}>
                              <div className={"acm-icon-heading"}>
    						Nature Sounds Collection					</div>
                              <div className={"acm-icon-desc"}>
    						Listen to soothing Nature Sounds, gentle rain, ocean waves, forest ambience, and calming soundscapes that create the perfect environment for deep, restorative sleep.					</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-1b78c7ec"} data-element_type="column">
                  <div className={"elementor-widget-wrap elementor-element-populated"}>
                    <div className={"elementor-element elementor-element-3186505e \x63ontent-align--left \x63ontent-align--mobile-center elementor-widget elementor-widget-apper_icon_box"}>
                      <div className={"elementor-widget-container"}>
                        <div className={"acm-iconbox icon-top"}>
                          <div className={"iconbox-wrap    \x61lign-left icon-type-framed icon-shadow"}>
                            <div className={"acm-icon"}>
                              <i aria-hidden="true" className={"icon icon-playlist"} />
                            </div>
                            <div className={"acm-icon-content"}>
                              <div className={"acm-icon-heading"}>
    						Personalised Sleep Experience					</div>
                              <div className={"acm-icon-desc"}>
    						Build custom playlists, organise your favourite Sleep Sounds, and enjoy a personalised bedtime routine designed around the way you relax best.					</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-352b9721"} data-element_type="column">
                  <div className={"elementor-widget-wrap elementor-element-populated"}>
                    <div className={"elementor-element elementor-element-668d9ce6 \x63ontent-align--left \x63ontent-align--mobile-center elementor-widget elementor-widget-apper_icon_box"}>
                      <div className={"elementor-widget-container"}>
                        <div className={"acm-iconbox icon-top"}>
                          <div className={"iconbox-wrap    \x61lign-left icon-type-framed icon-shadow"}>
                            <div className={"acm-icon"}>
                              <i aria-hidden="true" className={"fas fa-tools"} />
                            </div>
                            <div className={"acm-icon-content"}>
                              <div className={"acm-icon-heading"}>
    						Smart Sleep Tools					</div>
                              <div className={"acm-icon-desc"}>
    						Use the built-in Sleep Timer, offline listening, and easy controls to enjoy uninterrupted relaxation whether you're at home, travelling, or winding down after a busy day.					</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSection() {
  return (
    <section className={"elementor-section elementor-top-section elementor-element elementor-element-643fb77 elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
      <div className={"elementor-container elementor-column-gap-default"}>
        <div className={"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-151c681"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-262c222 elementor-widget elementor-widget-apper_team"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-team-wrap clr"}>
                  <div className={"acm-row acm_flex-wrap"}>
                    <div className={"acm-col-xs-12 acm-col-sm-12 acm-col-md-6 acm-col-lg-3"}>
                      <div className={"member-detail"}>
                        <img loading="lazy" decoding="async" width="200" height="200" src="/site-assets/3a6a4382445c20c4.png" className={"attachment-full \x73ize-full"} alt="" srcSet="/site-assets/3a6a4382445c20c4.png 200w, /site-assets/3e0801507f3ffc38.png 150w" sizes="(max-width: 200px) 100vw, 200px" />
                        <div className={"member-text"}>
                          <h3 className={"member-title"}>Fall Asleep Naturally</h3>
                          <div className={"member-position"}>Calming Sleep Sounds, White Noise, and Golf Course Ambience help quiet your mind and prepare your body for deep, natural sleep.</div>
                          <ul className={"social_media"}>
                            <li>
                              <a href="#">
                                <i className={"icon icon-social-facebook"} />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className={"icon icon-social-twitter"} />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className={"icon icon-social-instagram"} />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className={"icon icon-social-youtube"} />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className={"icon icon-social-linkedin"} />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className={"acm-col-xs-12 acm-col-sm-12 acm-col-md-6 acm-col-lg-3"}>
                      <div className={"member-detail"}>
                        <img loading="lazy" decoding="async" width="200" height="200" src="/site-assets/328cdc92701fa18b.png" className={"attachment-full \x73ize-full"} alt="" srcSet="/site-assets/328cdc92701fa18b.png 200w, /site-assets/16f571939ffe3d0d.png 150w" sizes="(max-width: 200px) 100vw, 200px" />
                        <div className={"member-text"}>
                          <h3 className={"member-title"}>Premium Audio Library</h3>
                          <div className={"member-position"}>Explore hundreds of Golf Sleep Sounds, Nature Sounds, Rain, Ocean Waves, Forest Ambience, and relaxing playlists for every mood.</div>
                          <ul className={"social_media"}>
                            <li>
                              <a href="#">
                                <i className={"icon icon-social-facebook"} />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className={"icon icon-social-twitter"} />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className={"icon icon-social-instagram"} />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className={"icon icon-social-youtube"} />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className={"icon icon-social-linkedin"} />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className={"acm-col-xs-12 acm-col-sm-12 acm-col-md-6 acm-col-lg-3"}>
                      <div className={"member-detail"}>
                        <img loading="lazy" decoding="async" width="200" height="200" src="/site-assets/adeb96e00ef1dc95.png" className={"attachment-full \x73ize-full"} alt="" srcSet="/site-assets/adeb96e00ef1dc95.png 200w, /site-assets/549eae4302eb5e5f.png 150w" sizes="(max-width: 200px) 100vw, 200px" />
                        <div className={"member-text"}>
                          <h3 className={"member-title"}>Personalised Sleep Journey</h3>
                          <div className={"member-position"}>Create custom playlists, save your favourite relaxing sounds, and build a bedtime routine that fits your lifestyle with DreamLinks.</div>
                          <ul className={"social_media"}>
                            <li>
                              <a href="#">
                                <i className={"icon icon-social-facebook"} />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className={"icon icon-social-twitter"} />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className={"icon icon-social-instagram"} />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className={"icon icon-social-youtube"} />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className={"icon icon-social-linkedin"} />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className={"acm-col-xs-12 acm-col-sm-12 acm-col-md-6 acm-col-lg-3"}>
                      <div className={"member-detail"}>
                        <img loading="lazy" decoding="async" width="200" height="200" src="/site-assets/3d115f5130ec3d30.png" className={"attachment-full \x73ize-full"} alt="" srcSet="/site-assets/3d115f5130ec3d30.png 200w, /site-assets/cd200732a21f4a0e.png 150w" sizes="(max-width: 200px) 100vw, 200px" />
                        <div className={"member-text"}>
                          <h3 className={"member-title"}>Relax Anytime, Anywhere</h3>
                          <div className={"member-position"}>Download your favourite Sleep Sounds for offline listening and enjoy uninterrupted relaxation wherever life takes you.</div>
                          <ul className={"social_media"}>
                            <li>
                              <a href="#">
                                <i className={"icon icon-social-facebook"} />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className={"icon icon-social-twitter"} />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className={"icon icon-social-instagram"} />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className={"icon icon-social-youtube"} />
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className={"icon icon-social-linkedin"} />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionEveryGreatTomorrowBegins() {
  return (
    <section className={"elementor-section elementor-top-section elementor-element elementor-element-fe1f6c9 acm_section_80 elementor-section-boxed elementor-section-height-default elementor-section-height-default right"}>
      <div className={"elementor-container elementor-column-gap-default"}>
        <div className={"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b281a0f"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <section className={"elementor-section elementor-inner-section elementor-element elementor-element-1c3c02e elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
              <div className={"elementor-container elementor-column-gap-default"}>
                <div className={"elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-8524e9b"} data-element_type="column">
                  <div className={"elementor-widget-wrap elementor-element-populated"}>
                    <div className={"elementor-element elementor-element-898e93d elementor-widget__width-initial elementor-widget elementor-widget-apper_heading"}>
                      <div className={"elementor-widget-container"}>
                        <div className={"acm-heading no-line \x63ontent-center-align-align"}>
                          <h2 className={"acm-title"}>
                            <span>Every Great Tomorrow Begins with Better Sleep</span>
                          </h2>
                          <div className={"acm_heading-desc"}>
                            <p>The quality of your mornings is shaped by the quality of your nights. Discover a calming space filled with relaxing audio, peaceful bedtime routines, and mindful experiences designed to help you recharge—one night at a time.</p>
                          </div>
                          <div className={"acm-heading-border"} />
                        </div>
                      </div>
                    </div>
                    <div className={"elementor-element elementor-element-cca6d56 elementor-widget elementor-widget-apper_button"}>
                      <div className={"elementor-widget-container"}>
                        <div className={"acm-button-wrap btn-btn-center"}>
                          <a className={"acm-button acm_py-3 acm_inline-block acm_px-10 acm_no-underline acm_mt-0 acm_text-sm acm_text-white acm-btn-solid acm-btn-round acm-btn-slide-hover"} href={"https://play.google.com/store/apps/details?id=com.wm.dreamlinks&pcampaignid=web_share"}>
                            <span className={"acm_btn-text"}>
    					 Download Dream Links				 </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionWeBelieveBetterSleep() {
  return (
    <section className={"elementor-section elementor-top-section elementor-element elementor-element-6fe80e9d elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
      <div className={"elementor-container elementor-column-gap-default"}>
        <div className={"elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-519ca11b"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-9052546 elementor-widget elementor-widget-image"}>
              <img loading="lazy" decoding="async" width="576" height="1024" src="/site-assets/28422655ffce0ee3.png" className={"attachment-large \x73ize-large wp-image-2086"} alt="" srcSet="/site-assets/28422655ffce0ee3.png 576w, /site-assets/ab2e2cf3d6fc151f.png 169w, /site-assets/bc882ad7b670877e.png 768w, /site-assets/2303661517c85d85.png 864w, /site-assets/20978499c7f0210c.png 940w" sizes="(max-width: 576px) 100vw, 576px" />
            </div>
          </div>
        </div>
        <div className={"elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-130df57"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"} />
        </div>
        <div className={"elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-57499caa"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-3cc6ff2a elementor-widget elementor-widget-apper_heading"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-heading no-line \x63ontent-left-align"}>
                  <h2 className={"acm-title"}>
                    <span>We Believe Better Sleep Changes Everything.</span>
                  </h2>
                  <div className={"acm_heading-desc"}>
                    <p>At DreamLinks, we're committed to creating meaningful sleep experiences that help people relax, recharge, and wake up feeling their best. Every sound, playlist, and feature is thoughtfully designed to make your bedtime routine more peaceful, simple, and enjoyable.</p>
                  </div>
                  <div className={"acm-heading-border"} />
                </div>
              </div>
            </div>
            <section className={"elementor-section elementor-inner-section elementor-element elementor-element-78c3db35 elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
              <div className={"elementor-container elementor-column-gap-default"}>
                <div className={"elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6de9ba1a"} data-element_type="column">
                  <div className={"elementor-widget-wrap elementor-element-populated"}>
                    <div className={"elementor-element elementor-element-499327b8 elementor-widget elementor-widget-apper_counter"}>
                      <div className={"elementor-widget-container"}>
                        <div className={"acm_counter-anim counter-box-bg icon-on-left"}>
                          <div className={"acm_icon"}>
                            <i aria-hidden="true" className={"icon icon-arrow-down-circle"} />
                          </div>
                          <div className={"text"}>
                            <div className={"acm_counter-number"}>
                              <span className={"acm_counter-number-prefix"}>{" "}</span>
                              <span className={"counter-value"}>10</span>
                              <span className={"acm_counter-number-suffix"}>K+</span>
                            </div>
                            <div className={"acm_counter-title"}>Happy Sleepers</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"elementor-element elementor-element-642c7451 elementor-widget elementor-widget-apper_counter"}>
                      <div className={"elementor-widget-container"}>
                        <div className={"acm_counter-anim counter-box-bg icon-on-left"}>
                          <div className={"acm_icon"}>
                            <i aria-hidden="true" className={"icon icon-playlist"} />
                          </div>
                          <div className={"text"}>
                            <div className={"acm_counter-number"}>
                              <span className={"acm_counter-number-prefix"}>{" "}</span>
                              <span className={"counter-value"}>50</span>
                              <span className={"acm_counter-number-suffix"}>+</span>
                            </div>
                            <div className={"acm_counter-title"}>Curated Playlists</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"elementor-element elementor-element-524f2bd2 elementor-widget elementor-widget-apper_button"}>
                      <div className={"elementor-widget-container"}>
                        <div className={"acm-button-wrap btn-left"}>
                          <a className={"acm-button acm_py-3 acm_inline-block acm_px-10 acm_no-underline acm_mt-0 acm_text-sm acm_text-white acm-btn-solid acm-btn-round acm-btn-slide-hover"} href="https://apps.apple.com/in/app/dreamlinks/id6758689668">
                            <span className={"acm_btn-text"}>
    					 Start Free Trial				 </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5179aca8"} data-element_type="column">
                  <div className={"elementor-widget-wrap elementor-element-populated"}>
                    <div className={"elementor-element elementor-element-7c1dbdb3 elementor-widget elementor-widget-apper_counter"}>
                      <div className={"elementor-widget-container"}>
                        <div className={"acm_counter-anim counter-box-bg icon-on-left"}>
                          <div className={"acm_icon"}>
                            <i aria-hidden="true" className={"icon icon-user-following"} />
                          </div>
                          <div className={"text"}>
                            <div className={"acm_counter-number"}>
                              <span className={"acm_counter-number-prefix"}>{" "}</span>
                              <span className={"counter-value"}>500</span>
                              <span className={"acm_counter-number-suffix"}>+</span>
                            </div>
                            <div className={"acm_counter-title"}>Relaxing Sounds</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"elementor-element elementor-element-27aa5837 elementor-widget elementor-widget-apper_counter"}>
                      <div className={"elementor-widget-container"}>
                        <div className={"acm_counter-anim counter-box-bg icon-on-left"}>
                          <div className={"acm_icon"}>
                            <i aria-hidden="true" className={"fab fa-soundcloud"} />
                          </div>
                          <div className={"text"}>
                            <div className={"acm_counter-number"}>
                              <span className={"acm_counter-number-prefix"}>{" "}</span>
                              <span className={"counter-value"}>100</span>
                              <span className={"acm_counter-number-suffix"}>%</span>
                            </div>
                            <div className={"acm_counter-title"}>Focused on Better Sleep</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedFooter() {
  return (
    <footer id="footer" className={"footer"} itemScope itemType="http://schema.org/WPFooter">
      <div id="footer-inner" className={"clr"}>
        <div id="footer-widgets" className={"acmthemes-row clr tablet-3-col mobile-1-col has-padding"}>
          <div className={"footer-widgets-inner \x63ontainer"}>
            <div className={"footer-box span_1_of_4 col \x63ol-1"}>
              <div id="media_image-1" className={"footer-widget widget_media_image single-line clr"}>
                <a href="/">
                  <img width="200" height="100" src="/site-assets/57805f401fca30fb.png" className={"image wp-image-1715  attachment-full \x73ize-full"} alt="" style={{ maxWidth: "100%", height: "auto" }} decoding="async" />
                </a>
              </div>
              <div id="acm_address_widget-1" className={"footer-widget acm_address_widget single-line clr"}>
                <div className={"apper-business-address-widget"}>
                  <div className={"apper-business-address"}>
            300 OVERLAND WOLF CENTRE 6910 PACIFIC STREET OMAHA, NEBRASKA 68106-1045      </div>
                  <div className={"apper-business-email"}>
                    <a href="mailto:dreamlinks174@gmail.com">dreamlinks174@gmail.com</a>
                  </div>
                  <div className={"apper-business-phone"}>
                    <a href="tel:+14028134360">+1 (402) 813-4360</a>
                  </div>
                </div>
              </div>
              <div id="wp-social-widget-1" className={"footer-widget widget_wp-social-widget single-line clr"}>
                <ul className={"social-links"}>
                  <li>
                    <a href="https://www.facebook.com/DreamLinksOfficial">
                      <span className={"social-icon fab fa-facebook-f"} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/dreamlinks_/">
                      <span className={"social-icon fab fa-instagram"} />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/dreamlinksofficial">
                      <span className={"social-icon fab fa-linkedin"} />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/DreamLinks_">
                      <span className={"social-icon"}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1668.56 1221.19" id="tw-x" {...({ "enable-background": "new 0 0 1668.56 1221.19" } as any)}>
                          <path d={"M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99\n\t\t\th-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"} transform="translate(52.39 -25.059)" />
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={"footer-box span_1_of_4 col \x63ol-2"}>
              <div id="media_image-2" className={"footer-widget widget_media_image single-line clr"}>
                <img width="288" height="156" src="/site-assets/6bfbfae61a79eaaa.png" className={"image wp-image-1863  attachment-full \x73ize-full"} alt="" style={{ maxWidth: "100%", height: "auto" }} decoding="async" />
              </div>
            </div>
            <div className={"footer-box span_1_of_4 col \x63ol-3 "}>
              <div id="media_image-3" className={"footer-widget widget_media_image single-line clr"}>
                <img width="288" height="156" src="/site-assets/6bfbfae61a79eaaa.png" className={"image wp-image-1863  attachment-full \x73ize-full"} alt="" style={{ maxWidth: "100%", height: "auto" }} decoding="async" />
              </div>
            </div>
            <div className={"footer-box span_1_of_4 col \x63ol-4"}>
              <div id="text-3" className={"footer-widget widget_text single-line clr"}>
                <div className={"apper-heading"}>
                  <h3 className={"widget-title acm-footer-widget-title title-white style-left"}>Download Now</h3>
                </div>
                <div className={"textwidget"} />
              </div>
              <div id="media_image-5" className={"footer-widget widget_media_image single-line clr"}>
                <a href={"https://play.google.com/store/apps/details?id=com.wm.dreamlinks&pcampaignid=web_share"}>
                  <img width="140" height="35" src="/site-assets/c42e56cd719cb914.png" className={"image wp-image-31  attachment-full \x73ize-full"} alt="Google Play Store White" style={{ maxWidth: "100%", height: "auto" }} decoding="async" />
                </a>
              </div>
              <div id="media_image-6" className={"footer-widget widget_media_image single-line clr"}>
                <a href="https://apps.apple.com/in/app/dreamlinks/id6758689668">
                  <img width="121" height="35" src="/site-assets/551e11d0a3ff123d.png" className={"image wp-image-29  attachment-full \x73ize-full"} alt="IOS App Store white" style={{ maxWidth: "100%", height: "auto" }} decoding="async" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="footer-bottom" className={"clr"}>
          <div id="footer-bottom-inner" className={"\x63ontainer clr"}>
            <div id="footer-bottom-menu" className={"navigation clr"}>
              <div className={"\x72ight-col-content clr"} role="contentinfo">
    					With <i aria-hidden="true" className={"icon icon-heart"} style={{ fontSize: "0.9em", fontWeight: "bold", margin: "0px 5px" }} /> by AcmeeDesign				</div>
            </div>
            <div id="copyright" className={"clr"} role="contentinfo">
    				Copyright © 2025 dreamlinks. All Rights Reserved.			</div>
          </div>
        </div>
      </div>
    </footer>
  );
}


function useImportedLayout() {
  useEffect(() => {
    const scrollingAreas = Array.from(document.querySelectorAll<HTMLElement>("[data-site-import-scroll-root]"));
    const scrollTop = () =>
      scrollingAreas.find(
        (node) =>
          node.clientHeight > 0 &&
          node.scrollHeight > node.clientHeight &&
          /^(auto|scroll)$/.test(getComputedStyle(node).overflowY),
      )?.scrollTop ?? window.scrollY;
    const scrollHeaders = Array.from(document.querySelectorAll<HTMLElement>("[data-site-import-scroll-header]"))
      .slice(0, 128)
      .flatMap((node) => {
        try {
          const states = JSON.parse(node.dataset["siteImportScrollHeader"] || "{}");
          if (!states || typeof states !== "object") return [];
          for (const key of ["desktop", "mobile"]) {
            const state = states[key];
            if (
              !state ||
              !Array.isArray(state.added) ||
              !Array.isArray(state.removed) ||
              state.added.length + state.removed.length > 32
            )
              delete states[key];
          }
          return [
            {
              node,
              states,
              original: new Set(node.classList),
              originalFill: node.getAttribute("fill"),
              transform: node.style.getPropertyValue("transform"),
              priority: node.style.getPropertyPriority("transform"),
            },
          ];
        } catch {
          return [];
        }
      });
    function syncScrollHeaders(reset = false) {
      for (const { node, states, original, originalFill, transform, priority } of scrollHeaders) {
        if (!reset && node.getAttribute("data-import-menu-open") === "true") continue;
        const state = states[innerWidth < 768 ? "mobile" : "desktop"];
        if ([states.desktop, states.mobile].some((entry) => entry && Object.hasOwn(entry, "fill"))) {
          if (originalFill === null) node.removeAttribute("fill");
          else node.setAttribute("fill", originalFill);
        }
        if (states.desktop?.transform || states.mobile?.transform) {
          if (transform) node.style.setProperty("transform", transform, priority);
          else node.style.removeProperty("transform");
        }
        for (const value of [states.desktop, states.mobile].filter(Boolean) as {
          added: string[];
          removed: string[];
        }[]) {
          for (const token of [...(value.added || []), ...(value.removed || [])]) {
            if (typeof token !== "string" || !token || /\s/.test(token)) continue;
            node.classList.toggle(token, original.has(token));
          }
        }
        if (reset || !state || !Number.isFinite(state.threshold) || scrollTop() < state.threshold) continue;
        let until = state.until;
        if (
          typeof state.untilAnchor === "string" &&
          /^\d$/.test(state.untilAnchor) &&
          Number.isFinite(state.untilProgress) &&
          Math.abs(state.untilProgress) <= 2
        ) {
          const anchor = document.querySelector<HTMLElement>(
            '[data-site-import-header-end="' + state.untilAnchor + '"]',
          );
          if (anchor) until = anchor.getBoundingClientRect().top + scrollTop() + innerHeight * state.untilProgress;
        }
        if (Number.isFinite(until) && scrollTop() >= until) continue;
        if (state.fill === null) node.removeAttribute("fill");
        else if (typeof state.fill === "string" && state.fill.length <= 256 && !/url\(/i.test(state.fill))
          node.setAttribute("fill", state.fill);
        if (
          typeof state.transform === "string" &&
          state.transform.length <= 128 &&
          CSS.supports("transform", state.transform)
        )
          node.style.setProperty("transform", state.transform, "important");
        for (const token of state.added || [])
          if (typeof token === "string" && token && !/\s/.test(token)) node.classList.add(token);
        for (const token of state.removed || [])
          if (typeof token === "string" && token && !/\s/.test(token)) node.classList.remove(token);
      }
    }
    const handleScroll = () => {
      syncScrollHeaders();
    };
    function resizeSummaries() {
      syncScrollHeaders();
    }
    document.addEventListener("load", handleScroll, true);
    resizeSummaries();
    const parallaxFrame = requestAnimationFrame(handleScroll);
    window.addEventListener("resize", resizeSummaries);
    document.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    return () => {
      cancelAnimationFrame(parallaxFrame);
      syncScrollHeaders(true);
      document.removeEventListener("load", handleScroll, true);
      window.removeEventListener("resize", resizeSummaries);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);
}
