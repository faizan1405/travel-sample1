import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TripZip Holidays — Affordable Luxury Tour Packages | India & International" },
      { name: "description", content: "Domestic and international tour packages across PAN India. Honeymoon, group, adventure & weekend getaways with TripZip Holidays." },
      { name: "author", content: "TripZip Holidays" },
      { name: "keywords", content: "TripZip Holidays, Best Tour Packages India, International Travel Packages, Affordable Holiday Packages, Honeymoon Packages India, Travel Agency India" },
      { property: "og:title", content: "TripZip Holidays — Affordable Luxury Tour Packages | India & International" },
      { property: "og:description", content: "Domestic and international tour packages across PAN India. Honeymoon, group, adventure & weekend getaways with TripZip Holidays." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "TripZip Holidays" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@tripzipholidays" },
      { name: "twitter:title", content: "TripZip Holidays — Affordable Luxury Tour Packages | India & International" },
      { name: "twitter:description", content: "Domestic and international tour packages across PAN India. Honeymoon, group, adventure & weekend getaways with TripZip Holidays." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7434050c-7ba8-4606-beb6-bb38b9759e3f/id-preview-769b0c63--c2e92dfc-1fdd-4ca2-8367-9cd24a0b99c8.lovable.app-1777398778722.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/7434050c-7ba8-4606-beb6-bb38b9759e3f/id-preview-769b0c63--c2e92dfc-1fdd-4ca2-8367-9cd24a0b99c8.lovable.app-1777398778722.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
