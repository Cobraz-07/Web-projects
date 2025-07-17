import { c as createAstro, a as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DPj_SWeM.mjs';
/* empty css                                  */
import { $ as $$Layout } from '../chunks/layout_bv_LCz9q.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://rafa-dev-blog.vercel.app/");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const pageTitle = "About Me";
  const identity = {
    firstName: "Rafa",
    country: "Spain",
    occupation: "Student",
    hobbies: ["football", "photography", "diving"]
  };
  const skills = ["HTML", "CSS", "JavaScript", "Astro", "Tailwind CSS", "Writing Docs"];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-purple-500 text-[4rem]">${pageTitle}</h1> <p>I am working through Astro's introductory tutorial.</p> <p>This site will update as I complete more of the tutorial, so keep checking back and see how my journey is going!</p> ${renderTemplate`<p>I am happy to be learning Astro!</p>`}${renderTemplate`<p>I finished this tutorial!</p>`}${renderTemplate`<p>My goal is to finish in 1 days.</p>` }<p>Here are a few facts about me:</p> <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"> <li>My name is ${identity.firstName}.</li> <li>I live in ${identity.country} and I work as a ${identity.occupation}.</li> ${identity.hobbies.length >= 2 && renderTemplate`<li>Two of my hobbies are: ${identity.hobbies[0]} and ${identity.hobbies[1]}</li>`} </ul> <p>My skills are:</p> <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400"> ${skills.map((skill) => renderTemplate`<li class="text-green-500 font-bold">${skill}</li>`)} </ul> ` })}`;
}, "D:/Dev/github/github repos/Web-modules/Astro/Astro Blog Tutorial/src/pages/about.astro", void 0);

const $$file = "D:/Dev/github/github repos/Web-modules/Astro/Astro Blog Tutorial/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
