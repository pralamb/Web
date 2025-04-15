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
          d="M135 5C145 5 150 15 150 25C150 32.5 145 35 140 35C130 35 120 25 120 17.5C120 10 125 7.5 130 7.5C132.5 7.5 135 10 135 12.5"
          fill="#8CA67D"
        />
        <path
          d="M135 12.5C135 17.5 135 27.5 135 32.5"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M130 17.5L140 17.5"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M127.5 22.5L142.5 22.5"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <path
          d="M130 27.5L140 27.5"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
        />
        <line
          x1="10"
          y1="70"
          x2="240"
          y2="70"
          stroke="#8CA67D"
          strokeWidth="3"
        />
      </svg>
    </div>
  );
}
