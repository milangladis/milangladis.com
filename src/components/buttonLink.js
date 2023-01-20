import { useRef } from "react";

export default function ButtonLink({ children, ...props }) {

  const openModal = () => {
    props.updateModal(true)
  }

  return (
    <a {...props} onClick={props.updateModal ? openModal : undefined} className={`inline-flex h-48 items-center gap-8 py-0 px-16 rounded-full whitespace-nowrap font-semibold cursor-pointer ${props.className}`}>
        {children}
    </a>
  );
}