sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/model/json/JSONModel"], function (Controller, MessageToast, JSONModel) {
    "use strict";
    return Controller.extend("x.controller.App", {
        onInit: function () {
            var oData = {
                name : "rishi",
                age : 40
                };
            
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },
        onShowHello: function () {
            MessageToast.show("Hello World");
        }
    });
});