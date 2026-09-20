const navToggle = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
const navLinks = document.querySelector<HTMLElement>("[data-nav-links]");

function setNavOpen(isOpen: boolean) {
	navLinks?.classList.toggle("is-open", isOpen);
	navToggle?.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

if (navToggle && navLinks) {
	navToggle.addEventListener("click", () => {
		setNavOpen(!navLinks.classList.contains("is-open"));
	});
}

// Escape closes the menu and returns focus to the toggle
document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && navLinks?.classList.contains("is-open")) {
		setNavOpen(false);
		navToggle?.focus();
	}
});

// Close the menu when a link is picked. Return focus to the toggle so it
// never lands on a link that just became hidden.
navLinks
	?.querySelectorAll<HTMLAnchorElement>("a.md-nav-link")
	.forEach((anchor) => {
		anchor.addEventListener("click", () => {
			if (navLinks?.classList.contains("is-open")) {
				setNavOpen(false);
				navToggle?.focus();
			}
		});
	});

// Smooth-scroll in-page anchors and keep the URL hash shareable
const scrollLinks = Array.from(
	document.querySelectorAll<HTMLAnchorElement>('a.js-scroll-trigger[href^="#"]'),
);

for (const anchor of scrollLinks) {
	anchor.addEventListener("click", (event) => {
		const targetSelector = anchor.getAttribute("href");
		if (!targetSelector || targetSelector === "#") {
			return;
		}

		const target = document.querySelector<HTMLElement>(targetSelector);
		if (!target) {
			return;
		}

		event.preventDefault();
		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		target.scrollIntoView({
			behavior: prefersReducedMotion ? "auto" : "smooth",
			block: "start",
		});
		if (location.hash !== targetSelector) {
			history.pushState(null, "", targetSelector);
		}
	});
}

// Highlight the TOC link for the section currently in view
const sectionIds = scrollLinks
	.map((anchor) => anchor.getAttribute("href") ?? "")
	.filter((href) => href.length > 1)
	.map((href) => href.slice(1));

const sections = sectionIds
	.map((id) => document.getElementById(id))
	.filter((section): section is HTMLElement => section !== null);

function setActiveSection(id: string | null) {
	for (const anchor of scrollLinks) {
		const active = (anchor.getAttribute("href") ?? "") === `#${id}`;
		anchor.classList.toggle("is-active", active);
		if (active) {
			anchor.setAttribute("aria-current", "true");
		} else {
			anchor.removeAttribute("aria-current");
		}
	}
}

if (sections.length > 0 && "IntersectionObserver" in window) {
	const inView = new Map<string, boolean>();
	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				inView.set(entry.target.id, entry.isIntersecting);
			}
			setActiveSection(sectionIds.find((id) => inView.get(id)) ?? null);
		},
		// A thin band near the top of the viewport: a section is "current"
		// while it crosses this band.
		{ rootMargin: "-20% 0px -70% 0px", threshold: 0 },
	);
	sections.forEach((section) => observer.observe(section));
}
