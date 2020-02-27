/* global Module */

/* Magic Mirror
 * Module: MMM-Timer
 *
 * By lavolp3
 * MIT Licensed.
 */

Module.register("MMM-Timer", {
	defaults: {
		updateInterval: 60000,
		retryDelay: 5000
	},

	requiresVersion: "2.1.0", // Required version of MagicMirror

	
	getScripts: function() {
		return [this.file("node_modules/simple-keyboard/index.js"];
	},

	getStyles: function () {
		return [
			//"timer.css",
		];
	},

	// Load translations files
	/*getTranslations: function() {
		//FIXME: This can be load a one file javascript definition
		return {
			en: "translations/en.json",
			es: "translations/es.json"
		};
	},*/
	
	
	start: function() {
		Log.info("Starting module: " + this.name);
		var self = this;
		this.updateDom();
		// Schedule update timer.
		timerInterval = setInterval(function() {
			self.updateDom();
		}, 1000);
	},


	getDom: function() {
		var self = this;

		// create element wrapper for show into the module
		var wrapper = document.createElement("div");
		// If this.dataRequest is not empty
		if (this.dataRequest) {
			var wrapperDataRequest = document.createElement("div");
			// check format https://jsonplaceholder.typicode.com/posts/1
			wrapperDataRequest.innerHTML = this.dataRequest.title;

			var labelDataRequest = document.createElement("label");
			// Use translate function
			//             this id defined in translations files
			labelDataRequest.innerHTML = this.translate("TITLE");


			wrapper.appendChild(labelDataRequest);
			wrapper.appendChild(wrapperDataRequest);
		}

		return wrapper;
	},


});
