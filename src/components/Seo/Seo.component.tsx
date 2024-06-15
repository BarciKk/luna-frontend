import { Helmet } from 'react-helmet-async';

interface CustomSeo {
  title: string;
  description: string;
  type?: 'website' | 'article' | 'video';
  image?: string;
  url?: string;
}

export const Seo = ({ description, title, image, type, url }: CustomSeo) => (
  <Helmet>
    <meta property="og:title" content={title} />
    <meta property="og:type" content={type ?? 'website'} />
    <meta property="og:url" content={`${window.location.origin}/${url}`} />
    <meta property="og:image" content={image} />
    <meta property="og:description" content={description} />
    <title>{title}</title>

    <meta charSet="utf-8" />
    <meta property="og:site_name" content="LunaSync" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="index, follow" />
    <meta name="description" content={description} />
    <link rel="canonical" href={`${window.location.origin}/${url}`} />
  </Helmet>
);
//update image please
