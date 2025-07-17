import { c as createAstro, a as createComponent, b as addAttribute, d as renderHead, e as renderSlot, r as renderTemplate } from './astro/server_DPj_SWeM.mjs';
/* empty css                          */

const $$Astro = createAstro("https://rafa-dev-blog.vercel.app/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const platform = "github";
  const username = "Cobraz-07";
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en" class="w-screen"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title><title></title>${renderHead()}</head> <body class="m-5"> <header> <nav> <div class="bg-neutral-200 m-auto w-min p-2 flex gap-5"> <a href="/" class="hover:bg-neutral-300 p-1">Home</a> <a href="/about/" class="hover:bg-neutral-300 p-1">About</a> <a href="/blog/" class="hover:bg-neutral-300 p-1">Blog</a> <a href="/tags/" class="hover:bg-neutral-300 p-1">Tags</a> </div> </nav> </header> ${renderSlot($$result, $$slots["default"])} <footer> <p>Learn more about my projects on <a class="text-blue-500 hover:text-blue-200"${addAttribute(`https://www.${platform}.com/${username}`, "href")}>${platform}</a>!</p> </footer> </body></html>`;
}, "D:/Dev/github/github repos/Web-modules/Astro/Astro Blog Tutorial/src/layouts/layout.astro", void 0);

export { $$Layout as $ };
