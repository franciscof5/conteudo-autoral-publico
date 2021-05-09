
var top_rated_output = '<p><strong>Posts</strong> | <a href="javascript:" onclick="PDRTJS_TOP.get_top( \'pages\', \'0\' );">Pages</a> | <a href="javascript:" onclick="PDRTJS_TOP.get_top( \'comments\', \'0\' );">Comments</a></p><p><strong><small>All</small></strong> | <a href="javascript:" title="Posts created today" onclick="PDRTJS_TOP.get_top( \'posts\', \'1\' );"><small>Today</small></a> | <a href="javascript:" title="Posts created this week" onclick="PDRTJS_TOP.get_top( \'posts\', \'7\' );"><small>This Week</small></a> | <a href="javascript:" title="Posts created this month" onclick="PDRTJS_TOP.get_top( \'posts\', \'31\' );"><small>This Month</small></a></p> <ul id="top_posts"><li>There are no rated items for this period.</li></ul>';
var items = document.getElementsByClassName('pd_top_rated_holder_posts'), i, len;
if ( items.length > 0 ) {
	// loop through all elements 
	for (i = 0, len = items.length; i < len; i++) {
    	items[i].innerHTML = top_rated_output;
	}
} else {
	document.getElementById('pd_top_rated_holder').innerHTML = top_rated_output;
}