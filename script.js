const header = document.querySelector("[data-header]");
const menu = document.querySelector("[data-menu]");
const nav = document.querySelector("[data-nav]");
const revealItems = document.querySelectorAll(".reveal");
const newsletterForm = document.querySelector("[data-newsletter-form]");

if (!document.querySelector('link[rel="icon"]')) {
  const favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.type = "image/png";
  favicon.href = "/nexterax-digital-logo.png";
  document.head.appendChild(favicon);
}
const cleanRoutes = {
  "/home": "index.html#home",
  "/services": "services.html",
  "/pricing": "index.html#pricing",
  "/about": "about.html",
  "/contact": "index.html#contact",
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

const prettyRoutes = {
  "index.html": "/home",
  "services.html": "/services",
  "website-development.html": "/website-development",
  "ecommerce-solutions.html": "/ecommerce-solutions",
  "custom-software.html": "/custom-software",
  "ui-ux-design.html": "/ui-ux-design",
  "business-automation.html": "/business-automation",
  "about.html": "/about",
  "blog.html": "/blog",
  "blog-website-development-business-growth.html": "/blog/website-development-business-growth",
  "blog-ecommerce-website-bangladesh.html": "/blog/ecommerce-website-bangladesh",
  "blog-business-automation-benefits.html": "/blog/business-automation-benefits",
  "blog-ui-ux-design-conversion.html": "/blog/ui-ux-design-conversion"
};

if (nav && !nav.querySelector('a[href="/blog"]')) {
  const blogLink = document.createElement("a");
  blogLink.href = "/blog";
  blogLink.textContent = "Blog";
  const contactLink = nav.querySelector('a[href="/contact"]');
  nav.insertBefore(blogLink, contactLink || null);
}

document.querySelectorAll(".nav-phone").forEach((callLink) => {
  callLink.classList.add("nav-cta", "nav-call");
  callLink.textContent = "Call Now";

  const bookLink = document.createElement("a");
  bookLink.className = "nav-cta nav-book";
  bookLink.href = "/contact";
  bookLink.textContent = "Book Now";
  callLink.insertAdjacentElement("afterend", bookLink);
});

document.querySelectorAll("a[href]").forEach((link) => {
  const rawHref = link.getAttribute("href");

  if (window.location.protocol === "file:" && cleanRoutes[rawHref]) {
    link.setAttribute("href", cleanRoutes[rawHref]);
    return;
  }

  if (window.location.protocol !== "file:" && rawHref) {
    const cleanPath = Object.entries(prettyRoutes).find(([file]) => rawHref.includes(file));
    if (cleanPath) link.setAttribute("href", cleanPath[1]);
  }
});

if (window.location.protocol !== "file:") {
  const currentFile = window.location.pathname.split("/").pop();
  const cleanPath = prettyRoutes[currentFile];
  if (cleanPath && window.location.pathname !== cleanPath) {
    window.history.replaceState({}, "", cleanPath + window.location.hash);
  }

  const sectionRoute = window.location.pathname.replace(/\/$/, "");
  const targetSection = cleanRoutes[sectionRoute]?.split("#")[1];
  if (targetSection) {
    requestAnimationFrame(() => {
      document.getElementById(targetSection)?.scrollIntoView({ behavior: "smooth" });
    });
  }
}

const currentPath = window.location.pathname.replace(/\/$/, "") || "/home";
document.querySelectorAll(".nav a").forEach((link) => {
  const linkPath = new URL(link.getAttribute("href"), window.location.href).pathname.replace(/\/$/, "");
  const isCurrent = linkPath === currentPath || (currentPath === "/" && linkPath === "/home");
  if (isCurrent) link.setAttribute("aria-current", "page");
});

if (header) {
  const updateHeader = () => header.classList.toggle("scrolled", window.scrollY > 12);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

if (menu && nav) {
  const setMenuState = (isOpen) => {
    nav.classList.toggle("open", isOpen);
    menu.setAttribute("aria-expanded", String(isOpen));
  };

  menu.addEventListener("click", () => {
    setMenuState(!nav.classList.contains("open"));
  });

  nav.addEventListener("click", (event) => {
    if (event.target.tagName === "A") setMenuState(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenuState(false);
  });
}

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    newsletterForm.reset();
  });
}

const chatWidget = document.createElement("div");
chatWidget.className = "chat-widget";
chatWidget.innerHTML = `
  <button class="chat-toggle" type="button" aria-expanded="false" aria-label="Open live chat options">
    <span>Chat</span>
  </button>
  <div class="chat-panel" aria-hidden="true">
    <div class="chat-panel-head">
      <strong>Talk to NexteraX Digital</strong>
      <span>Usually replies fast on WhatsApp</span>
    </div>
    <div class="chat-panel-actions">
      <a href="https://wa.me/8801878601610?text=Hi%20NexteraX%20Digital%2C%20I%20want%20to%20discuss%20a%20project." target="_blank" rel="noopener">Chat on WhatsApp</a>
      <a href="mailto:towhidulislam2.bd@gmail.com?subject=Project%20Inquiry%20from%20Website">Send email inquiry</a>
      <a href="/contact">Use project form</a>
    </div>
  </div>
`;

document.body.appendChild(chatWidget);

const chatToggle = chatWidget.querySelector(".chat-toggle");
const chatPanel = chatWidget.querySelector(".chat-panel");

chatToggle.addEventListener("click", () => {
  const isOpen = chatWidget.classList.toggle("open");
  chatToggle.setAttribute("aria-expanded", String(isOpen));
  chatPanel.setAttribute("aria-hidden", String(!isOpen));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && chatWidget.classList.contains("open")) {
    chatWidget.classList.remove("open");
    chatToggle.setAttribute("aria-expanded", "false");
    chatPanel.setAttribute("aria-hidden", "true");
  }
});
