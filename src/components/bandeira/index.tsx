import classNames from "classnames";
import React from "react";

type BandeiraProps = {
  url: string;
  width?: number;
  height?: number;
  borderRadius: boolean;
};

const Bandeira: React.FC<BandeiraProps> = ({
  url,
  width = 125,
  height = 80,
  borderRadius,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundAttachment: "local",
        backgroundRepeat: "no-repeat",
        backgroundPosition: " center",
        width: `${width}px`,
        height: `${height}px`,
      }}
      className={classNames("shadow-md", {
        " rounded-full": borderRadius,
      })}
    ></div>
  );
};
export default Bandeira;
