import { useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";

interface StyledQRCodeProps {
  value: string;
  size?: number;
}

export default function StyledQRCode({ value, size = 220 }: StyledQRCodeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const qrRef = useRef<QRCodeStyling | null>(null);

  useEffect(() => {
    if (!qrRef.current) {
      qrRef.current = new QRCodeStyling({
        width: size,
        height: size,
        data: value,
        margin: 2,
        image: "/logo-mark.svg",
        qrOptions: { errorCorrectionLevel: "H" },
        imageOptions: { crossOrigin: "anonymous", margin: 6, imageSize: 0.32, hideBackgroundDots: true },
        dotsOptions: { type: "rounded", color: "#3a3a40" },
        cornersSquareOptions: { type: "extra-rounded", color: "#3a3a40" },
        cornersDotOptions: { type: "dot", color: "#3a3a40" },
        backgroundOptions: { color: "transparent" },
      });
      if (ref.current) qrRef.current.append(ref.current);
    } else {
      qrRef.current.update({ data: value, width: size, height: size });
    }
  }, [value, size]);

  return <div ref={ref} />;
}
