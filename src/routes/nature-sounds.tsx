import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/nature-sounds.css?raw";

export const Route = createFileRoute("/nature-sounds")({
  head: () => ({ meta: [{ title: "Nature Sounds | DreamLinks" }, { name: "description", content: "Bring the calm of nature with rain, ocean waves, forests, rivers, and birdsong for relaxation and focus." }, { property: "og:title", content: "Nature Sounds | DreamLinks" }, { property: "og:description", content: "Bring the calm of nature with rain, ocean waves, forests, rivers, and birdsong for relaxation and focus." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
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
      				Nature Sounds				</h1><nav className={"site-breadcrumbs clr"}><span><span><a href="/">Home</a></span> » <span className={"breadcrumb_last"} aria-current="page">Nature Sounds</span></span></nav></div></div>
          </div>
          <main id="main" className={"site-main clr"}>
            <div id="content-wrap" className={"page-content \x63ontainer clr"}>
              <div id="primary" className={"\x63ontent-area clr"}>
                <div id="content" className={"site-content clr"}>
                  <ImportedArticleNatureSounds />
                </div>
              </div>
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
        <li id="menu-item-2278" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-2278"}>
          <a className={"acm-mmenu-item-a"} href="/golf-sounds">Golf Sounds</a>
        </li>
        <li id="menu-item-2286" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-2286"}>
          <a className={"acm-mmenu-item-a"} href="/baby-sleep-sounds">Baby Sleep Sounds</a>
        </li>
        <li id="menu-item-2608" className={"menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-2279 current_page_item menu-item-2608"}>
          <a aria-current="page" className={"acm-mmenu-item-a"} href="#">Nature Sounds</a>
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
                  <li className={"menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-2279 current_page_item menu-item-2608"}>
                    <a className={"menu-link"} href="#">
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

function ImportedArticleNatureSounds() {
  return (
    <article className={"single-page-article clr"}>
      <div className={"entry clr"} itemProp="text">
        <div data-elementor-id="2279" className={"elementor elementor-2279"}>
          <section className={"elementor-section elementor-top-section elementor-element elementor-element-97e9029 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"} style={{ width: "1521px", left: "-120.5px" }} data-site-import-responsive="59">
            <div className={"elementor-container elementor-column-gap-default"}>
              <div className={"elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-be244e8 animated slideInLeft"}>
                <div className={"elementor-widget-wrap elementor-element-populated"}>
                  <div className={"elementor-element elementor-element-7a472b5 elementor-widget__width-initial elementor-widget elementor-widget-heading"}>
                    <h2 className={"elementor-heading-title elementor-size-default"}>Nature Sounds</h2>
                  </div>
                  <div className={"elementor-element elementor-element-ca081ab elementor-widget__width-initial elementor-widget elementor-widget-text-editor"}>
                    <p><strong>Bring the Calm of Nature With You<br /><br /></strong>Escape into peaceful sounds inspired by the natural world. Enjoy calming rain, gentle ocean waves, peaceful forests, flowing rivers, and birdsong—perfect for relaxing, focusing, meditating, or creating a soothing bedtime routine.<br /><strong>Download Dream Links and find your perfect soundscape, wherever you are.</strong></p>
                  </div>
                  <div className={"elementor-element elementor-element-1f51884 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget elementor-widget-apper_img_button"}>
                    <div className={"elementor-widget-container"}>
                      <div className={"acm-button-wrap btn-dual btn-left"}><a className={"acm-button acm_py-3 acm_inline-block acm_px-10 acm_no-underline acm_mt-0 acm_text-sm acm-btn-outline acm-btn-outline"} href="https://apps.apple.com/in/app/dreamlinks/id6758689668">{" "}</a> <a className={"acm-button acm-button-second acm_py-3 acm_inline-block acm_px-10 acm_no-underline acm_mt-0 acm_text-sm acm-btn-outline acm-btn-outline"} href={"https://play.google.com/store/apps/details?id=com.wm.dreamlinks&pcampaignid=web_share"}>{" "}</a></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-dd0adac"}>
                <div className={"elementor-widget-wrap elementor-element-populated"}>
                  <div className={"elementor-element elementor-element-a774617 elementor-widget elementor-widget-image animated zoomInRight"}>
                    <img fetchPriority="high" decoding="async" width="1024" height="576" src="/site-assets/3eb084799f037a5a.webp" className={"attachment-large \x73ize-large wp-image-3034"} alt="" srcSet="/site-assets/3eb084799f037a5a.webp 1024w, /site-assets/08a89df381592594.webp 300w, /site-assets/a673547393edc6c5.webp 768w, /site-assets/2849ab562696fbbe.webp 1536w, /site-assets/15e933912140c622.webp 1672w" sizes="(max-width: 1024px) 100vw, 1024px" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={"elementor-section elementor-top-section elementor-element elementor-element-4f64b0f elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"} style={{ width: "1521px", left: "-120.5px" }} data-site-import-responsive="81">
            <div className={"elementor-container elementor-column-gap-default"}>
              <div className={"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4f4f809"}>
                <div className={"elementor-widget-wrap elementor-element-populated"}>
                  <div className={"elementor-element elementor-element-4adb1d9 elementor-widget elementor-widget-heading animated bounceInLeft"}>
                    <h2 className={"elementor-heading-title elementor-size-default"}>Nature Sounds for Relaxation, Focus &amp; Better Sleep</h2>
                  </div>
                  <div className={"elementor-element elementor-element-2df223f elementor-widget elementor-widget-text-editor animated bounceInRight"}>
                    <p>Nature has a natural way of helping us slow down, breathe, and reconnect with the present moment. The gentle rhythm of rainfall, the sound of ocean waves, birds singing through the trees, or a peaceful river flowing over rocks can create a calming atmosphere wherever you are. Dream Links brings these natural soundscapes into one easy-to-use app, making it simple to enjoy the peaceful feeling of nature at home, at work, while travelling, or before bedtime.</p>
                    <p>Our Nature Sounds collection includes a variety of relaxing environments designed to suit different moods and moments. Listen to gentle rain when you want to unwind, enjoy ocean waves when you need a peaceful escape, or immerse yourself in forest ambience when you’re looking for a quiet background while reading or focusing. Birdsong, flowing rivers, waterfalls, wind through the trees, and nighttime nature sounds offer even more ways to create an atmosphere that feels calm and refreshing.</p>
                    <p>Nature sounds can be a wonderful addition to your everyday routine. Use them in the morning while preparing for the day, during work or study sessions when you want a peaceful background, or in the evening when it’s time to slow down. They can also complement meditation, relaxation exercises, reading, yoga, or your bedtime routine. With Dream Links, you can choose sounds that match the moment rather than relying on the same environment every day.</p>
                    <p>Dream Links is designed for everyone. Although the brand is inspired by the peaceful atmosphere of golf courses, the app goes far beyond golf-inspired sounds. You can explore nature sounds alongside healing sounds, sleep sounds, and other relaxing audio experiences. Whether you’re a golfer, a nature lover, someone who enjoys peaceful background ambience, or simply looking for a better way to relax, there’s something for you.</p>
                    <p>Create your own peaceful escape with Dream Links and bring the sounds of nature wherever you go. From the first drops of morning rain to the gentle rhythm of ocean waves at sunset, discover calming audio experiences designed to help you relax, focus, unwind, and enjoy a more peaceful everyday routine.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={"elementor-section elementor-top-section elementor-element elementor-element-88718bb elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"} style={{ width: "1521px", left: "-120.5px" }} data-site-import-responsive="93">
            <div className={"elementor-container elementor-column-gap-default"}>
              <div className={"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7f5ecbb"}>
                <div className={"elementor-widget-wrap elementor-element-populated"}>
                  <div className={"elementor-element elementor-element-07bf772 elementor-widget elementor-widget-heading"}>
                    <h3 className={"elementor-heading-title elementor-size-default"}>Ready To Relax?</h3>
                  </div>
                  <div className={"elementor-element elementor-element-38419a1 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"}>
                    <p>Discover Calming playlists for sleep, meditation, focus and mindfulness.</p>
                  </div>
                  <div className={"elementor-element elementor-element-65e59b9 elementor-align-center elementor-widget elementor-widget-button"}>
                    <a className={"elementor-button elementor-button-link elementor-size-sm"} href="https://apps.apple.com/in/app/dreamlinks/id6758689668">
                      <span className={"elementor-button-content-wrapper"}>
                        <span className={"elementor-button-text"}>Explore Nature Sunds</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className={"elementor-section elementor-top-section elementor-element elementor-element-fa56080 elementor-section-stretched elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"} style={{ width: "1521px", left: "-120.5px" }} data-site-import-responsive="105">
            <div className={"elementor-container elementor-column-gap-default"}>
              <div className={"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f29bcc1"}>
                <div className={"elementor-widget-wrap elementor-element-populated"}>
                  <div className={"elementor-element elementor-element-ee7d0de elementor-widget__width-initial elementor-widget elementor-widget-html"}>
                    <section className={"golf-soundscapes"}>
                      <div className={"golf-soundscapes-inner"}>
                        <div className={"golf-heading"}>
                          <h2>Why Nature Sounds?</h2>
                          <div className={"golf-divider"}><span /> <i>◆</i> <span /></div>
                        </div>
                        <div className={"golf-cards"}>
                          <div className={"golf-card"}>
                            <div className={"golf-icon"}>
                              <span>
                                <img draggable="false" role="img" className={"emoji"} alt="🌿" src="/site-assets/fcdcb7775e4d9d00-6a11b22351953142b74ab46ccb43d14c.png" />
                              </span>
                            </div>
                            <h3>Relax Naturally</h3>
                            <p>
                        Create a peaceful environment that helps you unwind.
                    </p>
                          </div>
                          <div className={"golf-card"}>
                            <div className={"golf-icon"}>
                              <span>
                                <img draggable="false" role="img" className={"emoji"} alt="🎯" src="/site-assets/bbb0fb5570054565-a0fc56535defff3f0a41e469bbc5c22b.png" />
                              </span>
                            </div>
                            <h3>Improve Focus</h3>
                            <p>
                       Use calming natural ambience to stay focused.
                    </p>
                          </div>
                          <div className={"golf-card"}>
                            <div className={"golf-icon"}>
                              <span>
                                <img draggable="false" role="img" className={"emoji"} alt="🌙" src="/site-assets/e0a4a0156941a054-ca7e098e4e063f0731a4ec4cca4fceba.png" />
                              </span>
                            </div>
                            <h3>Prepare for Sleep</h3>
                            <p>
                        Slow down your mind with soothing bedtime sounds.
                    </p>
                          </div>
                          <div className={"golf-card"}>
                            <div className={"golf-icon"}>
                              <span>
                                <img draggable="false" role="img" className={"emoji"} alt="🌊" src="/site-assets/75119acde3cb0273-fd4e153d8fb8ac96abcfd57a90f3b9bc.png" />
                              </span>
                            </div>
                            <h3>Escape Anywhere</h3>
                            <p>
                        Bring the feeling of nature wherever you go.
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
                          <h3>Bring the Sounds of Nature With You</h3>
                          <p>Relax, focus, meditate, or simply enjoy a peaceful moment wherever you are.</p>
                        </div>
                      </div>
                      <div className={"dreamlinks-store-buttons"}><a className={"dreamlinks-store"} href={"https://play.google.com/store/apps/details?id=com.wm.dreamlinks&pcampaignid=web_share"}>{" "}<span className={"store-icon"}>▶</span>{" "}<span>{" "}<small>GET IT ON</small>{" "}<strong>Google Play</strong>{" "}</span>{" "}</a> <a className={"dreamlinks-store"} href="https://apps.apple.com/in/app/dreamlinks/id6758689668">{" "}<span className={"store-icon"}></span>{" "}<span>{" "}<small>Download on the</small>{" "}<strong>App Store</strong>{" "}</span>{" "}</a></div>
                    </div>
                  </div>
                  <div className={"elementor-element elementor-element-08cf9f6 elementor-widget elementor-widget-apper_faq"}>
                    <div className={"elementor-widget-container"}>
                      <div className={"acm_faq-widget clr"}>
                        <div className={"card"}>
                          <div className={"card-header"}>
                            <h3 className={"acm_faq-title"}>
    								1. What nature sounds are available on Dream Links?								<div className={"plus-expand"}><div className={"plus-icon"} /></div></h3>
                          </div>
                          <div className={"card-body acm_faq-content"}>
                            <p>Dream Links offers a variety of calming nature sounds, including rain, ocean waves, forests, birdsong, flowing rivers, waterfalls, wind, and peaceful nighttime ambience.</p>
                          </div>
                        </div>
                        <div className={"card"}>
                          <div className={"card-header"}>
                            <h3 className={"acm_faq-title"}>
    								2. Can I use nature sounds for sleep?								<div className={"plus-expand"}><div className={"plus-icon"} /></div></h3>
                          </div>
                          <div className={"card-body acm_faq-content"}>
                            <p>Yes. Dream Links nature sounds can help create a calm, peaceful environment for your bedtime routine and relaxation.</p>
                          </div>
                        </div>
                        <div className={"card"}>
                          <div className={"card-header"}>
                            <h3 className={"acm_faq-title"}>
    								3. Can I use nature sounds while working or studying?								<div className={"plus-expand"}><div className={"plus-icon"} /></div></h3>
                          </div>
                          <div className={"card-body acm_faq-content"}>
                            <p>Yes. Calming nature ambience can provide a peaceful background while you work, read, study, or focus.</p>
                          </div>
                        </div>
                        <div className={"card"}>
                          <div className={"card-header"}>
                            <h3 className={"acm_faq-title"}>
    								4. Can I create my own nature sound experience?								<div className={"plus-expand"}><div className={"plus-icon"} /></div></h3>
                          </div>
                          <div className={"card-body acm_faq-content"}>
                            <p>Yes. Dream Links lets you personalize your listening experience with curated sounds and playlists to match your mood and routine.</p>
                          </div>
                        </div>
                        <div className={"card"}>
                          <div className={"card-header"}>
                            <h3 className={"acm_faq-title"}>
    								5. Does Dream Links have sounds other than nature sounds?								<div className={"plus-expand"}><div className={"plus-icon"} /></div></h3>
                          </div>
                          <div className={"card-body acm_faq-content"}>
                            <p>Yes. Nature sounds are just one part of Dream Links. The app also includes golf-inspired sounds, healing sounds, sleep sounds, and other relaxing audio experiences designed for everyone.</p>
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
    </article>
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
