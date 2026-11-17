import { SITE_URL } from './site';

export default function sitemap() {
  const lastModified = new Date();
  return [
    { url: SITE_URL, lastModified, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}Resume/`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
  ];
}
