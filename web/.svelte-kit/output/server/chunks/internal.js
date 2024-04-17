import { f as is_frozen, o as object_prototype, h as array_prototype, j as define_property, k as source, i as is_array, l as set, m as update, n as effect_active, q as updating_derived, r as get_descriptor, t as mutable_source, v as get, U as UNINITIALIZED, w as get_prototype_of, x as object_keys, y as create_root_block, z as render_effect, A as push, b as current_component_context, B as pop, C as array_from, D as destroy_signal, E as object_assign, F as flushSync, P as PassiveDelegatedEvents, G as render, a as push$1, H as copy_payload, I as assign_payload, J as bind_props, p as pop$1, c as create_anchor } from "./index3.js";
import { s as setContext } from "./main-client.js";
import "./shared-server.js";
let assets, base, options, set_building, set_manifest, set_prerendering, get_hooks, set_read_implementation, override, prerendering, reset, set_assets;
let __tla = (async () => {
  base = "";
  assets = base;
  const initial = {
    base,
    assets
  };
  override = function(paths) {
    base = paths.base;
    assets = paths.assets;
  };
  reset = function() {
    base = initial.base;
    assets = initial.assets;
  };
  set_assets = function(path) {
    assets = initial.assets = path;
  };
  const STATE_SYMBOL = Symbol("$state");
  function proxy(value, immutable = true) {
    if (typeof value === "object" && value != null && !is_frozen(value)) {
      if (STATE_SYMBOL in value) {
        const metadata = value[STATE_SYMBOL];
        if (metadata.t === value || metadata.p === value)
          return metadata.p;
      }
      const prototype = get_prototype_of(value);
      if (prototype === object_prototype || prototype === array_prototype) {
        const proxy2 = new Proxy(value, state_proxy_handler);
        define_property(value, STATE_SYMBOL, {
          value: {
            s: /* @__PURE__ */ new Map(),
            v: source(0),
            a: is_array(value),
            i: immutable,
            p: proxy2,
            t: value
          },
          writable: true,
          enumerable: false
        });
        return proxy2;
      }
    }
    return value;
  }
  const state_proxy_handler = {
    defineProperty(target, prop, descriptor) {
      if (descriptor.value) {
        const metadata = target[STATE_SYMBOL];
        const s = metadata.s.get(prop);
        if (s !== void 0)
          set(s, proxy(descriptor.value, metadata.i));
      }
      return Reflect.defineProperty(target, prop, descriptor);
    },
    deleteProperty(target, prop) {
      const metadata = target[STATE_SYMBOL];
      const s = metadata.s.get(prop);
      const is_array2 = metadata.a;
      const boolean = delete target[prop];
      if (is_array2 && boolean) {
        const ls = metadata.s.get("length");
        const length = target.length - 1;
        if (ls !== void 0 && ls.v !== length) {
          set(ls, length);
        }
      }
      if (s !== void 0)
        set(s, UNINITIALIZED);
      if (prop in target)
        update(metadata.v);
      return boolean;
    },
    get(target, prop, receiver) {
      if (prop === STATE_SYMBOL) {
        return Reflect.get(target, STATE_SYMBOL);
      }
      const metadata = target[STATE_SYMBOL];
      let s = metadata.s.get(prop);
      if (s === void 0 && (effect_active() || updating_derived) && (!(prop in target) || get_descriptor(target, prop)?.writable)) {
        s = (metadata.i ? source : mutable_source)(proxy(target[prop], metadata.i));
        metadata.s.set(prop, s);
      }
      if (s !== void 0) {
        const value = get(s);
        return value === UNINITIALIZED ? void 0 : value;
      }
      return Reflect.get(target, prop, receiver);
    },
    getOwnPropertyDescriptor(target, prop) {
      const descriptor = Reflect.getOwnPropertyDescriptor(target, prop);
      if (descriptor && "value" in descriptor) {
        const metadata = target[STATE_SYMBOL];
        const s = metadata.s.get(prop);
        if (s) {
          descriptor.value = get(s);
        }
      }
      return descriptor;
    },
    has(target, prop) {
      if (prop === STATE_SYMBOL) {
        return true;
      }
      const metadata = target[STATE_SYMBOL];
      const has = Reflect.has(target, prop);
      let s = metadata.s.get(prop);
      if (s !== void 0 || effect_active() && (!has || get_descriptor(target, prop)?.writable)) {
        if (s === void 0) {
          s = (metadata.i ? source : mutable_source)(has ? proxy(target[prop], metadata.i) : UNINITIALIZED);
          metadata.s.set(prop, s);
        }
        const value = get(s);
        if (value === UNINITIALIZED) {
          return false;
        }
      }
      return has;
    },
    set(target, prop, value) {
      const metadata = target[STATE_SYMBOL];
      const s = metadata.s.get(prop);
      if (s !== void 0)
        set(s, proxy(value, metadata.i));
      const is_array2 = metadata.a;
      const not_has = !(prop in target);
      if (is_array2 && prop === "length") {
        for (let i = value; i < target.length; i += 1) {
          const s2 = metadata.s.get(i + "");
          if (s2 !== void 0)
            set(s2, UNINITIALIZED);
        }
      }
      target[prop] = value;
      if (not_has) {
        if (is_array2) {
          const ls = metadata.s.get("length");
          const length = target.length;
          if (ls !== void 0 && ls.v !== length) {
            set(ls, length);
          }
        }
        update(metadata.v);
      }
      return true;
    },
    ownKeys(target) {
      const metadata = target[STATE_SYMBOL];
      get(metadata.v);
      return Reflect.ownKeys(target);
    }
  };
  var node_prototype;
  var element_prototype;
  var text_prototype;
  var map_prototype;
  function init_operations() {
    if (node_prototype !== void 0) {
      return;
    }
    node_prototype = Node.prototype;
    element_prototype = Element.prototype;
    text_prototype = Text.prototype;
    map_prototype = Map.prototype;
    node_prototype.appendChild;
    node_prototype.cloneNode;
    map_prototype.set;
    map_prototype.get;
    map_prototype.delete;
    element_prototype.__click = void 0;
    text_prototype.__nodeValue = " ";
    element_prototype.__className = "";
    get_descriptor(node_prototype, "firstChild").get;
    get_descriptor(node_prototype, "nextSibling").get;
    get_descriptor(node_prototype, "textContent").set;
    get_descriptor(element_prototype, "className").set;
  }
  function empty() {
    return document.createTextNode("");
  }
  function set_current_hydration_fragment(fragment) {
  }
  function get_hydration_fragment(node, insert_text = false) {
    const fragment = [];
    let current_node = node;
    let target_depth = null;
    while (current_node !== null) {
      const node_type = current_node.nodeType;
      const next_sibling = current_node.nextSibling;
      if (node_type === 8) {
        const data = current_node.data;
        if (data.startsWith("ssr:")) {
          const depth = data.slice(4);
          if (target_depth === null) {
            target_depth = depth;
          } else if (depth === target_depth) {
            if (insert_text && fragment.length === 0) {
              const text = empty();
              fragment.push(text);
              current_node.parentNode.insertBefore(text, current_node);
            }
            return fragment;
          } else {
            fragment.push(current_node);
          }
          current_node = next_sibling;
          continue;
        }
      }
      if (target_depth !== null) {
        fragment.push(current_node);
      }
      current_node = next_sibling;
    }
    return null;
  }
  function remove(current) {
    var first_node = current;
    if (is_array(current)) {
      var i = 0;
      var node;
      for (; i < current.length; i++) {
        node = current[i];
        if (i === 0) {
          first_node = node;
        }
        if (node.isConnected) {
          node.remove();
        }
      }
    } else if (current.isConnected) {
      current.remove();
    }
    return first_node;
  }
  const all_registerd_events = /* @__PURE__ */ new Set();
  const root_event_handles = /* @__PURE__ */ new Set();
  function handle_event_propagation(handler_element, event) {
    const event_name = event.type;
    const path = event.composedPath?.() || [];
    let current_target = path[0] || event.target;
    if (event.target !== current_target) {
      define_property(event, "target", {
        configurable: true,
        value: current_target
      });
    }
    let path_idx = 0;
    const handled_at = event.__root;
    if (handled_at) {
      const at_idx = path.indexOf(handled_at);
      if (at_idx !== -1 && handler_element === document) {
        event.__root = document;
        return;
      }
      const handler_idx = path.indexOf(handler_element);
      if (handler_idx === -1) {
        return;
      }
      if (at_idx <= handler_idx) {
        path_idx = at_idx + 1;
      }
    }
    current_target = path[path_idx] || event.target;
    define_property(event, "currentTarget", {
      configurable: true,
      get() {
        return current_target || document;
      }
    });
    while (current_target !== null) {
      const parent_element = current_target.parentNode || current_target.host || null;
      const internal_prop_name = "__" + event_name;
      const delegated = current_target[internal_prop_name];
      if (delegated !== void 0 && !current_target.disabled) {
        if (is_array(delegated)) {
          const [fn, ...data] = delegated;
          fn.apply(current_target, [
            event,
            ...data
          ]);
        } else {
          delegated.call(current_target, event);
        }
      }
      if (event.cancelBubble || parent_element === handler_element || current_target === handler_element) {
        break;
      }
      current_target = parent_element;
    }
    event.__root = handler_element;
    current_target = handler_element;
  }
  function createRoot(component, options2) {
    const props = proxy(options2.props || {}, false);
    let [accessors, $destroy] = mount(component, {
      ...options2,
      props
    });
    const result = {
      $set: (next) => {
        object_assign(props, next);
      },
      $destroy
    };
    for (const key of object_keys(accessors || {})) {
      define_property(result, key, {
        get() {
          return accessors[key];
        },
        set(value) {
          flushSync(() => accessors[key] = value);
        },
        enumerable: true
      });
    }
    return result;
  }
  function mount(component, options2) {
    init_operations();
    const registered_events = /* @__PURE__ */ new Set();
    const container = options2.target;
    const block = create_root_block(options2.intro || false);
    const first_child = container.firstChild;
    const hydration_fragment = get_hydration_fragment(first_child, true);
    let accessors = void 0;
    try {
      let anchor = null;
      if (hydration_fragment === null) {
        anchor = empty();
        container.appendChild(anchor);
      }
      set_current_hydration_fragment(hydration_fragment);
      const effect = render_effect(() => {
        if (options2.context) {
          push({});
          current_component_context.c = options2.context;
        }
        accessors = component(anchor, options2.props || {});
        if (options2.context) {
          pop();
        }
      }, block, true);
      block.e = effect;
    } catch (error) {
      if (options2.recover !== false && hydration_fragment !== null) {
        console.error("ERR_SVELTE_HYDRATION_MISMATCH", error);
        remove(hydration_fragment);
        first_child.remove();
        hydration_fragment.at(-1)?.nextSibling?.remove();
        return mount(component, options2);
      } else {
        throw error;
      }
    } finally {
    }
    const bound_event_listener = handle_event_propagation.bind(null, container);
    const bound_document_event_listener = handle_event_propagation.bind(null, document);
    const event_handle = (events) => {
      for (let i = 0; i < events.length; i++) {
        const event_name = events[i];
        if (!registered_events.has(event_name)) {
          registered_events.add(event_name);
          container.addEventListener(event_name, bound_event_listener, PassiveDelegatedEvents.includes(event_name) ? {
            passive: true
          } : void 0);
          document.addEventListener(event_name, bound_document_event_listener, PassiveDelegatedEvents.includes(event_name) ? {
            passive: true
          } : void 0);
        }
      }
    };
    event_handle(array_from(all_registerd_events));
    root_event_handles.add(event_handle);
    return [
      accessors,
      () => {
        for (const event_name of registered_events) {
          container.removeEventListener(event_name, bound_event_listener);
        }
        root_event_handles.delete(event_handle);
        const dom = block.d;
        if (dom !== null) {
          remove(dom);
        }
        if (hydration_fragment !== null) {
          remove(hydration_fragment);
        }
        destroy_signal(block.e);
      }
    ];
  }
  function asClassComponent$1(component) {
    return class extends Svelte4Component {
      constructor(options2) {
        super({
          component,
          ...options2
        });
      }
    };
  }
  class Svelte4Component {
    #events = {};
    #instance;
    constructor(options2) {
      this.#instance = createRoot(options2.component, {
        target: options2.target,
        props: {
          ...options2.props,
          $$events: this.#events
        },
        context: options2.context,
        intro: options2.intro,
        recover: options2.recover
      });
      for (const key of Object.keys(this.#instance)) {
        if (key === "$set" || key === "$destroy")
          continue;
        define_property(this, key, {
          get() {
            return this.#instance[key];
          },
          set(value) {
            this.#instance[key] = value;
          },
          enumerable: true
        });
      }
    }
    $set(props) {
      this.#instance.$set(props);
    }
    $on(event, callback) {
      this.#events[event] = this.#events[event] || [];
      const cb = (...args) => callback.call(this, ...args);
      this.#events[event].push(cb);
      return () => {
        this.#events[event] = this.#events[event].filter((fn) => fn !== cb);
      };
    }
    $destroy() {
      this.#instance.$destroy();
    }
  }
  function asClassComponent(component) {
    const component_constructor = asClassComponent$1(component);
    const _render = (props, { context } = {}) => {
      const result = render(component, {
        props,
        context
      });
      return {
        css: {
          code: "",
          map: null
        },
        head: result.head,
        html: result.html
      };
    };
    component_constructor.render = _render;
    return component_constructor;
  }
  prerendering = false;
  set_building = function() {
  };
  set_prerendering = function() {
    prerendering = true;
  };
  function Root($$payload, $$props) {
    push$1(true);
    let { stores, page, constructors, components = [], form, data_0 = null, data_1 = null, data_2 = null } = $$props;
    {
      setContext("__svelte__", stores);
    }
    {
      stores.page.set(page);
    }
    let $$settled = true;
    let $$inner_payload;
    function $$render_inner($$payload2) {
      const anchor = create_anchor($$payload2);
      const anchor_7 = create_anchor($$payload2);
      $$payload2.out += `${anchor}`;
      if (constructors[1]) {
        $$payload2.out += "<!--ssr:if:true-->";
        const anchor_1 = create_anchor($$payload2);
        $$payload2.out += `${anchor_1}`;
        constructors[0]?.($$payload2, {
          get this() {
            return components[0];
          },
          set this($$value) {
            components[0] = $$value;
            $$settled = false;
          },
          data: data_0,
          children: ($$payload3, $$slotProps) => {
            const anchor_2 = create_anchor($$payload3);
            $$payload3.out += `${anchor_2}`;
            if (constructors[2]) {
              $$payload3.out += "<!--ssr:if:true-->";
              const anchor_3 = create_anchor($$payload3);
              $$payload3.out += `${anchor_3}`;
              constructors[1]?.($$payload3, {
                get this() {
                  return components[1];
                },
                set this($$value) {
                  components[1] = $$value;
                  $$settled = false;
                },
                data: data_1,
                children: ($$payload4, $$slotProps2) => {
                  const anchor_4 = create_anchor($$payload4);
                  $$payload4.out += `${anchor_4}`;
                  constructors[2]?.($$payload4, {
                    get this() {
                      return components[2];
                    },
                    set this($$value) {
                      components[2] = $$value;
                      $$settled = false;
                    },
                    data: data_2,
                    form
                  });
                  $$payload4.out += `${anchor_4}`;
                }
              });
              $$payload3.out += `${anchor_3}`;
            } else {
              $$payload3.out += "<!--ssr:if:false-->";
              const anchor_5 = create_anchor($$payload3);
              $$payload3.out += `${anchor_5}`;
              constructors[1]?.($$payload3, {
                get this() {
                  return components[1];
                },
                set this($$value) {
                  components[1] = $$value;
                  $$settled = false;
                },
                data: data_1,
                form
              });
              $$payload3.out += `${anchor_5}`;
            }
            $$payload3.out += `${anchor_2}`;
          }
        });
        $$payload2.out += `${anchor_1}`;
      } else {
        $$payload2.out += "<!--ssr:if:false-->";
        const anchor_6 = create_anchor($$payload2);
        $$payload2.out += `${anchor_6}`;
        constructors[0]?.($$payload2, {
          get this() {
            return components[0];
          },
          set this($$value) {
            components[0] = $$value;
            $$settled = false;
          },
          data: data_0,
          form
        });
        $$payload2.out += `${anchor_6}`;
      }
      $$payload2.out += `${anchor} ${anchor_7}`;
      {
        $$payload2.out += "<!--ssr:if:false-->";
      }
      $$payload2.out += `${anchor_7}`;
    }
    do {
      $$settled = true;
      $$inner_payload = copy_payload($$payload);
      $$render_inner($$inner_payload);
    } while (!$$settled);
    assign_payload($$payload, $$inner_payload);
    bind_props($$props, {
      stores,
      page,
      constructors,
      components,
      form,
      data_0,
      data_1,
      data_2
    });
    pop$1();
  }
  const root = asClassComponent(Root);
  set_read_implementation = function(fn) {
  };
  set_manifest = function(_) {
  };
  options = {
    app_dir: "_app",
    app_template_contains_nonce: false,
    csp: {
      "mode": "auto",
      "directives": {
        "upgrade-insecure-requests": false,
        "block-all-mixed-content": false
      },
      "reportOnly": {
        "upgrade-insecure-requests": false,
        "block-all-mixed-content": false
      }
    },
    csrf_check_origin: true,
    embedded: false,
    env_public_prefix: "PUBLIC_",
    env_private_prefix: "",
    hooks: null,
    preload_strategy: "modulepreload",
    root,
    service_worker: false,
    templates: {
      app: ({ head, body, assets: assets2, nonce, env }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		' + head + '\n	</head>\n	<body data-sveltekit-preload-data="hover">\n		<div style="display: contents">' + body + "</div>\n	</body>\n</html>\n",
      error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
    },
    version_hash: "1p3jfjs"
  };
  get_hooks = async function() {
    return {
      ...await import("./hooks.server.js")
    };
  };
})();
export {
  __tla,
  assets as a,
  base as b,
  options as c,
  set_building as d,
  set_manifest as e,
  set_prerendering as f,
  get_hooks as g,
  set_read_implementation as h,
  override as o,
  prerendering as p,
  reset as r,
  set_assets as s
};
