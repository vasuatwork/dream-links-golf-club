import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/frequently-asked-questions.css?raw";

export const Route = createFileRoute("/frequently-asked-questions")({
  head: () => ({ meta: [{ title: "DreamLinks FAQ | App, Sounds, and Downloads" }, { name: "description", content: "Find answers about DreamLinks, available sound collections, app downloads, and getting a more relaxing night's sleep." }, { property: "og:title", content: "DreamLinks FAQ | App, Sounds, and Downloads" }, { property: "og:description", content: "Find answers about DreamLinks, available sound collections, app downloads, and getting a more relaxing night's sleep." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  staticData: { importedDocument: { html: { "lang": "en-US" }, body: { "className": "page page-id-1154 acmthemes-theme acm-btn-default default-breakpoint blog-2-columns has-breadcrumbs elementor-kit-7", "data-elementor-device-mode": "desktop" } } },
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
            <div className={"page-header-wrap cross_shade"}>
              <svg id="cross-shade-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1879.8 219" xmlSpace="preserve" {...({ version: "1.1", "enable-background": "new 0 0 1879.8 219" } as any)}>
                <polygon className={"shade-path1"} opacity="0.3" fill="#FFFFFF" points="0,102.5 1209.9,209.5 1879.8,0 1879.8,219 0,219 " />
                <polygon className={"shade-path2"} fill="#F6F4FE" points="0,142.5 1209.9,199.5 1879.8,80 1879.8,219 0,219 " />
              </svg>
              <div className={"\x63ontainer clr page-header-inner"}>
                <h1 className={"page-header-title clr"} itemProp="headline">
      				Frequently asked questions				</h1>
                <nav className={"site-breadcrumbs clr"}>
                  <span><span><a href="/">Home</a></span> » <span className={"breadcrumb_last"} aria-current="page">Frequently asked questions</span></span>
                </nav>
              </div>
            </div>
          </div>
          <main id="main" className={"site-main clr"}>
            <div data-elementor-id="1154" className={"elementor elementor-1154"}>
              <ImportedSectionGetQuickAnswersTo />
              <ImportedSection />
              <ImportedSection2 />
              <ImportedSectionDownloadForFreeFrom />
            </div>
            <div className={"purple_backdrop"} />
          </main>
          <div id="subscribe-form">
            <div data-elementor-id="289" className={"elementor elementor-289"}>
              <ImportedSectionSubscribeToNewsletter />
            </div>
          </div>
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
        <li id="menu-item-2275" className={"menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2275"}>
          <em className={"mm-counter"}>5</em>
          <a className={"mm-subopen"} href="#mm-m0-p1" />
          <a className={"acm-mmenu-item-a"} href="#">Sounds</a>
        </li>
        <li id="menu-item-1953" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-1953"}>
          <a className={"acm-mmenu-item-a"} href="/blog">Blog</a>
        </li>
        <li id="menu-item-2183" className={"menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1154 current_page_item menu-item-2183"}>
          <a aria-current="page" className={"acm-mmenu-item-a"} href="#">FAQ</a>
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
              <li className={"menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-1154 current_page_item menu-item-2183"}>
                <a className={"menu-link"} href="#">
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

function ImportedSectionGetQuickAnswersTo() {
  return (
    <section className={"elementor-section elementor-top-section elementor-element elementor-element-6e83290e elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right animated fadeInUp"}>
      <div className={"elementor-container elementor-column-gap-default"}>
        <div className={"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2744fa2b"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <section className={"elementor-section elementor-inner-section elementor-element elementor-element-30f0cd2a elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
              <div className={"elementor-container elementor-column-gap-default"}>
                <div className={"elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-264f9d0c"} data-element_type="column">
                  <div className={"elementor-widget-wrap elementor-element-populated"}>
                    <div className={"elementor-element elementor-element-71a8f395 elementor-widget elementor-widget-apper_heading"}>
                      <div className={"elementor-widget-container"}>
                        <div className={"acm-heading no-line \x63ontent-center-align-align"}>
                          <h2 className={"acm-title"}>
                            <span>Get quick answers to your questions</span>
                          </h2>
                          <div className={"acm-heading-border"} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={"elementor-section elementor-inner-section elementor-element elementor-element-1cf6a57 elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
              <div className={"elementor-container elementor-column-gap-default"}>
                <div className={"elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-4fcf40c7"} data-element_type="column">
                  <div className={"elementor-widget-wrap elementor-element-populated"}>
                    <div className={"elementor-element elementor-element-66b2ebbe elementor-widget elementor-widget-text-editor"}>
                      <p>Get answers to your questions about our awesome app! Learn more and explore its features now.</p>
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
    <section className={"elementor-section elementor-top-section elementor-element elementor-element-63936914 elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right animated fadeInUp"}>
      <div className={"elementor-container elementor-column-gap-default"}>
        <div className={"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4115143d"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-30dec716 elementor-widget elementor-widget-apper_faq"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm_faq-widget clr"}>
                  <div className={"card"}>
                    <div className={"card-header"}>
                      <h3 className={"acm_faq-title"}>
    								What is Dream Links?								<div className={"plus-expand"}><div className={"plus-icon"} /></div></h3>
                    </div>
                    <div className={"card-body acm_faq-content"}>
                      <p>
                        <span>Dream Links is a relaxation, sleep, and wellness app inspired by the peaceful atmosphere of golf courses. In addition to golf-inspired soundscapes, the app offers a wide variety of calming sounds, including nature, rain, ocean waves, white noise, meditation audio, and more to help you relax, focus, and sleep better.</span>
                      </p>
                    </div>
                  </div>
                  <div className={"card"}>
                    <div className={"card-header"}>
                      <h3 className={"acm_faq-title"}>
    								Is Dream Links only for golfers?								<div className={"plus-expand"}><div className={"plus-icon"} /></div></h3>
                    </div>
                    <div className={"card-body acm_faq-content"}>
                      <p>
                        <span>Not at all! While Dream Links is inspired by the tranquility of golf courses, it's designed for everyone. Whether you're looking to reduce stress, improve focus, meditate, or enjoy a better night's sleep, you'll find a wide range of sounds to suit your needs.</span>
                      </p>
                    </div>
                  </div>
                  <div className={"card"}>
                    <div className={"card-header"}>
                      <h3 className={"acm_faq-title"}>
    								How can I download the Dream Links app?								<div className={"plus-expand"}><div className={"plus-icon"} /></div></h3>
                    </div>
                    <div className={"card-body acm_faq-content"}>
                      <p>
                        <span>You can download Dream Links from both the Google Play Store and the Apple App Store. Simply click the download buttons on our website or search for <strong>Dream Links</strong> in your preferred app store.</span>
                      </p>
                    </div>
                  </div>
                  <div className={"card"}>
                    <div className={"card-header"}>
                      <h3 className={"acm_faq-title"}>
    								What types of sounds are available in the app?								<div className={"plus-expand"}><div className={"plus-icon"} /></div></h3>
                    </div>
                    <div className={"card-body acm_faq-content"}>
                      <p>
                        <span>Dream Links offers an extensive collection of relaxing audio, including golf course ambience, rain, ocean waves, forests, birdsong, flowing streams, white noise, meditation music, sleep sounds, and many more. New sounds are added regularly to keep your experience fresh and enjoyable.</span>
                      </p>
                    </div>
                  </div>
                  <div className={"card"}>
                    <div className={"card-header"}>
                      <h3 className={"acm_faq-title"}>
    								Is Dream Links available for Android and iPhone?								<div className={"plus-expand"}><div className={"plus-icon"} /></div></h3>
                    </div>
                    <div className={"card-body acm_faq-content"}>
                      <p>Yes! Dream Links is available for both <strong>Android</strong> and <strong>iOS</strong> devices. Download the app from the Google Play Store or Apple App Store and start enjoying a personalized relaxation experience wherever you are.</p>
                      <p> </p>
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

function ImportedSection2() {
  return (
    <section className={"elementor-section elementor-top-section elementor-element elementor-element-9c03b61 elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right animated fadeInRight"}>
      <div className={"elementor-container elementor-column-gap-default"}>
        <div className={"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7a13cc9e"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <section className={"elementor-section elementor-inner-section elementor-element elementor-element-23966699 acm_section_80 elementor-section-boxed elementor-section-height-default elementor-section-height-default right"}>
              <div className={"elementor-background-overlay"} />
              <div className={"elementor-container elementor-column-gap-default"}>
                <div className={"elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-439b47da"} data-element_type="column">
                  <div className={"elementor-widget-wrap elementor-element-populated"}>
                    <div className={"elementor-element elementor-element-5789689 elementor-widget elementor-widget-heading"}>
                      <h3 className={"elementor-heading-title elementor-size-default"}>Still have questions?</h3>
                    </div>
                    <div className={"elementor-element elementor-element-dbfd486 elementor-widget elementor-widget-text-editor"}>
                      <p>Get your answers straight from the experts – contact our sales team for more info about our product features and pricing.</p>
                    </div>
                    <div className={"elementor-element elementor-element-2b1dd012 elementor-widget elementor-widget-text-editor"}>
                      <p><a href="/contact"><strong>Contact our sales team</strong></a> <i aria-hidden="true" className={"fas fa-long-arrow-alt-right"} /></p>
                    </div>
                  </div>
                </div>
                <div className={"elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-33bc9691"} data-element_type="column">
                  <div className={"elementor-widget-wrap elementor-element-populated"}>
                    <div className={"elementor-element elementor-element-2450282 elementor-widget elementor-widget-image"}>
                      <img fetchPriority="high" decoding="async" width="222" height="300" src="/site-assets/b89c0ca437014f63.png" className={"attachment-medium \x73ize-medium wp-image-1926"} alt="" srcSet="/site-assets/b89c0ca437014f63.png 222w, /site-assets/7ca8e4190d7077df.png 570w" sizes="(max-width: 222px) 100vw, 222px" />
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

function ImportedSectionDownloadForFreeFrom() {
  return (
    <section className={"elementor-section elementor-top-section elementor-element elementor-element-5400f2cd acm_section_80 elementor-section-boxed elementor-section-height-default elementor-section-height-default right animated fadeInUp"}>
      <div className={"elementor-container elementor-column-gap-default"}>
        <div className={"elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-400519a5"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-61c7686e elementor-widget elementor-widget-apper_heading"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-heading no-line \x63ontent-left-align"}>
                  <h2 className={"acm-title"}>Download for free from Apple &amp; Play Store														</h2>
                  <div className={"acm_heading-desc"}>Get instant access to thousands of apps with a free download from the Apple and Play Store. Enjoy fast and convenient access to your favorite apps!</div>
                  <div className={"acm-heading-border"} />
                </div>
              </div>
            </div>
            <div className={"elementor-element elementor-element-4b51a7c8 elementor-widget elementor-widget-apper_img_button"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-button-wrap btn-dual btn-left"}><a className={"acm-button acm_py-3 acm_inline-block acm_px-10 acm_no-underline acm_mt-0 acm_text-sm acm-btn-outline acm-btn-outline"} href="https://apps.apple.com/in/app/dreamlinks/id6758689668">{" "}</a> <a className={"acm-button acm-button-second acm_py-3 acm_inline-block acm_px-10 acm_no-underline acm_mt-0 acm_text-sm acm-btn-solid acm-btn-solid"} href={"https://play.google.com/store/apps/details?id=com.wm.dreamlinks&pcampaignid=web_share"}>{" "}</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className={"elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-88dcfec elementor-hidden-mobile"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-7ceb8934 elementor-widget elementor-widget-image"}>
              <img decoding="async" width="428" height="926" src="/site-assets/937b5db52b0d7038.png" className={"attachment-large \x73ize-large wp-image-1855"} alt="" srcSet="/site-assets/937b5db52b0d7038.png 428w, /site-assets/fcb0931854ded6a9.png 139w" sizes="(max-width: 428px) 100vw, 428px" />
            </div>
          </div>
        </div>
        <div className={"elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-1a17a16f"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-54556352 elementor-widget elementor-widget-image"}>
              <img decoding="async" width="683" height="1024" src="/site-assets/f7407e38a0f56b6a.png" className={"attachment-large \x73ize-large wp-image-2019"} alt="" srcSet="/site-assets/f7407e38a0f56b6a.png 683w, /site-assets/f02c148fff4a01b0.png 200w, /site-assets/2a392203f397f39b.png 768w, /site-assets/28a1d97dbe30281e.png 1024w" sizes="(max-width: 683px) 100vw, 683px" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionSubscribeToNewsletter() {
  return (
    <section className={"elementor-section elementor-top-section elementor-element elementor-element-97cac03 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
      <div className={"elementor-container elementor-column-gap-default"}>
        <div className={"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-79f0c415"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <section className={"elementor-section elementor-inner-section elementor-element elementor-element-697d30a9 elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
              <div className={"elementor-container elementor-column-gap-no"}>
                <div className={"elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-43f83003"} data-element_type="column">
                  <div className={"elementor-widget-wrap elementor-element-populated"}>
                    <div className={"elementor-element elementor-element-13fabd9 elementor-widget elementor-widget-apper_heading"}>
                      <div className={"elementor-widget-container"}>
                        <div className={"acm-heading no-line \x63ontent-left-align"}>
                          <h2 className={"acm-title"}>Subscribe to newsletter														</h2>
                          <div className={"acm_heading-desc"}>Get the scoop on all of our new updates!</div>
                          <div className={"acm-heading-border"} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-502a42f5"} data-element_type="column">
                  <div className={"elementor-widget-wrap elementor-element-populated"}>
                    <div className={"elementor-element elementor-element-59d217ed elementor-widget elementor-widget-apper_newsletter"}>
                      <div className={"elementor-widget-container"}>
                        <div className={"acm-mailchimp-form subscribe-style-curved"} />
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
