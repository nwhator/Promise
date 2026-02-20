from pathlib import Path
import re

root = Path("c:/Users/nwhat/Promise/stitch_promise_portfolio")

exempt_folders = {
    "secure_client_login",
    "client_dashboard_-_project_tracker",
    "admin_dashboard_-_system_management",
    "admin_-_generate_project_invoice",
    "invoicing_&_payment_history",
    "messages_&_collaboration_hub",
    "onboarding_success_-_welcome_aboard",
    "welcome_kit_preview_-_client_success",
}

shared_header = '''<!-- PROMISE_SHARED_HEADER_START -->
<header class="sticky top-0 z-50 border-b border-border-dark bg-background-dark/90 backdrop-blur-md">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="/" target="_top" class="flex items-center gap-3 text-white">
        <img src="/promise-nwhator-logo.svg" alt="PROMISE NWHATOR logo" style="height:28px;width:auto;"/>
      </a>
      <nav class="hidden md:flex items-center gap-6 text-sm">
        <a class="text-text-muted hover:text-primary transition-colors" href="/" target="_top">Home</a>
        <a class="text-text-muted hover:text-primary transition-colors" href="/about" target="_top">About</a>
        <a class="text-text-muted hover:text-primary transition-colors" href="/projects" target="_top">Projects</a>
        <a class="text-text-muted hover:text-primary transition-colors" href="/services" target="_top">Services</a>
        <a class="text-text-muted hover:text-primary transition-colors" href="/technologies" target="_top">Technologies</a>
        <a class="text-text-muted hover:text-primary transition-colors" href="/resume" target="_top">Resume</a>
        <a class="text-text-muted hover:text-primary transition-colors" href="/contact" target="_top">Contact</a>
        <a class="text-text-muted hover:text-primary transition-colors" href="/blog" target="_top">Blog</a>
      </nav>
    </div>
  </div>
</header>
<!-- PROMISE_SHARED_HEADER_END -->'''

shared_footer = '''<!-- PROMISE_SHARED_FOOTER_START -->
<footer class="border-t border-border-dark bg-background-dark/95 mt-8">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
    <p class="text-sm text-text-muted">© <span id="copyright-year"></span> Nwhator Promise. All rights reserved.</p>
    <div class="flex items-center gap-4 text-sm">
      <a href="https://github.com/nwhator" target="_blank" rel="noreferrer" class="text-text-muted hover:text-primary transition-colors">GitHub</a>
      <a href="https://linkedin.com/in/nwhator" target="_blank" rel="noreferrer" class="text-text-muted hover:text-primary transition-colors">LinkedIn</a>
    </div>
  </div>
</footer>
<script>
(function () {
  const yearNode = document.getElementById('copyright-year');
  if (yearNode) yearNode.textContent = String(new Date().getFullYear());

  const routeMap = {
    home: '/',
    about: '/about',
    work: '/projects',
    project: '/projects',
    projects: '/projects',
    services: '/services',
    technologies: '/technologies',
    resume: '/resume',
    contact: '/contact',
    blog: '/blog'
  };

  document.querySelectorAll('a').forEach(function (anchor) {
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

    if (rawHref !== '#') return;

    for (const key in routeMap) {
      if (label.includes(key)) {
        anchor.setAttribute('href', routeMap[key]);
        anchor.setAttribute('target', '_top');
        break;
      }
    }
  });
})();
</script>
<!-- PROMISE_SHARED_FOOTER_END -->'''

header_re = re.compile(r'<!-- PROMISE_SHARED_HEADER_START -->.*?<!-- PROMISE_SHARED_HEADER_END -->', re.S)
footer_re = re.compile(r'<!-- PROMISE_SHARED_FOOTER_START -->.*?<!-- PROMISE_SHARED_FOOTER_END -->', re.S)
first_header_re = re.compile(r'<header\b.*?</header>', re.S | re.I)

updated = 0
for file_path in sorted(root.glob('*/code.html')):
    folder = file_path.parent.name
    html = file_path.read_text(encoding='utf-8')

    html = header_re.sub('', html)
    html = footer_re.sub('', html)

    if folder not in exempt_folders:
        if first_header_re.search(html):
            html = first_header_re.sub(shared_header, html, count=1)
        else:
            html = re.sub(r'(<body[^>]*>)', r'\1\n' + shared_header, html, count=1, flags=re.I)

    if '</body>' in html:
        html = html.replace('</body>', shared_footer + '\n</body>')
    else:
        html += '\n' + shared_footer

    file_path.write_text(html, encoding='utf-8')
    updated += 1

print(f'Updated {updated} stitched source pages.')
