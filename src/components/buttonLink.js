function ButtonLink({ children, ...props }) {
  return (
    <a {...props} className={`inline-flex h-48 items-center gap-8 py-0 px-16 rounded-full whitespace-nowrap font-semibold ${props.className}`}>
        {children}
    </a>
  );
}

export default ButtonLink;