import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/golf-sounds.css?raw";

export const Route = createFileRoute("/golf-sounds")({
  head: () => ({ meta: [{ title: "Golf Sounds | DreamLinks" }, { name: "description", content: "Unwind with golf-inspired soundscapes, peaceful course ambience, and nature sounds for focus and sleep." }, { property: "og:title", content: "Golf Sounds | DreamLinks" }, { property: "og:description", content: "Unwind with golf-inspired soundscapes, peaceful course ambience, and nature sounds for focus and sleep." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  staticData: { importedDocument: { html: { "lang": "en-US" }, body: { "className": "page acmthemes-theme acm-btn-default default-breakpoint blog-2-columns has-breadcrumbs elementor-kit-7", "data-elementor-device-mode": "desktop" } } },
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
            <div className={"page-header-wrap hero_wave_light"}><svg id="hero-wave-light-svg" width="1880" height="550" viewBox="0 0 1880 550" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_5_11)"><path className={"wave-path-one"} d="M1267 94.5C1164.6 25.3 1132 -11.5 1132 -35.5L1983 -218C2001.17 -101 2013.8 86.3 1983 169.5C1944.5 273.5 1773 469.5 1563 435.5C1423.5 412.914 1395 181 1267 94.5Z" fill="white" fillOpacity="0.1" /><path className={"wave-path-two"} d="M1622.5 310.5C1311.5 224 1227.83 458.833 1222 596L2013 722.5L2024.5 250C1970 206.5 1823.54 366.415 1622.5 310.5Z" fill="white" fillOpacity="0.1" /><path className={"wave-path-three"} d="M426 306.5C152.5 249.5 23.1667 294.5 -9 331.5V742.5L792 776.5L890.5 550.5C902 522 959.5 356 873.5 306.5C758 213 566.546 338.518 426 306.5Z" fill="#FFFCFC" fillOpacity="0.1" /></g><defs><clipPath id="clip0_5_11"><rect width="1880" height="550" fill="white" /></clipPath></defs></svg> <svg id="hero-wave-divider" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1879.8 203" xmlSpace="preserve" {...({ version: "1.1", "enable-background": "new 0 0 1879.8 203" } as any)}><path className={"wave-divider"} fill="#F6F4FE" d={"M0,0c6.1,7.9,11.9,16,18.3,23.6C34.6,43,53.6,59.4,74.3,73.8c49.4,34.4,104.4,55.8,162.5,69.8\n      c32.8,7.9,66,12.9,99.5,16.4c44,4.6,88.1,4.7,132.2,3.5c26.6-0.7,53.1-3.4,79.6-5.5c26.9-2.2,53.7-4.7,80.5-7.3\n      c25.3-2.4,50.7-5.1,76-7.6c24.7-2.5,49.3-4.8,74-7.4c27.6-2.8,55.3-5.8,82.9-8.6c21.5-2.2,43.1-4.3,64.6-6.2\n      c22.7-2.1,45.4-4.1,68.1-5.8c16.6-1.3,33.2-2.6,49.8-3.1c25.1-0.8,50.3-1.3,75.4-1.1c56.5,0.5,111.6,9.1,165.5,26.7\n      c56.6,18.5,114.4,32.4,173.2,41.9c29.2,4.7,58.7,7.9,88.1,11.4c31.7,3.7,63.5,3.9,95.3,2.7c44.3-1.7,87.9-8.1,129.4-24.7\n      c44.4-17.8,79.7-46,100.6-90.1c2.9-6.2,5.4-12.5,8.1-18.8c0,47.7,0,95.3,0,143c-626.6,0-1253.2,0-1879.8,0C0,135.3,0,67.6,0,0z"} /></svg><div className={"\x63ontainer clr page-header-inner"}><h1 className={"page-header-title clr"} itemProp="headline">
      				Golf Sounds				</h1><nav className={"site-breadcrumbs clr"}><span><span><a href="/">Home</a></span> » <span className={"breadcrumb_last"} aria-current="page">Golf Sounds</span></span></nav></div></div>
          </div>
          <main id="main" className={"site-main clr"}>
            <div data-elementor-id="2276" className={"elementor elementor-2276"}>
              <ImportedSectionGolfSoundsPeacefulMinds />
              <ImportedSectionTheCalmOfGolf />
              <section className={"elementor-section elementor-top-section elementor-element elementor-element-fd08962 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"} style={{ width: "1521px", left: "0px" }} data-site-import-responsive="91">
                <div className={"elementor-container elementor-column-gap-default"}>
                  <div className={"elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-bca0164"}>
                    <div className={"elementor-widget-wrap elementor-element-populated"}>
                      <div className={"elementor-element elementor-element-b0c69a8 elementor-widget elementor-widget-image"}>
                        <img decoding="async" width="1024" height="576" src="/site-assets/a641afa16fb369fd.png" className={"attachment-large \x73ize-large wp-image-2494"} alt="" srcSet="/site-assets/a641afa16fb369fd.png 1024w, /site-assets/e22b986affed6906.png 300w, /site-assets/53cc03b96f3ddb9c.png 768w, /site-assets/6de5f9b028fad978.png 1536w, /site-assets/48f14fc684da944c.png 1672w" sizes="(max-width: 1024px) 100vw, 1024px" />
                      </div>
                    </div>
                  </div>
                  <div className={"elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-76bd3ce"}>
                    <div className={"elementor-widget-wrap elementor-element-populated"}>
                      <div className={"elementor-element elementor-element-8b4c4fa elementor-widget elementor-widget-heading"}>
                        <h2 className={"elementor-heading-title elementor-size-default"}>Why Golf Sounds Help You!</h2>
                      </div>
                      <div className={"elementor-element elementor-element-624adbb elementor-widget elementor-widget-text-editor"}>
                        <ol>
                          <li>Reduce stress and calm your mind</li>
                          <li>Improve focus and mental clarity</li>
                          <li>Create the perfect environment for sleep</li>
                          <li>Reconnect with the peaceful game you love</li>
                          <li>Support relaxation, mindfulness &amp; well-being</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <ImportedSectionExploreOurGolfSoundscapes />
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
        <li id="menu-item-1951" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-1951"}>
          <a className={"acm-mmenu-item-a"} href="/about-us">About Us</a>
        </li>
        <li id="menu-item-1952" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-1952"}>
          <a className={"acm-mmenu-item-a"} href="/contact">Contact</a>
        </li>
        <li id="menu-item-2275" className={"menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-2275"}>
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
        <li id="menu-item-2278" className={"menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-2276 current_page_item menu-item-2278"}>
          <a aria-current="page" className={"acm-mmenu-item-a"} href="#">Golf Sounds</a>
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
              <li className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-1951"}>
                <a className={"menu-link"} href="/about-us">
                  <span className={"\x74ext-wrap"}>About Us</span>
                </a>
              </li>
              <li className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-1952"}>
                <a className={"menu-link"} href="/contact">
                  <span className={"\x74ext-wrap"}>Contact</span>
                </a>
              </li>
              <li className={"menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children dropdown menu-item-2275 nomega-dropdown"}>
                <a className={"menu-link sf-with-ul"} href="#">
                  <span className={"\x74ext-wrap"}>Sounds <span className={"nav-arrow fa fa-angle-down"} /></span>
                </a>
                <ul className={"sub-menu"} style={{ display: "none" }}>
                  <li className={"menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-2276 current_page_item menu-item-2278"}>
                    <a className={"menu-link"} href="#">
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

function ImportedSectionGolfSoundsPeacefulMinds() {
  return (
    <section className={"elementor-section elementor-top-section elementor-element elementor-element-e549663 elementor-section-full_width elementor-section-height-min-height elementor-section-stretched elementor-section-height-default elementor-section-items-middle acm_section_full right"} style={{ width: "1521px", left: "0px" }} data-site-import-responsive="54">
      <div className={"elementor-container elementor-column-gap-default"}>
        <div className={"elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-8b0027b"}>
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-18012f7 elementor-widget__width-initial elementor-widget elementor-widget-heading"}>
              <h2 className={"elementor-heading-title elementor-size-default"}>Golf Sounds. <br />
    Peaceful Minds.</h2>
            </div>
            <div className={"elementor-element elementor-element-236dbaa elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-initial elementor-widget elementor-widget-text-editor"}>
              <p>Immerse yourself in the calming ambience of the golf course and let every sound bring you closer to relaxation, focus, and better sleep.</p>
            </div>
            <div className={"elementor-element elementor-element-e982a06 elementor-widget elementor-widget-button"}>
              <a className={"elementor-button elementor-button-link elementor-size-sm"} href="https://apps.apple.com/in/app/dreamlinks/id6758689668">
                <span className={"elementor-button-content-wrapper"}>{" "}<span className={"elementor-button-icon"}>{" "}<i aria-hidden="true" className={"fas fa-play-circle"} />{" "}</span>{" "}<span className={"elementor-button-text"}>Explore Golf Sound</span>{" "}</span>
              </a>
            </div>
          </div>
        </div>
        <div className={"elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-bf789b4"}>
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-a2e3624 elementor-hidden-mobile elementor-widget elementor-widget-image"}>
              <img fetchPriority="high" decoding="async" width="1024" height="576" src="/site-assets/2509303181a26b6c.webp" className={"attachment-large \x73ize-large wp-image-3030"} alt="" srcSet="/site-assets/2509303181a26b6c.webp 1024w, /site-assets/a110fca43ab62906.webp 300w, /site-assets/9a91541a10859975.webp 768w, /site-assets/6020bfce3dcb7c55.webp 1536w, /site-assets/f385bbe377cdd8cc.webp 1672w" sizes="(max-width: 1024px) 100vw, 1024px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionTheCalmOfGolf() {
  return (
    <section className={"elementor-section elementor-top-section elementor-element elementor-element-0d5a536 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"} style={{ width: "1521px", left: "0px" }} data-site-import-responsive="73">
      <div className={"elementor-container elementor-column-gap-default"}>
        <div className={"elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-57970f2"}>
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-fcd418e elementor-widget elementor-widget-video"}>
              <div className={"e-hosted-video elementor-wrapper elementor-open-inline"}>
                <video className={"elementor-video"} src="https://dreamlinks.golf/wp-content/uploads/2026/08/dreamslinks-vid1-1.mp4" controls preload="auto" {...({ controlslist: "nodownload" } as any)} />
              </div>
            </div>
          </div>
        </div>
        <div className={"elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-6ee392d"}>
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-aa52a65 elementor-widget elementor-widget-heading"}>
              <h2 className={"elementor-heading-title elementor-size-default"}>The Calm Of Golf Anytime, Anywhere</h2>
            </div>
            <div className={"elementor-element elementor-element-3fb18b5 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"}>
              <p>Golf isn’t just a sport — it’s a state of mind. The early morning fairways, the gentle breeze, the distant sounds of nature, the satisfying strike — all come together to create a sense of calm and clarity. DreamLinks brings that feeling to you through beautifully crafted golf soundscapes.</p>
            </div>
            <div className={"elementor-element elementor-element-c73e5d7 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget elementor-widget-apper_img_button"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-button-wrap btn-dual btn-btn-center"}><a className={"acm-button acm_py-3 acm_inline-block acm_px-10 acm_no-underline acm_mt-0 acm_text-sm acm-btn-outline acm-btn-outline"} href="https://apps.apple.com/in/app/dreamlinks/id6758689668">{" "}</a> <a className={"acm-button acm-button-second acm_py-3 acm_inline-block acm_px-10 acm_no-underline acm_mt-0 acm_text-sm acm-btn-outline acm-btn-outline"} href={"https://play.google.com/store/apps/details?id=com.wm.dreamlinks&pcampaignid=web_share"}>{" "}</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionExploreOurGolfSoundscapes() {
  return (
    <section className={"elementor-section elementor-top-section elementor-element elementor-element-ffae073 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"} style={{ width: "1521px", left: "0px" }} data-site-import-responsive="108">
      <div className={"elementor-container elementor-column-gap-default"}>
        <div className={"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b0be20a"}>
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-cfea2c8 elementor-widget__width-initial elementor-widget elementor-widget-html"}>
              <section className={"golf-soundscapes"}>
                <div className={"golf-soundscapes-inner"}>
                  <div className={"golf-heading"}>
                    <h2>Explore Our Golf Soundscapes
                </h2>
                    <p>Immerse in the most relaxing moments of the game.

                </p>
                    <div className={"golf-divider"}><span /> <i><img draggable="false" role="img" className={"emoji"} alt="⛳" src="/site-assets/9d56f4ed8ce56c57-2b3fe4d6951a574ba55a39ef4b3dcfb7.png" /></i> <span /></div>
                  </div>
                  <div className={"golf-cards"}>
                    <div className={"golf-card"}>
                      <div className={"golf-icon"}>
                        <span>
                          <img draggable="false" role="img" className={"emoji"} alt="🌿" src="/site-assets/fcdcb7775e4d9d00-6a11b22351953142b74ab46ccb43d14c.png" />
                        </span>
                      </div>
                      <h3>Morning Fairway</h3>
                      <p>
                    Start your day with peaceful morning ambience from the golf course.
                    </p>
                    </div>
                    <div className={"golf-card"}>
                      <div className={"golf-icon"}>
                        <span>⚑</span>
                      </div>
                      <h3>Birds &amp; Nature</h3>
                      <p>
                       Relax with birds chirping, trees rustling, and gentle natural sounds.
                    </p>
                    </div>
                    <div className={"golf-card"}>
                      <div className={"golf-icon"}>
                        <span>🏌</span>
                      </div>
                      <h3>Golf Swing Sounds</h3>
                      <p>Experience the smooth swings, ball strikes, and distant drives.
                    </p>
                    </div>
                    <div className={"golf-card"}>
                      <div className={"golf-icon"}>
                        <span>●●</span>
                      </div>
                      <h3>Gallery Hush</h3>
                      <p>
                    Feel the calm hush of the crowd and the serene course atmosphere.
                    </p>
                    </div>
                    <div className={"golf-card"}>
                      <div className={"golf-icon"}>
                        <span>☾</span>
                      </div>
                      <h3>Evening Greens</h3>
                      <p>
                    Wind down with soothing evening sounds as the sun sets on the course.
                    </p>
                    </div>
                  </div>
                </div>
              </section>
              <div className={"dreamlinks-app-banner"}>
                <div className={"dreamlinks-app-content"}>
                  <div className={"dreamlinks-app-icon"}>
                    <img draggable="false" role="img" className={"emoji"} alt="🎧" src="/site-assets/557dd48d3dae0d08-28e04093278fa99f3b3b4a62fe93ee57.png" />
                  </div>
                  <div className={"dreamlinks-app-text"}>
                    <h3>Bring the Peace of the Course to Your Everyday</h3>
                    <p>Download DreamLinks and start your relaxing journey today.</p>
                  </div>
                </div>
                <div className={"dreamlinks-store-buttons"}><a className={"dreamlinks-store"} href={"https://play.google.com/store/apps/details?id=com.wm.dreamlinks&pcampaignid=web_share"}>{" "}<span className={"store-icon"}>▶</span>{" "}<span>{" "}<small>GET IT ON</small>{" "}<strong>Google Play</strong>{" "}</span>{" "}</a> <a className={"dreamlinks-store"} href="https://apps.apple.com/in/app/dreamlinks/id6758689668">{" "}<span className={"store-icon"}></span>{" "}<span>{" "}<small>Download on the</small>{" "}<strong>App Store</strong>{" "}</span>{" "}</a></div>
              </div>
            </div>
            <div className={"elementor-element elementor-element-4766a98 elementor-widget elementor-widget-apper_faq"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm_faq-widget clr"}>
                  <div className={"card"}>
                    <div className={"card-header"}>
                      <h3 className={"acm_faq-title"}>
    								1. What are golf sounds?								<div className={"plus-expand"}><div className={"plus-icon"} /></div></h3>
                    </div>
                    <div className={"card-body acm_faq-content"}>
                      <div className={"card"}>
                        <div className={"card-body acm_faq-content"}>
                          <p>Golf sounds are calming audio experiences inspired by the peaceful atmosphere of a golf course, including gentle nature ambience, birds, breeze, and subtle course sounds designed for relaxation and focus.</p>
                        </div>
                      </div>
                      <div className={"card"}>
                        <div className={"card-header"}> </div>
                      </div>
                    </div>
                  </div>
                  <div className={"card"}>
                    <div className={"card-header"}>
                      <h3 className={"acm_faq-title"}>
    								2. Can golf sounds help me relax before sleep?								<div className={"plus-expand"}><div className={"plus-icon"} /></div></h3>
                    </div>
                    <div className={"card-body acm_faq-content"}>
                      <div className={"card"}>
                        <div className={"card-body acm_faq-content"}>
                          <p>Yes. Peaceful golf-inspired soundscapes can create a calm environment before bedtime, helping you unwind and transition into a more relaxing nighttime routine.</p>
                        </div>
                      </div>
                      <div className={"card"}>
                        <div className={"card-header"}> </div>
                      </div>
                    </div>
                  </div>
                  <div className={"card"}>
                    <div className={"card-header"}>
                      <h3 className={"acm_faq-title"}>
    								3. Can I use golf sounds while working or studying?								<div className={"plus-expand"}><div className={"plus-icon"} /></div></h3>
                    </div>
                    <div className={"card-body acm_faq-content"}>
                      <div className={"card"}>
                        <div className={"card-body acm_faq-content"}>
                          <p>Absolutely. Gentle ambient sounds can provide a peaceful background while working, reading, studying, or simply taking a quiet break during the day.</p>
                        </div>
                      </div>
                      <div className={"card"}>
                        <div className={"card-header"}> </div>
                      </div>
                    </div>
                  </div>
                  <div className={"card"}>
                    <div className={"card-header"}>
                      <h3 className={"acm_faq-title"}>
    								4. What types of golf sounds are available?								<div className={"plus-expand"}><div className={"plus-icon"} /></div></h3>
                    </div>
                    <div className={"card-body acm_faq-content"}>
                      <p>DreamLinks can offer different golf-inspired experiences, including Morning Fairway, Birds &amp; Nature, Golf Swing Sounds, Gallery Hush, and Evening Greens, giving you different atmospheres for different moments.</p>
                    </div>
                  </div>
                  <div className={"card"}>
                    <div className={"card-header"}>
                      <h3 className={"acm_faq-title"}>
    								5. How can I listen to golf sounds with DreamLinks?								<div className={"plus-expand"}><div className={"plus-icon"} /></div></h3>
                    </div>
                    <div className={"card-body acm_faq-content"}>
                      <div className={"elementor elementor-2276"} data-elementor-id="2276">
                        <section className={"elementor-section elementor-top-section elementor-element elementor-element-ffae073 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"} style={{ width: "1521px", left: "0px" }} data-site-import-responsive="324">
                          <div className={"elementor-container elementor-column-gap-default"}>
                            <div className={"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b0be20a"}>
                              <div className={"elementor-widget-wrap elementor-element-populated"}>
                                <div className={"elementor-element elementor-element-4766a98 elementor-widget elementor-widget-apper_faq"}>
                                  <div className={"elementor-widget-container"}>
                                    <div className={"acm_faq-widget clr"}>
                                      <div className={"card"}>
                                        <div className={"card-body acm_faq-content"}>
                                          <p>Open DreamLinks, explore the golf soundscapes, choose the experience that matches your mood, and start listening. You can use relaxing golf ambience whenever you want to bring a little of the peaceful course atmosphere into your day.</p>
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
                </div>
              </div>
            </div>
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
    const loopingVideos = Array.from(
      document.querySelectorAll<HTMLVideoElement>("video[loop]:not([autoplay]):not([controls])"),
    )
      .filter((video) => video.muted && !video.closest("[data-site-import-carousel-store]"))
      .slice(0, 32);
    const videoObserver = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      }
    });
    loopingVideos.forEach((video) => videoObserver.observe(video));
    document.addEventListener("load", handleScroll, true);
    resizeSummaries();
    const parallaxFrame = requestAnimationFrame(handleScroll);
    window.addEventListener("resize", resizeSummaries);
    document.addEventListener("scroll", handleScroll, { passive: true, capture: true });
    return () => {
      videoObserver.disconnect();
      loopingVideos.forEach((video) => video.pause());
      cancelAnimationFrame(parallaxFrame);
      syncScrollHeaders(true);
      document.removeEventListener("load", handleScroll, true);
      window.removeEventListener("resize", resizeSummaries);
      document.removeEventListener("scroll", handleScroll, true);
    };
  }, []);
}
