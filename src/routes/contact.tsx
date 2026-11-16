import type { CSSProperties } from "react";
import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/contact.css?raw";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact Dream Links | Customer Support \u0026 Sleep App Help" }] }),
  staticData: { importedDocument: { html: { "lang": "en-US" }, body: { "className": "page page-id-366 acmthemes-theme acm-btn-default default-breakpoint blog-2-columns has-breadcrumbs elementor-kit-7", "data-elementor-device-mode": "desktop" } } },
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
      				Contact				</h1><nav className={"site-breadcrumbs clr"}><span><span><a href="/">Home</a></span> » <span className={"breadcrumb_last"} aria-current="page">Contact</span></span></nav></div></div>
          </div>
          <main id="main" className={"site-main clr"}>
            <div data-elementor-id="366" className={"elementor elementor-366"}>
              <ImportedSectionLeaveAMessage />
              <section className={"elementor-section elementor-top-section elementor-element elementor-element-3f2bee4 elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
                <div className={"elementor-container elementor-column-gap-default"}>
                  <div className={"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a4d1324"} data-element_type="column">
                    <div className={"elementor-widget-wrap elementor-element-populated"}>
                      <div className={"elementor-element elementor-element-e467b22 elementor-widget elementor-widget-image"}>
                        <a href={"https://www.google.com/maps/place/Overland+Wolf+Center/@41.2490649,-96.0207025,17z/data=!3m1!4b1!4m6!3m5!1s0x87938da950f4601b:0x40c9099b7184221c!8m2!3d41.2490649!4d-96.0207025!16s%2Fg%2F1th5d1p_?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDkwMS4wIKXMDSoASAFQAw%3D%3D"}>
                          <img loading="lazy" decoding="async" width="1024" height="758" src="/site-assets/148b83015b197f29.webp" className={"attachment-large \x73ize-large wp-image-3046"} alt="" srcSet="/site-assets/148b83015b197f29.webp 1024w, /site-assets/044ae5a51ef52724.webp 300w, /site-assets/7f62e00874523065.webp 768w, /site-assets/7054f820fa2b0531.webp 1457w" sizes="(max-width: 1024px) 100vw, 1024px" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
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
        <li id="menu-item-1952" className={"menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-366 current_page_item menu-item-1952"}>
          <a aria-current="page" className={"acm-mmenu-item-a"} href="#">Contact</a>
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
              <li className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-1951"}>
                <a className={"menu-link"} href="/about-us">
                  <span className={"\x74ext-wrap"}>About Us</span>
                </a>
              </li>
              <li className={"menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-366 current_page_item menu-item-1952"}>
                <a className={"menu-link"} href="#">
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

function ImportedSectionLeaveAMessage() {
  return (
    <section className={"elementor-section elementor-top-section elementor-element elementor-element-4b861b1 elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
      <div className={"elementor-container elementor-column-gap-default"}>
        <div className={"elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-94107af"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-87cb569 elementor-widget elementor-widget-apper_heading"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-heading no-line \x63ontent-center-align-align"}>
                  <h2 className={"acm-title"}>
                    <span>Leave a message</span>
                  </h2>
                  <div className={"acm_heading-desc"}>
                    <p>Please fill in all required fields.</p>
                  </div>
                  <div className={"acm-heading-border"} />
                </div>
              </div>
            </div>
            <div className={"elementor-element elementor-element-52af4a7 elementor-widget elementor-widget-wpforms"}>
              <div className={"elementor-widget-container"}>
                <div className={"wpforms-container wpforms-container-full wpforms-render-modern"} id="wpforms-2102">
                  <form id="wpforms-form-2102" className={"wpforms-validate wpforms-form wpforms-ajax-form"} method="post" encType="multipart/form-data" noValidate>
                    <div id="wpforms-error-noscript" style={{ display: "none" }}>Please enable JavaScript in your browser to complete this form.</div>
                    <div className={"wpforms-field-container"}>
                      <div id="wpforms-2102-field_2-container" className={"wpforms-field wpforms-field-text"} style={{ position: "absolute", overflow: "hidden", display: "inline", height: "1px", width: "1px", zIndex: "-1000", padding: "0px" }}><label className={"wpforms-field-label"} htmlFor="wpforms-2102-field_2" aria-hidden="true" style={{ counterIncrement: "none" } as CSSProperties} /><input type="text" id="wpforms-2102-field_2" className={"wpforms-field-medium"} name="wpforms[fields][2]" aria-hidden="true" style={{ visibility: "hidden" }} tabIndex={-1} /></div>
                      <div id="wpforms-2102-field_5-container" className={"wpforms-field wpforms-field-text"}>
                        <label className={"wpforms-field-label"} htmlFor="wpforms-2102-field_5">Name <span className={"wpforms-required-label"} aria-hidden="true">*</span></label>
                        <input type="text" id="wpforms-2102-field_5" className={"wpforms-field-medium wpforms-field-required"} name="wpforms[fields][5]" aria-errormessage="wpforms-2102-field_5-error" aria-describedby="wpforms-2102-field_5-description" required />
                        <div id="wpforms-2102-field_5-description" className={"wpforms-field-description"}>Full name</div>
                      </div>
                      <div id="wpforms-2102-field_6-container" className={"wpforms-field wpforms-field-email"}>
                        <label className={"wpforms-field-label"} htmlFor="wpforms-2102-field_6">Email <span className={"wpforms-required-label"} aria-hidden="true">*</span></label>
                        <input type="email" id="wpforms-2102-field_6" className={"wpforms-field-medium wpforms-field-required"} name="wpforms[fields][6]" spellCheck="false" aria-errormessage="wpforms-2102-field_6-error" required />
                      </div>
                      <div id="wpforms-2102-field_1-container" className={"wpforms-field wpforms-field-text"}><label className={"wpforms-field-label"} htmlFor="wpforms-2102-field_1" aria-hidden="true">Message * Message</label> <input type="text" id="wpforms-2102-field_1" className={"wpforms-field-medium"} name="wpforms[fields][1]" tabIndex={-1} aria-hidden="true" /></div>
                      <div id="wpforms-2102-field_7-container" className={"wpforms-field wpforms-field-number"}>
                        <label className={"wpforms-field-label"} htmlFor="wpforms-2102-field_7">Phone Number <span className={"wpforms-required-label"} aria-hidden="true">*</span></label>
                        <input type="number" id="wpforms-2102-field_7" className={"wpforms-field-medium wpforms-field-required"} name="wpforms[fields][7]" step="any" aria-errormessage="wpforms-2102-field_7-error" required />
                      </div>
                      <div id="wpforms-2102-field_8-container" className={"wpforms-field wpforms-field-textarea"}>
                        <label className={"wpforms-field-label"} htmlFor="wpforms-2102-field_8">Message <span className={"wpforms-required-label"} aria-hidden="true">*</span></label>
                        <textarea id="wpforms-2102-field_8" className={"wpforms-field-medium wpforms-field-required"} name="wpforms[fields][8]" aria-errormessage="wpforms-2102-field_8-error" required />
                      </div>
                    </div>
                    <div className={"wpforms-submit-container"}>
                      <input type="hidden" name="wpforms[id]" defaultValue="2102" />
                      <input type="hidden" name="page_title" defaultValue="Contact" />
                      <input type="hidden" name="page_url" defaultValue="https://dreamlinks.golf/contact/" />
                      <input type="hidden" name="url_referer" defaultValue="" />
                      <input type="hidden" name="page_id" defaultValue="366" />
                      <input type="hidden" name="wpforms[post_id]" defaultValue="366" />
                      <button type="submit" name="wpforms[submit]" id="wpforms-submit-2102" className={"wpforms-submit btn"} aria-live="assertive" value="wpforms-submit">
                        <span>Submit</span>
                      </button>
                      <img decoding="async" src="/site-assets/a2145a7a73cb93f7-e448d5af12a8c5e40e071c9865b173f0.png" className={"wpforms-submit-spinner"} style={{ display: "none" }} width="26" height="26" alt="Loading" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-9f499cc"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-cfca2e1 elementor-widget-mobile__width-initial elementor-widget elementor-widget-apper_heading"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-heading no-line \x63ontent-left-align"}>
                  <h2 className={"acm-title"}>
                    <span>Have a question?</span>
                  </h2>
                  <div className={"acm_heading-desc"}>
                    <p>To get answers to all your questions about our products, &amp; services, read our FAQs page.</p>
                  </div>
                  <div className={"acm-heading-border"} />
                </div>
              </div>
            </div>
            <div className={"elementor-element elementor-element-a053da2 elementor-widget elementor-widget-apper_button"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-button-wrap btn-left"}>
                  <a className={"acm-button acm_py-3 acm_inline-block acm_px-10 acm_no-underline acm_mt-0 acm_text-sm acm_text-white acm-btn-solid acm-btn-round acm-btn-slide-hover"} href="/frequently-asked-questions">
                    <span className={"acm_btn-text"}>
    					 Read FAQ				 </span>
                  </a>
                </div>
              </div>
            </div>
            <div className={"elementor-element elementor-element-cad1dee \x63ontent-align--left \x63ontent-align--mobile-left elementor-widget elementor-widget-apper_icon_box"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-iconbox icon-left"}>
                  <div className={"iconbox-wrap    \x61lign-left icon-type-filled "}>
                    <div className={"acm-icon"}>
                      <i aria-hidden="true" className={"icon icon-envelope"} />
                    </div>
                    <div className={"acm-icon-content"}>
                      <div className={"acm-icon-heading"}>
    						Email Us					</div>
                      <div className={"acm-icon-desc"}>
    						dreamlinks174@gmail.com					</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"elementor-element elementor-element-8a01f9c \x63ontent-align--left elementor-widget elementor-widget-apper_icon_box"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-iconbox icon-left"}>
                  <div className={"iconbox-wrap    \x61lign-left icon-type-filled "}>
                    <div className={"acm-icon"}>
                      <i aria-hidden="true" className={"icon icon-phone"} />
                    </div>
                    <div className={"acm-icon-content"}>
                      <div className={"acm-icon-heading"}>
    						Call Us					</div>
                      <div className={"acm-icon-desc"}>
    						+1 (402) 813-4360					</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"elementor-element elementor-element-9f6952e \x63ontent-align--left elementor-widget elementor-widget-apper_icon_box"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-iconbox icon-left"}>
                  <div className={"iconbox-wrap    \x61lign-left icon-type-filled "}>
                    <div className={"acm-icon"}>
                      <i aria-hidden="true" className={"fas fa-map-marker-alt"} />
                    </div>
                    <div className={"acm-icon-content"}>
                      <div className={"acm-icon-heading"}>
    						Our Location					</div>
                      <div className={"acm-icon-desc"}>
    						300 OVERLAND WOLF CENTRE 6910 PACIFIC STREET OMAHA, NEBRASKA 68106-1045					</div>
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
