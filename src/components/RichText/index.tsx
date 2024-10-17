"use client";
import { FunctionComponent, useState, useEffect } from "react";
// import * as React from "react";
import createDomPurify from "dompurify";
// import cn from "classnames";
// import { cairo } from "@/lib/font";

interface IRichTextProps {
  content: string;

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

  dir = "ltr",
}) => {
  const [contentRender, setContentRender] = useState("");

  useEffect(() => {
    setContentRender(cleanText(content));
  }, [content]);

  return (
    <div
      className=""
      dir={dir}
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
};

export default RichText;
