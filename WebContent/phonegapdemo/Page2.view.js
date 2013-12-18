sap.ui.jsview("phonegapdemo.Page2", {

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
        // create the second page of your application
        return new sap.m.Page("idPage2", {
            title: "Page 2",
            showNavButton: true,       // page 2 should display a back button
            navButtonTap: function(){
                app.back();            // when tapped, the back button should navigate back up to page 1
            },
            content : new sap.m.Text({text:"Hello Mobile World!"})
        });
        
	}

});