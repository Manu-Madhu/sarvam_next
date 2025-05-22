import classNames from "classnames";
import React from "react";

const ContainerWrapper = ({ children, className }) => {
  return (
    <div
      className={classNames(
        "max-w-[1320px] mx-auto w-full overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ContainerWrapper;
