import { ImageResponse } from "next/og";
import { OgImageContent, ogImageAlt, ogImageSize } from "./og-image-content";

export const alt = ogImageAlt;
export const size = ogImageSize;
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<OgImageContent />, { ...size });
}
