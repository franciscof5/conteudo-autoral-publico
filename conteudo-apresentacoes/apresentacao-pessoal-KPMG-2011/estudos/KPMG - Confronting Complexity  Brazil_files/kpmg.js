function RenderEditor(clientId)
{
    ToggleToolpanelScrolling(false);
    var editorPanel = document.getElementById(clientId);
    
    //Center the panel
    var windowWidth = document.documentElement.clientWidth;
    var windowHeight = document.documentElement.clientHeight;
    if (document.body.clientHeight)
    {
        windowWidth = document.body.clientWidth;
        windowHeight = document.body.clientHeight;
    }
    var editWidth = editorPanel.clientWidth;
    var editHeight = editorPanel.clientHeight;
    var xPos = 50 + (windowWidth - editWidth) / 2;
    var yPos = (windowHeight - editHeight) / 2;
    if (xPos < 0) xPos = 0;
    if (yPos < 0) yPos = 0;

    editorPanel.style.left = xPos + "px";
    editorPanel.style.top = yPos + "px";
    
    editorPanel.style.visibility = "visible";    
}

function HideEditor(clientId)
{
    var editorPanel = document.getElementById(clientId);
    editorPanel.style.visibility = "hidden";
    ToggleToolpanelScrolling(true);
}      

function ToggleToolpanelScrolling(enabled)
{
    var toolparts = document.getElementById("MSOTlPn_Parts");
    var scrollingPanel = toolparts.firstChild;
    if (enabled)
    {
        scrollingPanel.style.overflow = "auto";
    }
    else
    {
        scrollingPanel.style.overflow = "visible";
    }
}  
function AdjustLeftNavHeight() 
    {
        
        var leftNav = document.getElementById("leftNav");
        var mainContentitem =  document.getElementById("maincontent");
        
        if (leftNav)
        {
            leftNav.style.height = mainContentitem.offsetHeight;
        }
        var template5z2 = document.getElementById("template5_z2");
        if (template5z2)
        {
            var module2wrapper = document.getElementById("template5ModuleWrapper");
            if (module2wrapper)
            {
                if (mainContentitem)
                {
                    module2wrapper.style.height = mainContentitem.offsetHeight - template5z2.offsetHeight - 50;
                }
                
            }
        }
        var template6z2 = document.getElementById("template6_z2");
        if (template6z2)
        {
            var module6wrapper = document.getElementById("template6ModuleWrapper");
            if (module6wrapper)
            {
                if (mainContentitem)
                {
                    module6wrapper.style.height = mainContentitem.offsetHeight - template6z2.offsetHeight - 30;
                }
                
            }
        }
        var template1z3 = document.getElementById("template1_z3");
        var template1z4 = document.getElementById("template1_z4");
        
        if (template1z3 && template1z4)
        {
            var module1wrapper = document.getElementById("template1ModuleWrapper");
            if (module1wrapper)
            {
                if (mainContentitem)
                {
                    module1wrapper.style.height = mainContentitem.offsetHeight - template1z3.offsetHeight - template1z4.offsetHeight - 50;
                }
                
            }
        }


    }
//Added for transcript display.
function ShowTranscript(bShowTranscript) {
    var divTextVersion =  document.getElementById("TextVersion");
    var divVideoVersion = document.getElementById("VideoVersion");
    if (divTextVersion != null || divVideoVersion != null) {
        if (bShowTranscript == true) {
            divTextVersion.style.display = "inline";
            divVideoVersion.style.display = "none";
        }
        else {
            divTextVersion.style.display = "none";
            divVideoVersion.style.display = "inline";
        }
    }
}


function HideViewText(transcript) {
    if (transcript.length == 0) {
        var divLink = document.getElementById("ViewText");
        if (divLink != null) {
            divLink.style.display = "none";
        }
    }
}

function TranscriptQuerystring() {
    var bShowTranscript = false;
    var queryString = '' + location.href;
    queryString = queryString.substring((queryString.indexOf('?')) + 1);
    if (queryString.length >= 1)
        if (queryString.indexOf("transcript=true") >= 0)
            bShowTranscript = true;
    return bShowTranscript;
}

//Finish transcript display javascript.
function Custom_MakeInvisibleIfEmpty() 
{ 
	var allElements=document.getElementsByName("_invisibleIfEmpty"); 
	var agt=navigator.userAgent.toLowerCase(); 
	var isNav=((agt.indexOf('mozilla')!=-1)&&((agt.indexOf('spoofer')==-1) && (agt.indexOf('compatible')==-1))); 
	var isIE=(agt.indexOf("msie")!=-1); 
	for (var curElement=0; curElement < allElements.length; curElement++) 
	{ 
		if ((isIE && allElements[curElement].childNodes.length==0) || (isNav && allElements[curElement].childNodes.length <=1)) 
		{ 
			allElements[curElement].style.display="none"; 
		} 
	} 
	
	for (var curElement=0; curElement < allElements.length; curElement++) 
	{ 
		//hide element if it doesn't have any visible child nodes
		for(var curChildElement=0; curChildElement < allElements[curElement].childNodes.length; curChildElement++) 
		{
			if(allElements[curElement].childNodes[curChildElement].style.display != "none") 
			{
				break;
			}
			allElements[curElement].style.display="none";
		}
	}
}

function trim(str) {
    return str.replace(/^\s+/, '').replace(/\s+$/, '');
}

function Custom_MakeInvisibleIfNoText() {
    var allElements = document.getElementsByName("_invisibleIfNoText");
    var agt = navigator.userAgent.toLowerCase();
    var isNav = ((agt.indexOf('mozilla') != -1) && ((agt.indexOf('spoofer') == -1) && (agt.indexOf('compatible') == -1)));
    var isIE = (agt.indexOf("msie") != -1);
    for (var curElement = 0; curElement < allElements.length; curElement++) {
        if ((isIE && allElements[curElement].childNodes.length > 0) || (isNav && allElements[curElement].childNodes.length > 1)) {
            if (allElements[curElement].childNodes[0].nodeValue!=null && trim(allElements[curElement].childNodes[0].nodeValue).length <=1)
            {
                allElements[curElement].style.display = "none";
            }
        }
    }
}

function pod_rollover(elem, over) {
	if(over) {
		elem.style.cursor = "pointer";
		if(elem.className.toLowerCase() == "bluepodheaders") {
			elem.className = "bluepodheaders bluepodheadersrollover";
		} else if (elem.className.toLowerCase() == "redpodheaders") {
			elem.className = "redpodheaders redpodheadersrollover"
		} else if (elem.className.toLowerCase() == "turqpodheaders") {
			elem.className = "turqpodheaders turqpodheadersrollover"
		}
	} else {
		if(elem.className.toLowerCase() == "bluepodheaders bluepodheadersrollover") {
			elem.className = "bluepodheaders";
		} else if (elem.className.toLowerCase() == "redpodheaders redpodheadersrollover") {
			elem.className = "redpodheaders"
		} else if (elem.className.toLowerCase() == "turqpodheaders turqpodheadersrollover") {
			elem.className = "turqpodheaders"
		}	
	}
}

function SetColumnHight() {
    var col2 = document.getElementById("column2");
    var agt = navigator.userAgent.toLowerCase();
    var isNav = ((agt.indexOf('mozilla') != -1) && ((agt.indexOf('spoofer') == -1) && (agt.indexOf('compatible') == -1)));
    var isIE = (agt.indexOf("msie") != -1);
    if (col2 != null) {
        if (isIE) {
            col2.className = "column2IE";
        }
        else {
            col2.className = "column2OtherBrowser";
        }
    }
}

function Custom_MakeInvisibleIfEmptyText() 
{ 
	var allElements=document.getElementsByName("_invisibleIfEmptyText"); 
	var agt=navigator.userAgent.toLowerCase(); 
	var isNav=((agt.indexOf('mozilla')!=-1)&&((agt.indexOf('spoofer')==-1) && (agt.indexOf('compatible')==-1))); 
	var isIE=(agt.indexOf("msie")!=-1); 
	for (var curElement=0; curElement < allElements.length; curElement++) 
	{ 
		if (allElements[curElement].innerText==null || trim(allElements[curElement].innerText)=="")
		{ 	
			allElements[curElement].style.display="none"; 
		} 
	} 
}

function Custom_MakeInvisibleIfNoImage()
{
	var allElements=document.getElementsByName("_invisibleIfNoImage"); 
	var agt=navigator.userAgent.toLowerCase(); 
	for (var curElement=0; curElement < allElements.length; curElement++) 
	{ 
		if (allElements[curElement].children[0].children.length<1)
		{
			allElements[curElement].style.display="none";
		}
	}
}

function ProcessDefaultOnLoad(onLoadFunctionNames)
{
	ProcessPNGImages();
	UpdateAccessibilityUI();
	//Offending OOTB Function for Name.dll issue
	//ProcessImn();
	for (var i=0; i < onLoadFunctionNames.length; i++)
	{
		var expr="if(typeof("+onLoadFunctionNames[i]+")=='function'){"+onLoadFunctionNames[i]+"();}";
		eval(expr);
	}
	if (typeof(_spUseDefaultFocus)!="undefined")
		DefaultFocus();
}

function WrapLongWords(longword)
{
    var text = longword;
    var newtxt = "";
    try
    {
      var titleWords = text.split(" ");
      var i =0;
      while(1)
      {
          if(titleWords[i].length > 17)
              newtxt = newtxt + titleWords[i].replace(/(.*?)/g, "<wbr />");
          else
              newtxt = newtxt + titleWords[i];

          i++;          
          if(i >= titleWords.length)
            break;
          else
            newtxt = newtxt + " ";
      }
    }
    
    catch(err){newtxt = text;}
    document.write(newtxt)
}