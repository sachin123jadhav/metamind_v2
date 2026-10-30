import Head from "next/head";
import { SITE, absoluteUrl } from "@/data/seo-data";

const organizationSchema = {
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  legalName: SITE.legalName,
  url: absoluteUrl("/"),
  logo: absoluteUrl(SITE.logo),
  email: SITE.email,
  telephone: SITE.phone,
  sameAs: SITE.sameAs,
  address: SITE.addresses.map((a) => ({ "@type": "PostalAddress", ...a })),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phone,
    email: SITE.email,
    contactType: "customer service",
    areaServed: ["IN", "US"],
  },
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: absoluteUrl("/"),
  name: SITE.name,
  publisher: { "@id": organizationSchema["@id"] },
  inLanguage: "en",
};

const buildSchema = ({ path, title, description, breadcrumb, serviceType, image }) => {
  const url = absoluteUrl(path);
  const graph = [
    organizationSchema,
    websiteSchema,
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: title,
      description,
      isPartOf: { "@id": websiteSchema["@id"] },
      about: { "@id": organizationSchema["@id"] },
      ...(image && { primaryImageOfPage: absoluteUrl(image) }),
      inLanguage: "en",
    },
  ];
  if (breadcrumb) {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: breadcrumb, item: url },
      ],
    });
  }
  (serviceType || []).forEach((name) => {
    graph.push({
      "@type": "Service",
      name,
      serviceType: name,
      url,
      provider: { "@id": organizationSchema["@id"] },
      areaServed: ["IN", "US"],
    });
  });
  return { "@context": "https://schema.org", "@graph": graph };
};

const SEO = (props) => {
  const { path = "/", title, description, noindex } = props;
  const image = props.image || SITE.defaultImage;
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="robots"
        content={noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1"}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#ffffff" />
      {!noindex && <link rel="canonical" href={url} />}
      <link rel="icon" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/icon.png" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.locale} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {!noindex && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema(props)) }}
        />
      )}
    </Head>
  );
};

export default SEO;
