import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { ThemeSync } from "@/components/theme-toggle";
import appCss from "../styles.css?url";

const APP_NAME = "Palmetto Markers";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=1",
      },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "A field guide to every official South Carolina historical marker — map, spoken lessons, and plaque scan.",
      },
      { name: "theme-color", content: "#ffffff" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg?v=pm4" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32.png?v=pm4" },
      { rel: "icon", href: "/favicon.ico?v=pm4", sizes: "any" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png?v=pm4" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/__grok/icon-180.png?v=pm4" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "preload", href: "/data/index.json", as: "fetch", crossOrigin: "anonymous" },
      { rel: "preload", href: "/data/sc-map.json", as: "fetch", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600&family=Fraunces:opsz,wght@9..144,500;9..144,600&display=swap",
      },
    ],
  }),
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground">
        <script
          dangerouslySetInnerHTML={{
            __html:
              '(function(){try{var t=JSON.parse(localStorage.getItem("palmetto-markers-v1")||"{}");var th=t&&t.state&&t.state.theme;if(th==="dark"||th==="light")document.documentElement.setAttribute("data-theme",th);}catch(e){}})();',
          }}
        />
        <PreviewHostBridge />
        <ThemeSync />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  );
}
