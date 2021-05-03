//Verifica o canal 
var theURL = new String (document.location) ;

theURL = theURL + "chk" ;

var bEx = false ;
var keyBC;

/*if (theURL.indexOf('pedagio') > -1 ) {
	   var theCh    = PrsStr(lc["pedagio"],0) ;
	   var theTagCh = PrsStr(lc["pedagio"],1) ;
     bEx = true; 
}

if (theURL.indexOf('copa2006') > -1 ) {
	   var theCh    = PrsStr(lc["copa2006"],0) ;
	   var theTagCh = PrsStr(lc["copa2006"],1) ;
     bEx = true; 
}
*/

/*Rotina anterior*/
if (typeof le != 'undefined') 
	for (i=0;i<le.length;i++)  
	if (theURL.indexOf( PrsStr(le[i],0) ) > -1 ) {
      var theCh    = PrsStr(le[i],1) ;
      var theTagCh = PrsStr(le[i],2) ;
	  bEx = true ;
	}


    if (!bEx) {
        var auxPath = theURL.split("/") ;
        auxPath.splice(0,3);
        auxPath.pop();
        if(keyBC != ''){  //quando for landing page
			if(keyBC == auxPath[auxPath.length-1]) auxPath.pop();
		}
        
        
        if(typeof theCh2 != 'undefined' && theCh2 == "naoencontrada") {
            var theCh    = PrsStr(lc["naoencontrada"],0) ;
            var theTagCh = PrsStr(lc["naoencontrada"],1) ;
        }
        else {
            if (auxPath.length>0){
                if (lc[auxPath]!=null) {
                    var theCh    = PrsStr(lc[auxPath],0) ;
                    var theTagCh = PrsStr(lc[auxPath],1) ;
                } 
                else {
                    var theCh    = PrsStr(lc["internas"],0) ;
                    var theTagCh = PrsStr(lc["internas"],1) ;
                    }
                } 
                else 
                {
                    var theCh    = PrsStr(lc["home"],0) ;
                    var theTagCh = PrsStr(lc["home"],1) ;
                }
                /* var isX03  = (theTagCh.indexOf('x03') > -1) ? 1 : -1 ;
                var isX02  = (theTagCh.indexOf('x02') > -1) ? 1 : -1 ;*/
        }
    }
    
    

function PrsStr(ct,id) {
  var str=ct.split('|');
  return str[id] ;
}
