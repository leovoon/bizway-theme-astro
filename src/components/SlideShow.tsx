import React, { useEffect } from "react";
import classNames from "classnames";
import { useSnapCarousel } from "react-snap-carousel";
import styles from "./Slideshow.module.css";
import nextBtn from "../assets/next-blue.png";
import prevBtn from "../assets/prev-blue.png";

/**
 * This is an example Carousel built on top of `useSnapCarousel`
 */

export interface SlideShowProps<T> {
  readonly items: T[];
  readonly renderItem: (
    props: SlideShowRenderItemProps<T>
  ) => React.ReactElement<SlideShowItemProps>;
  readonly scrollPadding?: boolean;
}

export interface SlideShowRenderItemProps<T> {
  readonly item: T;
  readonly index: number;
  readonly isSnapPoint: boolean;
  readonly isActive: boolean;
}

export const SlideShow = <T extends any>({
  items,
  renderItem,
  scrollPadding = false,
}: SlideShowProps<T>) => {
  const {
    scrollRef,
    next,
    prev,
    goTo,
    pages,
    activePageIndex,
    snapPointIndexes,
  } = useSnapCarousel();

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowLeft":
          next();
          return;
        case "ArrowRight":
          prev();
          return;
        default:
          return;
      }
    };
    window.addEventListener("keypress", handle);
    return () => {
      window.removeEventListener("keypress", handle);
    };
  }, [next, prev]);

  return (
    <>
      <div
        className={classNames(
          styles.root,
          {
            [styles.scrollPadding]: scrollPadding,
          },
          "drop-shadow-3xl"
        )}
      >
        <ul className={styles.scroll} ref={scrollRef}>
          {items.map((item, index) =>
            renderItem({
              item,
              index,
              isSnapPoint: snapPointIndexes.has(index),
              isActive: activePageIndex === index,
            })
          )}
        </ul>
        {/* Indicator */}
        {/* <div className={styles.pageIndicator}>
        {activePageIndex + 1} / {pages.length}
      </div> */}
        {/* Controls */}
        <button
          className="absolute -left-[5px] top-1/2 -translate-y-1/2"
          onClick={() => {
            if (activePageIndex === 0) {
              goTo(pages.length - 1);
            } else {
              prev();
            }
          }}
        >
          <img src={prevBtn.src} width={48} height={90} alt="previous slide" />
        </button>
        <button
          className="absolute -right-[5px] top-1/2 -translate-y-1/2"
          onClick={() => {
            if (activePageIndex === pages.length - 1) {
              goTo(0);
            } else {
              next();
            }
          }}
        >
          <img src={nextBtn.src} width={48} height={90} alt="next slide" />
        </button>
      </div>

      <div className={styles.controls}>
        <ol className={styles.pagination}>
          {pages.map((_, i) => (
            <li
              key={i}
              className={classNames(styles.paginationItem, {
                [styles.paginationItemActive]: i === activePageIndex,
              })}
            >
              <button
                className={styles.paginationButton}
                onClick={() => goTo(i)}
              >
                {i + 1}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export interface SlideShowItemProps {
  readonly isSnapPoint: boolean;
  readonly isActive: boolean;
  readonly src: string;
  readonly title: string;
  readonly subtitle: string;
}

export const SlideShowItem = ({
  isSnapPoint,
  isActive,
  src,
  title,
  subtitle,
}: SlideShowItemProps) => {
  return (
    <li
      className={classNames(styles.item, {
        [styles.snapPoint]: isSnapPoint,
        [styles.itemActive]: isActive,
      })}
    >
      <img
        src={src}
        className="aspect-auto w-full h-full object-cover"
        alt={title}
      />
    </li>
  );
};
