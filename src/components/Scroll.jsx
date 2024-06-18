import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Scroll.css';

gsap.registerPlugin(ScrollTrigger);

export default function Scroll() {
  const iphoneRef = useRef(null);
  const widgetsRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !widgetsRefs.current.includes(el)) {
      widgetsRefs.current.push(el);
    }
  };

  useEffect(() => {
    const iphone = iphoneRef.current;
    const widgets = widgetsRefs.current;

    gsap.set(iphone, { x: -450, rotation: 90 });
    gsap.set(widgets, { opacity: 0, scale: 0 });

    function iPhoneAnimation() {
      const tl = gsap.timeline({ defaults: { duration: 1 } });
      tl.to(iphone, { x: 0 })
        .to(iphone, { rotation: 0, scale: 0.9 })
        .to(iphone, { duration: 3, scale: 1 });
      return tl;
    }

    function widgetAnimation() {
      const tl = gsap.timeline();
      tl.to(widgets, { duration: 0, opacity: 1 });
      return tl;
    }

    const animations = [
      { ref: widgetsRefs.current[0], duration: 3, scale: 0.9, x: 500, y: 100, ease: "power4.out" },
      { ref: widgetsRefs.current[1], duration: 3, scale: 0.9, x: -450, y: -200, ease: "power2.out" },
      { ref: widgetsRefs.current[2], duration: 3, scale: 1.1, x: -400, y: 250, ease: "power4.out" },
      { ref: widgetsRefs.current[3], duration: 3, scale: 0.9, x: 530, y: -170, ease: "power4.out" },
      { ref: widgetsRefs.current[4], duration: 3, scale: 1.1, x: -350, y: -100, ease: "power2.out" },
      { ref: widgetsRefs.current[5], duration: 3, scale: 1.1, x: 400, y: -360, ease: "power4.out" },
      { ref: widgetsRefs.current[6], duration: 3, scale: 0.9, x: -630, y: 0, ease: "power2.out" },
      { ref: widgetsRefs.current[7], duration: 3, scale: 1, x: -280, y: 100, ease: "power4.out" },
      { ref: widgetsRefs.current[8], duration: 3, scale: 1, x: 500, y: 300, ease: "power4.out" },
      { ref: widgetsRefs.current[9], duration: 3, scale: 0.9, x: 270, y: -50, ease: "power2.out" },
      { ref: widgetsRefs.current[10], duration: 3, scale: 1, x: 330, y: 120, ease: "power2.out" }
    ];

    const startTime = 2;
    const masterTimeline = gsap.timeline();
    masterTimeline.add(iPhoneAnimation()).add(widgetAnimation(), startTime);

    animations.forEach((animation, index) => {
      const { ref, duration, scale, x, y, ease } = animation;
      masterTimeline.add(
        gsap.to(ref, { duration, scale, x, y, ease }),
        startTime + (index % 3) / 2
      );
    });

    ScrollTrigger.create({
      animation: masterTimeline,
      trigger: ".scroll-container",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      pin: true
      // markers: true
    });
  }, []);

  return (
    <div className="scroll-container" style={{ width: '1500px', height: '960px', overflowY: 'scroll' }}>
      <section className='animation'>
        <img ref={iphoneRef} className="iphone" src="https://assets.codepen.io/8292695/iphone-14.svg" alt="iPhone" />
        <img ref={addToRefs} id='app-store' className='widgets' src="https://assets.codepen.io/8292695/appstore-widget.svg" alt="App Store" />
        <img ref={addToRefs} id='screen-time' className='widgets' src="https://assets.codepen.io/8292695/screen-time-widget.svg" alt="Screen Time" />
        <img ref={addToRefs} id='weather' className='widgets' src="https://assets.codepen.io/8292695/weather-widget.svg" alt="Weather" />
        <img ref={addToRefs} id='stocks' className='widgets' src="https://assets.codepen.io/8292695/stocks-widget.svg" alt="Stocks" />
        <img ref={addToRefs} id='calendar' className='widgets' src="https://assets.codepen.io/8292695/calendar-widget.svg" alt="Calendar" />
        <img ref={addToRefs} id='fitness' className='widgets' src="https://assets.codepen.io/8292695/fitness-widget.svg" alt="Fitness" />
        <img ref={addToRefs} id='find-my' className='widgets' src="https://assets.codepen.io/8292695/find-my-widget.svg" alt="Find My" />
        <img ref={addToRefs} id='sleep' className='widgets' src="https://assets.codepen.io/8292695/sleep-widget.svg" alt="Sleep" />
        <img ref={addToRefs} id='apple-tv' className='widgets' src="https://assets.codepen.io/8292695/apple-tv.svg" alt="Apple TV" />
        <img ref={addToRefs} id='wallet' className='widgets' src="https://assets.codepen.io/8292695/wallet.svg" alt="Wallet" />
      </section>
    </div>
  );
}