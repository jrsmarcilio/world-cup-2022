import classNames from "classnames";
import React, { useState } from "react";

type ExpandProps = {
  children: JSX.Element;
  title: string;
};

const Expand: React.FC<ExpandProps> = ({ children, title }) => {
  const [expand, setExpand] = useState(true);
  return (
    <div className={classNames('bg-white rounded-md p-3', { 'hover:bg-slate-200': !expand })} onClick={() => setExpand((prev) => !prev)}>
      <div className="flex justify-between">
        <div className="font-black">Grupo {title}</div>
        <div>
          {!expand ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 stroke-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 stroke-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
              />
            </svg>
          )}
        </div>
      </div>
      {expand && children}
    </div>
  );
};

export default Expand;
