"use client";

import { useEffect, useState } from "react";
import type { GalleryItem } from "@/lib/site-data";

type GalleryProps = {
  items: GalleryItem[];
};

export function Gallery({ items }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        setActiveIndex((current) => (current === null ? 0 : (current + 1) % items.length));
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null ? items.length - 1 : (current - 1 + items.length) % items.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, items.length]);

  const activeItem = activeIndex === null ? null : items[activeIndex];

  return (
    <>
      <div className="gallery-grid">
        {items.map((item, index) => (
          <button
            key={item.id}
            className="gallery-card"
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <img alt={`Maharani Orchid variation ${item.id}`} loading="lazy" src={item.thumb} />
          </button>
        ))}
      </div>

      {activeItem ? (
        <div
          aria-label="Image viewer"
          className="lightbox"
          onClick={() => setActiveIndex(null)}
          role="dialog"
        >
          <button
            aria-label="Close image viewer"
            className="lightbox-close"
            onClick={() => setActiveIndex(null)}
            type="button"
          >
            Close
          </button>
          <button
            aria-label="Previous image"
            className="lightbox-nav lightbox-prev"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((current) =>
                current === null ? items.length - 1 : (current - 1 + items.length) % items.length,
              );
            }}
            type="button"
          >
            Prev
          </button>
          <figure
            className="lightbox-frame"
            onClick={(event) => event.stopPropagation()}
          >
            <img alt={`Maharani Orchid full image ${activeItem.id}`} src={activeItem.full} />
            <figcaption>
              Maharani: Orchid Series <span>{activeItem.id} / {items.length}</span>
            </figcaption>
          </figure>
          <button
            aria-label="Next image"
            className="lightbox-nav lightbox-next"
            onClick={(event) => {
              event.stopPropagation();
              setActiveIndex((current) => (current === null ? 0 : (current + 1) % items.length));
            }}
            type="button"
          >
            Next
          </button>
        </div>
      ) : null}
    </>
  );
}
