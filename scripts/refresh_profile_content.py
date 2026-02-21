from pathlib import Path
import re


ROOT = Path("c:/Users/nwhat/Promise/stitch_promise_portfolio")
FILES = sorted(ROOT.glob("*/code.html"))


GLOBAL_REPLACEMENTS = [
	("Nwhator Promise", "Promise Ayobami Nwhator"),
	("Promise Nwhator", "Promise Ayobami Nwhator"),
	("NWHATOR PROMISE", "PROMISE AYOBAMI NWHATOR"),
	("hello@nwhator.dev", "nwhator@gmail.com"),
	("nwhator@example.com", "nwhator@gmail.com"),
	("mailto:nwhator@example.com", "mailto:nwhator@gmail.com"),
	("Remote / Worldwide", "Nigeria"),
	("Promise.dev", "Promise Ayobami Nwhator"),
]


def update_file(file_path: Path, replacements: list[tuple[str, str]]) -> bool:
	text = file_path.read_text(encoding="utf-8")
	updated = text
	for old, new in replacements:
		updated = updated.replace(old, new)
	if updated != text:
		file_path.write_text(updated, encoding="utf-8")
		return True
	return False


def apply_global_updates() -> int:
	changed = 0
	for file_path in FILES:
		if update_file(file_path, GLOBAL_REPLACEMENTS):
			changed += 1
	return changed


def update_home() -> bool:
	file_path = ROOT / "home_-_nwhator_promise_portfolio" / "code.html"
	html = file_path.read_text(encoding="utf-8")
	original = html

	html = html.replace(
		"Hi, I’m <span class=\"text-white font-semibold\">Promise Ayobami Nwhator</span> — Backend Engineer, WordPress Systems Architect, and scalable platform builder. I build secure, revenue-driven digital platforms from backend APIs to journal and e-commerce systems.",
		"Hi, I’m <span class=\"text-white font-semibold\">Promise Ayobami Nwhator</span> — Backend Engineer, WordPress Systems Architect, and scalable platform builder. I build secure, scalable, and revenue-driven digital platforms.",
	)
	html = html.replace(
		"I specialize in secure backend systems, WordPress architecture, and performance-focused stacks that scale without breaking.",
		"From backend APIs to full WordPress journal systems and e-commerce platforms, I help organizations turn ideas into stable, production-ready solutions.",
	)

	if html != original:
		file_path.write_text(html, encoding="utf-8")
		return True
	return False


def update_about() -> bool:
	file_path = ROOT / "about_-_engineering_philosophy" / "code.html"
	html = file_path.read_text(encoding="utf-8")
	original = html

	html = html.replace(
		"I build secure, scalable, and revenue-driven digital platforms with strong focus on performance, SEO, and long-term maintainability.",
		"I build secure, scalable, and revenue-driven digital platforms. From backend APIs to full WordPress journal systems and e-commerce platforms, I help organizations turn ideas into stable, production-ready solutions.",
	)

	html = html.replace(
		"My approach to building software focuses on three core pillars: \n                                    <span class=\"text-slate-900 dark:text-white font-semibold\">maintainability</span>, \n                                    <span class=\"text-slate-900 dark:text-white font-semibold\">performance</span>, and \n                                    <span class=\"text-slate-900 dark:text-white font-semibold\">scalability</span>.\n                                    I believe that every line of code is an investment in the product's future. I prioritize clean architectures that allow teams to move fast without breaking things.",
		"Whether it’s a backend system, a journal platform, or an e-commerce website — I focus on performance, structure, and long-term sustainability.",
	)

	html = html.replace("TypeScript", "C")
	html = html.replace("Golang", "Astro")
	html = html.replace("Rust", "Laravel PHP")
	html = html.replace("SQL", "RESTful API Design")
	html = html.replace("AWS", "MySQL")
	html = html.replace("Kubernetes", "Flutter")
	html = html.replace("Terraform", "Firebase")
	html = html.replace("CI/CD", "SEO Optimization")
	html = html.replace("Redis", "Linux + Git Workflows")
	html = html.replace("Microservices", "WordPress Systems")
	html = html.replace("Event-Driven", "WooCommerce")
	html = html.replace("Serverless", "Hosting + Migration")
	html = html.replace("Hexagonal Architecture", "Security Hardening")

	html = html.replace("MSc. Computer Science", "BSc. Computer Science & Engineering")
	html = html.replace("2018 - 2020", "Completed")
	html = html.replace("University of Lagos", "Obafemi Awolowo University")
	html = html.replace(
		"Focused on Distributed Systems and Machine Learning algorithms. Thesis on \"Optimizing Load Balancing in Microservices Architectures.\"",
		"Academic foundation in systems engineering, software architecture, and scalable application design.",
	)
	html = html.replace("BSc. Software Engineering", "Certified Software Engineer - ALX")
	html = html.replace("2013 - 2017", "Backend Engineering Program")
	html = html.replace("Covenant University", "ALX")
	html = html.replace(
		"Graduated with First Class Honors. Lead Developer for the University's Student Portal project.",
		"Intensive training in C programming, Python backend development, Node.js systems, API architecture, Docker containerization, and agile collaboration.",
	)

	if html != original:
		file_path.write_text(html, encoding="utf-8")
		return True
	return False


def update_technologies() -> bool:
	file_path = ROOT / "technologies_-_full_stack_expertise" / "code.html"
	html = file_path.read_text(encoding="utf-8")
	original = html

	html = html.replace(
		"Backend engineering, WordPress systems, and deployment workflows I use to build secure, scalable, and revenue-driven products.",
		"I specialize in building and optimizing digital platforms that scale without breaking, load fast and rank well, convert users into customers, and automate workflows.",
	)
	html = html.replace(
		"<span class=\"text-xs font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded\">UI</span>",
		"<span class=\"text-xs font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded\">STACK</span>",
	)
	html = html.replace(
		"<span class=\"material-symbols-outlined text-cyan-400 text-sm\">code_blocks</span> Astro + Tailwind",
		"<span class=\"material-symbols-outlined text-cyan-400 text-sm\">code_blocks</span> Astro + NextJS",
	)
	html = html.replace(
		"<p class=\"text-xs text-slate-500 font-mono\">Content Pages • Speed • UI Consistency</p>",
		"<p class=\"text-xs text-slate-500 font-mono\">Frontend Architecture • SEO • Speed</p>",
	)

	if html != original:
		file_path.write_text(html, encoding="utf-8")
		return True
	return False


def update_contact() -> bool:
	file_path = ROOT / "contact_-_let's_build_together" / "code.html"
	html = file_path.read_text(encoding="utf-8")
	original = html

	html = html.replace(
		"Have a project in mind or just want to say hi? Fill out the form or reach out directly. I'm always open to discussing new ideas.",
		"If you’re building something serious — a platform, system, journal, e-commerce brand, or scalable backend — I can help you structure it properly from the foundation.",
	)
	html = html.replace("href=\"#\">\n<!-- GitHub Icon", "href=\"https://github.com/nwhator\" target=\"_blank\" rel=\"noreferrer\">\n<!-- GitHub Icon")
	html = html.replace("href=\"#\">\n<!-- LinkedIn Icon substitute", "href=\"https://linkedin.com/in/nwhator\" target=\"_blank\" rel=\"noreferrer\">\n<!-- LinkedIn Icon substitute")

	if html != original:
		file_path.write_text(html, encoding="utf-8")
		return True
	return False


def update_services() -> bool:
	file_path = ROOT / "services_&_packages_-_professional_hiring" / "code.html"
	html = file_path.read_text(encoding="utf-8")
	original = html

	html = html.replace(
		"Expert full-stack development services designed to scale with your business needs. From MVPs to Enterprise Architecture.",
		"From backend APIs to full WordPress journal systems and e-commerce platforms, I help organizations turn ideas into stable, production-ready solutions.",
	)

	if html != original:
		file_path.write_text(html, encoding="utf-8")
		return True
	return False


def update_resume() -> bool:
	file_path = ROOT / "resume_-_experience_&_skills" / "code.html"
	html = file_path.read_text(encoding="utf-8")
	original = html

	html = html.replace("Built and maintain the official journal platform.", "Built and now maintain the official journal platform.")

	html = html.replace(
		"<section class=\"grid md:grid-cols-2 gap-6\">",
		"<section class=\"grid md:grid-cols-2 gap-6\">\n<div class=\"bg-white dark:bg-surface-dark rounded-xl p-6 border border-slate-200 dark:border-slate-800 md:col-span-2\">\n<h3 class=\"text-xl font-bold mb-3\">Beyond Code</h3>\n<p class=\"text-slate-600 dark:text-slate-300\">SEO implementation, analytics tracking, brand visual support (Canva), and IT networking/troubleshooting. I don’t just build — I optimize for growth and efficiency.</p>\n</div>",
		1,
	)

	html = html.replace(
		"<p class=\"text-slate-600 dark:text-slate-300\">English (Fluent), German (A2), Yoruba (Conversational)</p>",
		"<p class=\"text-slate-600 dark:text-slate-300\">English – Fluent, German – A2, Yoruba – Conversational</p>",
	)

	if html != original:
		file_path.write_text(html, encoding="utf-8")
		return True
	return False


def ensure_main_title_in_all() -> int:
	changed = 0
	for file_path in FILES:
		text = file_path.read_text(encoding="utf-8")
		original = text
		text = re.sub(
			r"<title>(?!Promise Ayobami Nwhator)([^<]*)</title>",
			lambda m: f"<title>{m.group(1).replace('Nwhator', 'Promise Ayobami Nwhator')}</title>",
			text,
			count=1,
		)
		if text != original:
			file_path.write_text(text, encoding="utf-8")
			changed += 1
	return changed


if __name__ == "__main__":
	global_changes = apply_global_updates()
	targeted_changes = sum(
		[
			update_home(),
			update_about(),
			update_technologies(),
			update_contact(),
			update_services(),
			update_resume(),
		]
	)
	title_changes = ensure_main_title_in_all()

	print(
		f"Global updates touched {global_changes} files; targeted updates touched {targeted_changes} key pages; title normalization touched {title_changes} files."
	)
