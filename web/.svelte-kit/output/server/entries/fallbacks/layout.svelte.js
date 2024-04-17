import { c as create_anchor, s as slot, p as pop, a as push } from "../../chunks/index3.js";
function Layout($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}`;
  pop();
}
export {
  Layout as default
};
