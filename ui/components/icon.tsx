function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 132.7 25.9"
      className="w-full h-full"
    >
      <g clip-rule="evenodd" fill-rule="evenodd">
        <path
          d="m45.5 13c.7-.8 1.1-1.9 1.1-3.2 0-3.3-2.8-5.6-6.4-5.6h-6.8v18.9h8.9c3.6 0 6.4-2.3 6.4-5.6 0-2.2-1.3-3.8-3.2-4.5zm-7.3-4.6h1.8c1.2 0 1.9.7 1.9 1.7s-.7 1.7-1.9 1.7h-1.8zm3.8 10.6h-3.8v-3.3h3.8c1.1 0 1.9.5 1.9 1.7s-.8 1.6-1.9 1.6zm9.1-17.4h4.9v21.5h-4.9zm8.1 7.2h4.9v14.3h-4.9zm2.4-8c-1.7 0-3 1.3-3 2.9s1.3 2.9 3 2.9 3-1.3 3-2.9c.1-1.6-1.3-2.9-3-2.9zm14.3 7.7c-1.7 0-3.1.6-4 1.5v-1.2h-4.5v14.3h4.9v-8.1c0-1.3.9-2.1 2.1-2.1s2.1.8 2.1 2.1v8.1h4.9v-8.8c-.1-3.5-2.2-5.8-5.5-5.8zm23.6.3h-5.7l-4.4 5.8v-13h-5v21.5h5v-7.5l5.1 7.5h5.4l-5.3-7.9zm2 0h4.9v14.3h-4.9zm2.4-8c-1.7 0-3 1.3-3 2.9s1.3 2.9 3 2.9 3-1.3 3-2.9-1.3-2.9-3-2.9zm12.3 13.4-1.4-.6c-.7-.3-1-.4-1-.8s.4-.5 1-.5c1.1 0 2.1.4 3 1.2l2.3-3c-1.4-1.5-3.3-2.1-5.4-2.1-3.3 0-5.6 1.7-5.6 4.5 0 2.4 1.5 3.5 4.2 4.6l1.6.7c.5.2.8.4.8.7 0 .5-.6.6-1.3.6-1.4 0-2.8-.6-4-1.8l-2.3 2.9c1.3 1.8 3.6 2.7 6.2 2.7 3.4 0 5.9-1.7 5.9-4.8.2-2.2-1.4-3.3-4-4.3zm14.7 4.8c-1.8 0-2.5-.5-2.5-1.9v-4.2h3.8v-4.1h-3.8v-3.4h-4.9v3.4h-2.2v4.1h2.2v4.7c0 3.9 2.3 5.8 6.3 5.8 1.1 0 2.1-.1 2.9-.3v-4.1z"
          fill="#002f54"
        ></path>
        <path
          d="m19.4 0-5.9 6-5.9-6c-4.5 2.2-7.6 6.9-7.6 12.3 0 7.5 6 13.7 13.5 13.7 7.4 0 13.5-6.1 13.5-13.7 0-5.4-3.1-10.1-7.6-12.3z"
          fill="#2cde80"
        ></path>
        <path
          d="m17.1 9.6-3.5-3.6-3.6 3.6c-2 2-2 5.3 0 7.3s5.2 2 7.2 0c1.9-2 1.9-5.3-.1-7.3z"
          fill="#002f54"
        ></path>
      </g>
    </svg>
  );
}

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-3 h-3 ml-2"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z"
        fill="currentColor"
      ></path>
      <mask
        id="a"
        maskUnits="userSpaceOnUse"
        x="1"
        y="6"
        width="22"
        height="13"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 14.879l-7.94-7.94a1.5 1.5 0 10-2.12 2.122l9 9a1.5 1.5 0 002.12 0l9-9a1.5 1.5 0 00-2.12-2.122L12 14.88z"
          fill="#fff"
        ></path>
      </mask>
    </svg>
  );
}

type key = "arrow" | "logo";

const Icon = (props: { name: key }) => {
  switch (props.name) {
    case "arrow":
      return <Arrow />;
    case "logo":
      return <Logo />;
    default:
      return <Logo />;
  }
};
export default Icon;
