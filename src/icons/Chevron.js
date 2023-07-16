import { memo } from "react";

function Chevron() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6"
      height="11"
      viewBox="0 0 6 11"
      fill="none"
    >
      <path d="M0.5 0.5L5.5 5.5" stroke="white" stroke-linecap="round" />
      <path d="M0.5 10.5L5.5 5.5" stroke="white" stroke-linecap="round" />
    </svg>
  );
}
export default memo(Chevron);