google.maps.__gjsload__('overlay', function(_) {
    var WD = function(a) {
            this.Fg = a
        },
        zna = function() {},
        XD = function(a) {
            a.py = a.py || new zna;
            return a.py
        },
        Ana = function(a) {
            this.Bh = new _.qn(() => {
                const b = a.py;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.Ew && a.onAdd) a.onAdd();
                        b.Ew = !0;
                        a.draw()
                    }
                } else {
                    if (b.Ew)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.Ew = !1
                }
            }, 0)
        },
        Bna = function(a, b) {
            const c = XD(a);
            let d = c.Mv;
            d || (d = c.Mv = new Ana(a));
            _.Qb(c.Ph || [], _.Ck);
            var e = c.ki = c.ki || new _.Sia;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            e = c.fC = c.fC || new WD(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.rn(d.Bh);
            c.Ph = [_.Ak(a, "panes_changed", e), _.Ak(f, "zoom_changed", e), _.Ak(f, "offset_changed", e), _.Ak(b, "projection_changed", e), _.Ak(f, "projectioncenterq_changed", e)];
            _.rn(d.Bh);
            b instanceof _.Yk ? (_.Il(b, "Ox"), _.Gl(b, 148440)) : b instanceof _.cm && (_.Il(b, "Oxs"),
                _.Gl(b, 181451))
        },
        Gna = function(a) {
            if (a) {
                var b = a.getMap();
                if (Cna(a) !== b && b && b instanceof _.Yk) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new Dna(b, a, c.overlayLayer) : c.Gg.then(({
                        lh: d
                    }) => {
                        const e = new Ena(b, d);
                        d.zi(e);
                        c.overlayLayer = e;
                        Fna(a);
                        Gna(a)
                    })
                }
            }
        },
        Fna = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.Fg.unbindAll(), b.Fg.set("panes", null), b.Fg.set("projection", null), b.Hg.ql(b), b.Gg && (b.Gg = !1, b.Fg.onRemove ? b.Fg.onRemove() : b.Fg.remove()))
            }
        },
        Cna = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        Hna = function(a,
            b) {
            a.Fg.get("projection") != b && (a.Fg.bindTo("panes", a.map.__gm), a.Fg.set("projection", b))
        };
    _.Ja(WD, _.Sk);
    WD.prototype.changed = function(a) {
        "outProjection" != a && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.jj(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.Fg : null))
    };
    var YD = {};
    _.Ja(Ana, _.Sk);
    YD.Bl = function(a) {
        if (a) {
            var b = a.getMap();
            (XD(a).NB || null) !== b && (b && Bna(a, b), XD(a).NB = b)
        }
    };
    YD.ql = function(a) {
        const b = XD(a);
        var c = b.ki;
        c && c.unbindAll();
        (c = b.fC) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Ph && _.Qb(b.Ph, _.Ck);
        b.Ph = null;
        b.Mv && (b.Mv.Bh.Cj(), b.Mv = null);
        delete XD(a).NB
    };
    var ZD = {},
        Dna = class {
            constructor(a, b, c) {
                this.map = a;
                this.Fg = b;
                this.Hg = c;
                this.Gg = !1;
                _.Il(this.map, "Ox");
                _.Gl(this.map, 148440);
                c.Bl(this)
            }
            draw() {
                this.Gg || (this.Gg = !0, this.Fg.onAdd && this.Fg.onAdd());
                this.Fg.draw && this.Fg.draw()
            }
        },
        Ena = class {
            constructor(a, b) {
                this.Jg = a;
                this.Hg = b;
                this.Fg = null;
                this.Gg = []
            }
            dispose() {}
            Ri(a, b, c, d, e, f, g, h) {
                const l = this.Fg = this.Fg || new _.IB(this.Jg, this.Hg, () => {});
                l.Ri(a, b, c, d, e, f, g, h);
                for (const n of this.Gg) Hna(n, l), n.draw()
            }
            Bl(a) {
                this.Gg.push(a);
                this.Fg && Hna(a, this.Fg);
                this.Hg.refresh()
            }
            ql(a) {
                _.Vb(this.Gg,
                    a)
            }
        };
    ZD.Bl = Gna;
    ZD.ql = Fna;
    _.sk("overlay", {
        eA: function(a) {
            if (a) {
                (0, YD.ql)(a);
                (0, ZD.ql)(a);
                var b = a.getMap();
                b && (b instanceof _.Yk ? (0, ZD.Bl)(a) : (0, YD.Bl)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.vw(a, {
                Pk: ({
                    event: b
                }) => {
                    _.du(b.Hh)
                },
                Xj: b => _.ew(b),
                Lp: b => _.fw(b),
                Qk: b => _.fw(b),
                jk: b => _.gw(b)
            }).pr(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.yk);
            a.addEventListener("contextmenu", _.yk);
            a.addEventListener("dblclick", _.yk);
            a.addEventListener("mousedown", _.yk);
            a.addEventListener("mousemove", _.yk);
            a.addEventListener("MSPointerDown",
                _.yk);
            a.addEventListener("pointerdown", _.yk);
            a.addEventListener("touchstart", _.yk);
            a.addEventListener("wheel", _.yk)
        }
    });
});