export async function GET() {
  const baseUrl = "https://www.revenuealignsolutions.com";
  const staticRoutes = [
    "",
    "about",
    "contact",
    "denial-management",
    "digital-marketing",
    "eligibility-verification",
    "medical-billing",
    "medical-coding",
    "medical-credentialing",
    "prior-authorization",
    "reveneu-cycle-management",
    "virtual-assistance",
  ];

  const routes = [...staticRoutes];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes
      .map(
        (route) => `
      <url>
        <loc>${baseUrl}/${route}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
      )
      .join("")}
  </urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
