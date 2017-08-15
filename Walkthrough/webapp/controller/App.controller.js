sap.ui.define([
   
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/model/json/JSONModel"
], function (Controller, MessageToast,JSONModel) {
   "use strict";
    return Controller.extend("sap.ui.demo.wt.controller.App", {
    onInit : function () {
         // set data model on view
         var ocliente = {
           cliente : [{
               nombre    : "Gustavo" ,
               apellido  : "Rosales"
            }]
        };
         var oModel = new JSONModel(ocliente);
         this.getView().setModel(oModel);
      },
        
    onPress : function () {
         // show a native JavaScript alert
         MessageToast.show("Documento Rechazado");
      },
    
    onDatos : function () {
         // show a native JavaScript alert
         MessageToast.show("Datos:");
      }        
    });
});