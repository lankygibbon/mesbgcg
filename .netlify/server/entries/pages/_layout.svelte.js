import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav><a href="${"/"}">Home</a>
    <a href="${"/print"}">Print</a></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
