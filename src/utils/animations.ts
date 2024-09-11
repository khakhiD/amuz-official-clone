import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();
const screen = {
  isLarge: '(min-width: 768px)',
  isSmall: '(max-width: 767px)',
};

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

  mm.add(screen, (context) => {
    let { isLarge } = context.conditions;

    if (isLarge) {
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
    }

    return () => {
      ScrollTrigger.killAll();
    };
  });
};

export const spreadBox = (container: HTMLElement, boxes: HTMLElement[]) => {
  if (!container || !boxes) return;

  mm.add(screen, (context) => {
    const { isLarge, isSmall } = context.conditions;

    if (isLarge) {
      const containerWidth = container.clientWidth;
      const distance = containerWidth / 6;

      gsap.set(boxes, {
        x: 0,
        y: 0,
      });

      gsap.to(boxes, {
        x: (i: number) => {
          switch (i) {
            case 0:
              return -distance * 1.5;
            case 1:
              return -distance * 0.5;
            case 2:
              return distance * 0.5;
            case 3:
              return distance * 1.5;
          }
        },
        duration: 3,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: container,
          start: 'center center',
          end: '+=2000',
          scrub: true,
          pin: true,
        },
      });
    }

    if (isSmall) {
      const containerHeight = container.clientHeight;
      const totalBoxes = boxes.length;

      gsap.to(boxes, {
        y: (i: number) => {
          return i === totalBoxes - 1 ? 0 : -containerHeight;
        },
        duration: 1,
        ease: 'power2.out',
        stagger: {
          amount: 1,
          from: 'start',
        },
        scrollTrigger: {
          trigger: container,
          start: 'center center',
          end: '+=1000',
          scrub: true,
          pin: true,
          markers: true,
        },
      });
    }

    return () => {
      ScrollTrigger.killAll();
    };
  });
};
