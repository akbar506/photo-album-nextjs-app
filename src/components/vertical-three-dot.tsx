export default function VerticalThreeDot({ className }: { className: string }) {
  return (
    <span className={className}>
      <svg
        width="15px"
        height="15px"
        viewBox="0 0 16 16"
        xmlns="http://www.w3.org/2000/svg"
        fill="#ffffff"
        className="bi bi-three-dots-vertical"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>{" "}
        </g>
      </svg>
    </span>
  );
}
