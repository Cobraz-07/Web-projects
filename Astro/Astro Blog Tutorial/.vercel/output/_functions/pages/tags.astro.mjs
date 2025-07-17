import { a as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DPj_SWeM.mjs';
import { g as getCollection } from '../chunks/_astro_content_BndpRrny.mjs';
import { $ as $$Layout } from '../chunks/layout_bv_LCz9q.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const pageTitle = "Tag index";
  const allPosts = await getCollection("blog");
  const tags = [...new Set(allPosts.map((post) => post.data.tags).flat())];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": pageTitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${pageTitle}</h1> <p>This is where i link to all the tags my blog posts might have.</p> <div class="flex flex-wrap"> ${tags.map((tag) => renderTemplate`<p class="m-[0.25em] border-dotted border-1 border-[#a1a1a1] py-[.5em] px-[1em] text-[1.15em] bg-[#F8FCFD]"><a${addAttribute(`/tags/${tag}`, "href")}>${tag}</a></p>`)} </div> ` })}`;
}, "D:/Dev/github/github repos/Web-modules/Astro/Astro Blog Tutorial/src/pages/tags/index.astro", void 0);

const $$file = "D:/Dev/github/github repos/Web-modules/Astro/Astro Blog Tutorial/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
