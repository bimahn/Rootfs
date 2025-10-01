"use strict";
"require baseclass";
"require rpc";

var callSystemInfo = rpc.declare({ object: "system", method: "info" });

function fmtBytes(v) {
    v = parseInt(v) || 0;
    return L.toByteString ? L.toByteString(v) : String.format("%1024.2mB", v);
}

function clampPct(p) {
    if (!isFinite(p)) return 0;
    return Math.max(0, Math.min(100, p));
}

function progressbar(value, max) {
    var vn = parseInt(value) || 0;
    var mn = parseInt(max);
    if (!isFinite(mn) || mn <= 0) mn = 1;

    var pc = clampPct((vn / mn) * 100);

    return E("div",
        { class: "cbi-progressbar", title: "%s / %s (%d%%)".format(fmtBytes(vn), fmtBytes(mn), Math.floor(pc)) },
        E("div", { style: "width:%.2f%%".format(pc) })
    );
}

return baseclass.extend({
    title: _("Memory"),

    load: function () {
        return L.resolveDefault(callSystemInfo(), {});
    },

    render: function (systeminfo) {
        var mem = L.isObject(systeminfo.memory) ? systeminfo.memory : {};
        var swap = L.isObject(systeminfo.swap) ? systeminfo.swap : {};

        var m = {
            total: parseInt(mem.total) || 0,
            free: parseInt(mem.free) || 0,
            available: parseInt(mem.available) || 0,
            buffered: parseInt(mem.buffered) || 0,
            cached: parseInt(mem.cached) || 0
        };

        var s = {
            total: parseInt(swap.total) || 0,
            free: parseInt(swap.free) || 0
        };

        var total = m.total;
        var available = m.available > 0 ? m.available : Math.max(0, m.free + m.buffered + m.cached);
        available = Math.min(available, total);

        var used = total > 0 ? Math.max(0, total - available) : 0;

        var fields = [];

        if (available < used) {
            fields.push(_("Used"), used, total, _("Available"), available, total);
        } else {
            fields.push(_("Available"), available, total, _("Used"), used, total);
        }

        fields.push(_("Buffered"), m.buffered, total, _("Cached"), m.cached, total);

        if (s.total > 0) {
            var swapUsed = Math.max(0, s.total - s.free);
            fields.push(_("Swap Free"), s.free, s.total);
        }

        var table = E("table", { class: "table" });

        for (var i = 0; i < fields.length; i += 3) {
            table.appendChild(
                E("tr", { class: "tr" }, [
                    E("td", { class: "td left", width: "33%" }, [fields[i]]),
                    E("td", { class: "td left" }, [progressbar(fields[i + 1], fields[i + 2])])
                ])
            );
        }

        return table;
    }
});
