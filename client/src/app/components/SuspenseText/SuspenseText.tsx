import React from "react";

import { SuspenseTextProps } from "./SuspenseText.types";

export const SuspenseText: React.FC<SuspenseTextProps> = ({ resource }) => {
  if (!resource) {
    return null;
  }

  const text = resource.text.read();

  return <p>{text.txt}</p>;
};
