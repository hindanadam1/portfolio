const text = "Developpeuse Full Stack";

let i = 0;
const typingTarget = document.querySelector(".typing");

function typing(){
if(!typingTarget){
return;
}

if(i < text.length){
typingTarget.innerHTML += text.charAt(i);
i++;
setTimeout(typing, 70);
}
}

typing();

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if(navToggle && siteNav){
navToggle.addEventListener("click", () => {
const open = siteNav.classList.toggle("is-open");
navToggle.classList.toggle("is-open", open);
navToggle.setAttribute("aria-expanded", String(open));
});

siteNav.querySelectorAll("a").forEach((link) => {
link.addEventListener("click", () => {
siteNav.classList.remove("is-open");
navToggle.classList.remove("is-open");
navToggle.setAttribute("aria-expanded", "false");
});
});

window.addEventListener("resize", () => {
if(window.innerWidth > 768){
siteNav.classList.remove("is-open");
navToggle.classList.remove("is-open");
navToggle.setAttribute("aria-expanded", "false");
}
});
}

const revealSelector = [
".about-hero-card",
".about-panel",
".skills-group",
".skill",
".project",
".case-study",
".contact-page h2",
".contact-text",
".social-links a"
].join(",");

const revealItems = document.querySelectorAll(revealSelector);

revealItems.forEach((item, index) => {
item.classList.add("reveal-on-scroll");
item.style.setProperty("--reveal-delay", `${(index % 6) * 70}ms`);
});

const observer = new IntersectionObserver((entries, obs) => {
entries.forEach((entry) => {
if(entry.isIntersecting){
entry.target.classList.add("is-visible");
obs.unobserve(entry.target);
}
});
}, {
threshold: 0.14,
rootMargin: "0px 0px -40px 0px"
});

revealItems.forEach((item) => observer.observe(item));

const hero = document.querySelector(".hero");
if(hero){
hero.addEventListener("pointermove", (event) => {
const rect = hero.getBoundingClientRect();
const x = ((event.clientX - rect.left) / rect.width) * 100;
const y = ((event.clientY - rect.top) / rect.height) * 100;
hero.style.setProperty("--mx", `${x}%`);
hero.style.setProperty("--my", `${y}%`);
});
}
