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

const originalTextNodes = new WeakMap();
const originalAttributes = new WeakMap();
const banglaTranslations = {
  "Home": "হোম",
  "Services": "সেবা",
  "Pricing": "মূল্য",
  "About": "সম্পর্কে",
  "Blog": "ব্লগ",
  "Contact": "যোগাযোগ",
  "Call Now": "কল করুন",
  "Book Now": "বুক করুন",
  "Chat": "চ্যাট",
  "Talk to NexteraX Digital": "NexteraX Digital-এর সাথে কথা বলুন",
  "Usually replies fast on WhatsApp": "সাধারণত WhatsApp-এ দ্রুত উত্তর দেওয়া হয়",
  "Chat on WhatsApp": "WhatsApp-এ চ্যাট করুন",
  "Send email inquiry": "ইমেইল পাঠান",
  "Use project form": "প্রজেক্ট ফর্ম ব্যবহার করুন",
  "SERVICES": "সেবা",
  "Choose the right digital solution for your next step": "আপনার পরবর্তী ধাপের জন্য সঠিক ডিজিটাল সমাধান বেছে নিন",
  "Each service is designed around a simple business goal: get more leads, sell online, manage work better, improve user experience, or reduce manual tasks.": "প্রতিটি সেবা একটি সহজ ব্যবসায়িক লক্ষ্যের জন্য তৈরি: বেশি লিড পাওয়া, অনলাইনে বিক্রি, কাজ ভালোভাবে পরিচালনা, ব্যবহারকারীর অভিজ্ঞতা উন্নত করা বা ম্যানুয়াল কাজ কমানো।",
  "Launch faster": "দ্রুত শুরু করুন",
  "Sell online": "অনলাইনে বিক্রি করুন",
  "Automate work": "কাজ অটোমেট করুন",
  "Look premium": "প্রিমিয়াম দেখান",
  "Website Development": "ওয়েবসাইট ডেভেলপমেন্ট",
  "E-commerce Solutions": "ই-কমার্স সল্যুশন",
  "Custom Software Development": "কাস্টম সফটওয়্যার ডেভেলপমেন্ট",
  "UI/UX Design": "UI/UX ডিজাইন",
  "Business Automation": "বিজনেস অটোমেশন",
  "ABOUT": "সম্পর্কে",
  "Empowering businesses with next-generation digital solutions": "নেক্সট-জেনারেশন ডিজিটাল সল্যুশন দিয়ে ব্যবসাকে এগিয়ে নেওয়া",
  "Our vision is to help brands in Bangladesh and beyond compete with world-class digital experiences, reliable systems, and confident online growth.": "বাংলাদেশসহ বিশ্বজুড়ে ব্র্যান্ডগুলোকে বিশ্বমানের ডিজিটাল অভিজ্ঞতা, নির্ভরযোগ্য সিস্টেম এবং আত্মবিশ্বাসী অনলাইন গ্রোথে সাহায্য করাই আমাদের লক্ষ্য।",
  "FOUNDER & CEO": "প্রতিষ্ঠাতা ও সিইও",
  "Founder & CEO": "প্রতিষ্ঠাতা ও সিইও",
  "Towhidul Islam": "তৌহিদুল ইসলাম",
  "NexteraX Digital": "নেক্সটেরাক্স ডিজিটাল",
  "FOUNDER": "প্রতিষ্ঠাতা",
  "DESIGN": "ডিজাইন",
  "ENGINEERING": "ইঞ্জিনিয়ারিং",
  "Digital Strategist": "ডিজিটাল স্ট্র্যাটেজিস্ট",
  "UI/UX Team": "UI/UX টিম",
  "Development Team": "ডেভেলপমেন্ট টিম",
  "Leads discovery, scope, and growth direction.": "ডিসকভারি, কাজের পরিধি এবং গ্রোথ দিকনির্দেশনা পরিচালনা করে।",
  "Crafts elegant flows and polished brand experiences.": "সুন্দর ইউজার ফ্লো এবং প্রিমিয়াম ব্র্যান্ড অভিজ্ঞতা তৈরি করে।",
  "Builds stable, optimized, production-ready systems.": "স্থিতিশীল, অপ্টিমাইজড এবং প্রোডাকশন-রেডি সিস্টেম তৈরি করে।",
  "PORTFOLIO": "পোর্টফোলিও",
  "Selected work": "নির্বাচিত কাজ",
  "Lightweight project cards with clear context, faster loading, and direct links to the live websites.": "পরিষ্কার তথ্য, দ্রুত লোডিং এবং লাইভ ওয়েবসাইটে যাওয়ার সরাসরি লিংকসহ প্রজেক্ট কার্ড।",
  "Business Website": "বিজনেস ওয়েবসাইট",
  "Digital Platform": "ডিজিটাল প্ল্যাটফর্ম",
  "Live website": "লাইভ ওয়েবসাইট",
  "View live": "লাইভ দেখুন",
  "CONTENT PRICING": "কনটেন্ট মূল্য",
  "Content support that matches your launch plan": "আপনার লঞ্চ প্ল্যানের সাথে মানানসই কনটেন্ট সাপোর্ট",
  "Basic website content writing is included. Clients can provide final content, or NexteraX Digital can create premium, SEO optimized content for stronger conversion and search visibility.": "বেসিক ওয়েবসাইট কনটেন্ট রাইটিং অন্তর্ভুক্ত। ক্লায়েন্ট চাইলে ফাইনাল কনটেন্ট দিতে পারেন, অথবা ভালো কনভার্সন ও সার্চ ভিজিবিলিটির জন্য NexteraX Digital প্রিমিয়াম SEO-অপ্টিমাইজড কনটেন্ট তৈরি করতে পারে।",
  "Basic content": "বেসিক কনটেন্ট",
  "Free": "ফ্রি",
  "SEO content writing": "SEO কনটেন্ট রাইটিং",
  "Full website copywriting": "ফুল ওয়েবসাইট কপিরাইটিং",
  "CONTACT": "যোগাযোগ",
  "Tell us about your project": "আপনার প্রজেক্ট সম্পর্কে বলুন",
  "Send message": "মেসেজ পাঠান",
  "Name": "নাম",
  "Email": "ইমেইল",
  "Message": "মেসেজ"
  ,
  "Company": "কোম্পানি",
  "Start a project": "প্রজেক্ট শুরু করুন",
  "NexteraX Digital builds premium websites, e-commerce stores, software systems, UI/UX designs, and automation workflows for growing businesses.": "NexteraX Digital গ্রোয়িং বিজনেসের জন্য প্রিমিয়াম ওয়েবসাইট, ই-কমার্স স্টোর, সফটওয়্যার সিস্টেম, UI/UX ডিজাইন এবং অটোমেশন ওয়ার্কফ্লো তৈরি করে।",
  "Have an idea or need a digital system? Tell us your goal and we will suggest the right scope.": "আইডিয়া আছে বা ডিজিটাল সিস্টেম দরকার? আপনার লক্ষ্য বলুন, আমরা সঠিক স্কোপ সাজেস্ট করব।",
  "Book on WhatsApp": "WhatsApp-এ বুক করুন",
  "Get digital growth tips": "ডিজিটাল গ্রোথ টিপস নিন",
  "Your email": "আপনার ইমেইল",
  "Join": "জয়েন করুন",
  "© 2026 NexteraX Digital. All rights reserved.": "© ২০২৬ NexteraX Digital. সর্বস্বত্ব সংরক্ষিত।",
  "WhatsApp": "WhatsApp",
  "Call": "কল"
};

const translatableAttributes = ["aria-label", "placeholder", "title", "alt"];
const ignoredTranslationTags = new Set(["SCRIPT", "STYLE", "NOSCRIPT", "SVG", "CANVAS"]);

const clearGoogleTranslateState = () => {
  document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
  document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${location.hostname}`;
};

const normalizeTranslationKey = (text) => text.trim().replace(/\s+/g, " ");

const translateValue = (value, language) => {
  const normalized = normalizeTranslationKey(value);
  if (!normalized || language === "en") return value;
  const translated = banglaTranslations[normalized];
  if (!translated) return value;
  const leading = value.match(/^\s*/)?.[0] || "";
  const trailing = value.match(/\s*$/)?.[0] || "";
  return `${leading}${translated}${trailing}`;
};

const translateTextNode = (node, language) => {
  if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.textContent);
  const original = originalTextNodes.get(node);
  node.textContent = language === "bn" ? translateValue(original, language) : original;
};

const translateElementAttributes = (element, language) => {
  translatableAttributes.forEach((attribute) => {
    if (!element.hasAttribute(attribute)) return;
    if (!originalAttributes.has(element)) originalAttributes.set(element, {});
    const originals = originalAttributes.get(element);
    if (!originals[attribute]) originals[attribute] = element.getAttribute(attribute);
    const original = originals[attribute];
    element.setAttribute(attribute, language === "bn" ? translateValue(original, language) : original);
  });
};

const applyLocalTranslation = (language) => {
  document.documentElement.lang = language === "bn" ? "bn" : "en";
  document.documentElement.classList.toggle("bangla-mode", language === "bn");

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || ignoredTranslationTags.has(parent.tagName) || parent.closest(".no-translate")) {
        return NodeFilter.FILTER_REJECT;
      }
      return normalizeTranslationKey(node.textContent) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });

  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach((node) => translateTextNode(node, language));

  document.querySelectorAll("body *").forEach((element) => {
    if (!ignoredTranslationTags.has(element.tagName) && !element.closest(".no-translate")) {
      translateElementAttributes(element, language);
    }
  });

  const toggle = document.querySelector(".translate-toggle");
  if (toggle) {
    toggle.textContent = language === "bn" ? "English" : "বাংলা";
    toggle.setAttribute("aria-label", language === "bn" ? "Switch website to English" : "ওয়েবসাইট বাংলায় দেখুন");
  }
};

const getTranslationLanguage = () => localStorage.getItem("nexterax-language") === "bn" ? "bn" : "en";

const translatePage = (language) => {
  localStorage.setItem("nexterax-language", language);
  applyLocalTranslation(language);
};

const addTranslationControl = () => {
  const actions = document.querySelector(".header-actions");
  if (!actions || actions.querySelector(".translate-toggle")) return;

  const language = getTranslationLanguage();
  const button = document.createElement("button");
  button.className = "translate-toggle no-translate";
  button.type = "button";
  button.textContent = language === "bn" ? "English" : "বাংলা";
  button.setAttribute("aria-label", language === "bn" ? "Switch website to English" : "Translate website to Bangla");
  button.addEventListener("click", () => translatePage(language === "bn" ? "en" : "bn"));
  actions.prepend(button);
};

clearGoogleTranslateState();
addTranslationControl();

const renderIndustryFooter = () => {
  const footer = document.querySelector(".footer");
  if (!footer) return;

  footer.className = "footer industry-footer";
  footer.innerHTML = `
    <div class="container footer-shell">
      <div class="footer-brand-block">
        <a class="brand footer-brand" href="/home" aria-label="NexteraX Digital home">
          <img class="brand-logo" src="/nexterax-digital-logo-cropped.png" onerror="this.src='/nexterax-digital-logo.png'" alt="NexteraX Digital logo">
        </a>
        <p>NexteraX Digital builds premium websites, e-commerce stores, software systems, UI/UX designs, and automation workflows for growing businesses.</p>
        <div class="footer-socials" aria-label="Contact links">
          <a href="https://wa.me/8801878601610" target="_blank" rel="noopener">WhatsApp</a>
          <a href="mailto:towhidulislam2.bd@gmail.com">Email</a>
          <a href="tel:+8801878601610">Call</a>
        </div>
      </div>

      <div class="footer-column">
        <h2>Company</h2>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>

      <div class="footer-column">
        <h2>Services</h2>
        <a href="/website-development">Website Development</a>
        <a href="/ecommerce-solutions">E-commerce Solutions</a>
        <a href="/custom-software">Custom Software</a>
        <a href="/ui-ux-design">UI/UX Design</a>
        <a href="/business-automation">Business Automation</a>
      </div>

      <div class="footer-column footer-contact">
        <h2>Start a project</h2>
        <p>Have an idea or need a digital system? Tell us your goal and we will suggest the right scope.</p>
        <a class="footer-cta" href="https://wa.me/8801878601610?text=Hi%20NexteraX%20Digital%2C%20I%20want%20to%20discuss%20a%20project." target="_blank" rel="noopener">Book on WhatsApp</a>
        <form class="footer-newsletter" data-newsletter-form>
          <label for="footer-email">Get digital growth tips</label>
          <div>
            <input id="footer-email" type="email" placeholder="Your email" aria-label="Email for updates" autocomplete="email" required>
            <button type="submit">Join</button>
          </div>
        </form>
      </div>
    </div>

    <div class="container footer-bottom">
      <p>© 2026 NexteraX Digital. All rights reserved.</p>
      <div>
        <a href="/pricing">Pricing</a>
        <a href="/services">Services</a>
      </div>
    </div>
  `;
};

renderIndustryFooter();

document.querySelectorAll(".service-card").forEach((card) => {
  const cardLink = card.querySelector(".text-link[href]");
  if (!cardLink) return;

  card.classList.add("tap-card");
  card.setAttribute("role", "link");
  card.setAttribute("tabindex", "0");
  card.setAttribute("aria-label", cardLink.textContent.trim());

  const openCardLink = () => {
    if (cardLink.target === "_blank") {
      window.open(cardLink.href, "_blank", "noopener");
      return;
    }
    window.location.href = cardLink.href;
  };

  card.addEventListener("click", (event) => {
    if (event.target.closest("a, button, input, textarea, select, summary")) return;
    openCardLink();
  });

  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openCardLink();
  });
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

document.querySelectorAll("[data-newsletter-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.reset();
  });
});

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

applyLocalTranslation(getTranslationLanguage());
