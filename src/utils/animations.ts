import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();
const screen = {
  isLarge: '(min-width: 768px)',
  isSmall: '(max-width: 767px)',
};

export const fillTextColor = (element: HTMLElement | null) => {
  if (!element) return;

  gsap.set(element, {
    backgroundClip: 'text',
    webkitBackgroundClip: 'text',
    webkitTextFillColor: 'rgba(255, 255, 255, 0.1)',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255))',
    backgroundSize: '0% 100%',
  });

  mm.add(screen, (context) => {
    const { isLarge, isSmall } = context.conditions;

    if (isLarge) {
      gsap.to(element, {
        backgroundSize: '100% 100%',
        duration: 3,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          end: 'bottom 50%',
          scrub: true,
        },
      });
    }

    if (isSmall) {
      gsap.to(element, {
        backgroundSize: '100% 100%',
        duration: 3,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: element,
          start: 'top 100%',
          end: 'bottom 35%',
          scrub: true,
        },
      });
    }

    return () => {
      ScrollTrigger.killAll();
    };
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

      gsap.set(boxes, {
        x: '-50%',
        y: '-50%',
      });

      gsap.to(boxes.slice(0, totalBoxes - 1), {
        y: -containerHeight,
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
        },
      });
    }

    return () => {
      ScrollTrigger.killAll();
    };
  });
};
