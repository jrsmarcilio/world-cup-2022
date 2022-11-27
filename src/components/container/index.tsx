import classNames from "classnames";
import React from "react";

type BodyProps = {
  children?: JSX.Element | JSX.Element[];
  className?: string; 
};

const Container: React.FC<BodyProps> = ({ children, className }) => {
  return (
    <div className={classNames("republica-page-body", className)}>
      {children}
    </div>
  );
};

export default Container;
