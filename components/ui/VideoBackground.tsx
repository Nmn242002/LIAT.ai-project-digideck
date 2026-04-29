"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type VideoBackgroundProps = {
  videoSrc?: string;
  posterSrc: string;
  alt: string;
  embedSrc?: string;
  hlsEndpoint?: string;
  priority?: boolean;
};

export default function VideoBackground({
  videoSrc,
  posterSrc,
  alt,
  embedSrc,
  hlsEndpoint,
  priority = false
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    if (!hlsEndpoint || !videoRef.current) return;

    let destroy: undefined | (() => void);
    let cancelled = false;

    const setupHls = async () => {
      try {
        const metadata = await fetch(hlsEndpoint).then((response) => response.json());
        const hlsSource = metadata?.hls;
        const video = videoRef.current;

        if (!video || !hlsSource || cancelled) {
          setVideoFailed(true);
          return;
        }

        if (video.canPlayType("application/vnd.apple.mpegurl")) {
          video.src = hlsSource;
          await video.play().catch(() => undefined);
          return;
        }

        const Hls = (await import("hls.js")).default;
        if (!Hls.isSupported()) {
          setVideoFailed(true);
          return;
        }

        const hls = new Hls({
          enableWorker: true,
          lowLatencyMode: false
        });

        hls.loadSource(hlsSource);
        hls.attachMedia(video);
        destroy = () => hls.destroy();
      } catch {
        setVideoFailed(true);
      }
    };

    setupHls();

    return () => {
      cancelled = true;
      destroy?.();
    };
  }, [hlsEndpoint]);

  const isLocalVideo = embedSrc?.endsWith(".mp4");

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-black">
      {/* Poster Image */}
      <Image
        src={posterSrc}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className={`object-cover transition-opacity duration-1000 ${
          videoReady || embedSrc ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* LOCAL VIDEO via embedSrc */}
      {isLocalVideo ? (
        <video
          ref={videoRef}
          className={`h-full w-full object-cover transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? "auto" : "metadata"}
          poster={posterSrc}
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
        >
          <source src={embedSrc} type="video/mp4" />
        </video>
      ) : embedSrc ? (
        /* EMBED (YouTube / Dailymotion etc.) */
        <iframe
          title={alt}
          src={embedSrc}
          className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0 opacity-100"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      ) : (videoSrc || hlsEndpoint) && !videoFailed ? (
        /* FALLBACK VIDEO SYSTEM */
        <video
          ref={videoRef}
          className={`h-full w-full object-cover transition-opacity duration-1000 ${
            videoReady ? "opacity-100" : "opacity-0"
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload={priority ? "auto" : "metadata"}
          poster={posterSrc}
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
        >
          {videoSrc ? <source src={videoSrc} type="video/mp4" /> : null}
        </video>
      ) : null}

      {/* Fallback Gradient */}
      {(!videoSrc && !hlsEndpoint && !embedSrc) || videoFailed ? (
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(5,5,5,0.28),rgba(5,5,5,0.82)),radial-gradient(circle_at_70%_32%,rgba(215,180,106,0.22),transparent_30%)]" />
      ) : null}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/70" />
    </div>
  );
}