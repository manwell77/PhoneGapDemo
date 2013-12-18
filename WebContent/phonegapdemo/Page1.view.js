sap.ui.jsview("phonegapdemo.Page1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf phonegapdemo.Main
	*/ 
	getControllerName : function() {
		return "phonegapdemo.Main";
	},	

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf phonegapdemo.Main
	*/ 
	createContent : function(oController) {		
       	
        // create the first page of your application		
        return new sap.m.Page("idPage1", {
            title: "SAPUI5 and Phonegap",
            content : [new sap.m.Text({text:"Hello Mobile World!"}),
                       new sap.m.Button({   // content is just one Button
                           text : "Go to next page",
                           tap : function() {
                               app.to("view2", "fade");   // when tapped, it triggers drilldown to page 2
                           }
                           }),
                           new sap.m.Button("open_camera_button", {
                                    text : "Open camera",
                                    tap : function () { // alert("photo!");
                                                           capturePhoto();
                                    }
                           }),
                           new sap.ui.core.HTML({content:'<p id="geolocation">Finding geolocation...</p> <img style="display:none;width:60px;height:60px;" id="smallImage" src="" /><img style="display:none;" id="largeImage" src="" />'})
                                                    ]}
        );

        page1.setBackgroundDesign("List");        
        
	},        

});