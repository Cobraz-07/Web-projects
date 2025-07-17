import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_DPj_SWeM.mjs';

const $$Astro = createAstro("https://rafa-dev-blog.vercel.app/");
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li><a${addAttribute(url, "href")}>${title}</a></li>`;
}, "D:/Dev/github/github repos/Web-modules/Astro/Astro Blog Tutorial/src/components/BlogPost.astro", void 0);

export { $$BlogPost as $ };
