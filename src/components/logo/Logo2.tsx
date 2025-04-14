interface PralambLogoProps {
  width?: number | string;
  height?: number | string;
  className?: string;
}

export default function PralambLogo2({
  width = "100%",
  height = "auto",
  className = "",
}: PralambLogoProps) {
  return (
    <div className={`inline-block ${className}`} style={{ width, height }}>
      <svg viewBox="0 0 250 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text
          x="10"
          y="60"
          fill="#FFFFFF"
          fontSize="40"
          fontWeight="300"
          letterSpacing="1"
        >
          Pralamb
        </text>
        <path
          d="M185 25C195 25 200 35 200 45C200 52.5 195 55 190 55C180 55 170 45 170 37.5C170 30 175 27.5 180 27.5C182.5 27.5 185 30 185 32.5"
          fill="#B1D8B7"
        />
        <path
          d="M185 32.5C185 37.5 185 47.5 185 52.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M180 37.5L190 37.5"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M177.5 42.5L192.5 42.5"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M180 47.5L190 47.5"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <line
          x1="10"
          y1="70"
          x2="240"
          y2="70"
          stroke="#B1D8B7"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}
