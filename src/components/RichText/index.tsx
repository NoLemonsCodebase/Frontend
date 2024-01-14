import * as React from "react";
import createDomPurify from "dompurify";
import cn from "classnames";

interface IRichTextProps {
  content: string;
  className?: string;
}

const cleanText = (text: string) => {
  const purify = createDomPurify();
  try {
    return purify.sanitize(text);
  } catch (e) {
    return text;
  }
};

const RichText: React.FunctionComponent<IRichTextProps> = (props) => {
  return (
    <div
      className={cn("no-tailwindcss-base", props.className)}
      dangerouslySetInnerHTML={{
        __html: cleanText(props.content),
      }}
    />
  );
};

export default RichText;
