import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/pages/baby-sleep-sounds.css?raw";

export const Route = createFileRoute("/baby-sleep-sounds")({
  head: () => ({ meta: [{ title: "Baby Sleep Sounds | DreamLinks" }, { name: "description", content: "Explore gentle lullabies, white noise, and nature-inspired sounds for a calmer baby bedtime routine." }, { property: "og:title", content: "Baby Sleep Sounds | DreamLinks" }, { property: "og:description", content: "Explore gentle lullabies, white noise, and nature-inspired sounds for a calmer baby bedtime routine." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  staticData: { importedDocument: { html: { "lang": "en-US" }, body: { "className": "page acmthemes-theme acm-btn-default default-breakpoint blog-2-columns has-breadcrumbs elementor-kit-7", "data-elementor-device-mode": "desktop" } } },
  component: Index,
});

function Index() {
  useImportedLayout();
  return (
    <>
      <style>{capturedCSS}</style>
      <ImportedNav />
      <div className={"\x77rap-boxshadow site clr mm-page"} id="outer-wrap">
        <div className="clr [@media_only_screen_and_(max-width:767px)]:[width:100%]!" id="wrap">
          <div className="siteheader-holder" style={{ height: "120px", display: "none" }} />
          <ImportedHeader />
          <div className="page-header">
            <div className="page-header-wrap hero_wave_light items-center min-h-[500px] [overflow:hidden] [width:100%]"><svg id="hero-wave-light-svg" width="1880" height="550" viewBox="0 0 1880 550" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_5_11)"><path className="wave-path-one" d="M1267 94.5C1164.6 25.3 1132 -11.5 1132 -35.5L1983 -218C2001.17 -101 2013.8 86.3 1983 169.5C1944.5 273.5 1773 469.5 1563 435.5C1423.5 412.914 1395 181 1267 94.5Z" fill="white" fillOpacity="0.1" /><path className="wave-path-two" d="M1622.5 310.5C1311.5 224 1227.83 458.833 1222 596L2013 722.5L2024.5 250C1970 206.5 1823.54 366.415 1622.5 310.5Z" fill="white" fillOpacity="0.1" /><path className="wave-path-three" d="M426 306.5C152.5 249.5 23.1667 294.5 -9 331.5V742.5L792 776.5L890.5 550.5C902 522 959.5 356 873.5 306.5C758 213 566.546 338.518 426 306.5Z" fill="#FFFCFC" fillOpacity="0.1" /></g><defs><clipPath id="clip0_5_11"><rect width="1880" height="550" fill="white" /></clipPath></defs></svg> <svg id="hero-wave-divider" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1879.8 203" xmlSpace="preserve" {...({ version: "1.1", "enable-background": "new 0 0 1879.8 203" } as any)}><path className="wave-divider [fill:rgb(246,244,254)]" fill="#F6F4FE" d={"M0,0c6.1,7.9,11.9,16,18.3,23.6C34.6,43,53.6,59.4,74.3,73.8c49.4,34.4,104.4,55.8,162.5,69.8\n      c32.8,7.9,66,12.9,99.5,16.4c44,4.6,88.1,4.7,132.2,3.5c26.6-0.7,53.1-3.4,79.6-5.5c26.9-2.2,53.7-4.7,80.5-7.3\n      c25.3-2.4,50.7-5.1,76-7.6c24.7-2.5,49.3-4.8,74-7.4c27.6-2.8,55.3-5.8,82.9-8.6c21.5-2.2,43.1-4.3,64.6-6.2\n      c22.7-2.1,45.4-4.1,68.1-5.8c16.6-1.3,33.2-2.6,49.8-3.1c25.1-0.8,50.3-1.3,75.4-1.1c56.5,0.5,111.6,9.1,165.5,26.7\n      c56.6,18.5,114.4,32.4,173.2,41.9c29.2,4.7,58.7,7.9,88.1,11.4c31.7,3.7,63.5,3.9,95.3,2.7c44.3-1.7,87.9-8.1,129.4-24.7\n      c44.4-17.8,79.7-46,100.6-90.1c2.9-6.2,5.4-12.5,8.1-18.8c0,47.7,0,95.3,0,143c-626.6,0-1253.2,0-1879.8,0C0,135.3,0,67.6,0,0z"} /></svg><div className={"\x63ontainer clr page-header-inner"}><h1 className="page-header-title clr" itemProp="headline">
      				Baby Sleep Sounds				</h1><nav className="site-breadcrumbs clr whitespace-nowrap [overflow:hidden] [@media_only_screen_and_(max-width:959px)]:[left:auto] [@media_only_screen_and_(max-width:959px)]:[right:auto] [@media_only_screen_and_(max-width:959px)]:[top:auto]"><span><span><a href="/">Home</a></span> » <span aria-current="page">Baby Sleep Sounds</span></span></nav></div></div>
          </div>
          <main className="clr [z-index:10]" id="main">
            <div className={"page-content \x63ontainer clr"} id="content-wrap">
              <div className={"\x63ontent-area clr"} id="primary">
                <div className="clr" id="content">
                  <ImportedArticleGentleSoundsPeacefulSpeed />
                </div>
              </div>
            </div>
            <div className="purple_backdrop pointer-events-none [left:0px] [top:0px] [width:100%] [z-index:999]" />
          </main>
          <ImportedFooter />
        </div>
      </div>
      <span className="elementor-screen-only" id="elementor-device-mode" />
      <svg style={{ display: "none" }} />
      <div id="mm-blocker" />
    </>
  );
}

function ImportedNav() {
  return (
    <nav className="mm-menu mm-horizontal mm-ismenu mm-front mm-hasheader [@media_screen]:[overflow:hidden]" id="acm-mobile-menu">
      <div className="mm-header [@media_screen]:[left:0px] [@media_screen]:[top:0px] [@media_screen]:[width:100%] [@media_screen]:[z-index:2]">
        <a className="mm-prev" style={{ display: "none" }} href="#" />
        <span className="mm-title [@media_screen]:[width:100%] [@media_screen]:[z-index:1]">Menu</span>
        <a className="mm-next" style={{ display: "none" }} href="#" />
      </div>
      <ul className="acm-mmenu mm-list mm-panel mm-opened mm-current [@media_screen]:[overflow:hidden_auto] [@media_screen]:[width:100%]" id="acm-mmenu">
        <li className="menu-item" id="menu-item-363">
          <a href="/">Home</a>
        </li>
        <li className="menu-item" id="menu-item-1951">
          <a href="/about-us">About Us</a>
        </li>
        <li className="menu-item" id="menu-item-1952">
          <a href="/contact">Contact</a>
        </li>
        <li className="menu-item current-menu-ancestor current-menu-parent menu-item-has-children" id="menu-item-2275">
          <em className="mm-counter right-[57px] [@media_screen]:text-center [@media_screen]:w-[18px] [@media_screen]:[text-indent:0px] [@media_screen]:[top:50%]">5</em>
          <a className="mm-subopen [@media_screen]:[z-index:2]" href="#mm-m0-p1" />
          <a href="#">Sounds</a>
        </li>
        <li className="menu-item" id="menu-item-1953">
          <a href="/blog">Blog</a>
        </li>
        <li className="menu-item" id="menu-item-2183">
          <a href="/frequently-asked-questions">FAQ</a>
        </li>
        <li className="menu-item nav-menu-button mobile-cta">
          <a className="nav-cta-btn" href="#">Subscribe Now</a>
        </li>
      </ul>
      <ul className="sub-menu mm-list mm-panel [@media_screen]:[overflow:hidden_auto] [@media_screen]:[width:100%]" id="mm-m0-p1">
        <li className="mm-subtitle">
          <a className="mm-subclose [@media_screen]:[text-indent:20px]" href="#acm-mmenu">Sounds</a>
        </li>
        <li className="menu-item" id="menu-item-2278">
          <a href="/golf-sounds">Golf Sounds</a>
        </li>
        <li className="menu-item current-menu-item current_page_item" id="menu-item-2286">
          <a aria-current="page" href="#">Baby Sleep Sounds</a>
        </li>
        <li className="menu-item" id="menu-item-2608">
          <a href="/nature-sounds">Nature Sounds</a>
        </li>
        <li className="menu-item" id="menu-item-2289">
          <a href="/healing-sounds">Healing Sounds</a>
        </li>
        <li className="menu-item" id="menu-item-2292">
          <a href="/random-sounds">Random Sounds</a>
        </li>
      </ul>
    </nav>
  );
}

function ImportedHeader() {
  return (
    <header className="hero_wave_light menu-light header-dark sticky-dark-menu clr" id="site-header" itemScope itemType="http://schema.org/WPHeader" data-site-import-scroll-header={"{\"desktop\":{\"added\":[\"sticky\"],\"removed\":[],\"threshold\":648},\"mobile\":{\"added\":[\"sticky\"],\"removed\":[],\"threshold\":633}}"}>
      <div className={"clr \x63ontainer hero_wave_light"} id="site-header-inner">
        <div className="clr" id="site-logo" itemScope itemType="http://schema.org/Brand">
          <div className="clr" id="site-logo-inner">
            <a className="full-screen-logo-link" href="/" itemProp="url" rel="home">
              <img src="/site-assets/57805f401fca30fb.png" width="200" height="100" alt="" />
            </a>
            <a className="full-screen-light-ver-logo-link" href="/" itemProp="url" rel="home">
              <img src="/site-assets/57805f401fca30fb.png" width="200" height="100" alt="" />
            </a>
          </div>
          <div className="acmthemes-mobile-menu-icon clr">
            <a className="hamburger-icon" href="#acm-mobile-menu">
              <i className="icon icon-menu" />
            </a>
          </div>
        </div>
        <div className="clr" id="site-navigation-wrap">
          <nav className="navigation main-navigation clr" id="site-navigation" itemScope itemType="http://schema.org/SiteNavigationElement">
            <ul className="main-menu dropdown-menu sf-menu" style={{ touchAction: "pan-y" }} id="menu-main-menu">
              <li className="menu-item">
                <a className="menu-link" href="/">
                  <span>Home</span>
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="/about-us">
                  <span>About Us</span>
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="/contact">
                  <span>Contact</span>
                </a>
              </li>
              <li className="menu-item current-menu-ancestor current-menu-parent menu-item-has-children dropdown nomega-dropdown">
                <a className="menu-link sf-with-ul" href="#">
                  <span>Sounds <span className="nav-arrow fa fa-angle-down" /></span>
                </a>
                <ul className="sub-menu" style={{ display: "none" }}>
                  <li className="menu-item">
                    <a className="menu-link" href="/golf-sounds">
                      <span>Golf Sounds</span>
                    </a>
                  </li>
                  <li className="menu-item current-menu-item current_page_item">
                    <a className="menu-link" href="#">
                      <span>Baby Sleep Sounds</span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="/nature-sounds">
                      <span>Nature Sounds</span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="/healing-sounds">
                      <span>Healing Sounds</span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="/random-sounds">
                      <span>Random Sounds</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="/blog">
                  <span>Blog</span>
                </a>
              </li>
              <li className="menu-item">
                <a className="menu-link" href="/frequently-asked-questions">
                  <span>FAQ</span>
                </a>
              </li>
            </ul>
            <div className="clr" id="searchform-header-replace">
              <form method="get"><input type="search" name="s" autoComplete="off" defaultValue="" placeholder="Search by Title, Category or ISBN" /> <input type="hidden" name="post_type" defaultValue="product" /></form>
              <span className="icon-close" id="searchform-header-replace-close" />
            </div>
          </nav>
        </div>
        <div className="woo-cart-item" />
      </div>
    </header>
  );
}

function ImportedArticleGentleSoundsPeacefulSpeed() {
  return (
    <article className="clr">
      <div className="entry clr" itemProp="text">
        <div className="elementor elementor-2284" data-elementor-id="2284">
          <section className="elementor-section elementor-element elementor-element-d65c27f elementor-section-stretched acm_section_full right [order:var(--order)]" style={{ width: "1521px", left: "-120.5px" }} data-site-import-responsive="59">
            <div className="elementor-container elementor-column-gap-default items-center min-h-[608px]">
              <div className="elementor-column elementor-col-100 elementor-element elementor-element-b1b9169 [min-height:1px] [order:var(--order)]">
                <div className="elementor-widget-wrap elementor-element-populated [width:100%]">
                  <div className="elementor-element elementor-element-6cec359 elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading [order:var(--order)]">
                    <h2 className="elementor-heading-title elementor-size-default">Gentle Sounds. Peaceful Speed.</h2>
                  </div>
                  <div className="elementor-element elementor-element-f685ae2 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-initial elementor-widget elementor-widget-text-editor [order:var(--order)]">
                    <p><strong>Soothing sounds for your baby’s happiest dreams. <img className="emoji" draggable="false" role="img" alt="💤" src="/site-assets/a7764d82caa1cb4c-5339479d919bd52ba3ef12446125daeb.png" /></strong><br />DreamLinks Baby Sleep Sounds offers calming lullabies, white noise, and nature-inspired sounds that create a peaceful environment for your little one to relax, fall asleep faster, and sleep longer.</p>
                  </div>
                  <div className="elementor-element elementor-element-2aafa46 elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget-mobile__width-initial elementor-widget elementor-widget-apper_img_button [order:var(--order)]">
                    <div className="elementor-widget-container">
                      <div className="acm-button-wrap btn-left"><a className="acm-button acm_py-3 acm_inline-block acm_px-10 acm_no-underline acm_mt-0 acm_text-sm acm-btn-outline acm-btn-outline" href="https://apps.apple.com/in/app/dreamlinks/id6758689668">{" "}</a> <a className="acm-button acm-button-second acm_py-3 acm_inline-block acm_px-10 acm_no-underline acm_mt-0 acm_text-sm acm-btn-outline acm-btn-outline" href={"https://play.google.com/store/apps/details?id=com.wm.dreamlinks&pcampaignid=web_share"}>{" "}</a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="elementor-section elementor-element elementor-element-fef3350 elementor-section-stretched elementor-section-boxed acm_section_full right [order:var(--order)]" style={{ width: "1521px", left: "-120.5px" }} data-site-import-responsive="75">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-100 elementor-element [min-height:1px] [order:var(--order)]">
                <div className="elementor-widget-wrap elementor-element-populated [width:100%]">
                  <div className="elementor-element elementor-element-e9dad79 elementor-widget elementor-widget-heading [order:var(--order)]">
                    <h2 className="elementor-heading-title elementor-size-default">Why Use Baby Sleep Sounds?</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="elementor-section elementor-element elementor-element-91d1850 elementor-section-stretched elementor-section-boxed acm_section_full right [order:var(--order)]" style={{ width: "1521px", left: "-120.5px" }} data-site-import-responsive="81">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-50 elementor-element elementor-element-7598a98 [min-height:1px] [order:var(--order)]">
                <div className="elementor-widget-wrap elementor-element-populated [width:100%]">
                  <div className="elementor-element elementor-element-540370b elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget elementor-widget-image [order:var(--order)]">
                    <img className={"attachment-full \x73ize-full wp-image-2686"} fetchPriority="high" decoding="async" width="612" height="408" src="/site-assets/e09de9df6fe8ac06.jpg" alt="" srcSet="/site-assets/e09de9df6fe8ac06.jpg 612w, /site-assets/26d26e768ea157c4.jpg 300w" sizes="(max-width: 612px) 100vw, 612px" />
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-50 elementor-element elementor-element-cc0e1a9 [min-height:1px] [order:var(--order)]">
                <div className="elementor-widget-wrap elementor-element-populated [width:100%]">
                  <div className="elementor-element elementor-element-41be8d8 elementor-widget elementor-widget-text-editor [order:var(--order)]">
                    <p>Baby sleep sounds can create a calming bedtime routine that gently signals when it is time to sleep. Soft and soothing sounds help babies feel safe, comfortable, and relaxed in their sleeping environment. Consistent audio can also make bedtime more predictable, helping babies settle down more naturally and enjoy longer periods of restful sleep. Gentle melodies, white noise, lullabies, and peaceful <strong><a href="/nature-sounds">nature sounds for baby sleep</a></strong> may reduce distractions and create a comforting atmosphere. When babies sleep more peacefully, parents can also enjoy greater peace of mind and more restful moments. A soothing sleep environment can make bedtime a calmer and more enjoyable experience for the entire family.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="elementor-section elementor-element elementor-element-528f490 elementor-section-stretched elementor-section-boxed acm_section_full right [order:var(--order)]" style={{ width: "1521px", left: "-120.5px" }} data-site-import-responsive="93">
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-100 elementor-element [min-height:1px] [order:var(--order)]">
                <div className="elementor-widget-wrap elementor-element-populated [width:100%]">
                  <div className="elementor-element elementor-element-9ce1839 elementor-widget elementor-widget-heading [order:var(--order)]">
                    <h2 className="elementor-heading-title elementor-size-default">Create a Calmer Bedtime with Baby Sleep Sounds</h2>
                  </div>
                  <div className="elementor-element elementor-element-079eebf elementor-widget elementor-widget-text-editor [order:var(--order)]">
                    <p>A familiar bedtime routine can help create a more peaceful environment when it’s time for your little one to settle down. Baby Bedtime Sleep Sounds provide gentle, consistent background audio that can help mask distracting household noises and create a soothing atmosphere.<br />Dream Links brings different calming sounds together in one convenient place, allowing parents to explore audio that best suits their baby’s preferences.<br />Choose from soft nature ambience, gentle rain, lullabies, white noise, and other Gentle Sounds for Baby Sleep for bedtime or daytime naps.</p>
                  </div>
                  <div className="elementor-element elementor-element-9c75e28 elementor-widget elementor-widget-heading [order:var(--order)]">
                    <h2 className="elementor-heading-title elementor-size-default">Sounds for Baby Sleep</h2>
                  </div>
                  <div className="elementor-element elementor-element-aee836c elementor-widget elementor-widget-text-editor [order:var(--order)]">
                    <p>Nature has its own calming rhythm. Gentle rain, flowing water, peaceful forests, birdsong, and other natural ambience can create a relaxing background for your baby’s bedtime routine.<br />Our Nature Sounds for Baby Sleep are ideal for parents looking for soft and peaceful alternatives to a completely silent sleeping environment.<br /><br />Explore sounds such as:</p>
                    <ol>
                      <li>Gentle rain sounds</li>
                      <li>Peaceful water sounds</li>
                      <li>Soft forest ambience</li>
                      <li>Relaxing nature sounds</li>
                      <li>Gentle nighttime ambience</li>
                      <li>Calming environmental sounds</li>
                    </ol>
                    <p>Keep the volume comfortable and select a sound that fits naturally into your baby’s routine.</p>
                  </div>
                  <div className="elementor-element elementor-element-d0facc3 elementor-widget__width-initial elementor-widget [order:var(--order)]">
                    <section className="golf-soundscapes [overflow:hidden]">
                      <div className="golf-soundscapes-inner [width:100%]">
                        <div className="golf-heading">
                          <h2>Explore Our Baby Sounds
                </h2>
                          <p>Immerse in the most relaxing moments of the game.

                </p>
                          <div className="golf-divider items-center gap-[7px] justify-center w-[100px]"><span /> <i><img className="emoji" draggable="false" role="img" alt="⛳" src="/site-assets/9d56f4ed8ce56c57-2b3fe4d6951a574ba55a39ef4b3dcfb7.png" /></i> <span /></div>
                        </div>
                        <div className="golf-cards items-stretch justify-center [width:100%]">
                          <div className="golf-card [min-width:0px] [@media(max-width:480px)]:[width:100%]">
                            <div className="golf-icon items-center justify-center w-[45px] [@media(max-width:767px)]:w-[45px]">
                              <span>
                                <img className="emoji" draggable="false" role="img" alt="🌙" src="/site-assets/e0a4a0156941a054-ca7e098e4e063f0731a4ec4cca4fceba.png" />
                              </span>
                            </div>
                            <h3>Helps Baby Sleep Faster</h3>
                            <p>
                    Creates a calm and relaxing space that helps your baby drift off quickly.
                    </p>
                          </div>
                          <div className="golf-card [min-width:0px] [@media(max-width:480px)]:[width:100%]">
                            <div className="golf-icon items-center justify-center w-[45px] [@media(max-width:767px)]:w-[45px]">
                              <span>
                                <img className="emoji" draggable="false" role="img" alt="🛏️" src="/site-assets/5c09a540a94c7764-0f35e04d3cf419cec440e149e7df9544.png" />
                              </span>
                            </div>
                            <h3>Better &amp; Longer Sleep</h3>
                            <p>
                       Supports deeper, uninterrupted sleep so your baby wakes up happy.
                    </p>
                          </div>
                          <div className="golf-card [min-width:0px] [@media(max-width:480px)]:[width:100%]">
                            <div className="golf-icon items-center justify-center w-[45px] [@media(max-width:767px)]:w-[45px]">
                              <span>
                                <img className="emoji" draggable="false" role="img" alt="❤️" src="/site-assets/54a8d7d41a38ff74-521105d22561388b34daeb396b1d3c12.png" />
                              </span>
                            </div>
                            <h3>Calms &amp; Comforts</h3>
                            <p>Soothing sounds help reduce fussiness and bring a sense of comfort.
                    </p>
                          </div>
                          <div className="golf-card [min-width:0px] [@media(max-width:480px)]:[width:100%]">
                            <div className="golf-icon items-center justify-center w-[45px] [@media(max-width:767px)]:w-[45px]">
                              <span>
                                <img className="emoji" draggable="false" role="img" alt="🔇" src="/site-assets/494231601f5c024a-e20cc286fab90fbcebb5f97eb99260b0.png" />
                              </span>
                            </div>
                            <h3>Safe &amp; Gentle</h3>
                            <p>
                    Carefully selected, baby-friendly sounds that are safe for daily use.
                    </p>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div className="dreamlinks-app-banner justify-between [width:100%] [@media(max-width:767px)]:gap-[12px]">
                      <div className="dreamlinks-app-content items-center gap-[12px] [@media(max-width:600px)]:justify-center">
                        <div className="dreamlinks-app-icon items-center justify-center w-[40px]">
                          <img className="emoji" draggable="false" role="img" alt="🎧" src="/site-assets/557dd48d3dae0d08-28e04093278fa99f3b3b4a62fe93ee57.png" />
                        </div>
                        <div className="dreamlinks-app-text">
                          <h3>Bring the Peace of the Course to Your Everyday</h3>
                          <p>Download DreamLinks and start your relaxing journey today.</p>
                        </div>
                      </div>
                      <div className="dreamlinks-store-buttons items-center gap-[8px] [@media(max-width:600px)]:justify-center"><a className="dreamlinks-store items-center" href={"https://play.google.com/store/apps/details?id=com.wm.dreamlinks&pcampaignid=web_share"}>{" "}<span className="store-icon w-[22px]">▶</span>{" "}<span>{" "}<small>GET IT ON</small>{" "}<strong>Google Play</strong>{" "}</span>{" "}</a> <a className="dreamlinks-store items-center" href="https://apps.apple.com/in/app/dreamlinks/id6758689668">{" "}<span className="store-icon w-[22px]"></span>{" "}<span>{" "}<small>Download on the</small>{" "}<strong>App Store</strong>{" "}</span>{" "}</a></div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-2fa08d3 elementor-widget elementor-widget-apper_faq [order:var(--order)]">
                    <div className="elementor-widget-container">
                      <div className="acm_faq-widget clr">
                        <div className="card">
                          <div className="card-header">
                            <h3 className="acm_faq-title [cursor:pointer]">
    								1. What are baby sleep sounds?								<div className="plus-expand [top:50%]"><div className="plus-icon" /></div></h3>
                          </div>
                          <div className="card-body">
                            <div className="card">
                              <p>Baby sleep sounds are gentle audio such as lullabies, white noise, soft rain, nature sounds, and calming ambient sounds that can create a peaceful environment during naps and bedtime.</p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header">
                            <h3 className="acm_faq-title [cursor:pointer]">
    								2. Can Dream Links help my baby sleep?								<div className="plus-expand [top:50%]"><div className="plus-icon" /></div></h3>
                          </div>
                          <div className="card-body">
                            <div className="card">
                              <p>Dream Links provides calming sounds designed to create a relaxing bedtime environment. You can choose gentle audio that fits your baby's routine and helps signal that it's time to wind down.</p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header">
                            <h3 className="acm_faq-title [cursor:pointer]">
    								3. What sounds are best for baby sleep?								<div className="plus-expand [top:50%]"><div className="plus-icon" /></div></h3>
                          </div>
                          <div className="card-body">
                            <div className="card">
                              <p>Every baby is different. Some may enjoy gentle lullabies, while others may prefer consistent sounds such as soft white noise, gentle rain, or calming nature sounds. Dream Links gives you different options to explore.</p>
                            </div>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header">
                            <h3 className="acm_faq-title [cursor:pointer]">
    								4. Can I use baby sleep sounds for naps?								<div className="plus-expand [top:50%]"><div className="plus-icon" /></div></h3>
                          </div>
                          <div className="card-body">
                            <p>Yes. Baby sleep sounds can be used as part of both daytime nap routines and nighttime bedtime routines. A consistent, calming sound can help create a familiar sleep environment.</p>
                          </div>
                        </div>
                        <div className="card">
                          <div className="card-header">
                            <h3 className="acm_faq-title [cursor:pointer]">
    								5. What other sounds are available on Dream Links?								<div className="plus-expand [top:50%]"><div className="plus-icon" /></div></h3>
                          </div>
                          <div className="card-body">
                            <div className="elementor" data-elementor-id="2276">
                              <p>Dream Links offers much more than baby sleep sounds. You can explore nature sounds, golf-inspired sounds, healing sounds, sleep sounds, and other relaxing audio experiences designed for different moments and preferences.</p>
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
        </div>
      </div>
    </article>
  );
}

function ImportedFooter() {
  return (
    <footer className="footer" id="footer" itemScope itemType="http://schema.org/WPFooter">
      <div className="clr" id="footer-inner">
        <div className="acmthemes-row clr tablet-3-col mobile-1-col has-padding" id="footer-widgets">
          <div className={"\x63ontainer"}>
            <div className={"footer-box span_1_of_4 col \x63ol-1"}>
              <div className="footer-widget widget_media_image single-line clr" id="media_image-1">
                <a href="/">
                  <img className={"image wp-image-1715 attachment-full \x73ize-full"} style={{ maxWidth: "100%", height: "auto" }} width="200" height="100" src="/site-assets/57805f401fca30fb.png" alt="" decoding="async" />
                </a>
              </div>
              <div className="footer-widget single-line clr" id="acm_address_widget-1">
                <div className="apper-business-address-widget">
                  <div>
            300 OVERLAND WOLF CENTRE 6910 PACIFIC STREET OMAHA, NEBRASKA 68106-1045      </div>
                  <div>
                    <a href="mailto:dreamlinks174@gmail.com">dreamlinks174@gmail.com</a>
                  </div>
                  <div>
                    <a href="tel:+14028134360">+1 (402) 813-4360</a>
                  </div>
                </div>
              </div>
              <div className="footer-widget single-line clr" id="wp-social-widget-1">
                <ul className="social-links">
                  <li>
                    <a href="https://www.facebook.com/DreamLinksOfficial">
                      <span className="social-icon fab fa-facebook-f text-center w-[35px]" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/dreamlinks_/">
                      <span className="social-icon fab fa-instagram text-center w-[35px]" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/dreamlinksofficial">
                      <span className="social-icon fab fa-linkedin text-center w-[35px]" />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/DreamLinks_">
                      <span className="social-icon text-center w-[35px]">
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
              <div className="footer-widget widget_media_image single-line clr" id="media_image-2">
                <img className={"image wp-image-1863 attachment-full \x73ize-full"} style={{ maxWidth: "100%", height: "auto" }} width="288" height="156" src="/site-assets/6bfbfae61a79eaaa.png" alt="" decoding="async" />
              </div>
            </div>
            <div className={"footer-box span_1_of_4 col \x63ol-3"}>
              <div className="footer-widget widget_media_image single-line clr" id="media_image-3">
                <img className={"image wp-image-1863 attachment-full \x73ize-full"} style={{ maxWidth: "100%", height: "auto" }} width="288" height="156" src="/site-assets/6bfbfae61a79eaaa.png" alt="" decoding="async" />
              </div>
            </div>
            <div className={"footer-box span_1_of_4 col \x63ol-4"}>
              <div className="footer-widget single-line clr" id="text-3">
                <div>
                  <h3 className="widget-title title-white style-left">Download Now</h3>
                </div>
                <div className="textwidget" />
              </div>
              <div className="footer-widget widget_media_image single-line clr" id="media_image-5">
                <a href={"https://play.google.com/store/apps/details?id=com.wm.dreamlinks&pcampaignid=web_share"}>
                  <img className={"image wp-image-31 attachment-full \x73ize-full"} style={{ maxWidth: "100%", height: "auto" }} width="140" height="35" src="/site-assets/c42e56cd719cb914.png" alt="Google Play Store White" decoding="async" />
                </a>
              </div>
              <div className="footer-widget widget_media_image single-line clr" id="media_image-6">
                <a href="https://apps.apple.com/in/app/dreamlinks/id6758689668">
                  <img className={"image wp-image-29 attachment-full \x73ize-full"} style={{ maxWidth: "100%", height: "auto" }} width="121" height="35" src="/site-assets/551e11d0a3ff123d.png" alt="IOS App Store white" decoding="async" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="clr" id="footer-bottom">
          <div className={"\x63ontainer clr"} id="footer-bottom-inner">
            <div className="navigation clr" id="footer-bottom-menu">
              <div className="clr" role="contentinfo">
    					With <i className="icon icon-heart" style={{ fontSize: "0.9em", fontWeight: "bold", margin: "0px 5px" }} aria-hidden="true" /> by AcmeeDesign				</div>
            </div>
            <div className="clr" id="copyright" role="contentinfo">
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
