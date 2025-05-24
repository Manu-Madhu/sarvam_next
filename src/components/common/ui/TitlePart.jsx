import classNames from "classnames";
import React from "react";

const TitlePart = ({ children, className, title, subTitle }) => {
  return (
    <div className={classNames("font-sans font-[600] flex flex-col items-center justify-center", className)}>
      <h3 className=" text-[18px] text-primary ">{title}</h3>
      <h6 className="text-[26px] md:text-[30px] text-center leading-8 mt-2">{subTitle}</h6>
      {children}
    </div>
  );
};

export default TitlePart;
