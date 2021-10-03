sap.ui.define(["sap/ui/core/ComponentContainer"], function (ComponentContainer) {
    "use strict";
    new ComponentContainer({
        name: "x",
        settings: { id: "x" },
        async: true
    }).placeAt("content");
});