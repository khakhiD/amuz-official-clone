import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const scrollFillText = (element: HTMLElement | null) => {
  if (!element) return;
  gsap.set(element, { clipPath: 'inset(0 100% 0 0)' });

  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: true,
    },
    clipPath: 'inset(0 0 0 0)',
    ease: 'none',
  });
};

// https://blog.jobins.jp/horizontal-scroll-animations-using-gsaps
export const horizontalScrollParallax = (
  container: HTMLElement,
  items: HTMLElement[]
) => {
  if (!container || !items) return;

  const containerWidth = container.scrollWidth;
  const itemsWidth = items.reduce((acc, item) => acc + item.clientWidth, 0);

  gsap.to(items, {
    xPercent: -100 * (itemsWidth / containerWidth),
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      start: 'top top',
      end: () => `+=${containerWidth}`,
      scrub: true,
      pin: true,
      anticipatePin: 1,
    },
  });
};
