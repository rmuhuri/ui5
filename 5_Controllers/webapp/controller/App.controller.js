sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("x.controller.App", {

		onShowHello : function () {
			// show a native JavaScript alert
			/* eslint-disable no-alert */
			alert("Hello World");
			/* eslint-enable no-alert */
		}
	});

});