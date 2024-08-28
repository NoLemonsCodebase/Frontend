"use client";
import { FunctionComponent, useState, useEffect } from "react";
// import * as React from "react";
import createDomPurify from "dompurify";
import cn from "classnames";

interface IRichTextProps {
  content: string;
  className?: string;
  dir?: string;
}

const cleanText = (text: string) => {
  const purify = createDomPurify();
  try {
    return purify.sanitize(text);
  } catch (e) {
    return text;
  }
};

const RichText: FunctionComponent<IRichTextProps> = ({
  content,
  className,
  dir = "ltr",
}) => {
  const [contentRender, setContentRender] = useState("");

  useEffect(() => {
    setContentRender(cleanText(content));
  }, [content]);
  return (
    <div
      dir={dir}
      className={cn("no-tailwindcss-base", className)}
      dangerouslySetInnerHTML={{
        __html: contentRender,
      }}
    />
  );
};

export default RichText;
