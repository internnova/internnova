import { DefaultSeo } from "next-seo"

export const Meta = (title: string, description: string, url = "https://internnova.co") => (
  <DefaultSeo
    title={title}
    description={description}
    openGraph={{
      url,
      title,
      description,
      images: [
        {
          url: `${url}/seo-img.png`,
          height: 1212,
          width: 2114,
          alt: "InternNova",
        },
      ],
      site_name: "InternNova",
    }}
    twitter={{
      handle: "@internnovahq",
      site: url,
      cardType: "summary_large_image",
    }}
  />
)
