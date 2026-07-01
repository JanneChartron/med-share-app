interface LogoProps {
  size?: number;
  light?: boolean;
  withText?: boolean;
}

export default function Logo({ size = 24, light = true, withText = true }: LogoProps) {
  const stroke = light ? "#ffffff" : "#17171a";
  return (
    <span className="logo-mark">
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M18 6h6v10h10v6H24v6a8 8 0 1 1-8-8h2V6z"
          stroke={stroke}
          strokeWidth="2.4"
          strokeLinejoin="round"
        />
        <path
          d="M18 26a8 8 0 0 1 8 6 8 8 0 0 1 8-6 6 6 0 0 1 6 6c0 5-6.5 9-14 13-7.5-4-14-8-14-13a6 6 0 0 1 6-6z"
          stroke={stroke}
          strokeWidth="2.4"
          strokeLinejoin="round"
          opacity="0.75"
        />
      </svg>
      {withText && <span style={{ color: stroke }}>Med Share</span>}
    </span>
  );
}
