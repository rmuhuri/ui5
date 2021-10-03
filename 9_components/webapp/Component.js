sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel", "sap/ui/model/resource/ResourceModel"], function (UIComponent, JSONModel, ResourceModel) {
   "use strict";

   return UIComponent.extend("x.Component", {
      metadata: {
         "interfaces": ["sap.ui.core.IAsyncContentCreation"],
         "rootView": {
            "viewName": "x.view.App",
            "type": "XML",
            /*"async": true, // implicitly set via the sap.ui.core.IAsyncContentCreation interface*/
            "id": "app"
         }
      },

      init: function () {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);

         var oData = { name: "Binky", age: 17 };
         var oModel = new JSONModel(oData);
         this.setModel(oModel);


         var i18nModel = new ResourceModel({ bundleName: "x.i18n.i18n" });
         this.setModel(i18nModel, "i18n");
      }
   });
});