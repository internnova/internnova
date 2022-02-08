import { DefaultSeo } from "next-seo"

export const Meta = ({
  title = "InternNova - Find internships, for highschoolers",
  description = "InternNova makes finding an internship easy and accessible for high-school students all over the world! Through our site, you'll be able to connect with prestigious global companies which will help you build your resume and gain invaluable inexperience to kickstart your career!",
  url = "https://internnova.co",
}) => (
  <>
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
  </>
)
