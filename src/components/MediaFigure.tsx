"use client";

import Image from "next/image";
import { useRef } from "react";
import type { MouseEvent } from "react";
import type { MediaAsset } from "@/data/portfolio";

export function MediaFigure({ media, priority = false }: { media: MediaAsset; priority?: boolean }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function closeOnBackdrop(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) event.currentTarget.close();
  }

  return (
    <>
      <figure
        className={`media-figure ${media.portrait ? "media-portrait" : ""} ${media.contain ? "media-contain" : ""}`}
      >
        <button
          type="button"
          className="media-trigger"
          onClick={() => dialogRef.current?.showModal()}
          aria-label={`放大查看：${media.caption}`}
        >
          <Image
            src={media.src}
            alt={media.alt}
            width={media.width}
            height={media.height}
            sizes={media.portrait ? "(max-width: 700px) 88vw, 560px" : "(max-width: 900px) 92vw, 1200px"}
            priority={priority}
          />
          <span className="zoom-mark" aria-hidden="true">＋</span>
        </button>
        <figcaption>{media.caption}</figcaption>
      </figure>

      <dialog
        ref={dialogRef}
        className="media-dialog"
        onClick={closeOnBackdrop}
        onCancel={() => dialogRef.current?.close()}
      >
        <div className="dialog-toolbar">
          <p>{media.caption}</p>
          <button type="button" onClick={() => dialogRef.current?.close()} aria-label="关闭大图">
            关闭 ×
          </button>
        </div>
        <div className="dialog-canvas">
          <Image
            src={media.src}
            alt={media.alt}
            width={media.width}
            height={media.height}
            sizes="96vw"
          />
        </div>
      </dialog>
    </>
  );
}
