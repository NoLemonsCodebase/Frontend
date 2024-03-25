import CarsPage from "@/components/pages/CarsPage";
import { builder } from "@builder.io/sdk";
import { useLocale } from "next-intl";
import { RenderBuilderContent } from "@/components/RenderBuilderContent";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY as string);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Home(props: PageProps) {
  const locale = useLocale();

  const builderModelName = "page";
  const urlPath = "/" + (props.params?.page?.join("/") || "");
  console.log("urlPath", urlPath);
  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath,
        locale,
      },
      options: {
        locale,
      },
      prerender: false,
    })
    .toPromise();

  return <RenderBuilderContent content={content} />;
}
