import { useThemeContext } from "../../context/Theme";

export default function BackgroundLight() {
  const { theme } = useThemeContext();

  return (
    <svg
      width="921"
      height="515"
      viewBox="0 0 921 515"
      className="w-auto block absolute h-56 sm:h-auto top-0 z-[-1] pointer-events-none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_30_18)">
        <path
          d="M172.58 -156.349L230.346 -141.544L117.869 297.348L151.728 113.599L172.58 -156.349Z"
          fill="#62AEEF"
        />
        <path
          d="M522.777 -126.8L580.543 -111.996L501.544 91.9838L423.533 397.174L522.777 -126.8Z"
          fill="#62AEEF"
        />
        <path
          d="M331.677 -155.679L389.443 -140.875L294.145 220.145L287.258 44.4349L331.677 -155.679Z"
          fill="#68AF73"
        />
        <path
          d="M745.532 -127.926L803.298 -113.122L702.08 117.484L624.081 345.983L745.532 -127.926Z"
          fill="#68AF73"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_30_18"
          x="0.868652"
          y="-273.349"
          width="919.429"
          height="787.522"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="58.5"
            result="effect1_foregroundBlur_30_18"
          />
        </filter>
      </defs>
    </svg>
  );
}
