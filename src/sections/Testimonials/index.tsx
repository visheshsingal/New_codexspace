import { TestimonialHeader } from "@/sections/Testimonials/components/TestimonialHeader";
import { TestimonialCard } from "@/sections/Testimonials/components/TestimonialCard";
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [0, 1, 2];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="text-black text-[15.1297px] bg-stone-50 box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
      <div className="text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] px-[15.1297px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:px-[30.5746px]">
        <div className="text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] max-w-[1815.56px] w-full mx-auto pt-[40px] pb-[20px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:max-w-[1834.48px] md:pt-[60px] md:pb-[40px]">
          <div className="text-[15.1297px] box-border caret-transparent gap-x-[30px] flex flex-col tracking-[-0.302594px] leading-[21.1816px] gap-y-[30px] md:text-[15.2873px] md:gap-x-[30px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:gap-y-[30px]">
            <TestimonialHeader />
            <div className="text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] ml-[-15.1297px] mr-[-15.1297px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:ml-[-15.2873px] md:mr-[-15.2873px]">
              <div className="relative text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] list-none max-w-full w-full z-[1] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
                <div
                  role="list"
                  className="relative text-[15.1297px] items-stretch caret-transparent flex h-full justify-start tracking-[-0.302594px] leading-[21.1816px] w-full z-[1] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
                >
                  <TestimonialCard />
                  <div
                    role="group"
                    aria-label="2 / 3"
                    className="relative text-[15.1297px] items-stretch box-border caret-transparent flex shrink-0 auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] justify-start tracking-[-0.302594px] leading-[21.1816px] w-4/5 px-[15.1297px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:w-3/5 md:px-[15.2873px]"
                  >
                    <div className="text-emerald-800 text-[15.1297px] items-start bg-emerald-200 box-border caret-transparent gap-x-[25px] flex flex-col shrink-0 justify-between tracking-[-0.302594px] leading-[21.1816px] gap-y-[25px] w-full p-[24px] md:text-[15.2873px] md:gap-x-[30px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:gap-y-[30px] md:p-[30px]">
                      <div className="text-[15.1297px] items-start box-border caret-transparent gap-x-[9.07782px] flex justify-between tracking-[-0.302594px] leading-[21.1816px] gap-y-[9.07782px] md:text-[15.2873px] md:gap-x-[40px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:gap-y-[40px]">
                        <div className="text-[16px] box-border caret-transparent tracking-[-0.5px] leading-[1.4] md:text-[24px] md:tracking-[-1px] md:leading-[1.4]">
                          We are extremely pleased with the website design and functionality delivered by the team. It's user-friendly, professional, and perfectly showcases our services. The entire process was efficient and stress-free.
                        </div>
                        <div className="text-[15.1297px] box-border caret-transparent shrink-0 h-[20px] tracking-[-0.302594px] leading-[21.1816px] w-[20px] md:text-[15.2873px] md:h-[30px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:w-[30px]">
                          <div className="text-[15.1297px] items-center box-border caret-transparent flex h-full justify-center tracking-[-0.302594px] leading-[21.1816px] max-w-full w-full md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
                            <img
                              src="https://c.animaapp.com/mk1krdvf8IZhRk/assets/icon-19.svg"
                              alt="Icon"
                              className="text-[15.1297px] box-border caret-transparent h-full tracking-[-0.302594px] leading-[21.1816px] w-full md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-[15.1297px] items-center box-border caret-transparent flex justify-between tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
                        <div className="text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
                          <div className="text-[14px] font-medium box-border caret-transparent tracking-[-0.302594px] leading-[1.4] md:text-[16px]">
                            Mohit Bazzad
                          </div>
                          <div className="text-[12px] opacity-80 box-border caret-transparent tracking-[-0.302594px] leading-[1.4] md:text-[14px]">
                            Founder, Kings Pet Hospital
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    role="group"
                    aria-label="3 / 3"
                    className="relative text-[15.1297px] items-stretch box-border caret-transparent flex shrink-0 auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] justify-start tracking-[-0.302594px] leading-[21.1816px] w-4/5 px-[15.1297px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:w-3/5 md:px-[15.2873px]"
                  >
                    <div className="text-blue-300 text-[15.1297px] items-start bg-slate-900 box-border caret-transparent gap-x-[25px] flex flex-col shrink-0 justify-between tracking-[-0.302594px] leading-[21.1816px] gap-y-[25px] w-full p-[24px] md:text-[15.2873px] md:gap-x-[30px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:gap-y-[30px] md:p-[30px]">
                      <div className="text-[15.1297px] items-start box-border caret-transparent gap-x-[9.07782px] flex justify-between tracking-[-0.302594px] leading-[21.1816px] gap-y-[9.07782px] md:text-[15.2873px] md:gap-x-[40px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:gap-y-[40px]">
                        <div className="text-[16px] box-border caret-transparent tracking-[-0.5px] leading-[1.4] md:text-[24px] md:tracking-[-1px] md:leading-[1.4]">
                          I've worked with this team for many years, and
                          they never fail to deliver… they jump head first into
                          all challenges and over-deliver every time. What I
                          especially like about them is that they often enhance
                          the creative, as well as being solutions orientated…
                        </div>
                        <div className="text-[15.1297px] box-border caret-transparent shrink-0 h-[20px] tracking-[-0.302594px] leading-[21.1816px] w-[20px] md:text-[15.2873px] md:h-[30px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:w-[30px]">
                          <div className="text-[15.1297px] items-center box-border caret-transparent flex h-full justify-center tracking-[-0.302594px] leading-[21.1816px] max-w-full w-full md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
                            <img
                              src="https://c.animaapp.com/mk1krdvf8IZhRk/assets/icon-20.svg"
                              alt="Icon"
                              className="text-[15.1297px] box-border caret-transparent h-full tracking-[-0.302594px] leading-[21.1816px] w-full md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-[15.1297px] items-center box-border caret-transparent flex justify-between tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
                        <div className="text-[15.1297px] box-border caret-transparent tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
                          <div className="text-[14px] font-medium box-border caret-transparent tracking-[-0.302594px] leading-[1.4] md:text-[16px]">
                            Aman Sharma
                          </div>
                          <div className="text-[12px] opacity-80 box-border caret-transparent tracking-[-0.302594px] leading-[1.4] md:text-[14px]">
                            CEO, Hi Tech Luxury Homes
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
      </div>
      <div className="relative text-[15.1297px] box-border caret-transparent gap-x-[50px] flex flex-col tracking-[-0.302594px] leading-[21.1816px] gap-y-[50px] overflow-hidden md:text-[15.2873px] md:gap-x-[50px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:gap-y-[50px]">
        <div className="text-[15.1297px] box-border caret-transparent flex tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
          <div className="text-[15.1297px] box-border caret-transparent flex shrink-0 tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
            <div className="text-[15.1297px] box-border caret-transparent flex shrink-0 tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
              <div
                role="list"
                className="text-[15.1297px] box-border caret-transparent flex shrink-0 justify-around tracking-[-0.302594px] leading-[21.1816px] min-w-[375px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:min-w-[1280px]"
              >
                <div
                  role="listitem"
                  className="relative text-[15.1297px] box-border caret-transparent shrink-0 tracking-[-0.302594px] leading-[21.1816px] z-[3] px-[20px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:px-[25px]"
                >
                  <img
                    src="https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae206c33299da66dd2d0c0_XL_Recordings_Logo 1.svg"
                    alt=""
                    className="relative text-[15.1297px] box-border caret-transparent inline-block grayscale-[1] h-[30px] tracking-[-0.302594px] leading-[21.1816px] max-w-full object-contain w-full z-[3] md:text-[15.2873px] md:h-[35px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
                  />
                </div>
                <div
                  role="listitem"
                  className="relative text-[15.1297px] box-border caret-transparent shrink-0 tracking-[-0.302594px] leading-[21.1816px] z-[3] px-[20px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:px-[25px]"
                >
                  <img
                    src="https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae205f6285ccbb37258ab3_Glasto.png"
                    alt=""
                    className="relative text-[15.1297px] box-border caret-transparent inline-block grayscale-[1] h-[30px] tracking-[-0.302594px] leading-[21.1816px] max-w-full object-contain w-full z-[3] md:text-[15.2873px] md:h-[35px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
                  />
                </div>
                <div
                  role="listitem"
                  className="relative text-[15.1297px] box-border caret-transparent shrink-0 tracking-[-0.302594px] leading-[21.1816px] z-[3] px-[20px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:px-[25px]"
                >
                  <img
                    src="https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae20485e0e99ea60ad6979_Xbox-Logo.wine 1.svg"
                    alt=""
                    className="relative text-[15.1297px] box-border caret-transparent inline-block grayscale-[1] h-[30px] tracking-[-0.302594px] leading-[21.1816px] max-w-full object-contain w-full z-[3] md:text-[15.2873px] md:h-[35px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
                  />
                </div>
                <div
                  role="listitem"
                  className="relative text-[15.1297px] box-border caret-transparent shrink-0 tracking-[-0.302594px] leading-[21.1816px] z-[3] px-[20px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:px-[25px]"
                >
                  <img
                    src="https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/68527eaac850562caf155695_Meta.svg"
                    alt=""
                    className="relative text-[15.1297px] aspect-[auto_73_/_43] box-border caret-transparent inline-block grayscale-[1] h-[30px] tracking-[-0.302594px] leading-[21.1816px] max-w-full object-contain w-full z-[3] md:text-[15.2873px] md:h-[35px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
                  />
                </div>
                <div
                  role="listitem"
                  className="relative text-[15.1297px] box-border caret-transparent shrink-0 tracking-[-0.302594px] leading-[21.1816px] z-[3] px-[20px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:px-[25px]"
                >
                  <img
                    src="https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae203520041ac6c98ae204_Playstation.svg"
                    alt=""
                    className="relative text-[15.1297px] box-border caret-transparent inline-block grayscale-[1] h-[30px] tracking-[-0.302594px] leading-[21.1816px] max-w-full object-contain w-full z-[3] md:text-[15.2873px] md:h-[35px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
                  />
                </div>
                <div
                  role="listitem"
                  className="relative text-[15.1297px] box-border caret-transparent shrink-0 tracking-[-0.302594px] leading-[21.1816px] z-[3] px-[20px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:px-[25px]"
                >
                  <img
                    src="https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/68527e485856c6ca4c6c1154_Lionsgate.svg"
                    alt=""
                    className="relative text-[15.1297px] aspect-[auto_104_/_43] box-border caret-transparent inline-block grayscale-[1] h-[30px] tracking-[-0.302594px] leading-[21.1816px] max-w-full object-contain w-full z-[3] md:text-[15.2873px] md:h-[35px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
                  />
                </div>
                <div
                  role="listitem"
                  className="relative text-[15.1297px] box-border caret-transparent shrink-0 tracking-[-0.302594px] leading-[21.1816px] z-[3] px-[20px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:px-[25px]"
                >
                  <img
                    src="https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae2018c8b2598c2914fa35_CALM.svg"
                    alt=""
                    className="relative text-[15.1297px] box-border caret-transparent inline-block grayscale-[1] h-[30px] tracking-[-0.302594px] leading-[21.1816px] max-w-full object-contain w-full z-[3] md:text-[15.2873px] md:h-[35px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
                  />
                </div>
                <div
                  role="listitem"
                  className="relative text-[15.1297px] box-border caret-transparent shrink-0 tracking-[-0.302594px] leading-[21.1816px] z-[3] px-[20px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:px-[25px]"
                >
                  <img
                    src="https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae200aec24e0d6827da37e_Channel 4.svg"
                    alt=""
                    className="relative text-[15.1297px] box-border caret-transparent inline-block grayscale-[1] h-[30px] tracking-[-0.302594px] leading-[21.1816px] max-w-full object-contain w-full z-[3] md:text-[15.2873px] md:h-[35px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
                  />
                </div>
                <div
                  role="listitem"
                  className="relative text-[15.1297px] box-border caret-transparent shrink-0 tracking-[-0.302594px] leading-[21.1816px] z-[3] px-[20px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:px-[25px]"
                >
                  <img
                    src="https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae1ffdb46c151813897eac_Whatts App.svg"
                    alt=""
                    className="relative text-[15.1297px] box-border caret-transparent inline-block grayscale-[1] h-[30px] tracking-[-0.302594px] leading-[21.1816px] max-w-full object-contain w-full z-[3] md:text-[15.2873px] md:h-[35px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
                  />
                </div>
              </div>
            </div>
            <div className="text-[15.1297px] box-border caret-transparent flex shrink-0 tracking-[-0.302594px] leading-[21.1816px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px]">
              <div
                role="list"
                className="text-[15.1297px] box-border caret-transparent flex shrink-0 justify-around tracking-[-0.302594px] leading-[21.1816px] min-w-[375px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:min-w-[1280px]"
              >
                <div
                  role="listitem"
                  className="relative text-[15.1297px] box-border caret-transparent shrink-0 tracking-[-0.302594px] leading-[21.1816px] z-[3] px-[20px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:px-[25px]"
                >
                  <img
                    src="https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae206c33299da66dd2d0c0_XL_Recordings_Logo 1.svg"
                    alt=""
                    className="relative text-[15.1297px] box-border caret-transparent inline-block grayscale-[1] h-[30px] tracking-[-0.302594px] leading-[21.1816px] max-w-full object-contain w-full z-[3] md:text-[15.2873px] md:h-[35px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
                  />
                </div>
                <div
                  role="listitem"
                  className="relative text-[15.1297px] box-border caret-transparent shrink-0 tracking-[-0.302594px] leading-[21.1816px] z-[3] px-[20px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:px-[25px]"
                >
                  <img
                    src="https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae205f6285ccbb37258ab3_Glasto.png"
                    alt=""
                    className="relative text-[15.1297px] box-border caret-transparent inline-block grayscale-[1] h-[30px] tracking-[-0.302594px] leading-[21.1816px] max-w-full object-contain w-full z-[3] md:text-[15.2873px] md:h-[35px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
                  />
                </div>
                <div
                  role="listitem"
                  className="relative text-[15.1297px] box-border caret-transparent shrink-0 tracking-[-0.302594px] leading-[21.1816px] z-[3] px-[20px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:px-[25px]"
                >
                  <img
                    src="https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae20485e0e99ea60ad6979_Xbox-Logo.wine 1.svg"
                    alt=""
                    className="relative text-[15.1297px] box-border caret-transparent inline-block grayscale-[1] h-[30px] tracking-[-0.302594px] leading-[21.1816px] max-w-full object-contain w-full z-[3] md:text-[15.2873px] md:h-[35px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
                  />
                </div>
                <div
                  role="listitem"
                  className="relative text-[15.1297px] box-border caret-transparent shrink-0 tracking-[-0.302594px] leading-[21.1816px] z-[3] px-[20px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:px-[25px]"
                >
                  <img
                    src="https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/68527eaac850562caf155695_Meta.svg"
                    alt=""
                    className="relative text-[15.1297px] aspect-[auto_73_/_43] box-border caret-transparent inline-block grayscale-[1] h-[30px] tracking-[-0.302594px] leading-[21.1816px] max-w-full object-contain w-full z-[3] md:text-[15.2873px] md:h-[35px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
                  />
                </div>
                <div
                  role="listitem"
                  className="relative text-[15.1297px] box-border caret-transparent shrink-0 tracking-[-0.302594px] leading-[21.1816px] z-[3] px-[20px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:px-[25px]"
                >
                  <img
                    src="https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae203520041ac6c98ae204_Playstation.svg"
                    alt=""
                    className="relative text-[15.1297px] box-border caret-transparent inline-block grayscale-[1] h-[30px] tracking-[-0.302594px] leading-[21.1816px] max-w-full object-contain w-full z-[3] md:text-[15.2873px] md:h-[35px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
                  />
                </div>
                <div
                  role="listitem"
                  className="relative text-[15.1297px] box-border caret-transparent shrink-0 tracking-[-0.302594px] leading-[21.1816px] z-[3] px-[20px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:px-[25px]"
                >
                  <img
                    src="https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/68527e485856c6ca4c6c1154_Lionsgate.svg"
                    alt=""
                    className="relative text-[15.1297px] aspect-[auto_104_/_43] box-border caret-transparent inline-block grayscale-[1] h-[30px] tracking-[-0.302594px] leading-[21.1816px] max-w-full object-contain w-full z-[3] md:text-[15.2873px] md:h-[35px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
                  />
                </div>
                <div
                  role="listitem"
                  className="relative text-[15.1297px] box-border caret-transparent shrink-0 tracking-[-0.302594px] leading-[21.1816px] z-[3] px-[20px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:px-[25px]"
                >
                  <img
                    src="https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae2018c8b2598c2914fa35_CALM.svg"
                    alt=""
                    className="relative text-[15.1297px] box-border caret-transparent inline-block grayscale-[1] h-[30px] tracking-[-0.302594px] leading-[21.1816px] max-w-full object-contain w-full z-[3] md:text-[15.2873px] md:h-[35px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
                  />
                </div>
                <div
                  role="listitem"
                  className="relative text-[15.1297px] box-border caret-transparent shrink-0 tracking-[-0.302594px] leading-[21.1816px] z-[3] px-[20px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:px-[25px]"
                >
                  <img
                    src="https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae200aec24e0d6827da37e_Channel 4.svg"
                    alt=""
                    className="relative text-[15.1297px] box-border caret-transparent inline-block grayscale-[1] h-[30px] tracking-[-0.302594px] leading-[21.1816px] max-w-full object-contain w-full z-[3] md:text-[15.2873px] md:h-[35px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
                  />
                </div>
                <div
                  role="listitem"
                  className="relative text-[15.1297px] box-border caret-transparent shrink-0 tracking-[-0.302594px] leading-[21.1816px] z-[3] px-[20px] md:text-[15.2873px] md:tracking-[-0.305746px] md:leading-[21.4022px] md:px-[25px]"
                >
                  <img
                    src="https://cdn.prod.website-files.com/6798e66ffa82a441b157a7ca/67ae1ffdb46c151813897eac_Whatts App.svg"
                    alt=""
                    className="relative text-[15.1297px] box-border caret-transparent inline-block grayscale-[1] h-[30px] tracking-[-0.302594px] leading-[21.1816px] max-w-full object-contain w-full z-[3] md:text-[15.2873px] md:h-[35px] md:tracking-[-0.305746px] md:leading-[21.4022px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
