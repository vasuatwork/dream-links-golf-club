import type { CSSProperties, RefObject } from "react";
import { useEffect, useRef, useState } from "react";
import { useSyncExternalStore } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/captured.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sleep Sounds App for Better Sleep & Relaxation | DreamLinks" },
      { name: "description", content: "Discover DreamLinks sleep sounds, nature audio, white noise, and calming tools for deeper, more peaceful sleep." },
      { property: "og:title", content: "Sleep Sounds App for Better Sleep & Relaxation | DreamLinks" },
      { property: "og:description", content: "Discover DreamLinks sleep sounds, nature audio, white noise, and calming tools for deeper, more peaceful sleep." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  staticData: { importedDocument: { html: { "lang": "en-US" }, body: { "className": "home page acmthemes-theme acm-btn-default default-breakpoint blog-2-columns elementor-kit-7", "data-elementor-device-mode": "desktop" } } },
  component: Index,
});

function Index() {
  const isMobile = useSyncExternalStore(subscribeMobile, () => matchMedia("(max-width: 767px)").matches, () => false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSoundsMenuOpen, setSoundsMenuOpen] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);
  const menuToggleRef = useRef<HTMLAnchorElement>(null);
  useImportedLayout();
  useImportedEntranceAnimations();
  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setSoundsMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isMenuOpen]);
  return (
    <>
      <style>{capturedCSS}</style>
      <ImportedNav
        isOpen={isMenuOpen}
        isSoundsMenuOpen={isSoundsMenuOpen}
        onClose={() => { setMenuOpen(false); setSoundsMenuOpen(false); menuToggleRef.current?.focus(); }}
        onOpenSounds={() => setSoundsMenuOpen(true)}
        onCloseSounds={() => setSoundsMenuOpen(false)}
        onOpenMenu={() => setMenuOpen(true)}
      />
      <div id="outer-wrap" className={`wrap-boxshadow site clr mm-page${isMenuOpen ? " dreamlinks-page-menu-open" : ""}`}>
        <div id="wrap" className={"clr"}>
          <div className={"siteheader-holder"} style={{ height: "120px", display: "none" }} />
          <ImportedHeader menuToggleRef={menuToggleRef} isMenuOpen={isMenuOpen} onToggleMenu={() => setMenuOpen((open) => !open)} />
          <main id="main" className={"site-main clr"}>
            <div data-elementor-id="1639" className={"elementor elementor-1639"}>
              <ImportedSectionGolfSleepSoundsApp isMobile={isMobile} heroSlide={heroSlide} onHeroSlideChange={setHeroSlide} />
              <section className={"elementor-section elementor-top-section elementor-element elementor-element-6f9c623 elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
                <div className={"elementor-container elementor-column-gap-default"}>
                  <div className={"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-9f30cff"} data-element_type="column">
                    <div className={"elementor-widget-wrap elementor-element-populated"}>
                      <div className={"elementor-element elementor-element-0064a74 elementor-widget elementor-widget-apper_bg_anim"}>
                        <div className={"elementor-widget-container"}>
                          <div className={"hero-circle-animation"}><svg className={"circle-small"} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="6.5" stroke="#3A68FF" strokeWidth="3" /></svg> <svg className={"circle-big"} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="8" stroke="#3A68FF" strokeWidth="4" /></svg> <svg className={"polygon"} width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.433 1.75L18.2272 15.25C18.4197 15.5833 18.1791 16 17.7942 16H2.20577C1.82087 16 1.58031 15.5833 1.77276 15.25L9.56699 1.75C9.75944 1.41667 10.2406 1.41667 10.433 1.75Z" stroke="#3A68FF" strokeWidth="3" /></svg></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={"elementor-section elementor-top-section elementor-element elementor-element-b7e41c0 elementor-section-full_width elementor-section-stretched elementor-section-height-default elementor-section-height-default acm_section_full right"} style={{ width: "1521px", left: "0px" }} data-site-import-responsive="136">
                <div className={"elementor-container elementor-column-gap-no"}>
                  <div className={"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4236dd9"} data-element_type="column">
                    <div className={"elementor-widget-wrap elementor-element-populated"}>
                      <div className={"elementor-element elementor-element-cf16ba6 elementor-widget elementor-widget-html"}>
                        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1586.9 196.5" xmlSpace="preserve" {...({ version: "1.1", "enable-background": "new 0 0 1586.9 196.5" } as any)}>
                          <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="802.5264" y1="80.3371" x2="797.3304" y2="184.9941">
                            <stop offset="6.557240e-002" style={{ stopColor: "rgb(246, 244, 254)" } as CSSProperties} />
                            <stop offset="0.908" style={{ stopColor: "rgb(208, 197, 253)" } as CSSProperties} />
                          </linearGradient>
                          <path fill="url(#SVGID_1_)" d={"M1340.7,176.8c-0.5-0.3-0.9-1-1.4-1c-2.5-0.1-5,0.1-7.5-0.1c-6.7-0.3-13.5-0.3-20.2-1.1\n\tc-6.7-0.8-13.3-1.4-20-2c-6.1-0.6-12.1-2-18.2-2.9c-5.3-0.8-10.7-1.2-16-2.1c-7-1.2-14-2.4-20.9-4c-9.1-2.1-18.1-4.6-27.1-6.9\n\tc-3.6-0.9-7.1-2-10.7-3c-12.1-3.2-24.1-6.9-36.2-10.3c-11.8-3.3-23.6-6.4-35.4-9.5c-11.2-3-22.7-4.9-34-7.3\n\tc-7.7-1.6-15.4-3.4-23.2-4.9c-4.9-0.9-10-1.8-15-1.9c-1.9-0.1-2.6-2.4-4.7-1.5c-1.6,0.7-3.4,0.2-5.2-0.4c-2.6-0.9-5.4-0.9-8.2-1.2\n\tc-3.7-0.4-7.7,0-11.2-1.2c-4-1.4-8.3,0.3-12-1.8c-0.1-0.1-0.3,0-0.5,0c-4.9-0.3-9.8-0.6-14.7-1c-2.9-0.2-5.8-0.7-8.7-1\n\tc-2.8-0.2-5.6,0.5-8.2-1c-0.4-0.2-1,0-1.5,0c-14.2-0.5-28.5-1.4-42.7-1.1c-3.4,0.1-6.9-1.2-10.2-0.8c-12.6,1.6-25.2,0.4-37.7,1\n\tc-2.5,0.1-4.9,0.1-7.4,0.3c-2.6,0.1-5.2,0.3-7.8,0.7c-7.4,1.1-15,1.3-22.4,2.2c-3.6,0.5-7.4,0.3-11,1.6c-2.6,0.9-5.8,0.6-8.7,1\n\tc-6.6,1-13.1,2.1-19.7,3.1c-6.4,1-13,1.3-19.4,2.1c-2.9,0.4-5.7,1-8.5,1.7c-2.9,0.7-5.8,0-8.7,1c-3.1,1.1-6.8,0.8-10.2,1.2\n\tc-1.9,0.2-3.8,0.7-5.7,1c-1.9,0.2-3.8,0.2-5.8,0.8c-2.9,0.9-6.1,0.3-9.2,1.1c-3.8,0.9-7.8,0.7-11.7,1.2c-1.9,0.2-3.8,0.6-5.7,1\n\tc-1.7,0.3-3.5,0.6-5.2,0.9c-0.7,0.1-1.3,0.1-2,0.1c-5.2,0-10.3,1.1-15.5,1.9c-4.5,0.7-9.1,0.8-13.7,1.1c-5.4,0.3-10.7,0.9-16,1.9\n\tc-3.2,0.6-6.5,0.3-9.7,0.9c-4.8,1-9.9,0.3-14.7,1.3c-4.8,1-9.8-0.1-14.5,1.8c-0.3,0.1-0.7,0-1,0c-5.6,0.3-11.2,0.2-16.7,1.1\n\tc-5.2,0.9-10.5,0-15.5,1.8c-0.3,0.1-0.7,0-1,0c-6.7,0.3-13.5,0.6-20.2,1c-3.1,0.2-6.2,0.7-9.2,1c-2.9,0.3-6-0.6-8.7,1\n\tc-0.3,0.1-0.7,0-1,0c-8.2,0.3-16.5,0.3-24.7,1.1c-6.1,0.6-12.3,0.1-18.2,1.1c-5.6,0.9-11.2,0.2-16.8,0.9c-8.7,1.1-17.5,0.2-26.2,1.1\n\tc-17.6,1.7-35.2,0.4-52.7,0.8c-9.7,0.2-19.3,0.2-29,0c-10.9-0.2-21.9-0.2-32.7-1.2c-4.9-0.4-9.9-0.4-14.7-0.9\n\tc-7.6-0.8-15.3-1.5-23-2.1c-6.2-0.5-12.3-1.2-18.5-2c-6.1-0.8-12.3-1-18.3-2.7c-3.2-0.9-6.8-0.7-10.2-1.2c-4.8-0.7-9.6-1.4-14.4-2.3\n\tc-4.4-0.8-8.8-1.8-13.3-2.7c-6.9-1.4-13.9-2.7-20.8-4.4c-7.4-1.7-14.7-3.7-22-5.6c-12.3-3.3-24.5-6.7-36.3-11.5\n\tc-9.9-4-19.9-7.5-29.6-11.9C133,98.7,125.4,94,117.4,90c-7.3-3.7-14-8.1-20.7-12.8c-5.9-4.1-11.9-8-17.1-13.1\n\tc-3.1-3-6.4-5.7-9.5-8.6c-7.2-6.8-14-14-19.3-22.9c1.8-1.6,3.3-3.9,6.4-2.1c0.4,0.2,0.9,0.3,1.4,0.3c7.1,0.3,14.1,0.7,21.2,1\n\tc6.4,0.3,12.8,0.8,19.2,1.2c4.1,0.3,8.2,0.1,12.2,0.8c5.6,1,11.3,0.2,16.7,1.1c4.3,0.7,8.6,0.2,12.7,0.9c5.4,1,10.9,0.2,16.2,1.1\n\tc4.6,0.8,9.4-0.1,13.7,1c6.2,1.6,12.5-0.4,18.5,1.8c0.3,0.1,0.7,0,1,0c7.7,0.3,15.5,0.2,23.2,1.1c5.6,0.7,11.2,0.2,16.7,1.1\n\tc4.1,0.7,8.2,0.2,12.2,0.9c5.6,1,11.2,0.2,16.7,1.1c4.1,0.7,8.2,0.2,12.2,0.9c5.6,1,11.3,0.2,16.7,1.1c4.3,0.7,8.6,0.2,12.7,0.9\n\tc5.4,1,10.9,0.2,16.2,1.1c4.6,0.8,9.4-0.1,13.7,1c6.2,1.5,12.5-0.4,18.5,1.8c0.3,0.1,0.7,0,1,0c7.7,0.3,15.5,0.2,23.2,1.1\n\tc5.6,0.7,11.2,0.2,16.7,1.1c4.1,0.7,8.2,0.2,12.2,0.9c5.6,1,11.3,0.2,16.7,1.1c4.3,0.7,8.6,0.2,12.7,0.9c5.4,1,10.9,0.2,16.2,1.1\n\tc4.3,0.7,8.6,0.2,12.7,0.9c5.4,1,10.9,0.2,16.2,1.1c4.6,0.8,9.4-0.1,13.7,1c6.2,1.5,12.5-0.4,18.5,1.8c0.3,0.1,0.7,0,1,0\n\tc7.7,0.3,15.5,0.2,23.2,1.1c5.6,0.7,11.2,0.2,16.7,1.1c4.1,0.7,8.2,0.2,12.2,0.9c5.6,1,11.3,0.2,16.7,1.1c4.3,0.7,8.6,0.2,12.7,0.9\n\tc5.4,1,10.9,0.2,16.2,1.1c4.3,0.7,8.6,0.2,12.7,0.9c5.4,1,10.9,0.2,16.2,1.1c4.6,0.8,9.4-0.1,13.7,1c6.2,1.5,12.5-0.4,18.5,1.8\n\tc0.3,0.1,0.7,0,1,0c7.7,0.3,15.5,0.2,23.2,1.1c5.6,0.7,11.2,0.2,16.7,1.1c4.1,0.7,8.2,0.2,12.2,0.9c5.6,1,11.3,0.2,16.7,1.1\n\tc4.3,0.7,8.6,0.2,12.7,0.9c5.4,1,10.9,0.2,16.2,1.1c4.3,0.7,8.6,0.2,12.7,0.9c5.4,1,10.9,0.2,16.2,1.1c4.6,0.8,9.3-0.1,13.7,1\n\tc6.2,1.5,12.5-0.4,18.5,1.8c0.3,0.1,0.7,0,1,0c7.7,0.3,15.5,0.2,23.2,1.1c5.6,0.7,11.2,0.2,16.7,1.1c4.1,0.7,8.2,0.2,12.2,0.9\n\tc5.6,1,11.3,0.2,16.7,1.1c4.3,0.7,8.6,0.2,12.7,0.9c5.4,1,10.9,0.2,16.2,1.1c4.3,0.7,8.6,0.2,12.7,0.9c5.4,1,10.9,0.2,16.2,1.1\n\tc4.6,0.8,9.3-0.1,13.7,1c6.2,1.5,12.5-0.4,18.5,1.8c0.3,0.1,0.7,0,1,0c7.7,0.3,15.5,0.2,23.2,1.1c5.6,0.7,11.2,0.2,16.7,1.1\n\tc4.1,0.7,8.2,0.2,12.2,0.9c5.6,1,11.3,0.2,16.7,1.1c4.3,0.7,8.6,0.2,12.7,0.9c5.4,1,10.9,0.2,16.2,1.1c4.3,0.7,8.6,0.2,12.7,0.9\n\tc5.4,1,10.9,0.2,16.2,1.1c4.6,0.8,9.4-0.1,13.7,1c6.2,1.5,12.5-0.4,18.5,1.8c0.3,0.1,0.7,0,1,0c7.7,0.3,15.5,0.2,23.2,1.1\n\tc5.6,0.7,11.2,0.2,16.7,1.1c4.1,0.7,8.2,0.2,12.2,0.9c5.6,1,11.3,0.2,16.7,1.1c4.3,0.7,8.6,0.2,12.7,0.9c5.4,1,10.9,0.2,16.2,1.1\n\tc4.3,0.7,8.6,0.2,12.7,0.9c5.4,1,10.9,0.2,16.2,1.1c4.6,0.8,9.4-0.1,13.7,1c6.2,1.5,12.5-0.4,18.5,1.8c0.3,0.1,0.7,0,1,0\n\tc7.7,0.3,15.5,0.2,23.2,1.1c5.6,0.7,11.2,0.2,16.7,1.1c4.1,0.7,8.2,0.2,12.2,0.9c5.6,1,11.3,0.2,16.7,1.1c4.3,0.7,8.6,0.2,12.7,0.9\n\tc5.4,1,10.9,0.2,16.2,1.1c4.3,0.7,8.6,0.2,12.7,0.9c5.4,1,10.9,0.2,16.2,1.1c4.6,0.8,9.4-0.1,13.7,1c6.2,1.5,12.5-0.4,18.5,1.8\n\tc0.3,0.1,0.7,0,1,0c7.7,0.3,15.5,0.2,23.2,1.1c5.6,0.7,11.2,0.2,16.7,1.1c4.1,0.7,8.2,0.2,12.2,0.9c5.6,1,11.2,0.4,16.7,1.1\n\tc3.3,0.4,6.5,0.9,9.7,0.8c2.5-0.1,4,1,5.2,3.4c-1.2,0.8-2.3,1.7-3.5,2.4c-8.1,5.1-16.4,9.8-25.2,13.6c-8.8,3.8-17.7,6.9-26.8,9.7\n\tc-7.7,2.4-15.4,4.5-23.3,6.1c-6.2,1.2-12.4,2.1-18.7,3c-5.3,0.7-10.6,1.4-16,2c-6.7,0.8-13.3,1.3-20,2.1c-6.5,0.8-12.8,0.6-19.3,0.8\n\tc-0.5,0-1,0.6-1.4,1C1380,176.8,1360.4,176.8,1340.7,176.8z"} />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className={"elementor-section elementor-top-section elementor-element elementor-element-1179040 elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right elementor-invisible"} data-entrance-animation="fadeInUp" id="features">
                <div className={"elementor-container elementor-column-gap-default"}>
                  <div className={"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-dfb3085"} data-element_type="column">
                    <div className={"elementor-widget-wrap elementor-element-populated"}>
                      <div className={"elementor-element elementor-element-00e210d elementor-widget elementor-widget-apper_heading"}>
                        <div className={"elementor-widget-container"}>
                          <div className={"acm-heading no-line \x63ontent-center-align-align"}>
                            <h2 className={"acm-title"}>
                              <span>Your Best Tomorrow Begins Tonight</span>
                            </h2>
                            <div className={"acm_heading-desc"}>
                              <p>
                                <span className={"TextRun SCXW133782473 BCX0"} lang="EN-IN">
                                  <span className={"NormalTextRun SCXW133782473 BCX0"}>Every peaceful morning starts with one quiet decision the night before. </span>
                                </span>
                                <span className={"TextRun SCXW133782473 BCX0"} lang="EN-IN">
                                  <span className={"NormalTextRun SpellingErrorV2Themed SCXW133782473 BCX0"}>DreamLinks</span>
                                </span>
                                <span className={"TextRun SCXW133782473 BCX0"} lang="EN-IN">
                                  <span className={"NormalTextRun SCXW133782473 BCX0"}> helps transform bedtime into a calming ritual with premium sleep sounds, relaxing nature audio, and thoughtful tools that make every night feel restorative.</span>
                                </span>
                                <span className={"EOP Selected SCXW133782473 BCX0"}> </span>
                              </p>
                            </div>
                            <div className={"acm-heading-border"} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <ImportedSection />
              <ImportedSectionYourBedtimeYourWay />
              <ImportedSection299 />
              <ImportedSectionBeautifulByDesignPeaceful />
              <section className={"elementor-section elementor-top-section elementor-element elementor-element-5e1e5ba elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
                <div className={"elementor-container elementor-column-gap-default"}>
                  <div className={"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-abb1326"} data-element_type="column">
                    <div className={"elementor-widget-wrap elementor-element-populated"}>
                      <div className={"elementor-element elementor-element-98b59ad elementor-widget elementor-widget-apper_screen_slider"}>
                        <div className={"elementor-widget-container"}>
                          <div className={"acm_screen-slider-wrap clr"}>
                            <div className={"owl-carousel acm_screen-slider owl-theme owl-loaded owl-drag"}>
                              <div className={"owl-stage-outer"}>
                                <div className={"owl-stage"} style={{ transition: "2.5s", width: "3810px", transform: "translate3d(-762px, 0px, 0px)" }} data-site-import-responsive="387">
                                  <div className={"owl-item cloned"} style={{ width: "244px", marginRight: "10px" }}>
                                    <div className={"item"}>
                                      <div className={"screen_frame_img"}>
                                        <img loading="lazy" decoding="async" width="428" height="926" src="/site-assets/f8ff240ed363742b.png" className={"attachment-full \x73ize-full"} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className={"owl-item cloned"} style={{ width: "244px", marginRight: "10px" }}>
                                    <div className={"item"}>
                                      <div className={"screen_frame_img"}>
                                        <img loading="lazy" decoding="async" width="428" height="926" src="/site-assets/71ae8bb576b34bfc.png" className={"attachment-full \x73ize-full"} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className={"owl-item cloned"} style={{ width: "244px", marginRight: "10px" }}>
                                    <div className={"item"}>
                                      <div className={"screen_frame_img"}>
                                        <img loading="lazy" decoding="async" width="428" height="926" src="/site-assets/dd36cb63ebf84cd5.png" className={"attachment-full \x73ize-full"} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className={"owl-item cloned active"} style={{ width: "244px", marginRight: "10px" }}>
                                    <div className={"item"}>
                                      <div className={"screen_frame_img"}>
                                        <img loading="lazy" decoding="async" width="428" height="926" src="/site-assets/7a239740f773136f.png" className={"attachment-full \x73ize-full"} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className={"owl-item cloned active"} style={{ width: "244px", marginRight: "10px" }}>
                                    <div className={"item"}>
                                      <div className={"screen_frame_img"}>
                                        <img loading="lazy" decoding="async" width="304" height="631" src="/site-assets/1d33ae4f472f4c02.png" className={"attachment-full \x73ize-full"} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className={"owl-item active center"} style={{ width: "244px", marginRight: "10px" }} data-site-import-responsive="408">
                                    <div className={"item"}>
                                      <div className={"screen_frame_img"}>
                                        <img loading="lazy" decoding="async" width="428" height="926" src="/site-assets/f8ff240ed363742b.png" className={"attachment-full \x73ize-full"} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className={"owl-item active"} style={{ width: "244px", marginRight: "10px" }} data-site-import-responsive="412">
                                    <div className={"item"}>
                                      <div className={"screen_frame_img"}>
                                        <img loading="lazy" decoding="async" width="428" height="926" src="/site-assets/71ae8bb576b34bfc.png" className={"attachment-full \x73ize-full"} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className={"owl-item active"} style={{ width: "244px", marginRight: "10px" }} data-site-import-responsive="416">
                                    <div className={"item"}>
                                      <div className={"screen_frame_img"}>
                                        <img loading="lazy" decoding="async" width="428" height="926" src="/site-assets/dd36cb63ebf84cd5.png" className={"attachment-full \x73ize-full"} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className={"owl-item"} style={{ width: "244px", marginRight: "10px" }} data-site-import-responsive="420">
                                    <div className={"item"}>
                                      <div className={"screen_frame_img"}>
                                        <img loading="lazy" decoding="async" width="428" height="926" src="/site-assets/7a239740f773136f.png" className={"attachment-full \x73ize-full"} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className={"owl-item"} style={{ width: "244px", marginRight: "10px" }} data-site-import-responsive="424">
                                    <div className={"item"}>
                                      <div className={"screen_frame_img"}>
                                        <img loading="lazy" decoding="async" width="304" height="631" src="/site-assets/1d33ae4f472f4c02.png" className={"attachment-full \x73ize-full"} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className={"owl-item cloned"} style={{ width: "244px", marginRight: "10px" }}>
                                    <div className={"item"}>
                                      <div className={"screen_frame_img"}>
                                        <img loading="lazy" decoding="async" width="428" height="926" src="/site-assets/f8ff240ed363742b.png" className={"attachment-full \x73ize-full"} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className={"owl-item cloned"} style={{ width: "244px", marginRight: "10px" }}>
                                    <div className={"item"}>
                                      <div className={"screen_frame_img"}>
                                        <img loading="lazy" decoding="async" width="428" height="926" src="/site-assets/71ae8bb576b34bfc.png" className={"attachment-full \x73ize-full"} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className={"owl-item cloned"} style={{ width: "244px", marginRight: "10px" }}>
                                    <div className={"item"}>
                                      <div className={"screen_frame_img"}>
                                        <img loading="lazy" decoding="async" width="428" height="926" src="/site-assets/dd36cb63ebf84cd5.png" className={"attachment-full \x73ize-full"} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className={"owl-item cloned"} style={{ width: "244px", marginRight: "10px" }}>
                                    <div className={"item"}>
                                      <div className={"screen_frame_img"}>
                                        <img loading="lazy" decoding="async" width="428" height="926" src="/site-assets/7a239740f773136f.png" className={"attachment-full \x73ize-full"} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                  <div className={"owl-item cloned"} style={{ width: "244px", marginRight: "10px" }}>
                                    <div className={"item"}>
                                      <div className={"screen_frame_img"}>
                                        <img loading="lazy" decoding="async" width="304" height="631" src="/site-assets/1d33ae4f472f4c02.png" className={"attachment-full \x73ize-full"} alt="" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={"owl-nav disabled"}>
                                <button type="button" role="presentation" className={"owl-prev btn"}>
                                  <span>‹</span>
                                </button>
                                <button type="button" role="presentation" className={"owl-next btn"}>
                                  <span>›</span>
                                </button>
                              </div>
                              <div className={isMobile ? "owl-dots" : "owl-dots disabled"}>
                                <button role="button" className={"owl-dot active"}>
                                  <span />
                                </button>
                                <button role="button" className={"owl-dot"}>
                                  <span />
                                </button>
                                <button role="button" className={"owl-dot"}>
                                  <span />
                                </button>
                                <button role="button" className={"owl-dot"}>
                                  <span />
                                </button>
                                <button role="button" className={"owl-dot"}>
                                  <span />
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <ImportedSectionYourBestNightsAre />
              <ImportedSectionHaveAQuestion />
              <ImportedSectionSleepBetterStartsWith />
            </div>
            <div className={"purple_backdrop"} />
          </main>
          <ImportedFooter />
        </div>
      </div>
      <span id="elementor-device-mode" className={"elementor-screen-only"} />
      <svg style={{ display: "none" }} className={"e-font-icon-svg-symbols"} />
      <div id="mm-blocker" className={isMenuOpen ? "dreamlinks-blocker-open" : ""} onClick={() => { setMenuOpen(false); setSoundsMenuOpen(false); menuToggleRef.current?.focus(); }} />
    </>
  );
}

function ImportedNav({ isOpen, isSoundsMenuOpen, onClose, onOpenSounds, onCloseSounds, onOpenMenu }: {
  isOpen: boolean;
  isSoundsMenuOpen: boolean;
  onClose: () => void;
  onOpenSounds: () => void;
  onCloseSounds: () => void;
  onOpenMenu: () => void;
}) {
  return (
    <nav id="acm-mobile-menu" aria-label="Mobile menu" aria-hidden={!isOpen} className={`menu-main-menu-container mm-menu mm-horizontal mm-ismenu mm-front mm-hasheader${isOpen ? " dreamlinks-menu-open mm-current" : ""}${isSoundsMenuOpen ? " dreamlinks-submenu-open" : ""}`}>
      <div className={"mm-header"}>
        <a className={"mm-prev"} href="#" style={{ display: "none" }} />
        <span className={"mm-title"}>Menu</span>
        <a className={"mm-next"} href="#" aria-label="Close menu" onClick={(event) => { event.preventDefault(); onClose(); }} />
      </div>
      <ul id="acm-mmenu" className={`acm-mmenu mm-list mm-panel${isSoundsMenuOpen ? " mm-subopened" : " mm-opened mm-current"}`}>
        <li id="menu-item-363" className={"menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-363"}>
          <a aria-current="page" className={"acm-mmenu-item-a"} href="/">Home</a>
        </li>
        <li id="menu-item-1951" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-1951"}>
          <a className={"acm-mmenu-item-a"} href="/about-us">About Us</a>
        </li>
        <li id="menu-item-1952" className={"menu-item menu-item-type-post_type menu-item-object-page menu-item-1952"}>
          <a className={"acm-mmenu-item-a"} href="/contact">Contact</a>
        </li>
        <li id="menu-item-2275" className={"menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-2275"}>
          <em className={"mm-counter"}>5</em>
          <a className={"mm-subopen"} href="#mm-m0-p1" aria-label="Open Sounds submenu" aria-expanded={isSoundsMenuOpen} onClick={(event) => { event.preventDefault(); if (!isOpen) onOpenMenu(); onOpenSounds(); }} />
          <a className={"acm-mmenu-item-a"} href="/golf-sounds">Sounds</a>
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
      <ul className={`sub-menu mm-list mm-panel${isSoundsMenuOpen ? " mm-opened mm-current" : ""}`} id="mm-m0-p1">
        <li className={"mm-subtitle"}>
          <a className={"mm-subclose"} href="#acm-mmenu" onClick={(event) => { event.preventDefault(); onCloseSounds(); }}>Sounds</a>
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

function ImportedHeader({ menuToggleRef, isMenuOpen, onToggleMenu }: { menuToggleRef: RefObject<HTMLAnchorElement | null>; isMenuOpen: boolean; onToggleMenu: () => void }) {
  return (
    <header id="site-header" className={"hero_wave_light menu-dark header-dark sticky-dark-menu clr"} itemScope itemType="http://schema.org/WPHeader" data-site-import-scroll-header={"{\"desktop\":{\"added\":[\"sticky\"],\"removed\":[],\"threshold\":648},\"mobile\":{\"added\":[\"sticky\"],\"removed\":[],\"threshold\":633}}"}>
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
            <a ref={menuToggleRef} className={"hamburger-icon"} href="#acm-mobile-menu" aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMenuOpen} onClick={(event) => { event.preventDefault(); onToggleMenu(); }}>
              <i className={"icon icon-menu"} />
            </a>
          </div>
        </div>
        <div id="site-navigation-wrap" className={"clr"}>
          <nav id="site-navigation" className={"navigation main-navigation clr"} itemScope itemType="http://schema.org/SiteNavigationElement">
            <ul id="menu-main-menu" className={"main-menu dropdown-menu sf-menu sf-js-enabled"} style={{ touchAction: "pan-y" }}>
              <li className={"menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-363"}>
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
                <a className={"menu-link sf-with-ul"} href="/golf-sounds" aria-haspopup="true">
                  <span className={"\x74ext-wrap"}>Sounds <span className={"nav-arrow fa fa-angle-down"} /></span>
                </a>
                <ul className={"sub-menu"}>
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

function ImportedSectionGolfSleepSoundsApp({ isMobile, heroSlide, onHeroSlideChange }: { isMobile: boolean; heroSlide: number; onHeroSlideChange: (slide: number) => void }) {
  return (
    <section className={"elementor-section elementor-top-section elementor-element elementor-element-ed96999 elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
      <div className={"elementor-container elementor-column-gap-default"}>
        <div className={"elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-57c4c94 elementor-invisible"} data-element_type="column" data-entrance-animation="fadeInLeft">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-0ed4037 elementor-widget elementor-widget-heading"}>
              <h1 className={"elementor-heading-title elementor-size-default"}>Golf Sleep Sounds App for Better Sleep &amp; Relaxation
    </h1>
            </div>
            <div className={"elementor-element elementor-element-07e7295 elementor-widget elementor-widget-text-editor"}>
              <p>
                <span className={"TextRun SCXW152607188 BCX0"} lang="EN-IN">
                  <span className={"NormalTextRun SCXW152607188 BCX0"}>Discover premium Golf Sleep Sounds, calming Nature Sounds, White Noise, Ocean Waves, and Sleep Music designed to help you fall asleep naturally. </span>
                  <span className={"NormalTextRun SpellingErrorV2Themed SCXW152607188 BCX0"}>DreamLinks</span>
                  <span className={"NormalTextRun SCXW152607188 BCX0"}> is your all-in-one Sleep Aid App for relaxation, stress relief, and deeper, more peaceful sleep.</span>
                </span>
                <span className={"EOP Selected SCXW152607188 BCX0"}> </span>
              </p>
            </div>
            <div className={"elementor-element elementor-element-dc32d97 elementor-widget elementor-widget-apper_heading"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-heading no-line \x63ontent-left-align"} />
              </div>
            </div>
            <div className={"elementor-element elementor-element-edc0452 elementor-widget elementor-widget-apper_img_button"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-button-wrap btn-dual btn-left"}><a className={"acm-button acm_py-3 acm_inline-block acm_px-10 acm_no-underline acm_mt-0 acm_text-sm acm-btn-outline acm-btn-outline"} href="https://apps.apple.com/in/app/dreamlinks/id6758689668">{" "}</a> <a className={"acm-button acm-button-second acm_py-3 acm_inline-block acm_px-10 acm_no-underline acm_mt-0 acm_text-sm acm-btn-outline acm-btn-outline"} href={"https://play.google.com/store/apps/details?id=com.wm.dreamlinks&pcampaignid=web_share"}>{" "}</a></div>
              </div>
            </div>
            <section className={"elementor-section elementor-inner-section elementor-element elementor-element-65e3123 elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
              <div className={"elementor-container elementor-column-gap-no"}>
                <div className={"elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ed5092a"} data-element_type="column">
                  <div className={"elementor-widget-wrap elementor-element-populated"}>
                    <div className={"elementor-element elementor-element-e1bcb74 elementor-tablet-align-end elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"}>
                      <ul className={"elementor-icon-list-items"}>
                        <li className={"elementor-icon-list-item"}><span className={"elementor-icon-list-icon"}>{" "}<i aria-hidden="true" className={"icon icon-check"} />{" "}</span> <span className={"elementor-icon-list-text"}>7 days free trial!</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={"elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7010f1b"} data-element_type="column">
                  <div className={"elementor-widget-wrap elementor-element-populated"}>
                    <div className={"elementor-element elementor-element-8615b35 elementor-mobile-align-center elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"}>
                      <ul className={"elementor-icon-list-items"}>
                        <li className={"elementor-icon-list-item"}><span className={"elementor-icon-list-icon"}>{" "}<i aria-hidden="true" className={"icon icon-check"} />{" "}</span> <span className={"elementor-icon-list-text"}>No credit card required!</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className={"elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-f8afb86 elementor-invisible"} data-element_type="column" data-entrance-animation="fadeInRight">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-5297d20 elementor-widget elementor-widget-apper_mobile_slider"}>
              <div className={"elementor-widget-container"}>
                <div className={"banner_slider"}>
                  <div className={"left_icon"}>
                    <img decoding="async" src="/site-assets/a6f4db3dd8390f89.png" title="message_icon" alt="App Conversations" loading="lazy" />
                  </div>
                  <div className={"right_icon"}>
                    <img decoding="async" src="/site-assets/54f08002cdc8b376.png" title="shield_icon" alt="App Security" loading="lazy" />
                  </div>
                  <div id="mobile_slider" className={"owl-carousel owl-theme mob-hero-slider owl-loaded owl-drag"}>
                    <div className={"owl-stage-outer"}>
                      <div className={"owl-stage"} style={{ transform: `translate3d(-${heroSlide * 310}px, 0px, 0px)`, transition: "1.5s", width: "930px" }}>
                        {["/site-assets/1d33ae4f472f4c02.png", "/site-assets/8ae03d98c9f5fe3f.png", "/site-assets/0408ce5db6ebbe40.png"].map((src, index) => (
                          <div key={src} className={`owl-item${heroSlide === index ? " active" : ""}`} style={{ width: "300px", marginRight: "10px" }}>
                            <div className={"item"}><div className={"slider_img"}><img decoding="async" src={src} alt={["DreamLinks app home screen", "DreamLinks sleep sound categories", "DreamLinks sleep welcome screen"][index]} /></div></div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className={"owl-dots"} aria-label="App preview slides">
                      {[0, 1, 2].map((index) => <button key={index} type="button" className={`owl-dot${heroSlide === index ? " active" : ""}`} aria-label={`Show app screen ${index + 1}`} aria-pressed={heroSlide === index} onClick={() => onHeroSlideChange(index)}><span /></button>)}
                    </div>
                  </div>
                  <div className={"slider_frame"}>
                    <img decoding="async" src="/site-assets/a7391bc742253f4f-4e2abdf6791c925d333aa0ead4ba8822.png" alt="Mobile frame" />
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

function ImportedSection() {
  return (
    <section className={"elementor-section elementor-top-section elementor-element elementor-element-527e08b acm_section_90 elementor-section-boxed elementor-section-height-default elementor-section-height-default right elementor-invisible"} data-entrance-animation="fadeInUp">
      <div className={"elementor-container elementor-column-gap-default"}>
        <div className={"elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-8eab721"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-699ba4d \x63ontent-align--right \x63ontent-align--tablet-center \x63ontent-align--mobile-center elementor-widget elementor-widget-apper_icon_box"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-iconbox icon-top"}>
                  <div className={"iconbox-wrap    \x61lign-right icon-type-filled "}>
                    <div className={"acm-icon"}>
                      <i aria-hidden="true" className={"icon icon-rocket"} />
                    </div>
                    <div className={"acm-icon-content"}>
                      <div className={"acm-icon-heading"}>
    						Golf Sleep Sounds 					</div>
                      <div className={"acm-icon-desc"}>
    						Escape into the peaceful ambience of lush golf courses with exclusive Golf Sleep Sounds designed to help you relax, unwind, and enjoy deeper sleep.					</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"elementor-element elementor-element-6b0a7e6 \x63ontent-align--right \x63ontent-align--tablet-center \x63ontent-align--mobile-center elementor-widget elementor-widget-apper_icon_box"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-iconbox icon-top"}>
                  <div className={"iconbox-wrap    \x61lign-right icon-type-filled "}>
                    <div className={"acm-icon"}>
                      <i aria-hidden="true" className={"icon icon-calendar"} />
                    </div>
                    <div className={"acm-icon-content"}>
                      <div className={"acm-icon-heading"}>
    						Nature Sounds Library 					</div>
                      <div className={"acm-icon-desc"}>
    						Discover calming Nature Sounds, Ocean Waves, Rain Sounds, and Forest Ambience that create the perfect environment for relaxation and restorative sleep. 					</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"elementor-element elementor-element-2c10bd7 \x63ontent-align--right \x63ontent-align--tablet-center \x63ontent-align--mobile-center elementor-widget elementor-widget-apper_icon_box"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-iconbox icon-top"}>
                  <div className={"iconbox-wrap    \x61lign-right icon-type-filled "}>
                    <div className={"acm-icon"}>
                      <i aria-hidden="true" className={"icon icon-calendar"} />
                    </div>
                    <div className={"acm-icon-content"}>
                      <div className={"acm-icon-heading"}>
    						Smart Sleep Timer 					</div>
                      <div className={"acm-icon-desc"}>
    						Set a custom timer so your sounds fade away naturally after you fall asleep, creating a peaceful bedtime routine without interruptions. 					</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"elementor-element elementor-element-722b902 elementor-widget elementor-widget-apper_button"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-button-wrap btn-right"}>
                  <a className={"acm-button acm_py-3 acm_inline-block acm_px-10 acm_no-underline acm_mt-0 acm_text-sm acm_text-white acm-btn-outline acm-btn-round acm-btn-slide-hover"} href="/about-us">
                    <span className={"acm_btn-text"}>
    					 Learn More				 </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-8263cf2"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated e-swiper-container"}>
            <div className={"elementor-element elementor-element-2228c43 elementor-widget elementor-widget-image-carousel e-widget-swiper"}>
              <div className={"elementor-image-carousel-wrapper swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"} role="region" aria-roledescription="carousel" aria-label="Image Carousel" dir="ltr">
                <div className={"elementor-image-carousel swiper-wrapper"} aria-live="off" id="swiper-wrapper-ef10493bf0d4502b7" style={{ transform: "translate3d(-407px, 0px, 0px)", transitionDuration: "0ms" }} data-site-import-responsive="203">
                  <div className={"swiper-slide swiper-slide-duplicate swiper-slide-prev"} role="group" aria-roledescription="slide" aria-label="4 / 4" aria-hidden="true" inert style={{ width: "407px" }} data-site-import-responsive="204">
                    <figure className={"swiper-slide-inner"}>
                      <img decoding="async" className={"swiper-slide-image"} src="/site-assets/71ae8bb576b34bfc.png" alt="Music Player V4 (2)" />
                    </figure>
                  </div>
                  <div className={"swiper-slide swiper-slide-active"} role="group" aria-roledescription="slide" aria-label="1 / 4" style={{ width: "407px" }} data-site-import-responsive="207">
                    <figure className={"swiper-slide-inner"}>
                      <img decoding="async" className={"swiper-slide-image"} src="/site-assets/92aed64c58a2e162.png" alt="Get Started" />
                    </figure>
                  </div>
                  <div className={"swiper-slide swiper-slide-next"} role="group" aria-roledescription="slide" aria-label="2 / 4" style={{ width: "407px" }} aria-hidden="true" inert data-site-import-responsive="210">
                    <figure className={"swiper-slide-inner"}>
                      <img decoding="async" className={"swiper-slide-image"} src="/site-assets/937b5db52b0d7038.png" alt="Music Player V4" />
                    </figure>
                  </div>
                  <div className={"swiper-slide"} role="group" aria-roledescription="slide" aria-label="3 / 4" style={{ width: "407px" }} aria-hidden="true" inert data-site-import-responsive="213">
                    <figure className={"swiper-slide-inner"}>
                      <img decoding="async" className={"swiper-slide-image"} src="/site-assets/a96b4a6d9373720c.png" alt="Categories V1" />
                    </figure>
                  </div>
                  <div className={"swiper-slide swiper-slide-duplicate-prev"} role="group" aria-roledescription="slide" aria-label="4 / 4" style={{ width: "407px" }} aria-hidden="true" inert data-site-import-responsive="216">
                    <figure className={"swiper-slide-inner"}>
                      <img decoding="async" className={"swiper-slide-image"} src="/site-assets/71ae8bb576b34bfc.png" alt="Music Player V4 (2)" />
                    </figure>
                  </div>
                  <div className={"swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"} role="group" aria-roledescription="slide" aria-label="1 / 4" style={{ width: "407px" }} aria-hidden="true" inert data-site-import-responsive="219">
                    <figure className={"swiper-slide-inner"}>
                      <img decoding="async" className={"swiper-slide-image"} src="/site-assets/92aed64c58a2e162.png" alt="Get Started" />
                    </figure>
                  </div>
                </div>
                <span className={"swiper-notification"} aria-live="assertive" aria-atomic="true" />
              </div>
            </div>
          </div>
        </div>
        <div className={"elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-c934f90"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-dcff093 \x63ontent-align--left \x63ontent-align--mobile-center \x63ontent-align--tablet-center elementor-widget elementor-widget-apper_icon_box"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-iconbox icon-top"}>
                  <div className={"iconbox-wrap    \x61lign-left icon-type-filled "}>
                    <div className={"acm-icon"}>
                      <i aria-hidden="true" className={"icon icon-chart"} />
                    </div>
                    <div className={"acm-icon-content"}>
                      <div className={"acm-icon-heading"}>
    						Personalised Sleep Playlists 					</div>
                      <div className={"acm-icon-desc"}>
    						Create your own bedtime playlists by combining your favourite sleep sounds and enjoy a personalised relaxation experience with DreamLinks.					</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"elementor-element elementor-element-60e3042 \x63ontent-align--left \x63ontent-align--mobile-center \x63ontent-align--tablet-center elementor-widget elementor-widget-apper_icon_box"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-iconbox icon-top"}>
                  <div className={"iconbox-wrap    \x61lign-left icon-type-filled "}>
                    <div className={"acm-icon"}>
                      <i aria-hidden="true" className={"icon icon-wrench"} />
                    </div>
                    <div className={"acm-icon-content"}>
                      <div className={"acm-icon-heading"}>
    						Offline Listening 					</div>
                      <div className={"acm-icon-desc"}>
    						Download your favourite Sleep Sounds and enjoy uninterrupted relaxation anywhere, even without an internet connection. 					</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"elementor-element elementor-element-dd51ee3 \x63ontent-align--left \x63ontent-align--mobile-center \x63ontent-align--tablet-center elementor-widget elementor-widget-apper_icon_box"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-iconbox icon-top"}>
                  <div className={"iconbox-wrap    \x61lign-left icon-type-filled "}>
                    <div className={"acm-icon"}>
                      <i aria-hidden="true" className={"icon icon-arrow-down-circle"} />
                    </div>
                    <div className={"acm-icon-content"}>
                      <div className={"acm-icon-heading"}>
    						Stress Relief Sound Therapy					</div>
                      <div className={"acm-icon-desc"}>
    						Relax your mind with carefully curated soothing soundscapes designed to ease stress, quiet racing thoughts, and prepare you for a peaceful night's sleep.					</div>
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

function ImportedSectionYourBedtimeYourWay() {
  return (
    <section className={"elementor-section elementor-top-section elementor-element elementor-element-08f14c1 elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"} id="about">
      <div className={"elementor-container elementor-column-gap-default"}>
        <div className={"elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-765a841 elementor-invisible"} data-element_type="column" data-entrance-animation="fadeInLeft">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-cfc0354 elementor-widget elementor-widget-apper_img_anim"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-image-animator clr"}>
                  <div className={"app-previews"}>
                    <div className={"app-preview-one"}>
                      <img fetchPriority="high" decoding="async" width="1024" height="1536" src="/site-assets/0e9aa2303a3f0054.webp" className={"moving_position_animation"} alt="" srcSet="/site-assets/0e9aa2303a3f0054.webp 1024w, /site-assets/beacf61646c13ac3.webp 200w, /site-assets/b49f702c3f86641b.webp 683w, /site-assets/eb8ce4cd9770cf34.webp 768w" sizes="(max-width: 1024px) 100vw, 1024px" />
                    </div>
                    <div className={"app-preview-two"}>
                      <img loading="lazy" decoding="async" width="1024" height="1536" src="/site-assets/ed9c02e0452755ed.webp" className={"moving_animation"} alt="" srcSet="/site-assets/ed9c02e0452755ed.webp 1024w, /site-assets/88a87b20cb83294d.webp 200w, /site-assets/ac5252b26b75e3a4.webp 683w, /site-assets/ea8915b32ddd1e8f.webp 768w" sizes="(max-width: 1024px) 100vw, 1024px" />
                    </div>
                    <div className={"app-preview-three"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-063c55b elementor-invisible"} data-element_type="column" data-entrance-animation="fadeInRight">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-7ddadd8 elementor-widget elementor-widget-apper_heading"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-heading no-line \x63ontent-left-align"}>
                  <h2 className={"acm-title"}>
                    <span>Your Bedtime. Your Way. </span>
                  </h2>
                  <div className={"acm_heading-desc"}>
                    <p>
                      <span className={"TextRun SCXW29526918 BCX0"} lang="EN-IN">
                        <span className={"NormalTextRun SCXW29526918 BCX0"}>No two nights are the same, and neither is your sleep. </span>
                      </span>
                      <span className={"TextRun SCXW29526918 BCX0"} lang="EN-IN">
                        <span className={"NormalTextRun SpellingErrorV2Themed SCXW29526918 BCX0"}>DreamLinks</span>
                      </span>
                      <span className={"TextRun SCXW29526918 BCX0"} lang="EN-IN">
                        <span className={"NormalTextRun SCXW29526918 BCX0"}> helps you create a personalised bedtime experience with </span>
                      </span>
                      <span className={"TextRun SCXW29526918 BCX0"} lang="EN-IN">
                        <span className={"NormalTextRun SCXW29526918 BCX0"}>Sleep Sounds</span>
                      </span>
                      <span className={"TextRun SCXW29526918 BCX0"} lang="EN-IN">
                        <span className={"NormalTextRun SCXW29526918 BCX0"}>, </span>
                      </span>
                      <span className={"TextRun SCXW29526918 BCX0"} lang="EN-IN">
                        <span className={"NormalTextRun SCXW29526918 BCX0"}>Nature Sounds</span>
                      </span>
                      <span className={"TextRun SCXW29526918 BCX0"} lang="EN-IN">
                        <span className={"NormalTextRun SCXW29526918 BCX0"}>, </span>
                      </span>
                      <span className={"TextRun SCXW29526918 BCX0"} lang="EN-IN">
                        <span className={"NormalTextRun SCXW29526918 BCX0"}>White Noise</span>
                      </span>
                      <span className={"TextRun SCXW29526918 BCX0"} lang="EN-IN">
                        <span className={"NormalTextRun SCXW29526918 BCX0"}>, and calming </span>
                      </span>
                      <span className={"TextRun SCXW29526918 BCX0"} lang="EN-IN">
                        <span className={"NormalTextRun SCXW29526918 BCX0"}>Golf Course Ambience</span>
                      </span>
                      <span className={"TextRun SCXW29526918 BCX0"} lang="EN-IN">
                        <span className={"NormalTextRun SCXW29526918 BCX0"}>. Whether </span>
                        <span className={"NormalTextRun SCXW29526918 BCX0"}>you're</span>
                        <span className={"NormalTextRun SCXW29526918 BCX0"}> looking to reduce stress, relax after a busy day, or </span>
                      </span>
                      <span className={"TextRun SCXW29526918 BCX0"} lang="EN-IN">
                        <span className={"NormalTextRun SCXW29526918 BCX0"}>fall asleep naturally</span>
                      </span>
                      <span className={"TextRun SCXW29526918 BCX0"} lang="EN-IN">
                        <span className={"NormalTextRun SCXW29526918 BCX0"}>, </span>
                        <span className={"NormalTextRun SpellingErrorV2Themed SCXW29526918 BCX0"}>DreamLinks</span>
                        <span className={"NormalTextRun SCXW29526918 BCX0"}> gives you the freedom to choose the sounds that work best for you.</span>
                      </span>
                      <span className={"EOP Selected SCXW29526918 BCX0"}> </span>
                    </p>
                  </div>
                  <div className={"acm-heading-border"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSection299() {
  return (
    <section className={"elementor-section elementor-top-section elementor-element elementor-element-8fffd9d elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right elementor-invisible"} data-entrance-animation="fadeInUp" data-entrance-delay="500">
      <div className={"elementor-container elementor-column-gap-default"}>
        <div className={"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1905433"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <section className={"elementor-section elementor-inner-section elementor-element elementor-element-386d567 elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
              <div className={"elementor-container elementor-column-gap-default"}>
                <div className={"elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e4a4e85"} data-element_type="column">
                  <div className={"elementor-widget-wrap elementor-element-populated"}>
                    <div className={"elementor-element elementor-element-45b4c15 elementor-position-top elementor-widget elementor-widget-image-box"}>
                      <div className={"elementor-image-box-wrapper"}>
                        <figure className={"elementor-image-box-img"}>
                          <img loading="lazy" decoding="async" width="735" height="698" src="/site-assets/aa5c9ac09eb1a1a0.jpg" className={"attachment-full \x73ize-full wp-image-1881"} alt="" srcSet="/site-assets/aa5c9ac09eb1a1a0.jpg 735w, /site-assets/377bb11a554af961.jpg 300w" sizes="(max-width: 735px) 100vw, 735px" />
                        </figure>
                        <div className={"elementor-image-box-content"}>
                          <h3 className={"elementor-image-box-title"}>Monthly Plan</h3>
                        </div>
                      </div>
                    </div>
                    <div className={"elementor-element elementor-element-46e2602 elementor-widget elementor-widget-heading"}>
                      <h2 className={"elementor-heading-title elementor-size-default"}>$2.99</h2>
                    </div>
                    <div className={"elementor-element elementor-element-a6c96c2 elementor-align-center elementor-widget elementor-widget-button"}>
                      <a className={"elementor-button elementor-button-link elementor-size-sm"} href={"https://play.google.com/store/apps/details?id=com.wm.dreamlinks&pcampaignid=web_share"}>
                        <span className={"elementor-button-content-wrapper"}>
                          <span className={"elementor-button-text"}>GET NOW</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className={"elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-7b1e4d8"} data-element_type="column">
                  <div className={"elementor-widget-wrap elementor-element-populated"}>
                    <div className={"elementor-element elementor-element-5b79734 elementor-position-top elementor-widget elementor-widget-image-box"}>
                      <div className={"elementor-image-box-wrapper"}>
                        <figure className={"elementor-image-box-img"}>
                          <img loading="lazy" decoding="async" width="735" height="698" src="/site-assets/aa5c9ac09eb1a1a0.jpg" className={"attachment-full \x73ize-full wp-image-1881"} alt="" srcSet="/site-assets/aa5c9ac09eb1a1a0.jpg 735w, /site-assets/377bb11a554af961.jpg 300w" sizes="(max-width: 735px) 100vw, 735px" />
                        </figure>
                        <div className={"elementor-image-box-content"}>
                          <h3 className={"elementor-image-box-title"}>Yearly Plan</h3>
                        </div>
                      </div>
                    </div>
                    <div className={"elementor-element elementor-element-a18363c elementor-widget elementor-widget-heading"}>
                      <h2 className={"elementor-heading-title elementor-size-default"}>$30.00</h2>
                    </div>
                    <div className={"elementor-element elementor-element-e50b61e elementor-align-center elementor-widget elementor-widget-button"}>
                      <a className={"elementor-button elementor-button-link elementor-size-sm"} href="https://apps.apple.com/in/app/dreamlinks/id6758689668">
                        <span className={"elementor-button-content-wrapper"}>
                          <span className={"elementor-button-text"}>GET NOW</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className={"elementor-element elementor-element-06a7864 elementor-widget__width-initial elementor-widget elementor-widget-apper_heading"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-heading no-line \x63ontent-center-align-align"}>
                  <h2 className={"acm-title"}>
                    <span>Choose the Plan That Helps You Sleep Better </span>
                  </h2>
                  <div className={"acm_heading-desc"}>
                    <p>
                      <span className={"TextRun SCXW62293353 BCX0"} lang="EN-IN">
                        <span className={"NormalTextRun SCXW62293353 BCX0"}>Every peaceful night begins with a simple choice. Unlock the full </span>
                      </span>
                      <span className={"TextRun SCXW62293353 BCX0"} lang="EN-IN">
                        <span className={"NormalTextRun SpellingErrorV2Themed SCXW62293353 BCX0"}>DreamLinks</span>
                      </span>
                      <span className={"TextRun SCXW62293353 BCX0"} lang="EN-IN">
                        <span className={"NormalTextRun SCXW62293353 BCX0"}> experience and enjoy calming sounds, personalised sleep tools, and everything you need to relax, recharge, and wake up refreshed.</span>
                      </span>
                      <span className={"EOP Selected SCXW62293353 BCX0"}> </span>
                    </p>
                  </div>
                  <div className={"acm-heading-border"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionBeautifulByDesignPeaceful() {
  return (
    <section className={"elementor-section elementor-top-section elementor-element elementor-element-1fd4fbd elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"} id="gallery">
      <div className={"elementor-container elementor-column-gap-default"}>
        <div className={"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-50ef5a4"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <section className={"elementor-section elementor-inner-section elementor-element elementor-element-b19327f elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
              <div className={"elementor-container elementor-column-gap-default"}>
                <div className={"elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-b26db2a"} data-element_type="column">
                  <div className={"elementor-widget-wrap elementor-element-populated"}>
                    <div className={"elementor-element elementor-element-4f8d9e9 elementor-widget elementor-widget-apper_heading"}>
                      <div className={"elementor-widget-container"}>
                        <div className={"acm-heading no-line \x63ontent-center-align-align"}>
                          <h2 className={"acm-title"}>
                            <span>Beautiful by Design. Peaceful by Nature. </span>
                          </h2>
                          <div className={"acm_heading-desc"}>
                            <p>
                              <span className={"TextRun SCXW74785292 BCX0"} lang="EN-IN">
                                <span className={"NormalTextRun SCXW74785292 BCX0"}>A calm mind begins with a calm experience. </span>
                              </span>
                              <a href="/about-us">
                                <span className={"TextRun SCXW74785292 BCX0"} lang="EN-IN">
                                  <span className={"NormalTextRun SpellingErrorV2Themed SCXW74785292 BCX0"}>DreamLinks</span>
                                </span>
                              </a>
                              <span className={"TextRun SCXW74785292 BCX0"} lang="EN-IN">
                                <span className={"NormalTextRun SCXW74785292 BCX0"}> combines elegant design, intuitive navigation, and distraction-free interactions, making every bedtime routine feel simple, effortless, and relaxing.</span>
                              </span>
                              <span className={"EOP Selected SCXW74785292 BCX0"}> </span>
                            </p>
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
  );
}

function ImportedSectionYourBestNightsAre() {
  return (
    <section className={"elementor-section elementor-top-section elementor-element elementor-element-2912903 acm_section_80 elementor-section-boxed elementor-section-height-default elementor-section-height-default right"} id="download">
      <div className={"elementor-container elementor-column-gap-default"}>
        <div className={"elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-97be150"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-0a802a4 elementor-widget elementor-widget-apper_heading"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-heading no-line \x63ontent-left-align"}>
                  <h2 className={"acm-title"}>
                    <span>Your Best Nights Are Just One Tap Away </span>
                  </h2>
                  <div className={"acm_heading-desc"}>
                    <p>
                      <span className={"TextRun SCXW141936191 BCX0"} lang="EN-IN">
                        <span className={"NormalTextRun SCXW141936191 BCX0"}>Start your journey to calmer evenings, deeper sleep, and brighter mornings with </span>
                      </span>
                      <span className={"TextRun SCXW141936191 BCX0"} lang="EN-IN">
                        <span className={"NormalTextRun SpellingErrorV2Themed SCXW141936191 BCX0"}>DreamLinks</span>
                      </span>
                      <span className={"TextRun SCXW141936191 BCX0"} lang="EN-IN">
                        <span className={"NormalTextRun SCXW141936191 BCX0"}>. Download the app today and discover a peaceful bedtime experience designed to help you relax, recharge, and wake up feeling refreshed.</span>
                      </span>
                      <span className={"EOP Selected SCXW141936191 BCX0"}> </span>
                    </p>
                  </div>
                  <div className={"acm-heading-border"} />
                </div>
              </div>
            </div>
            <div className={"elementor-element elementor-element-7910c18 elementor-widget__width-initial elementor-widget elementor-widget-apper_img_button"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-button-wrap btn-dual btn-left"}><a className={"acm-button acm_py-3 acm_inline-block acm_px-10 acm_no-underline acm_mt-0 acm_text-sm acm-btn-outline acm-btn-outline"} href="https://apps.apple.com/in/app/dreamlinks/id6758689668">{" "}</a> <a className={"acm-button acm-button-second acm_py-3 acm_inline-block acm_px-10 acm_no-underline acm_mt-0 acm_text-sm acm-btn-outline acm-btn-outline"} href={"https://play.google.com/store/apps/details?id=com.wm.dreamlinks&pcampaignid=web_share"}>{" "}</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className={"elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-6995018 elementor-hidden-mobile"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-a3b1bc0 elementor-widget elementor-widget-image"}>
              <img loading="lazy" decoding="async" width="428" height="926" src="/site-assets/7a239740f773136f.png" className={"attachment-large \x73ize-large wp-image-1753"} alt="" />
            </div>
          </div>
        </div>
        <div className={"elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-43334cb"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-20e5d5e elementor-widget elementor-widget-image"}>
              <img loading="lazy" decoding="async" width="428" height="926" src="/site-assets/71ae8bb576b34bfc.png" className={"attachment-large \x73ize-large wp-image-1756"} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImportedSectionHaveAQuestion() {
  return (
    <section className={"elementor-section elementor-top-section elementor-element elementor-element-a7637df elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
      <div className={"elementor-container elementor-column-gap-default"}>
        <div className={"elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-818f882"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-96e9ff2 elementor-widget elementor-widget-image"}>
              <a href={"https://www.google.com/maps/place/Overland+Wolf+Center/@41.2490649,-96.0207025,17z/data=!3m1!4b1!4m6!3m5!1s0x87938da950f4601b:0x40c9099b7184221c!8m2!3d41.2490649!4d-96.0207025!16s%2Fg%2F1th5d1p_?hl=en-US&entry=ttu&g_ep=EgoyMDI2MDkwMS4wIKXMDSoASAFQAw%3D%3D"}>
                <img loading="lazy" decoding="async" width="1024" height="758" src="/site-assets/148b83015b197f29.webp" className={"attachment-large \x73ize-large wp-image-3046"} alt="" srcSet="/site-assets/148b83015b197f29.webp 1024w, /site-assets/044ae5a51ef52724.webp 300w, /site-assets/7f62e00874523065.webp 768w, /site-assets/7054f820fa2b0531.webp 1457w" sizes="(max-width: 1024px) 100vw, 1024px" />
              </a>
            </div>
          </div>
        </div>
        <div className={"elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-4484789"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <div className={"elementor-element elementor-element-aa45a49 elementor-widget elementor-widget-apper_heading"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-heading no-line \x63ontent-left-align"}>
                  <h2 className={"acm-title"}>Have a 																<span>question?</span></h2>
                  <div className={"acm_heading-desc"}>
                    <p>To get answers to all your questions about our products, &amp; services, read our <a href="/frequently-asked-questions">FAQs page</a></p>
                  </div>
                  <div className={"acm-heading-border"} />
                </div>
              </div>
            </div>
            <div className={"elementor-element elementor-element-ea66349 \x63ontent-align--left elementor-widget elementor-widget-apper_icon_box"}>
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
            <div className={"elementor-element elementor-element-c4af23f \x63ontent-align--left elementor-widget elementor-widget-apper_icon_box"}>
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
    						+(402) 813-4360					</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"elementor-element elementor-element-274261a \x63ontent-align--left elementor-widget__width-initial elementor-widget elementor-widget-apper_icon_box"}>
              <div className={"elementor-widget-container"}>
                <div className={"acm-iconbox icon-left"}>
                  <div className={"iconbox-wrap    \x61lign-left icon-type-filled "}>
                    <div className={"acm-icon"}>
                      <i aria-hidden="true" className={"icon icon-location-pin"} />
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

function ImportedSectionSleepBetterStartsWith() {
  return (
    <section className={"elementor-section elementor-top-section elementor-element elementor-element-c1d76f9 elementor-hidden-desktop elementor-hidden-tablet elementor-hidden-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default acm_section_full right"}>
      <div className={"elementor-container elementor-column-gap-default"}>
        <div className={"elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-20689c6"} data-element_type="column">
          <div className={"elementor-widget-wrap elementor-element-populated"}>
            <section className={"elementor-section elementor-inner-section elementor-element elementor-element-15a2021 elementor-section-boxed elementor-section-height-default acm_section_full right elementor-invisible"} data-entrance-animation="fadeIn">
              <div className={"elementor-container elementor-column-gap-no"}>
                <div className={"elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-0cb7a78"} data-element_type="column">
                  <div className={"elementor-widget-wrap elementor-element-populated"}>
                    <div className={"elementor-element elementor-element-6bbec91 elementor-widget elementor-widget-apper_heading"}>
                      <div className={"elementor-widget-container"}>
                        <div className={"acm-heading no-line \x63ontent-left-align"}>
                          <h2 className={"acm-title"}>
                            <span>Sleep Better Starts with One Email</span>
                          </h2>
                          <div className={"acm_heading-desc"}>
                            <p>
                              <span className={"TextRun SCXW249141300 BCX0"} lang="EN-IN">
                                <span className={"NormalTextRun SCXW249141300 BCX0"}>Join the </span>
                              </span>
                              <span className={"TextRun SCXW249141300 BCX0"} lang="EN-IN">
                                <span className={"NormalTextRun SpellingErrorV2Themed SCXW249141300 BCX0"}>DreamLinks</span>
                              </span>
                              <span className={"TextRun SCXW249141300 BCX0"} lang="EN-IN">
                                <span className={"NormalTextRun SCXW249141300 BCX0"}> community and receive calming sleep tips, exclusive updates, new sound collections, and wellness </span>
                                <span className={"NormalTextRun SCXW249141300 BCX0"}>inspirat</span>
                                <span className={"NormalTextRun SCXW249141300 BCX0"}>ion—delivered with care, never spam.</span>
                              </span>
                              <span className={"EOP Selected SCXW249141300 BCX0"}> </span>
                            </p>
                          </div>
                          <div className={"acm-heading-border"} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-10d714e"} data-element_type="column">
                  <div className={"elementor-widget-wrap elementor-element-populated"}>
                    <div className={"elementor-element elementor-element-2d31789 elementor-widget elementor-widget-apper_newsletter"}>
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


function useImportedEntranceAnimations() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-entrance-animation]"));
    const reveal = (element: HTMLElement) => {
      const animation = element.dataset.entranceAnimation;
      element.classList.remove("elementor-invisible");
      element.classList.add("animated");
      if (animation) element.classList.add(animation);
    };

    if (matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      targets.forEach(reveal);
      return;
    }

    const pendingTimers = new Set<number>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting || !(entry.target instanceof HTMLElement)) continue;
        const element = entry.target;
        observer.unobserve(element);
        const requestedDelay = Number(element.dataset.entranceDelay);
        const delay = Number.isFinite(requestedDelay) && requestedDelay > 0 ? requestedDelay : 0;
        if (delay === 0) {
          reveal(element);
          continue;
        }
        const timer = window.setTimeout(() => {
          pendingTimers.delete(timer);
          reveal(element);
        }, delay);
        pendingTimers.add(timer);
      }
    }, { root: null, rootMargin: "0px", threshold: 0 });

    targets.forEach((target) => observer.observe(target));
    return () => {
      observer.disconnect();
      pendingTimers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);
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

function subscribeMobile(onChange: () => void) {
  const query = matchMedia("(max-width: 767px)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
