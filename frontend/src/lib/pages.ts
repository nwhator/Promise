import fs from "node:fs";
import path from "node:path";

export type PageEntry = {
  slug: string;
  title: string;
  folder: string;
};

export const PAGE_ENTRIES: PageEntry[] = [
  {
    slug: "home",
    title: "Home - Nwhator Promise Portfolio",
    folder: "home_-_nwhator_promise_portfolio",
  },
  {
    slug: "about",
    title: "About - Engineering Philosophy",
    folder: "about_-_engineering_philosophy",
  },
  {
    slug: "projects",
    title: "Projects - Portfolio Grid",
    folder: "projects_-_portfolio_grid",
  },
  {
    slug: "project-detail",
    title: "Project Detail - System Architecture",
    folder: "project_detail_-_system_architecture",
  },
  {
    slug: "services",
    title: "Services & Packages - Professional Hiring",
    folder: "services_&_packages_-_professional_hiring",
  },
  {
    slug: "technologies",
    title: "Technologies - Full Stack Expertise",
    folder: "technologies_-_full_stack_expertise",
  },
  {
    slug: "resume",
    title: "Resume - Experience & Skills",
    folder: "resume_-_experience_&_skills",
  },
  {
    slug: "contact",
    title: "Contact - Let's Build Together",
    folder: "contact_-_let's_build_together",
  },
  {
    slug: "secure-client-login",
    title: "Secure Client Login",
    folder: "secure_client_login",
  },
  {
    slug: "client-dashboard",
    title: "Client Dashboard - Project Tracker",
    folder: "client_dashboard_-_project_tracker",
  },
  {
    slug: "admin-dashboard",
    title: "Admin Dashboard - System Management",
    folder: "admin_dashboard_-_system_management",
  },
  {
    slug: "admin-generate-project-invoice",
    title: "Admin - Generate Project Invoice",
    folder: "admin_-_generate_project_invoice",
  },
  {
    slug: "invoicing-payment-history",
    title: "Invoicing & Payment History",
    folder: "invoicing_&_payment_history",
  },
  {
    slug: "messages-collaboration-hub",
    title: "Messages & Collaboration Hub",
    folder: "messages_&_collaboration_hub",
  },
  {
    slug: "onboarding-success",
    title: "Onboarding Success - Welcome Aboard",
    folder: "onboarding_success_-_welcome_aboard",
  },
  {
    slug: "welcome-kit-preview",
    title: "Welcome Kit Preview - Client Success",
    folder: "welcome_kit_preview_-_client_success",
  },
  {
    slug: "api-documentation",
    title: "API Documentation - Client View",
    folder: "api_documentation_-_client_view",
  },
  {
    slug: "article-scalable-api-guide",
    title: "Article - Scalable API Guide",
    folder: "article_-_scalable_api_guide",
  },
  {
    slug: "case-study-architectural-deep-dive",
    title: "Case Study - Architectural Deep-Dive",
    folder: "case_study_-_architectural_deep-dive",
  },
  {
    slug: "blog-engineering-insights-list-1",
    title: "Blog - Engineering Insights List 1",
    folder: "blog_-_engineering_insights_list_1",
  },
  {
    slug: "blog-engineering-insights-list-2",
    title: "Blog - Engineering Insights List 2",
    folder: "blog_-_engineering_insights_list_2",
  },
  {
    slug: "fastapi-cheat-sheet",
    title: "FastAPI Cheat Sheet - Lead Magnet",
    folder: "fastapi_cheat_sheet_-_lead_magnet",
  },
  {
    slug: "system-path-not-found",
    title: "404 - System Path Not Found",
    folder: "404_-_system_path_not_found",
  },
  {
    slug: "internal-system-error",
    title: "500 - Internal System Error",
    folder: "500_-_internal_system_error",
  },
];

export function getPageBySlug(slug: string): PageEntry | undefined {
  return PAGE_ENTRIES.find((page) => page.slug === slug);
}

export function loadPageHtml(page: PageEntry): string {
  const localRoot = path.join(process.cwd(), "stitch_promise_portfolio");
  const monorepoRoot = path.join(process.cwd(), "..", "stitch_promise_portfolio");
  const sourceRoot = fs.existsSync(monorepoRoot) ? monorepoRoot : localRoot;
  const filePath = path.join(sourceRoot, page.folder, "code.html");

  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing stitched HTML file: ${filePath}`);
  }

  const html = fs.readFileSync(filePath, "utf8");
  return normalizeLinks(html);
}

function normalizeLinks(html: string): string {
  const replacedProfiles = html
    .replaceAll('href="https://github.com"', 'href="https://github.com/nwhator"')
    .replaceAll('href="https://github.com/"', 'href="https://github.com/nwhator"')
    .replaceAll('href="https://linkedin.com"', 'href="https://linkedin.com/in/nwhator"')
    .replaceAll('href="https://linkedin.com/"', 'href="https://linkedin.com/in/nwhator"');

  const routeScript = `
<script>
  (function () {
    const routeMap = {
      home: '/',
      about: '/about',
      project: '/projects',
      projects: '/projects',
      services: '/services',
      technologies: '/technologies',
      resume: '/resume',
      contact: '/contact',
      blog: '/blog'
    };

    document.querySelectorAll('a').forEach(function(anchor) {
      const rawHref = (anchor.getAttribute('href') || '').trim();
      const label = (anchor.textContent || '').trim().toLowerCase();

      if (rawHref === 'https://github.com' || rawHref === 'https://github.com/') {
        anchor.setAttribute('href', 'https://github.com/nwhator');
        anchor.setAttribute('target', '_blank');
        anchor.setAttribute('rel', 'noreferrer');
        return;
      }

      if (rawHref === 'https://linkedin.com' || rawHref === 'https://linkedin.com/') {
        anchor.setAttribute('href', 'https://linkedin.com/in/nwhator');
        anchor.setAttribute('target', '_blank');
        anchor.setAttribute('rel', 'noreferrer');
        return;
      }

      if (rawHref !== '#') {
        return;
      }

      for (const key in routeMap) {
        if (label.includes(key)) {
          anchor.setAttribute('href', routeMap[key]);
          break;
        }
      }
    });
  })();
</script>
`;

  if (replacedProfiles.includes("</body>")) {
    return replacedProfiles.replace("</body>", `${routeScript}</body>`);
  }

  return `${replacedProfiles}${routeScript}`;
}