export const PhoneIcon = () => (
  <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17 12.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H1C.4 0 0 .4 0 1c0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1zM16 9h2c0-5-4-9-9-9v2c3.9 0 7 3.1 7 7zm-4 0h2c0-2.8-2.2-5-5-5v2c1.7 0 3 1.3 3 3z"
      fill="#FFF"
      fillRule="evenodd"
    />
  </svg>
);

export const ArrowIcon = () => (
  <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <circle id="b" cx="6" cy="6" r="6" />
      <filter
        x="-25%"
        y="-25%"
        width="150%"
        height="150%"
        filterUnits="objectBoundingBox"
        id="a"
      >
        <feOffset in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          stdDeviation="1"
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
        />
        <feColorMatrix
          values="0 0 0 0 0.239215686 0 0 0 0 0.62745098 0 0 0 0 0.560784314 0 0 0 0.793506567 0"
          in="shadowBlurOuter1"
        />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(2 2)">
        <use fill="#000" filter="url(#a)" />
        <use fill="#3DA08F" />
      </g>
      <path
        d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z"
        fill="#FFF"
      />
    </g>
  </svg>
);

export const EmailIcon = () => (
  <svg width="20" height="16" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M18 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm0 14h-2V5.2L10 9 4 5.2V14H2V2h1.2L10 6.2 16.8 2H18v12z"
      fill="#FFF"
      fillRule="evenodd"
    />
  </svg>
);

export const QuoteIcon = () => (
  <svg width="13" height="12" xmlns="http://www.w3.org/2000/svg">
    <text
      transform="translate(-34 -25)"
      fill="#07043B"
      fillRule="evenodd"
      fontFamily="Helvetica"
      fontSize="45"
    >
      <tspan x="33" y="56">
        “
      </tspan>
    </text>
  </svg>
);
