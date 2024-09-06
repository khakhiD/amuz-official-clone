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

export const horizontalScrollParallax = (
  container: HTMLElement,
  items: HTMLElement[]
) => {
  if (!container || !items) return;

  const containerWidth = container.scrollWidth;

  gsap.to(items, {
    xPercent: -100 * (items.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: container,
      pin: true,
      end: () => `+=${containerWidth}`,
      scrub: true,
      anticipatePin: 1,
    },
  });
};
