interface IconProps {
  children?: JSX.Element | JSX.Element[];
  className?: string;
}

export default function Icon({ children, className }: IconProps) {
  return (
    <i className={`inline-flex text-lg relative top-1 ${className}`}>
      {children}
    </i>
  );
}
