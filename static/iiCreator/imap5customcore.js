(function () {
    if (!window.imap5custom) {
        var R = function (b, d) {
                var h = document.createElement("div");
                h.id = "imap5custom_" + b.usermap + "_categorylegend";
                h.options = d;
                h.style.position = "fixed";
                h._show = !0;
                a.div[b.usermap].appendChild(h);
                h.setOptions = function (a) {
                    this.options = a
                };
                h.hide = function () {
                    this.style.display = "none";
                    this._show = !1
                };
                h.show = function () {
                    this.style.display = "block";
                    this._show = !0
                };
                h.remove = function () {
                    a.div[b.usermap].removeChild(document.getElementById(this.id))
                };
                h.drawCategoryLegend = function () {
                    this.visiblelist =
                        [];
                    this.touchlist = {};
                    if (this.hasChildNodes()) for (; 1 <= this.childNodes.length;) this.removeChild(this.firstChild);
                    for (var f in d.style) "backgroundColor" != f && "opacity" != f && (this.style[f] = this.options.style[f]);
                    this.style.backgroundColor = "rgba(" + +parseInt(C(this.options.style.backgroundColor).substring(0, 2), 16) + "," + parseInt(C(this.options.style.backgroundColor).substring(2, 4), 16) + "," + parseInt(C(this.options.style.backgroundColor).substring(4, 6), 16) + "," + this.options.style.opacity + ")";
                    var e = 0, c = this.options.columnsPerRow,
                        q = parseInt(this.options.columnWidth) * c, k = parseInt(this.options.columnWidth) * c - 6,
                        g = parseInt(this.options.columnWidth) - 22 - 6, h = parseInt(this.options.columnWidth), p = new D;
                    p.style.width = q + "px";
                    this.appendChild(p);
                    for (f in this.options.items) if (this.options.items.hasOwnProperty(f)) {
                        switch (this.options.items[f].type) {
                            case 1:
                                p = {};
                                p.text = this.options.items[f].text;
                                p.width = k;
                                p.fontFamily = this.options.style.fontFamily;
                                p.fontSize = this.options.style.fontSize;
                                p.fontColor = this.options.style.fontColor;
                                e = new Q(p);
                                this.appendChild(e);
                                e = 0;
                                break;
                            case 2:
                                0 == this.options.mode ? (p = {}, p.text = this.options.items[f].text, p.categoryid = this.options.items[f].categoryid, p.checked = this.options.items[f].checked, this.options.items[f].checked && -1 == this.visiblelist.indexOf(this.options.items[f].categoryid) && this.visiblelist.push(this.options.items[f].categoryid), p.usermap = b.usermap, p.legendTextWidth = g, p.width = h, p.fontFamily = this.options.style.fontFamily, p.fontSize = this.options.style.fontSize, p.fontColor = this.options.style.fontColor,
                                    p.columnsPerRow = this.options.columnsPerRow, p = new da(p)) : (p = {}, p.text = this.options.items[f].text, p.categoryid = this.options.items[f].categoryid, p.usermap = b.usermap, p.legendTextWidth = g + 22, p.width = h, p.fontFamily = this.options.style.fontFamily, p.fontSize = this.options.style.fontSize, p.fontColor = this.options.style.fontColor, p.columnsPerRow = this.options.columnsPerRow, p = new ea(p)), this.appendChild(p), e += 1
                        }
                        if (e == c || "1" == this.options.items[f].type) p = new D, p.style.width = q + "px", this.appendChild(p), e = 0
                    }
                    this.style.position =
                        "absolute";
                    this.style.display = "table";
                    this.style.width = q + 2 * parseInt(this.options.style.padding) + "px";
                    switch (this.options.anchor) {
                        case 1:
                            this.style.top = parseInt(a.usermap[b.usermap].div.style.borderWidth) + 10 + "px";
                            this.style.left = parseInt(a.usermap[b.usermap].div.style.borderWidth) + 10 + "px";
                            this.style.bottom = "auto";
                            this.style.right = "auto";
                            break;
                        case 2:
                            this.style.top = parseInt(a.usermap[b.usermap].div.style.borderWidth) + 10 + "px";
                            this.style.left = parseInt(a.usermap[b.usermap].div.style.borderWidth) + (parseInt(a.usermap[b.usermap].div.style.width) -
                                parseInt(this.offsetWidth)) / 2 + "px";
                            this.style.bottom = "auto";
                            this.style.right = "auto";
                            break;
                        case 3:
                            this.style.top = parseInt(a.usermap[b.usermap].div.style.borderWidth) + 10 + "px";
                            this.style.right = 10 - parseInt(a.usermap[b.usermap].div.style.borderWidth) + "px";
                            this.style.bottom = "auto";
                            this.style.left = "auto";
                            break;
                        case 4:
                            this.style.top = parseInt(a.usermap[b.usermap].div.style.borderWidth) + (parseInt(a.usermap[b.usermap].div.style.height) - parseInt(this.offsetHeight)) / 2 + "px";
                            this.style.left = parseInt(a.usermap[b.usermap].div.style.borderWidth) +
                                10 + "px";
                            this.style.bottom = "auto";
                            this.style.right = "auto";
                            break;
                        case 5:
                            this.style.top = parseInt(a.usermap[b.usermap].div.style.borderWidth) + (parseInt(a.usermap[b.usermap].div.style.height) - parseInt(this.offsetHeight)) / 2 + "px";
                            this.style.left = parseInt(a.usermap[b.usermap].div.style.borderWidth) + (parseInt(a.usermap[b.usermap].div.style.width) - parseInt(this.offsetWidth)) / 2 + "px";
                            this.style.bottom = "auto";
                            this.style.right = "auto";
                            break;
                        case 6:
                            this.style.top = parseInt(a.usermap[b.usermap].div.style.borderWidth) +
                                (parseInt(a.usermap[b.usermap].div.style.height) - parseInt(this.offsetHeight)) / 2 + "px";
                            this.style.right = 10 - parseInt(a.usermap[b.usermap].div.style.borderWidth) + "px";
                            this.style.bottom = "auto";
                            this.style.left = "auto";
                            break;
                        case 7:
                            this.style.bottom = 10 - parseInt(a.usermap[b.usermap].div.style.borderWidth) + "px";
                            this.style.left = parseInt(a.usermap[b.usermap].div.style.borderWidth) + 10 + "px";
                            this.style.top = "auto";
                            this.style.right = "auto";
                            break;
                        case 8:
                            this.style.bottom = 10 - parseInt(a.usermap[b.usermap].div.style.borderWidth) +
                                "px";
                            this.style.left = parseInt(a.usermap[b.usermap].div.style.borderWidth) + (parseInt(a.usermap[b.usermap].div.style.width) - parseInt(this.offsetWidth)) / 2 + "px";
                            this.style.top = "auto";
                            this.style.right = "auto";
                            break;
                        case 9:
                            this.style.bottom = 10 - parseInt(a.usermap[b.usermap].div.style.borderWidth) + "px";
                            this.style.right = 10 - parseInt(a.usermap[b.usermap].div.style.borderWidth) + "px";
                            this.style.top = "auto";
                            this.style.left = "auto";
                            break;
                        default:
                            this.style.top = parseInt(a.usermap[b.usermap].div.style.borderWidth) + 10 +
                                "px", this.style.right = 10 - parseInt(a.usermap[b.usermap].div.style.borderWidth) + "px", this.style.bottom = "auto", this.style.left = "auto"
                    }
                };
                h.onmouseup = function (a) {
                };
                h.onmousedown = function (a) {
                };
                h.onmouseover = function (f) {
                    "edit" == a.mode[b.usermap] && (this.style.cursor = "pointer");
                    "edit" == a.mode[b.usermap] && v(b, f, "Click to select")
                };
                h.onmouseout = function (f) {
                    "edit" == a.mode[b.usermap] && (this.style.cursor = "auto");
                    "edit" == a.mode[b.usermap] && B(b)
                };
                h.onmousewheel = function (a) {
                };
                a.div[b.usermap].addEventListener && h.addEventListener("DOMMouseScroll",
                    function (a) {
                    }, !1);
                h.onclick = function (f) {
                    f.stopPropagation && f.stopPropagation();
                    this._mapdragged || this._transformed || a.div[b.usermap]._mapdragged || "edit" != a.mode[b.usermap] || (null != a.selectedVerticesObj[b.usermap] && a.selectedVerticesObj[b.usermap] != this && a.selectedVerticesObj[b.usermap].deleteVertices(), f = {
                        event: "click",
                        object: "categorylegend"
                    }, window.console && console.log(JSON.stringify(f)))
                };
                a.touchdevices && (h.ontouchstart = h.ontouchmove = h.ontouchend = function (a) {
                    a.stopPropagation && a.stopPropagation()
                });
                h.drawCategoryLegend();
                return h
            }, S = function (b, d) {
                var h = r("g");
                h.id = "imap5custom_" + b.usermap + "_maptitle";
                h.options = d;
                h._show = !0;
                a.svg[b.usermap].appendChild(h);
                h.setOptions = function (a) {
                    this.options = a
                };
                h.hide = function () {
                    this.style.display = "none";
                    this._show = !1
                };
                h.show = function () {
                    this.style.display = "block";
                    this._show = !0
                };
                h.remove = function () {
                    a.svg[b.usermap].removeChild(this)
                };
                h.drawMapTitle = function () {
                    if (this.hasChildNodes()) for (; 1 <= this.childNodes.length;) this.removeChild(this.firstChild);
                    var f = r("text");
                    this.appendChild(f);
                    var e = r("text");
                    e.appendChild(document.createTextNode(this.options.text));
                    e.style.cursor = "default";
                    e.setAttribute("style", "stroke-width:0");
                    e.style.strokeOpacity = 0;
                    e.style.fontFamily = this.options.style.fontFamily;
                    e.style.fill = this.options.style.fontColor;
                    e.style.fontSize = this.options.style.fontSize;
                    e.style.fontStyle = this.options.style.fontStyle;
                    e.style.fontWeight = this.options.style.fontWeight;
                    e.style.pointerEvents = "none";
                    this.appendChild(e);
                    e.setAttribute("x", -4096);
                    e.setAttribute("y",
                        -4096);
                    e.setAttribute("text-anchor", "middle");
                    if (a.responsivemap[b.usermap]) for (var c = parseInt(e.style.fontSize); e.getBBox().width > a.div[b.usermap].clientWidth - 20;) c -= 2, e.style.fontSize = c + "px";
                    var d = c = 0, k = "middle";
                    switch (this.options.anchor) {
                        case 1:
                            c = 0;
                            d = parseInt(e.style.fontSize);
                            k = "start";
                            break;
                        case 2:
                            c = a.div[b.usermap].clientWidth / 2;
                            d = parseInt(e.style.fontSize);
                            k = "middle";
                            break;
                        case 3:
                            c = a.div[b.usermap].clientWidth;
                            d = parseInt(e.style.fontSize);
                            k = "end";
                            break;
                        case 4:
                            c = 0;
                            d = a.div[b.usermap].clientHeight /
                                2 + parseInt(e.style.fontSize) / 2;
                            k = "start";
                            break;
                        case 5:
                            c = a.div[b.usermap].clientWidth / 2;
                            d = a.div[b.usermap].clientHeight / 2 + parseInt(e.style.fontSize) / 2;
                            k = "middle";
                            break;
                        case 6:
                            c = a.div[b.usermap].clientWidth;
                            d = a.div[b.usermap].clientHeight / 2 + parseInt(e.style.fontSize) / 2;
                            k = "end";
                            break;
                        case 7:
                            c = 0;
                            d = a.div[b.usermap].clientHeight - 5;
                            k = "start";
                            break;
                        case 8:
                            c = a.div[b.usermap].clientWidth / 2;
                            d = a.div[b.usermap].clientHeight - 5;
                            k = "middle";
                            break;
                        case 9:
                            c = a.div[b.usermap].clientWidth;
                            d = a.div[b.usermap].clientHeight -
                                5;
                            k = "end";
                            break;
                        default:
                            c = a.div[b.usermap].clientWidth / 2, d = parseInt(e.style.fontSize), k = "middle"
                    }
                    e.setAttribute("text-anchor", k);
                    e.setAttribute("x", c);
                    e.setAttribute("y", d);
                    f.appendChild(document.createTextNode(this.options.text));
                    f.style.cursor = "default";
                    f.setAttribute("style", "stroke-width:0");
                    f.style.strokeOpacity = 0;
                    f.style.fontFamily = this.options.style.fontFamily;
                    f.style.fill = "undefined" == typeof this.options.style.shadowColor ? "#ffffff" : this.options.style.shadowColor;
                    f.style.fontSize = e.style.fontSize;
                    f.style.fontStyle = this.options.style.fontStyle;
                    f.style.fontWeight = this.options.style.fontWeight;
                    f.style.fillOpacity = "undefined" == typeof this.options.style.shadowOpacity ? .7 : this.options.style.shadowOpacity;
                    f.setAttribute("text-anchor", k);
                    f.setAttribute("x", c + 1);
                    f.setAttribute("y", d + 1)
                };
                h.drawMapTitle();
                return h
            }, da = function (b) {
                var d = document.createElement("div"), h = document.createElement("div");
                h.style.cssFloat = "left";
                h.style.width = "16px";
                h.style.height = "16px";
                var f = document.createElement("input");
                f.setAttribute("type", "checkbox");
                f.checked = b.checked;
                f.setAttribute("width", "16px");
                f.setAttribute("height", "16px");
                h.appendChild(f);
                f.onchange = function (a) {
                    this.checked ? imap5custom.categorylegend[b.usermap].visiblelist.push(b.categoryid) : (a = imap5custom.categorylegend[b.usermap].visiblelist.indexOf(b.categoryid), imap5custom.categorylegend[b.usermap].visiblelist.splice(a, 1));
                    a = {};
                    a.usermap = b.usermap;
                    imap5custom.updateCategoryLegend(a)
                };
                f.onclick = function (a) {
                };
                var e = {};
                e.width = b.legendTextWidth;
                e.fontFamily =
                    b.fontFamily;
                e.fontSize = b.fontSize;
                e.fontColor = b.fontColor;
                e.text = b.text;
                e = new G(e);
                e.checkbox = f;
                e.onclick = function () {
                    if (!this._touch) {
                        this.checkbox.checked = !this.checkbox.checked;
                        if (this.checkbox.checked) imap5custom.categorylegend[b.usermap].visiblelist.push(b.categoryid); else {
                            var a = imap5custom.categorylegend[b.usermap].visiblelist.indexOf(b.categoryid);
                            imap5custom.categorylegend[b.usermap].visiblelist.splice(a, 1)
                        }
                        a = {};
                        a.usermap = b.usermap;
                        imap5custom.updateCategoryLegend(a)
                    }
                };
                a.touchdevices && (e.ontouchstart =
                    function (a) {
                        a.preventDefault && a.preventDefault();
                        a.stopPropagation && a.stopPropagation();
                        this._touch = 1 == a.touches.length ? !0 : !1
                    });
                a.touchdevices && (e.ontouchend = function (a) {
                    this._touch && (this.checkbox.checked = !this.checkbox.checked, this.checkbox.checked ? imap5custom.categorylegend[b.usermap].visiblelist.push(b.categoryid) : (a = imap5custom.categorylegend[b.usermap].visiblelist.indexOf(b.categoryid), imap5custom.categorylegend[b.usermap].visiblelist.splice(a, 1)), a = {}, a.usermap = b.usermap, imap5custom.updateCategoryLegend(a))
                });
                e.style.cursor = "pointer";
                f = new D;
                d.style.width = b.width + "px";
                d.style.height = "auto";
                d.style.cssFloat = "left";
                d.style.padding = "0px";
                d.appendChild(h);
                d.appendChild(e);
                d.appendChild(f);
                return d
            }, ea = function (b) {
                var d = {};
                d.width = b.legendTextWidth;
                d.fontFamily = b.fontFamily;
                d.fontSize = b.fontSize;
                d.fontColor = b.fontColor;
                d.text = b.text;
                d = new G(d);
                d.style.cursor = "pointer";
                a.touchdevices || (d.onmouseover = function () {
                    imap5custom.categorylegend[b.usermap].visiblelist.length = 0;
                    imap5custom.categorylegend[b.usermap].visiblelist.push(b.categoryid);
                    var a = {};
                    a.usermap = b.usermap;
                    imap5custom.updateCategoryLegend(a);
                    this.style.textDecoration = "underline"
                }, d.onmouseout = function () {
                    this.style.textDecoration = "none"
                });
                a.touchdevices && (d.onclick = function () {
                    "undefined" !== typeof imap5custom.categorylegend[b.usermap].touchlist && null !== imap5custom.categorylegend[b.usermap].touchlist && "undefined" !== typeof imap5custom.categorylegend[b.usermap].touchlist.style && (imap5custom.categorylegend[b.usermap].touchlist.style.textDecoration = "none");
                    imap5custom.categorylegend[b.usermap].visiblelist.length =
                        0;
                    imap5custom.categorylegend[b.usermap].visiblelist.push(b.categoryid);
                    imap5custom.categorylegend[b.usermap].touchlist = this;
                    this.style.textDecoration = "underline";
                    var a = {};
                    a.usermap = b.usermap;
                    imap5custom.updateCategoryLegend(a)
                });
                a.touchdevices && (d.ontouchstart = function (a) {
                    a.preventDefault && a.preventDefault();
                    a.stopPropagation && a.stopPropagation();
                    this._touch = 1 == a.touches.length ? !0 : !1
                });
                a.touchdevices && (d.ontouchend = function (a) {
                    this._touch && (a.preventDefault && a.preventDefault(), a.stopPropagation &&
                    a.stopPropagation(), "undefined" !== typeof imap5custom.categorylegend[b.usermap].touchlist && null !== imap5custom.categorylegend[b.usermap].touchlist && "undefined" !== typeof imap5custom.categorylegend[b.usermap].touchlist.style && (imap5custom.categorylegend[b.usermap].touchlist.style.textDecoration = "none"), imap5custom.categorylegend[b.usermap].visiblelist.length = 0, imap5custom.categorylegend[b.usermap].visiblelist.push(b.categoryid), imap5custom.categorylegend[b.usermap].touchlist = this, this.style.textDecoration =
                        "underline", a = {}, a.usermap = b.usermap, imap5custom.updateCategoryLegend(a))
                });
                return d
            }, D = function () {
                var a = document.createElement("div");
                a.style.clear = "both";
                return a
            }, fa = function (a) {
                var d = document.createElement("div"), h = document.createElement("div");
                h.style.cssFloat = "left";
                h.style.padding = "3px";
                h.style.width = a.iconWidth + "px";
                h.style.height = a.iconHeight + "px";
                h.style.backgroundColor = a.fill;
                var f = r("svg");
                f.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                f.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
                f.setAttribute("version", "1.1");
                f.setAttribute("width", a.iconWidth + "px");
                f.setAttribute("height", a.iconHeight + "px");
                f.style.overflow = "hidden";
                var e = r("polyline");
                e.setAttribute("points", "1," + a.iconHeight / 2 + " " + (a.iconWidth - 1) + "," + a.iconHeight / 2);
                e.style.fill = "none";
                e.style.stroke = a.stroke;
                e.style.strokeOpacity = a.opacity;
                e.style.strokeWidth = 2;
                f.appendChild(e);
                h.appendChild(f);
                f = {};
                f.width = a.legendTextWidth;
                f.fontFamily = a.fontFamily;
                f.fontSize = a.fontSize;
                f.fontColor = a.fontColor;
                f.text = a.text;
                f = new G(f);
                e = new D;
                e.style.width = a.width + "px";
                d.style.width = a.width + "px";
                d.style.height = "auto";
                d.style.cssFloat = "left";
                d.style.padding = "0px";
                d.appendChild(h);
                d.appendChild(f);
                d.appendChild(e);
                return d
            }, ga = function (a) {
                var d = document.createElement("div"), h = document.createElement("div");
                h.style.cssFloat = "left";
                h.style.margin = "3px";
                h.style.width = a.iconWidth + "px";
                h.style.height = a.iconHeight + "px";
                h.style.backgroundColor = a.fill;
                h.style.opacity = a.opacity;
                var f = {};
                f.width = a.legendTextWidth;
                f.fontFamily = a.fontFamily;
                f.fontSize = a.fontSize;
                f.fontColor = a.fontColor;
                f.text = a.text;
                var f = new G(f), e = new D;
                d.style.width = a.width + "px";
                d.style.height = "auto";
                d.style.cssFloat = "left";
                d.style.padding = "0px";
                d.appendChild(h);
                d.appendChild(f);
                d.appendChild(e);
                return d
            }, ha = function (a) {
                var d = document.createElement("div"), h = document.createElement("div");
                h.style.cssFloat = "left";
                h.style.padding = "3px";
                h.style.width = a.iconWidth + "px";
                h.style.height = a.iconHeight + "px";
                var f = document.createElement("img");
                f.setAttribute("src", a.basepath + a.image);
                f.setAttribute("width", a.iconWidth + "px");
                f.setAttribute("height", a.iconHeight + "px");
                h.appendChild(f);
                f = {};
                f.width = a.legendTextWidth;
                f.fontFamily = a.fontFamily;
                f.fontSize = a.fontSize;
                f.fontColor = a.fontColor;
                f.text = a.text;
                var f = new G(f), e = new D;
                d.style.width = a.width + "px";
                d.style.height = "auto";
                d.style.cssFloat = "left";
                d.style.padding = "0px";
                d.appendChild(h);
                d.appendChild(f);
                d.appendChild(e);
                return d
            }, G = function (a) {
                var d = document.createElement("div");
                d.style.cssFloat = "left";
                d.style.overflow = "hidden";
                d.style.textOverflow =
                    "ellipsis";
                d.style.whiteSpace = "nowrap";
                d.style.width = a.width + "px";
                d.style.padding = "3px";
                d.style.fontFamily = a.fontFamily;
                d.style.fontSize = a.fontSize;
                d.style.color = a.fontColor;
                d.style.border = "0px";
                d.innerHTML = a.text;
                return d
            }, Q = function (a) {
                var d = document.createElement("div");
                d.style.cssFloat = "left";
                d.style.overflow = "hidden";
                d.style.textOverflow = "ellipsis";
                d.style.whiteSpace = "nowrap";
                d.style.padding = "3px";
                d.style.fontFamily = a.fontFamily;
                d.style.fontSize = a.fontSize;
                d.style.color = a.fontColor;
                d.style.width =
                    a.width + "px";
                d.style.fontWeight = "bold";
                d.innerHTML = a.text;
                return d
            }, T = function (b, d, h) {
                var f = document.createElement("div");
                f.id = "imap5custom_" + b.usermap + "_maplegend_" + d;
                f.options = h;
                f.style.position = "fixed";
                f._show = !0;
                a.div[b.usermap].appendChild(f);
                f.setOptions = function (a) {
                    this.options = a
                };
                f.hide = function () {
                    this.style.display = "none";
                    this._show = !1
                };
                f.show = function () {
                    this.style.display = "block";
                    this._show = !0
                };
                f.toggleCategory = function () {
                    "normal" == a.mode[b.usermap] ? "undefined" != typeof a.usermap[b.usermap].map.categorylegend &&
                    a.usermap[b.usermap].map.categorylegend.enable ? 0 != this.options.categoryid && ("undefined" != typeof a.categorylegend[b.usermap] ? -1 != a.categorylegend[b.usermap].visiblelist.indexOf(this.options.categoryid) ? this.show() : this.hide() : this.show()) : this.show() : this.show()
                };
                f.drawMapLegend = function () {
                    if (this.hasChildNodes()) for (; 1 <= this.childNodes.length;) this.removeChild(this.firstChild);
                    for (var d in h.style) "backgroundColor" != d && "opacity" != d && (this.style[d] = this.options.style[d]);
                    this.style.backgroundColor =
                        "rgba(" + +parseInt(C(this.options.style.backgroundColor).substring(0, 2), 16) + "," + parseInt(C(this.options.style.backgroundColor).substring(2, 4), 16) + "," + parseInt(C(this.options.style.backgroundColor).substring(4, 6), 16) + "," + this.options.style.opacity + ")";
                    var c = 0, f = this.options.columnsPerRow, k = parseInt(this.options.columnWidth) * f,
                        g = parseInt(this.options.columnWidth) * f - 6, x = parseInt(this.options.icon.width),
                        p = parseInt(this.options.icon.height), u = parseInt(this.options.columnWidth) - (x + 6) - 6,
                        n = parseInt(this.options.columnWidth),
                        m = new D;
                    m.style.width = k + "px";
                    this.appendChild(m);
                    for (d in this.options.items) if (this.options.items.hasOwnProperty(d)) {
                        switch (this.options.items[d].type) {
                            case 1:
                                m = {};
                                m.text = this.options.items[d].text;
                                m.width = g;
                                m.fontFamily = this.options.style.fontFamily;
                                m.fontSize = this.options.style.fontSize;
                                m.fontColor = this.options.style.fontColor;
                                c = new Q(m);
                                this.appendChild(c);
                                c = 0;
                                break;
                            case 2:
                                m = {};
                                m.text = this.options.items[d].text;
                                m.image = this.options.items[d].image;
                                m.basepath = a.base[b.usermap];
                                m.iconWidth = x;
                                m.iconHeight =
                                    p;
                                m.legendTextWidth = u;
                                m.width = n;
                                m.fontFamily = this.options.style.fontFamily;
                                m.fontSize = this.options.style.fontSize;
                                m.fontColor = this.options.style.fontColor;
                                m.columnsPerRow = this.options.columnsPerRow;
                                m = new ha(m);
                                this.appendChild(m);
                                c += 1;
                                break;
                            case 3:
                                m = {};
                                m.text = this.options.items[d].text;
                                m.fill = this.options.items[d].fill;
                                m.opacity = "undefined" !== typeof this.options.items[d].opacity ? this.options.items[d].opacity : 1;
                                m.iconWidth = x;
                                m.iconHeight = p;
                                m.legendTextWidth = u;
                                m.width = n;
                                m.fontFamily = this.options.style.fontFamily;
                                m.fontSize = this.options.style.fontSize;
                                m.fontColor = this.options.style.fontColor;
                                m.columnsPerRow = this.options.columnsPerRow;
                                m = new ga(m);
                                this.appendChild(m);
                                c += 1;
                                break;
                            case 4:
                                m = {}, m.text = this.options.items[d].text, m.stroke = this.options.items[d].stroke, m.opacity = "undefined" !== typeof this.options.items[d].opacity ? this.options.items[d].opacity : 1, m.iconWidth = x, m.iconHeight = p, m.legendTextWidth = u, m.width = n, m.fontFamily = this.options.style.fontFamily, m.fontSize = this.options.style.fontSize, m.fontColor = this.options.style.fontColor,
                                    m.columnsPerRow = this.options.columnsPerRow, m = new fa(m), this.appendChild(m), c += 1
                        }
                        if (c == f || "1" == this.options.items[d].type) m = new D, m.style.width = k + "px", this.appendChild(m), c = 0
                    }
                    this.style.position = "absolute";
                    this.style.display = "table";
                    this.style.width = k + 2 * parseInt(this.options.style.padding) + "px";
                    switch (this.options.anchor) {
                        case 1:
                            this.style.top = parseInt(a.usermap[b.usermap].div.style.borderWidth) + 10 + "px";
                            this.style.left = parseInt(a.usermap[b.usermap].div.style.borderWidth) + 10 + "px";
                            this.style.bottom =
                                "auto";
                            this.style.right = "auto";
                            break;
                        case 2:
                            this.style.top = parseInt(a.usermap[b.usermap].div.style.borderWidth) + 10 + "px";
                            this.style.left = parseInt(a.usermap[b.usermap].div.style.borderWidth) + (parseInt(a.usermap[b.usermap].div.style.width) - parseInt(this.offsetWidth)) / 2 + "px";
                            this.style.bottom = "auto";
                            this.style.right = "auto";
                            break;
                        case 3:
                            this.style.top = parseInt(a.usermap[b.usermap].div.style.borderWidth) + 10 + "px";
                            this.style.right = 10 - parseInt(a.usermap[b.usermap].div.style.borderWidth) + "px";
                            this.style.bottom =
                                "auto";
                            this.style.left = "auto";
                            break;
                        case 4:
                            this.style.top = parseInt(a.usermap[b.usermap].div.style.borderWidth) + (parseInt(a.usermap[b.usermap].div.style.height) - parseInt(this.offsetHeight)) / 2 + "px";
                            this.style.left = parseInt(a.usermap[b.usermap].div.style.borderWidth) + 10 + "px";
                            this.style.bottom = "auto";
                            this.style.right = "auto";
                            break;
                        case 5:
                            this.style.top = parseInt(a.usermap[b.usermap].div.style.borderWidth) + (parseInt(a.usermap[b.usermap].div.style.height) - parseInt(this.offsetHeight)) / 2 + "px";
                            this.style.left =
                                parseInt(a.usermap[b.usermap].div.style.borderWidth) + (parseInt(a.usermap[b.usermap].div.style.width) - parseInt(this.offsetWidth)) / 2 + "px";
                            this.style.bottom = "auto";
                            this.style.right = "auto";
                            break;
                        case 6:
                            this.style.top = parseInt(a.usermap[b.usermap].div.style.borderWidth) + (parseInt(a.usermap[b.usermap].div.style.height) - parseInt(this.offsetHeight)) / 2 + "px";
                            this.style.right = 10 - parseInt(a.usermap[b.usermap].div.style.borderWidth) + "px";
                            this.style.bottom = "auto";
                            this.style.left = "auto";
                            break;
                        case 7:
                            this.style.bottom =
                                10 - parseInt(a.usermap[b.usermap].div.style.borderWidth) + "px";
                            this.style.left = parseInt(a.usermap[b.usermap].div.style.borderWidth) + 10 + "px";
                            this.style.top = "auto";
                            this.style.right = "auto";
                            break;
                        case 8:
                            this.style.bottom = 10 - parseInt(a.usermap[b.usermap].div.style.borderWidth) + "px";
                            this.style.left = parseInt(a.usermap[b.usermap].div.style.borderWidth) + (parseInt(a.usermap[b.usermap].div.style.width) - parseInt(this.offsetWidth)) / 2 + "px";
                            this.style.top = "auto";
                            this.style.right = "auto";
                            break;
                        case 9:
                            this.style.bottom =
                                10 - parseInt(a.usermap[b.usermap].div.style.borderWidth) + "px";
                            this.style.right = 10 - parseInt(a.usermap[b.usermap].div.style.borderWidth) + "px";
                            this.style.top = "auto";
                            this.style.left = "auto";
                            break;
                        default:
                            this.style.top = parseInt(a.usermap[b.usermap].div.style.borderWidth) + 10 + "px", this.style.right = 10 - parseInt(a.usermap[b.usermap].div.style.borderWidth) + "px", this.style.bottom = "auto", this.style.left = "auto"
                    }
                };
                f.remove = function () {
                    a.div[b.usermap].removeChild(document.getElementById(this.id))
                };
                f.onmouseup = function (a) {
                };
                f.onmousedown = function (a) {
                };
                f.onmouseover = function (d) {
                    if ("maplegend" == a.mode[b.usermap] || "edit" == a.mode[b.usermap]) this.style.cursor = "pointer";
                    "edit" == a.mode[b.usermap] && v(b, d, "Click to select")
                };
                f.onmouseout = function (d) {
                    if ("maplegend" == a.mode[b.usermap] || "edit" == a.mode[b.usermap]) this.style.cursor = "auto";
                    "edit" == a.mode[b.usermap] && B(b)
                };
                f.onmousewheel = function (a) {
                };
                a.div[b.usermap].addEventListener && f.addEventListener("DOMMouseScroll", function (a) {
                }, !1);
                f.onclick = function (f) {
                    f.stopPropagation && f.stopPropagation();
                    this._mapdragged || this._transformed || a.div[b.usermap]._mapdragged || "edit" != a.mode[b.usermap] || (null != a.selectedVerticesObj[b.usermap] && a.selectedVerticesObj[b.usermap] != this && a.selectedVerticesObj[b.usermap].deleteVertices(), f = {
                        event: "click",
                        object: "maplegend"
                    }, f.id = Number(d), window.console && console.log(JSON.stringify(f)))
                };
                a.touchdevices && (f.ontouchstart = f.ontouchmove = f.ontouchend = function (a) {
                    a.stopPropagation && a.stopPropagation()
                });
                f.drawMapLegend();
                return f
            }, z = function (b, d, h) {
                var f = document.createElement("div");
                f.id = "imap5custom_" + b.usermap + "_infobox_" + h.obj + "_" + d;
                f.options = h;
                f.style.position = "fixed";
                f.style.top = h.clientY + 3 + "px";
                f.style.left = h.clientX + 3 + "px";
                for (var e in a.usermap[b.usermap].infobox.style) "backgroundColor" != e && "opacity" != e && (f.style[e] = a.usermap[b.usermap].infobox.style[e]);
                f.style.backgroundColor = "rgba(" + +parseInt(C(a.usermap[b.usermap].infobox.style.backgroundColor).substring(0, 2), 16) + "," + parseInt(C(a.usermap[b.usermap].infobox.style.backgroundColor).substring(2, 4), 16) + "," + parseInt(C(a.usermap[b.usermap].infobox.style.backgroundColor).substring(4,
                    6), 16) + "," + a.usermap[b.usermap].infobox.style.opacity + ")";
                f.innerHTML = h.infobox.replace(/%_BASE_%/g, a.base[b.usermap]);
                a.div[b.usermap].appendChild(f);
                f.onmouseout = function (a) {
                    for (var b = a.relatedTarget; null != b;) {
                        if (b == this) return;
                        b = b.parentNode
                    }
                    null != a.relatedTarget && this.id.split("_")[4] != a.relatedTarget.parentNode.id && this.remove()
                };
                f.onmouseup = function (a) {
                    a.stopPropagation && a.stopPropagation()
                };
                f.onmousedown = function (a) {
                    a.stopPropagation && a.stopPropagation()
                };
                f.onmousewheel = function (a) {
                    a.stopPropagation &&
                    a.stopPropagation()
                };
                a.div[b.usermap].addEventListener && f.addEventListener("DOMMouseScroll", function (a) {
                    a.stopPropagation && a.stopPropagation()
                }, !1);
                f.show = function () {
                    this.style.display = "block"
                };
                f.hide = function () {
                    this.style.display = "none"
                };
                f.reposition = function (c, d, k) {
                    var g;
                    g = "undefined" != typeof a.usermap[b.usermap].infobox.style.sensitivity ? a.usermap[b.usermap].infobox.style.sensitivity : 15;
                    var f = document.body.offsetHeight, e = document.body.offsetWidth,
                        h = 2 * parseInt(a.usermap[b.usermap].infobox.style.padding);
                    if (k || Math.sqrt((this.options.clientX - c) * (this.options.clientX - c) + (this.options.clientY - d) * (this.options.clientY - d)) > g) this.options.clientX = c, this.options.clientY = d, "undefined" != typeof a.usermap[b.usermap].infobox.style.width ? (k = parseInt(a.usermap[b.usermap].infobox.style.width), k > e ? (this.style.width = e - h + "px", this.style.left = 0) : k > Math.max(c, e - c) - h ? (e = e - c - k - h, 0 < e && (e = 0), this.style.width = k + "px", this.style.left = c + e + "px") : (this.style.width = k + "px", this.style.left = (k > e - c ? c - k - h : c) + "px")) : c > 3 * e / 5 ? (this.style.width =
                        "auto", this.style.left = "0px", k = parseFloat(window.getComputedStyle(document.getElementById(this.id), null).getPropertyValue("width")), k > e / 2 ? (this.style.width = e / 2 + "px", this.style.left = c - e / 2 - h + "px") : (this.style.width = k + "px", this.style.left = c - k - h + "px")) : (this.style.width = "auto", this.style.left = c + "px"), "undefined" != typeof a.usermap[b.usermap].infobox.style.height ? (c = parseInt(a.usermap[b.usermap].infobox.style.height), e = Math.max(d, f - d) - h, c > e ? (this.style.height = e + "px", this.style.top = (d > f / 2 ? 0 : d) + "px") : (this.style.height =
                        c + "px", this.style.top = (c > f - d ? d - c - h : d) + "px")) : d > 3 * f / 5 ? (this.style.height = "auto", c = parseFloat(window.getComputedStyle(document.getElementById(this.id), null).getPropertyValue("height")), c > f / 2 ? (this.style.height = f / 2 + "px", this.style.top = d - f / 2 - h + "px") : (this.style.height = c + "px", this.style.top = d - c - h + "px")) : (this.style.height = "auto", c = parseFloat(window.getComputedStyle(document.getElementById(this.id), null).getPropertyValue("height")), this.style.height = c > f - d - h - 3 ? f - d - h - 3 + "px" : "auto", this.style.top = d + "px")
                };
                f.remove = function () {
                    document.getElementById(this.id) && (a.div[b.usermap].removeChild(document.getElementById(this.id)), a.infobox[b.usermap].pop())
                };
                a.touchdevices && (f.ontouchstart = f.ontouchmove = f.ontouchend = function (a) {
                    a.stopPropagation && a.stopPropagation()
                });
                e = {};
                e.object = h.obj;
                e.id = d;
                a.infobox[b.usermap].push(e);
                f.reposition(h.clientX, h.clientY, !0);
                return f
            }, E = function (b, d, l, f) {
                var e = this, c = a.usermap[b.usermap].map.id, q = r("g");
                a.g[b.usermap].appendChild(q);
                q._options = f;
                q._id = d;
                0 == f.type ? q.setAttribute("id",
                    "imap5custom_" + b.usermap + "_verticesobj_" + d) : q.setAttribute("id", "imap5custom_" + b.usermap + "_subverticesobj_" + d);
                q._lat = f.lat;
                q._lng = f.lng;
                q._type = f.type;
                q._removable = f.removeable;
                this._parentnode = l;
                q._dx = a.map[c].precision / a.factor[b.usermap] * q._lng;
                q._dy = parseFloat(q._lat) * (a.map[c].precision / a.factor[b.usermap]);
                q.setOptions = function (a) {
                    this._options = a;
                    this._lat = a.lat;
                    this._lng = a.lng;
                    this._type = a.type;
                    this._removable = a.removable
                };
                q.hide = function () {
                    this.style.visibility = "hidden"
                };
                q.show = function () {
                    this.style.visibility =
                        "visible"
                };
                q.onmouseover = function (c) {
                    "edit" == a.mode[b.usermap] && (this.style.cursor = "pointer");
                    "edit" == a.mode[b.usermap] && (0 == f.type ? f.removable ? v(b, c, "<strong>[Drag]</strong> to change position. <strong>[Right Click]</strong> to delete.") : v(b, c, "<strong>[Drag]</strong> to change position.") : v(b, c, "<strong>[Click]</strong> to split the line segment"))
                };
                q.onmouseout = function (c) {
                    "edit" == a.mode[b.usermap] && (this.style.cursor = "auto");
                    "edit" == a.mode[b.usermap] && B(b);
                    "normal" == a.mode[b.usermap] && (this.style.cursor =
                        "auto")
                };
                q.onmousedown = function (c) {
                    c.preventDefault && c.preventDefault();
                    "edit" == a.mode[b.usermap] && (c.stopPropagation && c.stopPropagation(), this._mousedown = !0, this._mapdragged = !1, this._x = c.clientX, this._y = c.clientY, 0 == f.type ? (a.selectedOverlay[b.usermap] = this, e._parentnode.hideSubVertices()) : e._parentnode.addVertices(d, this._options.lat, this._options.lng))
                };
                0 == f.type && (q.onmousemove = function (k) {
                    k.preventDefault && k.preventDefault();
                    if ("edit" == a.mode[b.usermap] && (k.stopPropagation && k.stopPropagation(),
                    this._mousedown && 0 == f.type && (2 < Math.abs(k.clientX - this._x) || 2 < Math.abs(k.clientY - this._y)))) {
                        this._mapdragged = !0;
                        this._x = k.clientX;
                        this._y = k.clientY;
                        var g = a.svgcoord[b.usermap];
                        g.x = k.clientX;
                        g.y = k.clientY;
                        g = w(g, a.g[b.usermap]);
                        g.x /= a.map[c].precision / a.factor[b.usermap];
                        g.y /= a.map[c].precision / a.factor[b.usermap];
                        k = g.x;
                        var q = g.y;
                        this._lat = a.map[c].precision / a.factor[b.usermap] * g.y;
                        this._lng = a.map[c].precision / a.factor[b.usermap] * g.x;
                        this.setAttribute("transform", "translate(" + h(this._lng, a.precision) +
                            "," + h(this._lat, a.precision) + ") scale(" + h(a.map[c].precision / a.factor[b.usermap] / a.zoom[b.usermap].currentzoom, a.precision) + ")");
                        e._parentnode.updateVertices(d, q, k)
                    }
                }, q.onmouseup = function (c) {
                    c.preventDefault && c.preventDefault();
                    "edit" == a.mode[b.usermap] && 0 == f.type && (c.stopPropagation && c.stopPropagation(), a.selectedOverlay[b.usermap] == this && (a.selectedOverlay[b.usermap] = null), e._parentnode.postPosChange(), this._mousedown = !1)
                }, q.oncontextmenu = function (c) {
                    c.preventDefault && c.preventDefault();
                    "edit" ==
                    a.mode[b.usermap] && (c.stopPropagation && c.stopPropagation(), 0 == f.type && f.removable && e._parentnode.removeVertices(d))
                });
                q.drawVerticesObj = function () {
                    var k = this.getElementsByTagName("g")[0];
                    "undefined" != typeof k && this.removeChild(k);
                    var k = r("g"), g = r("circle");
                    k.appendChild(g);
                    this.appendChild(k);
                    g.setAttribute("cx", 0);
                    g.setAttribute("cy", 0);
                    g.setAttribute("r", 5);
                    g.setAttribute("stroke", "#000000");
                    g.setAttribute("stroke-width", 1);
                    1 == this._type ? (g.setAttribute("fill", "#CCCCCC"), g.setAttribute("fill-opacity",
                        .5)) : (g.setAttribute("fill", "#FFFFFF"), g.setAttribute("fill-opacity", 1));
                    k.setAttribute("transform", "scale(1,-1)");
                    k = this._options.lat;
                    g = this._options.lng;
                    this._lat = a.map[c].precision / a.factor[b.usermap] * k;
                    this._lng = a.map[c].precision / a.factor[b.usermap] * g;
                    this.setAttribute("transform", "translate(" + h(a.map[c].precision / a.factor[b.usermap] * g, a.precision) + "," + h(a.map[c].precision / a.factor[b.usermap] * k, a.precision) + ") scale(" + h(a.map[c].precision / a.factor[b.usermap] / a.zoom[b.usermap].currentzoom, a.precision) +
                        ")")
                };
                q.rescale = function () {
                    this.setAttribute("transform", "translate(" + h(this._lng, a.precision) + "," + h(this._lat, a.precision) + ") scale(" + h(a.map[c].precision / a.factor[b.usermap] / a.zoom[b.usermap].currentzoom, a.precision) + ")")
                };
                q.remove = function () {
                    a.g[b.usermap].removeChild(this)
                };
                q.drawVerticesObj();
                return q
            }, L = function (b, d, l) {
                var f = a.usermap[b.usermap].map.id, e = r("g");
                a.g[b.usermap].appendChild(e);
                e._options = l;
                e._id = d;
                e.setAttribute("id", "imap5custom_" + b.usermap + "_mapcurve_" + d);
                e._points = l.points;
                e._movingpoints = "";
                e._mainvertices = [];
                e._show = !0;
                e.updateVertices = function (b, d, k) {
                    var g = this._points.split(" ");
                    g[b - 1] = h(d, a.precision) + "," + h(k, a.precision);
                    b = "";
                    for (d = 0; d < g.length; d++) "" != b && (b += " "), b = b + g[d].split(",")[0] + "," + g[d].split(",")[1];
                    this._points = this._options.points = b;
                    this.drawMapCurve()
                };
                e.postPosChange = function () {
                    this.createVertices();
                    var a = {event: "poschange", object: "mapcurve"};
                    a.id = Number(this._id);
                    a.points = this._points;
                    
                };
                e.setPosition =
                    function (c) {
                        this._points = a.usermap[b.usermap].map.mapcurve[this._id].points = c.points;
                        this.drawMapCurve()
                    };
                e.getPosition = function () {
                    var a = {};
                    a.points = this._points;
                    return a
                };
                e.setOptions = function (a) {
                    this._options = a;
                    this._points = a.points
                };
                e.count = function () {
                    return this._options.points.split(" ").length
                };
                e.addPoint = function (a, b) {
                    var k = this._options.points;
                    this._options.points = this._points = k + " " + a + "," + b;
                    this.drawMapCurve()
                };
                e.hide = function () {
                    this.style.visibility = "hidden";
                    this._show = !1
                };
                e.show = function () {
                    this.style.visibility =
                        "visible";
                    this._show = !0
                };
                e.toggleCategory = function () {
                    "normal" == a.mode[b.usermap] ? "undefined" != typeof a.usermap[b.usermap].map.categorylegend && a.usermap[b.usermap].map.categorylegend.enable ? 0 != this._options.categoryid && ("undefined" != typeof a.categorylegend[b.usermap] ? -1 != a.categorylegend[b.usermap].visiblelist.indexOf(this._options.categoryid) ? this.show() : this.hide() : this.show()) : this.show() : this.show()
                };
                e.createVertices = function () {
                    null != a.selectedVerticesObj[b.usermap] && a.selectedVerticesObj[b.usermap] !=
                    this && a.selectedVerticesObj[b.usermap].deleteVertices();
                    a.selectedVerticesObj[b.usermap] = this;
                    for (var c in this._mainvertices) this._mainvertices.hasOwnProperty(c) && this._mainvertices[c].remove();
                    this._mainvertices.length = 0;
                    var d = this._points.split(" "), k, g = {};
                    for (c = 0; c < d.length; c++) k = d[c].split(","), g.lat = k[0], g.lng = k[1], g.type = 0, g.removable = !1, this._mainvertices[c + 1] = new E(b, c + 1, this, g), g = {}
                };
                e.deleteVertices = function () {
                    for (var a in this._mainvertices) this._mainvertices.hasOwnProperty(a) && this._mainvertices[a].remove();
                    this._mainvertices.length = 0
                };
                e.hideSubVertices = function () {
                };
                e.showSubVertices = function () {
                };
                e.drawMapCurve = function () {
                    if (this.hasChildNodes()) for (; 1 <= this.childNodes.length;) this.removeChild(this.firstChild);
                    var c, d, k, g, e, p, l, n;
                    e = r("path");
                    this.appendChild(e);
                    p = r("path");
                    this.appendChild(p);
                    p.setAttribute("fill", "none");
                    p.setAttribute("stroke", this._options.style.stroke);
                    p.setAttribute("stroke-width", h(this._options.style.strokeWidth / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]),
                        a.precision));
                    e.setAttribute("fill", "none");
                    e.setAttribute("stroke", "#FFFFFF");
                    e.setAttribute("stroke-width", h(4 / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision));
                    if ("undefined" != typeof this._options.style.strokeDasharray && "none" !== this._options.style.strokeDasharray) {
                        l = this._options.style.strokeDasharray.split(",");
                        c = "";
                        for (d = 0; d < l.length; d++) "" != c && (c += ","), c += h(l[d] / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision);
                        p.setAttribute("stroke-dasharray",
                            c);
                        e.setAttribute("stroke-dasharray", c)
                    }
                    l = this._options.points.split(" ");
                    c = "";
                    1 == this.count() ? (k = l[0].split(","), d = parseFloat(k[0]) * (a.map[f].precision / a.factor[b.usermap]), k = a.map[f].precision / a.factor[b.usermap] * k[1], c = c + "M" + h(k, a.precision) + "," + h(d, a.precision), "" != this._movingpoints && (k = this._movingpoints.split(","), d = parseFloat(k[0]) * (a.map[f].precision / a.factor[b.usermap]), k = a.map[f].precision / a.factor[b.usermap] * k[1], "" != c && (c += " L"), c = c + h(k, a.precision) + "," + h(d, a.precision))) : 2 == this.count() ?
                        (k = l[0].split(","), d = parseFloat(k[0]) * (a.map[f].precision / a.factor[b.usermap]), k = a.map[f].precision / a.factor[b.usermap] * k[1], c = c + "M" + h(k, a.precision) + "," + h(d, a.precision), "" != this._movingpoints && (k = this._movingpoints.split(","), d = parseFloat(k[0]) * (a.map[f].precision / a.factor[b.usermap]), k = a.map[f].precision / a.factor[b.usermap] * k[1], "" != c && (c += " "), c = c + "Q" + h(k, a.precision) + "," + h(d, a.precision)), k = l[1].split(","), d = parseFloat(k[0]) * (a.map[f].precision / a.factor[b.usermap]), k = a.map[f].precision / a.factor[b.usermap] *
                            k[1], c = c + " " + h(k, a.precision) + "," + h(d, a.precision)) : 3 == this.count() && (k = l[0].split(","), d = parseFloat(k[0]) * (a.map[f].precision / a.factor[b.usermap]), k = a.map[f].precision / a.factor[b.usermap] * k[1], c = c + "M" + h(k, a.precision) + "," + h(d, a.precision), "" != c && (c += " "), k = l[2].split(","), d = parseFloat(k[0]) * (a.map[f].precision / a.factor[b.usermap]), k = a.map[f].precision / a.factor[b.usermap] * k[1], c = c + "Q" + h(k, a.precision) + "," + h(d, a.precision), "" != c && (c += " "), k = l[1].split(","), d = parseFloat(k[0]) * (a.map[f].precision / a.factor[b.usermap]),
                        k = a.map[f].precision / a.factor[b.usermap] * k[1], c = c + h(k, a.precision) + "," + h(d, a.precision));
                    p.setAttribute("d", c);
                    p.setAttribute("stroke-opacity", this._options.style.strokeOpacity);
                    p.setAttribute("stroke-linejoin", "round");
                    e.setAttribute("d", c);
                    e.setAttribute("stroke-opacity", .01);
                    e.setAttribute("stroke-linejoin", "round");
                    if (3 == this.count()) {
                        n = c.split(" ");
                        c = parseFloat(n[0].substring(1).split(",")[0]);
                        d = parseFloat(n[0].substring(1).split(",")[1]);
                        k = parseFloat(n[1].substring(1).split(",")[0]);
                        g = parseFloat(n[1].substring(1).split(",")[1]);
                        e = parseFloat(n[1].substring(1).split(",")[0]);
                        p = parseFloat(n[1].substring(1).split(",")[1]);
                        l = parseFloat(n[2].split(",")[0]);
                        n = parseFloat(n[2].split(",")[1]);
                        switch ("undefined" == typeof this._options.style.arrowStartType ? 0 : this._options.style.arrowStartType) {
                            case 1:
                                var m = parseInt(this._options.style.strokeWidth) + 4, t = r("polygon");
                                this.appendChild(t);
                                t.setAttribute("fill", this._options.style.stroke);
                                t.setAttribute("fill-opacity", this._options.style.strokeOpacity);
                                t.setAttribute("stroke", this._options.style.stroke);
                                t.setAttribute("stroke-width", 0);
                                t.setAttribute("points", I(c, d, h(m / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision), F(c, d, k, g, 0)));
                                break;
                            case 2:
                                m = parseInt(this._options.style.strokeWidth) + 2;
                                t = r("path");
                                this.appendChild(t);
                                t.setAttribute("fill", "none");
                                t.setAttribute("stroke", this._options.style.stroke);
                                t.setAttribute("stroke-opacity", this._options.style.strokeOpacity);
                                t.setAttribute("stroke-width", h(parseInt(this._options.style.strokeWidth) / a.zoom[b.usermap].currentzoom *
                                    (a.map[f].precision / a.factor[b.usermap]), a.precision));
                                t.setAttribute("d", J(c, d, h(m / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision), F(c, d, k, g, 0)));
                                t.setAttribute("stroke-linejoin", "round");
                                t.setAttribute("stroke-linecap", "round");
                                break;
                            case 3:
                                m = parseInt(this._options.style.strokeWidth) + 2, t = r("circle"), this.appendChild(t), t.setAttribute("cx", c), t.setAttribute("cy", d), t.setAttribute("r", h(m / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision)),
                                    t.setAttribute("stroke", "#EEEEEE"), t.setAttribute("stroke-width", 0), t.setAttribute("fill", this._options.style.stroke), t.setAttribute("fill-opacity", this._options.style.strokeOpacity)
                        }
                        switch ("undefined" == typeof this._options.style.arrowEndType ? 0 : this._options.style.arrowEndType) {
                            case 1:
                                m = parseInt(this._options.style.strokeWidth) + 4;
                                c = r("polygon");
                                this.appendChild(c);
                                c.setAttribute("fill", this._options.style.stroke);
                                c.setAttribute("fill-opacity", this._options.style.strokeOpacity);
                                c.setAttribute("stroke",
                                    this._options.style.stroke);
                                c.setAttribute("stroke-width", 0);
                                c.setAttribute("points", I(l, n, h(m / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision), F(e, p, l, n, 1)));
                                break;
                            case 2:
                                m = parseInt(this._options.style.strokeWidth) + 2;
                                c = r("path");
                                this.appendChild(c);
                                c.setAttribute("fill", "none");
                                c.setAttribute("stroke", this._options.style.stroke);
                                c.setAttribute("stroke-opacity", this._options.style.strokeOpacity);
                                c.setAttribute("stroke-width", h(parseInt(this._options.style.strokeWidth) /
                                    a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision));
                                c.setAttribute("d", J(l, n, h(m / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision), F(e, p, l, n, 1)));
                                c.setAttribute("stroke-linejoin", "round");
                                c.setAttribute("stroke-linecap", "round");
                                break;
                            case 3:
                                m = parseInt(this._options.style.strokeWidth) + 2, c = r("circle"), this.appendChild(c), c.setAttribute("cx", l), c.setAttribute("cy", n), c.setAttribute("r", h(m / a.zoom[b.usermap].currentzoom * (a.map[f].precision /
                                    a.factor[b.usermap]), a.precision)), c.setAttribute("stroke", "#EEEEEE"), c.setAttribute("stroke-width", 0), c.setAttribute("fill", this._options.style.stroke), c.setAttribute("fill-opacity", this._options.style.strokeOpacity)
                        }
                    }
                };
                e.onmouseover = function (c) {
                    if ("mapcurve" == a.mode[b.usermap] || "edit" == a.mode[b.usermap]) this.style.cursor = "pointer";
                    "edit" == a.mode[b.usermap] && v(b, c, "Click to select");
                    if (!a.touchdevices && "normal" == a.mode[b.usermap] && ("undefined" != typeof a.usermap[b.usermap].map.mapcurve[this._id] &&
                    "undefined" != typeof a.usermap[b.usermap].map.mapcurve[this._id].link && (this.style.cursor = "pointer"), "onmouseover" == a.usermap[b.usermap].infobox.show && "undefined" != typeof a.usermap[b.usermap].map.mapcurve[this._id] && "undefined" != typeof a.usermap[b.usermap].map.mapcurve[this._id].infobox && !document.getElementById("imap5custom_" + b.usermap + "_infobox_mapcurve_" + this._id))) {
                        var d = {};
                        d.clientX = c.clientX;
                        d.clientY = c.clientY;
                        d.obj = "mapcurve";
                        d.infobox = a.usermap[b.usermap].map.mapcurve[this._id].infobox;
                        this.infobox =
                            new z(b, this._id, d)
                    }
                };
                e.onmouseout = function (c) {
                    if ("mapcurve" == a.mode[b.usermap] || "edit" == a.mode[b.usermap]) this.style.cursor = "auto";
                    "edit" == a.mode[b.usermap] && B(b);
                    "normal" == a.mode[b.usermap] && (this.style.cursor = "auto", "onmouseover" == a.usermap[b.usermap].infobox.show && "undefined" != typeof a.usermap[b.usermap].map.mapcurve[this._id] && "undefined" != typeof a.usermap[b.usermap].map.mapcurve[this._id].infobox && (null == c.relatedTarget || c.relatedTarget.id != "imap5custom_" + b.usermap + "_infobox_mapcurve_" + this._id) &&
                    document.getElementById("imap5custom_" + b.usermap + "_infobox_mapcurve_" + this._id) && this.infobox.remove())
                };
                e.onmousemove = function (c) {
                    c.preventDefault && c.preventDefault();
                    "normal" == a.mode[b.usermap] && (a.div[b.usermap]._mousedown ? document.getElementById("imap5custom_" + b.usermap + "_infobox_mapcurve_" + this._id) && this.infobox.hide() : document.getElementById("imap5custom_" + b.usermap + "_infobox_mapcurve_" + this._id) && (this.infobox.reposition(c.clientX, c.clientY), this.infobox.show()))
                };
                e.onclick = function (c) {
                    this._mapdragged ||
                    this._transformed || a.div[b.usermap]._mapdragged || ("edit" == a.mode[b.usermap] ? (this.createVertices(), c = {
                        event: "click",
                        object: "mapcurve"
                    }, c.id = Number(this._id), window.console && console.log(JSON.stringify(c))) : "normal" == a.mode[b.usermap] && "undefined" != typeof a.usermap[b.usermap].map.mapcurve[this._id] && "undefined" != typeof a.usermap[b.usermap].map.mapcurve[this._id].link && ("undefined" == typeof a.usermap[b.usermap].map.mapcurve[this._id].link_target ? location.href = a.usermap[b.usermap].map.mapcurve[this._id].link :
                        window.open(a.usermap[b.usermap].map.mapcurve[this._id].link, a.usermap[b.usermap].map.mapcurve[this._id].link_target)))
                };
                a.touchdevices && (e.ontouchstart = function (a) {
                    1 == a.touches.length && (this._touch = !0, this._move = !1, this._posX = a.touches[0].clientX, this._posY = a.touches[0].clientY)
                }, e.ontouchmove = function (a) {
                    1 == a.touches.length ? this._touch && (10 < Math.abs(a.touches[0].clientX - this._posX) || 10 < Math.abs(a.touches[0].clientY - this._posY)) && (this._move = !0) : this._touch = !1
                }, e.ontouchend = function (c) {
                    if (this._touch &&
                        !this._move && !a.div[b.usermap]._mapdragged) {
                        if ("edit" == a.mode[b.usermap]) {
                            c = {event: "click", object: "mapcurve"};
                            c.id = this._id;
                            window.console && console.log(JSON.stringify(c));
                            return
                        }
                        "undefined" != typeof a.usermap[b.usermap].map.mapcurve[this._id] && "undefined" != typeof a.usermap[b.usermap].map.mapcurve[this._id].link && ("undefined" == typeof a.usermap[b.usermap].map.mapcurve[this._id].link_target ? location.href = a.usermap[b.usermap].map.mapcurve[this._id].link : window.open(a.usermap[b.usermap].map.mapcurve[this._id].link,
                            a.usermap[b.usermap].map.mapcurve[this._id].link_target));
                        if ("edit" == a.mode[b.usermap]) return;
                        0 < a.infobox[b.usermap].length && (document.getElementById("imap5custom_" + b.usermap + "_infobox_" + a.infobox[b.usermap][0].object + "_" + a.infobox[b.usermap][0].id) && a.div[b.usermap].removeChild(document.getElementById("imap5custom_" + b.usermap + "_infobox_" + a.infobox[b.usermap][0].object + "_" + a.infobox[b.usermap][0].id)), a.infobox[b.usermap].pop());
                        "undefined" == typeof a.usermap[b.usermap].map.mapcurve[this._id] || "undefined" ==
                        typeof a.usermap[b.usermap].map.mapcurve[this._id].infobox || document.getElementById("imap5custom_" + b.usermap + "_infobox_mapcurve_" + this._id) || (c = {}, c.clientX = this._posX, c.clientY = this._posY, c.obj = "mapcurve", c.infobox = a.usermap[b.usermap].map.mapcurve[this._id].infobox, this.infobox = new z(b, this._id, c))
                    }
                    this._move = this._touch = !1
                });
                e.remove = function () {
                    for (var c in this._mainvertices) this._mainvertices.hasOwnProperty(c) && this._mainvertices[c].remove();
                    a.g[b.usermap].removeChild(this);
                    a.mapcurve[b.usermap][this._id] =
                        null
                };
                e.drawMapCurve();
                return e
            }, M = function (b, d, l) {
                var f = a.usermap[b.usermap].map.id, e = r("g");
                a.g[b.usermap].appendChild(e);
                e._options = l;
                e._id = d;
                e.setAttribute("id", "imap5custom_" + b.usermap + "_maprect_" + d);
                e._points = l.points;
                e._movingpoints = "";
                e._mainvertices = [];
                e.ishighlight = !1;
                e._show = !0;
                e.setOptions = function (a) {
                    this._options = a;
                    this._points = a.points
                };
                e.hide = function () {
                    this.style.visibility = "hidden";
                    this._show = !1
                };
                e.show = function () {
                    this.style.visibility = "visible";
                    this._show = !0
                };
                e.toggleCategory = function () {
                    "normal" ==
                    a.mode[b.usermap] ? "undefined" != typeof a.usermap[b.usermap].map.categorylegend && a.usermap[b.usermap].map.categorylegend.enable ? 0 != this._options.categoryid && ("undefined" != typeof a.categorylegend[b.usermap] ? -1 != a.categorylegend[b.usermap].visiblelist.indexOf(this._options.categoryid) ? this.show() : this.hide() : this.show()) : this.show() : this.show()
                };
                e.createVertices = function () {
                    null != a.selectedVerticesObj[b.usermap] && a.selectedVerticesObj[b.usermap] != this && a.selectedVerticesObj[b.usermap].deleteVertices();
                    a.selectedVerticesObj[b.usermap] = this;
                    for (var c in this._mainvertices) this._mainvertices.hasOwnProperty(c) && this._mainvertices[c].remove();
                    this._mainvertices.length = 0;
                    var d = this._points.split(" "), k, g = {};
                    for (c = 0; c < d.length; c++) k = d[c].split(","), g.lat = k[0], g.lng = k[1], g.type = 0, g.removable = !1, this._mainvertices[c + 1] = new E(b, c + 1, this, g), g = {}
                };
                e.deleteVertices = function () {
                    for (var a in this._mainvertices) this._mainvertices.hasOwnProperty(a) && this._mainvertices[a].remove();
                    this._mainvertices.length = 0
                };
                e.postPosChange =
                    function () {
                        this.createVertices();
                        var a = {event: "poschange", object: "maprect"};
                        a.id = Number(this._id);
                        a.points = this._points;
                        
                    };
                e.updateVertices = function (b, d, k) {
                    var g = this._points.split(" ");
                    g[b - 1] = h(d, a.precision) + "," + h(k, a.precision);
                    g[b - 1].split(",");
                    var f = g[(b - 1 + 2) % 4].split(",");
                    g[(b - 1 + 1) % 4] = h(f[0], a.precision) + "," + h(k, a.precision);
                    g[(b - 1 + 2) % 4] = h(f[0], a.precision) + "," + h(f[1], a.precision);
                    g[(b - 1 + 3) % 4] = h(d, a.precision) + "," + h(f[1], a.precision);
                    for (var e = "",
                             e = "", l = 0; l < g.length; l++) "" != e && (e += " "), e = e + g[l].split(",")[0] + "," + g[l].split(",")[1];
                    this._points = this._options.points = e;
                    g = {};
                    g.lat = f[0];
                    g.lng = k;
                    g.type = 0;
                    g.removable = !1;
                    this._mainvertices[(b - 1 + 1) % 4 + 1].setOptions(g);
                    this._mainvertices[(b - 1 + 1) % 4 + 1].drawVerticesObj();
                    g = {};
                    g.lat = d;
                    g.lng = f[1];
                    g.type = 0;
                    g.removable = !1;
                    this._mainvertices[(b - 1 + 3) % 4 + 1].setOptions(g);
                    this._mainvertices[(b - 1 + 3) % 4 + 1].drawVerticesObj();
                    this.drawMapRect()
                };
                e.hideSubVertices = function () {
                };
                e.showSubVertices = function () {
                };
                e.drawMapRect =
                    function () {
                        var c = this.getElementsByTagName("polygon")[0];
                        "undefined" != typeof c && this.removeChild(c);
                        c = r("polygon");
                        this.appendChild(c);
                        c.setAttribute("fill", this._options.fill);
                        c.setAttribute("fill-opacity", this._options.fillOpacity);
                        c.setAttribute("stroke", this._options.style.stroke);
                        c.setAttribute("stroke-width", h(this._options.style.strokeWidth / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision));
                        if ("undefined" != typeof this._options.style.strokeDasharray && "none" !==
                            this._options.style.strokeDasharray) {
                            for (var d = this._options.style.strokeDasharray.split(","), k = "", g = 0; g < d.length; g++) "" != k && (k += ","), k += h(d[g] / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision);
                            c.setAttribute("stroke-dasharray", k)
                        }
                        var d = this._options.points.split(" "), k = "", e, p;
                        p = g = "";
                        if (1 == d.length) g = d[0].split(","), p = "" == this._movingpoints ? g : this._movingpoints.split(","), k = k + h(a.map[f].precision / a.factor[b.usermap] * g[1], a.precision) + ",", k = k + h(parseFloat(g[0]) * (a.map[f].precision /
                            a.factor[b.usermap]), a.precision) + " ", k = k + h(a.map[f].precision / a.factor[b.usermap] * p[1], a.precision) + ",", k = k + h(parseFloat(g[0]) * (a.map[f].precision / a.factor[b.usermap]), a.precision) + " ", k = k + h(a.map[f].precision / a.factor[b.usermap] * p[1], a.precision) + ",", k = k + h(parseFloat(p[0]) * (a.map[f].precision / a.factor[b.usermap]), a.precision) + " ", k = k + h(a.map[f].precision / a.factor[b.usermap] * g[1], a.precision) + ",", k += h(parseFloat(p[0]) * (a.map[f].precision / a.factor[b.usermap]), a.precision); else for (g = 0; g < d.length; g++) "" !=
                        k && (k += " "), e = d[g].split(","), p = parseFloat(e[0]) * (a.map[f].precision / a.factor[b.usermap]), e = a.map[f].precision / a.factor[b.usermap] * e[1], k = k + h(e, a.precision) + "," + h(p, a.precision);
                        c.setAttribute("points", k);
                        c.setAttribute("stroke-opacity", this._options.style.strokeOpacity);
                        c.setAttribute("stroke-linejoin", "round")
                    };
                e.onclick = function (c) {
                    this._mapdragged || this._transformed || a.div[b.usermap]._mapdragged || ("edit" == a.mode[b.usermap] ? (this.createVertices(), c = {
                        event: "click",
                        object: "maprect"
                    }, c.id = Number(this._id),
                    window.console && console.log(JSON.stringify(c))) : "normal" == a.mode[b.usermap] && "undefined" != typeof a.usermap[b.usermap].map.maprect[this._id] && "undefined" != typeof a.usermap[b.usermap].map.maprect[this._id].link && ("undefined" == typeof a.usermap[b.usermap].map.maprect[this._id].link_target ? location.href = a.usermap[b.usermap].map.maprect[this._id].link : window.open(a.usermap[b.usermap].map.maprect[this._id].link, a.usermap[b.usermap].map.maprect[this._id].link_target)))
                };
                a.touchdevices || (e.onmouseover = function (c) {
                    if ("maprect" ==
                        a.mode[b.usermap] || "edit" == a.mode[b.usermap]) this.style.cursor = "pointer";
                    "edit" == a.mode[b.usermap] && null == a.selectedOverlay[b.usermap] && (v(b, c, "<strong>[Click]</strong> to select and <strong>[Drag]</strong> to change position"), this.getElementsByTagName("polygon")[0].setAttribute("fill", this._options.fillHighlight), this.getElementsByTagName("polygon")[0].setAttribute("fill-opacity", this._options.fillHighlightOpacity));
                    if (!a.touchdevices && "normal" == a.mode[b.usermap] && ("undefined" != typeof a.usermap[b.usermap].map.maprect[this._id] &&
                    "undefined" != typeof a.usermap[b.usermap].map.maprect[this._id].link && (this.style.cursor = "pointer"), this.getElementsByTagName("polygon")[0].setAttribute("fill", this._options.fillHighlight), this.getElementsByTagName("polygon")[0].setAttribute("fill-opacity", this._options.fillHighlightOpacity), "onmouseover" == a.usermap[b.usermap].infobox.show && "undefined" != typeof a.usermap[b.usermap].map.maprect[this._id] && "undefined" != typeof a.usermap[b.usermap].map.maprect[this._id].infobox && !document.getElementById("imap5custom_" +
                        b.usermap + "_infobox_maprect_" + this._id))) {
                        var d = {};
                        d.clientX = c.clientX;
                        d.clientY = c.clientY;
                        d.obj = "maprect";
                        d.infobox = a.usermap[b.usermap].map.maprect[this._id].infobox;
                        this.infobox = new z(b, this._id, d)
                    }
                });
                a.touchdevices || (e.onmouseout = function (c) {
                    if ("maprect" == a.mode[b.usermap] || "edit" == a.mode[b.usermap]) this.style.cursor = "auto";
                    "edit" == a.mode[b.usermap] && (B(b), this.getElementsByTagName("polygon")[0].setAttribute("fill", this._options.fill), this.getElementsByTagName("polygon")[0].setAttribute("fill-opacity",
                        this._options.fillOpacity));
                    "normal" == a.mode[b.usermap] && (this.style.cursor = "auto", this.getElementsByTagName("polygon")[0].setAttribute("fill", this._options.fill), this.getElementsByTagName("polygon")[0].setAttribute("fill-opacity", this._options.fillOpacity), "onmouseover" == a.usermap[b.usermap].infobox.show && "undefined" != typeof a.usermap[b.usermap].map.maprect[this._id] && "undefined" != typeof a.usermap[b.usermap].map.maprect[this._id].infobox && (null == c.relatedTarget || c.relatedTarget.id != "imap5custom_" +
                        b.usermap + "_infobox_maprect_" + this._id) && document.getElementById("imap5custom_" + b.usermap + "_infobox_maprect_" + this._id) && this.infobox.remove())
                });
                e.onmousedown = function (c) {
                    c.preventDefault && c.preventDefault();
                    "edit" == a.mode[b.usermap] && (c.stopPropagation && c.stopPropagation(), this._mousedown = !0, this._mapdragged = !1, this._x = c.clientX, this._y = c.clientY, a.selectedOverlay[b.usermap] = this)
                };
                e.onmouseup = function (c) {
                    c.preventDefault && c.preventDefault();
                    if ("edit" == a.mode[b.usermap]) if (a.selectedOverlay[b.usermap] ==
                        this) a.selectedOverlay[b.usermap] = null, c.stopPropagation && c.stopPropagation(), this.createVertices(), c = {
                        event: "poschange",
                        object: "maprect"
                    }, c.id = Number(this._id), c.points = this._points, window.console && console.log(JSON.stringify(c)), this._mousedown = !1; else if (null != a.selectedOverlay[b.usermap]) a.selectedOverlay[b.usermap].onmouseup(c)
                };
                e.onmousemove = function (c) {
                    c.preventDefault && c.preventDefault();
                    if ("edit" == a.mode[b.usermap]) if (a.selectedOverlay[b.usermap] == this) {
                        if (this._mousedown && (c.stopPropagation &&
                        c.stopPropagation(), 2 < Math.abs(c.clientX - this._x) || 2 < Math.abs(c.clientY - this._y))) {
                            this._mapdragged = !0;
                            var d = h((c.clientX - this._x) / a.zoom[b.usermap].currentzoom, a.precision),
                                k = h((c.clientY - this._y) / a.zoom[b.usermap].currentzoom, a.precision),
                                g = this._points.split(" "), f, e;
                            for (e in g) g.hasOwnProperty(e) && (f = g[e].split(","), g[e] = h(parseFloat(f[0]) - k, a.precision) + "," + h(parseFloat(f[1]) + d, a.precision));
                            d = "";
                            for (e = 0; e < g.length; e++) "" != d && (d += " "), d = d + g[e].split(",")[0] + "," + g[e].split(",")[1];
                            this._points =
                                this._options.points = d;
                            this.deleteVertices();
                            this.drawMapRect();
                            this.createVertices();
                            this._x = c.clientX;
                            this._y = c.clientY
                        }
                    } else if (null != a.selectedOverlay[b.usermap]) a.selectedOverlay[b.usermap].onmousemove(c);
                    "normal" == a.mode[b.usermap] && (a.div[b.usermap]._mousedown ? document.getElementById("imap5custom_" + b.usermap + "_infobox_maprect_" + this._id) && this.infobox.hide() : document.getElementById("imap5custom_" + b.usermap + "_infobox_maprect_" + this._id) && (this.infobox.reposition(c.clientX, c.clientY), this.infobox.show()))
                };
                a.touchdevices && (e.ontouchstart = function (a) {
                    1 == a.touches.length && (this._touch = !0, this._move = !1, this._posX = a.touches[0].clientX, this._posY = a.touches[0].clientY)
                }, e.ontouchmove = function (a) {
                    1 == a.touches.length ? this._touch && (10 < Math.abs(a.touches[0].clientX - this._posX) || 10 < Math.abs(a.touches[0].clientY - this._posY)) && (this._move = !0) : this._touch = !1
                }, e.ontouchend = function (c) {
                    if (this._touch && !this._move && !a.div[b.usermap]._mapdragged) {
                        if ("edit" == a.mode[b.usermap]) {
                            c = {event: "click", object: "maprect"};
                            c.id =
                                this._id;
                            window.console && console.log(JSON.stringify(c));
                            return
                        }
                        "undefined" != typeof a.usermap[b.usermap].map.maprect[this._id] && "undefined" != typeof a.usermap[b.usermap].map.maprect[this._id].link && ("undefined" == typeof a.usermap[b.usermap].map.maprect[this._id].link_target ? location.href = a.usermap[b.usermap].map.maprect[this._id].link : window.open(a.usermap[b.usermap].map.maprect[this._id].link, a.usermap[b.usermap].map.maprect[this._id].link_target));
                        if ("edit" == a.mode[b.usermap]) return;
                        this.ishighlight ?
                            (this.ishighlight = !1, this.getElementsByTagName("polygon")[0].setAttribute("fill", this._options.fill), this.getElementsByTagName("polygon")[0].setAttribute("fill-opacity", this._options.fillOpacity)) : (this.ishighlight = !0, this.getElementsByTagName("polygon")[0].setAttribute("fill", this._options.fillHighlight), this.getElementsByTagName("polygon")[0].setAttribute("fill-opacity", this._options.fillHighlightOpacity));
                        0 < a.infobox[b.usermap].length && (document.getElementById("imap5custom_" + b.usermap + "_infobox_" +
                            a.infobox[b.usermap][0].object + "_" + a.infobox[b.usermap][0].id) && a.div[b.usermap].removeChild(document.getElementById("imap5custom_" + b.usermap + "_infobox_" + a.infobox[b.usermap][0].object + "_" + a.infobox[b.usermap][0].id)), a.infobox[b.usermap].pop());
                        "undefined" == typeof a.usermap[b.usermap].map.maprect[this._id] || "undefined" == typeof a.usermap[b.usermap].map.maprect[this._id].infobox || document.getElementById("imap5custom_" + b.usermap + "_infobox_maprect_" + this._id) || (c = {}, c.clientX = this._posX, c.clientY = this._posY,
                            c.obj = "maprect", c.infobox = a.usermap[b.usermap].map.maprect[this._id].infobox, this.infobox = new z(b, this._id, c))
                    }
                    this._move = this._touch = !1
                });
                e.remove = function () {
                    for (var c in this._mainvertices) this._mainvertices.hasOwnProperty(c) && this._mainvertices[c].remove();
                    a.g[b.usermap].removeChild(this);
                    a.maprect[b.usermap][this._id] = null
                };
                e.drawMapRect();
                return e
            }, N = function (b, d, l) {
                var f = a.usermap[b.usermap].map.id, e = r("g");
                a.g[b.usermap].appendChild(e);
                e._options = l;
                e._id = d;
                e.setAttribute("id", "imap5custom_" +
                    b.usermap + "_mapcircle_" + d);
                e._points = l.points;
                e._movingpoints = "";
                e._mainvertices = [];
                e.ishighlight = !1;
                e._show = !0;
                e.setOptions = function (a) {
                    this._options = a;
                    this._points = a.points
                };
                e.hide = function () {
                    this.style.visibility = "hidden";
                    this._show = !1
                };
                e.show = function () {
                    this.style.visibility = "visible";
                    this._show = !0
                };
                e.toggleCategory = function () {
                    "normal" == a.mode[b.usermap] ? "undefined" != typeof a.usermap[b.usermap].map.categorylegend && a.usermap[b.usermap].map.categorylegend.enable ? 0 != this._options.categoryid && ("undefined" !=
                    typeof a.categorylegend[b.usermap] ? -1 != a.categorylegend[b.usermap].visiblelist.indexOf(this._options.categoryid) ? this.show() : this.hide() : this.show()) : this.show() : this.show()
                };
                e.createVertices = function () {
                    null != a.selectedVerticesObj[b.usermap] && a.selectedVerticesObj[b.usermap] != this && a.selectedVerticesObj[b.usermap].deleteVertices();
                    a.selectedVerticesObj[b.usermap] = this;
                    for (var c in this._mainvertices) this._mainvertices.hasOwnProperty(c) && this._mainvertices[c].remove();
                    this._mainvertices.length = 0;
                    var d =
                        this._points.split(" "), k = {}, g = d[0].split(",");
                    c = d[1].split(",");
                    var d = H({x: g[1], y: g[0]}, {x: c[1], y: c[0]}),
                        f = Math.atan2(parseFloat(c[0]) - parseFloat(g[0]), parseFloat(c[1]) - parseFloat(g[1]));
                    for (c = 0; 4 > c; c++) k.lat = parseFloat(g[0]) + d * Math.sin(f + Math.PI / 2 * c), k.lng = parseFloat(g[1]) + d * Math.cos(f + Math.PI / 2 * c), k.type = 0, k.removable = !1, this._mainvertices[c + 2] = new E(b, c + 2, this, k), k = {}
                };
                e.deleteVertices = function () {
                    for (var a in this._mainvertices) this._mainvertices.hasOwnProperty(a) && this._mainvertices[a].remove();
                    this._mainvertices.length = 0
                };
                e.postPosChange = function () {
                    this.createVertices();
                    var a = {event: "poschange", object: "mapcircle"};
                    a.id = Number(this._id);
                    a.points = this._points;
                    
                };
                e.updateVertices = function (b, d, k) {
                    var g = this._points.split(" ");
                    g[0].split(",");
                    g[1].split(",");
                    var f = g[0].split(",");
                    k = [d, k];
                    d = H({x: f[1], y: f[0]}, {x: k[1], y: k[0]});
                    k = Math.atan2(parseFloat(k[0]) - parseFloat(f[0]), parseFloat(k[1]) - parseFloat(f[1])) - Math.PI / 2 * (b - 2);
                    var e = {};
                    for (b = 0; 4 > b; b++) e.lat =
                        parseFloat(f[0]) + d * Math.sin(k + Math.PI / 2 * b), e.lng = parseFloat(f[1]) + d * Math.cos(k + Math.PI / 2 * b), 0 == b && (g[1] = h(e.lat, a.precision) + "," + h(e.lng, a.precision)), e.type = 0, e.removable = !1, this._mainvertices[b + 2].setOptions(e), this._mainvertices[b + 2].drawVerticesObj(), e = {};
                    f = "";
                    for (b = 0; b < g.length; b++) "" != f && (f += " "), f = f + g[b].split(",")[0] + "," + g[b].split(",")[1];
                    this._points = this._options.points = f;
                    this.drawMapCircle()
                };
                e.hideSubVertices = function () {
                };
                e.showSubVertices = function () {
                };
                e.drawMapCircle = function () {
                    var c =
                        this.getElementsByTagName("circle")[0];
                    "undefined" != typeof c && this.removeChild(c);
                    c = r("circle");
                    this.appendChild(c);
                    c.setAttribute("fill", this._options.fill);
                    c.setAttribute("fill-opacity", this._options.fillOpacity);
                    c.setAttribute("stroke", this._options.style.stroke);
                    c.setAttribute("stroke-width", h(this._options.style.strokeWidth / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision));
                    if ("undefined" != typeof this._options.style.strokeDasharray && "none" !== this._options.style.strokeDasharray) {
                        for (var d =
                            this._options.style.strokeDasharray.split(","), k = "", g = 0; g < d.length; g++) "" != k && (k += ","), k += h(d[g] / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision);
                        c.setAttribute("stroke-dasharray", k)
                    }
                    var d = this._options.points.split(" "), k = "", e, p, l;
                    e = g = "";
                    var n = {}, m = {};
                    if (1 == d.length) g = d[0].split(","), e = "" == this._movingpoints ? g : this._movingpoints.split(","), h(a.map[f].precision / a.factor[b.usermap] * g[1], a.precision), h(parseFloat(g[0]) * (a.map[f].precision / a.factor[b.usermap]), a.precision),
                        h(a.map[f].precision / a.factor[b.usermap] * e[1], a.precision), h(parseFloat(e[0]) * (a.map[f].precision / a.factor[b.usermap]), a.precision), n.x = h(a.map[f].precision / a.factor[b.usermap] * g[1], a.precision), n.y = h(parseFloat(g[0]) * (a.map[f].precision / a.factor[b.usermap]), a.precision), m.x = h(a.map[f].precision / a.factor[b.usermap] * e[1], a.precision), m.y = h(parseFloat(e[0]) * (a.map[f].precision / a.factor[b.usermap]), a.precision); else for (g = 0; g < d.length; g++) "" != k && (k += " "), e = d[g].split(","), l = parseFloat(e[0]) * (a.map[f].precision /
                        a.factor[b.usermap]), p = a.map[f].precision / a.factor[b.usermap] * e[1], k = k + h(p, a.precision) + "," + h(l, a.precision), 0 == g ? (n.x = h(a.map[f].precision / a.factor[b.usermap] * e[1], a.precision), n.y = h(parseFloat(e[0]) * (a.map[f].precision / a.factor[b.usermap]), a.precision)) : (m.x = h(a.map[f].precision / a.factor[b.usermap] * e[1], a.precision), m.y = h(parseFloat(e[0]) * (a.map[f].precision / a.factor[b.usermap]), a.precision));
                    c.setAttribute("cx", n.x);
                    c.setAttribute("cy", n.y);
                    c.setAttribute("r", H(n, m));
                    c.setAttribute("stroke-opacity",
                        this._options.style.strokeOpacity);
                    c.setAttribute("stroke-linejoin", "round")
                };
                e.onclick = function (c) {
                    this._mapdragged || this._transformed || a.div[b.usermap]._mapdragged || ("edit" == a.mode[b.usermap] ? (this.createVertices(), c = {
                        event: "click",
                        object: "mapcircle"
                    }, c.id = Number(this._id), window.console && console.log(JSON.stringify(c))) : "normal" == a.mode[b.usermap] && "undefined" != typeof a.usermap[b.usermap].map.mapcircle[this._id] && "undefined" != typeof a.usermap[b.usermap].map.mapcircle[this._id].link && ("undefined" ==
                    typeof a.usermap[b.usermap].map.mapcircle[this._id].link_target ? location.href = a.usermap[b.usermap].map.mapcircle[this._id].link : window.open(a.usermap[b.usermap].map.mapcircle[this._id].link, a.usermap[b.usermap].map.mapcircle[this._id].link_target)))
                };
                a.touchdevices || (e.onmouseover = function (c) {
                    if ("mapcircle" == a.mode[b.usermap] || "edit" == a.mode[b.usermap]) this.style.cursor = "pointer";
                    "edit" == a.mode[b.usermap] && null == a.selectedOverlay[b.usermap] && (v(b, c, "<strong>[Click]</strong> to select and <strong>[Drag]</strong> to change Position"),
                        this.getElementsByTagName("circle")[0].setAttribute("fill", this._options.fillHighlight), this.getElementsByTagName("circle")[0].setAttribute("fill-opacity", this._options.fillHighlightOpacity));
                    if (!a.touchdevices && "normal" == a.mode[b.usermap] && ("undefined" != typeof a.usermap[b.usermap].map.mapcircle[this._id] && "undefined" != typeof a.usermap[b.usermap].map.mapcircle[this._id].link && (this.style.cursor = "pointer"), this.getElementsByTagName("circle")[0].setAttribute("fill", this._options.fillHighlight), this.getElementsByTagName("circle")[0].setAttribute("fill-opacity",
                        this._options.fillHighlightOpacity), "onmouseover" == a.usermap[b.usermap].infobox.show && "undefined" != typeof a.usermap[b.usermap].map.mapcircle[this._id] && "undefined" != typeof a.usermap[b.usermap].map.mapcircle[this._id].infobox && !document.getElementById("imap5custom_" + b.usermap + "_infobox_mapcircle_" + this._id))) {
                        var d = {};
                        d.clientX = c.clientX;
                        d.clientY = c.clientY;
                        d.obj = "mapcircle";
                        d.infobox = a.usermap[b.usermap].map.mapcircle[this._id].infobox;
                        this.infobox = new z(b, this._id, d)
                    }
                });
                a.touchdevices || (e.onmouseout =
                    function (c) {
                        if ("mapcircle" == a.mode[b.usermap] || "edit" == a.mode[b.usermap]) this.style.cursor = "auto";
                        "edit" == a.mode[b.usermap] && (B(b), this.getElementsByTagName("circle")[0].setAttribute("fill", this._options.fill), this.getElementsByTagName("circle")[0].setAttribute("fill-opacity", this._options.fillOpacity));
                        "normal" == a.mode[b.usermap] && (this.style.cursor = "auto", this.getElementsByTagName("circle")[0].setAttribute("fill", this._options.fill), this.getElementsByTagName("circle")[0].setAttribute("fill-opacity",
                            this._options.fillOpacity), "onmouseover" == a.usermap[b.usermap].infobox.show && "undefined" != typeof a.usermap[b.usermap].map.mapcircle[this._id] && "undefined" != typeof a.usermap[b.usermap].map.mapcircle[this._id].infobox && (null == c.relatedTarget || c.relatedTarget.id != "imap5custom_" + b.usermap + "_infobox_mapcircle_" + this._id) && document.getElementById("imap5custom_" + b.usermap + "_infobox_mapcircle_" + this._id) && this.infobox.remove())
                    });
                e.onmousedown = function (c) {
                    c.preventDefault && c.preventDefault();
                    "edit" == a.mode[b.usermap] &&
                    (c.stopPropagation && c.stopPropagation(), this._mousedown = !0, this._mapdragged = !1, this._x = c.clientX, this._y = c.clientY, a.selectedOverlay[b.usermap] = this)
                };
                e.onmouseup = function (c) {
                    c.preventDefault && c.preventDefault();
                    if ("edit" == a.mode[b.usermap]) if (a.selectedOverlay[b.usermap] == this) c.stopPropagation && c.stopPropagation(), a.selectedOverlay[b.usermap] = null, this.createVertices(), c = {
                        event: "poschange",
                        object: "mapcircle"
                    }, c.id = Number(this._id), c.points = this._points, window.console && console.log(JSON.stringify(c)),
                        this._mousedown = !1; else if (null != a.selectedOverlay[b.usermap]) a.selectedOverlay[b.usermap].onmouseup(c)
                };
                e.onmousemove = function (c) {
                    c.preventDefault && c.preventDefault();
                    if ("edit" == a.mode[b.usermap]) if (a.selectedOverlay[b.usermap] == this) {
                        if (this._mousedown && (c.stopPropagation && c.stopPropagation(), 2 < Math.abs(c.clientX - this._x) || 2 < Math.abs(c.clientY - this._y))) {
                            this._mapdragged = !0;
                            var d = h((c.clientX - this._x) / a.zoom[b.usermap].currentzoom, a.precision),
                                k = h((c.clientY - this._y) / a.zoom[b.usermap].currentzoom,
                                    a.precision), g = this._points.split(" "), f, e;
                            for (e in g) g.hasOwnProperty(e) && (f = g[e].split(","), g[e] = h(parseFloat(f[0]) - k, a.precision) + "," + h(parseFloat(f[1]) + d, a.precision));
                            d = "";
                            for (e = 0; e < g.length; e++) "" != d && (d += " "), d = d + g[e].split(",")[0] + "," + g[e].split(",")[1];
                            this._points = this._options.points = d;
                            this.deleteVertices();
                            this.drawMapCircle();
                            this.createVertices();
                            this._x = c.clientX;
                            this._y = c.clientY
                        }
                    } else if (null != a.selectedOverlay[b.usermap]) a.selectedOverlay[b.usermap].onmousemove(c);
                    "normal" == a.mode[b.usermap] &&
                    (a.div[b.usermap]._mousedown ? document.getElementById("imap5custom_" + b.usermap + "_infobox_mapcircle_" + this._id) && this.infobox.hide() : document.getElementById("imap5custom_" + b.usermap + "_infobox_mapcircle_" + this._id) && (this.infobox.reposition(c.clientX, c.clientY), this.infobox.show()))
                };
                a.touchdevices && (e.ontouchstart = function (a) {
                    1 == a.touches.length && (this._touch = !0, this._move = !1, this._posX = a.touches[0].clientX, this._posY = a.touches[0].clientY)
                }, e.ontouchmove = function (a) {
                    1 == a.touches.length ? this._touch &&
                        (10 < Math.abs(a.touches[0].clientX - this._posX) || 10 < Math.abs(a.touches[0].clientY - this._posY)) && (this._move = !0) : this._touch = !1
                }, e.ontouchend = function (c) {
                    if (this._touch && !this._move && !a.div[b.usermap]._mapdragged) {
                        if ("edit" == a.mode[b.usermap]) {
                            c = {event: "click", object: "mapcircle"};
                            c.id = this._id;
                            window.console && console.log(JSON.stringify(c));
                            return
                        }
                        "undefined" != typeof a.usermap[b.usermap].map.mapcircle[this._id] && "undefined" != typeof a.usermap[b.usermap].map.mapcircle[this._id].link && ("undefined" == typeof a.usermap[b.usermap].map.mapcircle[this._id].link_target ?
                            location.href = a.usermap[b.usermap].map.mapcircle[this._id].link : window.open(a.usermap[b.usermap].map.mapcircle[this._id].link, a.usermap[b.usermap].map.mapcircle[this._id].link_target));
                        if ("edit" == a.mode[b.usermap]) return;
                        this.ishighlight ? (this.ishighlight = !1, this.getElementsByTagName("circle")[0].setAttribute("fill", this._options.fill), this.getElementsByTagName("circle")[0].setAttribute("fill-opacity", this._options.fillOpacity)) : (this.ishighlight = !0, this.getElementsByTagName("circle")[0].setAttribute("fill",
                            this._options.fillHighlight), this.getElementsByTagName("circle")[0].setAttribute("fill-opacity", this._options.fillHighlightOpacity));
                        0 < a.infobox[b.usermap].length && (document.getElementById("imap5custom_" + b.usermap + "_infobox_" + a.infobox[b.usermap][0].object + "_" + a.infobox[b.usermap][0].id) && a.div[b.usermap].removeChild(document.getElementById("imap5custom_" + b.usermap + "_infobox_" + a.infobox[b.usermap][0].object + "_" + a.infobox[b.usermap][0].id)), a.infobox[b.usermap].pop());
                        "undefined" == typeof a.usermap[b.usermap].map.mapcircle[this._id] ||
                        "undefined" == typeof a.usermap[b.usermap].map.mapcircle[this._id].infobox || document.getElementById("imap5custom_" + b.usermap + "_infobox_mapcircle_" + this._id) || (c = {}, c.clientX = this._posX, c.clientY = this._posY, c.obj = "mapcircle", c.infobox = a.usermap[b.usermap].map.mapcircle[this._id].infobox, this.infobox = new z(b, this._id, c))
                    }
                    this._move = this._touch = !1
                });
                e.remove = function () {
                    for (var c in this._mainvertices) this._mainvertices.hasOwnProperty(c) && this._mainvertices[c].remove();
                    a.g[b.usermap].removeChild(this);
                    a.mapcircle[b.usermap][this._id] = null
                };
                e.drawMapCircle();
                return e
            }, O = function (b, d, l) {
                var f = a.usermap[b.usermap].map.id, e = r("g");
                a.g[b.usermap].appendChild(e);
                e._options = l;
                e._id = d;
                e.setAttribute("id", "imap5custom_" + b.usermap + "_mappoly_" + d);
                e._points = l.points;
                e._movingpoints = "";
                e._mainvertices = [];
                e._subvertices = [];
                e.ishighlight = !1;
                e._show = !0;
                e.updateVertices = function (b, d, k) {
                    var g = this._points.split(" ");
                    g[b - 1] = h(d, a.precision) + "," + h(k, a.precision);
                    b = "";
                    for (d = 0; d < g.length; d++) "" != b && (b += " "), b = b + g[d].split(",")[0] +
                        "," + g[d].split(",")[1];
                    this._points = this._options.points = b;
                    this.drawMapPoly()
                };
                e.addVertices = function (b, d, k) {
                    for (var g = this._points.split(" "), f = "", e = 0; e < g.length; e++) "" != f && (f += " "), e == b && (f = f + h(d, a.precision) + "," + h(k, a.precision) + " "), f = f + g[e].split(",")[0] + "," + g[e].split(",")[1];
                    b == g.length && ("" != f && (f += " "), f = f + h(d, a.precision) + "," + h(k, a.precision));
                    this._points = this._options.points = f;
                    this.drawMapPoly();
                    this.postPosChange()
                };
                e.removeVertices = function (a) {
                    var b = this._points.split(" ");
                    if (3 < b.length) {
                        for (var k =
                            "", g = 0; g < b.length; g++) g != a - 1 && ("" != k && (k += " "), k = k + b[g].split(",")[0] + "," + b[g].split(",")[1]);
                        this._points = this._options.points = k;
                        this.drawMapPoly();
                        this.postPosChange()
                    }
                };
                e.postPosChange = function () {
                    this.createVertices();
                    var a = {event: "poschange", object: "mappoly"};
                    a.id = Number(this._id);
                    a.points = this._points;
                    
                };
                e.setPosition = function (c) {
                    this._points = a.usermap[b.usermap].map.mappoly[this._id].points = c.points;
                    this.drawMapPoly()
                };
                e.getPosition = function () {
                    var a =
                        {};
                    a.points = this._points;
                    return a
                };
                e.setOptions = function (a) {
                    this._options = a;
                    this._points = a.points
                };
                e.addPoint = function (a, b) {
                    var k = this._options.points;
                    this._options.points = this._points = k + " " + a + "," + b;
                    this.drawMapPoly()
                };
                e.hide = function () {
                    this.style.visibility = "hidden";
                    this._show = !1
                };
                e.show = function () {
                    this.style.visibility = "visible";
                    this._show = !0
                };
                e.toggleCategory = function () {
                    "normal" == a.mode[b.usermap] ? "undefined" != typeof a.usermap[b.usermap].map.categorylegend && a.usermap[b.usermap].map.categorylegend.enable ?
                        0 != this._options.categoryid && ("undefined" != typeof a.categorylegend[b.usermap] ? -1 != a.categorylegend[b.usermap].visiblelist.indexOf(this._options.categoryid) ? this.show() : this.hide() : this.show()) : this.show() : this.show()
                };
                e.count = function () {
                    return this._options.points.split(" ").length
                };
                e.drawMapPoly = function () {
                    var c = this.getElementsByTagName("polygon")[0];
                    "undefined" != typeof c && this.removeChild(c);
                    c = this.getElementsByTagName("polyline")[0];
                    "undefined" != typeof c && this.removeChild(c);
                    c = 1 >= this.count() ?
                        r("polyline") : r("polygon");
                    this.appendChild(c);
                    c.setAttribute("fill", this._options.fill);
                    c.setAttribute("fill-opacity", this._options.fillOpacity);
                    c.setAttribute("stroke", this._options.style.stroke);
                    c.setAttribute("stroke-width", h(this._options.style.strokeWidth / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision));
                    if ("undefined" != typeof this._options.style.strokeDasharray && "none" !== this._options.style.strokeDasharray) {
                        for (var d = this._options.style.strokeDasharray.split(","),
                                 k = "", g = 0; g < d.length; g++) "" != k && (k += ","), k += h(d[g] / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision);
                        c.setAttribute("stroke-dasharray", k)
                    }
                    for (var d = this._options.points.split(" "), k = "", e, l, g = 0; g < d.length; g++) "" != k && (k += " "), e = d[g].split(","), l = parseFloat(e[0]) * (a.map[f].precision / a.factor[b.usermap]), e = a.map[f].precision / a.factor[b.usermap] * e[1], k = k + h(e, a.precision) + "," + h(l, a.precision);
                    "" != this._movingpoints && (e = this._movingpoints.split(","), l = parseFloat(e[0]) * (a.map[f].precision /
                        a.factor[b.usermap]), e = a.map[f].precision / a.factor[b.usermap] * e[1], "" != k && (k += " "), k = k + h(e, a.precision) + "," + h(l, a.precision));
                    c.setAttribute("points", k);
                    c.setAttribute("stroke-opacity", this._options.style.strokeOpacity);
                    c.setAttribute("stroke-linejoin", "round")
                };
                a.touchdevices || (e.onmouseover = function (c) {
                    if ("mappoly" == a.mode[b.usermap] || "edit" == a.mode[b.usermap]) this.style.cursor = "pointer";
                    "edit" == a.mode[b.usermap] && null == a.selectedOverlay[b.usermap] && (v(b, c, "<strong>[Click]</strong> to select and <strong>[Drag]</strong> to change position"),
                        this.getElementsByTagName("polygon")[0].setAttribute("fill", this._options.fillHighlight), this.getElementsByTagName("polygon")[0].setAttribute("fill-opacity", this._options.fillHighlightOpacity));
                    if (!a.touchdevices && "normal" == a.mode[b.usermap] && ("undefined" != typeof a.usermap[b.usermap].map.mappoly[this._id] && "undefined" != typeof a.usermap[b.usermap].map.mappoly[this._id].link && (this.style.cursor = "pointer"), this.getElementsByTagName("polygon")[0].setAttribute("fill", this._options.fillHighlight), this.getElementsByTagName("polygon")[0].setAttribute("fill-opacity",
                        this._options.fillHighlightOpacity), "onmouseover" == a.usermap[b.usermap].infobox.show && "undefined" != typeof a.usermap[b.usermap].map.mappoly[this._id] && "undefined" != typeof a.usermap[b.usermap].map.mappoly[this._id].infobox && !document.getElementById("imap5custom_" + b.usermap + "_infobox_mappoly_" + this._id))) {
                        var d = {};
                        d.clientX = c.clientX;
                        d.clientY = c.clientY;
                        d.obj = "mappoly";
                        d.infobox = a.usermap[b.usermap].map.mappoly[this._id].infobox;
                        this.infobox = new z(b, this._id, d)
                    }
                });
                a.touchdevices || (e.onmouseout = function (c) {
                    if ("mappoly" ==
                        a.mode[b.usermap] || "edit" == a.mode[b.usermap]) this.style.cursor = "auto";
                    "edit" == a.mode[b.usermap] && (B(b), this.getElementsByTagName("polygon")[0].setAttribute("fill", this._options.fill), this.getElementsByTagName("polygon")[0].setAttribute("fill-opacity", this._options.fillOpacity));
                    "normal" == a.mode[b.usermap] && (this.style.cursor = "auto", this.getElementsByTagName("polygon")[0].setAttribute("fill", this._options.fill), this.getElementsByTagName("polygon")[0].setAttribute("fill-opacity", this._options.fillOpacity),
                    "onmouseover" == a.usermap[b.usermap].infobox.show && "undefined" != typeof a.usermap[b.usermap].map.mappoly[this._id] && "undefined" != typeof a.usermap[b.usermap].map.mappoly[this._id].infobox && (null == c.relatedTarget || c.relatedTarget.id != "imap5custom_" + b.usermap + "_infobox_mappoly_" + this._id) && document.getElementById("imap5custom_" + b.usermap + "_infobox_mappoly_" + this._id) && this.infobox.remove())
                });
                e.onmousedown = function (c) {
                    c.preventDefault && c.preventDefault();
                    "edit" == a.mode[b.usermap] && (c.stopPropagation &&
                    c.stopPropagation(), this._mousedown = !0, this._mapdragged = !1, this._x = c.clientX, this._y = c.clientY, a.selectedOverlay[b.usermap] = this)
                };
                e.onmouseup = function (c) {
                    c.preventDefault && c.preventDefault();
                    if ("edit" == a.mode[b.usermap]) if (a.selectedOverlay[b.usermap] == this) a.selectedOverlay[b.usermap] = null, c.stopPropagation && c.stopPropagation(), this.createVertices(), c = {
                        event: "poschange",
                        object: "mappoly"
                    }, c.id = Number(this._id), c.points = this._points, window.console && console.log(JSON.stringify(c)), this._mousedown = !1;
                    else if (null != a.selectedOverlay[b.usermap]) a.selectedOverlay[b.usermap].onmouseup(c)
                };
                e.onmousemove = function (c) {
                    c.preventDefault && c.preventDefault();
                    if ("edit" == a.mode[b.usermap]) if (a.selectedOverlay[b.usermap] == this) {
                        if (this._mousedown && (c.stopPropagation && c.stopPropagation(), 2 < Math.abs(c.clientX - this._x) || 2 < Math.abs(c.clientY - this._y))) {
                            this._mapdragged = !0;
                            var d = h((c.clientX - this._x) / a.zoom[b.usermap].currentzoom, a.precision),
                                k = h((c.clientY - this._y) / a.zoom[b.usermap].currentzoom, a.precision),
                                g = this._points.split(" "),
                                f, e;
                            for (e in g) g.hasOwnProperty(e) && (f = g[e].split(","), g[e] = h(parseFloat(f[0]) - k, a.precision) + "," + h(parseFloat(f[1]) + d, a.precision));
                            d = "";
                            for (e = 0; e < g.length; e++) "" != d && (d += " "), d = d + g[e].split(",")[0] + "," + g[e].split(",")[1];
                            this._points = this._options.points = d;
                            this.deleteVertices();
                            this.drawMapPoly();
                            this.createVertices();
                            this._x = c.clientX;
                            this._y = c.clientY
                        }
                    } else if (null != a.selectedOverlay[b.usermap]) a.selectedOverlay[b.usermap].onmousemove(c);
                    "normal" == a.mode[b.usermap] && (a.div[b.usermap]._mousedown ?
                        document.getElementById("imap5custom_" + b.usermap + "_infobox_mappoly_" + this._id) && this.infobox.hide() : document.getElementById("imap5custom_" + b.usermap + "_infobox_mappoly_" + this._id) && (this.infobox.reposition(c.clientX, c.clientY), this.infobox.show()))
                };
                e.createVertices = function () {
                    null != a.selectedVerticesObj[b.usermap] && a.selectedVerticesObj[b.usermap] != this && a.selectedVerticesObj[b.usermap].deleteVertices();
                    a.selectedVerticesObj[b.usermap] = this;
                    for (var c in this._mainvertices) this._mainvertices.hasOwnProperty(c) &&
                    this._mainvertices[c].remove();
                    this._mainvertices.length = 0;
                    for (var d in this._subvertices) this._subvertices.hasOwnProperty(c) && this._subvertices[d].remove();
                    this._subvertices.length = 0;
                    var k = this._points.split(" "), g = {};
                    for (c = 0; c < k.length; c++) d = k[c].split(","), g.lat = d[0], g.lng = d[1], g.type = 0, g.removable = !0, this._mainvertices[c + 1] = new E(b, c + 1, this, g), g = {};
                    var e, g = {};
                    for (d = 0; d < k.length - 1; d++) c = k[d].split(","), e = k[d + 1].split(","), g.lat = h((parseFloat(c[0]) + parseFloat(e[0])) / 2, a.precision), g.lng = h((parseFloat(c[1]) +
                        parseFloat(e[1])) / 2, a.precision), g.type = 1, g.removable = !1, this._subvertices[d + 1] = new E(b, d + 1, this, g), g = {};
                    d = k.length - 1;
                    c = k[d].split(",");
                    e = k[0].split(",");
                    g.lat = h((parseFloat(c[0]) + parseFloat(e[0])) / 2, a.precision);
                    g.lng = h((parseFloat(c[1]) + parseFloat(e[1])) / 2, a.precision);
                    g.type = 1;
                    g.removable = !1;
                    this._subvertices[d + 1] = new E(b, d + 1, this, g)
                };
                e.deleteVertices = function () {
                    for (var a in this._mainvertices) this._mainvertices.hasOwnProperty(a) && this._mainvertices[a].remove();
                    this._mainvertices.length = 0;
                    for (var b in this._subvertices) this._subvertices.hasOwnProperty(b) &&
                    this._subvertices[b].remove();
                    this._subvertices.length = 0
                };
                e.hideSubVertices = function () {
                    for (var a in this._subvertices) this._subvertices.hasOwnProperty(a) && this._subvertices[a].hide()
                };
                e.showSubVertices = function () {
                    for (var a in this._subvertices) this._subvertices.hasOwnProperty(a) && this._subvertices[a].show()
                };
                e.onclick = function (c) {
                    this._mapdragged || this._transformed || a.div[b.usermap]._mapdragged || ("edit" == a.mode[b.usermap] ? (this.createVertices(), c = {
                        event: "click",
                        object: "mappoly"
                    }, c.id = Number(this._id),
                    window.console && console.log(JSON.stringify(c))) : "normal" == a.mode[b.usermap] && "undefined" != typeof a.usermap[b.usermap].map.mappoly[this._id] && "undefined" != typeof a.usermap[b.usermap].map.mappoly[this._id].link && ("undefined" == typeof a.usermap[b.usermap].map.mappoly[this._id].link_target ? location.href = a.usermap[b.usermap].map.mappoly[this._id].link : window.open(a.usermap[b.usermap].map.mappoly[this._id].link, a.usermap[b.usermap].map.mappoly[this._id].link_target)))
                };
                a.touchdevices && (e.ontouchstart = function (a) {
                    1 ==
                    a.touches.length && (this._touch = !0, this._move = !1, this._posX = a.touches[0].clientX, this._posY = a.touches[0].clientY)
                }, e.ontouchmove = function (a) {
                    1 == a.touches.length ? this._touch && (10 < Math.abs(a.touches[0].clientX - this._posX) || 10 < Math.abs(a.touches[0].clientY - this._posY)) && (this._move = !0) : this._touch = !1
                }, e.ontouchend = function (c) {
                    if (this._touch && !this._move && !a.div[b.usermap]._mapdragged) {
                        if ("edit" == a.mode[b.usermap]) {
                            c = {event: "click", object: "mappoly"};
                            c.id = this._id;
                            window.console && console.log(JSON.stringify(c));
                            return
                        }
                        "undefined" != typeof a.usermap[b.usermap].map.mappoly[this._id] && "undefined" != typeof a.usermap[b.usermap].map.mappoly[this._id].link && ("undefined" == typeof a.usermap[b.usermap].map.mappoly[this._id].link_target ? location.href = a.usermap[b.usermap].map.mappoly[this._id].link : window.open(a.usermap[b.usermap].map.mappoly[this._id].link, a.usermap[b.usermap].map.mappoly[this._id].link_target));
                        if ("edit" == a.mode[b.usermap]) return;
                        this.ishighlight ? (this.ishighlight = !1, this.getElementsByTagName("polygon")[0].setAttribute("fill",
                            this._options.fill), this.getElementsByTagName("polygon")[0].setAttribute("fill-opacity", this._options.fillOpacity)) : (this.ishighlight = !0, this.getElementsByTagName("polygon")[0].setAttribute("fill", this._options.fillHighlight), this.getElementsByTagName("polygon")[0].setAttribute("fill-opacity", this._options.fillHighlightOpacity));
                        0 < a.infobox[b.usermap].length && (document.getElementById("imap5custom_" + b.usermap + "_infobox_" + a.infobox[b.usermap][0].object + "_" + a.infobox[b.usermap][0].id) && a.div[b.usermap].removeChild(document.getElementById("imap5custom_" +
                            b.usermap + "_infobox_" + a.infobox[b.usermap][0].object + "_" + a.infobox[b.usermap][0].id)), a.infobox[b.usermap].pop());
                        "undefined" == typeof a.usermap[b.usermap].map.mappoly[this._id] || "undefined" == typeof a.usermap[b.usermap].map.mappoly[this._id].infobox || document.getElementById("imap5custom_" + b.usermap + "_infobox_mappoly_" + this._id) || (c = {}, c.clientX = this._posX, c.clientY = this._posY, c.obj = "mappoly", c.infobox = a.usermap[b.usermap].map.mappoly[this._id].infobox, this.infobox = new z(b, this._id, c))
                    }
                    this._move = this._touch =
                        !1
                });
                e.remove = function () {
                    for (var c in this._mainvertices) this._mainvertices.hasOwnProperty(c) && this._mainvertices[c].remove();
                    for (c in this._subvertices) this._subvertices.hasOwnProperty(c) && this._subvertices[c].remove();
                    a.g[b.usermap].removeChild(this);
                    a.mappoly[b.usermap][this._id] = null
                };
                e.drawMapPoly();
                return e
            }, P = function (b, d, l) {
                var f = a.usermap[b.usermap].map.id, e = r("g");
                a.g[b.usermap].appendChild(e);
                e._options = l;
                e._id = d;
                e.setAttribute("id", "imap5custom_" + b.usermap + "_mappath_" + d);
                e._show = !0;
                e._points =
                    l.points;
                e._movingpoints = "";
                e._mainvertices = [];
                e._subvertices = [];
                e.updateVertices = function (b, d, k) {
                    var g = this._points.split(" ");
                    g[b - 1] = h(d, a.precision) + "," + h(k, a.precision);
                    b = "";
                    for (d = 0; d < g.length; d++) "" != b && (b += " "), b = b + g[d].split(",")[0] + "," + g[d].split(",")[1];
                    this._points = this._options.points = b;
                    this.drawMapPath()
                };
                e.addVertices = function (b, d, k) {
                    for (var g = this._points.split(" "), e = "", f = 0; f < g.length; f++) "" != e && (e += " "), f == b && (e = e + h(d, a.precision) + "," + h(k, a.precision) + " "), e = e + g[f].split(",")[0] + "," +
                        g[f].split(",")[1];
                    this._points = this._options.points = e;
                    this.drawMapPath();
                    this.postPosChange()
                };
                e.removeVertices = function (a) {
                    var b = this._points.split(" ");
                    if (2 < b.length) {
                        for (var d = "", g = 0; g < b.length; g++) g != a - 1 && ("" != d && (d += " "), d = d + b[g].split(",")[0] + "," + b[g].split(",")[1]);
                        this._points = this._options.points = d;
                        this.drawMapPath();
                        this.postPosChange()
                    }
                };
                e.postPosChange = function () {
                    this.createVertices();
                    var a = {event: "poschange", object: "mappath"};
                    a.id = Number(this._id);
                    a.points = this._points;
                    window.console &&
                    console.log(JSON.stringify(a))
                };
                e.setPosition = function (c) {
                    this._points = a.usermap[b.usermap].map.mappath[this._id].points = c.points;
                    this.drawMapPath()
                };
                e.getPosition = function () {
                    var a = {};
                    a.points = this._points;
                    return a
                };
                e.setOptions = function (a) {
                    this._options = a;
                    this._points = a.points
                };
                e.addPoint = function (a, b) {
                    var d = this._options.points;
                    this._options.points = this._points = d + " " + a + "," + b;
                    this.drawMapPath()
                };
                e.hide = function () {
                    this.style.visibility = "hidden";
                    this._show = !1
                };
                e.show = function () {
                    this.style.visibility =
                        "visible";
                    this._show = !0
                };
                e.toggleCategory = function () {
                    "normal" == a.mode[b.usermap] ? "undefined" != typeof a.usermap[b.usermap].map.categorylegend && a.usermap[b.usermap].map.categorylegend.enable ? 0 != this._options.categoryid && ("undefined" != typeof a.categorylegend[b.usermap] ? -1 != a.categorylegend[b.usermap].visiblelist.indexOf(this._options.categoryid) ? this.show() : this.hide() : this.show()) : this.show() : this.show()
                };
                e.drawMapPath = function () {
                    if (this.hasChildNodes()) for (; 1 <= this.childNodes.length;) this.removeChild(this.firstChild);
                    var c, d, k, g, e, l, u, n;
                    e = r("polyline");
                    this.appendChild(e);
                    l = r("polyline");
                    this.appendChild(l);
                    l.setAttribute("fill", "none");
                    l.setAttribute("stroke", this._options.style.stroke);
                    l.setAttribute("stroke-width", h(this._options.style.strokeWidth / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision));
                    e.setAttribute("fill", "none");
                    e.setAttribute("stroke", "#FFFFFF");
                    e.setAttribute("stroke-width", h(4 / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision));
                    if ("undefined" != typeof this._options.style.strokeDasharray && "none" !== this._options.style.strokeDasharray) {
                        c = this._options.style.strokeDasharray.split(",");
                        d = "";
                        for (u = 0; u < c.length; u++) "" != d && (d += ","), d += h(c[u] / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision);
                        l.setAttribute("stroke-dasharray", d);
                        e.setAttribute("stroke-dasharray", d)
                    }
                    c = this._options.points.split(" ");
                    d = "";
                    for (u = 0; u < c.length; u++) "" != d && (d += " "), g = c[u].split(","), k = parseFloat(g[0]) * (a.map[f].precision /
                        a.factor[b.usermap]), g = a.map[f].precision / a.factor[b.usermap] * g[1], d = d + h(g, a.precision) + "," + h(k, a.precision);
                    "" != this._movingpoints && (g = this._movingpoints.split(","), k = parseFloat(g[0]) * (a.map[f].precision / a.factor[b.usermap]), g = a.map[f].precision / a.factor[b.usermap] * g[1], "" != d && (d += " "), d = d + h(g, a.precision) + "," + h(k, a.precision));
                    l.setAttribute("points", d);
                    l.setAttribute("stroke-opacity", this._options.style.strokeOpacity);
                    l.setAttribute("stroke-linejoin", "round");
                    e.setAttribute("points", d);
                    e.setAttribute("stroke-opacity",
                        .01);
                    e.setAttribute("stroke-linejoin", "round");
                    n = d.split(" ");
                    var m = n.length;
                    if (1 < m) {
                        c = parseFloat(n[0].split(",")[0]);
                        d = parseFloat(n[0].split(",")[1]);
                        k = parseFloat(n[1].split(",")[0]);
                        g = parseFloat(n[1].split(",")[1]);
                        e = parseFloat(n[m - 2].split(",")[0]);
                        l = parseFloat(n[m - 2].split(",")[1]);
                        u = parseFloat(n[m - 1].split(",")[0]);
                        n = parseFloat(n[m - 1].split(",")[1]);
                        switch ("undefined" == typeof this._options.style.arrowStartType ? 0 : this._options.style.arrowStartType) {
                            case 1:
                                var m = parseInt(this._options.style.strokeWidth) +
                                    4, t = r("polygon");
                                this.appendChild(t);
                                t.setAttribute("fill", this._options.style.stroke);
                                t.setAttribute("fill-opacity", this._options.style.strokeOpacity);
                                t.setAttribute("stroke", this._options.style.stroke);
                                t.setAttribute("stroke-width", 0);
                                t.setAttribute("points", I(c, d, h(m / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision), F(c, d, k, g, 0)));
                                break;
                            case 2:
                                m = parseInt(this._options.style.strokeWidth) + 2;
                                t = r("path");
                                this.appendChild(t);
                                t.setAttribute("fill", "none");
                                t.setAttribute("stroke",
                                    this._options.style.stroke);
                                t.setAttribute("stroke-opacity", this._options.style.strokeOpacity);
                                t.setAttribute("stroke-width", h(parseInt(this._options.style.strokeWidth) / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision));
                                t.setAttribute("d", J(c, d, h(m / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision), F(c, d, k, g, 0)));
                                t.setAttribute("stroke-linejoin", "round");
                                t.setAttribute("stroke-linecap", "round");
                                break;
                            case 3:
                                m = parseInt(this._options.style.strokeWidth) +
                                    2, t = r("circle"), this.appendChild(t), t.setAttribute("cx", c), t.setAttribute("cy", d), t.setAttribute("r", h(m / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision)), t.setAttribute("stroke", "#EEEEEE"), t.setAttribute("stroke-width", 0), t.setAttribute("fill", this._options.style.stroke), t.setAttribute("fill-opacity", this._options.style.strokeOpacity)
                        }
                        switch ("undefined" == typeof this._options.style.arrowEndType ? 0 : this._options.style.arrowEndType) {
                            case 1:
                                m = parseInt(this._options.style.strokeWidth) +
                                    4;
                                c = r("polygon");
                                this.appendChild(c);
                                c.setAttribute("fill", this._options.style.stroke);
                                c.setAttribute("fill-opacity", this._options.style.strokeOpacity);
                                c.setAttribute("stroke", this._options.style.stroke);
                                c.setAttribute("stroke-width", 0);
                                c.setAttribute("points", I(u, n, h(m / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision), F(e, l, u, n, 1)));
                                break;
                            case 2:
                                m = parseInt(this._options.style.strokeWidth) + 2;
                                c = r("path");
                                this.appendChild(c);
                                c.setAttribute("fill", "none");
                                c.setAttribute("stroke",
                                    this._options.style.stroke);
                                c.setAttribute("stroke-opacity", this._options.style.strokeOpacity);
                                c.setAttribute("stroke-width", h(parseInt(this._options.style.strokeWidth) / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision));
                                c.setAttribute("d", J(u, n, h(m / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision), F(e, l, u, n, 1)));
                                c.setAttribute("stroke-linejoin", "round");
                                c.setAttribute("stroke-linecap", "round");
                                break;
                            case 3:
                                m = parseInt(this._options.style.strokeWidth) +
                                    2, c = r("circle"), this.appendChild(c), c.setAttribute("cx", u), c.setAttribute("cy", n), c.setAttribute("r", h(m / a.zoom[b.usermap].currentzoom * (a.map[f].precision / a.factor[b.usermap]), a.precision)), c.setAttribute("stroke", "#EEEEEE"), c.setAttribute("stroke-width", 0), c.setAttribute("fill", this._options.style.stroke), c.setAttribute("fill-opacity", this._options.style.strokeOpacity)
                        }
                    }
                };
                e.onmouseover = function (c) {
                    if ("mappath" == a.mode[b.usermap] || "edit" == a.mode[b.usermap]) this.style.cursor = "pointer";
                    "edit" == a.mode[b.usermap] &&
                    v(b, c, "Click to select");
                    if (!a.touchdevices && "normal" == a.mode[b.usermap] && ("undefined" != typeof a.usermap[b.usermap].map.mappath[this._id] && "undefined" != typeof a.usermap[b.usermap].map.mappath[this._id].link && (this.style.cursor = "pointer"), "onmouseover" == a.usermap[b.usermap].infobox.show && "undefined" != typeof a.usermap[b.usermap].map.mappath[this._id] && "undefined" != typeof a.usermap[b.usermap].map.mappath[this._id].infobox && !document.getElementById("imap5custom_" + b.usermap + "_infobox_mappath_" + this._id))) {
                        var d =
                            {};
                        d.clientX = c.clientX;
                        d.clientY = c.clientY;
                        d.obj = "mappath";
                        d.infobox = a.usermap[b.usermap].map.mappath[this._id].infobox;
                        this.infobox = new z(b, this._id, d)
                    }
                };
                e.onmouseout = function (c) {
                    if ("mappath" == a.mode[b.usermap] || "edit" == a.mode[b.usermap]) this.style.cursor = "auto";
                    "edit" == a.mode[b.usermap] && B(b);
                    "normal" == a.mode[b.usermap] && (this.style.cursor = "auto", "onmouseover" == a.usermap[b.usermap].infobox.show && "undefined" != typeof a.usermap[b.usermap].map.mappath[this._id] && "undefined" != typeof a.usermap[b.usermap].map.mappath[this._id].infobox &&
                    (null == c.relatedTarget || c.relatedTarget.id != "imap5custom_" + b.usermap + "_infobox_mappath_" + this._id) && document.getElementById("imap5custom_" + b.usermap + "_infobox_mappath_" + this._id) && this.infobox.remove())
                };
                e.onmousemove = function (c) {
                    c.preventDefault && c.preventDefault();
                    "normal" == a.mode[b.usermap] && (a.div[b.usermap]._mousedown ? document.getElementById("imap5custom_" + b.usermap + "_infobox_mappath_" + this._id) && this.infobox.hide() : document.getElementById("imap5custom_" + b.usermap + "_infobox_mappath_" + this._id) &&
                        (this.infobox.reposition(c.clientX, c.clientY), this.infobox.show()))
                };
                e.createVertices = function () {
                    null != a.selectedVerticesObj[b.usermap] && a.selectedVerticesObj[b.usermap] != this && a.selectedVerticesObj[b.usermap].deleteVertices();
                    a.selectedVerticesObj[b.usermap] = this;
                    for (var c in this._mainvertices) this._mainvertices.hasOwnProperty(c) && this._mainvertices[c].remove();
                    this._mainvertices.length = 0;
                    for (var d in this._subvertices) this._subvertices.hasOwnProperty(d) && this._subvertices[d].remove();
                    this._subvertices.length =
                        0;
                    var k = this._points.split(" "), g = {};
                    for (c = 0; c < k.length; c++) d = k[c].split(","), g.lat = d[0], g.lng = d[1], g.type = 0, g.removable = !0, this._mainvertices[c + 1] = new E(b, c + 1, this, g), g = {};
                    var e, g = {};
                    for (d = 0; d < k.length - 1; d++) {
                        c = k[d].split(",");
                        e = k[d + 1].split(",");
                        var f = g, l;
                        l = (parseFloat(c[0]) + parseFloat(e[0])) / 2;
                        l = parseFloat(l);
                        f.lat = h(l, a.precision);
                        g.lng = h((parseFloat(c[1]) + parseFloat(e[1])) / 2, a.precision);
                        g.type = 1;
                        g.removable = !1;
                        this._subvertices[d + 1] = new E(b, d + 1, this, g);
                        g = {}
                    }
                };
                e.deleteVertices = function () {
                    for (var a in this._mainvertices) this._mainvertices.hasOwnProperty(a) &&
                    this._mainvertices[a].remove();
                    this._mainvertices.length = 0;
                    for (var b in this._subvertices) this._subvertices.hasOwnProperty(b) && this._subvertices[b].remove();
                    this._subvertices.length = 0
                };
                e.hideSubVertices = function () {
                    for (var a in this._subvertices) this._subvertices.hasOwnProperty(a) && this._subvertices[a].hide()
                };
                e.showSubVertices = function () {
                    for (var a in this._subvertices) this._subvertices.hasOwnProperty(a) && this._subvertices[a].show()
                };
                e.onclick = function (c) {
                    this._mapdragged || this._transformed || a.div[b.usermap]._mapdragged ||
                    ("edit" == a.mode[b.usermap] ? (this.createVertices(), c = {
                        event: "click",
                        object: "mappath"
                    }, c.id = Number(this._id), window.console && console.log(JSON.stringify(c))) : "normal" == a.mode[b.usermap] && "undefined" != typeof a.usermap[b.usermap].map.mappath[this._id] && "undefined" != typeof a.usermap[b.usermap].map.mappath[this._id].link && ("undefined" == typeof a.usermap[b.usermap].map.mappath[this._id].link_target ? location.href = a.usermap[b.usermap].map.mappath[this._id].link : window.open(a.usermap[b.usermap].map.mappath[this._id].link,
                        a.usermap[b.usermap].map.mappath[this._id].link_target)))
                };
                a.touchdevices && (e.ontouchstart = function (a) {
                    1 == a.touches.length && (this._touch = !0, this._move = !1, this._posX = a.touches[0].clientX, this._posY = a.touches[0].clientY)
                }, e.ontouchmove = function (a) {
                    1 == a.touches.length ? this._touch && (10 < Math.abs(a.touches[0].clientX - this._posX) || 10 < Math.abs(a.touches[0].clientY - this._posY)) && (this._move = !0) : this._touch = !1
                }, e.ontouchend = function (c) {
                    if (this._touch && !this._move && !a.div[b.usermap]._mapdragged) {
                        if ("edit" ==
                            a.mode[b.usermap]) {
                            c = {event: "click", object: "mappath"};
                            c.id = this._id;
                            return
                        }
                        "undefined" != typeof a.usermap[b.usermap].map.mappath[this._id] && "undefined" != typeof a.usermap[b.usermap].map.mappath[this._id].link && ("undefined" == typeof a.usermap[b.usermap].map.mappath[this._id].link_target ? location.href = a.usermap[b.usermap].map.mappath[this._id].link : window.open(a.usermap[b.usermap].map.mappath[this._id].link, a.usermap[b.usermap].map.mappath[this._id].link_target));
                        if ("edit" == a.mode[b.usermap]) return;
                        0 < a.infobox[b.usermap].length && (document.getElementById("imap5custom_" + b.usermap + "_infobox_" + a.infobox[b.usermap][0].object + "_" + a.infobox[b.usermap][0].id) && a.div[b.usermap].removeChild(document.getElementById("imap5custom_" + b.usermap + "_infobox_" + a.infobox[b.usermap][0].object + "_" + a.infobox[b.usermap][0].id)), a.infobox[b.usermap].pop());
                        "undefined" == typeof a.usermap[b.usermap].map.mappath[this._id] || "undefined" == typeof a.usermap[b.usermap].map.mappath[this._id].infobox ||
                        document.getElementById("imap5custom_" + b.usermap + "_infobox_mappath_" + this._id) || (c = {}, c.clientX = this._posX, c.clientY = this._posY, c.obj = "mappath", c.infobox = a.usermap[b.usermap].map.mappath[this._id].infobox, this.infobox = new z(b, this._id, c))
                    }
                    this._move = this._touch = !1
                });
                e.remove = function () {
                    for (var c in this._mainvertices) this._mainvertices.hasOwnProperty(c) && this._mainvertices[c].remove();
                    for (c in this._subvertices) this._subvertices.hasOwnProperty(c) && this._subvertices[c].remove();
                    a.g[b.usermap].removeChild(this);
                    a.mappath[b.usermap][this._id] = null
                };
                e.drawMapPath();
                return e
            }, U = function (b, d, l) {
                var f = a.usermap[b.usermap].map.id, e = r("g");
                a.g[b.usermap].appendChild(e);
                e._options = l;
                e._id = d;
                e.setAttribute("id", "imap5custom_" + b.usermap + "_maplabel_" + d);
                e._lat = l.y;
                e._lng = l.x;
                e._dx = a.map[f].precision / a.factor[b.usermap] * e._lng;
                e._dy = parseFloat(e._lat) * (a.map[f].precision / a.factor[b.usermap]);
                e._show = !0;
                e.setPosition = function (c) {
                    this._lat = a.usermap[b.usermap].map.maplabel[this._id].y = c.y;
                    this._lng = a.usermap[b.usermap].map.maplabel[this._id].x =
                        c.x;
                    this._dy = parseFloat(this._lat) * (a.map[f].precision / a.factor[b.usermap]);
                    this._dx = a.map[f].precision / a.factor[b.usermap] * this._lng;
                    e.setAttribute("transform", "translate(" + h(this._dx, a.precision) + "," + h(this._dy, a.precision) + ") scale(" + h(a.map[f].precision / a.factor[b.usermap] / a.zoom[b.usermap].currentzoom, a.precision) + ")")
                };
                e.getPosition = function () {
                    var a = {};
                    a.y = this._lat;
                    a.x = this._lng;
                    return a
                };
                e.setOptions = function (a) {
                    this._options = a
                };
                e.setLabel = function (a) {
                    this._options.label = a;
                    this.drawMapLabel()
                };
                e.hide = function () {
                    this.style.visibility = "hidden";
                    this._show = !1
                };
                e.show = function () {
                    this.style.visibility = "visible";
                    this._show = !0
                };
                e.toggleCategory = function () {
                    "normal" == a.mode[b.usermap] ? "undefined" != typeof a.usermap[b.usermap].map.categorylegend && a.usermap[b.usermap].map.categorylegend.enable ? 0 != this._options.categoryid && ("undefined" != typeof a.categorylegend[b.usermap] ? -1 != a.categorylegend[b.usermap].visiblelist.indexOf(this._options.categoryid) ? this.show() : this.hide() : this.show()) : this.show() : this.show()
                };
                e.drawMapLabel = function () {
                    if (this.hasChildNodes()) for (; 1 <= this.childNodes.length;) this.removeChild(this.firstChild);
                    if ("" != this._options.label.text) {
                        var c = r("text");
                        this.appendChild(c);
                        var d = r("text");
                        this.appendChild(d);
                        var k = document.createTextNode(this._options.label.text);
                        d.appendChild(k);
                        d.setAttribute("style", "stroke-width:0");
                        d.style.strokeOpacity = 0;
                        d.style.fontFamily = this._options.label.style.fontFamily;
                        d.style.fill = this._options.label.style.fontColor;
                        d.style.fontSize = this._options.label.style.fontSize;
                        d.style.fontStyle = this._options.label.style.fontStyle;
                        d.style.fontWeight = this._options.label.style.fontWeight;
                        "normal" == a.mode[b.usermap] && (d.style.pointerEvents = "none");
                        k = 0 + parseInt(d.style.fontSize) / 2 - (d.getBBox().height + d.getBBox().y) / 2;
                        d.setAttribute("x", 0);
                        d.setAttribute("y", k);
                        d.setAttribute("transform", "scale(1,-1)");
                        d.setAttribute("text-anchor", "middle");
                        d = document.createTextNode(this._options.label.text);
                        c.appendChild(d);
                        c.setAttribute("style", "stroke-width:0");
                        c.style.strokeOpacity = 0;
                        c.style.fontFamily =
                            this._options.label.style.fontFamily;
                        c.style.fill = "undefined" == typeof this._options.label.style.shadowColor ? "#ffffff" : this._options.label.style.shadowColor;
                        c.style.fontSize = this._options.label.style.fontSize;
                        c.style.fontStyle = this._options.label.style.fontStyle;
                        c.style.fontWeight = this._options.label.style.fontWeight;
                        c.style.pointerEvents = "none";
                        c.setAttribute("x", 1);
                        c.setAttribute("y", k + 1);
                        c.setAttribute("transform", "scale(1,-1)");
                        c.setAttribute("text-anchor", "middle");
                        c.style.fillOpacity = "undefined" ==
                        typeof this._options.label.style.shadowOpacity ? .7 : this._options.label.style.shadowOpacity
                    }
                    c = this._options.y;
                    d = this._options.x;
                    this._lat = a.map[f].precision / a.factor[b.usermap] * c;
                    this._lng = a.map[f].precision / a.factor[b.usermap] * d;
                    this.setAttribute("transform", "translate(" + h(a.map[f].precision / a.factor[b.usermap] * d, a.precision) + "," + h(a.map[f].precision / a.factor[b.usermap] * c, a.precision) + ") scale(" + h(a.map[f].precision / a.factor[b.usermap] / a.zoom[b.usermap].currentzoom, a.precision) + ")")
                };
                e.onmouseover =
                    function (c) {
                        if ("maplabel" == a.mode[b.usermap] || "edit" == a.mode[b.usermap]) this.style.cursor = "pointer";
                        "edit" == a.mode[b.usermap] && null == a.selectedOverlay[b.usermap] && v(b, c, "<strong>[Click]</strong> to select or <strong>[Drag]</strong> to change position")
                    };
                e.onmouseout = function (c) {
                    if ("maplabel" == a.mode[b.usermap] || "edit" == a.mode[b.usermap]) this.style.cursor = "auto";
                    "edit" == a.mode[b.usermap] && B(b);
                    "normal" == a.mode[b.usermap] && (this.style.cursor = "auto")
                };
                e.onmousedown = function (c) {
                    c.preventDefault && c.preventDefault();
                    "edit" == a.mode[b.usermap] && (c.stopPropagation && c.stopPropagation(), this._mousedown = !0, this._mapdragged = !1, this._x = c.clientX, this._y = c.clientY, a.selectedOverlay[b.usermap] = this)
                };
                e.onmousemove = function (c) {
                    c.preventDefault && c.preventDefault();
                    if ("edit" == a.mode[b.usermap]) if (a.selectedOverlay[b.usermap] == this) {
                        if (c.stopPropagation && c.stopPropagation(), this._mousedown && (2 < Math.abs(c.clientX - this._x) || 2 < Math.abs(c.clientY - this._y))) {
                            this._mapdragged = !0;
                            this._x = c.clientX;
                            this._y = c.clientY;
                            var d = a.svgcoord[b.usermap];
                            d.x = c.clientX;
                            d.y = c.clientY;
                            d = w(d, a.g[b.usermap]);
                            d.x /= a.map[f].precision / a.factor[b.usermap];
                            d.y /= a.map[f].precision / a.factor[b.usermap];
                            this._lat = a.map[f].precision / a.factor[b.usermap] * d.y;
                            this._lng = a.map[f].precision / a.factor[b.usermap] * d.x;
                            this.setAttribute("transform", "translate(" + h(this._lng, a.precision) + "," + h(this._lat, a.precision) + ") scale(" + h(a.map[f].precision / a.factor[b.usermap] / a.zoom[b.usermap].currentzoom, a.precision) + ")")
                        }
                    } else if (null != a.selectedOverlay[b.usermap]) a.selectedOverlay[b.usermap].onmousemove(c)
                };
                e.onmouseup = function (c) {
                    c.preventDefault && c.preventDefault();
                    if ("edit" == a.mode[b.usermap]) if (a.selectedOverlay[b.usermap] == this) c.stopPropagation && c.stopPropagation(), a.selectedOverlay[b.usermap] = null, c = {
                        event: "poschange",
                        object: "maplabel"
                    }, c.id = Number(this._id), c.y = h(this._lat / (a.map[f].precision / a.factor[b.usermap]), a.precision), c.x = h(this._lng / (a.map[f].precision / a.factor[b.usermap]), a.precision), window.console && console.log(JSON.stringify(c)), this._mousedown = !1; else if (null != a.selectedOverlay[b.usermap]) a.selectedOverlay[b.usermap].onmouseup(c)
                };
                e.onclick = function (c) {
                    this._mapdragged || this._transformed || "edit" != a.mode[b.usermap] || (null != a.selectedVerticesObj[b.usermap] && a.selectedVerticesObj[b.usermap] != this && a.selectedVerticesObj[b.usermap].deleteVertices(), c = {
                        event: "click",
                        object: "maplabel"
                    }, c.id = Number(this._id), window.console && console.log(JSON.stringify(c)))
                };
                a.touchdevices && (e.ontouchstart = function (a) {
                    1 == a.touches.length && (this._touch = !0, this._move = !1, this._posX = a.touches[0].clientX, this._posY = a.touches[0].clientY)
                }, e.ontouchmove = function (a) {
                    1 ==
                    a.touches.length ? this._touch && (10 < Math.abs(a.touches[0].clientX - this._posX) || 10 < Math.abs(a.touches[0].clientY - this._posY)) && (this._move = !0) : this._touch = !1
                }, e.ontouchend = function (c) {
                    !this._touch || this._move || a.div[b.usermap]._mapdragged || "edit" != a.mode[b.usermap] ? this._move = this._touch = !1 : (c = {
                        event: "click",
                        object: "maplabel"
                    }, c.id = this._id, window.console && console.log(JSON.stringify(c)))
                });
                e.remove = function () {
                    a.g[b.usermap].removeChild(this);
                    a.maplabel[b.usermap][this._id] = null
                };
                e.drawMapLabel();
                return e
            },
            V = function (b, d, l) {
                var f = a.usermap[b.usermap].map.id, e = r("g");
                a.g[b.usermap].appendChild(e);
                e._options = l;
                e._id = d;
                e.setAttribute("id", "imap5custom_" + b.usermap + "_marker_" + d);
                e._lat = l.y;
                e._lng = l.x;
                e._dx = a.map[f].precision / a.factor[b.usermap] * e._lng;
                e._dy = parseFloat(e._lat) * (a.map[f].precision / a.factor[b.usermap]);
                e._show = !0;
                e.setPosition = function (c) {
                    this._lat = a.usermap[b.usermap].map.marker[this._id].y = c.y;
                    this._lng = a.usermap[b.usermap].map.marker[this._id].x = c.x;
                    this._dy = parseFloat(this._lat) * (a.map[f].precision /
                        a.factor[b.usermap]);
                    this._dx = a.map[f].precision / a.factor[b.usermap] * this._lng;
                    e.setAttribute("transform", "translate(" + h(this._dx, a.precision) + "," + h(this._dy, a.precision) + ") scale(" + h(a.map[f].precision / a.factor[b.usermap] / a.zoom[b.usermap].currentzoom, a.precision) + ")")
                };
                e.getPosition = function () {
                    var a = {};
                    a.y = this._lat;
                    a.x = this._lng;
                    return a
                };
                e.setIcon = function (a) {
                    this._options.icon = a;
                    this.drawMarker()
                };
                e.setOptions = function (a) {
                    this._options = a
                };
                e.setLabel = function (a) {
                    this._options.label = a;
                    this.drawMarker()
                };
                e.hide = function () {
                    this.style.visibility = "hidden";
                    this._show = !1
                };
                e.show = function () {
                    this.style.visibility = "visible";
                    this._show = !0
                };
                e.toggleCategory = function () {
                    "normal" == a.mode[b.usermap] ? "undefined" != typeof a.usermap[b.usermap].map.categorylegend && a.usermap[b.usermap].map.categorylegend.enable ? 0 != this._options.categoryid && ("undefined" != typeof a.categorylegend[b.usermap] ? -1 != a.categorylegend[b.usermap].visiblelist.indexOf(this._options.categoryid) ? this.show() : this.hide() : this.show()) : this.show() : this.show()
                };
                e.drawMarker = function () {
                    if (this.hasChildNodes()) for (; 1 <= this.childNodes.length;) this.removeChild(this.firstChild);
                    var c = r("g"), d = r("image");
                    c.appendChild(d);
                    this.appendChild(c);
                    "local" == this._options.icon.type ? d.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a.base[b.usermap] + this._options.icon.path) : d.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", this._options.icon.path);
                    d.setAttribute("x", this._options.icon.anchorx);
                    d.setAttribute("y", this._options.icon.anchory);
                    d.setAttribute("width",
                        this._options.icon.width);
                    d.setAttribute("height", this._options.icon.height);
                    c.setAttribute("transform", "scale(1,-1)");
                    if ("" != this._options.label.text) {
                        d = r("text");
                        this.appendChild(d);
                        var k = r("text");
                        this.appendChild(k);
                        var g = document.createTextNode(this._options.label.text);
                        k.appendChild(g);
                        k.setAttribute("style", "stroke-width:0;pointer-events:none");
                        k.style.strokeOpacity = 0;
                        k.style.fontFamily = this._options.label.style.fontFamily;
                        k.style.fill = this._options.label.style.fontColor;
                        k.style.fontSize = this._options.label.style.fontSize;
                        k.style.fontStyle = "undefined" !== typeof this._options.label.style.fontStyle ? this._options.label.style.fontStyle : "normal";
                        k.style.fontWeight = "undefined" !== typeof this._options.label.style.fontWeight ? this._options.label.style.fontWeight : "normal";
                        var g = "middle", e = 0, l = 0;
                        switch (this._options.label.position) {
                            case "right":
                                g = "start";
                                e = c.getBBox().width / 2 + parseInt(this._options.label.offsetX);
                                l = parseInt(k.style.fontSize) / 2 - (k.getBBox().height + k.getBBox().y) / 2 + parseInt(this._options.label.offsetY);
                                break;
                            case "top":
                                g =
                                    "middle";
                                e = 0 + parseInt(this._options.label.offsetX);
                                l = -c.getBBox().height / 2 - (k.getBBox().height + k.getBBox().y) / 2 + parseInt(this._options.label.offsetY);
                                break;
                            case "left":
                                g = "end";
                                e = c.getBBox().x + parseInt(this._options.label.offsetX);
                                l = parseInt(k.style.fontSize) / 2 - (k.getBBox().height + k.getBBox().y) / 2 + parseInt(this._options.label.offsetY);
                                break;
                            case "bottom":
                                g = "middle";
                                e = 0 + parseInt(this._options.label.offsetX);
                                l = c.getBBox().height / 2 + parseInt(k.style.fontSize) - (k.getBBox().height + k.getBBox().y) / 2 + parseInt(this._options.label.offsetY);
                                break;
                            case "center":
                                g = "middle", e = 0 + parseInt(this._options.label.offsetX), l = parseInt(k.style.fontSize) / 2 - (k.getBBox().height + k.getBBox().y) / 2 + parseInt(this._options.label.offsetY)
                        }
                        k.setAttribute("x", e);
                        k.setAttribute("y", l);
                        k.setAttribute("transform", "scale(1,-1)");
                        k.setAttribute("text-anchor", g);
                        c = document.createTextNode(this._options.label.text);
                        d.appendChild(c);
                        d.setAttribute("style", "stroke-width:0;pointer-events:none");
                        d.style.strokeOpacity = 0;
                        d.style.fontFamily = this._options.label.style.fontFamily;
                        d.style.fill = "undefined" == typeof this._options.label.style.shadowColor ? "#ffffff" : this._options.label.style.shadowColor;
                        d.style.fontSize = this._options.label.style.fontSize;
                        d.style.fontStyle = "undefined" !== typeof this._options.label.style.fontStyle ? this._options.label.style.fontStyle : "normal";
                        d.style.fontWeight = "undefined" !== typeof this._options.label.style.fontWeight ? this._options.label.style.fontWeight : "normal";
                        d.setAttribute("x", e + 1);
                        d.setAttribute("y", l + 1);
                        d.setAttribute("transform", "scale(1,-1)");
                        d.setAttribute("text-anchor", g);
                        d.style.fillOpacity = "undefined" == typeof this._options.label.style.shadowOpacity ? .7 : this._options.label.style.shadowOpacity
                    }
                    c = this._options.y;
                    d = this._options.x;
                    this._lat = a.map[f].precision / a.factor[b.usermap] * c;
                    this._lng = a.map[f].precision / a.factor[b.usermap] * d;
                    this.setAttribute("transform", "translate(" + h(a.map[f].precision / a.factor[b.usermap] * d, a.precision) + "," + h(a.map[f].precision / a.factor[b.usermap] * c, a.precision) + ") scale(" + h(a.map[f].precision / a.factor[b.usermap] /
                        a.zoom[b.usermap].currentzoom, a.precision) + ")")
                };
                e.onmouseover = function (c) {
                    if ("marker" == a.mode[b.usermap] || "edit" == a.mode[b.usermap]) this.style.cursor = "pointer";
                    "edit" == a.mode[b.usermap] && null == a.selectedOverlay[b.usermap] && v(b, c, "<strong>[Click]</strong> to select or <strong>[Drag]</strong> to change position");
                    if (!a.touchdevices && "normal" == a.mode[b.usermap] && ("undefined" != typeof a.usermap[b.usermap].map.marker[this._id] && "undefined" != typeof a.usermap[b.usermap].map.marker[this._id].link && (this.style.cursor =
                        "pointer"), "onmouseover" == a.usermap[b.usermap].infobox.show && "undefined" != typeof a.usermap[b.usermap].map.marker[this._id] && "undefined" != typeof a.usermap[b.usermap].map.marker[this._id].infobox && !document.getElementById("imap5custom_" + b.usermap + "_infobox_marker_" + this._id))) {
                        var d = {};
                        d.clientX = c.clientX;
                        d.clientY = c.clientY;
                        d.obj = "marker";
                        d.infobox = a.usermap[b.usermap].map.marker[this._id].infobox;
                        this.infobox = new z(b, this._id, d)
                    }
                };
                e.onmouseout = function (c) {
                    if ("marker" == a.mode[b.usermap] || "edit" == a.mode[b.usermap]) this.style.cursor =
                        "auto";
                    "edit" == a.mode[b.usermap] && B(b);
                    "normal" == a.mode[b.usermap] && (this.style.cursor = "auto", "onmouseover" == a.usermap[b.usermap].infobox.show && "undefined" != typeof a.usermap[b.usermap].map.marker[this._id] && "undefined" != typeof a.usermap[b.usermap].map.marker[this._id].infobox && (null == c.relatedTarget || c.relatedTarget.id != "imap5custom_" + b.usermap + "_infobox_marker_" + this._id) && document.getElementById("imap5custom_" + b.usermap + "_infobox_marker_" + this._id) && this.infobox.remove())
                };
                e.onmousedown = function (c) {
                    c.preventDefault &&
                    c.preventDefault();
                    "edit" == a.mode[b.usermap] && (c.stopPropagation && c.stopPropagation(), this._mousedown = !0, this._mapdragged = !1, this._x = c.clientX, this._y = c.clientY, a.selectedOverlay[b.usermap] = this)
                };
                e.onmousemove = function (c) {
                    c.preventDefault && c.preventDefault();
                    if ("edit" == a.mode[b.usermap]) if (a.selectedOverlay[b.usermap] == this) {
                        if (c.stopPropagation && c.stopPropagation(), this._mousedown && (2 < Math.abs(c.clientX - this._x) || 2 < Math.abs(c.clientY - this._y))) {
                            this._mapdragged = !0;
                            this._x = c.clientX;
                            this._y = c.clientY;
                            var d = a.svgcoord[b.usermap];
                            d.x = c.clientX;
                            d.y = c.clientY;
                            d = w(d, a.g[b.usermap]);
                            d.x /= a.map[f].precision / a.factor[b.usermap];
                            d.y /= a.map[f].precision / a.factor[b.usermap];
                            this._lat = a.map[f].precision / a.factor[b.usermap] * d.y;
                            this._lng = a.map[f].precision / a.factor[b.usermap] * d.x;
                            this.setAttribute("transform", "translate(" + h(this._lng, a.precision) + "," + h(this._lat, a.precision) + ") scale(" + h(a.map[f].precision / a.factor[b.usermap] / a.zoom[b.usermap].currentzoom, a.precision) + ")")
                        }
                    } else if (null != a.selectedOverlay[b.usermap]) a.selectedOverlay[b.usermap].onmousemove(c);
                    "normal" == a.mode[b.usermap] && (a.div[b.usermap]._mousedown ? document.getElementById("imap5custom_" + b.usermap + "_infobox_marker_" + this._id) && this.infobox.hide() : document.getElementById("imap5custom_" + b.usermap + "_infobox_marker_" + this._id) && (this.infobox.reposition(c.clientX, c.clientY), this.infobox.show()))
                };
                e.onmouseup = function (c) {
                    c.preventDefault && c.preventDefault();
                    if ("edit" == a.mode[b.usermap]) if (a.selectedOverlay[b.usermap] == this) c.stopPropagation && c.stopPropagation(), a.selectedOverlay[b.usermap] =
                        null, c = {
                        event: "poschange",
                        object: "marker"
                    }, c.id = Number(this._id), c.y = h(this._lat / (a.map[f].precision / a.factor[b.usermap]), a.precision), c.x = h(this._lng / (a.map[f].precision / a.factor[b.usermap]), a.precision), window.console && console.log(JSON.stringify(c)), this._mousedown = !1; else if (null != a.selectedOverlay[b.usermap]) a.selectedOverlay[b.usermap].onmouseup(c)
                };
                e.onclick = function (c) {
                    this._mapdragged || this._transformed || a.div[b.usermap]._mapdragged || ("edit" == a.mode[b.usermap] ? (null != a.selectedVerticesObj[b.usermap] &&
                    a.selectedVerticesObj[b.usermap] != this && a.selectedVerticesObj[b.usermap].deleteVertices(), c = {
                        event: "click",
                        object: "marker"
                    }, c.id = Number(this._id), window.console && console.log(JSON.stringify(c))) : "normal" == a.mode[b.usermap] && "undefined" != typeof a.usermap[b.usermap].map.marker[this._id] && "undefined" != typeof a.usermap[b.usermap].map.marker[this._id].link && ("undefined" == typeof a.usermap[b.usermap].map.marker[this._id].link_target ? location.href = a.usermap[b.usermap].map.marker[this._id].link : window.open(a.usermap[b.usermap].map.marker[this._id].link,
                        a.usermap[b.usermap].map.marker[this._id].link_target)))
                };
                a.touchdevices && (e.ontouchstart = function (a) {
                    1 == a.touches.length && (this._touch = !0, this._move = !1, this._posX = a.touches[0].clientX, this._posY = a.touches[0].clientY)
                }, e.ontouchmove = function (a) {
                    1 == a.touches.length ? this._touch && (10 < Math.abs(a.touches[0].clientX - this._posX) || 10 < Math.abs(a.touches[0].clientY - this._posY)) && (this._move = !0) : this._touch = !1
                }, e.ontouchend = function (d) {
                    if (this._touch && !this._move && !a.div[b.usermap]._mapdragged) {
                        if ("edit" == a.mode[b.usermap]) {
                            d =
                                {event: "click", object: "marker"};
                            d.id = this._id;
                            window.console && console.log(JSON.stringify(d));
                            return
                        }
                        "undefined" != typeof a.usermap[b.usermap].map.marker[this._id] && "undefined" != typeof a.usermap[b.usermap].map.marker[this._id].link && ("undefined" == typeof a.usermap[b.usermap].map.marker[this._id].link_target ? location.href = a.usermap[b.usermap].map.marker[this._id].link : window.open(a.usermap[b.usermap].map.marker[this._id].link, a.usermap[b.usermap].map.marker[this._id].link_target));
                        if ("edit" == a.mode[b.usermap]) return;
                        0 < a.infobox[b.usermap].length && (document.getElementById("imap5custom_" + b.usermap + "_infobox_" + a.infobox[b.usermap][0].object + "_" + a.infobox[b.usermap][0].id) && a.div[b.usermap].removeChild(document.getElementById("imap5custom_" + b.usermap + "_infobox_" + a.infobox[b.usermap][0].object + "_" + a.infobox[b.usermap][0].id)), a.infobox[b.usermap].pop());
                        "undefined" == typeof a.usermap[b.usermap].map.marker[this._id] || "undefined" == typeof a.usermap[b.usermap].map.marker[this._id].infobox || document.getElementById("imap5custom_" +
                            b.usermap + "_infobox_marker_" + this._id) || (d = {}, d.clientX = this._posX, d.clientY = this._posY, d.obj = "marker", d.infobox = a.usermap[b.usermap].map.marker[this._id].infobox, this.infobox = new z(b, this._id, d))
                    }
                    this._move = this._touch = !1
                });
                e.remove = function () {
                    a.g[b.usermap].removeChild(this);
                    a.marker[b.usermap][this._id] = null
                };
                e.drawMarker();
                return e
            }, w = function (a, d) {
                var h = d.getScreenCTM();
                return a.matrixTransform(h.inverse())
            }, ka = function (b) {
                var d = a.usermap[b.usermap].map.id;
                a.svg[b.usermap] = r("svg");
                a.svg[b.usermap].setAttribute("xmlns",
                    "http://www.w3.org/2000/svg");
                a.svg[b.usermap].setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
                a.svg[b.usermap].setAttribute("width", a.div[b.usermap].clientWidth + "px");
                a.svg[b.usermap].setAttribute("height", a.div[b.usermap].clientHeight + "px");
                a.svg[b.usermap].style.overflow = "hidden";
                a.foreground[b.usermap].appendChild(a.svg[b.usermap]);
                a.svgcoord[b.usermap] = a.svg[b.usermap].createSVGPoint();
                a.g[b.usermap] = r("g");
                a.svg[b.usermap].appendChild(a.g[b.usermap]);
                var l = r("image"), f = r("g");
                l.setAttributeNS("http://www.w3.org/1999/xlink",
                    "xlink:href", a.base[b.usermap] + a.usermap[b.usermap].map.src + "?" + Math.random(1E5));
                l.setAttribute("width", a.usermap[b.usermap].map.width);
                l.setAttribute("height", a.usermap[b.usermap].map.height);
                l.setAttribute("x", "-" + parseFloat(a.usermap[b.usermap].map.width) / 2 + "px");
                l.setAttribute("y", "-" + parseFloat(a.usermap[b.usermap].map.height) / 2 + "px");
                f.appendChild(l);
                f.setAttribute("transform", "scale(1,-1)");
                a.g[b.usermap].appendChild(f);
                l = r("g");
                a.g[b.usermap].appendChild(l);
                l.setAttribute("id", "imap5custom_" +
                    b.usermap + "_centerref");
                var f = r("g"), e = r("circle");
                f.appendChild(e);
                l.appendChild(f);
                e.setAttribute("cx", 0);
                e.setAttribute("cy", 0);
                e.setAttribute("r", 0);
                e.setAttribute("stroke", "#006600");
                e.setAttribute("stroke-width", 0);
                e.setAttribute("fill", "#ff0000");
                f.setAttribute("transform", "scale(1,-1)");
                a.center[b.usermap] = l;
                a.center[b.usermap].setAttribute("transform", "scale(" + h(a.map[d].precision / a.factor[b.usermap] / a.zoom[b.usermap].currentzoom, a.precision) + ")");
                for (var c in a.usermap[b.usermap].map.mappoly) a.usermap[b.usermap].map.mappoly.hasOwnProperty(c) &&
                (a.mappoly[b.usermap][c] = new O(b, c, a.usermap[b.usermap].map.mappoly[c]));
                for (c in a.usermap[b.usermap].map.mapcircle) a.usermap[b.usermap].map.mapcircle.hasOwnProperty(c) && (a.mapcircle[b.usermap][c] = new N(b, c, a.usermap[b.usermap].map.mapcircle[c]));
                for (c in a.usermap[b.usermap].map.maprect) a.usermap[b.usermap].map.maprect.hasOwnProperty(c) && (a.maprect[b.usermap][c] = new M(b, c, a.usermap[b.usermap].map.maprect[c]));
                for (c in a.usermap[b.usermap].map.mappath) a.usermap[b.usermap].map.mappath.hasOwnProperty(c) &&
                (a.mappath[b.usermap][c] = new P(b, c, a.usermap[b.usermap].map.mappath[c]));
                for (c in a.usermap[b.usermap].map.mapcurve) a.usermap[b.usermap].map.mapcurve.hasOwnProperty(c) && (a.mapcurve[b.usermap][c] = new L(b, c, a.usermap[b.usermap].map.mapcurve[c]));
                for (c in a.usermap[b.usermap].map.maplabel) a.usermap[b.usermap].map.maplabel.hasOwnProperty(c) && (a.maplabel[b.usermap][c] = new U(b, c, a.usermap[b.usermap].map.maplabel[c]));
                for (c in a.usermap[b.usermap].map.marker) a.usermap[b.usermap].map.marker.hasOwnProperty(c) &&
                (a.marker[b.usermap][c] = new V(b, c, a.usermap[b.usermap].map.marker[c]));
                for (c in a.usermap[b.usermap].map.maplegend) a.usermap[b.usermap].map.maplegend.hasOwnProperty(c) && (a.maplegend[b.usermap][c] = new T(b, c, a.usermap[b.usermap].map.maplegend[c]));
                "undefined" != typeof a.usermap[b.usermap].map.categorylegend && "undefined" != typeof a.usermap[b.usermap].map.categorylegend.enable && a.usermap[b.usermap].map.categorylegend.enable && (a.categorylegend[b.usermap] = new R(b, a.usermap[b.usermap].map.categorylegend),
                    K(b));
                "undefined" != typeof a.usermap[b.usermap].map.maptitle && (a.maptitle[b.usermap] = new S(b, a.usermap[b.usermap].map.maptitle));
                0 + a.map[d].precision != a.map[d].point && ia(b);
                ja(b);
                a.div[b.usermap].style.visibility = "hidden";
                a.zoom[b.usermap].loadeditingsetting ? y(b, a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].currenty, a.zoom[b.usermap].currentx) : y(b, a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].currentlat, a.zoom[b.usermap].currentlng);
                if (a.responsivemap[b.usermap]) {
                    var q = {};
                    q.usermap = b.usermap;
                    a.responsive(q);
                    0 + a.map[d].precision != a.map[d].point && W(q);
                    window.addEventListener && window.addEventListener("resize", function (b) {
                        a.responsive(q);
                        0 + a.map[d].precision != a.map[d].point && W(q)
                    }, !0)
                }
                a.div[b.usermap].style.visibility = "visible"
            }, y = function (b, d, l, f) {
                var e = a.usermap[b.usermap].map.id, c = a.div[b.usermap].clientWidth, q = a.div[b.usermap].clientHeight;
                h(a.zoom[b.usermap].currentzoom, a.precision);
                a.zoom[b.usermap].currentzoom = h(d, a.precision);
                a.zoom[b.usermap].currentx = h(f, a.precision);
                a.zoom[b.usermap].currenty =
                    h(l, a.precision);
                a.g[b.usermap].setAttribute("transform", "translate(" + h(c / 2 + -f * d, a.precision) + "," + h(q / 2 + l * d, a.precision) + ") scale(" + h(d / (a.map[e].precision / a.factor[b.usermap]), a.precision) + ",-" + h(d / (a.map[e].precision / a.factor[b.usermap]), a.precision) + ")");
                window.console && (c = {
                    event: "poschange",
                    object: "map"
                }, c.zoom = h(d / a.zoom[b.usermap].rfactor, a.precision), c.x = h(f, a.precision), c.y = h(l, a.precision), window.console && console.log(JSON.stringify(c)));
                for (var k in a.marker[b.usermap]) a.marker[b.usermap].hasOwnProperty(k) &&
                null !== a.marker[b.usermap][k] && a.marker[b.usermap][k].setAttribute("transform", "translate(" + h(a.marker[b.usermap][k]._lng, a.precision) + "," + h(a.marker[b.usermap][k]._lat, a.precision) + ") scale(" + h(a.map[e].precision / a.factor[b.usermap] / d, a.precision) + ")");
                for (k in a.maplabel[b.usermap]) a.maplabel[b.usermap].hasOwnProperty(k) && null !== a.maplabel[b.usermap][k] && a.maplabel[b.usermap][k].setAttribute("transform", "translate(" + h(a.maplabel[b.usermap][k]._lng, a.precision) + "," + h(a.maplabel[b.usermap][k]._lat,
                    a.precision) + ") scale(" + h(a.map[e].precision / a.factor[b.usermap] / d, a.precision) + ")");
                for (k in a.mappoly[b.usermap]) if (a.mappoly[b.usermap].hasOwnProperty(k) && null !== a.mappoly[b.usermap][k]) {
                    a.mappoly[b.usermap][k].getElementsByTagName("polygon")[0].setAttribute("stroke-width", h(a.mappoly[b.usermap][k]._options.style.strokeWidth / d * (a.map[e].precision / a.factor[b.usermap]), a.precision));
                    if ("undefined" !== typeof a.mappoly[b.usermap][k]._options.style.strokeDasharray && "none" !== a.mappoly[b.usermap][k]._options.style.strokeDasharray) {
                        l =
                            a.mappoly[b.usermap][k]._options.style.strokeDasharray.split(",");
                        f = "";
                        for (var g = 0; g < l.length; g++) "" != f && (f += ","), f += h(l[g] / a.zoom[b.usermap].currentzoom * (a.map[e].precision / a.factor[b.usermap]), a.precision);
                        a.mappoly[b.usermap][k].getElementsByTagName("polygon")[0].setAttribute("stroke-dasharray", f)
                    }
                    for (g in a.mappoly[b.usermap][k]._mainvertices) a.mappoly[b.usermap][k]._mainvertices.hasOwnProperty(g) && a.mappoly[b.usermap][k]._mainvertices[g].rescale();
                    for (g in a.mappoly[b.usermap][k]._subvertices) a.mappoly[b.usermap][k]._subvertices.hasOwnProperty(g) &&
                    a.mappoly[b.usermap][k]._subvertices[g].rescale();
                    a.mappoly[b.usermap][k].toggleCategory()
                }
                "mappoly" == a.mode[b.usermap] && "undefined" != typeof a.poly[b.usermap][1] && null != a.poly[b.usermap][1] && (1 < a.poly[b.usermap][1].count() ? a.poly[b.usermap][1].getElementsByTagName("polygon")[0].setAttribute("stroke-width", h(a.poly[b.usermap][1]._options.style.strokeWidth / d * (a.map[e].precision / a.factor[b.usermap]), a.precision)) : a.poly[b.usermap][1].getElementsByTagName("polyline")[0].setAttribute("stroke-width", h(a.poly[b.usermap][1]._options.style.strokeWidth /
                    d * (a.map[e].precision / a.factor[b.usermap]), a.precision)));
                for (k in a.mapcircle[b.usermap]) if (a.mapcircle[b.usermap].hasOwnProperty(k) && null !== a.mapcircle[b.usermap][k]) {
                    a.mapcircle[b.usermap][k].getElementsByTagName("circle")[0].setAttribute("stroke-width", h(a.mapcircle[b.usermap][k]._options.style.strokeWidth / d * (a.map[e].precision / a.factor[b.usermap]), a.precision));
                    if ("undefined" !== typeof a.mapcircle[b.usermap][k]._options.style.strokeDasharray && "none" !== a.mapcircle[b.usermap][k]._options.style.strokeDasharray) {
                        l =
                            a.mapcircle[b.usermap][k]._options.style.strokeDasharray.split(",");
                        f = "";
                        for (g = 0; g < l.length; g++) "" != f && (f += ","), f += h(l[g] / a.zoom[b.usermap].currentzoom * (a.map[e].precision / a.factor[b.usermap]), a.precision);
                        a.mapcircle[b.usermap][k].getElementsByTagName("circle")[0].setAttribute("stroke-dasharray", f)
                    }
                    for (g in a.mapcircle[b.usermap][k]._mainvertices) a.mapcircle[b.usermap][k]._mainvertices.hasOwnProperty(g) && a.mapcircle[b.usermap][k]._mainvertices[g].rescale();
                    a.mapcircle[b.usermap][k].toggleCategory()
                }
                "mapcircle" ==
                a.mode[b.usermap] && "undefined" != typeof a.circle[b.usermap][1] && null != a.circle[b.usermap][1] && a.circle[b.usermap][1].getElementsByTagName("circle")[0].setAttribute("stroke-width", h(a.circle[b.usermap][1]._options.style.strokeWidth / d * (a.map[e].precision / a.factor[b.usermap]), a.precision));
                for (k in a.maprect[b.usermap]) if (a.maprect[b.usermap].hasOwnProperty(k) && null !== a.maprect[b.usermap][k]) {
                    a.maprect[b.usermap][k].getElementsByTagName("polygon")[0].setAttribute("stroke-width", h(a.maprect[b.usermap][k]._options.style.strokeWidth /
                        d * (a.map[e].precision / a.factor[b.usermap]), a.precision));
                    if ("undefined" !== typeof a.maprect[b.usermap][k]._options.style.strokeDasharray && "none" !== a.maprect[b.usermap][k]._options.style.strokeDasharray) {
                        l = a.maprect[b.usermap][k]._options.style.strokeDasharray.split(",");
                        f = "";
                        for (g = 0; g < l.length; g++) "" != f && (f += ","), f += h(l[g] / a.zoom[b.usermap].currentzoom * (a.map[e].precision / a.factor[b.usermap]), a.precision);
                        a.maprect[b.usermap][k].getElementsByTagName("polygon")[0].setAttribute("stroke-dasharray", f)
                    }
                    for (g in a.maprect[b.usermap][k]._mainvertices) a.maprect[b.usermap][k]._mainvertices.hasOwnProperty(g) &&
                    a.maprect[b.usermap][k]._mainvertices[g].rescale();
                    a.maprect[b.usermap][k].toggleCategory()
                }
                "maprect" == a.mode[b.usermap] && "undefined" != typeof a.rect[b.usermap][1] && null != a.rect[b.usermap][1] && a.rect[b.usermap][1].getElementsByTagName("polygon")[0].setAttribute("stroke-width", h(a.rect[b.usermap][1]._options.style.strokeWidth / d * (a.map[e].precision / a.factor[b.usermap]), a.precision));
                for (k in a.mappath[b.usermap]) if (a.mappath[b.usermap].hasOwnProperty(k) && null !== a.mappath[b.usermap][k]) {
                    a.mappath[b.usermap][k].drawMapPath();
                    for (g in a.mappath[b.usermap][k]._mainvertices) a.mappath[b.usermap][k]._mainvertices.hasOwnProperty(g) && a.mappath[b.usermap][k]._mainvertices[g].rescale();
                    for (g in a.mappath[b.usermap][k]._subvertices) a.mappath[b.usermap][k]._subvertices.hasOwnProperty(g) && a.mappath[b.usermap][k]._subvertices[g].rescale();
                    a.mappath[b.usermap][k].toggleCategory()
                }
                "mappath" == a.mode[b.usermap] && "undefined" != typeof a.path[b.usermap][1] && null != a.path[b.usermap][1] && a.path[b.usermap][1].getElementsByTagName("polyline")[0].setAttribute("stroke-width",
                    h(a.path[b.usermap][1]._options.style.strokeWidth / d * (a.map[e].precision / a.factor[b.usermap]), a.precision));
                for (k in a.mapcurve[b.usermap]) if (a.mapcurve[b.usermap].hasOwnProperty(k) && null !== a.mapcurve[b.usermap][k]) {
                    a.mapcurve[b.usermap][k].drawMapCurve();
                    for (g in a.mapcurve[b.usermap][k]._mainvertices) a.mapcurve[b.usermap][k]._mainvertices.hasOwnProperty(g) && a.mapcurve[b.usermap][k]._mainvertices[g].rescale();
                    a.mapcurve[b.usermap][k].toggleCategory()
                }
                "mapcurve" == a.mode[b.usermap] && "undefined" != typeof a.curve[b.usermap][1] &&
                null != a.curve[b.usermap][1] && a.curve[b.usermap][1].getElementsByTagName("path")[0].setAttribute("stroke-width", h(a.curve[b.usermap][1]._options.style.strokeWidth / d * (a.map[e].precision / a.factor[b.usermap]), a.precision));
                a.center[b.usermap].setAttribute("transform", "scale(" + h(a.map[e].precision / a.factor[b.usermap] / d, a.precision) + ")");
                a.zoom[b.usermap].prevzoom = d
            }, X = function (b) {
                "normal" != a.mode[b.arg.usermap] || a.zoom[b.arg.usermap].loadeditingsetting || (b.style.visibility = "visible")
            }, ia = function (b) {
                var d =
                        String.fromCharCode(73, 110, 116, 101, 114, 97, 99, 116, 105, 118, 101, 32, 73, 109, 97, 103, 101, 32, 67, 114, 101, 97, 116, 111, 114),
                    h = String.fromCharCode(80, 111, 119, 101, 114, 101, 100, 32, 66, 121, 32, 105, 105, 67, 114, 101, 97, 116, 111, 114),
                    f = String.fromCharCode(104, 116, 116, 112, 58, 47, 47, 119, 119, 119, 46, 105, 105, 99, 114, 101, 97, 116, 111, 114, 46, 99, 111, 109),
                    e = String.fromCharCode(119, 119, 119, 46, 105, 105, 99, 114, 101, 97, 116, 111, 114, 46, 99, 111, 109),
                    c = String.fromCharCode(119, 119, 119, 46, 105, 109, 97, 112, 98, 117, 105, 108, 100, 101, 114, 46, 99, 111, 109),
                    q =
                        String.fromCharCode(104, 116, 116, 112, 58, 47, 47, 119, 119, 119, 46, 105, 105, 99, 114, 101, 97, 116, 111, 114, 46, 99, 111, 109, 47, 111, 114, 100, 101, 114, 47),
                    k = window.location.hostname, g = r("g");
                g.style.opacity = 1;
                a.svg[b.usermap].appendChild(g);
                g.style.opacity -= .8;
                var x = r("text");
                x.appendChild(document.createTextNode(d));
                x.style.cursor = "default";
                x.style.fill = "#FFFFFF";
                x.style.fontFamily = "Arial";
                x.style.fontWeight = "bold";
                x.style.pointerEvents = "none";
                g.appendChild(x);
                x.setAttribute("x", -4096);
                x.setAttribute("y", -4096);
                var p =
                    r("text");
                p.appendChild(document.createTextNode(d));
                p.style.cursor = "default";
                p.style.fill = "#000000";
                p.style.fontFamily = "Arial";
                p.style.fontWeight = "bold";
                p.style.pointerEvents = "none";
                g.appendChild(p);
                p.setAttribute("x", -4096);
                p.setAttribute("y", -4096);
                p.setAttribute("text-anchor", "middle");
                d = parseInt(a.div[b.usermap].clientWidth / 8);
                for (p.style.fontSize = d + "px"; p.getBBox().width > a.div[b.usermap].clientWidth;) d -= 2, p.style.fontSize = d + "px";
                for (; p.getBBox().height > a.div[b.usermap].clientHeight;) d -= 2, p.style.fontSize =
                    d + "px";
                d -= 2;
                p.style.fontSize = d + "px";
                p.setAttribute("x", a.div[b.usermap].clientWidth / 2);
                p.setAttribute("y", a.div[b.usermap].clientHeight / 2 + parseInt(p.style.fontSize) / 2);
                x.setAttribute("text-anchor", "middle");
                x.style.fontSize = d + "px";
                x.setAttribute("x", a.div[b.usermap].clientWidth / 2 + 3);
                x.setAttribute("y", a.div[b.usermap].clientHeight / 2 + parseInt(p.style.fontSize) / 2 + 3);
                a.wmark[b.usermap].wmark = p;
                a.wmark[b.usermap].wmarkshadow = x;
                var u = document.createElement("div");
                a.div[b.usermap].appendChild(u);
                u.appendChild(document.createTextNode(h));
                u.style.position = "absolute";
                u.style.bottom = 0 - parseInt(a.usermap[b.usermap].div.style.borderWidth) + "px";
                u.style.left = parseInt(a.usermap[b.usermap].div.style.borderWidth) + "px";
                u.style.font = "11px Verdana";
                u.style.backgroundColor = "#ffffff";
                u.style.padding = "3px";
                u.style.opacity = .5;
                u.style.cursor = "pointer";
                u.onclick = function () {
                    if ("edit" == a.mode[b.usermap] || "undefined" != typeof a.usermap[b.usermap].map.zoom_setting.editing) {
                        if (window.console) {
                            var d = {event: "popup", object: "map"};
                            d.url = f;
                            window.console && console.log(JSON.stringify(d))
                        }
                    } else window.open(f)
                };
                a.touchdevices && (u.ontouchstart = function (a) {
                    a.preventDefault && a.preventDefault();
                    a.stopPropagation && a.stopPropagation();
                    this._touch = 1 == a.touches.length ? !0 : !1
                });
                a.touchdevices && (u.ontouchend = function (d) {
                    this._touch && ("edit" == a.mode[b.usermap] || "undefined" != typeof a.usermap[b.usermap].map.zoom_setting.editing ? window.console && (d = {
                        event: "popup",
                        object: "map"
                    }, d.url = f, window.console && console.log(JSON.stringify(d))) : window.open(f))
                });
                u.onmouseover = function () {
                    u.style.opacity = 1
                };
                u.onmouseout = function () {
                    u.style.opacity =
                        .5
                };
                if (k != e && k != c) {
                    var n = document.createElement("div");
                    a.div[b.usermap].appendChild(n);
                    n.innerHTML = '<img ontouchend="imap5custom.resumePopup(this.parentNode);this.parentNode.style.visibility=\'hidden\';" onclick="imap5custom.resumePopup(this.parentNode);this.parentNode.style.visibility=\'hidden\';" style="cursor:pointer; position:absolute; right:0px; top:0px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAA3NCSVQICAjb4U/gAAAARVBMVEUAAAC2trbXbVt9fX1mZmb///+UlJT39/fn5+eZmZmbjInZ2dnIgnaLhIPTdWXCwsKkpKSMjIzv7+/e3t7MzMy7u7uCfn4Lu4lWAAAACXBIWXMAAAsSAAALEgHS3X78AAAAFnRFWHRDcmVhdGlvbiBUaW1lADAzLzIwLzE0S4NbxQAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAACqSURBVCiRlZLbDoQgDETdlVKrUhHd/v+nLgUFTTTG4YXM4TItNHCj5kYQx/dCT2B0pufscG/cWID4YZZEWNqOpAATIJASFkJYTAHOImAkycfZFcCixLdCEH3duqfKZF1x82tc1sUqm0PUOlh+6vvsn8DnEqQ8KjofxeIRwjQFQHu8POcnSdnsIa6LkYLdC7S1QNMlf6tnqC0RWkoT5zh9bvvbF7z7DNefB/4cEAzsPz05RwAAAABJRU5ErkJggg==" width="24" height="24"/>';
                    n.innerHTML = n.innerHTML + "<img ontouchend=\"window.open('" + q + "')\" onclick=\"window.open('" + q + '\')" style="cursor:pointer; position:absolute; left:33px; top:123px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG4AAAAdCAMAAAB8M6mmAAAAA3NCSVQICAjb4U/gAAAASFBMVEVBiM+Dr9z0+PxZl9XE2vCsy+ptotjc5e6UvORLjtH///+40+1inNXo8fmgxOfQ4vO60ed9rd7y8vJxptuJteFKjNbc6fbR3utuSFHfAAAACXBIWXMAAAsSAAALEgHS3X78AAAAFnRFWHRDcmVhdGlvbiBUaW1lADAzLzIwLzE0S4NbxQAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAAG9SURBVEiJ7VfbcusgDFSF3QMylzhi6P//aVc4NJk0zun0wdOH7GQMYSVWQkAcOv97i3QM3OlMH+EgMcOJ3g9UI3ek2Asv/A41A4/OfM0/8PU/M7yiSCks9RHxqHtnIrrP7rgQBWbrqm4nUvXr0nG9f5lw8LdyZbDfyH25/ohJRBa0jBZR29hsXZ/7wOCLLCLDd7kYdnImL55WGEWZnshFC7KxhkkiJdFwmQVeweXqmiDJwRfhOQ9fJ63PYE6T1AipRZiq+F25UiRFk1T1ks2D8ian0vQmpM7jS7j6Iv/a44KTQ0opESdZZ9lb2SIZH6y9dGS1Lxc5RIrqxN4d/N0WCpx6XJYv1mgRL1WWlp7ULjTsTMXSG3o75MitE2Le5OabYl+7VtiNDJCrkpgmtmT3a+cYNWGOFGZrnRWr124OfZJiazP4O7nAtnGYA4Q9rKFURdZnclh7jjDCAVQzFh61s6EVGy6xDv7+PGaTq8JNGoraYA7N3Z/vqNvTkfPb9eI0LkjHiIgbx4qOqycMfnO4+ga1p8u5fg3dmPwXuc2LHYyDoFMp+ch3mRf+Mg599XN4sT0QJzqfDssP/xE+AeDcGcHI5TetAAAAAElFTkSuQmCC" width="110" height="29"/>';
                    n.innerHTML += '<img ontouchend="imap5custom.resumePopup(this.parentNode);this.parentNode.style.visibility=\'hidden\';" onclick="imap5custom.resumePopup(this.parentNode);this.parentNode.style.visibility=\'hidden\';" style="cursor:pointer; position:absolute; left:163px; top:123px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAdCAMAAADIOV+pAAAAA3NCSVQICAjb4U/gAAAASFBMVEVBiM99rd7o8flZl9W40+2sy+ptotj0+PzR3uuUvORLjtHc5e7////E2vBinNW60eegxOeJteHy8vJxptvO3vdKjNbc6faDr9x61MolAAAACXBIWXMAAAsSAAALEgHS3X78AAAAFnRFWHRDcmVhdGlvbiBUaW1lADAzLzIwLzE0S4NbxQAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAAD0SURBVDiN7ZXdksMgCIVpSNbqHg0Jjvv+b7pgO22nk16Y656LGAgf+DMS2n//Co2K152uaRhzrfRziiM+h301oBTztQpTxSDXUCUDw+CMaE/Od1C1nzKrphfzSJjuLw6WCcBCtNhgCbs5H3PqcQ9wgqaMrSAnlo1acPP4OijkCRZPz8iKpuYpqKrxEfAOzk/wlgXVFg7Uoug6BimE9ALavJOBxJfshZdjpkswG7mFvkbPIohlSZ0PoVBaPl35GaEG21sHN4SGlmyO5rqY6aN+qllExD4WD2Cxzby5/AA5ioz3mK8GdbJBsrXkU1ppX0/UtH/HP8K4DBwH48nnAAAAAElFTkSuQmCC" width="56" height="29"/>';
                    n.style.font = "11px Verdana";
                    n.style.position = "absolute";
                    n.style.width = "256px";
                    n.style.height = "160px";
                    n.style.backgroundImage = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACgCAMAAADUx0IOAAAAA3NCSVQICAjb4U/gAAAC8VBMVEUAAAAAmf+fXVopgkxUJyX39/fn8eu/2cqEhITfg3x5xfkhJSKlx7NiZ2iawapmZma93s613PWmpqaVlZVLtfudmZhIlGYIEwwtRzZsp4RZTUy41sQtqf3wlI0/jl7g6OODtJdDPz9zd3WDSEW5vL4UAADAcm2Iy/jE4fT+enNVm3HY2NiOjIsdpP00HRsifkdeOTVCkGEoDQvW4tusrKw1iVdauvq1tbV0eXjm7/f5nJTHenL/iIL5d3Kvzbs8r/xqOzlHIiB0rYuclJSPu6HGxsbU5/REkmOm1vZaWlr5/PzUhH0ZDg1jpHyvZ2AOnv4bAwMvKCgpKSkHAABpwPnX6N7g7ub+j4jti4RLlWkvhVJXLywzEhOTTUnO3tRrRkQwb0nm9+/+f3lqQ0H5pZ3MzMyKuJ15r44gBALeiIHMdW8WLh9jPDhBJCLx9/SX0PdHmWhcn3cJBQQ8PDxhWFiuYVtFc1i7bGcUDQxLS0s+GBqmyrWAf34iGRg3MjIoFRP1j4je5+Fmcm1ULysnHRyOUEzl5eVRhGZgNDF9sZLy8vL4/vpZnXTm8OmVhINKKCVEm2bohHyLu54shFA8JCIkBwY6jFqVwqdoUU8xjFJUVFT/hHzFcWz///8UFRV5Q0D/mJCyzr00eE/P49eSUU/G2s7kjISbxKuEt5kuGRdhQTz3lJTZfnbg4OAQCAj/nJNzPTqjYVtuqoaqyrcaCgmOSES818axZV//pZ1+s5PDdnAfEBEKGQ8zMzPWc3NbUVD0jYTD2MxtcXGUjIxoa2y9vb2ZmZnN0c59fX1QmG3/lIwODg7/jIRYpXZkODOUvqXu9vHT4dhrQjrE5dEJCQlRLCqtxbVQMzEoIiFZMC5SmW50QT/5e3XfiX+3ZF5IPz6ESkooEQ+SUUwoGBhLKCfNe3b3kYtFnGgmCgczIyEeBQMneUo6JiVCGRlrWli4a2bejISjXloJFA4vFxQvckvOc3PFa2uNfHtBMDFuNTGUxa0dGqDOAAAACXBIWXMAAAsSAAALEgHS3X78AAAAFnRFWHRDcmVhdGlvbiBUaW1lADAzLzE5LzE0cStunwAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAABIcSURBVHic7Zx9dBTXdcCHUuSxbDNHu0YtRSyOnBbJ80SQGTEjF7OYw0qWE5kYCWMpqdqqlmhcsqpQ3UA8pCFupmRAjTGtkmOZGtd2SXo6UoKdHGz3I15pZkBSgbamdWynPU6c9POkpx/nNO1fvfe9+XizWgkBkgbC3IPEzM59X7+59827s/dJOH6Di3BcuKEFAZg3sCQAEgAJgARAAiDuTsQpCYAEQAIgAZAAiLsTcUoCoCSAwQ1vbD55ftu25U+s6lpTBh+UpT6zb+/IyLo//iGRF7+TCyklAJS9dHJr69sdlc0glR13rezd/LD7zL6P4PjP7dnzK3/xwaIqZE2F32fS7MwQ9w8MtKSNObWu5q56AFcr0wCUvdTb2tGcCaW++S9/55aRkb1te9cdOrdny8X1P2NHq1AFDSsaoCdam/eeQZtT6wPzM4qrkCIAeePllR31mYj84y/91Csfe+e5d97ZcmjPlvfXP7nnN6K3l7eAcWFSAx/JjU/OaWjXHoCDy49wd38I5an//tOPf/7nP3H06He+/x/nvrj+yXMXfzE9U22qMOkZtSFGrxiqKoeHqoeQA5BT1fkYz2VLFMDg8rvC29+wtKO1v/XX//XXPv346tGJqU27Rle/tuX9cxe37PlhxAk4F9gfsfwBwXR2CFi70YJeMYDDzh8Q/GOVOQsWVPHTSTFaalEkAqDsb/uD8XfWP73zAkj+c3d/6tETw92bdg13Tzz64S3vb9mz/u/281VwAASB944BYUB4aOAAjH+H0KKqmrADr94ipVS1BdXlauGApqHvpGDwavqhvbeFpfKLMvwiAC+tDOx/6coNefrS+IM/+oVHR2trp0ZP7Oq+d+LRxw7tOXTx9bf4KlThjMkAqMIO/gIMhZl9i4D3dpkohL7TIuTMwAXAKvBszQFB5kotjvAAyrZ1+OM/duph9tL8Aekn/2i0u3bXt57996MTw7UTq3/iyYuvj/w2X0VoAWp0UhvwK55k99MQfMuRwQRUMwDgl9OwpoHFXZfxALpafQcYau7yvjVI/fOLo1O1u26+83u/de6xie7h0e9/+yMj+w7wVVwSAEyNA1ToZbmFzQIcAM2bOmj5GAGcPBs4wPLDHoDCvzx7YtPUZz8/Igh714MN7Lr5XNvIyAwuIAuT/IVpAAbGYbafFHacEaMWcI0AKNvtzwBDnS/43xuN/+prE5tOHL2I9+y9Z0enNt28pW1kX+QZF1rAhQMC/ywLAXCGsYPOBzBmDsAZijB2ABtagwfg2TUhgMcmNk088m0E8NXHRjdN3fzXbSMfiKyEuKfAeDhUgxsK/3DwHnBadA5gk+d4vHPAG28HALaW+QBu+9mfGx0ennjwPXCBOz871T3xnXPCASVSRegCpjEptNCxGhp/L1uEFvq/nIIJEWd609hPAUyyySTPLMd/Ciz4oHnhAGwOngGdr17wAWhtL94zUbvpW48fOvTi0V21w6efvW/vT6+KVMHHAuDhky3amf2TEWOGdcBAWk21oOK4sCOlirdM0iG34PogXAcIMEfECOBkZQBgd2AB7o+++OHTm2qnfvDI0R9MdNeOrr7zo/+Z2XqQryISDMktk+gtBzTeBbyVoLAfn/bjcLBPYy5gDERWggR14wNwPlgFNfQ/HHx77nzva6tPd9dOnYCFUO2J0a/fLfzhU5XnZ6syFyz1eVGDtb7MB8FBCHANxALbAgBD9QcDAOYzH/3u6tHue4eH362dGP3UOuE3n8pk+l+KpbMLIRyALwUukFnaFQA4bj/0T99dfaL73nffnTjx4Lq26r/pzGQqe8vi7fb8CQfg1hDAsZOHQwLKW78PBGrv3XXPgx8XnjEPnwICR35sTIADsCp4CsAkMMgl0agP3f310anu0dc+2fYZ+fjxFxoymeZZZ4HrSTgAXXeFr0KO3cSnESlv3fcnJyYeee6Vt1bA2eGtQKB1Z7z9njfhAKxpDV+GHNt6gQPwgP7eN+45/ff3vf5lE8/QBCqfj7ff8yZ8MPRqCGCoM2IC7j/c94nTz/3X7/0PPVvWP5Sp/0Ks3Z4/4QG8XMn5wKk8bwLkk4//+bl1/0bo2eEnwASODHqlZCKS8E257c7WmkUX0SW/WkiJhMy101ZakrRUqTfvllLiw1mFB7DhSIYzgc0RE/jy/9558fUDDMDxh49lMh1dXinDlVQrqI/M2gNXwt+KVeKS7OizsuPEKjgGcC+lzhq4HIm8EtvNvRDv7NjJAVj2u59e99W2P0izszzoNd8a1CFBVxTXwbG71USxwQ6ICOs617YUFz7HY9NyiJNzJAVGr1g5fKtq53xFKgrBEjlCZHeMwCULbALvsgwVQyFDIcRbQTrMVAzbdeECaIOa1wxrAIpgScWyL20QEQDPhw9CWAyd4ufBFa+M7BXeFD0Ap4YyzbsjACQ9l5NyHoAUnOgpUxlPK66tujlNgbsGhw7rn+TaBShWCBQDAIqk9KSr064iwS1Oua5IaEEVWhDHoBQjUPBeShPNAZYFuyetm14ztAEogh9Bn1KXCWBwJf+dyLHzD3AA3sSwxfbs4SswC66MAnCZ+eOPIVn43Yip6OxOwd0BF8dDZqGgC2PIVQeKDICYZ1YgeVXCoSqZzlgeT3MYcKVI0B4FgOh0GxuUsZkVhBWmRaAFaS5fvEW/F3iZN4GGoSdCAg4A+IDrO8R5sIDWGQG4EhU6HFPWJFJNTFGJAEilzbQSKDIAxIwAMIik6xKbVCSwCZDbPABsYHlaJ6vC9ZqhhWkR+CXNZVIp+mJkK28CnUO3HuYA/FkumBGeBguYDgA7JFIARjAks6DgzWV3KwRgSTLcfV+xJIA0KcNjWhAA6KFm2nu7zth4bkGbyTMA1DKuCIC5ilsNZuqBgG8DypvCmcAc8iuHMpkZXAAbr8ZfLo6bdjAPDzi7AGN12YhRN607oSIDILIfH4AI18AF7GrLtCXXwoEa7PnpSjgJqD0UgEOwYr8Z2oCtwQwiWVcEwOzl1gJoAye95YCltwQGcLwMAudgDkA7VgIAOYmQvKxpZHwFswClQM7ocOAUSLVj6ho87FA3R3vnKdLb6TuNDyBXEHVyGzi+VEjBqV3QieTNfng8TizqAgaBijXajAizCG0A2kLVKwKwITIPZho6vxK+GwnkJogHm0+VrtBy8Skvu8GzXnb5C25RpzjF6TX5DmJJrGjoMC5XzHJlrhnagOXOLT/BLJEf8Hw/DyAz9KHWrmVF47+AHtDcO9cmrlLgWaY5C1f99AyRk29HCGSONXxp5wP8+JctXwofd6yaocb5lpyiLGQeyXQAg9vORgkMLa28dWcYGQz+H44/039whhqvMymRI7SmtyNTjCDT+8LBsgsXLvzymm+2HsOPmu+Ip7/zLqWyxA7eUUwAYqOlQ629r96xu/lDDfSDuxbLAxZaSqbJbeg9W0wAGDR0djY0DLGTyt0/Jh4wQ57gwfNH6qcjCKX+yGUYQHk5/ptZspfd6fmUGTJFB19urZxl/Gd7B6eXuZTUVDT6h030sLGiAk+WmPS4iddlV2oqvLNGr8QCyIypsm/sLuEG3vg7dm/gNPs2mo1LmsyNfcFBU51pVvXhBRRmAY3Zuuz2moqqjUvKzXY4vN80t2ertjeZ7UuyWbOvLlvXDsbQXoc4auqqstuhRFW2rsaswJPyuqqqRQZgblg+gxHA+Lt4RRhuX91as64pOKDHtwMJDsDa2028z9vhptZkcYz0Wns5s4DtNWYjDDa7kd7n29eCKi0BPxV1jWY7HFZVLDIAMIKn+yunTwXNR3r/KqpX13R7RVVjHXewsW9tX11jVRMHIEv7X4EOX16XzWZh2OXZJUsYAPaxr8Scgp0soddwDskuPgCzrOt8a1HeaP3buzevKVJr76sCi9/IHdy/MdvY3sducgkAGytAzD64pziyaxgAyM7nv3Cko7m+vj4DP80d/b2rpj//7ge7X1t3P3fQCA5Qg05d0VfkAjjSGjBqMPFyuL4RRrakMXSBCrOpvNgF4gUAMth1cuvK1v7+1lPnbzJKfSmKM18TDiM4wCnQRBLl2aJJkD7z2nH6M5vgd1U5QKirMvu2Z7e300FWLAknwboqnARjBzBfwj0G2QOw0fugouYSj8GFlGTHSAIgAZAASADE3Yk4JQGQAEgAJAASAHF3Ik5JACQAEgAJgATA9I/nnmBwvYg8QyJGMYAUEYk6x+ySaZLyd5W7dqnLJTNEr05mz8zlZaYU1mIAouNi6uKVAQi6o5RM+72ySmeV2TNz56JZDIAlOtG+2tQW7LSYxgwNhZ65hHhJypZiqLZpKPSqkSKO6iIAw4EPLFKtKL4yUwSxJUdxqaqXLO2lulIt186Jadll6bAs1VVFXorst2Eyw8q51JRYt7zMXL8KS3EtRYY6LJq36yfbYsosJhUapVJNSgIo0FxGL9/Vdm165uYIXLHdMbZv1pWwbT1NE1j1dI+tKVhYd1zbYQA8ZaYYAABVpcB8gVSzVFfUUiTFHdNYkixmx8JHTtqk2W5eGyZLINPG6H+sW66GdftVFMYU15WgjgKhebuYbIsp6DRlliiGqJeY2YoA5MEF7AJmvbE0VszptVxdAdfAy5iXOijJrDNQG0tgTdPUX0IBsEw2mtPqKYfZkNSsQDU/xpKexFSoxSfIOWMmprri4FOO3wYtUXDldMFQqYPRblHD9qvQTS7Rlpk8JtuyXEqiOGKpmX2aBVQTQlPs/DRWu1AQC3g7q8HkvLxU/26YNIFVEqnLMwCKpIOF0w885TCDnWaV09xBElibr8UD8FNdwefGXb8NWmJMTdmOnULPZN0qriICwEu2ZXMPGZdKzsGlXMBkACgvOaDZk5IsLv2YAWAJrPgfOBlN3jVyY1qQIxoohgCwRIoHwLSKc0Qx1dXW8O7zSbKqoxu5tCj73fLShb0qeAB4JZ026DkFIOr6nCxA9AGYGk1jRQ4GuLdLc7K9vNRgXF4CqwXqLpsDXOo3tNOeMgcAdwGAAxmaHbblafEWYFezVFezgMbNJ8nK2ljeLBSYA2K3aGauX4WYj1oAcZaZamABiqGtmAOAwAKgsWpScEyiER1aWjFONMccFAtE07gbaxfOYFaqXZDSzCOxkA3TmK75yiGA1Dgo2BLWGrblaUUS5b1UVzOFCcZ+G1RwqwBOjn63cpKY5quIAMgVCJQMAJhyoUTC5WxLYZbG6jL4LNPVy0vlxO3xDMu7rTJdRBpUrViZXjOKk2OnVTkt1TVog/+M71aJKkpUU1LmJxZwHIWU9LBrX+YHgKwo9vU5/iQaTABcGoAlF50ZXFAzU5R53cgcAERDO4VEdifOPRy7RiUBUAQAHmcYrXobQWHxSUjaC//Y3kxYb/V4AIyUuEJX/D2dNizGHcMmdGewGmzz5DeD0u2j+PcWiQhhqpwWV8h+g1hCDfac4qeL9CdFigE4ORfXX95GUIyJcfsmirc3k7MAiFPxE29PJ6wAezSN7dmEYv42T34zKMa5EAvnCjnXca2C6iqq3yAG39CQF4Oz4DsWALhck9wgnsLQN3ABujczBJBjQbC/pxMtxlvQ4oLfVNmSmV/jpnApqqsKjctdPzrDBi3WkL+VlCzgJqEimfZOUKomIQAW8jEX8PZmKqIPwAuCvT2dNDDzRksVOK0gzKNxq2JVF/DtEpHwfQ1rkDVE/BicBd9xAFCrLdpVbyOo1y96ydubGVoABSMqfrhK2HUGwKAv1phWPgz0vX3SpqxiVGPZuuM12IMlFNITvDxxU6XD93mXIgA4Gjm0AIy+8iTYsYuHIQCMWCEk9cNVzgVM/DuzaWbGkTh3HAZlWbKBjmBZ+KLHbxA3mBPR30rKgm+TlHy5vKAALE0nIgcAgtczOrlAR8L2ZoYugFErhqTenk7OBSDw1DU93EAcxKgpqK4gQ6W6bsi4/VOmDY73oIPpadHfcwo1415BaRGescVzQHGwykWU8rS32uFuzWmRUOn41DR6XNMPltkmT65BxzH9GNyaeUPpPMu1EguoacUpxPFny68VAJaqqLGEFdcKgNgkAZAASAAkABIAcXciTkkAJAASAAmABEDcnYhTEgAJgARAAiABEHcn4pQEQAIgAZAASADE3Yk4JQGQAEgAJAASAHF3Ik5JACQAEgAJgARA3J2IUxIACYAEQAIgARB3J+KUBEACIAGQAEgA3MhiAoAbW8z/B0V3mxXdbk8sAAAAAElFTkSuQmCC')";
                    n.style.boxShadow = "rgb(0, 0, 0) 0px 0px 10px 0px";
                    h = parseFloat(window.getComputedStyle(n, null).getPropertyValue("width"));
                    e = parseFloat(window.getComputedStyle(n, null).getPropertyValue("height"));
                    n.style.visibility = "hidden";
                    n.style.left = a.div[b.usermap].clientWidth / 2 - h / 2 + "px";
                    n.style.top = a.div[b.usermap].clientHeight / 2 - e / 2 + "px";
                    n.arg = b;
                    a.wmark[b.usermap].popup = n;
                    setTimeout(function () {
                        X(n)
                    }, 6E4)
                }
            }, W = function (b) {
                var d = a.wmark[b.usermap].wmark, h = a.wmark[b.usermap].wmarkshadow, f = a.wmark[b.usermap].popup,
                    e = parseInt(a.div[b.usermap].clientWidth / 8);
                for (d.style.fontSize = e + "px"; d.getBBox().width > a.div[b.usermap].clientWidth;) e -= 2, d.style.fontSize = e + "px";
                for (; d.getBBox().height > a.div[b.usermap].clientHeight;) e -= 2, d.style.fontSize = e + "px";
                e -= 2;
                d.style.fontSize = e + "px";
                d.setAttribute("x", a.div[b.usermap].clientWidth / 2);
                d.setAttribute("y", a.div[b.usermap].clientHeight / 2 + parseInt(d.style.fontSize) / 2);
                h.style.fontSize = e + "px";
                h.setAttribute("x", a.div[b.usermap].clientWidth / 2 + 3);
                h.setAttribute("y", a.div[b.usermap].clientHeight /
                    2 + parseInt(d.style.fontSize) / 2 + 3);
                "undefined" != typeof f && (d = parseFloat(window.getComputedStyle(f, null).getPropertyValue("width")), h = parseFloat(window.getComputedStyle(f, null).getPropertyValue("height")), f.style.left = a.div[b.usermap].clientWidth / 2 - d / 2 + "px", f.style.top = a.div[b.usermap].clientHeight / 2 - h / 2 + "px")
            }, ja = function (b) {
                var d = String.fromCharCode(104, 116, 116, 112, 58, 47, 47, 119, 119, 119, 46, 105, 105, 99, 114, 101, 97, 116, 111, 114, 46, 99, 111, 109),
                    h = String.fromCharCode(80, 111, 119, 101, 114, 101, 100, 32, 66, 121, 32,
                        105, 105, 67, 114, 101, 97, 116, 111, 114), f = document.createElement("div");
                a.div[b.usermap].appendChild(f);
                f.innerHTML = "<a href='" + d + "' rel='nofollow'>" + h + "</a>";
                f.style.position = "absolute";
                f.style.bottom = "-1px";
                f.style.right = "1px";
                f.style.font = "11px Verdana";
                f.style.backgroundColor = "#ffffff";
                f.style.cursor = "none";
                f.style.visibility = "hidden"
            }, la = function (b) {
                var d = a.usermap[b.usermap].map.id, l = a.usermap[b.usermap].map.y, f = a.usermap[b.usermap].map.x,
                    e = a.usermap[b.usermap].map.zoom;
                a.zoom[b.usermap] = {};
                a.zoom[b.usermap].initzoom =
                    "undefined" != typeof a.usermap[b.usermap].map.zoom_setting.init ? h(a.usermap[b.usermap].map.zoom_setting.init.zoom, a.precision) : h(e, a.precision);
                a.zoom[b.usermap].initlat = "undefined" != typeof a.usermap[b.usermap].map.zoom_setting.init ? h(a.usermap[b.usermap].map.zoom_setting.init.y, a.precision) : h(l, a.precision);
                a.zoom[b.usermap].initlng = "undefined" != typeof a.usermap[b.usermap].map.zoom_setting.init ? h(a.usermap[b.usermap].map.zoom_setting.init.x, a.precision) : h(f, a.precision);
                a.zoom[b.usermap].maxzoomlevel =
                    "undefined" != typeof a.usermap[b.usermap].map.zoom_setting.maxzoomlevel ? a.usermap[b.usermap].map.zoom_setting.maxzoomlevel : 20;
                a.zoom[b.usermap].minzoomlevel = "undefined" != typeof a.usermap[b.usermap].map.zoom_setting.minzoomlevel ? a.usermap[b.usermap].map.zoom_setting.minzoomlevel : 1;
                a.zoom[b.usermap].rfactor = 1;
                "undefined" != typeof a.usermap[b.usermap].map.zoom_setting.editing ? (a.zoom[b.usermap].loadeditingsetting = !0, a.zoom[b.usermap].currentzoom = h(a.usermap[b.usermap].map.zoom_setting.editing.zoom, a.precision),
                    a.zoom[b.usermap].currentx = h(a.usermap[b.usermap].map.zoom_setting.editing.x, a.precision), a.zoom[b.usermap].currenty = h(a.usermap[b.usermap].map.zoom_setting.editing.y, a.precision)) : (a.zoom[b.usermap].loadeditingsetting = !1, a.zoom[b.usermap].currentzoom = h(e, a.precision), a.zoom[b.usermap].currentlat = h(l, a.precision), a.zoom[b.usermap].currentlng = h(f, a.precision));
                a.zoom[b.usermap].currentzoomlevel = A(a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].initzoom * a.zoom[b.usermap].rfactor);
                a.div[b.usermap].style.width =
                    a.usermap[b.usermap].div.style.width;
                a.div[b.usermap].style.height = a.usermap[b.usermap].div.style.height;
                a.div[b.usermap].style.position = "relative";
                if (!a.touchdevices && (a.div[b.usermap].onmousemove = function (c) {
                    if (null != a.selectedOverlay[b.usermap]) a.selectedOverlay[b.usermap].onmousemove(c);
                    "marker" == a.mode[b.usermap] && (this.style.cursor = "pointer", v(b, c, "Click to add a marker"));
                    "maplabel" == a.mode[b.usermap] && (this.style.cursor = "pointer", v(b, c, "Click to add a label"));
                    if ("mappath" == a.mode[b.usermap]) if ("undefined" !=
                        typeof a.path[b.usermap][1] && null !== a.path[b.usermap][1]) {
                        if ("undefined" != typeof a.coords[b.usermap] && 0 < a.coords[b.usermap].length) {
                            this.style.cursor = "pointer";
                            v(b, c, "Right Click to end a path");
                            var g = a.svgcoord[b.usermap];
                            g.x = c.clientX;
                            g.y = c.clientY;
                            g = w(g, a.g[b.usermap]);
                            g.x /= a.map[d].precision / a.factor[b.usermap];
                            g.y /= a.map[d].precision / a.factor[b.usermap];
                            var e = g.x, g = g.y;
                            a.path[b.usermap][1]._movingpoints = g + "," + e;
                            a.path[b.usermap][1].drawMapPath()
                        }
                    } else this.style.cursor = "pointer", v(b, c, "Click to start a path");
                    "mappoly" == a.mode[b.usermap] && ("undefined" != typeof a.poly[b.usermap][1] && null !== a.poly[b.usermap][1] ? "undefined" != typeof a.coords[b.usermap] && 0 < a.coords[b.usermap].length && (this.style.cursor = "pointer", 1 < a.coords[b.usermap].length && v(b, c, "Right Click to end a polygon"), g = a.svgcoord[b.usermap], g.x = c.clientX, g.y = c.clientY, g = w(g, a.g[b.usermap]), g.x /= a.map[d].precision / a.factor[b.usermap], g.y /= a.map[d].precision / a.factor[b.usermap], e = g.x, g = g.y, a.poly[b.usermap][1]._movingpoints = g + "," + e, a.poly[b.usermap][1].drawMapPoly()) :
                        (this.style.cursor = "pointer", v(b, c, "Click to start a polygon")));
                    "mapcircle" == a.mode[b.usermap] && ("undefined" != typeof a.circle[b.usermap][1] && null !== a.circle[b.usermap][1] ? "undefined" != typeof a.coords[b.usermap] && 1 == a.coords[b.usermap].length && (this.style.cursor = "pointer", v(b, c, "Right Click to end a circle"), g = a.svgcoord[b.usermap], g.x = c.clientX, g.y = c.clientY, g = w(g, a.g[b.usermap]), g.x /= a.map[d].precision / a.factor[b.usermap], g.y /= a.map[d].precision / a.factor[b.usermap], e = g.x, g = g.y, a.circle[b.usermap][1]._movingpoints =
                        g + "," + e, a.circle[b.usermap][1].drawMapCircle()) : (this.style.cursor = "pointer", v(b, c, "Click to start a circle")));
                    "maprect" == a.mode[b.usermap] && ("undefined" != typeof a.rect[b.usermap][1] && null !== a.rect[b.usermap][1] ? "undefined" != typeof a.coords[b.usermap] && 1 == a.coords[b.usermap].length && (this.style.cursor = "pointer", v(b, c, "Right Click to end a rectangle"), g = a.svgcoord[b.usermap], g.x = c.clientX, g.y = c.clientY, g = w(g, a.g[b.usermap]), g.x /= a.map[d].precision / a.factor[b.usermap], g.y /= a.map[d].precision / a.factor[b.usermap],
                        e = g.x, g = g.y, a.rect[b.usermap][1]._movingpoints = g + "," + e, a.rect[b.usermap][1].drawMapRect()) : (this.style.cursor = "pointer", v(b, c, "Click to start a rectangle")));
                    "mapcurve" == a.mode[b.usermap] && ("undefined" != typeof a.curve[b.usermap][1] && null !== a.curve[b.usermap][1] ? "undefined" != typeof a.coords[b.usermap] && 0 < a.coords[b.usermap].length && (this.style.cursor = "pointer", 1 < a.coords[b.usermap].length ? v(b, c, "Right Click to confirm the curvature") : v(b, c, "Click to define the end point of a curve"), g = a.svgcoord[b.usermap],
                        g.x = c.clientX, g.y = c.clientY, g = w(g, a.g[b.usermap]), g.x /= a.map[d].precision / a.factor[b.usermap], g.y /= a.map[d].precision / a.factor[b.usermap], e = g.x, g = g.y, a.curve[b.usermap][1]._movingpoints = g + "," + e, a.curve[b.usermap][1].drawMapCurve()) : (this.style.cursor = "pointer", v(b, c, "Click to define the starting point of a curve")));
                    c.preventDefault && c.preventDefault();
                    a.usermap[b.usermap].map.zoom_setting.draggable && this._mousedown && (10 < Math.abs(c.pageX - this._mousepositionx) || 10 < Math.abs(c.pageY - this._mousepositiony)) &&
                    (this._mapdragged = !0, e = (this._mousepositionx - c.pageX) / a.zoom[b.usermap].currentzoom, g = (this._mousepositiony - c.pageY) / a.zoom[b.usermap].currentzoom, this._mousepositionx = c.pageX, this._mousepositiony = c.pageY, a.zoom[b.usermap].currentx = h(a.zoom[b.usermap].currentx + e, a.precision), a.zoom[b.usermap].currenty = h(a.zoom[b.usermap].currenty - g, a.precision), y(b, a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].currenty, a.zoom[b.usermap].currentx))
                }, a.div[b.usermap].onmousedown = function (a) {
                    a.preventDefault && a.preventDefault();
                    this._mousepositionx = a.pageX;
                    this._mousepositiony = a.pageY;
                    this._mousedown = !0;
                    this._mapdragged = !1
                }, a.div[b.usermap].onmouseup = function (a) {
                    a.preventDefault && a.preventDefault();
                    this._mousedown = !1;
                    this._mousepositiony = this._mousepositionx = 0
                }, a.div[b.usermap].onmousewheel = function (c) {
                    c.preventDefault && c.preventDefault();
                    if (a.usermap[b.usermap].map.zoom_setting.mouseWheel) {
                        a.zoom[b.usermap].prevzoom = a.zoom[b.usermap].currentzoom;
                        c || (c = window.event);
                        var g = A(a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].initzoom *
                            a.zoom[b.usermap].rfactor);
                        c.wheelDelta && (0 < c.wheelDelta ? g < a.zoom[b.usermap].maxzoomlevel && (a.zoom[b.usermap].currentzoom = h(1.5 * a.zoom[b.usermap].currentzoom, a.precision)) : g > a.zoom[b.usermap].minzoomlevel && (a.zoom[b.usermap].currentzoom = h(a.zoom[b.usermap].currentzoom / 1.5, a.precision)));
                        var e = a.svgcoord[b.usermap];
                        e.x = c.clientX;
                        e.y = c.clientY;
                        for (var e = w(e, a.g[b.usermap]), f = this, l = 0, n = 0; f;) l += f.offsetLeft, n += f.offsetTop, f = f.offsetParent;
                        e.x /= a.map[d].precision / a.factor[b.usermap];
                        e.y /= a.map[d].precision /
                            a.factor[b.usermap];
                        0 < c.wheelDelta ? g < a.zoom[b.usermap].maxzoomlevel && (a.zoom[b.usermap].currentx = h(a.zoom[b.usermap].currentx - (parseFloat(this.style.width) / 2 - (c.pageX - l)) / a.zoom[b.usermap].currentzoom * .5, a.precision), a.zoom[b.usermap].currenty = h(a.zoom[b.usermap].currenty + (parseFloat(this.style.height) / 2 - (c.pageY - n)) / a.zoom[b.usermap].currentzoom * .5, a.precision), y(b, a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].currenty, a.zoom[b.usermap].currentx)) : g > a.zoom[b.usermap].minzoomlevel && (a.zoom[b.usermap].currentx =
                            h(a.zoom[b.usermap].currentx + (parseFloat(this.style.width) / 2 - (c.pageX - l)) / a.zoom[b.usermap].currentzoom * (1 - 1 / 1.5), a.precision), a.zoom[b.usermap].currenty = h(a.zoom[b.usermap].currenty - (parseFloat(this.style.height) / 2 - (c.pageY - n)) / a.zoom[b.usermap].currentzoom * (1 - 1 / 1.5), a.precision), y(b, a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].currenty, a.zoom[b.usermap].currentx))
                    }
                }, a.div[b.usermap].addEventListener)) {
                    var c = function (c) {
                        c.preventDefault && c.preventDefault();
                        if (a.usermap[b.usermap].map.zoom_setting.mouseWheel) {
                            a.zoom[b.usermap].prevzoom =
                                a.zoom[b.usermap].currentzoom;
                            c || (c = window.event);
                            var g = A(a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].initzoom * a.zoom[b.usermap].rfactor);
                            c.detail && (0 > c.detail ? g < a.zoom[b.usermap].maxzoomlevel && (a.zoom[b.usermap].currentzoom = h(1.5 * a.zoom[b.usermap].currentzoom, a.precision)) : g > a.zoom[b.usermap].minzoomlevel && (a.zoom[b.usermap].currentzoom = h(a.zoom[b.usermap].currentzoom / 1.5, a.precision)));
                            var e = a.svgcoord[b.usermap];
                            e.x = c.pageX;
                            e.y = c.pageY;
                            for (var e = w(e, a.g[b.usermap]), f = this, l = 0, n = 0; f;) l += f.offsetLeft,
                                n += f.offsetTop, f = f.offsetParent;
                            e.x /= a.map[d].precision / a.factor[b.usermap];
                            e.y /= a.map[d].precision / a.factor[b.usermap];
                            0 > c.detail ? g < a.zoom[b.usermap].maxzoomlevel && (a.zoom[b.usermap].currentx = h(a.zoom[b.usermap].currentx - (parseInt(this.style.width) / 2 - (c.pageX - l)) / a.zoom[b.usermap].currentzoom * .5, a.precision), a.zoom[b.usermap].currenty = h(a.zoom[b.usermap].currenty + (parseInt(this.style.height) / 2 - (c.pageY - n)) / a.zoom[b.usermap].currentzoom * .5, a.precision), y(b, a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].currenty,
                                a.zoom[b.usermap].currentx)) : g > a.zoom[b.usermap].minzoomlevel && (a.zoom[b.usermap].currentx = h(a.zoom[b.usermap].currentx + (parseInt(this.style.width) / 2 - (c.pageX - l)) / a.zoom[b.usermap].currentzoom * (1 - 1 / 1.5), a.precision), a.zoom[b.usermap].currenty = h(a.zoom[b.usermap].currenty - (parseInt(this.style.height) / 2 - (c.pageY - n)) / a.zoom[b.usermap].currentzoom * (1 - 1 / 1.5), a.precision), y(b, a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].currenty, a.zoom[b.usermap].currentx))
                        }
                    };
                    a.setMouseWheelEvent = function (a) {
                        c(a)
                    };
                    a.div[b.usermap].addEventListener("DOMMouseScroll",
                        c, !1)
                }
                a.touchdevices || (a.div[b.usermap].oncontextmenu = function (c) {
                    if ("mappath" == a.mode[b.usermap]) {
                        if (0 < a.coords[b.usermap].length) {
                            var g = a.svgcoord[b.usermap];
                            g.x = c.clientX;
                            g.y = c.clientY;
                            g = w(g, a.g[b.usermap]);
                            g.x /= a.map[d].precision / a.factor[b.usermap];
                            g.y /= a.map[d].precision / a.factor[b.usermap];
                            c = g.x;
                            g = g.y;
                            a.coords[b.usermap].push(h(g, a.precision) + "," + h(c, a.precision));
                            a.path[b.usermap][1]._movingpoints = "";
                            a.path[b.usermap][1].drawMapPath();
                            c = "";
                            for (g = 0; g < a.coords[b.usermap].length; g++) "" != c && (c +=
                                " "), c += a.coords[b.usermap][g];
                            var g = 0, e;
                            for (e in a.mappath[b.usermap]) a.mappath[b.usermap].hasOwnProperty(e) && "undefined" !== typeof a.mappath[b.usermap][e] && null !== a.mappath[b.usermap][e] && a.mappath[b.usermap][e]._id > g && (g = Number(a.mappath[b.usermap][e]._id));
                            e = {event: "newmappath", object: "mappath"};
                            e.points = c;
                            e.id = g + 1;
                            window.console && console.log(JSON.stringify(e));
                            a.coords[b.usermap].length = 0;
                            a.g[b.usermap].removeChild(a.path[b.usermap][1]);
                            a.path[b.usermap][1] = null
                        }
                        return !1
                    }
                    if ("mappoly" == a.mode[b.usermap]) {
                        if (1 <
                            a.coords[b.usermap].length) {
                            g = a.svgcoord[b.usermap];
                            g.x = c.clientX;
                            g.y = c.clientY;
                            g = w(g, a.g[b.usermap]);
                            g.x /= a.map[d].precision / a.factor[b.usermap];
                            g.y /= a.map[d].precision / a.factor[b.usermap];
                            c = g.x;
                            g = g.y;
                            a.coords[b.usermap].push(h(g, a.precision) + "," + h(c, a.precision));
                            a.poly[b.usermap][1]._movingpoints = "";
                            a.poly[b.usermap][1].drawMapPoly();
                            c = "";
                            for (g = 0; g < a.coords[b.usermap].length; g++) "" != c && (c += " "), c += a.coords[b.usermap][g];
                            g = 0;
                            for (e in a.mappoly[b.usermap]) a.mappoly[b.usermap].hasOwnProperty(e) &&
                            "undefined" !== typeof a.mappoly[b.usermap][e] && null !== a.mappoly[b.usermap][e] && a.mappoly[b.usermap][e]._id > g && (g = Number(a.mappoly[b.usermap][e]._id));
                            g += 1;
                            e = {event: "newmappoly", object: "mappoly"};
                            e.points = c;
                            e.id = g;
                            window.console && console.log(JSON.stringify(e));
                            a.coords[b.usermap].length = 0;
                            a.g[b.usermap].removeChild(a.poly[b.usermap][1]);
                            a.poly[b.usermap][1] = null
                        }
                        return !1
                    }
                    if ("mapcircle" == a.mode[b.usermap]) {
                        if (1 == a.coords[b.usermap].length) {
                            g = a.svgcoord[b.usermap];
                            g.x = c.clientX;
                            g.y = c.clientY;
                            g = w(g, a.g[b.usermap]);
                            g.x /= a.map[d].precision / a.factor[b.usermap];
                            g.y /= a.map[d].precision / a.factor[b.usermap];
                            c = g.x;
                            g = g.y;
                            a.coords[b.usermap].push(h(g, a.precision) + "," + h(c, a.precision));
                            a.circle[b.usermap][1]._movingpoints = "";
                            a.circle[b.usermap][1].drawMapCircle();
                            c = "";
                            for (g = 0; g < a.coords[b.usermap].length; g++) "" != c && (c += " "), c += a.coords[b.usermap][g];
                            g = 0;
                            for (e in a.mapcircle[b.usermap]) a.mapcircle[b.usermap].hasOwnProperty(e) && "undefined" !== typeof a.mapcircle[b.usermap][e] && null !== a.mapcircle[b.usermap][e] && a.mapcircle[b.usermap][e]._id >
                            g && (g = Number(a.mapcircle[b.usermap][e]._id));
                            g += 1;
                            e = {event: "newmapcircle", object: "mapcircle"};
                            e.points = c;
                            e.id = g;
                            window.console && console.log(JSON.stringify(e));
                            a.coords[b.usermap].length = 0;
                            a.g[b.usermap].removeChild(a.circle[b.usermap][1]);
                            a.circle[b.usermap][1] = null
                        }
                        return !1
                    }
                    if ("maprect" == a.mode[b.usermap]) {
                        if (1 == a.coords[b.usermap].length) {
                            g = a.svgcoord[b.usermap];
                            g.x = c.clientX;
                            g.y = c.clientY;
                            g = w(g, a.g[b.usermap]);
                            g.x /= a.map[d].precision / a.factor[b.usermap];
                            g.y /= a.map[d].precision / a.factor[b.usermap];
                            c = g.x;
                            var g = g.y, f = a.coords[b.usermap][0].split(",")[0], l = a.coords[b.usermap][0].split(",")[1];
                            a.coords[b.usermap].push(h(f, a.precision) + "," + h(c, a.precision));
                            a.coords[b.usermap].push(h(g, a.precision) + "," + h(c, a.precision));
                            a.coords[b.usermap].push(h(g, a.precision) + "," + h(l, a.precision));
                            a.rect[b.usermap][1]._movingpoints = "";
                            a.rect[b.usermap][1].drawMapRect();
                            c = "";
                            for (g = 0; g < a.coords[b.usermap].length; g++) "" != c && (c += " "), c += a.coords[b.usermap][g];
                            g = 0;
                            for (e in a.maprect[b.usermap]) a.maprect[b.usermap].hasOwnProperty(e) &&
                            "undefined" !== typeof a.maprect[b.usermap][e] && null !== a.maprect[b.usermap][e] && a.maprect[b.usermap][e]._id > g && (g = Number(a.maprect[b.usermap][e]._id));
                            g += 1;
                            e = {event: "newmaprect", object: "maprect"};
                            e.points = c;
                            e.id = g;
                            window.console && console.log(JSON.stringify(e));
                            a.coords[b.usermap].length = 0;
                            a.g[b.usermap].removeChild(a.rect[b.usermap][1]);
                            a.rect[b.usermap][1] = null
                        }
                        return !1
                    }
                    if ("mapcurve" == a.mode[b.usermap]) {
                        if (1 < a.coords[b.usermap].length) {
                            g = a.svgcoord[b.usermap];
                            g.x = c.clientX;
                            g.y = c.clientY;
                            g = w(g, a.g[b.usermap]);
                            g.x /= a.map[d].precision / a.factor[b.usermap];
                            g.y /= a.map[d].precision / a.factor[b.usermap];
                            c = g.x;
                            g = g.y;
                            a.coords[b.usermap].push(h(g, a.precision) + "," + h(c, a.precision));
                            a.curve[b.usermap][1]._movingpoints = "";
                            a.curve[b.usermap][1].drawMapCurve();
                            c = "";
                            for (g = 0; g < a.coords[b.usermap].length; g++) "" != c && (c += " "), c += a.coords[b.usermap][g];
                            g = 0;
                            for (e in a.mapcurve[b.usermap]) a.mapcurve[b.usermap].hasOwnProperty(e) && "undefined" !== typeof a.mapcurve[b.usermap][e] && null !== a.mapcurve[b.usermap][e] && a.mapcurve[b.usermap][e]._id >
                            g && (g = Number(a.mapcurve[b.usermap][e]._id));
                            g += 1;
                            e = {event: "newmapcurve", object: "mapcurve"};
                            e.points = c;
                            e.id = g;
                            window.console && console.log(JSON.stringify(e));
                            a.coords[b.usermap].length = 0;
                            a.g[b.usermap].removeChild(a.curve[b.usermap][1]);
                            a.curve[b.usermap][1] = null
                        }
                        return !1
                    }
                }, a.div[b.usermap].onclick = function (c) {
                    if (!this._mapdragged && !this._transformed && "normal" != a.mode[b.usermap] && "edit" != a.mode[b.usermap]) {
                        if ("marker" == a.mode[b.usermap]) {
                            var e = a.svgcoord[b.usermap];
                            e.x = c.clientX;
                            e.y = c.clientY;
                            e = w(e,
                                a.g[b.usermap]);
                            e.x /= a.map[d].precision / a.factor[b.usermap];
                            e.y /= a.map[d].precision / a.factor[b.usermap];
                            var f = e.x, e = e.y, l = 0, q;
                            for (q in a.marker[b.usermap]) a.marker[b.usermap].hasOwnProperty(q) && "undefined" !== typeof a.marker[b.usermap][q] && null !== a.marker[b.usermap][q] && a.marker[b.usermap][q]._id > l && (l = Number(a.marker[b.usermap][q]._id));
                            var l = l + 1, n = {event: "newmarker", object: "marker"};
                            n.y = h(e, a.precision);
                            n.x = h(f, a.precision);
                            n.id = l;
                            window.console && console.log(JSON.stringify(n))
                        }
                        if ("maplabel" == a.mode[b.usermap]) {
                            e =
                                a.svgcoord[b.usermap];
                            e.x = c.clientX;
                            e.y = c.clientY;
                            e = w(e, a.g[b.usermap]);
                            e.x /= a.map[d].precision / a.factor[b.usermap];
                            e.y /= a.map[d].precision / a.factor[b.usermap];
                            f = e.x;
                            e = e.y;
                            l = 0;
                            for (q in a.maplabel[b.usermap]) a.maplabel[b.usermap].hasOwnProperty(q) && "undefined" !== typeof a.maplabel[b.usermap][q] && null !== a.maplabel[b.usermap][q] && a.maplabel[b.usermap][q]._id > l && (l = Number(a.maplabel[b.usermap][q]._id));
                            l += 1;
                            n = {event: "newmaplabel", object: "maplabel"};
                            n.y = h(e, a.precision);
                            n.x = h(f, a.precision);
                            n.id = l;
                            window.console &&
                            console.log(JSON.stringify(n))
                        }
                        "mappath" == a.mode[b.usermap] && (e = a.svgcoord[b.usermap], e.x = c.clientX, e.y = c.clientY, e = w(e, a.g[b.usermap]), e.x /= a.map[d].precision / a.factor[b.usermap], e.y /= a.map[d].precision / a.factor[b.usermap], f = e.x, e = e.y, a.coords[b.usermap].push(h(e, a.precision) + "," + h(f, a.precision)), "undefined" != typeof a.path[b.usermap][1] && null !== a.path[b.usermap][1] ? a.path[b.usermap][1].addPoint(h(e, a.precision), h(f, a.precision)) : (Y.points = h(e, a.precision) + "," + h(f, a.precision), a.path[b.usermap][1] =
                            new P(b, 0, Y)), a.path[b.usermap][1].drawMapPath());
                        "mappoly" == a.mode[b.usermap] && (e = a.svgcoord[b.usermap], e.x = c.clientX, e.y = c.clientY, e = w(e, a.g[b.usermap]), e.x /= a.map[d].precision / a.factor[b.usermap], e.y /= a.map[d].precision / a.factor[b.usermap], f = e.x, e = e.y, a.coords[b.usermap].push(h(e, a.precision) + "," + h(f, a.precision)), "undefined" != typeof a.poly[b.usermap][1] && null !== a.poly[b.usermap][1] ? a.poly[b.usermap][1].addPoint(h(e, a.precision), h(f, a.precision)) : (Z.points = h(e, a.precision) + "," + h(f, a.precision),
                            a.poly[b.usermap][1] = new O(b, 0, Z)), a.poly[b.usermap][1].drawMapPoly());
                        "mapcircle" == a.mode[b.usermap] && 0 == a.coords[b.usermap].length && (e = a.svgcoord[b.usermap], e.x = c.clientX, e.y = c.clientY, e = w(e, a.g[b.usermap]), e.x /= a.map[d].precision / a.factor[b.usermap], e.y /= a.map[d].precision / a.factor[b.usermap], f = e.x, e = e.y, a.coords[b.usermap].push(h(e, a.precision) + "," + h(f, a.precision)), aa.points = h(e, a.precision) + "," + h(f, a.precision), a.circle[b.usermap][1] = new N(b, 0, aa), a.circle[b.usermap][1]._movingpoints = h(e, a.precision) +
                            "," + h(f, a.precision), a.circle[b.usermap][1].drawMapCircle());
                        "maprect" == a.mode[b.usermap] && 0 == a.coords[b.usermap].length && (e = a.svgcoord[b.usermap], e.x = c.clientX, e.y = c.clientY, e = w(e, a.g[b.usermap]), e.x /= a.map[d].precision / a.factor[b.usermap], e.y /= a.map[d].precision / a.factor[b.usermap], f = e.x, e = e.y, a.coords[b.usermap].push(h(e, a.precision) + "," + h(f, a.precision)), ba.points = h(e, a.precision) + "," + h(f, a.precision), a.rect[b.usermap][1] = new M(b, 0, ba), a.rect[b.usermap][1]._movingpoints = h(e, a.precision) + "," + h(f,
                            a.precision), a.rect[b.usermap][1].drawMapRect());
                        "mapcurve" == a.mode[b.usermap] && 2 > a.coords[b.usermap].length && (e = a.svgcoord[b.usermap], e.x = c.clientX, e.y = c.clientY, e = w(e, a.g[b.usermap]), e.x /= a.map[d].precision / a.factor[b.usermap], e.y /= a.map[d].precision / a.factor[b.usermap], f = e.x, e = e.y, a.coords[b.usermap].push(h(e, a.precision) + "," + h(f, a.precision)), "undefined" != typeof a.curve[b.usermap][1] && null !== a.curve[b.usermap][1] ? a.curve[b.usermap][1].addPoint(h(e, a.precision), h(f, a.precision)) : (ca.points = h(e,
                            a.precision) + "," + h(f, a.precision), a.curve[b.usermap][1] = new L(b, 0, ca)), a.curve[b.usermap][1].drawMapCurve())
                    }
                });
                a.touchdevices && (a.div[b.usermap].ontouchstart = function (c) {
                    c.preventDefault && c.preventDefault();
                    0 < a.infobox[b.usermap].length && (document.getElementById("imap5custom_" + b.usermap + "_infobox_" + a.infobox[b.usermap][0].object + "_" + a.infobox[b.usermap][0].id) && a.div[b.usermap].removeChild(document.getElementById("imap5custom_" + b.usermap + "_infobox_" + a.infobox[b.usermap][0].object + "_" + a.infobox[b.usermap][0].id)),
                        a.infobox[b.usermap].pop());
                    this._mousedown = !0;
                    1 == c.touches.length ? (this._mousepositionx = c.touches[0].pageX, this._mousepositiony = c.touches[0].pageY, this._mapdragged = !1) : 2 == c.touches.length && (this._transformed = !0, this._pos = {}, this._pos.start = [], this._pos.start[0] = {}, this._pos.start[1] = {}, this._pos.start[0].x = c.touches[0].pageX, this._pos.start[0].y = c.touches[0].pageY, this._pos.start[1].x = c.touches[1].pageX, this._pos.start[1].y = c.touches[1].pageY)
                });
                a.touchdevices && (a.div[b.usermap].ontouchmove = function (c) {
                    var e;
                    c.preventDefault && c.preventDefault();
                    if (!this._mousedown) return !1;
                    if (1 == c.touches.length) {
                        if (a.usermap[b.usermap].map.zoom_setting.draggable && !this._transformed && (10 < Math.abs(c.touches[0].pageX - this._mousepositionx) || 10 < Math.abs(c.touches[0].pageY - this._mousepositiony))) {
                            this._mapdragged = !0;
                            var f = (this._mousepositiony - c.touches[0].pageY) / a.zoom[b.usermap].currentzoom;
                            a.zoom[b.usermap].currentx = h(a.zoom[b.usermap].currentx + (this._mousepositionx - c.touches[0].pageX) / a.zoom[b.usermap].currentzoom, a.precision);
                            a.zoom[b.usermap].currenty = h(a.zoom[b.usermap].currenty - f, a.precision);
                            this._mousepositionx = c.touches[0].pageX;
                            this._mousepositiony = c.touches[0].pageY;
                            y(b, a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].currenty, a.zoom[b.usermap].currentx)
                        }
                    } else if (2 == c.touches.length && a.usermap[b.usermap].map.zoom_setting.mouseWheel) {
                        a.zoom[b.usermap].prevzoom = a.zoom[b.usermap].currentzoom;
                        f = A(a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].initzoom * a.zoom[b.usermap].rfactor);
                        this._pos.move = [];
                        this._pos.move[0] =
                            {};
                        this._pos.move[1] = {};
                        this._pos.move[0].x = c.touches[0].pageX;
                        this._pos.move[0].y = c.touches[0].pageY;
                        this._pos.move[1].x = c.touches[1].pageX;
                        this._pos.move[1].y = c.touches[1].pageY;
                        var l = H(this._pos.move[0], this._pos.move[1]), q = H(this._pos.start[0], this._pos.start[1]);
                        h(a.zoom[b.usermap].currentzoom);
                        e = this._pos.start[0];
                        var n = this._pos.start[1];
                        c = (e.x + n.x) / 2;
                        e = (n.y + e.y) / 2;
                        n = a.svgcoord[b.usermap];
                        n.x = c;
                        n.y = e;
                        for (var n = w(n, a.g[b.usermap]), m = this, r = 0, v = 0; m;) r += m.offsetLeft, v += m.offsetTop, m = m.offsetParent;
                        n.x /= a.map[d].precision / a.factor[b.usermap];
                        n.y /= a.map[d].precision / a.factor[b.usermap];
                        50 < Math.abs(l - q) && (this._transformed = !0, l > q ? f < a.zoom[b.usermap].maxzoomlevel && (a.zoom[b.usermap].currentzoom = h(1.5 * a.zoom[b.usermap].currentzoom, a.precision), a.zoom[b.usermap].currentx = h(a.zoom[b.usermap].currentx - (parseInt(this.style.width) / 2 - (c - r)) / a.zoom[b.usermap].currentzoom * .5, a.precision), a.zoom[b.usermap].currenty = h(a.zoom[b.usermap].currenty + (parseInt(this.style.height) / 2 - (e - v)) / a.zoom[b.usermap].currentzoom *
                            .5, a.precision), y(b, a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].currenty, a.zoom[b.usermap].currentx)) : f > a.zoom[b.usermap].minzoomlevel && (a.zoom[b.usermap].currentzoom = h(a.zoom[b.usermap].currentzoom / 1.5, a.precision), a.zoom[b.usermap].currentx = h(a.zoom[b.usermap].currentx + (parseInt(this.style.width) / 2 - (c - r)) / a.zoom[b.usermap].currentzoom * (1 - 1 / 1.5), a.precision), a.zoom[b.usermap].currenty = h(a.zoom[b.usermap].currenty - (parseInt(this.style.height) / 2 - (e - v)) / a.zoom[b.usermap].currentzoom * (1 - 1 / 1.5), a.precision),
                            y(b, a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].currenty, a.zoom[b.usermap].currentx)), this._pos.start[0].x = this._pos.move[0].x, this._pos.start[0].y = this._pos.move[0].y, this._pos.start[1].x = this._pos.move[1].x, this._pos.start[1].y = this._pos.move[1].y)
                    }
                });
                a.touchdevices && (a.div[b.usermap].ontouchend = function (a) {
                    a.preventDefault && a.preventDefault();
                    0 == a.touches.length && (this._mousedown = this._mapdragged = this._transformed = !1, this._mousepositiony = this._mousepositionx = 0, this._pos = {})
                });
                a.background[b.usermap] =
                    document.createElement("div");
                for (var q in a.usermap[b.usermap].div.style) a.usermap[b.usermap].div.style.hasOwnProperty(q) && ("backgroundImage" == q ? "" != a.usermap[b.usermap].div.style[q] && (a.background[b.usermap].style[q] = "url('" + a.base[b.usermap] + a.usermap[b.usermap].div.style[q] + "?" + Math.random(1E5) + "')") : a.background[b.usermap].style[q] = a.usermap[b.usermap].div.style[q]);
                a.background[b.usermap].style.position = "absolute";
                a.background[b.usermap].style.top = "0px";
                a.background[b.usermap].style.left = "0px";
                a.background[b.usermap].style.width = "100%";
                a.background[b.usermap].style.height = "100%";
                a.div[b.usermap].appendChild(a.background[b.usermap]);
                a.foreground[b.usermap] = document.createElement("div");
                a.foreground[b.usermap].style.width = "100%";
                a.foreground[b.usermap].style.height = "100%";
                a.foreground[b.usermap].style.position = "absolute";
                a.foreground[b.usermap].style.top = a.usermap[b.usermap].div.style.borderWidth;
                a.foreground[b.usermap].style.left = a.usermap[b.usermap].div.style.borderWidth;
                a.div[b.usermap].appendChild(a.foreground[b.usermap]);
                a.zoomcontrol[b.usermap] = document.createElement("div");
                a.zoomcontrol[b.usermap].style.position = "absolute";
                a.zoomcontrol[b.usermap].style.top = parseInt(a.usermap[b.usermap].div.style.borderWidth) + 5 + "px";
                a.zoomcontrol[b.usermap].style.left = parseInt(a.usermap[b.usermap].div.style.borderWidth) + 5 + "px";
                a.zoomcontrol[b.usermap].style.backgroundColor = "rgba(0,0,0,0)";
                a.panhome[b.usermap] = document.createElement("div");
                a.panhome[b.usermap].style.width = a.touchdevices ? "24px" : "16px";
                a.panhome[b.usermap].style.height =
                    a.touchdevices ? "24px" : "16px";
                a.panhome[b.usermap].style.position = "absolute";
                a.panhome[b.usermap].style.top = "5px";
                a.panhome[b.usermap].style.left = "5px";
                a.panhome[b.usermap].style.backgroundColor = a.usermap[b.usermap].map.zoom_setting.style.backgroundColor;
                a.panhome[b.usermap].style.borderWidth = "1px";
                a.panhome[b.usermap].style.borderColor = a.usermap[b.usermap].map.zoom_setting.style.borderColor;
                a.panhome[b.usermap].style.borderStyle = "solid";
                a.panhome[b.usermap].style.borderRadius = "2px";
                a.panhome[b.usermap].unselectable =
                    "on";
                a.panhome[b.usermap].style.visibility = "undefined" != typeof a.usermap[b.usermap].map.zoom_setting.homeControl ? a.usermap[b.usermap].map.zoom_setting.homeControl ? "visible" : "hidden" : "visible";
                a.panhome[b.usermap].style.cursor = "pointer";
                a.panhome[b.usermap].title = "home";
                l = r("svg");
                l.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                l.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
                l.setAttribute("version", "1.1");
                a.touchdevices ? (l.setAttribute("width", "24px"), l.setAttribute("height", "24px")) :
                    (l.setAttribute("width", "16px"), l.setAttribute("height", "16px"));
                l.style.overflow = "hidden";
                f = r("polyline");
                a.touchdevices ? f.setAttribute("points", "3,14 12,3 21,14") : f.setAttribute("points", "2.5,9.5 8.5,3.5 14.5,9.5");
                f.style.fill = "none";
                f.style.stroke = a.usermap[b.usermap].map.zoom_setting.style.symbolColor;
                f.style.strokeWidth = 1.5;
                l.appendChild(f);
                f = r("polyline");
                a.touchdevices ? f.setAttribute("points", "4.5,14 4.5,22 19.5,22 19.5,14") : f.setAttribute("points", "4.5,7.5 4.5,14.5 12.5,14.5 12.5,7.5");
                f.style.fill =
                    "none";
                f.style.stroke = a.usermap[b.usermap].map.zoom_setting.style.symbolColor;
                f.style.strokeWidth = 1;
                l.appendChild(f);
                f = r("polyline");
                a.touchdevices ? f.setAttribute("points", "9.5,22 9.5,13.5 14.5,13.5 14.5,22") : f.setAttribute("points", "6.5,14.5 6.5,9.5 10.5,9.5 10.5,14.5");
                f.style.fill = "none";
                f.style.stroke = a.usermap[b.usermap].map.zoom_setting.style.symbolColor;
                f.style.strokeWidth = 1;
                l.appendChild(f);
                a.panhome[b.usermap].appendChild(l);
                a.panhome[b.usermap].onmouseup = function (a) {
                };
                a.panhome[b.usermap].onmousedown =
                    function (a) {
                    };
                a.panhome[b.usermap].onmousemove = function (a) {
                };
                a.panhome[b.usermap].onmousewheel = function (a) {
                };
                a.panhome[b.usermap].addEventListener && a.panhome[b.usermap].addEventListener("DOMMouseScroll", function (a) {
                }, !1);
                a.panhome[b.usermap].onclick = function (c) {
                    c.stopPropagation && c.stopPropagation();
                    y(b, a.usermap[b.usermap].map.zoom * a.zoom[b.usermap].rfactor, a.usermap[b.usermap].map.y, a.usermap[b.usermap].map.x)
                };
                a.touchdevices && (a.panhome[b.usermap].ontouchstart = function (a) {
                    a.preventDefault && a.preventDefault();
                    a.stopPropagation && a.stopPropagation();
                    this._touch = 1 == a.touches.length ? !0 : !1
                });
                a.touchdevices && (a.panhome[b.usermap].ontouchend = function (c) {
                    this._touch && y(b, a.usermap[b.usermap].map.zoom * a.zoom[b.usermap].rfactor, a.usermap[b.usermap].map.y, a.usermap[b.usermap].map.x)
                });
                a.zoomcontrol[b.usermap].appendChild(a.panhome[b.usermap]);
                a.zoomin[b.usermap] = document.createElement("div");
                a.zoomin[b.usermap].style.width = a.touchdevices ? "24px" : "16px";
                a.zoomin[b.usermap].style.height = a.touchdevices ? "24px" : "16px";
                a.zoomin[b.usermap].style.position = "absolute";
                a.zoomin[b.usermap].style.top = a.touchdevices ? "34px" : "24px";
                a.zoomin[b.usermap].style.left = "5px";
                a.zoomin[b.usermap].style.backgroundColor = a.usermap[b.usermap].map.zoom_setting.style.backgroundColor;
                a.zoomin[b.usermap].style.borderWidth = "1px";
                a.zoomin[b.usermap].style.borderColor = a.usermap[b.usermap].map.zoom_setting.style.borderColor;
                a.zoomin[b.usermap].style.borderStyle = "solid";
                a.zoomin[b.usermap].style.borderRadius = "2px";
                a.zoomin[b.usermap].style.unselectable =
                    "on";
                a.zoomin[b.usermap].style.visibility = "undefined" != typeof a.usermap[b.usermap].map.zoom_setting.zoomControl ? a.usermap[b.usermap].map.zoom_setting.zoomControl ? "visible" : "hidden" : "visible";
                a.zoomin[b.usermap].style.cursor = "pointer";
                a.zoomin[b.usermap].title = "zoom in";
                l = r("svg");
                l.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                l.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
                l.setAttribute("version", "1.1");
                a.touchdevices ? (l.setAttribute("width", "24px"), l.setAttribute("height", "24px")) :
                    (l.setAttribute("width", "16px"), l.setAttribute("height", "16px"));
                l.style.overflow = "hidden";
                f = r("polyline");
                a.touchdevices ? f.setAttribute("points", "4,12 20,12") : f.setAttribute("points", "3,8 13,8");
                f.style.fill = "none";
                f.style.stroke = a.usermap[b.usermap].map.zoom_setting.style.symbolColor;
                f.style.strokeWidth = 2;
                l.appendChild(f);
                f = r("polyline");
                a.touchdevices ? f.setAttribute("points", "12,4 12,20") : f.setAttribute("points", "8,3 8,13");
                f.style.fill = "none";
                f.style.stroke = a.usermap[b.usermap].map.zoom_setting.style.symbolColor;
                f.style.strokeWidth = 2;
                l.appendChild(f);
                a.zoomin[b.usermap].appendChild(l);
                a.zoomin[b.usermap].onmouseup = function (a) {
                };
                a.zoomin[b.usermap].onmousedown = function (a) {
                };
                a.zoomin[b.usermap].onmousemove = function (a) {
                };
                a.zoomin[b.usermap].onmousewheel = function (a) {
                };
                a.zoomin[b.usermap].addEventListener && a.zoomin[b.usermap].addEventListener("DOMMouseScroll", function (a) {
                }, !1);
                a.zoomin[b.usermap].onclick = function (c) {
                    c.preventDefault && c.preventDefault();
                    c.stopPropagation && c.stopPropagation();
                    a.zoom[b.usermap].prevzoom =
                        a.zoom[b.usermap].currentzoom;
                    A(a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].initzoom * a.zoom[b.usermap].rfactor) < a.zoom[b.usermap].maxzoomlevel && (a.zoom[b.usermap].currentzoom = h(1.5 * a.zoom[b.usermap].currentzoom, a.precision), y(b, a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].currenty, a.zoom[b.usermap].currentx))
                };
                a.touchdevices && (a.zoomin[b.usermap].ontouchstart = function (a) {
                    a.preventDefault && a.preventDefault();
                    a.stopPropagation && a.stopPropagation();
                    this._touch = 1 == a.touches.length ? !0 : !1
                });
                a.touchdevices &&
                (a.zoomin[b.usermap].ontouchend = function (c) {
                    a.zoom[b.usermap].prevzoom = a.zoom[b.usermap].currentzoom;
                    c = A(a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].initzoom * a.zoom[b.usermap].rfactor);
                    this._touch && c < a.zoom[b.usermap].maxzoomlevel && (a.zoom[b.usermap].currentzoom = h(1.5 * a.zoom[b.usermap].currentzoom, a.precision), y(b, a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].currenty, a.zoom[b.usermap].currentx))
                });
                a.zoomcontrol[b.usermap].appendChild(a.zoomin[b.usermap]);
                a.zoomout[b.usermap] = document.createElement("div");
                a.zoomout[b.usermap].style.width = a.touchdevices ? "24px" : "16px";
                a.zoomout[b.usermap].style.height = a.touchdevices ? "24px" : "16px";
                a.zoomout[b.usermap].style.position = "absolute";
                a.zoomout[b.usermap].style.top = a.touchdevices ? "63px" : "43px";
                a.zoomout[b.usermap].style.left = "5px";
                a.zoomout[b.usermap].style.backgroundColor = a.usermap[b.usermap].map.zoom_setting.style.backgroundColor;
                a.zoomout[b.usermap].style.borderWidth = "1px";
                a.zoomout[b.usermap].style.borderColor = a.usermap[b.usermap].map.zoom_setting.style.borderColor;
                a.zoomout[b.usermap].style.borderStyle = "solid";
                a.zoomout[b.usermap].style.borderRadius = "2px";
                a.zoomout[b.usermap].unselectable = "on";
                a.zoomout[b.usermap].style.visibility = "undefined" != typeof a.usermap[b.usermap].map.zoom_setting.zoomControl ? a.usermap[b.usermap].map.zoom_setting.zoomControl ? "visible" : "hidden" : "visible";
                a.zoomout[b.usermap].style.cursor = "pointer";
                a.zoomout[b.usermap].title = "zoom out";
                l = r("svg");
                l.setAttribute("xmlns", "http://www.w3.org/2000/svg");
                l.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
                l.setAttribute("version", "1.1");
                a.touchdevices ? (l.setAttribute("width", "24px"), l.setAttribute("height", "24px")) : (l.setAttribute("width", "16px"), l.setAttribute("height", "16px"));
                l.style.overflow = "hidden";
                f = r("polyline");
                a.touchdevices ? f.setAttribute("points", "4,12 20,12") : f.setAttribute("points", "3,8 13,8");
                f.style.fill = "none";
                f.style.stroke = a.usermap[b.usermap].map.zoom_setting.style.symbolColor;
                f.style.strokeWidth = 2;
                l.appendChild(f);
                a.zoomout[b.usermap].appendChild(l);
                a.zoomout[b.usermap].onmouseup =
                    function (a) {
                    };
                a.zoomout[b.usermap].onmousedown = function (a) {
                };
                a.zoomout[b.usermap].onmousemove = function (a) {
                };
                a.zoomout[b.usermap].onmousewheel = function (a) {
                };
                a.zoomout[b.usermap].addEventListener && a.zoomout[b.usermap].addEventListener("DOMMouseScroll", function (a) {
                }, !1);
                a.zoomout[b.usermap].onclick = function (c) {
                    c.stopPropagation && c.stopPropagation();
                    a.zoom[b.usermap].prevzoom = a.zoom[b.usermap].currentzoom;
                    A(a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].initzoom * a.zoom[b.usermap].rfactor) > a.zoom[b.usermap].minzoomlevel &&
                    (a.zoom[b.usermap].currentzoom = h(a.zoom[b.usermap].currentzoom / 1.5, a.precision), y(b, a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].currenty, a.zoom[b.usermap].currentx))
                };
                a.touchdevices && (a.zoomout[b.usermap].ontouchstart = function (a) {
                    a.preventDefault && a.preventDefault();
                    a.stopPropagation && a.stopPropagation();
                    this._touch = 1 == a.touches.length ? !0 : !1
                });
                a.touchdevices && (a.zoomout[b.usermap].ontouchend = function (c) {
                    this._touch && (a.zoom[b.usermap].prevzoom = a.zoom[b.usermap].currentzoom, A(a.zoom[b.usermap].currentzoom,
                        a.zoom[b.usermap].initzoom * a.zoom[b.usermap].rfactor) > a.zoom[b.usermap].minzoomlevel && (a.zoom[b.usermap].currentzoom = h(a.zoom[b.usermap].currentzoom / 1.5, a.precision), y(b, a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].currenty, a.zoom[b.usermap].currentx)))
                });
                a.zoomcontrol[b.usermap].appendChild(a.zoomout[b.usermap]);
                a.div[b.usermap].appendChild(a.zoomcontrol[b.usermap]);
                a.local && (l = document.createElement("script"), l.type = "application/javascript", l.src = b.base + "/static/iiCreator/imap5custommap_" + a.usermap[b.usermap].map.id +
                    ".js?" + Math.random(1E5), l.onerror = function () {
                }, l.onload = function () {
                    ka(b)
                }, document.body.appendChild(l))
            }, r = function (a) {
                return document.createElementNS("http://www.w3.org/2000/svg", a)
            }, K = function (b) {
                for (var d in a.usermap[b.usermap].map.mappoly) a.usermap[b.usermap].map.mappoly.hasOwnProperty(d) && a.mappoly[b.usermap].hasOwnProperty(d) && a.mappoly[b.usermap][d].toggleCategory();
                for (d in a.usermap[b.usermap].map.mapcircle) a.usermap[b.usermap].map.mapcircle.hasOwnProperty(d) && a.mapcircle[b.usermap].hasOwnProperty(d) &&
                a.mapcircle[b.usermap][d].toggleCategory();
                for (d in a.usermap[b.usermap].map.maprect) a.usermap[b.usermap].map.maprect.hasOwnProperty(d) && a.maprect[b.usermap].hasOwnProperty(d) && a.maprect[b.usermap][d].toggleCategory();
                for (d in a.usermap[b.usermap].map.mappath) a.usermap[b.usermap].map.mappath.hasOwnProperty(d) && a.mappath[b.usermap].hasOwnProperty(d) && a.mappath[b.usermap][d].toggleCategory();
                for (d in a.usermap[b.usermap].map.mapcurve) a.usermap[b.usermap].map.mapcurve.hasOwnProperty(d) && a.mapcurve[b.usermap].hasOwnProperty(d) &&
                a.mapcurve[b.usermap][d].toggleCategory();
                for (d in a.usermap[b.usermap].map.maplabel) a.usermap[b.usermap].map.maplabel.hasOwnProperty(d) && a.maplabel[b.usermap].hasOwnProperty(d) && a.maplabel[b.usermap][d].toggleCategory();
                for (d in a.usermap[b.usermap].map.marker) a.usermap[b.usermap].map.marker.hasOwnProperty(d) && a.marker[b.usermap].hasOwnProperty(d) && a.marker[b.usermap][d].toggleCategory();
                for (d in a.usermap[b.usermap].map.maplegend) a.usermap[b.usermap].map.maplegend.hasOwnProperty(d) && a.maplegend[b.usermap].hasOwnProperty(d) &&
                a.maplegend[b.usermap][d].toggleCategory()
            }, A = function (a, d) {
                for (var h = d * Math.pow(1 / 1.5, 4), f = -1, e = 0; 20 > e; e++) if (.01 > Math.abs(a - h * Math.pow(1.5, e))) {
                    f = e + 1;
                    break
                }
                return f
            }, H = function (a, d) {
                var h = d.x - a.x, f = d.y - a.y;
                return Math.sqrt(h * h + f * f)
            }, h = function (a, d) {
                var h = Math.pow(10, d);
                return Math.round(a * h) / h
            }, C = function (a) {
                return "#" == a.charAt(0) ? a.substring(1, 7) : a
            }, B = function (a) {
                divhint = document.getElementById("imap5custom_" + a.usermap + "_hint");
                divhint.style.display = "none"
            }, v = function (b, d, h) {
                var f;
                document.getElementById("imap5custom_" +
                    b.usermap + "_hint") ? f = document.getElementById("imap5custom_" + b.usermap + "_hint") : (f = document.createElement("div"), f.id = "imap5custom_" + b.usermap + "_hint", a.div[b.usermap].appendChild(f));
                f.style.backgroundColor = "#FFFF88";
                f.style.pointerEvents = "none";
                f.style.position = "fixed";
                f.style.padding = "2px";
                f.style.margin = "5px";
                f.style.border = "1px solid gray";
                f.style.borderRadius = "5px";
                f.style.top = d.clientY + 10 + "px";
                f.style.left = d.clientX + 10 + "px";
                f.style.font = "12px Arial";
                f.style.display = "block";
                f.innerHTML = h
            }, J =
                function (a, d, h, f) {
                    var e, c, q, k;
                    e = 2 * Math.PI / 3;
                    f = f / 180 * Math.PI;
                    a -= h / 2 * Math.cos(f);
                    d += h / 2 * Math.sin(f);
                    var g;
                    g = "M " + (a + Math.cos(f) * h) + "," + (d - Math.sin(f) * h);
                    for (c = 1; 4 >= c; c++) q = a + Math.cos(f + e * c) * h, k = d - Math.sin(f + e * c) * h, g = 2 >= c ? g + " M " + q + "," + k : g + " L " + q + "," + k;
                    return g
                }, I = function (a, d, h, f) {
                var e, c, q, k;
                e = 2 * Math.PI / 3;
                f = f / 180 * Math.PI;
                a -= h / 2 * Math.cos(f);
                d += h / 2 * Math.sin(f);
                var g;
                g = "" + (a + Math.cos(f) * h) + "," + (d - Math.sin(f) * h);
                for (c = 1; 3 >= c; c++) q = a + Math.cos(f + e * c) * h, k = d - Math.sin(f + e * c) * h, g = g + " " + q + "," + k;
                return g
            }, F =
                function (a, d, h, f, e) {
                    var c = 180 * Math.atan((f - d) / (h - a)) / Math.PI;
                    0 != c ? 0 < c ? f > d ? (a = 180 - c, c = 360 - c) : (a = 360 - c, c = 180 - c) : f > d ? (a = 360 - c, c = 180 - c) : (a = 180 - c, c = 360 - c) : h > a ? (a = 180, c = 0) : (a = 0, c = 180);
                    0 == e && (result = a);
                    1 == e && (result = c);
                    return result
                };
        window.imap5custom = {};
        var a = window.imap5custom;
        a.div = [];
        a.background = [];
        a.foreground = [];
        a.usermap = [];
        a.map = [];
        a.mode = [];
        a.svg = [];
        a.g = [];
        a.svgcoord = [];
        a.zoom = [];
        a.zoomcontrol = [];
        a.panhome = [];
        a.zoomin = [];
        a.zoomout = [];
        a.selected = [];
        a.infobox = [];
        a.coords = [];
        a.selectedOverlay = [];
        a.selectedVerticesObj = [];
        a.marker = [];
        a.maplabel = [];
        a.mappath = [];
        a.mappoly = [];
        a.maprect = [];
        a.mapcurve = [];
        a.maplegend = [];
        a.mapcircle = [];
        a.path = [];
        a.poly = [];
        a.rect = [];
        a.curve = [];
        a.circle = [];
        a.center = [];
        a.categorylegend = [];
        a.maptitle = [];
        a.base = [];
        a.responsivemap = [];
        a.wmark = [];
        a.precision = 6;
        a.factor = [];
        a.setMode = function (b) {
            a.mode[b.usermap] = b.mode;
            if ("edit" == a.mode[b.usermap]) for (var d in a.maplabel[b.usermap]) a.maplabel[b.usermap].hasOwnProperty(d) && (a.maplabel[b.usermap][d].getElementsByTagName("text")[0].style.pointerEvents =
                "auto"); else for (d in a.maplabel[b.usermap]) a.maplabel[b.usermap].hasOwnProperty(d) && (a.maplabel[b.usermap][d].getElementsByTagName("text")[0].style.pointerEvents = "none");
            K(b)
        };
        a.setCategoryLegend = function (b) {
            var d = "undefined" == typeof a.usermap[b.usermap].map.categorylegend ? !1 : a.usermap[b.usermap].map.categorylegend.enable;
            a.usermap[b.usermap].map.categorylegend = b.categorylegend;
            a.usermap[b.usermap].map.categorylegend.enable ? d ? (a.categorylegend[b.usermap].setOptions(b.categorylegend), a.categorylegend[b.usermap].drawCategoryLegend(),
                a.updateCategoryLegend(b)) : a.categorylegend[b.usermap] = new R(b, a.usermap[b.usermap].map.categorylegend) : d && a.categorylegend[b.usermap].remove();
            K(b)
        };
        a.setMapTitle = function (b) {
            a.usermap[b.usermap].map.maptitle = b.maptitle;
            "undefined" !== typeof a.maptitle[b.usermap] && null !== a.maptitle[b.usermap] ? (a.maptitle[b.usermap].setOptions(b.maptitle), a.maptitle[b.usermap].drawMapTitle()) : a.maptitle[b.usermap] = new S(b, b.maptitle)
        };
        a.setZoomSetting = function (b) {
            for (var d in b.zoom_setting) b.zoom_setting.hasOwnProperty(d) &&
            (a.usermap[b.usermap].map.zoom_setting[d] = b.zoom_setting[d]);
            a.panhome[b.usermap].style.visibility = "undefined" != typeof a.usermap[b.usermap].map.zoom_setting.homeControl ? a.usermap[b.usermap].map.zoom_setting.homeControl ? "visible" : "hidden" : "visible";
            a.zoomin[b.usermap].style.visibility = "undefined" != typeof a.usermap[b.usermap].map.zoom_setting.zoomControl ? a.usermap[b.usermap].map.zoom_setting.zoomControl ? "visible" : "hidden" : "visible";
            a.zoomout[b.usermap].style.visibility = "undefined" != typeof a.usermap[b.usermap].map.zoom_setting.zoomControl ?
                a.usermap[b.usermap].map.zoom_setting.zoomControl ? "visible" : "hidden" : "visible"
        };
        a.setMarkers = function (b) {
            for (var d in b.marker) b.marker.hasOwnProperty(d) && (a.usermap[b.usermap].map.marker[d] = b.marker[d], "undefined" !== typeof a.marker[b.usermap][d] && null !== a.marker[b.usermap][d] ? (a.marker[b.usermap][d].setOptions(b.marker[d]), a.marker[b.usermap][d].drawMarker()) : a.marker[b.usermap][d] = new V(b, d, b.marker[d]), a.marker[b.usermap][d].toggleCategory())
        };
        a.delMarkers = function (b) {
            a.marker[b.usermap][b.id].remove()
        };
        a.setMapLabels = function (b) {
            for (var d in b.maplabel) b.maplabel.hasOwnProperty(d) && (a.usermap[b.usermap].map.maplabel[d] = b.maplabel[d], "undefined" !== typeof a.maplabel[b.usermap][d] && null !== a.maplabel[b.usermap][d] ? (a.maplabel[b.usermap][d].setOptions(b.maplabel[d]), a.maplabel[b.usermap][d].drawMapLabel()) : a.maplabel[b.usermap][d] = new U(b, d, b.maplabel[d]), a.maplabel[b.usermap][d].toggleCategory())
        };
        a.delMapLabels = function (b) {
            a.maplabel[b.usermap][b.id].remove()
        };
        a.setMapPaths = function (b) {
            for (var d in b.mappath) b.mappath.hasOwnProperty(d) &&
            (a.usermap[b.usermap].map.mappath[d] = b.mappath[d], "undefined" !== typeof a.mappath[b.usermap][d] && null !== a.mappath[b.usermap][d] ? (a.mappath[b.usermap][d].setOptions(b.mappath[d]), a.mappath[b.usermap][d].drawMapPath()) : a.mappath[b.usermap][d] = new P(b, d, b.mappath[d]), a.mappath[b.usermap][d].toggleCategory())
        };
        a.delMapPaths = function (b) {
            a.selectedVerticesObj[b.usermap] == a.mappath[b.usermap][b.id] && (a.selectedVerticesObj[b.usermap] = null);
            a.mappath[b.usermap][b.id].remove()
        };
        a.selectMapPaths = function (b) {
            a.mappath[b.usermap][b.id].createVertices()
        };
        a.setMapPolys = function (b) {
            for (var d in b.mappoly) b.mappoly.hasOwnProperty(d) && (a.usermap[b.usermap].map.mappoly[d] = b.mappoly[d], "undefined" !== typeof a.mappoly[b.usermap][d] && null !== a.mappoly[b.usermap][d] ? (a.mappoly[b.usermap][d].setOptions(b.mappoly[d]), a.mappoly[b.usermap][d].deleteVertices(), a.mappoly[b.usermap][d].drawMapPoly(), "edit" == a.mode[b.usermap] && a.mappoly[b.usermap][d].createVertices()) : a.mappoly[b.usermap][d] = new O(b, d, b.mappoly[d]), a.mappoly[b.usermap][d].toggleCategory())
        };
        a.delMapPolys =
            function (b) {
                a.selectedVerticesObj[b.usermap] == a.mappoly[b.usermap][b.id] && (a.selectedVerticesObj[b.usermap] = null);
                a.mappoly[b.usermap][b.id].remove()
            };
        a.selectMapPolys = function (b) {
            a.mappoly[b.usermap][b.id].createVertices()
        };
        a.setMapCircles = function (b) {
            for (var d in b.mapcircle) b.mapcircle.hasOwnProperty(d) && (a.usermap[b.usermap].map.mapcircle[d] = b.mapcircle[d], "undefined" !== typeof a.mapcircle[b.usermap][d] && null !== a.mapcircle[b.usermap][d] ? (a.mapcircle[b.usermap][d].setOptions(b.mapcircle[d]), a.mapcircle[b.usermap][d].drawMapCircle()) :
                a.mapcircle[b.usermap][d] = new N(b, d, b.mapcircle[d]), a.mapcircle[b.usermap][d].toggleCategory())
        };
        a.delMapCircles = function (b) {
            a.selectedVerticesObj[b.usermap] == a.mapcircle[b.usermap][b.id] && (a.selectedVerticesObj[b.usermap] = null);
            a.mapcircle[b.usermap][b.id].remove()
        };
        a.selectMapCircles = function (b) {
            a.mapcircle[b.usermap][b.id].createVertices()
        };
        a.setMapRects = function (b) {
            for (var d in b.maprect) b.maprect.hasOwnProperty(d) && (a.usermap[b.usermap].map.maprect[d] = b.maprect[d], "undefined" !== typeof a.maprect[b.usermap][d] &&
            null !== a.maprect[b.usermap][d] ? (a.maprect[b.usermap][d].setOptions(b.maprect[d]), a.maprect[b.usermap][d].deleteVertices(), a.maprect[b.usermap][d].drawMapRect(), "edit" == a.mode[b.usermap] && a.maprect[b.usermap][d].createVertices()) : a.maprect[b.usermap][d] = new M(b, d, b.maprect[d]), a.maprect[b.usermap][d].toggleCategory())
        };
        a.delMapRects = function (b) {
            a.selectedVerticesObj[b.usermap] == a.maprect[b.usermap][b.id] && (a.selectedVerticesObj[b.usermap] = null);
            a.maprect[b.usermap][b.id].remove()
        };
        a.selectMapRects =
            function (b) {
                a.maprect[b.usermap][b.id].createVertices()
            };
        a.setMapCurves = function (b) {
            for (var d in b.mapcurve) b.mapcurve.hasOwnProperty(d) && (a.usermap[b.usermap].map.mapcurve[d] = b.mapcurve[d], "undefined" !== typeof a.mapcurve[b.usermap][d] && null !== a.mapcurve[b.usermap][d] ? (a.mapcurve[b.usermap][d].setOptions(b.mapcurve[d]), a.mapcurve[b.usermap][d].drawMapCurve()) : a.mapcurve[b.usermap][d] = new L(b, d, b.mapcurve[d]), a.mapcurve[b.usermap][d].toggleCategory())
        };
        a.delMapCurves = function (b) {
            a.selectedVerticesObj[b.usermap] ==
            a.mapcurve[b.usermap][b.id] && (a.selectedVerticesObj[b.usermap] = null);
            a.mapcurve[b.usermap][b.id].remove()
        };
        a.selectMapCurves = function (b) {
            a.mapcurve[b.usermap][b.id].createVertices()
        };
        a.setMapLegends = function (b) {
            for (var d in b.maplegend) b.maplegend.hasOwnProperty(d) && (a.usermap[b.usermap].map.maplegend[d] = b.maplegend[d], "undefined" !== typeof a.maplegend[b.usermap][d] && null !== a.maplegend[b.usermap][d] ? (a.maplegend[b.usermap][d].setOptions(b.maplegend[d]), a.maplegend[b.usermap][d].drawMapLegend()) : a.maplegend[b.usermap][d] =
                new T(b, d, b.maplegend[d]), a.maplegend[b.usermap][d].toggleCategory())
        };
        a.delMapLegends = function (b) {
            a.maplegend[b.usermap][b.id].remove()
        };
        a.initUserMap = function (b) {
            a.usermap[b.id] = b
        };
        a.initMap = function (b) {
            a.map[b.id] = b
        };
        a.responsive = function (b) {
            var d = 1, d = a.zoom[b.usermap].currentzoom / (a.usermap[b.usermap].map.zoom * a.zoom[b.usermap].rfactor),
                h = parseFloat(a.usermap[b.usermap].div.style.width),
                f = parseFloat(a.usermap[b.usermap].div.style.height),
                e = parseFloat(window.getComputedStyle(a.div[b.usermap].parentNode,
                    null).getPropertyValue("padding-right")) + parseFloat(window.getComputedStyle(a.div[b.usermap].parentNode, null).getPropertyValue("padding-left"));
            parseFloat(window.getComputedStyle(a.div[b.usermap].parentNode, null).getPropertyValue("padding-top"));
            parseFloat(window.getComputedStyle(a.div[b.usermap].parentNode, null).getPropertyValue("padding-bottom"));
            var c = parseFloat(window.getComputedStyle(a.div[b.usermap].parentNode, null).getPropertyValue("border-left-width")) + parseFloat(window.getComputedStyle(a.div[b.usermap].parentNode,
                null).getPropertyValue("border-right-width"));
            parseFloat(window.getComputedStyle(a.div[b.usermap].parentNode, null).getPropertyValue("margin-left"));
            parseFloat(window.getComputedStyle(a.div[b.usermap].parentNode, null).getPropertyValue("margin-right"));
            parseFloat(window.getComputedStyle(a.div[b.usermap].parentNode, null).getPropertyValue("border-top-width"));
            parseFloat(window.getComputedStyle(a.div[b.usermap].parentNode, null).getPropertyValue("border-bottom-width"));
            var q = 2 * parseFloat(a.usermap[b.usermap].div.style.borderWidth),
                e = Math.floor(a.div[b.usermap].parentNode.offsetWidth - e - c - q - 2), c = e / h,
                h = Math.floor(e * f / h);
            a.div[b.usermap].style.width = e + "px";
            a.div[b.usermap].style.height = h + "px";
            a.svg[b.usermap].setAttribute("width", a.div[b.usermap].offsetWidth - q + "px");
            a.svg[b.usermap].setAttribute("height", a.div[b.usermap].offsetHeight - q + "px");
            a.zoom[b.usermap].rfactor = c;
            a.zoom[b.usermap].currentzoom = a.usermap[b.usermap].map.zoom * c * d;
            y(b, a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].currenty, a.zoom[b.usermap].currentx);
            "undefined" !=
            typeof a.usermap[b.usermap].map.maptitle && a.maptitle[b.usermap].drawMapTitle();
            for (var k in a.usermap[b.usermap].map.maplegend) a.usermap[b.usermap].map.maplegend.hasOwnProperty(k) && (a.maplegend[b.usermap][k].show(), a.maplegend[b.usermap][k].offsetWidth + 20 > a.div[b.usermap].clientWidth || a.maplegend[b.usermap][k].offsetHeight + 20 > a.div[b.usermap].clientHeight ? a.maplegend[b.usermap][k].hide() : a.maplegend[b.usermap][k].toggleCategory());
            "undefined" != typeof a.usermap[b.usermap].map.categorylegend && "undefined" !=
            typeof a.usermap[b.usermap].map.categorylegend.enable && a.usermap[b.usermap].map.categorylegend.enable && (a.categorylegend[b.usermap].show(), a.categorylegend[b.usermap].offsetWidth + 20 > a.div[b.usermap].clientWidth || a.categorylegend[b.usermap].offsetHeight + 20 > a.div[b.usermap].clientHeight ? a.categorylegend[b.usermap].hide() : a.categorylegend[b.usermap].show())
        };
        a.init = function (b) {
            b.base || (b.base = "");
            if (b.usermap && (a.touchdevices = "ontouchstart" in document.documentElement && null == navigator.userAgent.match(/Windows NT/i),
                a.mode[b.usermap] = "normal", a.selected[b.usermap] = [], a.infobox[b.usermap] = [], a.coords[b.usermap] = [], a.selectedOverlay[b.usermap] = null, a.selectedVerticesObj[b.usermap] = null, a.marker[b.usermap] = [], a.maplabel[b.usermap] = [], a.mappath[b.usermap] = [], a.mappoly[b.usermap] = [], a.maprect[b.usermap] = [], a.mapcurve[b.usermap] = [], a.maplegend[b.usermap] = [], a.mapcircle[b.usermap] = [], a.path[b.usermap] = [], a.poly[b.usermap] = [], a.rect[b.usermap] = [], a.curve[b.usermap] = [], a.circle[b.usermap] = [], a.categorylegend[b.usermap] =
                {}, a.maptitle[b.usermap] = {}, a.base[b.usermap] = b.base, a.factor[b.usermap] = 1, a.responsivemap[b.usermap] = "undefined" == typeof b.responsivemap ? !1 : b.responsivemap, a.wmark[b.usermap] = [], document.writeln("\x3c!--[if lt IE 9]>"), document.writeln("<div>You can only view this map using Internet Explorer 9 or above, please upgrade or use other modern browsers like chrome, firefox or safari</div>"), document.writeln("<![endif]--\x3e"), document.writeln('<div id="imap5custom_' + b.usermap + '"></div>'), a.div[b.usermap] =
                document.getElementById("imap5custom_" + b.usermap), b.local)) {
                a.local = !0;
                var d = document.createElement("script");
                d.type = "application/javascript";
                d.src = b.base + "/static/iiCreator/imap5customusermap_" + b.usermap + ".js?" + Math.random(1E5);
                d.onerror = function () {
                };
                d.onload = function () {
                    la(b)
                };
                document.body.appendChild(d)
            }
        };
        a.updateCategoryLegend = function (a) {
            K(a)
        };
        a.zoomTo = function (a, d, h, f) {
            y(a, d, h, f)
        };
        a.resumePopup = function (a) {
            setTimeout(function () {
                X(a)
            }, 6E4)
        };
        a.zoomToXY = function (a, d, h, f) {
            y(a, d, h, f)
        };
        a.getLatLng = function (b) {
            var d =
                a.zoom[b.usermap].currentzoom, l = a.zoom[b.usermap].currentx, f = {event: "getlatlng", object: "map"};
            f.y = h(a.zoom[b.usermap].currenty, a.precision);
            f.x = h(l, a.precision);
            f.zoom = h(d / a.zoom[b.usermap].rfactor, a.precision);
            window.console && console.log(JSON.stringify(f))
        };
        a.getMaxZoom = function (b) {
            var d = {event: "getmaxzoom", object: "map"};
            d.zoom = A(a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].initzoom * a.zoom[b.usermap].rfactor);
            d.prezoom = A(a.usermap[b.usermap].map.zoom, a.zoom[b.usermap].initzoom * a.zoom[b.usermap].rfactor);
            window.console && console.log(JSON.stringify(d))
        };
        a.getMinZoom = function (b) {
            var d = {event: "getminzoom", object: "map"};
            d.zoom = A(a.zoom[b.usermap].currentzoom, a.zoom[b.usermap].initzoom * a.zoom[b.usermap].rfactor);
            d.prezoom = A(a.usermap[b.usermap].map.zoom, a.zoom[b.usermap].initzoom * a.zoom[b.usermap].rfactor);
            window.console && console.log(JSON.stringify(d))
        };
        var Y = {name: "Path 1", points: "", style: {stroke: "#000000", strokeWidth: "2", strokeOpacity: "1"}}, Z = {
            name: "Polygon 1", points: "", fill: "#000000", fillOpacity: .5,
            style: {stroke: "#000000", strokeWidth: "2", strokeOpacity: "1"}
        }, aa = {
            name: "Circle 1",
            points: "",
            fill: "#000000",
            fillOpacity: .5,
            style: {stroke: "#000000", strokeWidth: "2", strokeOpacity: "1"}
        }, ba = {
            name: "Rectangle 1",
            points: "",
            fill: "#000000",
            fillOpacity: .5,
            style: {stroke: "#000000", strokeWidth: "2", strokeOpacity: "1"}
        }, ca = {name: "Curve 1", points: "", style: {stroke: "#000000", strokeWidth: "2", strokeOpacity: "1"}}
    }
})();