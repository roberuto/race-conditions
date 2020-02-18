import React from "react";

import { TextProps } from "./Text.types";

export const Text: React.FC<TextProps> = ({ text }) => {
  if (!text) {
    return null;
  }

  return <p>{text.txt}</p>;
};
