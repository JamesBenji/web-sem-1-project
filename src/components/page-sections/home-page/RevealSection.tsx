import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HappyBabyAndParent from "../../../assets/images/happy-baby-1.jpg";
import HappyBabyAlone from "../../../assets/images/happy-baby-2.jpg";
import HeartIcon from "../../../assets/icons/heart.png";
import { Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const RevealSection = () => {
  const containerRef = useRef(null);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const img1Ref = useRef(null);
  const img2WrapperRef = useRef(null);
  const img2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%", // Scroll distance
          scrub: 1.2,
          pin: true, // Locks the layout in place
          anticipatePin: 1,
        },
      });

      tl
        // 1. Text Animation: Slide & Fade
        .to(text1Ref.current, { y: -50, opacity: 0, duration: 1 }, 0)
        .fromTo(
          text2Ref.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          1.2,
        )

        // 2. Image Animation: Directional Reveal
        // Slightly scale down the first image
        .to(
          img1Ref.current,
          { scale: 0.9, filter: "blur(5px)", duration: 1 },
          1,
        )

        // Reveal the second image wrapper (the mask) from left to right
        .fromTo(
          img2WrapperRef.current,
          { clipPath: "inset(0 100% 0 0)" }, // Hidden to the right
          { clipPath: "inset(0 0% 0 0)", duration: 1.5, ease: "power2.inOut" },
          1.1,
        )

        // Counter-animate the image inside to create a "parallax reveal"
        .fromTo(
          img2Ref.current,
          { xPercent: 20, scale: 1.1 },
          { xPercent: 0, scale: 1, duration: 1.5, ease: "power2.out" },
          1.1,
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className=" h-screen bg-amber-100 sticky top-0 "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 h-full w-full  mx-auto px-16 items-center gap-12 bg-brand-700 rounded-t-[4rem]">
        {/* Left Column: Text Content */}
        <div className="relative flex flex-col justify-center h-75">
          <div className="relative">
            <h3
              ref={text1Ref}
              className="text-8xl lg:text-8xl leading-[1.1] text-amber-300 font-bold"
            >
              <span className="flex">We help you cook for your world. ❤️ </span>
              <span className="text-5xl text-brand-200 leading-tight">
                Weaning made easy.
              </span>
            </h3>
            <h3
              ref={text2Ref}
              className="absolute top-0 left-0 text-5xl lg:text-8xl leading-[1.1] text-amber-300 font-bold opacity-0"
            >
              With you every step <br /> of the way.
              <br />{" "}
              <span className="text-5xl text-brand-200 leading-tight">
                Every day. Always.
              </span>
            </h3>
          </div>
        </div>

        {/* Right Column: Visual Stage */}
        <div className="relative aspect-4/5 lg:aspect-square w-full max-w-xl mx-auto overflow-hidden rounded-[40px] border-8 border-amber-300/10 shadow-2xl">
          {/* Background Image (Base) */}
          <img
            ref={img1Ref}
            src={HappyBabyAlone}
            alt="Baby Alone"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Foreground Image (The Reveal) */}
          <div
            ref={img2WrapperRef}
            className="absolute inset-0 w-full h-full z-10 overflow-hidden"
            style={{ clipPath: "inset(0 100% 0 0)" }}
          >
            <img
              ref={img2Ref}
              src={HappyBabyAndParent}
              alt="Baby and Parent"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevealSection;
