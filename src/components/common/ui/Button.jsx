import classNames from "classnames";
import Link from "next/link";
import React from "react";

const Button = ({ children, className, text, link }) => {
  return (
    <div>
      <Link
        href={link}
        className={classNames(
          "rounded bg-primary p-1 pxy-2 text-[15px] font-sans px-4 text-white font-[600]",
          className
        )}
      >
        {text} {children}
      </Link>
    </div>
  );
};

export default Button;
{
}
