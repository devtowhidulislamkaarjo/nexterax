const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === "production";
const liveReloadClients = new Set();

const liveReloadScript = `
<script>
  (() => {
    const connect = () => {
      const stream = new EventSource("/_live-reload");
      stream.addEventListener("reload", () => window.location.reload());
      stream.onerror = () => {
        stream.close();
        window.setTimeout(connect, 1000);
      };
    };
    connect();
  })();
</script>`;

const routes = {
  "/": "index.html",
  "/home": "index.html",
  "/services": "services.html",
  "/pricing": "index.html",
  "/about": "about.html",
  "/contact": "index.html",
  "/blog": "blog.html",
  "/blog/website-development-business-growth": "blog-website-development-business-growth.html",
  "/blog/ecommerce-website-bangladesh": "blog-ecommerce-website-bangladesh.html",
  "/blog/business-automation-benefits": "blog-business-automation-benefits.html",
  "/blog/ui-ux-design-conversion": "blog-ui-ux-design-conversion.html",
  "/website-development": "website-development.html",
  "/ecommerce-solutions": "ecommerce-solutions.html",
  "/custom-software": "custom-software.html",
  "/ui-ux-design": "ui-ux-design.html",
  "/business-automation": "business-automation.html"
};

const redirects = {
  "/service": "/services",
  "/index.html": "/home",
  "/services.html": "/services",
  "/website-development.html": "/website-development",
  "/ecommerce-solutions.html": "/ecommerce-solutions",
  "/custom-software.html": "/custom-software",
  "/ui-ux-design.html": "/ui-ux-design",
  "/business-automation.html": "/business-automation",
  "/about.html": "/about",
  "/blog.html": "/blog",
  "/blog-website-development-business-growth.html": "/blog/website-development-business-growth",
  "/blog-ecommerce-website-bangladesh.html": "/blog/ecommerce-website-bangladesh",
  "/blog-business-automation-benefits.html": "/blog/business-automation-benefits",
  "/blog-ui-ux-design-conversion.html": "/blog/ui-ux-design-conversion"
};

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon"
};

const securityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()"
};

http.createServer((request, response) => {
  if (!["GET", "HEAD"].includes(request.method)) {
    response.writeHead(405, { ...securityHeaders, Allow: "GET, HEAD" });
    response.end("Method not allowed");
    return;
  }

  const url = new URL(request.url, `http://${request.headers.host}`);

  const normalizedPath = url.pathname.replace(/\/+$/, "") || "/";
  const redirectTo = redirects[normalizedPath];
  if (redirectTo) {
    response.writeHead(308, { ...securityHeaders, Location: redirectTo });
    response.end();
    return;
  }

  if (url.pathname !== "/" && url.pathname.endsWith("/")) {
    response.writeHead(308, { ...securityHeaders, Location: normalizedPath });
    response.end();
    return;
  }

  if (!isProduction && url.pathname === "/_live-reload") {
    response.writeHead(200, {
      ...securityHeaders,
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive"
    });
    response.write("retry: 1000\n\n");
    liveReloadClients.add(response);
    request.on("close", () => liveReloadClients.delete(response));
    return;
  }

  const routeFile = routes[normalizedPath];
  const requestedFile = routeFile || url.pathname.slice(1);
  const filePath = path.resolve(root, requestedFile);

  if (!filePath.startsWith(root + path.sep) && filePath !== root) {
    response.writeHead(403, securityHeaders);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404, securityHeaders);
      response.end("Not found");
      return;
    }

    const extension = path.extname(filePath);
    const isStaticAsset = [".css", ".js", ".png", ".jpg", ".jpeg", ".ico", ".webmanifest"].includes(extension);
    const responseHeaders = {
      ...securityHeaders,
      "Content-Type": types[extension] || "application/octet-stream",
      "Cache-Control": isProduction && isStaticAsset ? "public, max-age=31536000, immutable" : "no-store, no-cache, must-revalidate, proxy-revalidate"
    };

    if (!isProduction) {
      responseHeaders.Pragma = "no-cache";
      responseHeaders.Expires = "0";
    }

    let responseContent = content;
    if (!isProduction && extension === ".html" && request.method === "GET") {
      responseContent = content.toString().replace(/<\/body>/i, `${liveReloadScript}</body>`);
    }

    response.writeHead(200, responseHeaders);
    response.end(request.method === "HEAD" ? undefined : responseContent);
  });
}).listen(port, () => {
  console.log(`NexteraX Digital running at http://localhost:${port}/home`);
});

if (!isProduction) {
  try {
    // Recursive file watching is supported on Windows and macOS, but not on
    // every Linux host (including many cloud runtimes).
    const watcher = fs.watch(root, { recursive: process.platform !== "linux" }, (_eventType, filename) => {
      if (!filename || filename.startsWith(".git")) return;

      for (const client of liveReloadClients) {
        client.write("event: reload\ndata: changed\n\n");
      }
    });

    watcher.on("error", (error) => {
      console.warn("Live reload watcher stopped:", error.message);
    });
  } catch (error) {
    console.warn("Live reload is unavailable:", error.message);
  }
}
