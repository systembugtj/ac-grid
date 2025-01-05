import { jsx as $, jsxs as re } from "react/jsx-runtime";
import * as X from "react";
import '../../assets/index3.css';const Re = "_button_1m5ht_1", we = {
  button: Re
};
/**
   * table-core
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function x(e, o) {
  return typeof e == "function" ? e(o) : e;
}
function F(e, o) {
  return (t) => {
    o.setState((n) => ({
      ...n,
      [e]: x(t, n[e])
    }));
  };
}
function L(e) {
  return e instanceof Function;
}
function he(e) {
  return Array.isArray(e) && e.every((o) => typeof o == "number");
}
function ve(e, o) {
  const t = [], n = (r) => {
    r.forEach((i) => {
      t.push(i);
      const l = o(i);
      l != null && l.length && n(l);
    });
  };
  return n(e), t;
}
function m(e, o, t) {
  let n = [], r;
  return (i) => {
    let l;
    t.key && t.debug && (l = Date.now());
    const s = e(i);
    if (!(s.length !== n.length || s.some((c, C) => n[C] !== c)))
      return r;
    n = s;
    let a;
    if (t.key && t.debug && (a = Date.now()), r = o(...s), t == null || t.onChange == null || t.onChange(r), t.key && t.debug && t != null && t.debug()) {
      const c = Math.round((Date.now() - l) * 100) / 100, C = Math.round((Date.now() - a) * 100) / 100, d = C / 16, g = (f, p) => {
        for (f = String(f); f.length < p; )
          f = " " + f;
        return f;
      };
      console.info(`%c⏱ ${g(C, 5)} /${g(c, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * d, 120))}deg 100% 31%);`, t == null ? void 0 : t.key);
    }
    return r;
  };
}
function S(e, o, t, n) {
  return {
    debug: () => {
      var r;
      return (r = e == null ? void 0 : e.debugAll) != null ? r : e[o];
    },
    key: process.env.NODE_ENV === "development" && t,
    onChange: n
  };
}
function _e(e, o, t, n) {
  const r = () => {
    var l;
    return (l = i.getValue()) != null ? l : e.options.renderFallbackValue;
  }, i = {
    id: `${o.id}_${t.id}`,
    row: o,
    column: t,
    getValue: () => o.getValue(n),
    renderValue: r,
    getContext: m(() => [e, t, o, i], (l, s, u, a) => ({
      table: l,
      column: s,
      row: u,
      cell: a,
      getValue: a.getValue,
      renderValue: a.renderValue
    }), S(e.options, "debugCells", "cell.getContext"))
  };
  return e._features.forEach((l) => {
    l.createCell == null || l.createCell(i, t, o, e);
  }, {}), i;
}
function Fe(e, o, t, n) {
  var r, i;
  const s = {
    ...e._getDefaultColumnDef(),
    ...o
  }, u = s.accessorKey;
  let a = (r = (i = s.id) != null ? i : u ? typeof String.prototype.replaceAll == "function" ? u.replaceAll(".", "_") : u.replace(/\./g, "_") : void 0) != null ? r : typeof s.header == "string" ? s.header : void 0, c;
  if (s.accessorFn ? c = s.accessorFn : u && (u.includes(".") ? c = (d) => {
    let g = d;
    for (const p of u.split(".")) {
      var f;
      g = (f = g) == null ? void 0 : f[p], process.env.NODE_ENV !== "production" && g === void 0 && console.warn(`"${p}" in deeply nested key "${u}" returned undefined.`);
    }
    return g;
  } : c = (d) => d[s.accessorKey]), !a)
    throw process.env.NODE_ENV !== "production" ? new Error(s.accessorFn ? "Columns require an id when using an accessorFn" : "Columns require an id when using a non-string header") : new Error();
  let C = {
    id: `${String(a)}`,
    accessorFn: c,
    parent: n,
    depth: t,
    columnDef: s,
    columns: [],
    getFlatColumns: m(() => [!0], () => {
      var d;
      return [C, ...(d = C.columns) == null ? void 0 : d.flatMap((g) => g.getFlatColumns())];
    }, S(e.options, "debugColumns", "column.getFlatColumns")),
    getLeafColumns: m(() => [e._getOrderColumnsFn()], (d) => {
      var g;
      if ((g = C.columns) != null && g.length) {
        let f = C.columns.flatMap((p) => p.getLeafColumns());
        return d(f);
      }
      return [C];
    }, S(e.options, "debugColumns", "column.getLeafColumns"))
  };
  for (const d of e._features)
    d.createColumn == null || d.createColumn(C, e);
  return C;
}
const v = "debugHeaders";
function ie(e, o, t) {
  var n;
  let i = {
    id: (n = t.id) != null ? n : o.id,
    column: o,
    index: t.index,
    isPlaceholder: !!t.isPlaceholder,
    placeholderId: t.placeholderId,
    depth: t.depth,
    subHeaders: [],
    colSpan: 0,
    rowSpan: 0,
    headerGroup: null,
    getLeafHeaders: () => {
      const l = [], s = (u) => {
        u.subHeaders && u.subHeaders.length && u.subHeaders.map(s), l.push(u);
      };
      return s(i), l;
    },
    getContext: () => ({
      table: e,
      header: i,
      column: o
    })
  };
  return e._features.forEach((l) => {
    l.createHeader == null || l.createHeader(i, e);
  }), i;
}
const $e = {
  createTable: (e) => {
    e.getHeaderGroups = m(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (o, t, n, r) => {
      var i, l;
      const s = (i = n == null ? void 0 : n.map((C) => t.find((d) => d.id === C)).filter(Boolean)) != null ? i : [], u = (l = r == null ? void 0 : r.map((C) => t.find((d) => d.id === C)).filter(Boolean)) != null ? l : [], a = t.filter((C) => !(n != null && n.includes(C.id)) && !(r != null && r.includes(C.id)));
      return H(o, [...s, ...a, ...u], e);
    }, S(e.options, v, "getHeaderGroups")), e.getCenterHeaderGroups = m(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (o, t, n, r) => (t = t.filter((i) => !(n != null && n.includes(i.id)) && !(r != null && r.includes(i.id))), H(o, t, e, "center")), S(e.options, v, "getCenterHeaderGroups")), e.getLeftHeaderGroups = m(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (o, t, n) => {
      var r;
      const i = (r = n == null ? void 0 : n.map((l) => t.find((s) => s.id === l)).filter(Boolean)) != null ? r : [];
      return H(o, i, e, "left");
    }, S(e.options, v, "getLeftHeaderGroups")), e.getRightHeaderGroups = m(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (o, t, n) => {
      var r;
      const i = (r = n == null ? void 0 : n.map((l) => t.find((s) => s.id === l)).filter(Boolean)) != null ? r : [];
      return H(o, i, e, "right");
    }, S(e.options, v, "getRightHeaderGroups")), e.getFooterGroups = m(() => [e.getHeaderGroups()], (o) => [...o].reverse(), S(e.options, v, "getFooterGroups")), e.getLeftFooterGroups = m(() => [e.getLeftHeaderGroups()], (o) => [...o].reverse(), S(e.options, v, "getLeftFooterGroups")), e.getCenterFooterGroups = m(() => [e.getCenterHeaderGroups()], (o) => [...o].reverse(), S(e.options, v, "getCenterFooterGroups")), e.getRightFooterGroups = m(() => [e.getRightHeaderGroups()], (o) => [...o].reverse(), S(e.options, v, "getRightFooterGroups")), e.getFlatHeaders = m(() => [e.getHeaderGroups()], (o) => o.map((t) => t.headers).flat(), S(e.options, v, "getFlatHeaders")), e.getLeftFlatHeaders = m(() => [e.getLeftHeaderGroups()], (o) => o.map((t) => t.headers).flat(), S(e.options, v, "getLeftFlatHeaders")), e.getCenterFlatHeaders = m(() => [e.getCenterHeaderGroups()], (o) => o.map((t) => t.headers).flat(), S(e.options, v, "getCenterFlatHeaders")), e.getRightFlatHeaders = m(() => [e.getRightHeaderGroups()], (o) => o.map((t) => t.headers).flat(), S(e.options, v, "getRightFlatHeaders")), e.getCenterLeafHeaders = m(() => [e.getCenterFlatHeaders()], (o) => o.filter((t) => {
      var n;
      return !((n = t.subHeaders) != null && n.length);
    }), S(e.options, v, "getCenterLeafHeaders")), e.getLeftLeafHeaders = m(() => [e.getLeftFlatHeaders()], (o) => o.filter((t) => {
      var n;
      return !((n = t.subHeaders) != null && n.length);
    }), S(e.options, v, "getLeftLeafHeaders")), e.getRightLeafHeaders = m(() => [e.getRightFlatHeaders()], (o) => o.filter((t) => {
      var n;
      return !((n = t.subHeaders) != null && n.length);
    }), S(e.options, v, "getRightLeafHeaders")), e.getLeafHeaders = m(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (o, t, n) => {
      var r, i, l, s, u, a;
      return [...(r = (i = o[0]) == null ? void 0 : i.headers) != null ? r : [], ...(l = (s = t[0]) == null ? void 0 : s.headers) != null ? l : [], ...(u = (a = n[0]) == null ? void 0 : a.headers) != null ? u : []].map((c) => c.getLeafHeaders()).flat();
    }, S(e.options, v, "getLeafHeaders"));
  }
};
function H(e, o, t, n) {
  var r, i;
  let l = 0;
  const s = function(d, g) {
    g === void 0 && (g = 1), l = Math.max(l, g), d.filter((f) => f.getIsVisible()).forEach((f) => {
      var p;
      (p = f.columns) != null && p.length && s(f.columns, g + 1);
    }, 0);
  };
  s(e);
  let u = [];
  const a = (d, g) => {
    const f = {
      depth: g,
      id: [n, `${g}`].filter(Boolean).join("_"),
      headers: []
    }, p = [];
    d.forEach((w) => {
      const R = [...p].reverse()[0], _ = w.column.depth === f.depth;
      let h, P = !1;
      if (_ && w.column.parent ? h = w.column.parent : (h = w.column, P = !0), R && (R == null ? void 0 : R.column) === h)
        R.subHeaders.push(w);
      else {
        const y = ie(t, h, {
          id: [n, g, h.id, w == null ? void 0 : w.id].filter(Boolean).join("_"),
          isPlaceholder: P,
          placeholderId: P ? `${p.filter((z) => z.column === h).length}` : void 0,
          depth: g,
          index: p.length
        });
        y.subHeaders.push(w), p.push(y);
      }
      f.headers.push(w), w.headerGroup = f;
    }), u.push(f), g > 0 && a(p, g - 1);
  }, c = o.map((d, g) => ie(t, d, {
    depth: l,
    index: g
  }));
  a(c, l - 1), u.reverse();
  const C = (d) => d.filter((f) => f.column.getIsVisible()).map((f) => {
    let p = 0, w = 0, R = [0];
    f.subHeaders && f.subHeaders.length ? (R = [], C(f.subHeaders).forEach((h) => {
      let {
        colSpan: P,
        rowSpan: y
      } = h;
      p += P, R.push(y);
    })) : p = 1;
    const _ = Math.min(...R);
    return w = w + _, f.colSpan = p, f.rowSpan = w, {
      colSpan: p,
      rowSpan: w
    };
  });
  return C((r = (i = u[0]) == null ? void 0 : i.headers) != null ? r : []), u;
}
const Ve = (e, o, t, n, r, i, l) => {
  let s = {
    id: o,
    index: n,
    original: t,
    depth: r,
    parentId: l,
    _valuesCache: {},
    _uniqueValuesCache: {},
    getValue: (u) => {
      if (s._valuesCache.hasOwnProperty(u))
        return s._valuesCache[u];
      const a = e.getColumn(u);
      if (a != null && a.accessorFn)
        return s._valuesCache[u] = a.accessorFn(s.original, n), s._valuesCache[u];
    },
    getUniqueValues: (u) => {
      if (s._uniqueValuesCache.hasOwnProperty(u))
        return s._uniqueValuesCache[u];
      const a = e.getColumn(u);
      if (a != null && a.accessorFn)
        return a.columnDef.getUniqueValues ? (s._uniqueValuesCache[u] = a.columnDef.getUniqueValues(s.original, n), s._uniqueValuesCache[u]) : (s._uniqueValuesCache[u] = [s.getValue(u)], s._uniqueValuesCache[u]);
    },
    renderValue: (u) => {
      var a;
      return (a = s.getValue(u)) != null ? a : e.options.renderFallbackValue;
    },
    subRows: [],
    getLeafRows: () => ve(s.subRows, (u) => u.subRows),
    getParentRow: () => s.parentId ? e.getRow(s.parentId, !0) : void 0,
    getParentRows: () => {
      let u = [], a = s;
      for (; ; ) {
        const c = a.getParentRow();
        if (!c) break;
        u.push(c), a = c;
      }
      return u.reverse();
    },
    getAllCells: m(() => [e.getAllLeafColumns()], (u) => u.map((a) => _e(e, s, a, a.id)), S(e.options, "debugRows", "getAllCells")),
    _getAllCellsByColumnId: m(() => [s.getAllCells()], (u) => u.reduce((a, c) => (a[c.column.id] = c, a), {}), S(e.options, "debugRows", "getAllCellsByColumnId"))
  };
  for (let u = 0; u < e._features.length; u++) {
    const a = e._features[u];
    a == null || a.createRow == null || a.createRow(s, e);
  }
  return s;
}, Me = {
  createColumn: (e, o) => {
    e._getFacetedRowModel = o.options.getFacetedRowModel && o.options.getFacetedRowModel(o, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : o.getPreFilteredRowModel(), e._getFacetedUniqueValues = o.options.getFacetedUniqueValues && o.options.getFacetedUniqueValues(o, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = o.options.getFacetedMinMaxValues && o.options.getFacetedMinMaxValues(o, e.id), e.getFacetedMinMaxValues = () => {
      if (e._getFacetedMinMaxValues)
        return e._getFacetedMinMaxValues();
    };
  }
}, se = (e, o, t) => {
  var n, r;
  const i = t == null || (n = t.toString()) == null ? void 0 : n.toLowerCase();
  return !!(!((r = e.getValue(o)) == null || (r = r.toString()) == null || (r = r.toLowerCase()) == null) && r.includes(i));
};
se.autoRemove = (e) => V(e);
const ue = (e, o, t) => {
  var n;
  return !!(!((n = e.getValue(o)) == null || (n = n.toString()) == null) && n.includes(t));
};
ue.autoRemove = (e) => V(e);
const ge = (e, o, t) => {
  var n;
  return ((n = e.getValue(o)) == null || (n = n.toString()) == null ? void 0 : n.toLowerCase()) === (t == null ? void 0 : t.toLowerCase());
};
ge.autoRemove = (e) => V(e);
const ae = (e, o, t) => {
  var n;
  return (n = e.getValue(o)) == null ? void 0 : n.includes(t);
};
ae.autoRemove = (e) => V(e) || !(e != null && e.length);
const de = (e, o, t) => !t.some((n) => {
  var r;
  return !((r = e.getValue(o)) != null && r.includes(n));
});
de.autoRemove = (e) => V(e) || !(e != null && e.length);
const ce = (e, o, t) => t.some((n) => {
  var r;
  return (r = e.getValue(o)) == null ? void 0 : r.includes(n);
});
ce.autoRemove = (e) => V(e) || !(e != null && e.length);
const fe = (e, o, t) => e.getValue(o) === t;
fe.autoRemove = (e) => V(e);
const pe = (e, o, t) => e.getValue(o) == t;
pe.autoRemove = (e) => V(e);
const Z = (e, o, t) => {
  let [n, r] = t;
  const i = e.getValue(o);
  return i >= n && i <= r;
};
Z.resolveFilterValue = (e) => {
  let [o, t] = e, n = typeof o != "number" ? parseFloat(o) : o, r = typeof t != "number" ? parseFloat(t) : t, i = o === null || Number.isNaN(n) ? -1 / 0 : n, l = t === null || Number.isNaN(r) ? 1 / 0 : r;
  if (i > l) {
    const s = i;
    i = l, l = s;
  }
  return [i, l];
};
Z.autoRemove = (e) => V(e) || V(e[0]) && V(e[1]);
const M = {
  includesString: se,
  includesStringSensitive: ue,
  equalsString: ge,
  arrIncludes: ae,
  arrIncludesAll: de,
  arrIncludesSome: ce,
  equals: fe,
  weakEquals: pe,
  inNumberRange: Z
};
function V(e) {
  return e == null || e === "";
}
const Pe = {
  getDefaultColumnDef: () => ({
    filterFn: "auto"
  }),
  getInitialState: (e) => ({
    columnFilters: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnFiltersChange: F("columnFilters", e),
    filterFromLeafRows: !1,
    maxLeafRowFilterDepth: 100
  }),
  createColumn: (e, o) => {
    e.getAutoFilterFn = () => {
      const t = o.getCoreRowModel().flatRows[0], n = t == null ? void 0 : t.getValue(e.id);
      return typeof n == "string" ? M.includesString : typeof n == "number" ? M.inNumberRange : typeof n == "boolean" || n !== null && typeof n == "object" ? M.equals : Array.isArray(n) ? M.arrIncludes : M.weakEquals;
    }, e.getFilterFn = () => {
      var t, n;
      return L(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (
        // @ts-ignore
        (t = (n = o.options.filterFns) == null ? void 0 : n[e.columnDef.filterFn]) != null ? t : M[e.columnDef.filterFn]
      );
    }, e.getCanFilter = () => {
      var t, n, r;
      return ((t = e.columnDef.enableColumnFilter) != null ? t : !0) && ((n = o.options.enableColumnFilters) != null ? n : !0) && ((r = o.options.enableFilters) != null ? r : !0) && !!e.accessorFn;
    }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
      var t;
      return (t = o.getState().columnFilters) == null || (t = t.find((n) => n.id === e.id)) == null ? void 0 : t.value;
    }, e.getFilterIndex = () => {
      var t, n;
      return (t = (n = o.getState().columnFilters) == null ? void 0 : n.findIndex((r) => r.id === e.id)) != null ? t : -1;
    }, e.setFilterValue = (t) => {
      o.setColumnFilters((n) => {
        const r = e.getFilterFn(), i = n == null ? void 0 : n.find((c) => c.id === e.id), l = x(t, i ? i.value : void 0);
        if (le(r, l, e)) {
          var s;
          return (s = n == null ? void 0 : n.filter((c) => c.id !== e.id)) != null ? s : [];
        }
        const u = {
          id: e.id,
          value: l
        };
        if (i) {
          var a;
          return (a = n == null ? void 0 : n.map((c) => c.id === e.id ? u : c)) != null ? a : [];
        }
        return n != null && n.length ? [...n, u] : [u];
      });
    };
  },
  createRow: (e, o) => {
    e.columnFilters = {}, e.columnFiltersMeta = {};
  },
  createTable: (e) => {
    e.setColumnFilters = (o) => {
      const t = e.getAllLeafColumns(), n = (r) => {
        var i;
        return (i = x(o, r)) == null ? void 0 : i.filter((l) => {
          const s = t.find((u) => u.id === l.id);
          if (s) {
            const u = s.getFilterFn();
            if (le(u, l.value, s))
              return !1;
          }
          return !0;
        });
      };
      e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(n);
    }, e.resetColumnFilters = (o) => {
      var t, n;
      e.setColumnFilters(o ? [] : (t = (n = e.initialState) == null ? void 0 : n.columnFilters) != null ? t : []);
    }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
  }
};
function le(e, o, t) {
  return (e && e.autoRemove ? e.autoRemove(o, t) : !1) || typeof o > "u" || typeof o == "string" && !o;
}
const xe = (e, o, t) => t.reduce((n, r) => {
  const i = r.getValue(e);
  return n + (typeof i == "number" ? i : 0);
}, 0), Ie = (e, o, t) => {
  let n;
  return t.forEach((r) => {
    const i = r.getValue(e);
    i != null && (n > i || n === void 0 && i >= i) && (n = i);
  }), n;
}, ye = (e, o, t) => {
  let n;
  return t.forEach((r) => {
    const i = r.getValue(e);
    i != null && (n < i || n === void 0 && i >= i) && (n = i);
  }), n;
}, Ee = (e, o, t) => {
  let n, r;
  return t.forEach((i) => {
    const l = i.getValue(e);
    l != null && (n === void 0 ? l >= l && (n = r = l) : (n > l && (n = l), r < l && (r = l)));
  }), [n, r];
}, De = (e, o) => {
  let t = 0, n = 0;
  if (o.forEach((r) => {
    let i = r.getValue(e);
    i != null && (i = +i) >= i && (++t, n += i);
  }), t) return n / t;
}, He = (e, o) => {
  if (!o.length)
    return;
  const t = o.map((i) => i.getValue(e));
  if (!he(t))
    return;
  if (t.length === 1)
    return t[0];
  const n = Math.floor(t.length / 2), r = t.sort((i, l) => i - l);
  return t.length % 2 !== 0 ? r[n] : (r[n - 1] + r[n]) / 2;
}, Ge = (e, o) => Array.from(new Set(o.map((t) => t.getValue(e))).values()), Ae = (e, o) => new Set(o.map((t) => t.getValue(e))).size, Le = (e, o) => o.length, O = {
  sum: xe,
  min: Ie,
  max: ye,
  extent: Ee,
  mean: De,
  median: He,
  unique: Ge,
  uniqueCount: Ae,
  count: Le
}, ze = {
  getDefaultColumnDef: () => ({
    aggregatedCell: (e) => {
      var o, t;
      return (o = (t = e.getValue()) == null || t.toString == null ? void 0 : t.toString()) != null ? o : null;
    },
    aggregationFn: "auto"
  }),
  getInitialState: (e) => ({
    grouping: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGroupingChange: F("grouping", e),
    groupedColumnMode: "reorder"
  }),
  createColumn: (e, o) => {
    e.toggleGrouping = () => {
      o.setGrouping((t) => t != null && t.includes(e.id) ? t.filter((n) => n !== e.id) : [...t ?? [], e.id]);
    }, e.getCanGroup = () => {
      var t, n;
      return ((t = e.columnDef.enableGrouping) != null ? t : !0) && ((n = o.options.enableGrouping) != null ? n : !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
    }, e.getIsGrouped = () => {
      var t;
      return (t = o.getState().grouping) == null ? void 0 : t.includes(e.id);
    }, e.getGroupedIndex = () => {
      var t;
      return (t = o.getState().grouping) == null ? void 0 : t.indexOf(e.id);
    }, e.getToggleGroupingHandler = () => {
      const t = e.getCanGroup();
      return () => {
        t && e.toggleGrouping();
      };
    }, e.getAutoAggregationFn = () => {
      const t = o.getCoreRowModel().flatRows[0], n = t == null ? void 0 : t.getValue(e.id);
      if (typeof n == "number")
        return O.sum;
      if (Object.prototype.toString.call(n) === "[object Date]")
        return O.extent;
    }, e.getAggregationFn = () => {
      var t, n;
      if (!e)
        throw new Error();
      return L(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (t = (n = o.options.aggregationFns) == null ? void 0 : n[e.columnDef.aggregationFn]) != null ? t : O[e.columnDef.aggregationFn];
    };
  },
  createTable: (e) => {
    e.setGrouping = (o) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(o), e.resetGrouping = (o) => {
      var t, n;
      e.setGrouping(o ? [] : (t = (n = e.initialState) == null ? void 0 : n.grouping) != null ? t : []);
    }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
  },
  createRow: (e, o) => {
    e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (t) => {
      if (e._groupingValuesCache.hasOwnProperty(t))
        return e._groupingValuesCache[t];
      const n = o.getColumn(t);
      return n != null && n.columnDef.getGroupingValue ? (e._groupingValuesCache[t] = n.columnDef.getGroupingValue(e.original), e._groupingValuesCache[t]) : e.getValue(t);
    }, e._groupingValuesCache = {};
  },
  createCell: (e, o, t, n) => {
    e.getIsGrouped = () => o.getIsGrouped() && o.id === t.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && o.getIsGrouped(), e.getIsAggregated = () => {
      var r;
      return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((r = t.subRows) != null && r.length);
    };
  }
};
function Oe(e, o, t) {
  if (!(o != null && o.length) || !t)
    return e;
  const n = e.filter((i) => !o.includes(i.id));
  return t === "remove" ? n : [...o.map((i) => e.find((l) => l.id === i)).filter(Boolean), ...n];
}
const Be = {
  getInitialState: (e) => ({
    columnOrder: [],
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnOrderChange: F("columnOrder", e)
  }),
  createColumn: (e, o) => {
    e.getIndex = m((t) => [D(o, t)], (t) => t.findIndex((n) => n.id === e.id), S(o.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (t) => {
      var n;
      return ((n = D(o, t)[0]) == null ? void 0 : n.id) === e.id;
    }, e.getIsLastColumn = (t) => {
      var n;
      const r = D(o, t);
      return ((n = r[r.length - 1]) == null ? void 0 : n.id) === e.id;
    };
  },
  createTable: (e) => {
    e.setColumnOrder = (o) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(o), e.resetColumnOrder = (o) => {
      var t;
      e.setColumnOrder(o ? [] : (t = e.initialState.columnOrder) != null ? t : []);
    }, e._getOrderColumnsFn = m(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (o, t, n) => (r) => {
      let i = [];
      if (!(o != null && o.length))
        i = r;
      else {
        const l = [...o], s = [...r];
        for (; s.length && l.length; ) {
          const u = l.shift(), a = s.findIndex((c) => c.id === u);
          a > -1 && i.push(s.splice(a, 1)[0]);
        }
        i = [...i, ...s];
      }
      return Oe(i, t, n);
    }, S(e.options, "debugTable", "_getOrderColumnsFn"));
  }
}, B = () => ({
  left: [],
  right: []
}), Ne = {
  getInitialState: (e) => ({
    columnPinning: B(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnPinningChange: F("columnPinning", e)
  }),
  createColumn: (e, o) => {
    e.pin = (t) => {
      const n = e.getLeafColumns().map((r) => r.id).filter(Boolean);
      o.setColumnPinning((r) => {
        var i, l;
        if (t === "right") {
          var s, u;
          return {
            left: ((s = r == null ? void 0 : r.left) != null ? s : []).filter((C) => !(n != null && n.includes(C))),
            right: [...((u = r == null ? void 0 : r.right) != null ? u : []).filter((C) => !(n != null && n.includes(C))), ...n]
          };
        }
        if (t === "left") {
          var a, c;
          return {
            left: [...((a = r == null ? void 0 : r.left) != null ? a : []).filter((C) => !(n != null && n.includes(C))), ...n],
            right: ((c = r == null ? void 0 : r.right) != null ? c : []).filter((C) => !(n != null && n.includes(C)))
          };
        }
        return {
          left: ((i = r == null ? void 0 : r.left) != null ? i : []).filter((C) => !(n != null && n.includes(C))),
          right: ((l = r == null ? void 0 : r.right) != null ? l : []).filter((C) => !(n != null && n.includes(C)))
        };
      });
    }, e.getCanPin = () => e.getLeafColumns().some((n) => {
      var r, i, l;
      return ((r = n.columnDef.enablePinning) != null ? r : !0) && ((i = (l = o.options.enableColumnPinning) != null ? l : o.options.enablePinning) != null ? i : !0);
    }), e.getIsPinned = () => {
      const t = e.getLeafColumns().map((s) => s.id), {
        left: n,
        right: r
      } = o.getState().columnPinning, i = t.some((s) => n == null ? void 0 : n.includes(s)), l = t.some((s) => r == null ? void 0 : r.includes(s));
      return i ? "left" : l ? "right" : !1;
    }, e.getPinnedIndex = () => {
      var t, n;
      const r = e.getIsPinned();
      return r ? (t = (n = o.getState().columnPinning) == null || (n = n[r]) == null ? void 0 : n.indexOf(e.id)) != null ? t : -1 : 0;
    };
  },
  createRow: (e, o) => {
    e.getCenterVisibleCells = m(() => [e._getAllVisibleCells(), o.getState().columnPinning.left, o.getState().columnPinning.right], (t, n, r) => {
      const i = [...n ?? [], ...r ?? []];
      return t.filter((l) => !i.includes(l.column.id));
    }, S(o.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = m(() => [e._getAllVisibleCells(), o.getState().columnPinning.left], (t, n) => (n ?? []).map((i) => t.find((l) => l.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "left"
    })), S(o.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = m(() => [e._getAllVisibleCells(), o.getState().columnPinning.right], (t, n) => (n ?? []).map((i) => t.find((l) => l.column.id === i)).filter(Boolean).map((i) => ({
      ...i,
      position: "right"
    })), S(o.options, "debugRows", "getRightVisibleCells"));
  },
  createTable: (e) => {
    e.setColumnPinning = (o) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(o), e.resetColumnPinning = (o) => {
      var t, n;
      return e.setColumnPinning(o ? B() : (t = (n = e.initialState) == null ? void 0 : n.columnPinning) != null ? t : B());
    }, e.getIsSomeColumnsPinned = (o) => {
      var t;
      const n = e.getState().columnPinning;
      if (!o) {
        var r, i;
        return !!((r = n.left) != null && r.length || (i = n.right) != null && i.length);
      }
      return !!((t = n[o]) != null && t.length);
    }, e.getLeftLeafColumns = m(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (o, t) => (t ?? []).map((n) => o.find((r) => r.id === n)).filter(Boolean), S(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = m(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (o, t) => (t ?? []).map((n) => o.find((r) => r.id === n)).filter(Boolean), S(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = m(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (o, t, n) => {
      const r = [...t ?? [], ...n ?? []];
      return o.filter((i) => !r.includes(i.id));
    }, S(e.options, "debugColumns", "getCenterLeafColumns"));
  }
}, G = {
  size: 150,
  minSize: 20,
  maxSize: Number.MAX_SAFE_INTEGER
}, N = () => ({
  startOffset: null,
  startSize: null,
  deltaOffset: null,
  deltaPercentage: null,
  isResizingColumn: !1,
  columnSizingStart: []
}), Te = {
  getDefaultColumnDef: () => G,
  getInitialState: (e) => ({
    columnSizing: {},
    columnSizingInfo: N(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    columnResizeMode: "onEnd",
    columnResizeDirection: "ltr",
    onColumnSizingChange: F("columnSizing", e),
    onColumnSizingInfoChange: F("columnSizingInfo", e)
  }),
  createColumn: (e, o) => {
    e.getSize = () => {
      var t, n, r;
      const i = o.getState().columnSizing[e.id];
      return Math.min(Math.max((t = e.columnDef.minSize) != null ? t : G.minSize, (n = i ?? e.columnDef.size) != null ? n : G.size), (r = e.columnDef.maxSize) != null ? r : G.maxSize);
    }, e.getStart = m((t) => [t, D(o, t), o.getState().columnSizing], (t, n) => n.slice(0, e.getIndex(t)).reduce((r, i) => r + i.getSize(), 0), S(o.options, "debugColumns", "getStart")), e.getAfter = m((t) => [t, D(o, t), o.getState().columnSizing], (t, n) => n.slice(e.getIndex(t) + 1).reduce((r, i) => r + i.getSize(), 0), S(o.options, "debugColumns", "getAfter")), e.resetSize = () => {
      o.setColumnSizing((t) => {
        let {
          [e.id]: n,
          ...r
        } = t;
        return r;
      });
    }, e.getCanResize = () => {
      var t, n;
      return ((t = e.columnDef.enableResizing) != null ? t : !0) && ((n = o.options.enableColumnResizing) != null ? n : !0);
    }, e.getIsResizing = () => o.getState().columnSizingInfo.isResizingColumn === e.id;
  },
  createHeader: (e, o) => {
    e.getSize = () => {
      let t = 0;
      const n = (r) => {
        if (r.subHeaders.length)
          r.subHeaders.forEach(n);
        else {
          var i;
          t += (i = r.column.getSize()) != null ? i : 0;
        }
      };
      return n(e), t;
    }, e.getStart = () => {
      if (e.index > 0) {
        const t = e.headerGroup.headers[e.index - 1];
        return t.getStart() + t.getSize();
      }
      return 0;
    }, e.getResizeHandler = (t) => {
      const n = o.getColumn(e.column.id), r = n == null ? void 0 : n.getCanResize();
      return (i) => {
        if (!n || !r || (i.persist == null || i.persist(), T(i) && i.touches && i.touches.length > 1))
          return;
        const l = e.getSize(), s = e ? e.getLeafHeaders().map((R) => [R.column.id, R.column.getSize()]) : [[n.id, n.getSize()]], u = T(i) ? Math.round(i.touches[0].clientX) : i.clientX, a = {}, c = (R, _) => {
          typeof _ == "number" && (o.setColumnSizingInfo((h) => {
            var P, y;
            const z = o.options.columnResizeDirection === "rtl" ? -1 : 1, te = (_ - ((P = h == null ? void 0 : h.startOffset) != null ? P : 0)) * z, ne = Math.max(te / ((y = h == null ? void 0 : h.startSize) != null ? y : 0), -0.999999);
            return h.columnSizingStart.forEach((Se) => {
              let [Ce, oe] = Se;
              a[Ce] = Math.round(Math.max(oe + oe * ne, 0) * 100) / 100;
            }), {
              ...h,
              deltaOffset: te,
              deltaPercentage: ne
            };
          }), (o.options.columnResizeMode === "onChange" || R === "end") && o.setColumnSizing((h) => ({
            ...h,
            ...a
          })));
        }, C = (R) => c("move", R), d = (R) => {
          c("end", R), o.setColumnSizingInfo((_) => ({
            ..._,
            isResizingColumn: !1,
            startOffset: null,
            startSize: null,
            deltaOffset: null,
            deltaPercentage: null,
            columnSizingStart: []
          }));
        }, g = t || typeof document < "u" ? document : null, f = {
          moveHandler: (R) => C(R.clientX),
          upHandler: (R) => {
            g == null || g.removeEventListener("mousemove", f.moveHandler), g == null || g.removeEventListener("mouseup", f.upHandler), d(R.clientX);
          }
        }, p = {
          moveHandler: (R) => (R.cancelable && (R.preventDefault(), R.stopPropagation()), C(R.touches[0].clientX), !1),
          upHandler: (R) => {
            var _;
            g == null || g.removeEventListener("touchmove", p.moveHandler), g == null || g.removeEventListener("touchend", p.upHandler), R.cancelable && (R.preventDefault(), R.stopPropagation()), d((_ = R.touches[0]) == null ? void 0 : _.clientX);
          }
        }, w = qe() ? {
          passive: !1
        } : !1;
        T(i) ? (g == null || g.addEventListener("touchmove", p.moveHandler, w), g == null || g.addEventListener("touchend", p.upHandler, w)) : (g == null || g.addEventListener("mousemove", f.moveHandler, w), g == null || g.addEventListener("mouseup", f.upHandler, w)), o.setColumnSizingInfo((R) => ({
          ...R,
          startOffset: u,
          startSize: l,
          deltaOffset: 0,
          deltaPercentage: 0,
          columnSizingStart: s,
          isResizingColumn: n.id
        }));
      };
    };
  },
  createTable: (e) => {
    e.setColumnSizing = (o) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(o), e.setColumnSizingInfo = (o) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(o), e.resetColumnSizing = (o) => {
      var t;
      e.setColumnSizing(o ? {} : (t = e.initialState.columnSizing) != null ? t : {});
    }, e.resetHeaderSizeInfo = (o) => {
      var t;
      e.setColumnSizingInfo(o ? N() : (t = e.initialState.columnSizingInfo) != null ? t : N());
    }, e.getTotalSize = () => {
      var o, t;
      return (o = (t = e.getHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((n, r) => n + r.getSize(), 0)) != null ? o : 0;
    }, e.getLeftTotalSize = () => {
      var o, t;
      return (o = (t = e.getLeftHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((n, r) => n + r.getSize(), 0)) != null ? o : 0;
    }, e.getCenterTotalSize = () => {
      var o, t;
      return (o = (t = e.getCenterHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((n, r) => n + r.getSize(), 0)) != null ? o : 0;
    }, e.getRightTotalSize = () => {
      var o, t;
      return (o = (t = e.getRightHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((n, r) => n + r.getSize(), 0)) != null ? o : 0;
    };
  }
};
let A = null;
function qe() {
  if (typeof A == "boolean") return A;
  let e = !1;
  try {
    const o = {
      get passive() {
        return e = !0, !1;
      }
    }, t = () => {
    };
    window.addEventListener("test", t, o), window.removeEventListener("test", t);
  } catch {
    e = !1;
  }
  return A = e, A;
}
function T(e) {
  return e.type === "touchstart";
}
const ke = {
  getInitialState: (e) => ({
    columnVisibility: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onColumnVisibilityChange: F("columnVisibility", e)
  }),
  createColumn: (e, o) => {
    e.toggleVisibility = (t) => {
      e.getCanHide() && o.setColumnVisibility((n) => ({
        ...n,
        [e.id]: t ?? !e.getIsVisible()
      }));
    }, e.getIsVisible = () => {
      var t, n;
      const r = e.columns;
      return (t = r.length ? r.some((i) => i.getIsVisible()) : (n = o.getState().columnVisibility) == null ? void 0 : n[e.id]) != null ? t : !0;
    }, e.getCanHide = () => {
      var t, n;
      return ((t = e.columnDef.enableHiding) != null ? t : !0) && ((n = o.options.enableHiding) != null ? n : !0);
    }, e.getToggleVisibilityHandler = () => (t) => {
      e.toggleVisibility == null || e.toggleVisibility(t.target.checked);
    };
  },
  createRow: (e, o) => {
    e._getAllVisibleCells = m(() => [e.getAllCells(), o.getState().columnVisibility], (t) => t.filter((n) => n.column.getIsVisible()), S(o.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = m(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (t, n, r) => [...t, ...n, ...r], S(o.options, "debugRows", "getVisibleCells"));
  },
  createTable: (e) => {
    const o = (t, n) => m(() => [n(), n().filter((r) => r.getIsVisible()).map((r) => r.id).join("_")], (r) => r.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), S(e.options, "debugColumns", t));
    e.getVisibleFlatColumns = o("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = o("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = o("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = o("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = o("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (t) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(t), e.resetColumnVisibility = (t) => {
      var n;
      e.setColumnVisibility(t ? {} : (n = e.initialState.columnVisibility) != null ? n : {});
    }, e.toggleAllColumnsVisible = (t) => {
      var n;
      t = (n = t) != null ? n : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((r, i) => ({
        ...r,
        [i.id]: t || !(i.getCanHide != null && i.getCanHide())
      }), {}));
    }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((t) => !(t.getIsVisible != null && t.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((t) => t.getIsVisible == null ? void 0 : t.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (t) => {
      var n;
      e.toggleAllColumnsVisible((n = t.target) == null ? void 0 : n.checked);
    };
  }
};
function D(e, o) {
  return o ? o === "center" ? e.getCenterVisibleLeafColumns() : o === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const je = {
  createTable: (e) => {
    e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
      if (e._getGlobalFacetedMinMaxValues)
        return e._getGlobalFacetedMinMaxValues();
    };
  }
}, Ue = {
  getInitialState: (e) => ({
    globalFilter: void 0,
    ...e
  }),
  getDefaultOptions: (e) => ({
    onGlobalFilterChange: F("globalFilter", e),
    globalFilterFn: "auto",
    getColumnCanGlobalFilter: (o) => {
      var t;
      const n = (t = e.getCoreRowModel().flatRows[0]) == null || (t = t._getAllCellsByColumnId()[o.id]) == null ? void 0 : t.getValue();
      return typeof n == "string" || typeof n == "number";
    }
  }),
  createColumn: (e, o) => {
    e.getCanGlobalFilter = () => {
      var t, n, r, i;
      return ((t = e.columnDef.enableGlobalFilter) != null ? t : !0) && ((n = o.options.enableGlobalFilter) != null ? n : !0) && ((r = o.options.enableFilters) != null ? r : !0) && ((i = o.options.getColumnCanGlobalFilter == null ? void 0 : o.options.getColumnCanGlobalFilter(e)) != null ? i : !0) && !!e.accessorFn;
    };
  },
  createTable: (e) => {
    e.getGlobalAutoFilterFn = () => M.includesString, e.getGlobalFilterFn = () => {
      var o, t;
      const {
        globalFilterFn: n
      } = e.options;
      return L(n) ? n : n === "auto" ? e.getGlobalAutoFilterFn() : (o = (t = e.options.filterFns) == null ? void 0 : t[n]) != null ? o : M[n];
    }, e.setGlobalFilter = (o) => {
      e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(o);
    }, e.resetGlobalFilter = (o) => {
      e.setGlobalFilter(o ? void 0 : e.initialState.globalFilter);
    };
  }
}, Xe = {
  getInitialState: (e) => ({
    expanded: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onExpandedChange: F("expanded", e),
    paginateExpandedRows: !0
  }),
  createTable: (e) => {
    let o = !1, t = !1;
    e._autoResetExpanded = () => {
      var n, r;
      if (!o) {
        e._queue(() => {
          o = !0;
        });
        return;
      }
      if ((n = (r = e.options.autoResetAll) != null ? r : e.options.autoResetExpanded) != null ? n : !e.options.manualExpanding) {
        if (t) return;
        t = !0, e._queue(() => {
          e.resetExpanded(), t = !1;
        });
      }
    }, e.setExpanded = (n) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(n), e.toggleAllRowsExpanded = (n) => {
      n ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
    }, e.resetExpanded = (n) => {
      var r, i;
      e.setExpanded(n ? {} : (r = (i = e.initialState) == null ? void 0 : i.expanded) != null ? r : {});
    }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((n) => n.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (n) => {
      n.persist == null || n.persist(), e.toggleAllRowsExpanded();
    }, e.getIsSomeRowsExpanded = () => {
      const n = e.getState().expanded;
      return n === !0 || Object.values(n).some(Boolean);
    }, e.getIsAllRowsExpanded = () => {
      const n = e.getState().expanded;
      return typeof n == "boolean" ? n === !0 : !(!Object.keys(n).length || e.getRowModel().flatRows.some((r) => !r.getIsExpanded()));
    }, e.getExpandedDepth = () => {
      let n = 0;
      return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((i) => {
        const l = i.split(".");
        n = Math.max(n, l.length);
      }), n;
    }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
  },
  createRow: (e, o) => {
    e.toggleExpanded = (t) => {
      o.setExpanded((n) => {
        var r;
        const i = n === !0 ? !0 : !!(n != null && n[e.id]);
        let l = {};
        if (n === !0 ? Object.keys(o.getRowModel().rowsById).forEach((s) => {
          l[s] = !0;
        }) : l = n, t = (r = t) != null ? r : !i, !i && t)
          return {
            ...l,
            [e.id]: !0
          };
        if (i && !t) {
          const {
            [e.id]: s,
            ...u
          } = l;
          return u;
        }
        return n;
      });
    }, e.getIsExpanded = () => {
      var t;
      const n = o.getState().expanded;
      return !!((t = o.options.getIsRowExpanded == null ? void 0 : o.options.getIsRowExpanded(e)) != null ? t : n === !0 || n != null && n[e.id]);
    }, e.getCanExpand = () => {
      var t, n, r;
      return (t = o.options.getRowCanExpand == null ? void 0 : o.options.getRowCanExpand(e)) != null ? t : ((n = o.options.enableExpanding) != null ? n : !0) && !!((r = e.subRows) != null && r.length);
    }, e.getIsAllParentsExpanded = () => {
      let t = !0, n = e;
      for (; t && n.parentId; )
        n = o.getRow(n.parentId, !0), t = n.getIsExpanded();
      return t;
    }, e.getToggleExpandedHandler = () => {
      const t = e.getCanExpand();
      return () => {
        t && e.toggleExpanded();
      };
    };
  }
}, K = 0, J = 10, q = () => ({
  pageIndex: K,
  pageSize: J
}), Ke = {
  getInitialState: (e) => ({
    ...e,
    pagination: {
      ...q(),
      ...e == null ? void 0 : e.pagination
    }
  }),
  getDefaultOptions: (e) => ({
    onPaginationChange: F("pagination", e)
  }),
  createTable: (e) => {
    let o = !1, t = !1;
    e._autoResetPageIndex = () => {
      var n, r;
      if (!o) {
        e._queue(() => {
          o = !0;
        });
        return;
      }
      if ((n = (r = e.options.autoResetAll) != null ? r : e.options.autoResetPageIndex) != null ? n : !e.options.manualPagination) {
        if (t) return;
        t = !0, e._queue(() => {
          e.resetPageIndex(), t = !1;
        });
      }
    }, e.setPagination = (n) => {
      const r = (i) => x(n, i);
      return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(r);
    }, e.resetPagination = (n) => {
      var r;
      e.setPagination(n ? q() : (r = e.initialState.pagination) != null ? r : q());
    }, e.setPageIndex = (n) => {
      e.setPagination((r) => {
        let i = x(n, r.pageIndex);
        const l = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
        return i = Math.max(0, Math.min(i, l)), {
          ...r,
          pageIndex: i
        };
      });
    }, e.resetPageIndex = (n) => {
      var r, i;
      e.setPageIndex(n ? K : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? r : K);
    }, e.resetPageSize = (n) => {
      var r, i;
      e.setPageSize(n ? J : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? r : J);
    }, e.setPageSize = (n) => {
      e.setPagination((r) => {
        const i = Math.max(1, x(n, r.pageSize)), l = r.pageSize * r.pageIndex, s = Math.floor(l / i);
        return {
          ...r,
          pageIndex: s,
          pageSize: i
        };
      });
    }, e.setPageCount = (n) => e.setPagination((r) => {
      var i;
      let l = x(n, (i = e.options.pageCount) != null ? i : -1);
      return typeof l == "number" && (l = Math.max(-1, l)), {
        ...r,
        pageCount: l
      };
    }), e.getPageOptions = m(() => [e.getPageCount()], (n) => {
      let r = [];
      return n && n > 0 && (r = [...new Array(n)].fill(null).map((i, l) => l)), r;
    }, S(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
      const {
        pageIndex: n
      } = e.getState().pagination, r = e.getPageCount();
      return r === -1 ? !0 : r === 0 ? !1 : n < r - 1;
    }, e.previousPage = () => e.setPageIndex((n) => n - 1), e.nextPage = () => e.setPageIndex((n) => n + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
      var n;
      return (n = e.options.pageCount) != null ? n : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
    }, e.getRowCount = () => {
      var n;
      return (n = e.options.rowCount) != null ? n : e.getPrePaginationRowModel().rows.length;
    };
  }
}, k = () => ({
  top: [],
  bottom: []
}), Je = {
  getInitialState: (e) => ({
    rowPinning: k(),
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowPinningChange: F("rowPinning", e)
  }),
  createRow: (e, o) => {
    e.pin = (t, n, r) => {
      const i = n ? e.getLeafRows().map((u) => {
        let {
          id: a
        } = u;
        return a;
      }) : [], l = r ? e.getParentRows().map((u) => {
        let {
          id: a
        } = u;
        return a;
      }) : [], s = /* @__PURE__ */ new Set([...l, e.id, ...i]);
      o.setRowPinning((u) => {
        var a, c;
        if (t === "bottom") {
          var C, d;
          return {
            top: ((C = u == null ? void 0 : u.top) != null ? C : []).filter((p) => !(s != null && s.has(p))),
            bottom: [...((d = u == null ? void 0 : u.bottom) != null ? d : []).filter((p) => !(s != null && s.has(p))), ...Array.from(s)]
          };
        }
        if (t === "top") {
          var g, f;
          return {
            top: [...((g = u == null ? void 0 : u.top) != null ? g : []).filter((p) => !(s != null && s.has(p))), ...Array.from(s)],
            bottom: ((f = u == null ? void 0 : u.bottom) != null ? f : []).filter((p) => !(s != null && s.has(p)))
          };
        }
        return {
          top: ((a = u == null ? void 0 : u.top) != null ? a : []).filter((p) => !(s != null && s.has(p))),
          bottom: ((c = u == null ? void 0 : u.bottom) != null ? c : []).filter((p) => !(s != null && s.has(p)))
        };
      });
    }, e.getCanPin = () => {
      var t;
      const {
        enableRowPinning: n,
        enablePinning: r
      } = o.options;
      return typeof n == "function" ? n(e) : (t = n ?? r) != null ? t : !0;
    }, e.getIsPinned = () => {
      const t = [e.id], {
        top: n,
        bottom: r
      } = o.getState().rowPinning, i = t.some((s) => n == null ? void 0 : n.includes(s)), l = t.some((s) => r == null ? void 0 : r.includes(s));
      return i ? "top" : l ? "bottom" : !1;
    }, e.getPinnedIndex = () => {
      var t, n;
      const r = e.getIsPinned();
      if (!r) return -1;
      const i = (t = r === "top" ? o.getTopRows() : o.getBottomRows()) == null ? void 0 : t.map((l) => {
        let {
          id: s
        } = l;
        return s;
      });
      return (n = i == null ? void 0 : i.indexOf(e.id)) != null ? n : -1;
    };
  },
  createTable: (e) => {
    e.setRowPinning = (o) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(o), e.resetRowPinning = (o) => {
      var t, n;
      return e.setRowPinning(o ? k() : (t = (n = e.initialState) == null ? void 0 : n.rowPinning) != null ? t : k());
    }, e.getIsSomeRowsPinned = (o) => {
      var t;
      const n = e.getState().rowPinning;
      if (!o) {
        var r, i;
        return !!((r = n.top) != null && r.length || (i = n.bottom) != null && i.length);
      }
      return !!((t = n[o]) != null && t.length);
    }, e._getPinnedRows = (o, t, n) => {
      var r;
      return ((r = e.options.keepPinnedRows) == null || r ? (
        //get all rows that are pinned even if they would not be otherwise visible
        //account for expanded parent rows, but not pagination or filtering
        (t ?? []).map((l) => {
          const s = e.getRow(l, !0);
          return s.getIsAllParentsExpanded() ? s : null;
        })
      ) : (
        //else get only visible rows that are pinned
        (t ?? []).map((l) => o.find((s) => s.id === l))
      )).filter(Boolean).map((l) => ({
        ...l,
        position: n
      }));
    }, e.getTopRows = m(() => [e.getRowModel().rows, e.getState().rowPinning.top], (o, t) => e._getPinnedRows(o, t, "top"), S(e.options, "debugRows", "getTopRows")), e.getBottomRows = m(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (o, t) => e._getPinnedRows(o, t, "bottom"), S(e.options, "debugRows", "getBottomRows")), e.getCenterRows = m(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (o, t, n) => {
      const r = /* @__PURE__ */ new Set([...t ?? [], ...n ?? []]);
      return o.filter((i) => !r.has(i.id));
    }, S(e.options, "debugRows", "getCenterRows"));
  }
}, Qe = {
  getInitialState: (e) => ({
    rowSelection: {},
    ...e
  }),
  getDefaultOptions: (e) => ({
    onRowSelectionChange: F("rowSelection", e),
    enableRowSelection: !0,
    enableMultiRowSelection: !0,
    enableSubRowSelection: !0
    // enableGroupingRowSelection: false,
    // isAdditiveSelectEvent: (e: unknown) => !!e.metaKey,
    // isInclusiveSelectEvent: (e: unknown) => !!e.shiftKey,
  }),
  createTable: (e) => {
    e.setRowSelection = (o) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(o), e.resetRowSelection = (o) => {
      var t;
      return e.setRowSelection(o ? {} : (t = e.initialState.rowSelection) != null ? t : {});
    }, e.toggleAllRowsSelected = (o) => {
      e.setRowSelection((t) => {
        o = typeof o < "u" ? o : !e.getIsAllRowsSelected();
        const n = {
          ...t
        }, r = e.getPreGroupedRowModel().flatRows;
        return o ? r.forEach((i) => {
          i.getCanSelect() && (n[i.id] = !0);
        }) : r.forEach((i) => {
          delete n[i.id];
        }), n;
      });
    }, e.toggleAllPageRowsSelected = (o) => e.setRowSelection((t) => {
      const n = typeof o < "u" ? o : !e.getIsAllPageRowsSelected(), r = {
        ...t
      };
      return e.getRowModel().rows.forEach((i) => {
        Q(r, i.id, n, !0, e);
      }), r;
    }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = m(() => [e.getState().rowSelection, e.getCoreRowModel()], (o, t) => Object.keys(o).length ? j(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, S(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = m(() => [e.getState().rowSelection, e.getFilteredRowModel()], (o, t) => Object.keys(o).length ? j(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, S(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = m(() => [e.getState().rowSelection, e.getSortedRowModel()], (o, t) => Object.keys(o).length ? j(e, t) : {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, S(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
      const o = e.getFilteredRowModel().flatRows, {
        rowSelection: t
      } = e.getState();
      let n = !!(o.length && Object.keys(t).length);
      return n && o.some((r) => r.getCanSelect() && !t[r.id]) && (n = !1), n;
    }, e.getIsAllPageRowsSelected = () => {
      const o = e.getPaginationRowModel().flatRows.filter((r) => r.getCanSelect()), {
        rowSelection: t
      } = e.getState();
      let n = !!o.length;
      return n && o.some((r) => !t[r.id]) && (n = !1), n;
    }, e.getIsSomeRowsSelected = () => {
      var o;
      const t = Object.keys((o = e.getState().rowSelection) != null ? o : {}).length;
      return t > 0 && t < e.getFilteredRowModel().flatRows.length;
    }, e.getIsSomePageRowsSelected = () => {
      const o = e.getPaginationRowModel().flatRows;
      return e.getIsAllPageRowsSelected() ? !1 : o.filter((t) => t.getCanSelect()).some((t) => t.getIsSelected() || t.getIsSomeSelected());
    }, e.getToggleAllRowsSelectedHandler = () => (o) => {
      e.toggleAllRowsSelected(o.target.checked);
    }, e.getToggleAllPageRowsSelectedHandler = () => (o) => {
      e.toggleAllPageRowsSelected(o.target.checked);
    };
  },
  createRow: (e, o) => {
    e.toggleSelected = (t, n) => {
      const r = e.getIsSelected();
      o.setRowSelection((i) => {
        var l;
        if (t = typeof t < "u" ? t : !r, e.getCanSelect() && r === t)
          return i;
        const s = {
          ...i
        };
        return Q(s, e.id, t, (l = n == null ? void 0 : n.selectChildren) != null ? l : !0, o), s;
      });
    }, e.getIsSelected = () => {
      const {
        rowSelection: t
      } = o.getState();
      return b(e, t);
    }, e.getIsSomeSelected = () => {
      const {
        rowSelection: t
      } = o.getState();
      return W(e, t) === "some";
    }, e.getIsAllSubRowsSelected = () => {
      const {
        rowSelection: t
      } = o.getState();
      return W(e, t) === "all";
    }, e.getCanSelect = () => {
      var t;
      return typeof o.options.enableRowSelection == "function" ? o.options.enableRowSelection(e) : (t = o.options.enableRowSelection) != null ? t : !0;
    }, e.getCanSelectSubRows = () => {
      var t;
      return typeof o.options.enableSubRowSelection == "function" ? o.options.enableSubRowSelection(e) : (t = o.options.enableSubRowSelection) != null ? t : !0;
    }, e.getCanMultiSelect = () => {
      var t;
      return typeof o.options.enableMultiRowSelection == "function" ? o.options.enableMultiRowSelection(e) : (t = o.options.enableMultiRowSelection) != null ? t : !0;
    }, e.getToggleSelectedHandler = () => {
      const t = e.getCanSelect();
      return (n) => {
        var r;
        t && e.toggleSelected((r = n.target) == null ? void 0 : r.checked);
      };
    };
  }
}, Q = (e, o, t, n, r) => {
  var i;
  const l = r.getRow(o, !0);
  t ? (l.getCanMultiSelect() || Object.keys(e).forEach((s) => delete e[s]), l.getCanSelect() && (e[o] = !0)) : delete e[o], n && (i = l.subRows) != null && i.length && l.getCanSelectSubRows() && l.subRows.forEach((s) => Q(e, s.id, t, n, r));
};
function j(e, o) {
  const t = e.getState().rowSelection, n = [], r = {}, i = function(l, s) {
    return l.map((u) => {
      var a;
      const c = b(u, t);
      if (c && (n.push(u), r[u.id] = u), (a = u.subRows) != null && a.length && (u = {
        ...u,
        subRows: i(u.subRows)
      }), c)
        return u;
    }).filter(Boolean);
  };
  return {
    rows: i(o.rows),
    flatRows: n,
    rowsById: r
  };
}
function b(e, o) {
  var t;
  return (t = o[e.id]) != null ? t : !1;
}
function W(e, o, t) {
  var n;
  if (!((n = e.subRows) != null && n.length)) return !1;
  let r = !0, i = !1;
  return e.subRows.forEach((l) => {
    if (!(i && !r) && (l.getCanSelect() && (b(l, o) ? i = !0 : r = !1), l.subRows && l.subRows.length)) {
      const s = W(l, o);
      s === "all" ? i = !0 : (s === "some" && (i = !0), r = !1);
    }
  }), r ? "all" : i ? "some" : !1;
}
const Y = /([0-9]+)/gm, We = (e, o, t) => me(I(e.getValue(t)).toLowerCase(), I(o.getValue(t)).toLowerCase()), Ye = (e, o, t) => me(I(e.getValue(t)), I(o.getValue(t))), Ze = (e, o, t) => ee(I(e.getValue(t)).toLowerCase(), I(o.getValue(t)).toLowerCase()), be = (e, o, t) => ee(I(e.getValue(t)), I(o.getValue(t))), et = (e, o, t) => {
  const n = e.getValue(t), r = o.getValue(t);
  return n > r ? 1 : n < r ? -1 : 0;
}, tt = (e, o, t) => ee(e.getValue(t), o.getValue(t));
function ee(e, o) {
  return e === o ? 0 : e > o ? 1 : -1;
}
function I(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function me(e, o) {
  const t = e.split(Y).filter(Boolean), n = o.split(Y).filter(Boolean);
  for (; t.length && n.length; ) {
    const r = t.shift(), i = n.shift(), l = parseInt(r, 10), s = parseInt(i, 10), u = [l, s].sort();
    if (isNaN(u[0])) {
      if (r > i)
        return 1;
      if (i > r)
        return -1;
      continue;
    }
    if (isNaN(u[1]))
      return isNaN(l) ? -1 : 1;
    if (l > s)
      return 1;
    if (s > l)
      return -1;
  }
  return t.length - n.length;
}
const E = {
  alphanumeric: We,
  alphanumericCaseSensitive: Ye,
  text: Ze,
  textCaseSensitive: be,
  datetime: et,
  basic: tt
}, nt = {
  getInitialState: (e) => ({
    sorting: [],
    ...e
  }),
  getDefaultColumnDef: () => ({
    sortingFn: "auto",
    sortUndefined: 1
  }),
  getDefaultOptions: (e) => ({
    onSortingChange: F("sorting", e),
    isMultiSortEvent: (o) => o.shiftKey
  }),
  createColumn: (e, o) => {
    e.getAutoSortingFn = () => {
      const t = o.getFilteredRowModel().flatRows.slice(10);
      let n = !1;
      for (const r of t) {
        const i = r == null ? void 0 : r.getValue(e.id);
        if (Object.prototype.toString.call(i) === "[object Date]")
          return E.datetime;
        if (typeof i == "string" && (n = !0, i.split(Y).length > 1))
          return E.alphanumeric;
      }
      return n ? E.text : E.basic;
    }, e.getAutoSortDir = () => {
      const t = o.getFilteredRowModel().flatRows[0];
      return typeof (t == null ? void 0 : t.getValue(e.id)) == "string" ? "asc" : "desc";
    }, e.getSortingFn = () => {
      var t, n;
      if (!e)
        throw new Error();
      return L(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (t = (n = o.options.sortingFns) == null ? void 0 : n[e.columnDef.sortingFn]) != null ? t : E[e.columnDef.sortingFn];
    }, e.toggleSorting = (t, n) => {
      const r = e.getNextSortingOrder(), i = typeof t < "u" && t !== null;
      o.setSorting((l) => {
        const s = l == null ? void 0 : l.find((g) => g.id === e.id), u = l == null ? void 0 : l.findIndex((g) => g.id === e.id);
        let a = [], c, C = i ? t : r === "desc";
        if (l != null && l.length && e.getCanMultiSort() && n ? s ? c = "toggle" : c = "add" : l != null && l.length && u !== l.length - 1 ? c = "replace" : s ? c = "toggle" : c = "replace", c === "toggle" && (i || r || (c = "remove")), c === "add") {
          var d;
          a = [...l, {
            id: e.id,
            desc: C
          }], a.splice(0, a.length - ((d = o.options.maxMultiSortColCount) != null ? d : Number.MAX_SAFE_INTEGER));
        } else c === "toggle" ? a = l.map((g) => g.id === e.id ? {
          ...g,
          desc: C
        } : g) : c === "remove" ? a = l.filter((g) => g.id !== e.id) : a = [{
          id: e.id,
          desc: C
        }];
        return a;
      });
    }, e.getFirstSortDir = () => {
      var t, n;
      return ((t = (n = e.columnDef.sortDescFirst) != null ? n : o.options.sortDescFirst) != null ? t : e.getAutoSortDir() === "desc") ? "desc" : "asc";
    }, e.getNextSortingOrder = (t) => {
      var n, r;
      const i = e.getFirstSortDir(), l = e.getIsSorted();
      return l ? l !== i && ((n = o.options.enableSortingRemoval) == null || n) && // If enableSortRemove, enable in general
      (!(t && (r = o.options.enableMultiRemove) != null) || r) ? !1 : l === "desc" ? "asc" : "desc" : i;
    }, e.getCanSort = () => {
      var t, n;
      return ((t = e.columnDef.enableSorting) != null ? t : !0) && ((n = o.options.enableSorting) != null ? n : !0) && !!e.accessorFn;
    }, e.getCanMultiSort = () => {
      var t, n;
      return (t = (n = e.columnDef.enableMultiSort) != null ? n : o.options.enableMultiSort) != null ? t : !!e.accessorFn;
    }, e.getIsSorted = () => {
      var t;
      const n = (t = o.getState().sorting) == null ? void 0 : t.find((r) => r.id === e.id);
      return n ? n.desc ? "desc" : "asc" : !1;
    }, e.getSortIndex = () => {
      var t, n;
      return (t = (n = o.getState().sorting) == null ? void 0 : n.findIndex((r) => r.id === e.id)) != null ? t : -1;
    }, e.clearSorting = () => {
      o.setSorting((t) => t != null && t.length ? t.filter((n) => n.id !== e.id) : []);
    }, e.getToggleSortingHandler = () => {
      const t = e.getCanSort();
      return (n) => {
        t && (n.persist == null || n.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? o.options.isMultiSortEvent == null ? void 0 : o.options.isMultiSortEvent(n) : !1));
      };
    };
  },
  createTable: (e) => {
    e.setSorting = (o) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(o), e.resetSorting = (o) => {
      var t, n;
      e.setSorting(o ? [] : (t = (n = e.initialState) == null ? void 0 : n.sorting) != null ? t : []);
    }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
  }
}, ot = [
  $e,
  ke,
  Be,
  Ne,
  Me,
  Pe,
  je,
  //depends on ColumnFaceting
  Ue,
  //depends on ColumnFiltering
  nt,
  ze,
  //depends on RowSorting
  Xe,
  Ke,
  Je,
  Qe,
  Te
];
function rt(e) {
  var o, t;
  process.env.NODE_ENV !== "production" && (e.debugAll || e.debugTable) && console.info("Creating Table Instance...");
  const n = [...ot, ...(o = e._features) != null ? o : []];
  let r = {
    _features: n
  };
  const i = r._features.reduce((d, g) => Object.assign(d, g.getDefaultOptions == null ? void 0 : g.getDefaultOptions(r)), {}), l = (d) => r.options.mergeOptions ? r.options.mergeOptions(i, d) : {
    ...i,
    ...d
  };
  let u = {
    ...{},
    ...(t = e.initialState) != null ? t : {}
  };
  r._features.forEach((d) => {
    var g;
    u = (g = d.getInitialState == null ? void 0 : d.getInitialState(u)) != null ? g : u;
  });
  const a = [];
  let c = !1;
  const C = {
    _features: n,
    options: {
      ...i,
      ...e
    },
    initialState: u,
    _queue: (d) => {
      a.push(d), c || (c = !0, Promise.resolve().then(() => {
        for (; a.length; )
          a.shift()();
        c = !1;
      }).catch((g) => setTimeout(() => {
        throw g;
      })));
    },
    reset: () => {
      r.setState(r.initialState);
    },
    setOptions: (d) => {
      const g = x(d, r.options);
      r.options = l(g);
    },
    getState: () => r.options.state,
    setState: (d) => {
      r.options.onStateChange == null || r.options.onStateChange(d);
    },
    _getRowId: (d, g, f) => {
      var p;
      return (p = r.options.getRowId == null ? void 0 : r.options.getRowId(d, g, f)) != null ? p : `${f ? [f.id, g].join(".") : g}`;
    },
    getCoreRowModel: () => (r._getCoreRowModel || (r._getCoreRowModel = r.options.getCoreRowModel(r)), r._getCoreRowModel()),
    // The final calls start at the bottom of the model,
    // expanded rows, which then work their way up
    getRowModel: () => r.getPaginationRowModel(),
    //in next version, we should just pass in the row model as the optional 2nd arg
    getRow: (d, g) => {
      let f = (g ? r.getPrePaginationRowModel() : r.getRowModel()).rowsById[d];
      if (!f && (f = r.getCoreRowModel().rowsById[d], !f))
        throw process.env.NODE_ENV !== "production" ? new Error(`getRow could not find row with ID: ${d}`) : new Error();
      return f;
    },
    _getDefaultColumnDef: m(() => [r.options.defaultColumn], (d) => {
      var g;
      return d = (g = d) != null ? g : {}, {
        header: (f) => {
          const p = f.header.column.columnDef;
          return p.accessorKey ? p.accessorKey : p.accessorFn ? p.id : null;
        },
        // footer: props => props.header.column.id,
        cell: (f) => {
          var p, w;
          return (p = (w = f.renderValue()) == null || w.toString == null ? void 0 : w.toString()) != null ? p : null;
        },
        ...r._features.reduce((f, p) => Object.assign(f, p.getDefaultColumnDef == null ? void 0 : p.getDefaultColumnDef()), {}),
        ...d
      };
    }, S(e, "debugColumns", "_getDefaultColumnDef")),
    _getColumnDefs: () => r.options.columns,
    getAllColumns: m(() => [r._getColumnDefs()], (d) => {
      const g = function(f, p, w) {
        return w === void 0 && (w = 0), f.map((R) => {
          const _ = Fe(r, R, w, p), h = R;
          return _.columns = h.columns ? g(h.columns, _, w + 1) : [], _;
        });
      };
      return g(d);
    }, S(e, "debugColumns", "getAllColumns")),
    getAllFlatColumns: m(() => [r.getAllColumns()], (d) => d.flatMap((g) => g.getFlatColumns()), S(e, "debugColumns", "getAllFlatColumns")),
    _getAllFlatColumnsById: m(() => [r.getAllFlatColumns()], (d) => d.reduce((g, f) => (g[f.id] = f, g), {}), S(e, "debugColumns", "getAllFlatColumnsById")),
    getAllLeafColumns: m(() => [r.getAllColumns(), r._getOrderColumnsFn()], (d, g) => {
      let f = d.flatMap((p) => p.getLeafColumns());
      return g(f);
    }, S(e, "debugColumns", "getAllLeafColumns")),
    getColumn: (d) => {
      const g = r._getAllFlatColumnsById()[d];
      return process.env.NODE_ENV !== "production" && !g && console.error(`[Table] Column with id '${d}' does not exist.`), g;
    }
  };
  Object.assign(r, C);
  for (let d = 0; d < r._features.length; d++) {
    const g = r._features[d];
    g == null || g.createTable == null || g.createTable(r);
  }
  return r;
}
function it() {
  return (e) => m(() => [e.options.data], (o) => {
    const t = {
      rows: [],
      flatRows: [],
      rowsById: {}
    }, n = function(r, i, l) {
      i === void 0 && (i = 0);
      const s = [];
      for (let a = 0; a < r.length; a++) {
        const c = Ve(e, e._getRowId(r[a], a, l), r[a], a, i, void 0, l == null ? void 0 : l.id);
        if (t.flatRows.push(c), t.rowsById[c.id] = c, s.push(c), e.options.getSubRows) {
          var u;
          c.originalSubRows = e.options.getSubRows(r[a], a), (u = c.originalSubRows) != null && u.length && (c.subRows = n(c.originalSubRows, i + 1, c));
        }
      }
      return s;
    };
    return t.rows = n(o), t;
  }, S(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
/**
   * react-table
   *
   * Copyright (c) TanStack
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   */
function U(e, o) {
  return e ? lt(e) ? /* @__PURE__ */ X.createElement(e, o) : e : null;
}
function lt(e) {
  return st(e) || typeof e == "function" || ut(e);
}
function st(e) {
  return typeof e == "function" && (() => {
    const o = Object.getPrototypeOf(e);
    return o.prototype && o.prototype.isReactComponent;
  })();
}
function ut(e) {
  return typeof e == "object" && typeof e.$$typeof == "symbol" && ["react.memo", "react.forward_ref"].includes(e.$$typeof.description);
}
function gt(e) {
  const o = {
    state: {},
    // Dummy state
    onStateChange: () => {
    },
    // noop
    renderFallbackValue: null,
    ...e
  }, [t] = X.useState(() => ({
    current: rt(o)
  })), [n, r] = X.useState(() => t.current.initialState);
  return t.current.setOptions((i) => ({
    ...i,
    ...e,
    state: {
      ...n,
      ...e.state
    },
    // Similarly, we'll maintain both our internal state and any user-provided
    // state.
    onStateChange: (l) => {
      r(l), e.onStateChange == null || e.onStateChange(l);
    }
  })), t.current;
}
function dt({
  className: e,
  data: o,
  columns: t,
  ...n
}) {
  const r = gt({
    data: o,
    columns: t,
    getCoreRowModel: it()
  });
  return /* @__PURE__ */ $("div", { className: `${e} ${we.button}`, ...n, children: /* @__PURE__ */ re("div", { className: "flex justify-center h-screen", children: [
    /* @__PURE__ */ re("table", { className: "my-auto border", children: [
      /* @__PURE__ */ $("thead", { children: r.getHeaderGroups().map((i) => /* @__PURE__ */ $(
        "tr",
        {
          className: "border-b text-gray-800 uppercase",
          children: i.headers.map((l) => /* @__PURE__ */ $(
            "th",
            {
              className: "px-4 pr-2 py-4 font-medium text-left",
              children: l.isPlaceholder ? null : U(
                l.column.columnDef.header,
                l.getContext()
              )
            },
            l.id
          ))
        },
        i.id
      )) }),
      /* @__PURE__ */ $("tbody", { children: r.getRowModel().rows.map((i) => /* @__PURE__ */ $("tr", { children: i.getVisibleCells().map((l) => /* @__PURE__ */ $("td", { children: U(
        l.column.columnDef.cell,
        l.getContext()
      ) }, l.id)) }, i.id)) }),
      /* @__PURE__ */ $("tfoot", { children: r.getFooterGroups().map((i) => /* @__PURE__ */ $("tr", { className: "border-b", children: i.headers.map((l) => /* @__PURE__ */ $(
        "th",
        {
          className: "px-4 pt-[14px] pb-[18px]",
          children: l.isPlaceholder ? null : U(
            l.column.columnDef.footer,
            l.getContext()
          )
        },
        l.id
      )) }, i.id)) })
    ] }),
    /* @__PURE__ */ $("div", { className: "h-4" })
  ] }) });
}
export {
  dt as Grid
};
