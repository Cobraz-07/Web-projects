import { c as createAstro, a as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DPj_SWeM.mjs';
import { $ as $$BlogPost } from '../chunks/BlogPost_CRX79OqN.mjs';
import { $ as $$Layout } from '../chunks/layout_bv_LCz9q.mjs';
import { g as getCollection } from '../chunks/_astro_content_BndpRrny.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://rafa-dev-blog.vercel.app/");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const pageTitle = "My Astro Learning Blog";
  const allPosts = await getCollection("blog");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": pageTitle }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${pageTitle}</h1> <p>This is where I will post about my journey learning Astro.</p> <ul> ${allPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": `/posts/${post.id}/`, "title": post.data.title })}`)} </ul> ` })}`;
}, "D:/Dev/github/github repos/Web-modules/Astro/Astro Blog Tutorial/src/pages/blog.astro", void 0);

const $$file = "D:/Dev/github/github repos/Web-modules/Astro/Astro Blog Tutorial/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
