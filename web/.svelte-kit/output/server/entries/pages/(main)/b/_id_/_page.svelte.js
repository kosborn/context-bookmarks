import { c as create_anchor, K as spread_props, s as slot, p as pop, L as sanitize_props, a as push, M as rest_props, N as value_or_fallback, O as spread_attributes, J as bind_props, V as VoidElements, Q as attr, e as escape, R as ensure_array_like, S as stringify, T as await_block } from "../../../../../chunks/index3.js";
import "../../../../../chunks/client.js";
import { tv } from "tailwind-variants";
import "clsx";
import "../../../../../chunks/github-markdown.js";
import { I as Icon, c as cn, B as Button, S as Star, a as SvelteMarkdown, b as Badge } from "../../../../../chunks/SvelteMarkdown.js";
import javascript$2 from "highlight.js/lib/languages/javascript";
import hljs from "highlight.js/lib/core";
import { c as createEventDispatcher } from "../../../../../chunks/main-client.js";
import "../../../../../chunks/index2.js";
import "fauna";
import "@corbado/webcomponent";
function File_pen($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push(false);
  const iconNode = [
    [
      "path",
      {
        "d": "M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10"
      }
    ],
    ["path", { "d": "M14 2v4a2 2 0 0 0 2 2h4" }],
    [
      "path",
      { "d": "M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" }
    ]
  ];
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Icon($$payload, spread_props([
    { name: "file-pen" },
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
function Trash_2($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push(false);
  const iconNode = [
    ["path", { "d": "M3 6h18" }],
    [
      "path",
      { "d": "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }
    ],
    [
      "path",
      { "d": "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }
    ],
    [
      "line",
      {
        "x1": "10",
        "x2": "10",
        "y1": "11",
        "y2": "17"
      }
    ],
    [
      "line",
      {
        "x1": "14",
        "x2": "14",
        "y1": "11",
        "y2": "17"
      }
    ]
  ];
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Icon($$payload, spread_props([
    { name: "trash-2" },
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
function Card($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  const anchor = create_anchor($$payload);
  $$payload.out += `<div${spread_attributes(
    [
      {
        "class": cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)
      },
      $$restProps
    ],
    true,
    false,
    ""
  )}>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</div>`;
  bind_props($$props, { class: className });
  pop();
}
function Card_content($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  const anchor = create_anchor($$payload);
  $$payload.out += `<div${spread_attributes(
    [
      { "class": cn("p-6 pt-0", className) },
      $$restProps
    ],
    true,
    false,
    ""
  )}>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</div>`;
  bind_props($$props, { class: className });
  pop();
}
function Card_description($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  const anchor = create_anchor($$payload);
  $$payload.out += `<p${spread_attributes(
    [
      {
        "class": cn("text-sm text-muted-foreground", className)
      },
      $$restProps
    ],
    true,
    false,
    ""
  )}>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</p>`;
  bind_props($$props, { class: className });
  pop();
}
function Card_footer($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  const anchor = create_anchor($$payload);
  $$payload.out += `<div${spread_attributes(
    [
      {
        "class": cn("flex items-center p-6 pt-0", className)
      },
      $$restProps
    ],
    true,
    false,
    ""
  )}>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</div>`;
  bind_props($$props, { class: className });
  pop();
}
function Card_header($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  const anchor = create_anchor($$payload);
  $$payload.out += `<div${spread_attributes(
    [
      {
        "class": cn("flex flex-col space-y-1.5 p-6", className)
      },
      $$restProps
    ],
    true,
    false,
    ""
  )}>${anchor}`;
  slot($$payload, $$props.children, {}, null);
  $$payload.out += `${anchor}</div>`;
  bind_props($$props, { class: className });
  pop();
}
function Card_title($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "tag", "$$props"]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  let tag = value_or_fallback($$props["tag"], "h3");
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  if (tag) {
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `<${tag}${spread_attributes(
      [
        {
          "class": cn("text-lg font-semibold leading-none tracking-tight", className)
        },
        $$restProps
      ],
      true,
      false,
      ""
    )}>`;
    if (!VoidElements.has(tag)) {
      $$payload.out += `${anchor_1}`;
      const anchor_2 = create_anchor($$payload);
      $$payload.out += `${anchor_2}`;
      slot($$payload, $$props.children, {}, null);
      $$payload.out += `${anchor_2}`;
      $$payload.out += `${anchor_1}</${tag}>`;
    }
  }
  $$payload.out += `${anchor}`;
  bind_props($$props, { class: className, tag });
  pop();
}
function LangTag($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "code",
    "highlighted",
    "languageName",
    "langtag",
    "$$props"
  ]);
  push(false);
  let code = $$props["code"];
  let highlighted = $$props["highlighted"];
  let languageName = value_or_fallback($$props["languageName"], "plaintext");
  let langtag = value_or_fallback($$props["langtag"], false);
  const anchor = create_anchor($$payload);
  $$payload.out += `<pre${spread_attributes(
    [
      { "data-language": languageName },
      $$restProps
    ],
    true,
    false,
    "svelte-1w9vok",
    {
      styles: null,
      classes: [langtag ? "langtag" : ""].filter(Boolean).join(" ")
    }
  )}><code${attr("class", ["hljs"].filter(Boolean).join(" "), false)}>${anchor}`;
  if (highlighted) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `${anchor_1}${highlighted}${anchor_1}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    $$payload.out += `${escape(code)}`;
  }
  $$payload.out += `${anchor}</code></pre>`;
  bind_props($$props, { code, highlighted, languageName, langtag });
  pop();
}
function Highlight($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["language", "code", "langtag", "$$props"]);
  push(false);
  let language = $$props["language"];
  let code = $$props["code"];
  let langtag = value_or_fallback($$props["langtag"], false);
  createEventDispatcher();
  let highlighted = "";
  {
    hljs.registerLanguage(language.name, language.register);
    highlighted = hljs.highlight(code, { language: language.name }).value;
  }
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  slot(
    $$payload,
    $$props.children,
    {
      get highlighted() {
        return highlighted;
      }
    },
    () => {
      const anchor_1 = create_anchor($$payload);
      $$payload.out += `${anchor_1}`;
      LangTag($$payload, spread_props([
        $$restProps,
        {
          languageName: language.name,
          langtag,
          highlighted,
          code
        }
      ]));
      $$payload.out += `${anchor_1}`;
    }
  );
  $$payload.out += `${anchor}`;
  bind_props($$props, { language, code, langtag });
  pop();
}
const javascript = { name: "javascript", register: javascript$2 };
const javascript$1 = javascript;
function Card_1($$payload, $$props) {
  push(false);
  let bookmark = $$props["bookmark"];
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Card($$payload, {
    class: "bg-gray-800 text-white",
    children: ($$payload2, $$slotProps) => {
      const anchor_1 = create_anchor($$payload2);
      const anchor_13 = create_anchor($$payload2);
      const anchor_26 = create_anchor($$payload2);
      $$payload2.out += `${anchor_1}`;
      Card_header($$payload2, {
        children: ($$payload3, $$slotProps2) => {
          const anchor_2 = create_anchor($$payload3);
          const anchor_3 = create_anchor($$payload3);
          const anchor_4 = create_anchor($$payload3);
          const anchor_5 = create_anchor($$payload3);
          const anchor_6 = create_anchor($$payload3);
          const anchor_7 = create_anchor($$payload3);
          const anchor_9 = create_anchor($$payload3);
          const anchor_11 = create_anchor($$payload3);
          $$payload3.out += `<div class="flex items-center justify-between"><div><div class="flex items-center gap-2">${anchor_2}`;
          Card_title($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `${escape(bookmark.title)}`;
            }
          });
          $$payload3.out += `${anchor_2} ${anchor_3}`;
          Card_description($$payload3, {
            class: "text-sm",
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Domain: ${escape(new URL(bookmark.url).host)}`;
            }
          });
          $$payload3.out += `${anchor_3}</div> ${anchor_4}`;
          Card_description($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Written by: React Team`;
            }
          });
          $$payload3.out += `${anchor_4} ${anchor_5}`;
          Card_description($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `URL: <a${attr("href", bookmark.url, false)}>${escape(bookmark.url)}</a>`;
            }
          });
          $$payload3.out += `${anchor_5} ${anchor_6}`;
          Card_description($$payload3, {
            children: ($$payload4, $$slotProps3) => {
              $$payload4.out += `Category: ${escape(bookmark.category)}`;
            }
          });
          $$payload3.out += `${anchor_6}</div> <div class="flex"><img alt="Screenshot" class="rounded-lg object-cover object-center" height="100" src="/placeholder.svg"${attr("style", { aspectRatio: "100/100", objectFit: "cover" }, false)} width="100"> <div class="ml-4 flex">${anchor_7}`;
          Button($$payload3, {
            size: "icon",
            variant: "ghost",
            children: ($$payload4, $$slotProps3) => {
              const anchor_8 = create_anchor($$payload4);
              $$payload4.out += `${anchor_8}`;
              Star($$payload4, { class: "h-4 w-4" });
              $$payload4.out += `${anchor_8} <span class="sr-only">Star/Favorite</span>`;
            }
          });
          $$payload3.out += `${anchor_7} ${anchor_9}`;
          Button($$payload3, {
            size: "icon",
            variant: "ghost",
            children: ($$payload4, $$slotProps3) => {
              const anchor_10 = create_anchor($$payload4);
              $$payload4.out += `${anchor_10}`;
              File_pen($$payload4, { class: "h-4 w-4" });
              $$payload4.out += `${anchor_10} <span class="sr-only">Edit</span>`;
            }
          });
          $$payload3.out += `${anchor_9} ${anchor_11}`;
          Button($$payload3, {
            size: "icon",
            variant: "ghost",
            children: ($$payload4, $$slotProps3) => {
              const anchor_12 = create_anchor($$payload4);
              $$payload4.out += `${anchor_12}`;
              Trash_2($$payload4, { class: "h-4 w-4" });
              $$payload4.out += `${anchor_12} <span class="sr-only">Delete</span>`;
            }
          });
          $$payload3.out += `${anchor_11}</div></div></div>`;
        }
      });
      $$payload2.out += `${anchor_1} ${anchor_13}`;
      Card_content($$payload2, {
        children: ($$payload3, $$slotProps2) => {
          const anchor_14 = create_anchor($$payload3);
          const anchor_15 = create_anchor($$payload3);
          const anchor_16 = create_anchor($$payload3);
          const anchor_17 = create_anchor($$payload3);
          const anchor_20 = create_anchor($$payload3);
          const anchor_21 = create_anchor($$payload3);
          const anchor_23 = create_anchor($$payload3);
          $$payload3.out += `<div class="markdown-body h-auto w-full rounded-sm border-gray-700 p-5">${anchor_14}`;
          SvelteMarkdown($$payload3, { source: bookmark.results });
          $$payload3.out += `${anchor_14}</div> ${anchor_15}`;
          if (bookmark.summary) {
            $$payload3.out += "<!--ssr:if:true-->";
            $$payload3.out += `<div><h3 class="text-lg font-bold">Summary</h3> <p class="text-sm text-gray-400">${escape(bookmark.summary)}</p></div>`;
          } else {
            $$payload3.out += "<!--ssr:if:false-->";
          }
          $$payload3.out += `${anchor_15} ${anchor_16}`;
          if (bookmark.description) {
            $$payload3.out += "<!--ssr:if:true-->";
            $$payload3.out += `<div><h3 class="mt-4 text-lg font-bold">Description</h3> <p class="text-sm text-gray-400">${escape(bookmark.description)}</p></div>`;
          } else {
            $$payload3.out += "<!--ssr:if:false-->";
          }
          $$payload3.out += `${anchor_16} ${anchor_17}`;
          if (bookmark.bulletPoints) {
            $$payload3.out += "<!--ssr:if:true-->";
            const anchor_18 = create_anchor($$payload3);
            const each_array = ensure_array_like(bookmark.bulletPoints);
            $$payload3.out += `<div><h3 class="mt-4 text-lg font-bold">Bullet Points</h3> <ul class="list-inside list-disc text-sm text-gray-400">${anchor_18}`;
            for (let $$index = 0; $$index < each_array.length; $$index++) {
              const bulletPoint = each_array[$$index];
              const anchor_19 = create_anchor($$payload3);
              $$payload3.out += `${anchor_19}<li>${escape(bulletPoint)}</li>${anchor_19}`;
            }
            $$payload3.out += `${anchor_18}</ul></div>`;
          } else {
            $$payload3.out += "<!--ssr:if:false-->";
          }
          $$payload3.out += `${anchor_17} ${anchor_20}`;
          if (bookmark.installationInstructions) {
            $$payload3.out += "<!--ssr:if:true-->";
            $$payload3.out += `<div><h3 class="mt-4 text-lg font-bold">Installation Instructions</h3> <p class="text-sm text-gray-400">${escape(bookmark.installationInstructions)}</p></div>`;
          } else {
            $$payload3.out += "<!--ssr:if:false-->";
          }
          $$payload3.out += `${anchor_20} ${anchor_21}`;
          if (bookmark.codeExamples) {
            $$payload3.out += "<!--ssr:if:true-->";
            const anchor_22 = create_anchor($$payload3);
            $$payload3.out += `<div><h3 class="mt-4 text-lg font-bold">Code Examples</h3> ${anchor_22}`;
            Highlight($$payload3, {
              language: javascript$1,
              code: bookmark.codeExamples
            });
            $$payload3.out += `${anchor_22}</div>`;
          } else {
            $$payload3.out += "<!--ssr:if:false-->";
          }
          $$payload3.out += `${anchor_21} ${anchor_23}`;
          if (bookmark.relatedLinks) {
            $$payload3.out += "<!--ssr:if:true-->";
            const anchor_24 = create_anchor($$payload3);
            const each_array_1 = ensure_array_like(bookmark.relatedLinks);
            $$payload3.out += `<div><h3 class="mt-4 text-lg font-bold">Related Links</h3> <ul class="list-inside list-disc text-sm text-gray-400">${anchor_24}`;
            for (let $$index_1 = 0; $$index_1 < each_array_1.length; $$index_1++) {
              const relatedLink = each_array_1[$$index_1];
              const anchor_25 = create_anchor($$payload3);
              $$payload3.out += `${anchor_25}<li><a class="underline"${attr("href", relatedLink, false)}></a></li>${anchor_25}`;
            }
            $$payload3.out += `${anchor_24}</ul></div>`;
          } else {
            $$payload3.out += "<!--ssr:if:false-->";
          }
          $$payload3.out += `${anchor_23}`;
        }
      });
      $$payload2.out += `${anchor_13} ${anchor_26}`;
      Card_footer($$payload2, {
        children: ($$payload3, $$slotProps2) => {
          const anchor_27 = create_anchor($$payload3);
          $$payload3.out += `<div class="flex w-full items-center justify-between"><div class="w-3/4">${anchor_27}`;
          if (bookmark.tags) {
            $$payload3.out += "<!--ssr:if:true-->";
            const anchor_28 = create_anchor($$payload3);
            const each_array_2 = ensure_array_like(bookmark.tags);
            $$payload3.out += `<div class="flex flex-wrap gap-2">${anchor_28}`;
            for (let $$index_2 = 0; $$index_2 < each_array_2.length; $$index_2++) {
              const tag = each_array_2[$$index_2];
              const anchor_29 = create_anchor($$payload3);
              const anchor_30 = create_anchor($$payload3);
              $$payload3.out += `${anchor_29}${anchor_30}`;
              Badge($$payload3, {
                class: "rounded-full",
                href: `#/${stringify(tag)}`,
                children: ($$payload4, $$slotProps3) => {
                  $$payload4.out += `#${escape(tag)}`;
                }
              });
              $$payload3.out += `${anchor_30}${anchor_29}`;
            }
            $$payload3.out += `${anchor_28}</div>`;
          } else {
            $$payload3.out += "<!--ssr:if:false-->";
          }
          $$payload3.out += `${anchor_27}</div> <div>Created on: ${escape(new Date(bookmark.ts.isoString).toLocaleDateString())}</div></div>`;
        }
      });
      $$payload2.out += `${anchor_26}`;
    }
  });
  $$payload.out += `${anchor}`;
  bind_props($$props, { bookmark });
  pop();
}
tv({
  base: "relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11",
  variants: {
    variant: {
      default: "bg-background text-foreground",
      destructive: "text-destructive border-destructive/50 dark:border-destructive [&>svg]:text-destructive text-destructive"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function _page($$payload, $$props) {
  push(false);
  let data = $$props["data"];
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  await_block(
    data.bookmark,
    () => {
      $$payload.out += `<p>Loading...</p>`;
    },
    (bookmark) => {
      const anchor_1 = create_anchor($$payload);
      $$payload.out += `<div>${anchor_1}`;
      Card_1($$payload, { bookmark });
      $$payload.out += `${anchor_1}</div>`;
    }
  );
  $$payload.out += `${anchor}`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
