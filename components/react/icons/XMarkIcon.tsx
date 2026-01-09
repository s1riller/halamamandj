interface XMarkIconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

export default function XMarkIcon({ className = "", size = 24, strokeWidth = 2 }: XMarkIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      className={className}
    >
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
