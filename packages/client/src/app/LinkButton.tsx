"use client";

import { getWindow } from "@faire/web/common/globals/getWindow";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
};

export const LinkButton: React.FC<Props> = ({ href, children }) => {
  const handleClick = () => {
    getWindow()?.parent.postMessage({ path: href }, "*");
  };

  return <button onClick={handleClick}>{children}</button>;
};
