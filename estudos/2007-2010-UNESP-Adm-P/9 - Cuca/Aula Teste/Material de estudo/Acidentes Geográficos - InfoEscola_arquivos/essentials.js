function trackEventMouseClick(a,b,c,d) {
	//try {pageTracker._trackEvent(a,b,c,d);} catch (e) {};
}

function getAnchorPosition(anchorName) {
	
	for(var i=0;i<window.document.anchors.length;i++){
		if(window.document.anchors[i].name==anchorName) {
			var anchor = window.document.anchors[i];
		}
	}
	
	if (document.layers) {
		return { x: anchor.x, y: anchor.y };
	} else if (document.getElementById) {
		var coords = {x: 0, y: 0 };
		while (anchor) {
			coords.x += anchor.offsetLeft;
			coords.y += anchor.offsetTop;
			anchor = anchor.offsetParent;
		}
		return coords;
	}
}

function scrollTo_(link) {
	var coords = getAnchorPosition(link);
	scrollTo(coords.x , coords.y);
}