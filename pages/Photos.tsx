// src/pages/Photos.tsx
import React, { useEffect, useMemo, useState } from "react";

type Album = {
  id: string;
  title: string; // e.g., "Lab Dinner"
  date: string; // e.g., "2025-12-05"
  cover: string; // thumbnail / 대표사진
  photos: string[]; // album photos
  description?: string;
};

const albums: Album[] = [
  {
    id: "lab-dinner-2025-12-05",
    title: "Lab Dinner",
    date: "Dec 4th 2025",
    cover: "/images/lab_photos/lab_dinner_20251204/IMG_8344.jpg",
    photos: [
      "/images/lab_photos/lab_dinner_20251204/IMG_8348.jpg",
      "/images/lab_photos/lab_dinner_20251204/IMG_8354.jpg",
      "/images/lab_photos/lab_dinner_20251204/IMG_6233.jpg",
      "/images/lab_photos/lab_dinner_20251204/IMG_8359.jpg",
    ],
  },
];

// 날짜 정렬(최신이 위로)
function compareDateDesc(a: Album, b: Album) {
  // "YYYY-MM-DD" 포맷 가정
  return b.date.localeCompare(a.date);
}

const Photos: React.FC = () => {
  const sortedAlbums = useMemo(() => [...albums].sort(compareDateDesc), []);

  const [openAlbumId, setOpenAlbumId] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openAlbum = (albumId: string) => {
    setOpenAlbumId(albumId);
    setActiveIndex(0);
  };

  const close = () => {
    setOpenAlbumId(null);
    setActiveIndex(0);
  };

  const currentAlbum = useMemo(
    () => sortedAlbums.find((a) => a.id === openAlbumId) ?? null,
    [openAlbumId, sortedAlbums]
  );

  const photos = currentAlbum?.photos ?? [];
  const currentSrc = photos[activeIndex];

  const canPrev = activeIndex > 0;
  const canNext = activeIndex < photos.length - 1;

  const prev = () => {
    if (!canPrev) return;
    setActiveIndex((i) => i - 1);
  };

  const next = () => {
    if (!canNext) return;
    setActiveIndex((i) => i + 1);
  };

  // Esc로 닫기 + 화살표로 넘기기
  useEffect(() => {
    if (!openAlbumId) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openAlbumId, canPrev, canNext]);

  return (
    <section className="py-16 animate-fade-in">
      <h2 className="text-2xl font-semibold mb-8 tracking-wide uppercase text-[#2c3e50]">
        Photos
      </h2>

      {/* Gallery grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedAlbums.map((album) => (
          <button
            key={album.id}
            type="button"
            onClick={() => openAlbum(album.id)}
            className="text-left group"
          >
            <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden shadow-sm">
              <img
                src={album.cover}
                alt={`${album.title} cover`}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                loading="lazy"
              />
            </div>

            <div className="mt-3">
              <div className="text-base text-[#333] font-medium">{album.title}</div>
              <div className="text-sm text-[#888]">{album.date}</div>
              {album.description && (
                <div className="text-sm text-[#666] mt-1">{album.description}</div>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox / Modal */}
      {currentAlbum && (
        <div
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
          onMouseDown={(e) => {
            // 배경 클릭으로 닫기 (이미지/버튼 클릭은 제외)
            if (e.target === e.currentTarget) close();
          }}
          role="dialog"
          aria-modal="true"
          aria-label={`${currentAlbum.title} photos`}
        >
          <div className="w-full max-w-[1100px]">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-3 text-white">
              <div className="min-w-0">
                <div className="text-sm uppercase tracking-widest text-white/80">
                  {currentAlbum.date}
                </div>
                <div className="text-lg font-semibold truncate">{currentAlbum.title}</div>
              </div>

              <button
                type="button"
                onClick={close}
                className="ml-4 px-3 py-2 rounded bg-white/10 hover:bg-white/20 transition"
                aria-label="Close"
              >
                Close
              </button>
            </div>

            {/* Main image */}
            <div className="bg-black/30 rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                {currentSrc ? (
                  <img
                    src={currentSrc}
                    alt={`${currentAlbum.title} photo ${activeIndex + 1}`}
                    className="w-full max-h-[70vh] object-contain bg-black"
                  />
                ) : (
                  <div className="w-full h-[50vh] flex items-center justify-center text-white/80">
                    No photos
                  </div>
                )}

                {/* Prev/Next controls */}
                {photos.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prev}
                      disabled={!canPrev}
                      className={`absolute left-3 top-1/2 -translate-y-1/2 px-3 py-2 rounded
                        ${canPrev ? "bg-white/15 hover:bg-white/25" : "bg-white/10 opacity-50 cursor-not-allowed"}
                        text-white transition`}
                      aria-label="Previous"
                    >
                      ←
                    </button>

                    <button
                      type="button"
                      onClick={next}
                      disabled={!canNext}
                      className={`absolute right-3 top-1/2 -translate-y-1/2 px-3 py-2 rounded
                        ${canNext ? "bg-white/15 hover:bg-white/25" : "bg-white/10 opacity-50 cursor-not-allowed"}
                        text-white transition`}
                      aria-label="Next"
                    >
                      →
                    </button>
                  </>
                )}
              </div>

              {/* Caption / counter */}
              <div className="px-4 py-3 flex items-center justify-between text-white/90">
                <div className="text-sm">
                  {photos.length > 0 ? (
                    <>
                      {activeIndex + 1} / {photos.length}
                    </>
                  ) : (
                    "—"
                  )}
                </div>
                <div className="text-sm text-white/70">
                  Tip: use ←/→ keys, Esc to close
                </div>
              </div>
            </div>

            {/* Thumbnails */}
            {photos.length > 1 && (
              <div className="mt-4 grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2">
                {photos.map((src, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={`${currentAlbum.id}-${idx}`}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      className={`rounded overflow-hidden border transition ${
                        isActive ? "border-white" : "border-transparent hover:border-white/60"
                      }`}
                      aria-label={`Open photo ${idx + 1}`}
                    >
                      <img
                        src={src}
                        alt={`${currentAlbum.title} thumbnail ${idx + 1}`}
                        className="w-full h-14 object-cover"
                        loading="lazy"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Photos;
