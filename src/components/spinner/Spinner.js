function Spinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: "auto", background: "none", display: "block" }}
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
      className="spinner"
    >
      <g transform="rotate(0 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#be483e">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.3513513513513513s"
            begin="-1.238738738738739s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(30 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#be483e">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.3513513513513513s"
            begin="-1.1261261261261262s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(60 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#be483e">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.3513513513513513s"
            begin="-1.0135135135135136s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(90 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#be483e">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.3513513513513513s"
            begin="-0.900900900900901s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(120 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#be483e">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.3513513513513513s"
            begin="-0.7882882882882883s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(150 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#be483e">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.3513513513513513s"
            begin="-0.6756756756756758s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(180 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#be483e">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.3513513513513513s"
            begin="-0.5630630630630631s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(210 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#be483e">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.3513513513513513s"
            begin="-0.4504504504504505s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(240 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#be483e">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.3513513513513513s"
            begin="-0.3378378378378379s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(270 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#be483e">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.3513513513513513s"
            begin="-0.22522522522522526s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(300 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#be483e">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.3513513513513513s"
            begin="-0.11261261261261263s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      <g transform="rotate(330 50 50)">
        <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#be483e">
          <animate
            attributeName="opacity"
            values="1;0"
            keyTimes="0;1"
            dur="1.3513513513513513s"
            begin="0s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
    </svg>
  );
}

export default Spinner;
