import { M as rest_props, N as value_or_fallback, c as create_anchor, O as spread_attributes, V as VoidElements, s as slot, J as bind_props, p as pop, L as sanitize_props, a as push, R as ensure_array_like, K as spread_props, e as escape, Q as attr } from "./index3.js";
import { b as badgeVariants, a as buttonVariants } from "./github-markdown.js";
import "dequal";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { g as getContext, c as createEventDispatcher, s as setContext } from "./main-client.js";
import { Slugger, Lexer } from "marked";
function cubicOut(t) {
  const f = t - 1;
  return f * f * f + 1;
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const flyAndScale = (node, params = { y: -8, x: 0, start: 0.95, duration: 150 }) => {
  const style = getComputedStyle(node);
  const transform = style.transform === "none" ? "" : style.transform;
  const scaleConversion = (valueA, scaleA, scaleB) => {
    const [minA, maxA] = scaleA;
    const [minB, maxB] = scaleB;
    const percentage = (valueA - minA) / (maxA - minA);
    const valueB = percentage * (maxB - minB) + minB;
    return valueB;
  };
  const styleToString = (style2) => {
    return Object.keys(style2).reduce((str, key2) => {
      if (style2[key2] === void 0)
        return str;
      return str + `${key2}:${style2[key2]};`;
    }, "");
  };
  return {
    duration: params.duration ?? 200,
    delay: 0,
    css: (t) => {
      const y = scaleConversion(t, [0, 1], [params.y ?? 5, 0]);
      const x = scaleConversion(t, [0, 1], [params.x ?? 0, 0]);
      const scale = scaleConversion(t, [0, 1], [params.start ?? 0.95, 1]);
      return styleToString({
        transform: `${transform} translate3d(${x}px, ${y}px, 0) scale(${scale})`,
        opacity: t
      });
    },
    easing: cubicOut
  };
};
function Badge($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "href", "variant", "$$props"]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  let href = value_or_fallback($$props["href"], void 0);
  let variant = value_or_fallback($$props["variant"], "default");
  const $$tag = href ? "a" : "span";
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  if ($$tag) {
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `<${$$tag}${spread_attributes(
      [
        { "href": href },
        {
          "class": cn(badgeVariants({ variant, className }))
        },
        $$restProps
      ],
      true,
      false,
      ""
    )}>`;
    if (!VoidElements.has($$tag)) {
      $$payload.out += `${anchor_1}`;
      const anchor_2 = create_anchor($$payload);
      $$payload.out += `${anchor_2}`;
      slot($$payload, $$props.children, {}, null);
      $$payload.out += `${anchor_2}`;
      $$payload.out += `${anchor_1}</${$$tag}>`;
    }
  }
  $$payload.out += `${anchor}`;
  bind_props($$props, { class: className, href, variant });
  pop();
}
/**
 * @license lucide-svelte v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const defaultAttributes$1 = defaultAttributes;
function Icon($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode",
    "$$props"
  ]);
  push(false);
  let name = $$props["name"];
  let color = value_or_fallback($$props["color"], "currentColor");
  let size = value_or_fallback($$props["size"], 24);
  let strokeWidth = value_or_fallback($$props["strokeWidth"], 2);
  let absoluteStrokeWidth = value_or_fallback($$props["absoluteStrokeWidth"], false);
  let iconNode = $$props["iconNode"];
  const anchor = create_anchor($$payload);
  const each_array = ensure_array_like(iconNode);
  const anchor_4 = create_anchor($$payload);
  $$payload.out += `<svg${spread_attributes(
    [
      defaultAttributes$1,
      $$restProps,
      { "width": size },
      { "height": size },
      { "stroke": color },
      {
        "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth
      },
      {
        "class": `lucide-icon lucide lucide-${name} ${$$sanitized_props.class ?? ""}`
      }
    ],
    false,
    true,
    ""
  )}>${anchor}`;
  for (let $$index = 0; $$index < each_array.length; $$index++) {
    const $$item = each_array[$$index];
    const [tag, attrs] = $$item;
    const anchor_1 = create_anchor($$payload);
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `${anchor_1}${anchor_2}`;
    if (tag) {
      const anchor_3 = create_anchor($$payload);
      $$payload.out += `<${tag}${spread_attributes([attrs], false, true, "")}>`;
      if (!VoidElements.has(tag)) {
        $$payload.out += `${anchor_3}`;
        $$payload.out += `${anchor_3}</${tag}>`;
      }
    }
    $$payload.out += `${anchor_2}${anchor_1}`;
  }
  $$payload.out += `${anchor}${anchor_4}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor_4}</svg>`;
  bind_props($$props, {
    name,
    color,
    size,
    strokeWidth,
    absoluteStrokeWidth,
    iconNode
  });
  pop();
}
function Star($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push(false);
  const iconNode = [
    [
      "polygon",
      {
        "points": "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      }
    ]
  ];
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Icon($$payload, spread_props([
    { name: "star" },
    $$sanitized_props,
    {
      iconNode,
      children: ($$payload2, $$slotProps) => {
        const anchor_1 = create_anchor($$payload2);
        $$payload2.out += `${anchor_1}`;
        slot($$payload2, $$props.children, {}, null);
        $$payload2.out += `${anchor_1}`;
      }
    }
  ]));
  $$payload.out += `${anchor}`;
  pop();
}
function getAttrs(builders) {
  const attrs = {};
  builders.forEach((builder) => {
    Object.keys(builder).forEach((key2) => {
      if (key2 !== "action") {
        attrs[key2] = builder[key2];
      }
    });
  });
  return attrs;
}
function Button$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "href",
    "type",
    "builders",
    "el",
    "$$props"
  ]);
  push(false);
  let href = value_or_fallback($$props["href"], void 0);
  let type = value_or_fallback($$props["type"], void 0);
  let builders = value_or_fallback($$props["builders"], []);
  let el = value_or_fallback($$props["el"], void 0);
  const attrs = { "data-button-root": "" };
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  if (builders && builders.length) {
    $$payload.out += "<!--ssr:if:true-->";
    const $$tag = href ? "a" : "button";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `${anchor_1}`;
    if ($$tag) {
      const anchor_2 = create_anchor($$payload);
      $$payload.out += `<${$$tag}${spread_attributes(
        [
          { "type": href ? void 0 : type },
          { "href": href },
          { "tabindex": "0" },
          getAttrs(builders),
          $$restProps,
          attrs
        ],
        true,
        false,
        ""
      )}>`;
      if (!VoidElements.has($$tag)) {
        $$payload.out += `${anchor_2}`;
        const anchor_3 = create_anchor($$payload);
        $$payload.out += `${anchor_3}`;
        slot($$payload, $$props.children, {}, null);
        $$payload.out += `${anchor_3}`;
        $$payload.out += `${anchor_2}</${$$tag}>`;
      }
    }
    $$payload.out += `${anchor_1}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const $$tag_1 = href ? "a" : "button";
    const anchor_4 = create_anchor($$payload);
    $$payload.out += `${anchor_4}`;
    if ($$tag_1) {
      const anchor_5 = create_anchor($$payload);
      $$payload.out += `<${$$tag_1}${spread_attributes(
        [
          { "type": href ? void 0 : type },
          { "href": href },
          { "tabindex": "0" },
          $$restProps,
          attrs
        ],
        true,
        false,
        ""
      )}>`;
      if (!VoidElements.has($$tag_1)) {
        $$payload.out += `${anchor_5}`;
        const anchor_6 = create_anchor($$payload);
        $$payload.out += `${anchor_6}`;
        slot($$payload, $$props.children, {}, null);
        $$payload.out += `${anchor_6}`;
        $$payload.out += `${anchor_5}</${$$tag_1}>`;
      }
    }
    $$payload.out += `${anchor_4}`;
  }
  $$payload.out += `${anchor}`;
  bind_props($$props, { href, type, builders, el });
  pop();
}
function Button($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "variant",
    "size",
    "builders",
    "$$props"
  ]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  let variant = value_or_fallback($$props["variant"], "default");
  let size = value_or_fallback($$props["size"], "default");
  let builders = value_or_fallback($$props["builders"], []);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Button$1($$payload, spread_props([
    {
      builders,
      class: cn(buttonVariants({ variant, size, className })),
      type: "button"
    },
    $$restProps,
    {
      children: ($$payload2, $$slotProps) => {
        const anchor_1 = create_anchor($$payload2);
        $$payload2.out += `${anchor_1}`;
        slot($$payload2, $$props.children, {}, null);
        $$payload2.out += `${anchor_1}`;
      }
    }
  ]));
  $$payload.out += `${anchor}`;
  bind_props($$props, { class: className, variant, size, builders });
  pop();
}
function supressWarnings() {
  const origWarn = console.warn;
  console.warn = (message) => {
    if (message.includes("unknown prop"))
      return;
    if (message.includes("unexpected slot"))
      return;
    origWarn(message);
  };
}
function Parser($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "type",
    "tokens",
    "header",
    "rows",
    "ordered",
    "renderers",
    "$$props"
  ]);
  push(false);
  let type = value_or_fallback($$props["type"], void 0);
  let tokens = value_or_fallback($$props["tokens"], void 0);
  let header = value_or_fallback($$props["header"], void 0);
  let rows = value_or_fallback($$props["rows"], void 0);
  let ordered = value_or_fallback($$props["ordered"], false);
  let renderers = $$props["renderers"];
  supressWarnings();
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  if (!type) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    const each_array = ensure_array_like(tokens);
    $$payload.out += `${anchor_1}`;
    for (let $$index = 0; $$index < each_array.length; $$index++) {
      const token = each_array[$$index];
      const anchor_2 = create_anchor($$payload);
      const anchor_3 = create_anchor($$payload);
      $$payload.out += `${anchor_2}${anchor_3}`;
      Parser($$payload, spread_props([token, { renderers }]));
      $$payload.out += `${anchor_3}${anchor_2}`;
    }
    $$payload.out += `${anchor_1}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_4 = create_anchor($$payload);
    $$payload.out += `${anchor_4}`;
    if (renderers[type]) {
      $$payload.out += "<!--ssr:if:true-->";
      const anchor_5 = create_anchor($$payload);
      $$payload.out += `${anchor_5}`;
      if (type === "table") {
        $$payload.out += "<!--ssr:if:true-->";
        const anchor_6 = create_anchor($$payload);
        $$payload.out += `${anchor_6}`;
        renderers.table?.($$payload, {
          children: ($$payload2, $$slotProps) => {
            const anchor_7 = create_anchor($$payload2);
            const anchor_13 = create_anchor($$payload2);
            $$payload2.out += `${anchor_7}`;
            renderers.tablehead?.($$payload2, {
              children: ($$payload3, $$slotProps2) => {
                const anchor_8 = create_anchor($$payload3);
                $$payload3.out += `${anchor_8}`;
                renderers.tablerow?.($$payload3, {
                  children: ($$payload4, $$slotProps3) => {
                    const anchor_9 = create_anchor($$payload4);
                    const each_array_1 = ensure_array_like(header);
                    $$payload4.out += `${anchor_9}`;
                    for (let i = 0; i < each_array_1.length; i++) {
                      const headerItem = each_array_1[i];
                      const anchor_10 = create_anchor($$payload4);
                      const anchor_11 = create_anchor($$payload4);
                      $$payload4.out += `${anchor_10}${anchor_11}`;
                      renderers.tablecell?.($$payload4, {
                        header: true,
                        align: $$restProps.align[i] || "center",
                        children: ($$payload5, $$slotProps4) => {
                          const anchor_12 = create_anchor($$payload5);
                          $$payload5.out += `${anchor_12}`;
                          Parser($$payload5, { tokens: headerItem.tokens, renderers });
                          $$payload5.out += `${anchor_12}`;
                        }
                      });
                      $$payload4.out += `${anchor_11}${anchor_10}`;
                    }
                    $$payload4.out += `${anchor_9}`;
                  }
                });
                $$payload3.out += `${anchor_8}`;
              }
            });
            $$payload2.out += `${anchor_7} ${anchor_13}`;
            renderers.tablebody?.($$payload2, {
              children: ($$payload3, $$slotProps2) => {
                const anchor_14 = create_anchor($$payload3);
                const each_array_2 = ensure_array_like(rows);
                $$payload3.out += `${anchor_14}`;
                for (let $$index_3 = 0; $$index_3 < each_array_2.length; $$index_3++) {
                  const row = each_array_2[$$index_3];
                  const anchor_15 = create_anchor($$payload3);
                  const anchor_16 = create_anchor($$payload3);
                  $$payload3.out += `${anchor_15}${anchor_16}`;
                  renderers.tablerow?.($$payload3, {
                    children: ($$payload4, $$slotProps3) => {
                      const anchor_17 = create_anchor($$payload4);
                      const each_array_3 = ensure_array_like(row);
                      $$payload4.out += `${anchor_17}`;
                      for (let i = 0; i < each_array_3.length; i++) {
                        const cells = each_array_3[i];
                        const anchor_18 = create_anchor($$payload4);
                        const anchor_19 = create_anchor($$payload4);
                        $$payload4.out += `${anchor_18}${anchor_19}`;
                        renderers.tablecell?.($$payload4, {
                          header: false,
                          align: $$restProps.align[i] || "center",
                          children: ($$payload5, $$slotProps4) => {
                            const anchor_20 = create_anchor($$payload5);
                            $$payload5.out += `${anchor_20}`;
                            Parser($$payload5, { tokens: cells.tokens, renderers });
                            $$payload5.out += `${anchor_20}`;
                          }
                        });
                        $$payload4.out += `${anchor_19}${anchor_18}`;
                      }
                      $$payload4.out += `${anchor_17}`;
                    }
                  });
                  $$payload3.out += `${anchor_16}${anchor_15}`;
                }
                $$payload3.out += `${anchor_14}`;
              }
            });
            $$payload2.out += `${anchor_13}`;
          }
        });
        $$payload.out += `${anchor_6}`;
      } else {
        $$payload.out += "<!--ssr:if:false-->";
        const anchor_21 = create_anchor($$payload);
        $$payload.out += `${anchor_21}`;
        if (type === "list") {
          $$payload.out += "<!--ssr:if:true-->";
          const anchor_22 = create_anchor($$payload);
          $$payload.out += `${anchor_22}`;
          if (ordered) {
            $$payload.out += "<!--ssr:if:true-->";
            const anchor_23 = create_anchor($$payload);
            $$payload.out += `${anchor_23}`;
            renderers.list?.($$payload, spread_props([
              { ordered },
              $$restProps,
              {
                children: ($$payload2, $$slotProps) => {
                  const anchor_24 = create_anchor($$payload2);
                  const each_array_4 = ensure_array_like($$restProps.items);
                  $$payload2.out += `${anchor_24}`;
                  for (let $$index_4 = 0; $$index_4 < each_array_4.length; $$index_4++) {
                    const item = each_array_4[$$index_4];
                    const anchor_25 = create_anchor($$payload2);
                    const anchor_26 = create_anchor($$payload2);
                    $$payload2.out += `${anchor_25}${anchor_26}`;
                    (renderers.orderedlistitem || renderers.listitem)?.($$payload2, spread_props([
                      item,
                      {
                        children: ($$payload3, $$slotProps2) => {
                          const anchor_27 = create_anchor($$payload3);
                          $$payload3.out += `${anchor_27}`;
                          Parser($$payload3, { tokens: item.tokens, renderers });
                          $$payload3.out += `${anchor_27}`;
                        }
                      }
                    ]));
                    $$payload2.out += `${anchor_26}${anchor_25}`;
                  }
                  $$payload2.out += `${anchor_24}`;
                }
              }
            ]));
            $$payload.out += `${anchor_23}`;
          } else {
            $$payload.out += "<!--ssr:if:false-->";
            const anchor_28 = create_anchor($$payload);
            $$payload.out += `${anchor_28}`;
            renderers.list?.($$payload, spread_props([
              { ordered },
              $$restProps,
              {
                children: ($$payload2, $$slotProps) => {
                  const anchor_29 = create_anchor($$payload2);
                  const each_array_5 = ensure_array_like($$restProps.items);
                  $$payload2.out += `${anchor_29}`;
                  for (let $$index_5 = 0; $$index_5 < each_array_5.length; $$index_5++) {
                    const item = each_array_5[$$index_5];
                    const anchor_30 = create_anchor($$payload2);
                    const anchor_31 = create_anchor($$payload2);
                    $$payload2.out += `${anchor_30}${anchor_31}`;
                    (renderers.unorderedlistitem || renderers.listitem)?.($$payload2, spread_props([
                      item,
                      {
                        children: ($$payload3, $$slotProps2) => {
                          const anchor_32 = create_anchor($$payload3);
                          $$payload3.out += `${anchor_32}`;
                          Parser($$payload3, { tokens: item.tokens, renderers });
                          $$payload3.out += `${anchor_32}`;
                        }
                      }
                    ]));
                    $$payload2.out += `${anchor_31}${anchor_30}`;
                  }
                  $$payload2.out += `${anchor_29}`;
                }
              }
            ]));
            $$payload.out += `${anchor_28}`;
          }
          $$payload.out += `${anchor_22}`;
        } else {
          $$payload.out += "<!--ssr:if:false-->";
          const anchor_33 = create_anchor($$payload);
          $$payload.out += `${anchor_33}`;
          renderers[type]?.($$payload, spread_props([
            $$restProps,
            {
              children: ($$payload2, $$slotProps) => {
                const anchor_34 = create_anchor($$payload2);
                $$payload2.out += `${anchor_34}`;
                if (tokens) {
                  $$payload2.out += "<!--ssr:if:true-->";
                  const anchor_35 = create_anchor($$payload2);
                  $$payload2.out += `${anchor_35}`;
                  Parser($$payload2, { tokens, renderers });
                  $$payload2.out += `${anchor_35}`;
                } else {
                  $$payload2.out += "<!--ssr:if:false-->";
                  $$payload2.out += `${escape($$restProps.raw)}`;
                }
                $$payload2.out += `${anchor_34}`;
              }
            }
          ]));
          $$payload.out += `${anchor_33}`;
        }
        $$payload.out += `${anchor_21}`;
      }
      $$payload.out += `${anchor_5}`;
    } else {
      $$payload.out += "<!--ssr:if:false-->";
    }
    $$payload.out += `${anchor_4}`;
  }
  $$payload.out += `${anchor}`;
  bind_props($$props, {
    type,
    tokens,
    header,
    rows,
    ordered,
    renderers
  });
  pop();
}
const key = {};
function Heading($$payload, $$props) {
  push(false);
  let id;
  let depth = $$props["depth"];
  let raw = $$props["raw"];
  let text = $$props["text"];
  const { slug, getOptions } = getContext(key);
  const options = getOptions();
  id = options.headerIds ? options.headerPrefix + slug(text) : void 0;
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  if (depth === 1) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `<h1${attr("id", id, false)}>${anchor_1}`;
    slot($$payload, $$props.children, {}, null);
    $$payload.out += `${anchor_1}</h1>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `${anchor_2}`;
    if (depth === 2) {
      $$payload.out += "<!--ssr:if:true-->";
      const anchor_3 = create_anchor($$payload);
      $$payload.out += `<h2${attr("id", id, false)}>${anchor_3}`;
      slot($$payload, $$props.children, {}, null);
      $$payload.out += `${anchor_3}</h2>`;
    } else {
      $$payload.out += "<!--ssr:if:false-->";
      const anchor_4 = create_anchor($$payload);
      $$payload.out += `${anchor_4}`;
      if (depth === 3) {
        $$payload.out += "<!--ssr:if:true-->";
        const anchor_5 = create_anchor($$payload);
        $$payload.out += `<h3${attr("id", id, false)}>${anchor_5}`;
        slot($$payload, $$props.children, {}, null);
        $$payload.out += `${anchor_5}</h3>`;
      } else {
        $$payload.out += "<!--ssr:if:false-->";
        const anchor_6 = create_anchor($$payload);
        $$payload.out += `${anchor_6}`;
        if (depth === 4) {
          $$payload.out += "<!--ssr:if:true-->";
          const anchor_7 = create_anchor($$payload);
          $$payload.out += `<h4${attr("id", id, false)}>${anchor_7}`;
          slot($$payload, $$props.children, {}, null);
          $$payload.out += `${anchor_7}</h4>`;
        } else {
          $$payload.out += "<!--ssr:if:false-->";
          const anchor_8 = create_anchor($$payload);
          $$payload.out += `${anchor_8}`;
          if (depth === 5) {
            $$payload.out += "<!--ssr:if:true-->";
            const anchor_9 = create_anchor($$payload);
            $$payload.out += `<h5${attr("id", id, false)}>${anchor_9}`;
            slot($$payload, $$props.children, {}, null);
            $$payload.out += `${anchor_9}</h5>`;
          } else {
            $$payload.out += "<!--ssr:if:false-->";
            const anchor_10 = create_anchor($$payload);
            $$payload.out += `${anchor_10}`;
            if (depth === 6) {
              $$payload.out += "<!--ssr:if:true-->";
              const anchor_11 = create_anchor($$payload);
              $$payload.out += `<h6${attr("id", id, false)}>${anchor_11}`;
              slot($$payload, $$props.children, {}, null);
              $$payload.out += `${anchor_11}</h6>`;
            } else {
              $$payload.out += "<!--ssr:if:false-->";
              $$payload.out += `${escape(raw)}`;
            }
            $$payload.out += `${anchor_10}`;
          }
          $$payload.out += `${anchor_8}`;
        }
        $$payload.out += `${anchor_6}`;
      }
      $$payload.out += `${anchor_4}`;
    }
    $$payload.out += `${anchor_2}`;
  }
  $$payload.out += `${anchor}`;
  bind_props($$props, { depth, raw, text });
  pop();
}
function Paragraph($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  $$payload.out += `<p>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</p>`;
  pop();
}
function Text($$payload, $$props) {
  push(false);
  let text = $$props["text"];
  let raw = $$props["raw"];
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}`;
  bind_props($$props, { text, raw });
  pop();
}
function Image($$payload, $$props) {
  push(false);
  let href = value_or_fallback($$props["href"], "");
  let title = value_or_fallback($$props["title"], void 0);
  let text = value_or_fallback($$props["text"], "");
  $$payload.out += `<img${attr("src", href, false)}${attr("title", title, false)}${attr("alt", text, false)}>`;
  bind_props($$props, { href, title, text });
  pop();
}
function Link($$payload, $$props) {
  push(false);
  let href = value_or_fallback($$props["href"], "");
  let title = value_or_fallback($$props["title"], void 0);
  const anchor = create_anchor($$payload);
  $$payload.out += `<a${attr("href", href, false)}${attr("title", title, false)}>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</a>`;
  bind_props($$props, { href, title });
  pop();
}
function Em($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  $$payload.out += `<em>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</em>`;
  pop();
}
function Del($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  $$payload.out += `<del>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</del>`;
  pop();
}
function Codespan($$payload, $$props) {
  push(false);
  let raw = $$props["raw"];
  $$payload.out += `<code>${escape(raw.replace(/`/g, ""))}</code>`;
  bind_props($$props, { raw });
  pop();
}
function Strong($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  $$payload.out += `<strong>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</strong>`;
  pop();
}
function Table($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  $$payload.out += `<table>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</table>`;
  pop();
}
function TableHead($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  $$payload.out += `<thead>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</thead>`;
  pop();
}
function TableBody($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  $$payload.out += `<tbody>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</tbody>`;
  pop();
}
function TableRow($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  $$payload.out += `<tr>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</tr>`;
  pop();
}
function TableCell($$payload, $$props) {
  push(false);
  let header = $$props["header"];
  let align = $$props["align"];
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  if (header) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `<th${attr("align", align, false)}>${anchor_1}`;
    slot($$payload, $$props.children, {}, null);
    $$payload.out += `${anchor_1}</th>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `<td${attr("align", align, false)}>${anchor_2}`;
    slot($$payload, $$props.children, {}, null);
    $$payload.out += `${anchor_2}</td>`;
  }
  $$payload.out += `${anchor}`;
  bind_props($$props, { header, align });
  pop();
}
function List($$payload, $$props) {
  push(false);
  let ordered = $$props["ordered"];
  let start = $$props["start"];
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  if (ordered) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `<ol${attr("start", start, false)}>${anchor_1}`;
    slot($$payload, $$props.children, {}, null);
    $$payload.out += `${anchor_1}</ol>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `<ul>${anchor_2}`;
    slot($$payload, $$props.children, {}, null);
    $$payload.out += `${anchor_2}</ul>`;
  }
  $$payload.out += `${anchor}`;
  bind_props($$props, { ordered, start });
  pop();
}
function ListItem($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  $$payload.out += `<li>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</li>`;
  pop();
}
function Hr($$payload, $$props) {
  push(false);
  $$payload.out += `<hr>`;
  pop();
}
function Html($$payload, $$props) {
  push(false);
  let text = $$props["text"];
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}${text}${anchor}`;
  bind_props($$props, { text });
  pop();
}
function Blockquote($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  $$payload.out += `<blockquote>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</blockquote>`;
  pop();
}
function Code($$payload, $$props) {
  push(false);
  let lang = $$props["lang"];
  let text = $$props["text"];
  $$payload.out += `<pre${attr("class", lang, false)}><code>${escape(text)}</code></pre>`;
  bind_props($$props, { lang, text });
  pop();
}
function Br($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  $$payload.out += `<br>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}`;
  pop();
}
const defaultRenderers = {
  heading: Heading,
  paragraph: Paragraph,
  text: Text,
  image: Image,
  link: Link,
  em: Em,
  strong: Strong,
  codespan: Codespan,
  del: Del,
  table: Table,
  tablehead: TableHead,
  tablebody: TableBody,
  tablerow: TableRow,
  tablecell: TableCell,
  list: List,
  orderedlistitem: null,
  unorderedlistitem: null,
  listitem: ListItem,
  hr: Hr,
  html: Html,
  blockquote: Blockquote,
  code: Code,
  br: Br
};
const defaultOptions = {
  baseUrl: null,
  breaks: false,
  gfm: true,
  headerIds: true,
  headerPrefix: "",
  highlight: null,
  langPrefix: "language-",
  mangle: true,
  pedantic: false,
  renderer: null,
  sanitize: false,
  sanitizer: null,
  silent: false,
  smartLists: false,
  smartypants: false,
  tokenizer: null,
  xhtml: false
};
function SvelteMarkdown($$payload, $$props) {
  push(false);
  let preprocessed, slugger, combinedOptions, combinedRenderers;
  let source = value_or_fallback($$props["source"], []);
  let renderers = value_or_fallback($$props["renderers"], {});
  let options = value_or_fallback($$props["options"], {});
  let isInline = value_or_fallback($$props["isInline"], false);
  const dispatch = createEventDispatcher();
  let tokens;
  let lexer;
  setContext(key, {
    slug: (val) => slugger ? slugger.slug(val) : "",
    getOptions: () => combinedOptions
  });
  preprocessed = Array.isArray(source);
  slugger = source ? new Slugger() : void 0;
  combinedOptions = { ...defaultOptions, ...options };
  if (preprocessed) {
    tokens = source;
  } else {
    lexer = new Lexer(combinedOptions);
    tokens = isInline ? lexer.inlineTokens(source) : lexer.lex(source);
    dispatch("parsed", { tokens });
  }
  combinedRenderers = { ...defaultRenderers, ...renderers };
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Parser($$payload, { tokens, renderers: combinedRenderers });
  $$payload.out += `${anchor}`;
  bind_props($$props, { source, renderers, options, isInline });
  pop();
}
export {
  Button as B,
  Icon as I,
  Star as S,
  SvelteMarkdown as a,
  Badge as b,
  cn as c,
  flyAndScale as f
};
