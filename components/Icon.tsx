interface IconProps {
  children?: JSX.Element | JSX.Element[];
  className?: string;
}

export default function Icon({ children, className }: IconProps) {
  return (
    <i className={`inline-flex relative top-[0.0625rem] sm:top-0.5 bg-clip-text ${className}`}>
      {children}
    </i>
  );
}
