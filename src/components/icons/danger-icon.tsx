import React from "react";
import { iIconTypes } from "../../utills/types/icon-types";

export const DangerIcon: React.FC<iIconTypes> = ({
  color,
  height,
  width,
  fill,
}) => {
  return (
    <>
      <svg
        width={width ?? "24"}
        height={height ?? "24"}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 3.5C7.313 3.5 3.5 7.313 3.5 12C3.5 16.687 7.313 20.5 12 20.5C16.687 20.5 20.5 16.687 20.5 12C20.5 7.313 16.687 3.5 12 3.5ZM12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22Z"
          fill={fill ?? "#34A853"}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.9941 13.373C11.5801 13.373 11.2441 13.037 11.2441 12.623V8.20401C11.2441 7.79001 11.5801 7.45401 11.9941 7.45401C12.4081 7.45401 12.7441 7.79001 12.7441 8.20401V12.623C12.7441 13.037 12.4081 13.373 11.9941 13.373Z"
          fill={fill ?? "#34A853"}
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.004 16.7959C11.451 16.7959 10.999 16.3489 10.999 15.7959C10.999 15.2429 11.442 14.7959 11.994 14.7959H12.004C12.557 14.7959 13.004 15.2429 13.004 15.7959C13.004 16.3489 12.557 16.7959 12.004 16.7959Z"
          fill={fill ?? "#34A853"}
        />
      </svg>
    </>
  );
};
