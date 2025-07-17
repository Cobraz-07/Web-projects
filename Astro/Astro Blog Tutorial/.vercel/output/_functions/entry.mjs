import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CmiVAwB-.mjs';
import { manifest } from './manifest_sSsN4sku.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/posts/_---slug_.astro.mjs');
const _page4 = () => import('./pages/rss.xml.astro.mjs');
const _page5 = () => import('./pages/tags/_tag_.astro.mjs');
const _page6 = () => import('./pages/tags.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.11.2_@types+node@24_272ba3a8b4cbf7a7b347955a38b17c9f/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog.astro", _page2],
    ["src/pages/posts/[...slug].astro", _page3],
    ["src/pages/rss.xml.js", _page4],
    ["src/pages/tags/[tag].astro", _page5],
    ["src/pages/tags/index.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "898922da-eaef-442d-8cac-9ae1bb25a47b",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
