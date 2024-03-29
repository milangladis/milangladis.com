export const Heading2 = ({ children }) => {
  return (
    <div className="text-center text-24 md:text-32 font-bold">
      {children}
    </div>
  );
}

export const SubHeading2 = ({ children }) => {
  return (
    <div className="text-center text-16 max-w-1/2 mt-8 leading-16 opacity-70 mb-64">
      {children}
    </div>
  );
}


export const Br = () => {
  return (
    <br className='hidden md:block' /> 
  )
}

export const Divider = () => {
  return (
    <div className="w-full h-2 bg-black my-64 md:my-64 m-auto  opacity-5"></div>
  )
}