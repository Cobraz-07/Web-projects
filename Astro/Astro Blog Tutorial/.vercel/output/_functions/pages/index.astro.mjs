import { c as createAstro, a as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DPj_SWeM.mjs';
/* empty css                                  */
import { $ as $$Layout } from '../chunks/layout_bv_LCz9q.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://rafa-dev-blog.vercel.app/");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const pageTitle = "Home Page";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>My Astro Site</h1> ` })}`;
}, "D:/Dev/github/github repos/Web-modules/Astro/Astro Blog Tutorial/src/pages/index.astro", void 0);

const $$file = "D:/Dev/github/github repos/Web-modules/Astro/Astro Blog Tutorial/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
