import { c as createAstro, a as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead, e as renderSlot, b as addAttribute } from '../../chunks/astro/server_DPj_SWeM.mjs';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_BndpRrny.mjs';
import { $ as $$Layout } from '../../chunks/layout_bv_LCz9q.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://rafa-dev-blog.vercel.app/");
const $$MarkdownPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": frontmatter.title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${frontmatter.title}</h1> <p>${frontmatter.pubDate.toLocaleDateString()}</p> <p><em>${frontmatter.description}</em></p> <p>Written by: ${frontmatter.author}</p> <div class="flex flex-wrap"> ${frontmatter.tags.map((tag) => renderTemplate`<p class="m-[0.25em] border-dotted border-1 border-[#a1a1a1] py-[.5em] px-[1em] text-[1.15em] bg-[#F8FCFD]"><a${addAttribute(`/tags/${tag}`, "href")}>${tag}</a></p>`)} </div> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "D:/Dev/github/github repos/Web-modules/Astro/Astro Blog Tutorial/src/layouts/MarkdownPostLayout.astro", void 0);

const $$Astro = createAstro("https://rafa-dev-blog.vercel.app/");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.id.replace(".md", "") },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "MarkdownPostLayout", $$MarkdownPostLayout, { "frontmatter": post.data }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "D:/Dev/github/github repos/Web-modules/Astro/Astro Blog Tutorial/src/pages/posts/[...slug].astro", void 0);

const $$file = "D:/Dev/github/github repos/Web-modules/Astro/Astro Blog Tutorial/src/pages/posts/[...slug].astro";
const $$url = "/posts/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
