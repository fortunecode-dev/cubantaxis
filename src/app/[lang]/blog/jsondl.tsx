export function JsonLdBlog() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "CubanTaxis Blog",
    url: "https://cubantaxis.com/blog",
    description: "Taxi prices, transfers and local tips for traveling in Cuba."
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}
