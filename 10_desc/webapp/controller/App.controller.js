sap.ui.define(["sap/ui/core/mvc/Controller", "sap/m/MessageToast",], function (Controller, MessageToast) {
	"use strict";
	return Controller.extend("x.controller.App", {
		onShowHello: function () {

			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			MessageToast.show(sMsg);
		}
	});

});