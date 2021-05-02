_satellite.pushAsyncScript(function(event, target, $variables){
  //Criar DataLayer
	window.dataLayer = [{
		url      : _satellite.getVar("getURL"),
		utm_goop : cage_getParam("utm_goop"),
		brand    : _satellite.getVar("coreBrandName"),
		page     : "product",
		products : ({
			id           : _satellite.getVar("getProductPageID"),
			name         : _satellite.getVar("getProductMostVisited"),
			supplier     : _satellite.getVar("getProductBrand"),
			categoryID   : (_satellite.getVar("getDepartmentLineSubline").indexOf("|") >=0)?_satellite.getVar("getDepartmentLineSubline").split('|')[0]:'',
			categoryName : (_satellite.getVar("getDepartmentName").indexOf("|") >=0)?_satellite.getVar("getDepartmentName").split('|')[0]:'',
			price        : _satellite.getVar("getProductValue"),
			quantity     : "1"
		})
	}];

//Chama GTM
	(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','GTM-T3755ST');

});
