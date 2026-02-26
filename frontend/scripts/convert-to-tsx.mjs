import fs from 'fs';
import path from 'path';

const sourceDir = path.join(process.cwd(), 'stitch_promise_portfolio');
const appDir = path.join(process.cwd(), 'src', 'app');

const mapFolderToSlug = {
    "home_-_nwhator_promise_portfolio": "home",
    "about_-_engineering_philosophy": "about",
    "projects_-_portfolio_grid": "projects",
    "project_detail_-_system_architecture": "project-detail",
    "services_&_packages_-_professional_hiring": "services",
    "technologies_-_full_stack_expertise": "technologies",
    "resume_-_experience_&_skills": "resume",
    "contact_-_let's_build_together": "contact",
    "secure_client_login": "secure-client-login",
    "client_dashboard_-_project_tracker": "client-dashboard",
    "admin_dashboard_-_system_management": "admin-dashboard",
    "admin_-_generate_project_invoice": "admin-generate-project-invoice",
    "invoicing_&_payment_history": "invoicing-payment-history",
    "messages_&_collaboration_hub": "messages-collaboration-hub",
    "onboarding_success_-_welcome_aboard": "onboarding-success",
    "welcome_kit_preview_-_client_success": "welcome-kit-preview",
    "api_documentation_-_client_view": "api-documentation",
    "article_-_scalable_api_guide": "article-scalable-api-guide",
    "case_study_-_architectural_deep-dive": "case-study-architectural-deep-dive",
    "blog_-_engineering_insights_list_1": "blog-engineering-insights-list-1",
    "blog_-_engineering_insights_list_2": "blog-engineering-insights-list-2",
    "fastapi_cheat_sheet_-_lead_magnet": "fastapi-cheat-sheet",
    "404_-_system_path_not_found": "system-path-not-found",
    "500_-_internal_system_error": "internal-system-error",
};

function extractHeadAndBody(html) {
    const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
    let headContent = "";
    let title = "";
    let description = "";

    if (headMatch) {
        const rawHead = headMatch[1];
        const titleMatch = rawHead.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
        if (titleMatch) title = titleMatch[1].trim();

        const descMatch = rawHead.match(/<meta[^>]*name="description"[^>]*content="([\s\S]*?)"[^>]*>/i) ||
            rawHead.match(/<meta[^>]*content="([\s\S]*?)"[^>]*name="description"[^>]*>/i);
        if (descMatch) description = descMatch[1].trim();

        headContent = rawHead
            .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "")
            .replace(/<meta[^>]*>/gi, "");
    }

    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let bodyContent = html;
    if (bodyMatch) {
        bodyContent = bodyMatch[1];
    } else {
        // If no body tags, try to strip html tags at least
        const htmlMatch = html.match(/<html[^>]*>([\s\S]*?)<\/html>/i);
        if (htmlMatch) {
            bodyContent = htmlMatch[1];
        }
    }

    return {
        html: headContent + "\n" + bodyContent,
        title,
        description
    };
}

function convertHtmlToTsx(htmlContent, componentName, slug) {
    const extracted = extractHeadAndBody(htmlContent);
    let cleanHtml = extracted.html
        // More aggressive cleanup of light-mode leftovers
        .replace(/bg-white/g, 'bg-surface')
        .replace(/bg-\[#ffffff\]/gi, 'bg-surface')
        .replace(/bg-\[#f8fafc\]/gi, 'bg-background')
        .replace(/bg-background-light/g, 'bg-background')
        .replace(/bg-slate-50/g, 'bg-surface')
        .replace(/bg-slate-100/g, 'bg-surface-brighter')
        .replace(/text-slate-900/g, 'text-foreground')
        .replace(/text-gray-900/g, 'text-foreground')
        .replace(/text-slate-600/g, 'text-slate-400')

        // Standardize branding colors to match globals.css
        .replace(/"primary":\s*"#[^"]*"/gi, '"primary": "var(--primary)"')
        .replace(/"primary-dark":\s*"#[^"]*"/gi, '"primary-dark": "var(--primary)"')
        .replace(/"background-dark":\s*"#[^"]*"/gi, '"background-dark": "var(--background)"')
        .replace(/"card-dark":\s*"#[^"]*"/gi, '"card-dark": "var(--surface)"')
        .replace(/"border-dark":\s*"#[^"]*"/gi, '"border-dark": "var(--border)"')

        // Premium styling and animations
        .replace(/<section/g, '<section className="animate-fade-in"')
        .replace(/bg-background-dark\/90/g, 'glass-nav sticky top-0 z-50')
        .replace(/bg-background-dark\/95/g, 'glass-nav sticky top-0 z-50')
        .replace(/bg-card-dark/g, 'card-premium')

        // Replace links logic (simple normalisation)
        .replace(/href="https:\/\/github\.com\/?([^"]*)"/gi, 'href="https://github.com/nwhator"')
        .replace(/href="https:\/\/linkedin\.com\/?([^"]*)"/gi, 'href="https://linkedin.com/in/nwhator"');

    // Escape backticks formatting for string literal
    cleanHtml = cleanHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$');

    const pageTitle = extracted.title || `${componentName.replace(/([A-Z])/g, ' $1').trim()} - PROMISE NWHATOR`;
    const pageDescription = extracted.description || `${componentName.replace(/([A-Z])/g, ' $1').trim()} page for PROMISE NWHATOR.`;

    const finalTsx = `
import parse from 'html-react-parser';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${pageTitle.replace(/'/g, "\\'")}',
  description: '${pageDescription.replace(/'/g, "\\'")}',
  alternates: {
    canonical: '${slug === 'home' ? '/' : '/' + slug}',
  },
};

export default function ${componentName}() {
  const htmlContent = \`
    ${cleanHtml}
  \`;
  return (
    <div className="stitch-page-root overflow-hidden">
      {/* Dynamic Background Glow */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.1)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="relative animate-fade-in">
        {parse(htmlContent)}
      </div>
    </div>
  );
}
`;
    return finalTsx;
}

async function main() {
    const folders = fs.readdirSync(sourceDir);
    for (const folder of folders) {
        const stat = fs.statSync(path.join(sourceDir, folder));
        if (!stat.isDirectory()) continue;

        const slug = mapFolderToSlug[folder];
        if (!slug) {
            console.log(`No slug mapped for folder: ${folder}`);
            continue;
        }

        // Skip dedicated routes where the logic has already been migrated or is fully dynamic
        if (['blog', 'admin-dashboard'].includes(slug)) {
            console.log(`Skipping dedicated route: ${slug}`);
            continue;
        }

        const htmlPath = path.join(sourceDir, folder, 'code.html');
        if (!fs.existsSync(htmlPath)) {
            console.log(`code.html not found in ${folder}`);
            continue;
        }

        console.log(`Processing ${slug}...`);
        const html = fs.readFileSync(htmlPath, 'utf8');

        // Make prettier component names
        const componentName = slug.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');

        let tsx = convertHtmlToTsx(html, componentName, slug);

        if (tsx) {
            let targetDir = appDir;
            if (slug === 'home') {
                targetDir = appDir; // We'll write to app/page.tsx
            } else {
                targetDir = path.join(appDir, slug);
                if (!fs.existsSync(targetDir)) {
                    fs.mkdirSync(targetDir, { recursive: true });
                }
            }

            const targetFile = slug === 'home' ? path.join(targetDir, 'page.tsx') : path.join(targetDir, 'page.tsx');
            fs.writeFileSync(targetFile, tsx, 'utf8');
            console.log(`Wrote ${targetFile}`);
        }
    }
}

main().catch(console.error);
