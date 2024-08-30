// "use client";
// import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
// import { builder } from "@builder.io/sdk";
// import { ComponentProps } from "react";

// // Replace with your Public API Key
// builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY as string);

// export type BuilderPageProps = ComponentProps<typeof BuilderComponent> & {
//   fallbackContent?: React.ReactNode;
// };

// export function RenderBuilderContent({
//   content,
//   model,
//   fallbackContent,
// }: BuilderPageProps) {
//   // Call the useIsPreviewing hook to determine if
//   // the page is being previewed in Builder
//   const isPreviewing = useIsPreviewing();
//   // If "content" has a value or the page is being previewed in Builder,
//   // render the BuilderComponent with the specified content and model props.
//   if (content || isPreviewing) {
//     return <BuilderComponent content={content} model={model} />;
//   }

//   return fallbackContent;
// }
