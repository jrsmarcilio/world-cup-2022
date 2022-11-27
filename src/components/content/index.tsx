type ContentProps = {
  children: JSX.Element | JSX.Element[] | undefined;
  className: string;
};

const Content: React.FC<ContentProps> = ({ children, className }) => {
  return <div className={`container mx-auto ${className}`}>{children}</div>;
};

export default Content;
