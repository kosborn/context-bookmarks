import { c as create_anchor, p as pop, a as push, M as rest_props, N as value_or_fallback, O as spread_attributes, J as bind_props, L as sanitize_props, K as spread_props, s as slot, X as tick, d as store_get, u as unsubscribe_stores, V as VoidElements, R as ensure_array_like, Q as attr, S as stringify, e as escape, H as copy_payload, I as assign_payload, Y as store_set, Z as head } from "../../../chunks/index3.js";
import { n as noop, w as withGet, i as isHTMLElement, c as isFunction, e as executeCallbacks, d as addEventListener, f as isElement, s as styleToString$1, g as effect, u as useEscapeKeydown, h as isBrowser, j as addMeltEventListener, k as kbd } from "../../../chunks/github-markdown.js";
import { b as Badge, c as cn, I as Icon, B as Button, S as Star, f as flyAndScale, a as SvelteMarkdown } from "../../../chunks/SvelteMarkdown.js";
import { fql } from "fauna";
import { i as initializeSession, F as FAUNA, P as PUBLIC_CORBADO_PROJECT_ID } from "../../../chunks/index2.js";
import Corbado$1 from "@corbado/webcomponent";
import "@simplewebauthn/browser";
import { D as DEV } from "../../../chunks/prod-ssr.js";
import { d as derived, w as writable, a as readonly } from "../../../chunks/index4.js";
import "dequal";
import { c as createEventDispatcher, s as setContext, g as getContext } from "../../../chunks/main-client.js";
import { nanoid } from "nanoid/non-secure";
import { createFocusTrap as createFocusTrap$1 } from "focus-trap";
import "clsx";
import "../../../chunks/client.js";
import "just-clone";
import "ts-deepmerge";
import "devalue";
import "../../../chunks/index.js";
import "@mozilla/readability";
import TurndownService from "turndown";
import { get_encoding } from "tiktoken";
const dev = DEV;
const linear = (x) => x;
function fade(node, { delay = 0, duration = 400, easing = linear } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
function TagCloud($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  const anchor_1 = create_anchor($$payload);
  const anchor_2 = create_anchor($$payload);
  const anchor_3 = create_anchor($$payload);
  const anchor_4 = create_anchor($$payload);
  $$payload.out += `<div class="flex flex-wrap gap-2">${anchor}`;
  Badge($$payload, {
    class: "rounded-full",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `#React`;
    }
  });
  $$payload.out += `${anchor} ${anchor_1}`;
  Badge($$payload, {
    class: "rounded-full",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `#JavaScript`;
    }
  });
  $$payload.out += `${anchor_1} ${anchor_2}`;
  Badge($$payload, {
    class: "rounded-full",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `#Web Development`;
    }
  });
  $$payload.out += `${anchor_2} ${anchor_3}`;
  Badge($$payload, {
    class: "rounded-full",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `#Frontend`;
    }
  });
  $$payload.out += `${anchor_3} ${anchor_4}`;
  Badge($$payload, {
    class: "rounded-full",
    children: ($$payload2, $$slotProps) => {
      $$payload2.out += `#Documentation`;
    }
  });
  $$payload.out += `${anchor_4}</div>`;
  pop();
}
function Input($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "value", "$$props"]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  let value = value_or_fallback($$props["value"], void 0);
  $$payload.out += `<input${spread_attributes(
    [
      {
        "class": cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)
      },
      { "value": value },
      $$restProps
    ],
    true,
    false,
    ""
  )}>`;
  bind_props($$props, { class: className, value });
  pop();
}
function Chevron_right($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push(false);
  const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Icon($$payload, spread_props([
    { name: "chevron-right" },
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
function List_ordered($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push(false);
  const iconNode = [
    [
      "line",
      {
        "x1": "10",
        "x2": "21",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "10",
        "x2": "21",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "10",
        "x2": "21",
        "y1": "18",
        "y2": "18"
      }
    ],
    ["path", { "d": "M4 6h1v4" }],
    ["path", { "d": "M4 10h2" }],
    [
      "path",
      { "d": "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" }
    ]
  ];
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Icon($$payload, spread_props([
    { name: "list-ordered" },
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
function List($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push(false);
  const iconNode = [
    [
      "line",
      { "x1": "8", "x2": "21", "y1": "6", "y2": "6" }
    ],
    [
      "line",
      {
        "x1": "8",
        "x2": "21",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "8",
        "x2": "21",
        "y1": "18",
        "y2": "18"
      }
    ],
    [
      "line",
      {
        "x1": "3",
        "x2": "3.01",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "3",
        "x2": "3.01",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "3",
        "x2": "3.01",
        "y1": "18",
        "y2": "18"
      }
    ]
  ];
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Icon($$payload, spread_props([
    { name: "list" },
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
function Log_out($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push(false);
  const iconNode = [
    [
      "path",
      { "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }
    ],
    [
      "polyline",
      { "points": "16 17 21 12 16 7" }
    ],
    [
      "line",
      {
        "x1": "21",
        "x2": "9",
        "y1": "12",
        "y2": "12"
      }
    ]
  ];
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Icon($$payload, spread_props([
    { name: "log-out" },
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
function Plus_circle($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push(false);
  const iconNode = [
    [
      "circle",
      { "cx": "12", "cy": "12", "r": "10" }
    ],
    ["path", { "d": "M8 12h8" }],
    ["path", { "d": "M12 8v8" }]
  ];
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Icon($$payload, spread_props([
    { name: "plus-circle" },
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
function Search($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push(false);
  const iconNode = [
    [
      "circle",
      { "cx": "11", "cy": "11", "r": "8" }
    ],
    ["path", { "d": "m21 21-4.3-4.3" }]
  ];
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Icon($$payload, spread_props([
    { name: "search" },
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
function X($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  push(false);
  const iconNode = [
    ["path", { "d": "M18 6 6 18" }],
    ["path", { "d": "m6 6 12 12" }]
  ];
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Icon($$payload, spread_props([
    { name: "x" },
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
function SearchForm($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  const anchor_1 = create_anchor($$payload);
  $$payload.out += `<form class="relative" method="POST" action="/test">${anchor}`;
  Search($$payload, {
    class: "absolute left-2.5 top-2.5 h-4 w-4 text-gray-300"
  });
  $$payload.out += `${anchor} ${anchor_1}`;
  Input($$payload, {
    class: "w-full appearance-none bg-white pl-8 shadow-none",
    placeholder: "Filter bookmarks by tags...",
    type: "search",
    name: "search"
  });
  $$payload.out += `${anchor_1}</form>`;
  pop();
}
function last(array) {
  return array[array.length - 1];
}
function lightable(value) {
  function subscribe(run) {
    run(value);
    return () => {
    };
  }
  return { subscribe };
}
const hiddenAction = (obj) => {
  return new Proxy(obj, {
    get(target, prop, receiver) {
      return Reflect.get(target, prop, receiver);
    },
    ownKeys(target) {
      return Reflect.ownKeys(target).filter((key) => key !== "action");
    }
  });
};
const isFunctionWithParams = (fn) => {
  return typeof fn === "function";
};
function builder(name2, args) {
  const { stores, action, returned } = args ?? {};
  const derivedStore = (() => {
    if (stores && returned) {
      return derived(stores, (values) => {
        const result = returned(values);
        if (isFunctionWithParams(result)) {
          const fn = (...args2) => {
            return hiddenAction({
              ...result(...args2),
              [`data-melt-${name2}`]: "",
              action: action ?? noop
            });
          };
          fn.action = action ?? noop;
          return fn;
        }
        return hiddenAction({
          ...result,
          [`data-melt-${name2}`]: "",
          action: action ?? noop
        });
      });
    } else {
      const returnedFn = returned;
      const result = returnedFn?.();
      if (isFunctionWithParams(result)) {
        const resultFn = (...args2) => {
          return hiddenAction({
            ...result(...args2),
            [`data-melt-${name2}`]: "",
            action: action ?? noop
          });
        };
        resultFn.action = action ?? noop;
        return lightable(resultFn);
      }
      return lightable(hiddenAction({
        ...result,
        [`data-melt-${name2}`]: "",
        action: action ?? noop
      }));
    }
  })();
  const actionFn = action ?? (() => {
  });
  actionFn.subscribe = derivedStore.subscribe;
  return actionFn;
}
function createElHelpers(prefix) {
  const name2 = (part) => part ? `${prefix}-${part}` : prefix;
  const attribute = (part) => `data-melt-${prefix}${part ? `-${part}` : ""}`;
  const selector = (part) => `[data-melt-${prefix}${part ? `-${part}` : ""}]`;
  const getEl = (part) => document.querySelector(selector(part));
  return {
    name: name2,
    attribute,
    selector,
    getEl
  };
}
function omit(obj, ...keys) {
  const result = {};
  for (const key of Object.keys(obj)) {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
const overridable = (_store, onChange) => {
  const store = withGet(_store);
  const update = (updater, sideEffect) => {
    store.update((curr) => {
      const next = updater(curr);
      let res = next;
      if (onChange) {
        res = onChange({ curr, next });
      }
      sideEffect?.(res);
      return res;
    });
  };
  const set = (curr) => {
    update(() => curr);
  };
  return {
    ...store,
    update,
    set
  };
};
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function generateId() {
  return nanoid(10);
}
function generateIds(args) {
  return args.reduce((acc, curr) => {
    acc[curr] = generateId();
    return acc;
  }, {});
}
const isDom = () => typeof window !== "undefined";
function getPlatform() {
  const agent = navigator.userAgentData;
  return agent?.platform ?? navigator.platform;
}
const pt = (v) => isDom() && v.test(getPlatform().toLowerCase());
const isTouchDevice = () => isDom() && !!navigator.maxTouchPoints;
const isMac = () => pt(/^mac/) && !isTouchDevice();
const isApple = () => pt(/mac|iphone|ipad|ipod/i);
const isIos = () => isApple() && !isMac();
const LOCK_CLASSNAME = "data-melt-scroll-lock";
function assignStyle(el, style) {
  if (!el)
    return;
  const previousStyle = el.style.cssText;
  Object.assign(el.style, style);
  return () => {
    el.style.cssText = previousStyle;
  };
}
function setCSSProperty(el, property, value) {
  if (!el)
    return;
  const previousValue = el.style.getPropertyValue(property);
  el.style.setProperty(property, value);
  return () => {
    if (previousValue) {
      el.style.setProperty(property, previousValue);
    } else {
      el.style.removeProperty(property);
    }
  };
}
function getPaddingProperty(documentElement) {
  const documentLeft = documentElement.getBoundingClientRect().left;
  const scrollbarX = Math.round(documentLeft) + documentElement.scrollLeft;
  return scrollbarX ? "paddingLeft" : "paddingRight";
}
function removeScroll(_document) {
  const doc = _document ?? document;
  const win = doc.defaultView ?? window;
  const { documentElement, body } = doc;
  const locked = body.hasAttribute(LOCK_CLASSNAME);
  if (locked)
    return noop;
  body.setAttribute(LOCK_CLASSNAME, "");
  const scrollbarWidth = win.innerWidth - documentElement.clientWidth;
  const setScrollbarWidthProperty = () => setCSSProperty(documentElement, "--scrollbar-width", `${scrollbarWidth}px`);
  const paddingProperty = getPaddingProperty(documentElement);
  const scrollbarSidePadding = win.getComputedStyle(body)[paddingProperty];
  const setStyle = () => assignStyle(body, {
    overflow: "hidden",
    [paddingProperty]: `calc(${scrollbarSidePadding} + ${scrollbarWidth}px)`
  });
  const setIOSStyle = () => {
    const { scrollX, scrollY, visualViewport } = win;
    const offsetLeft = visualViewport?.offsetLeft ?? 0;
    const offsetTop = visualViewport?.offsetTop ?? 0;
    const restoreStyle = assignStyle(body, {
      position: "fixed",
      overflow: "hidden",
      top: `${-(scrollY - Math.floor(offsetTop))}px`,
      left: `${-(scrollX - Math.floor(offsetLeft))}px`,
      right: "0",
      [paddingProperty]: `calc(${scrollbarSidePadding} + ${scrollbarWidth}px)`
    });
    return () => {
      restoreStyle?.();
      win.scrollTo(scrollX, scrollY);
    };
  };
  const cleanups = [setScrollbarWidthProperty(), isIos() ? setIOSStyle() : setStyle()];
  return () => {
    cleanups.forEach((fn) => fn?.());
    body.removeAttribute(LOCK_CLASSNAME);
  };
}
function toWritableStores(properties) {
  const result = {};
  Object.keys(properties).forEach((key) => {
    const propertyKey = key;
    const value = properties[propertyKey];
    result[propertyKey] = withGet(writable(value));
  });
  return result;
}
function getPortalParent(node) {
  let parent = node.parentElement;
  while (isHTMLElement(parent) && !parent.hasAttribute("data-portal")) {
    parent = parent.parentElement;
  }
  return parent || "body";
}
function getPortalDestination(node, portalProp) {
  const portalParent = getPortalParent(node);
  if (portalProp !== void 0)
    return portalProp;
  if (portalParent === "body")
    return document.body;
  return null;
}
async function handleFocus(args) {
  const { prop, defaultEl } = args;
  await Promise.all([sleep(1), tick]);
  if (prop === void 0) {
    defaultEl?.focus();
    return;
  }
  const returned = isFunction(prop) ? prop(defaultEl) : prop;
  if (typeof returned === "string") {
    const el = document.querySelector(returned);
    if (!isHTMLElement(el))
      return;
    el.focus();
  } else if (isHTMLElement(returned)) {
    returned.focus();
  }
}
function createFocusTrap(config = {}) {
  let trap;
  const { immediate, ...focusTrapOptions } = config;
  const hasFocus = writable(false);
  const isPaused = writable(false);
  const activate = (opts) => trap?.activate(opts);
  const deactivate = (opts) => {
    trap?.deactivate(opts);
  };
  const pause = () => {
    if (trap) {
      trap.pause();
      isPaused.set(true);
    }
  };
  const unpause = () => {
    if (trap) {
      trap.unpause();
      isPaused.set(false);
    }
  };
  const useFocusTrap = (node) => {
    trap = createFocusTrap$1(node, {
      ...focusTrapOptions,
      onActivate() {
        hasFocus.set(true);
        config.onActivate?.();
      },
      onDeactivate() {
        hasFocus.set(false);
        config.onDeactivate?.();
      }
    });
    if (immediate) {
      activate();
    }
    return {
      destroy() {
        deactivate();
        trap = void 0;
      }
    };
  };
  return {
    useFocusTrap,
    hasFocus: readonly(hasFocus),
    isPaused: readonly(isPaused),
    activate,
    deactivate,
    pause,
    unpause
  };
}
const usePortal = (el, target = "body") => {
  let targetEl;
  if (!isHTMLElement(target) && typeof target !== "string") {
    return {
      destroy: noop
    };
  }
  async function update(newTarget) {
    target = newTarget;
    if (typeof target === "string") {
      targetEl = document.querySelector(target);
      if (targetEl === null) {
        await tick();
        targetEl = document.querySelector(target);
      }
      if (targetEl === null) {
        throw new Error(`No element found matching css selector: "${target}"`);
      }
    } else if (target instanceof HTMLElement) {
      targetEl = target;
    } else {
      throw new TypeError(`Unknown portal target type: ${target === null ? "null" : typeof target}. Allowed types: string (CSS selector) or HTMLElement.`);
    }
    el.dataset.portal = "";
    targetEl.appendChild(el);
    el.hidden = false;
  }
  function destroy() {
    el.remove();
  }
  update(target);
  return {
    update,
    destroy
  };
};
function useInteractOutside(node, config) {
  let unsub = noop;
  function update(config2) {
    unsub();
    const { onInteractOutside, onInteractOutsideStart, enabled } = config2;
    if (!enabled)
      return;
    let isPointerDown = false;
    let ignoreEmulatedMouseEvents = false;
    function onPointerDown(e) {
      if (onInteractOutside && isValidEvent(e, node)) {
        onInteractOutsideStart?.(e);
      }
      isPointerDown = true;
    }
    function triggerInteractOutside(e) {
      onInteractOutside?.(e);
    }
    const documentObj = getOwnerDocument(node);
    if (typeof PointerEvent !== "undefined") {
      const onPointerUp = (e) => {
        if (isPointerDown && isValidEvent(e, node)) {
          triggerInteractOutside(e);
        }
        isPointerDown = false;
      };
      unsub = executeCallbacks(addEventListener(documentObj, "pointerdown", onPointerDown, true), addEventListener(documentObj, "pointerup", onPointerUp, true));
    } else {
      const onMouseUp = (e) => {
        if (ignoreEmulatedMouseEvents) {
          ignoreEmulatedMouseEvents = false;
        } else if (isPointerDown && isValidEvent(e, node)) {
          triggerInteractOutside(e);
        }
        isPointerDown = false;
      };
      const onTouchEnd = (e) => {
        ignoreEmulatedMouseEvents = true;
        if (isPointerDown && isValidEvent(e, node)) {
          triggerInteractOutside(e);
        }
        isPointerDown = false;
      };
      unsub = executeCallbacks(addEventListener(documentObj, "mousedown", onPointerDown, true), addEventListener(documentObj, "mouseup", onMouseUp, true), addEventListener(documentObj, "touchstart", onPointerDown, true), addEventListener(documentObj, "touchend", onTouchEnd, true));
    }
  }
  update(config);
  return {
    update,
    destroy: unsub
  };
}
function isValidEvent(e, node) {
  if ("button" in e && e.button > 0)
    return false;
  const target = e.target;
  if (!isElement(target))
    return false;
  const ownerDocument = target.ownerDocument;
  if (!ownerDocument || !ownerDocument.documentElement.contains(target)) {
    return false;
  }
  return node && !node.contains(target);
}
function getOwnerDocument(el) {
  return el?.ownerDocument ?? document;
}
const visibleModals = [];
function useModal(node, config) {
  let unsubInteractOutside = noop;
  function removeNodeFromVisibleModals() {
    const index = visibleModals.indexOf(node);
    if (index >= 0) {
      visibleModals.splice(index, 1);
    }
  }
  function update(config2) {
    unsubInteractOutside();
    const { open, onClose, shouldCloseOnInteractOutside, closeOnInteractOutside } = config2;
    sleep(100).then(() => {
      if (open) {
        visibleModals.push(node);
      } else {
        removeNodeFromVisibleModals();
      }
    });
    function isLastModal() {
      return last(visibleModals) === node;
    }
    function closeModal() {
      if (isLastModal() && onClose) {
        onClose();
      }
    }
    function onInteractOutsideStart(e) {
      const target = e.target;
      if (!isElement(target))
        return;
      if (target && isLastModal()) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
      }
    }
    function onInteractOutside(e) {
      if (shouldCloseOnInteractOutside?.(e) && isLastModal()) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        closeModal();
      }
    }
    unsubInteractOutside = useInteractOutside(node, {
      onInteractOutsideStart,
      onInteractOutside: closeOnInteractOutside ? onInteractOutside : void 0,
      enabled: open
    }).destroy;
  }
  update(config);
  return {
    update,
    destroy() {
      removeNodeFromVisibleModals();
      unsubInteractOutside();
    }
  };
}
const { name: name$1 } = createElHelpers("dialog");
const defaults$1 = {
  preventScroll: true,
  closeOnEscape: true,
  closeOnOutsideClick: true,
  role: "dialog",
  defaultOpen: false,
  portal: "body",
  forceVisible: false,
  openFocus: void 0,
  closeFocus: void 0,
  onOutsideClick: void 0
};
const dialogIdParts = ["content", "title", "description"];
function createDialog(props) {
  const withDefaults = { ...defaults$1, ...props };
  const options = toWritableStores(omit(withDefaults, "ids"));
  const { preventScroll, closeOnEscape, closeOnOutsideClick, role, portal, forceVisible, openFocus, closeFocus, onOutsideClick } = options;
  const activeTrigger = withGet.writable(null);
  const ids = toWritableStores({
    ...generateIds(dialogIdParts),
    ...withDefaults.ids
  });
  const openWritable = withDefaults.open ?? writable(withDefaults.defaultOpen);
  const open = overridable(openWritable, withDefaults?.onOpenChange);
  const isVisible = derived([open, forceVisible], ([$open, $forceVisible]) => {
    return $open || $forceVisible;
  });
  let unsubScroll = noop;
  function handleOpen(e) {
    const el = e.currentTarget;
    const triggerEl = e.currentTarget;
    if (!isHTMLElement(el) || !isHTMLElement(triggerEl))
      return;
    open.set(true);
    activeTrigger.set(triggerEl);
  }
  function handleClose() {
    open.set(false);
    handleFocus({
      prop: closeFocus.get(),
      defaultEl: activeTrigger.get()
    });
  }
  const trigger = builder(name$1("trigger"), {
    stores: [open],
    returned: ([$open]) => {
      return {
        "aria-haspopup": "dialog",
        "aria-expanded": $open,
        type: "button"
      };
    },
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", (e) => {
        handleOpen(e);
      }), addMeltEventListener(node, "keydown", (e) => {
        if (e.key !== kbd.ENTER && e.key !== kbd.SPACE)
          return;
        e.preventDefault();
        handleOpen(e);
      }));
      return {
        destroy: unsub
      };
    }
  });
  const overlay = builder(name$1("overlay"), {
    stores: [isVisible],
    returned: ([$isVisible]) => {
      return {
        hidden: $isVisible ? void 0 : true,
        tabindex: -1,
        style: styleToString$1({
          display: $isVisible ? void 0 : "none"
        }),
        "aria-hidden": true,
        "data-state": $isVisible ? "open" : "closed"
      };
    },
    action: (node) => {
      let unsubEscapeKeydown = noop;
      if (closeOnEscape.get()) {
        const escapeKeydown = useEscapeKeydown(node, {
          handler: () => {
            handleClose();
          }
        });
        if (escapeKeydown && escapeKeydown.destroy) {
          unsubEscapeKeydown = escapeKeydown.destroy;
        }
      }
      return {
        destroy() {
          unsubEscapeKeydown();
        }
      };
    }
  });
  const content = builder(name$1("content"), {
    stores: [isVisible, ids.content, ids.description, ids.title],
    returned: ([$isVisible, $contentId, $descriptionId, $titleId]) => {
      return {
        id: $contentId,
        role: role.get(),
        "aria-describedby": $descriptionId,
        "aria-labelledby": $titleId,
        "aria-modal": $isVisible ? "true" : void 0,
        "data-state": $isVisible ? "open" : "closed",
        tabindex: -1,
        hidden: $isVisible ? void 0 : true,
        style: styleToString$1({
          display: $isVisible ? void 0 : "none"
        })
      };
    },
    action: (node) => {
      let activate = noop;
      let deactivate = noop;
      const destroy = executeCallbacks(effect([open], ([$open]) => {
        if (!$open)
          return;
        const focusTrap = createFocusTrap({
          immediate: false,
          escapeDeactivates: true,
          clickOutsideDeactivates: true,
          returnFocusOnDeactivate: false,
          fallbackFocus: node
        });
        activate = focusTrap.activate;
        deactivate = focusTrap.deactivate;
        const ac = focusTrap.useFocusTrap(node);
        if (ac && ac.destroy) {
          return ac.destroy;
        } else {
          return focusTrap.deactivate;
        }
      }), effect([closeOnOutsideClick, open], ([$closeOnOutsideClick, $open]) => {
        return useModal(node, {
          open: $open,
          closeOnInteractOutside: $closeOnOutsideClick,
          onClose() {
            handleClose();
          },
          shouldCloseOnInteractOutside(e) {
            onOutsideClick.get()?.(e);
            if (e.defaultPrevented)
              return false;
            return true;
          }
        }).destroy;
      }), effect([closeOnEscape], ([$closeOnEscape]) => {
        if (!$closeOnEscape)
          return noop;
        const escapeKeydown = useEscapeKeydown(node, {
          handler: () => {
            handleClose();
          }
        });
        if (escapeKeydown && escapeKeydown.destroy) {
          return escapeKeydown.destroy;
        }
        return noop;
      }), effect([isVisible], ([$isVisible]) => {
        tick().then(() => {
          if (!$isVisible) {
            deactivate();
          } else {
            activate();
          }
        });
      }));
      return {
        destroy: () => {
          unsubScroll();
          destroy();
        }
      };
    }
  });
  const portalled = builder(name$1("portalled"), {
    stores: portal,
    returned: ($portal) => ({
      "data-portal": $portal ? "" : void 0
    }),
    action: (node) => {
      const unsubPortal = effect([portal], ([$portal]) => {
        if (!$portal)
          return noop;
        const portalDestination = getPortalDestination(node, $portal);
        if (portalDestination === null)
          return noop;
        const portalAction = usePortal(node, portalDestination);
        if (portalAction && portalAction.destroy) {
          return portalAction.destroy;
        } else {
          return noop;
        }
      });
      return {
        destroy() {
          unsubPortal();
        }
      };
    }
  });
  const title = builder(name$1("title"), {
    stores: [ids.title],
    returned: ([$titleId]) => ({
      id: $titleId
    })
  });
  const description = builder(name$1("description"), {
    stores: [ids.description],
    returned: ([$descriptionId]) => ({
      id: $descriptionId
    })
  });
  const close = builder(name$1("close"), {
    returned: () => ({
      type: "button"
    }),
    action: (node) => {
      const unsub = executeCallbacks(addMeltEventListener(node, "click", () => {
        handleClose();
      }), addMeltEventListener(node, "keydown", (e) => {
        if (e.key !== kbd.SPACE && e.key !== kbd.ENTER)
          return;
        e.preventDefault();
        handleClose();
      }));
      return {
        destroy: unsub
      };
    }
  });
  effect([open, preventScroll], ([$open, $preventScroll]) => {
    if (!isBrowser)
      return;
    if ($preventScroll && $open)
      unsubScroll = removeScroll();
    if ($open) {
      const contentEl = document.getElementById(ids.content.get());
      handleFocus({ prop: openFocus.get(), defaultEl: contentEl });
    }
    return () => {
      if (!forceVisible.get()) {
        unsubScroll();
      }
    };
  });
  return {
    ids,
    elements: {
      content,
      trigger,
      title,
      description,
      overlay,
      close,
      portalled
    },
    states: {
      open
    },
    options
  };
}
const defaults = {
  defaultValue: 0,
  max: 100
};
const { name } = createElHelpers("progress");
const createProgress = (props) => {
  const withDefaults = { ...defaults, ...props };
  const options = toWritableStores(omit(withDefaults, "value"));
  const { max } = options;
  const valueWritable = withDefaults.value ?? writable(withDefaults.defaultValue);
  const value = overridable(valueWritable, withDefaults?.onValueChange);
  const root = builder(name(), {
    stores: [value, max],
    returned: ([$value, $max]) => {
      return {
        value: $value,
        max: $max,
        role: "meter",
        "aria-valuemin": 0,
        "aria-valuemax": $max,
        "aria-valuenow": $value,
        "data-value": $value,
        "data-state": $value === null ? "indeterminate" : $value === $max ? "complete" : "loading",
        "data-max": $max
      };
    }
  });
  return {
    elements: {
      root
    },
    states: {
      value
    },
    options
  };
};
function createBitAttrs(bit, parts) {
  const attrs = {};
  parts.forEach((part) => {
    attrs[part] = {
      [`data-${bit}-${part}`]: ""
    };
  });
  return (part) => attrs[part];
}
function createDispatcher() {
  const dispatch = createEventDispatcher();
  return (e) => {
    const { originalEvent } = e.detail;
    const { cancelable } = e;
    const type = originalEvent.type;
    const shouldContinue = dispatch(type, { originalEvent, currentTarget: originalEvent.currentTarget }, { cancelable });
    if (!shouldContinue) {
      e.preventDefault();
    }
  };
}
function removeUndefined(obj) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (value !== void 0) {
      result[key] = value;
    }
  }
  return result;
}
function getOptionUpdater(options) {
  return function(key, value) {
    if (value === void 0)
      return;
    const store = options[key];
    if (store) {
      store.set(value);
    }
  };
}
function getDialogData() {
  const NAME = "dialog";
  const PARTS = [
    "close",
    "content",
    "description",
    "overlay",
    "portal",
    "title",
    "trigger"
  ];
  return {
    NAME,
    PARTS
  };
}
function setCtx$1(props) {
  const { NAME, PARTS } = getDialogData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const dialog = {
    ...createDialog({ ...removeUndefined(props), role: "dialog", forceVisible: true }),
    getAttrs
  };
  setContext(NAME, dialog);
  return {
    ...dialog,
    updateOption: getOptionUpdater(dialog.options)
  };
}
function getCtx() {
  const { NAME } = getDialogData();
  return getContext(NAME);
}
function Dialog($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  let preventScroll = value_or_fallback($$props["preventScroll"], void 0);
  let closeOnEscape = value_or_fallback($$props["closeOnEscape"], void 0);
  let closeOnOutsideClick = value_or_fallback($$props["closeOnOutsideClick"], void 0);
  let portal = value_or_fallback($$props["portal"], void 0);
  let open = value_or_fallback($$props["open"], void 0);
  let onOpenChange = value_or_fallback($$props["onOpenChange"], void 0);
  let openFocus = value_or_fallback($$props["openFocus"], void 0);
  let closeFocus = value_or_fallback($$props["closeFocus"], void 0);
  let onOutsideClick = value_or_fallback($$props["onOutsideClick"], void 0);
  const {
    states: { open: localOpen },
    updateOption,
    ids
  } = setCtx$1({
    closeOnEscape,
    preventScroll,
    closeOnOutsideClick,
    portal,
    forceVisible: true,
    defaultOpen: open,
    openFocus,
    closeFocus,
    onOutsideClick,
    onOpenChange: ({ next }) => {
      if (open !== next) {
        onOpenChange?.(next);
        open = next;
      }
      return next;
    }
  });
  const idValues = derived([ids.content, ids.description, ids.title], ([$contentId, $descriptionId, $titleId]) => ({
    content: $contentId,
    description: $descriptionId,
    title: $titleId
  }));
  open !== void 0 && localOpen.set(open);
  updateOption("preventScroll", preventScroll);
  updateOption("closeOnEscape", closeOnEscape);
  updateOption("closeOnOutsideClick", closeOnOutsideClick);
  updateOption("portal", portal);
  updateOption("openFocus", openFocus);
  updateOption("closeFocus", closeFocus);
  updateOption("onOutsideClick", onOutsideClick);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  slot(
    $$payload,
    $$props.children,
    {
      get ids() {
        return store_get($$store_subs, "$idValues", idValues);
      }
    },
    null
  );
  $$payload.out += `${anchor}`;
  unsubscribe_stores($$store_subs);
  bind_props($$props, {
    preventScroll,
    closeOnEscape,
    closeOnOutsideClick,
    portal,
    open,
    onOpenChange,
    openFocus,
    closeFocus,
    onOutsideClick
  });
  pop();
}
function Dialog_title$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["level", "asChild", "id", "el", "$$props"]);
  push(false);
  const $$store_subs = {};
  let builder2;
  let level = value_or_fallback($$props["level"], "h2");
  let asChild = value_or_fallback($$props["asChild"], false);
  let id = value_or_fallback($$props["id"], void 0);
  let el = value_or_fallback($$props["el"], void 0);
  const { elements: { title }, ids, getAttrs } = getCtx();
  const attrs = getAttrs("title");
  if (id) {
    ids.title.set(id);
  }
  builder2 = store_get($$store_subs, "$title", title);
  Object.assign(builder2, attrs);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  if (asChild) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `${anchor_1}`;
    slot(
      $$payload,
      $$props.children,
      {
        get builder() {
          return builder2;
        }
      },
      null
    );
    $$payload.out += `${anchor_1}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `${anchor_2}`;
    if (level) {
      const anchor_3 = create_anchor($$payload);
      $$payload.out += `<${level}${spread_attributes([builder2, $$restProps], true, false, "")}>`;
      if (!VoidElements.has(level)) {
        $$payload.out += `${anchor_3}`;
        const anchor_4 = create_anchor($$payload);
        $$payload.out += `${anchor_4}`;
        slot(
          $$payload,
          $$props.children,
          {
            get builder() {
              return builder2;
            }
          },
          null
        );
        $$payload.out += `${anchor_4}`;
        $$payload.out += `${anchor_3}</${level}>`;
      }
    }
    $$payload.out += `${anchor_2}`;
  }
  $$payload.out += `${anchor}`;
  unsubscribe_stores($$store_subs);
  bind_props($$props, { level, asChild, id, el });
  pop();
}
function Dialog_close$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["asChild", "el", "$$props"]);
  push(false);
  const $$store_subs = {};
  let builder2;
  let asChild = value_or_fallback($$props["asChild"], false);
  let el = value_or_fallback($$props["el"], void 0);
  const { elements: { close }, getAttrs } = getCtx();
  createDispatcher();
  const attrs = getAttrs("close");
  builder2 = store_get($$store_subs, "$close", close);
  Object.assign(builder2, attrs);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  if (asChild) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `${anchor_1}`;
    slot(
      $$payload,
      $$props.children,
      {
        get builder() {
          return builder2;
        }
      },
      null
    );
    $$payload.out += `${anchor_1}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `<button${spread_attributes([builder2, { "type": "button" }, $$restProps], true, false, "")}>${anchor_2}`;
    slot(
      $$payload,
      $$props.children,
      {
        get builder() {
          return builder2;
        }
      },
      null
    );
    $$payload.out += `${anchor_2}</button>`;
  }
  $$payload.out += `${anchor}`;
  unsubscribe_stores($$store_subs);
  bind_props($$props, { asChild, el });
  pop();
}
function Dialog_portal$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["asChild", "el", "$$props"]);
  push(false);
  const $$store_subs = {};
  let builder2;
  let asChild = value_or_fallback($$props["asChild"], false);
  let el = value_or_fallback($$props["el"], void 0);
  const { elements: { portalled }, getAttrs } = getCtx();
  const attrs = getAttrs("portal");
  builder2 = store_get($$store_subs, "$portalled", portalled);
  Object.assign(builder2, attrs);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  if (asChild) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `${anchor_1}`;
    slot(
      $$payload,
      $$props.children,
      {
        get builder() {
          return builder2;
        }
      },
      null
    );
    $$payload.out += `${anchor_1}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `<div${spread_attributes([builder2, $$restProps], true, false, "")}>${anchor_2}`;
    slot(
      $$payload,
      $$props.children,
      {
        get builder() {
          return builder2;
        }
      },
      null
    );
    $$payload.out += `${anchor_2}</div>`;
  }
  $$payload.out += `${anchor}`;
  unsubscribe_stores($$store_subs);
  bind_props($$props, { asChild, el });
  pop();
}
function Dialog_content$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "id",
    "el",
    "$$props"
  ]);
  push(false);
  const $$store_subs = {};
  let builder2;
  let transition = value_or_fallback($$props["transition"], void 0);
  let transitionConfig = value_or_fallback($$props["transitionConfig"], void 0);
  let inTransition = value_or_fallback($$props["inTransition"], void 0);
  let inTransitionConfig = value_or_fallback($$props["inTransitionConfig"], void 0);
  let outTransition = value_or_fallback($$props["outTransition"], void 0);
  let outTransitionConfig = value_or_fallback($$props["outTransitionConfig"], void 0);
  let asChild = value_or_fallback($$props["asChild"], false);
  let id = value_or_fallback($$props["id"], void 0);
  let el = value_or_fallback($$props["el"], void 0);
  const {
    elements: { content },
    states: { open },
    ids,
    getAttrs
  } = getCtx();
  const attrs = getAttrs("content");
  if (id) {
    ids.content.set(id);
  }
  builder2 = store_get($$store_subs, "$content", content);
  Object.assign(builder2, attrs);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  if (asChild && store_get($$store_subs, "$open", open)) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `${anchor_1}`;
    slot(
      $$payload,
      $$props.children,
      {
        get builder() {
          return builder2;
        }
      },
      null
    );
    $$payload.out += `${anchor_1}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `${anchor_2}`;
    if (transition && store_get($$store_subs, "$open", open)) {
      $$payload.out += "<!--ssr:if:true-->";
      const anchor_3 = create_anchor($$payload);
      $$payload.out += `<div${spread_attributes([builder2, $$restProps], true, false, "")}>${anchor_3}`;
      slot(
        $$payload,
        $$props.children,
        {
          get builder() {
            return builder2;
          }
        },
        null
      );
      $$payload.out += `${anchor_3}</div>`;
    } else {
      $$payload.out += "<!--ssr:if:false-->";
      const anchor_4 = create_anchor($$payload);
      $$payload.out += `${anchor_4}`;
      if (inTransition && outTransition && store_get($$store_subs, "$open", open)) {
        $$payload.out += "<!--ssr:if:true-->";
        const anchor_5 = create_anchor($$payload);
        $$payload.out += `<div${spread_attributes([builder2, $$restProps], true, false, "")}>${anchor_5}`;
        slot(
          $$payload,
          $$props.children,
          {
            get builder() {
              return builder2;
            }
          },
          null
        );
        $$payload.out += `${anchor_5}</div>`;
      } else {
        $$payload.out += "<!--ssr:if:false-->";
        const anchor_6 = create_anchor($$payload);
        $$payload.out += `${anchor_6}`;
        if (inTransition && store_get($$store_subs, "$open", open)) {
          $$payload.out += "<!--ssr:if:true-->";
          const anchor_7 = create_anchor($$payload);
          $$payload.out += `<div${spread_attributes([builder2, $$restProps], true, false, "")}>${anchor_7}`;
          slot(
            $$payload,
            $$props.children,
            {
              get builder() {
                return builder2;
              }
            },
            null
          );
          $$payload.out += `${anchor_7}</div>`;
        } else {
          $$payload.out += "<!--ssr:if:false-->";
          const anchor_8 = create_anchor($$payload);
          $$payload.out += `${anchor_8}`;
          if (outTransition && store_get($$store_subs, "$open", open)) {
            $$payload.out += "<!--ssr:if:true-->";
            const anchor_9 = create_anchor($$payload);
            $$payload.out += `<div${spread_attributes([builder2, $$restProps], true, false, "")}>${anchor_9}`;
            slot(
              $$payload,
              $$props.children,
              {
                get builder() {
                  return builder2;
                }
              },
              null
            );
            $$payload.out += `${anchor_9}</div>`;
          } else {
            $$payload.out += "<!--ssr:if:false-->";
            const anchor_10 = create_anchor($$payload);
            $$payload.out += `${anchor_10}`;
            if (store_get($$store_subs, "$open", open)) {
              $$payload.out += "<!--ssr:if:true-->";
              const anchor_11 = create_anchor($$payload);
              $$payload.out += `<div${spread_attributes([builder2, $$restProps], true, false, "")}>${anchor_11}`;
              slot(
                $$payload,
                $$props.children,
                {
                  get builder() {
                    return builder2;
                  }
                },
                null
              );
              $$payload.out += `${anchor_11}</div>`;
            } else {
              $$payload.out += "<!--ssr:if:false-->";
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
  unsubscribe_stores($$store_subs);
  bind_props($$props, {
    transition,
    transitionConfig,
    inTransition,
    inTransitionConfig,
    outTransition,
    outTransitionConfig,
    asChild,
    id,
    el
  });
  pop();
}
function Dialog_overlay$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "transition",
    "transitionConfig",
    "inTransition",
    "inTransitionConfig",
    "outTransition",
    "outTransitionConfig",
    "asChild",
    "el",
    "$$props"
  ]);
  push(false);
  const $$store_subs = {};
  let builder2;
  let transition = value_or_fallback($$props["transition"], void 0);
  let transitionConfig = value_or_fallback($$props["transitionConfig"], void 0);
  let inTransition = value_or_fallback($$props["inTransition"], void 0);
  let inTransitionConfig = value_or_fallback($$props["inTransitionConfig"], void 0);
  let outTransition = value_or_fallback($$props["outTransition"], void 0);
  let outTransitionConfig = value_or_fallback($$props["outTransitionConfig"], void 0);
  let asChild = value_or_fallback($$props["asChild"], false);
  let el = value_or_fallback($$props["el"], void 0);
  const {
    elements: { overlay },
    states: { open },
    getAttrs
  } = getCtx();
  const attrs = getAttrs("overlay");
  builder2 = store_get($$store_subs, "$overlay", overlay);
  Object.assign(builder2, attrs);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  if (asChild && store_get($$store_subs, "$open", open)) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `${anchor_1}`;
    slot(
      $$payload,
      $$props.children,
      {
        get builder() {
          return builder2;
        }
      },
      null
    );
    $$payload.out += `${anchor_1}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `${anchor_2}`;
    if (transition && store_get($$store_subs, "$open", open)) {
      $$payload.out += "<!--ssr:if:true-->";
      $$payload.out += `<div${spread_attributes([builder2, $$restProps], true, false, "")}></div>`;
    } else {
      $$payload.out += "<!--ssr:if:false-->";
      const anchor_3 = create_anchor($$payload);
      $$payload.out += `${anchor_3}`;
      if (inTransition && outTransition && store_get($$store_subs, "$open", open)) {
        $$payload.out += "<!--ssr:if:true-->";
        $$payload.out += `<div${spread_attributes([builder2, $$restProps], true, false, "")}></div>`;
      } else {
        $$payload.out += "<!--ssr:if:false-->";
        const anchor_4 = create_anchor($$payload);
        $$payload.out += `${anchor_4}`;
        if (inTransition && store_get($$store_subs, "$open", open)) {
          $$payload.out += "<!--ssr:if:true-->";
          $$payload.out += `<div${spread_attributes([builder2, $$restProps], true, false, "")}></div>`;
        } else {
          $$payload.out += "<!--ssr:if:false-->";
          const anchor_5 = create_anchor($$payload);
          $$payload.out += `${anchor_5}`;
          if (outTransition && store_get($$store_subs, "$open", open)) {
            $$payload.out += "<!--ssr:if:true-->";
            $$payload.out += `<div${spread_attributes([builder2, $$restProps], true, false, "")}></div>`;
          } else {
            $$payload.out += "<!--ssr:if:false-->";
            const anchor_6 = create_anchor($$payload);
            $$payload.out += `${anchor_6}`;
            if (store_get($$store_subs, "$open", open)) {
              $$payload.out += "<!--ssr:if:true-->";
              $$payload.out += `<div${spread_attributes([builder2, $$restProps], true, false, "")}></div>`;
            } else {
              $$payload.out += "<!--ssr:if:false-->";
            }
            $$payload.out += `${anchor_6}`;
          }
          $$payload.out += `${anchor_5}`;
        }
        $$payload.out += `${anchor_4}`;
      }
      $$payload.out += `${anchor_3}`;
    }
    $$payload.out += `${anchor_2}`;
  }
  $$payload.out += `${anchor}`;
  unsubscribe_stores($$store_subs);
  bind_props($$props, {
    transition,
    transitionConfig,
    inTransition,
    inTransitionConfig,
    outTransition,
    outTransitionConfig,
    asChild,
    el
  });
  pop();
}
function Dialog_trigger($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["asChild", "el", "$$props"]);
  push(false);
  const $$store_subs = {};
  let builder2;
  let asChild = value_or_fallback($$props["asChild"], false);
  let el = value_or_fallback($$props["el"], void 0);
  const { elements: { trigger }, getAttrs } = getCtx();
  createDispatcher();
  const attrs = getAttrs("trigger");
  builder2 = store_get($$store_subs, "$trigger", trigger);
  Object.assign(builder2, attrs);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  if (asChild) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `${anchor_1}`;
    slot(
      $$payload,
      $$props.children,
      {
        get builder() {
          return builder2;
        }
      },
      null
    );
    $$payload.out += `${anchor_1}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `<button${spread_attributes([builder2, { "type": "button" }, $$restProps], true, false, "")}>${anchor_2}`;
    slot(
      $$payload,
      $$props.children,
      {
        get builder() {
          return builder2;
        }
      },
      null
    );
    $$payload.out += `${anchor_2}</button>`;
  }
  $$payload.out += `${anchor}`;
  unsubscribe_stores($$store_subs);
  bind_props($$props, { asChild, el });
  pop();
}
function Dialog_description$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["asChild", "id", "el", "$$props"]);
  push(false);
  const $$store_subs = {};
  let builder2;
  let asChild = value_or_fallback($$props["asChild"], false);
  let id = value_or_fallback($$props["id"], void 0);
  let el = value_or_fallback($$props["el"], void 0);
  const { elements: { description }, ids, getAttrs } = getCtx();
  const attrs = getAttrs("description");
  if (id) {
    ids.description.set(id);
  }
  builder2 = store_get($$store_subs, "$description", description);
  Object.assign(builder2, attrs);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  if (asChild) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `${anchor_1}`;
    slot(
      $$payload,
      $$props.children,
      {
        get builder() {
          return builder2;
        }
      },
      null
    );
    $$payload.out += `${anchor_1}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `<div${spread_attributes([builder2, $$restProps], true, false, "")}>${anchor_2}`;
    slot(
      $$payload,
      $$props.children,
      {
        get builder() {
          return builder2;
        }
      },
      null
    );
    $$payload.out += `${anchor_2}</div>`;
  }
  $$payload.out += `${anchor}`;
  unsubscribe_stores($$store_subs);
  bind_props($$props, { asChild, id, el });
  pop();
}
function getProgressData() {
  const NAME = "progress";
  const PARTS = ["root"];
  return {
    NAME,
    PARTS
  };
}
function setCtx(props) {
  const { NAME, PARTS } = getProgressData();
  const getAttrs = createBitAttrs(NAME, PARTS);
  const progress = { ...createProgress(removeUndefined(props)), getAttrs };
  return {
    ...progress,
    updateOption: getOptionUpdater(progress.options)
  };
}
function Progress$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "max",
    "value",
    "onValueChange",
    "asChild",
    "el",
    "$$props"
  ]);
  push(false);
  const $$store_subs = {};
  let builder2;
  let max = value_or_fallback($$props["max"], void 0);
  let value = value_or_fallback($$props["value"], void 0);
  let onValueChange = value_or_fallback($$props["onValueChange"], void 0);
  let asChild = value_or_fallback($$props["asChild"], false);
  let el = value_or_fallback($$props["el"], void 0);
  const {
    elements: { root },
    states: { value: localValue },
    updateOption,
    getAttrs
  } = setCtx({
    max,
    defaultValue: value,
    onValueChange: ({ next }) => {
      onValueChange?.(next);
      value = next;
      return next;
    }
  });
  const attrs = getAttrs("root");
  value !== void 0 && localValue.set(value);
  updateOption("max", max);
  builder2 = store_get($$store_subs, "$root", root);
  Object.assign(builder2, attrs);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  if (asChild) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    $$payload.out += `${anchor_1}`;
    slot(
      $$payload,
      $$props.children,
      {
        get builder() {
          return builder2;
        }
      },
      null
    );
    $$payload.out += `${anchor_1}`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `<div${spread_attributes([builder2, $$restProps], true, false, "")}>${anchor_2}`;
    slot(
      $$payload,
      $$props.children,
      {
        get builder() {
          return builder2;
        }
      },
      null
    );
    $$payload.out += `${anchor_2}</div>`;
  }
  $$payload.out += `${anchor}`;
  unsubscribe_stores($$store_subs);
  bind_props($$props, { max, value, onValueChange, asChild, el });
  pop();
}
function BookmarkCompact($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  let bookmarkList = [];
  initializeSession().then(() => {
    try {
      store_get($$store_subs, "$FAUNA", FAUNA).query(fql`bookmarks.all()`, { format: "simple" }).then((ret) => {
        bookmarkList = [...ret.data.data, ...bookmarkList];
        bookmarkList = bookmarkList.filter((a) => a);
      });
    } catch (error) {
      console.error(error);
    }
  });
  const anchor = create_anchor($$payload);
  const anchor_2 = create_anchor($$payload);
  const anchor_4 = create_anchor($$payload);
  const each_array = ensure_array_like(bookmarkList);
  $$payload.out += `<div class="mt-2 flex items-center justify-between">${anchor}`;
  Button($$payload, {
    size: "icon",
    variant: "secondary",
    children: ($$payload2, $$slotProps) => {
      const anchor_1 = create_anchor($$payload2);
      $$payload2.out += `${anchor_1}`;
      List_ordered($$payload2, { class: "h-4 w-4" });
      $$payload2.out += `${anchor_1} <span class="sr-only">Order by date</span>`;
    }
  });
  $$payload.out += `${anchor} ${anchor_2}`;
  Button($$payload, {
    class: "justify-start gap-2",
    size: "sm",
    variant: "secondary",
    children: ($$payload2, $$slotProps) => {
      const anchor_3 = create_anchor($$payload2);
      $$payload2.out += `${anchor_3}`;
      Star($$payload2, { class: "h-4 w-4" });
      $$payload2.out += `${anchor_3} Favorites`;
    }
  });
  $$payload.out += `${anchor_2}</div> <div class="mt-4 space-y-2">${anchor_4}`;
  for (let $$index = 0; $$index < each_array.length; $$index++) {
    const bookmark = each_array[$$index];
    const anchor_5 = create_anchor($$payload);
    const anchor_6 = create_anchor($$payload);
    $$payload.out += `${anchor_5}<a class="flex items-center justify-between text-sm text-white"${attr("href", `/b/${stringify(bookmark.id)}`, false)}><div><div class="font-medium">${escape(bookmark.title)}</div> <div class="text-xs">Domain: ${escape(new URL(bookmark.url).host)}</div> <div class="text-xs">Category: ${escape(bookmark.category)}</div></div> ${anchor_6}`;
    Chevron_right($$payload, { class: "h-4 w-4" });
    $$payload.out += `${anchor_6}</a>${anchor_5}`;
  }
  $$payload.out += `${anchor_4}</div>`;
  unsubscribe_stores($$store_subs);
  pop();
}
function Corbado($$payload, $$props) {
  push(false);
  $$payload.out += `<corbado-auth${attr("isdevmode", dev, false)}${attr("project-id", PUBLIC_CORBADO_PROJECT_ID, false)} conditional="yes"><input name="username" id="corbado-username" required autocomplete="webauthn"></corbado-auth>`;
  pop();
}
function Auth($$payload, $$props) {
  push(false);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_2 = create_anchor($$payload);
    $$payload.out += `${anchor_2}`;
    Corbado($$payload);
    $$payload.out += `${anchor_2}`;
  }
  $$payload.out += `${anchor}`;
  pop();
}
function Dialog_title($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Dialog_title$1($$payload, spread_props([
    {
      class: cn("text-lg font-semibold leading-none tracking-tight", className)
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
  bind_props($$props, { class: className });
  pop();
}
function Dialog_portal($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["$$props"]);
  push(false);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Dialog_portal$1($$payload, spread_props([
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
  pop();
}
function Dialog_footer($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  const anchor = create_anchor($$payload);
  $$payload.out += `<div${spread_attributes(
    [
      {
        "class": cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)
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
function Dialog_header($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  const anchor = create_anchor($$payload);
  $$payload.out += `<div${spread_attributes(
    [
      {
        "class": cn("flex flex-col space-y-1.5 text-center sm:text-left", className)
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
function Dialog_overlay($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "transition",
    "transitionConfig",
    "$$props"
  ]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  let transition = value_or_fallback($$props["transition"], fade);
  let transitionConfig = value_or_fallback($$props["transitionConfig"], { duration: 150 });
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Dialog_overlay$1($$payload, spread_props([
    {
      transition,
      transitionConfig,
      class: cn("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm", className)
    },
    $$restProps
  ]));
  $$payload.out += `${anchor}`;
  bind_props($$props, {
    class: className,
    transition,
    transitionConfig
  });
  pop();
}
function Dialog_content($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "class",
    "transition",
    "transitionConfig",
    "$$props"
  ]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  let transition = value_or_fallback($$props["transition"], flyAndScale);
  let transitionConfig = value_or_fallback($$props["transitionConfig"], { duration: 200 });
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Dialog_portal($$payload, {
    children: ($$payload2, $$slotProps) => {
      const anchor_1 = create_anchor($$payload2);
      $$payload2.out += `${anchor_1}`;
      Dialog_content$1($$payload2, spread_props([
        {
          transition,
          transitionConfig,
          class: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg sm:rounded-lg md:w-full", className)
        },
        $$restProps,
        {
          children: ($$payload3, $$slotProps2) => {
            const anchor_2 = create_anchor($$payload3);
            const anchor_3 = create_anchor($$payload3);
            $$payload3.out += `${anchor_2}`;
            slot($$payload3, $$props.children, {}, null);
            $$payload3.out += `${anchor_2} ${anchor_3}`;
            Dialog_close$1($$payload3, {
              class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
              children: ($$payload4, $$slotProps3) => {
                const anchor_4 = create_anchor($$payload4);
                $$payload4.out += `${anchor_4}`;
                X($$payload4, { class: "h-4 w-4" });
                $$payload4.out += `${anchor_4} <span class="sr-only">Close</span>`;
              }
            });
            $$payload3.out += `${anchor_3}`;
          }
        }
      ]));
      $$payload2.out += `${anchor_1}`;
    }
  });
  $$payload.out += `${anchor}`;
  bind_props($$props, {
    class: className,
    transition,
    transitionConfig
  });
  pop();
}
function Dialog_description($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class", "$$props"]);
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Dialog_description$1($$payload, spread_props([
    {
      class: cn("text-sm text-muted-foreground", className)
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
  bind_props($$props, { class: className });
  pop();
}
function Dialog_close($$payload, $$props) {
  push(false);
  let className = value_or_fallback($$props["class"], void 0);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Dialog_close$1($$payload, {
    children: ($$payload2, $$slotProps) => {
      const anchor_1 = create_anchor($$payload2);
      $$payload2.out += `${anchor_1}`;
      slot($$payload2, $$props.children, {}, null);
      $$payload2.out += `${anchor_1}`;
    }
  });
  $$payload.out += `${anchor}`;
  bind_props($$props, { class: className });
  pop();
}
const Root = Dialog;
const Trigger = Dialog_trigger;
var FetchStatus;
(function(FetchStatus2) {
  FetchStatus2[FetchStatus2["Idle"] = 0] = "Idle";
  FetchStatus2[FetchStatus2["Submitting"] = 1] = "Submitting";
  FetchStatus2[FetchStatus2["Delayed"] = 2] = "Delayed";
  FetchStatus2[FetchStatus2["Timeout"] = 3] = "Timeout";
})(FetchStatus || (FetchStatus = {}));
let legacyMode$1 = false;
try {
  if (SUPERFORMS_LEGACY)
    legacyMode$1 = true;
} catch {
}
let legacyMode = false;
try {
  if (SUPERFORMS_LEGACY)
    legacyMode = true;
} catch {
}
function styleToString(style) {
  return Object.keys(style).reduce((str, key) => {
    if (style[key] === void 0)
      return str;
    return str + `${key}:${style[key]};`;
  }, "");
}
styleToString({
  position: "absolute",
  width: "25px",
  height: "25px",
  opacity: "0",
  margin: "0px",
  pointerEvents: "none",
  transform: "translateX(-100%)"
});
function Progress($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "state",
    "class",
    "max",
    "value",
    "$$props"
  ]);
  push(false);
  let state = value_or_fallback($$props["state"], "IDLE");
  let className = value_or_fallback($$props["class"], void 0);
  let max = value_or_fallback($$props["max"], 100);
  let value = value_or_fallback($$props["value"], void 0);
  const anchor = create_anchor($$payload);
  $$payload.out += `${anchor}`;
  Progress$1($$payload, spread_props([
    {
      class: cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)
    },
    $$restProps,
    {
      children: ($$payload2, $$slotProps) => {
        $$payload2.out += `<div${attr("data-state", state, false)} class="progress-bar h-full w-full flex-1 transition-all"${attr("style", `transform: translateX(-${100 - 100 * (value ?? 0) / (max ?? 1)}%)`, false)}></div>`;
      }
    }
  ]));
  $$payload.out += `${anchor}`;
  bind_props($$props, { state, class: className, max, value });
  pop();
}
function NewBookmark($$payload, $$props) {
  push(false);
  const $$store_subs = {};
  const PROGRESS = {
    IDLE: 0,
    ERROR: 50,
    LOADING: 25,
    PROCESSING: 50,
    OPENAI: 75,
    SUCCESS: 100,
    PREVIEW: 100
  };
  let FORM_DISABLED = () => !["IDLE", "SUCCESS", "ERROR"].includes(state);
  let urlInput;
  let state = "IDLE";
  let results = writable("");
  new DOMParser();
  new TurndownService();
  get_encoding("cl100k_base");
  async function readFromStream(reader, id) {
    try {
      const { done, value } = await reader.read();
      if (done) {
        return;
      }
      store_set(results, store_get($$store_subs, "$results", results) + new TextDecoder().decode(value));
      readFromStream(reader, id);
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    const anchor = create_anchor($$payload2);
    $$payload2.out += `${anchor}`;
    Root($$payload2, {
      children: ($$payload3, $$slotProps) => {
        const anchor_1 = create_anchor($$payload3);
        const anchor_3 = create_anchor($$payload3);
        const anchor_4 = create_anchor($$payload3);
        $$payload3.out += `${anchor_1}`;
        Trigger($$payload3, {
          class: "flex-inline flex h-full w-full flex-row items-center justify-center gap-4 rounded-none bg-green-500",
          children: ($$payload4, $$slotProps2) => {
            const anchor_2 = create_anchor($$payload4);
            $$payload4.out += `${anchor_2}`;
            Plus_circle($$payload4, {});
            $$payload4.out += `${anchor_2}New`;
          }
        });
        $$payload3.out += `${anchor_1} ${anchor_3}`;
        Dialog_overlay($$payload3, { class: "bg-background/20" });
        $$payload3.out += `${anchor_3} ${anchor_4}`;
        Dialog_content($$payload3, {
          class: `dialogContent top-[50%] ${stringify("w-[50%] sm:max-w-[525px]")} max-h-screen overflow-y-auto transition-all duration-300`,
          children: ($$payload4, $$slotProps2) => {
            const anchor_5 = create_anchor($$payload4);
            const anchor_8 = create_anchor($$payload4);
            const anchor_9 = create_anchor($$payload4);
            const anchor_11 = create_anchor($$payload4);
            const anchor_12 = create_anchor($$payload4);
            const anchor_13 = create_anchor($$payload4);
            const anchor_15 = create_anchor($$payload4);
            const anchor_17 = create_anchor($$payload4);
            $$payload4.out += `<div class="formElement svelte-1f6jiy4"${attr("data-state", state, false)}>${anchor_5}`;
            Dialog_header($$payload4, {
              children: ($$payload5, $$slotProps3) => {
                const anchor_6 = create_anchor($$payload5);
                const anchor_7 = create_anchor($$payload5);
                $$payload5.out += `${anchor_6}`;
                Dialog_title($$payload5, {
                  children: ($$payload6, $$slotProps4) => {
                    $$payload6.out += `Create New Bookmark`;
                  }
                });
                $$payload5.out += `${anchor_6} ${anchor_7}`;
                Dialog_description($$payload5, {
                  children: ($$payload6, $$slotProps4) => {
                    $$payload6.out += `Submit a URL to generate a new bookmark.`;
                  }
                });
                $$payload5.out += `${anchor_7}`;
              }
            });
            $$payload4.out += `${anchor_5} <div class="grid gap-4 py-4"><div class="items-center">${anchor_8}`;
            Input($$payload4, {
              id: "url",
              placeholder: "https://....",
              get value() {
                return urlInput;
              },
              set value($$value) {
                urlInput = $$value;
                $$settled = false;
              }
            });
            $$payload4.out += `${anchor_8}</div></div> ${anchor_9}`;
            Dialog_footer($$payload4, {
              children: ($$payload5, $$slotProps3) => {
                const anchor_10 = create_anchor($$payload5);
                $$payload5.out += `${anchor_10}`;
                Button($$payload5, {
                  type: "submit",
                  disabled: FORM_DISABLED(),
                  children: ($$payload6, $$slotProps4) => {
                    $$payload6.out += `Submit URL`;
                  }
                });
                $$payload5.out += `${anchor_10}`;
              }
            });
            $$payload4.out += `${anchor_9}</div> <div${attr("class", ["hidden"].filter(Boolean).join(" "), false)}>${anchor_11}`;
            Progress($$payload4, {
              value: PROGRESS[state],
              state,
              class: "drop-shadow-md"
            });
            $$payload4.out += `${anchor_11} ${anchor_12}`;
            {
              $$payload4.out += "<!--ssr:if:false-->";
            }
            $$payload4.out += `${anchor_12}</div> <div${attr(
              "class",
              [
                "hidden"
              ].filter(Boolean).join(" "),
              false
            )}><div class="float-right gap-4">${anchor_13}`;
            Dialog_close($$payload4, {
              children: ($$payload5, $$slotProps3) => {
                const anchor_14 = create_anchor($$payload5);
                $$payload5.out += `${anchor_14}`;
                Button($$payload5, {
                  class: "bg-green-500",
                  disabled: state != "SUCCESS",
                  children: ($$payload6, $$slotProps4) => {
                    $$payload6.out += `Save`;
                  }
                });
                $$payload5.out += `${anchor_14}`;
              }
            });
            $$payload4.out += `${anchor_13} ${anchor_15}`;
            Dialog_close($$payload4, {
              children: ($$payload5, $$slotProps3) => {
                const anchor_16 = create_anchor($$payload5);
                $$payload5.out += `${anchor_16}`;
                Button($$payload5, {
                  variant: "destructive",
                  children: ($$payload6, $$slotProps4) => {
                    $$payload6.out += `Close`;
                  }
                });
                $$payload5.out += `${anchor_16}`;
              }
            });
            $$payload4.out += `${anchor_15}</div> <div class="markdown-body h-auto w-full rounded-sm border-gray-700 p-5">${anchor_17}`;
            SvelteMarkdown($$payload4, {
              source: store_get($$store_subs, "$results", results)
            });
            $$payload4.out += `${anchor_17}</div></div>`;
          }
        });
        $$payload3.out += `${anchor_4}`;
      }
    });
    $$payload2.out += `${anchor}`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  unsubscribe_stores($$store_subs);
  bind_props($$props, { readFromStream });
  pop();
}
function _layout($$payload, $$props) {
  push(false);
  const corbadoSession = new Corbado$1.Session(PUBLIC_CORBADO_PROJECT_ID);
  corbadoSession.refresh((user) => console.log(user));
  let session;
  let authenticated = false;
  initializeSession().then((sess) => {
    console.log("sess", sess);
    session = sess;
    authenticated = sess.isAuthenticated;
  });
  const anchor = create_anchor($$payload);
  head($$payload, ($$payload2) => {
    $$payload2.title = "<title>";
    $$payload2.title += `Bookmark Manager</title>`;
  });
  $$payload.out += `${anchor}`;
  if (authenticated) {
    $$payload.out += "<!--ssr:if:true-->";
    const anchor_1 = create_anchor($$payload);
    const anchor_3 = create_anchor($$payload);
    const anchor_4 = create_anchor($$payload);
    const anchor_5 = create_anchor($$payload);
    const anchor_6 = create_anchor($$payload);
    const anchor_7 = create_anchor($$payload);
    const anchor_9 = create_anchor($$payload);
    $$payload.out += `<div class="container grid gap-6 px-4 md:grid-cols-[250px_1fr] md:px-6"><div class="flex flex-col gap-4"><div class="mt-2 flex items-center justify-between overflow-hidden rounded-xl bg-white bg-opacity-50">${anchor_1}`;
    Button($$payload, {
      class: "flex-inline ml-auto flex w-full gap-4 rounded-none",
      size: "sm",
      variant: "secondary",
      href: "/",
      children: ($$payload2, $$slotProps) => {
        const anchor_2 = create_anchor($$payload2);
        $$payload2.out += `${anchor_2}`;
        List($$payload2, {});
        $$payload2.out += `${anchor_2}List`;
      }
    });
    $$payload.out += `${anchor_1} ${anchor_3}`;
    NewBookmark($$payload, {});
    $$payload.out += `${anchor_3}</div> <div><h2 class="text-2xl font-bold text-white">Tags</h2> ${anchor_4}`;
    TagCloud($$payload);
    $$payload.out += `${anchor_4}</div> <div><h2 class="mt-4 text-2xl font-bold text-white">Search</h2> ${anchor_5}`;
    SearchForm($$payload);
    $$payload.out += `${anchor_5}</div> <div><h2 class="mt-4 text-2xl font-bold text-white">Bookmarks</h2> ${anchor_6}`;
    BookmarkCompact($$payload);
    $$payload.out += `${anchor_6}</div></div> <div class="flex flex-col gap-4"><div class="flex items-center justify-between"><h1 class="text-3xl font-bold tracking-tighter text-white sm:text-5xl">Bookmark Manager</h1> <div class="rounded-xl bg-white bg-opacity-50"><span class="px-3">${escape(session.user.email || "")}</span> ${anchor_7}`;
    Button($$payload, {
      size: "icon",
      variant: "destructive",
      children: ($$payload2, $$slotProps) => {
        const anchor_8 = create_anchor($$payload2);
        $$payload2.out += `${anchor_8}`;
        Log_out($$payload2, { class: "h-4 w-4" });
        $$payload2.out += `${anchor_8}`;
      }
    });
    $$payload.out += `${anchor_7}</div></div> ${anchor_9}`;
    slot($$payload, $$props.children, {}, null);
    $$payload.out += `${anchor_9}</div></div>`;
  } else {
    $$payload.out += "<!--ssr:if:false-->";
    const anchor_10 = create_anchor($$payload);
    $$payload.out += `${anchor_10}`;
    Auth($$payload);
    $$payload.out += `${anchor_10}`;
  }
  $$payload.out += `${anchor}`;
  pop();
}
export {
  _layout as default
};
