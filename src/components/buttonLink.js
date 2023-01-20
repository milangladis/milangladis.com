import { useRef } from "react";

export default function ButtonLink({ children, ...props }) {

  const openmodal = () => {
    props.updatemodal(true)
  }

  return (
    <a {...props} onClick={props.updatemodal && openmodal} className={`inline-flex h-48 items-center gap-8 py-0 px-16 rounded-full whitespace-nowrap font-semibold cursor-pointer ${props.className}`}>
        {children}
    </a>
  );
}