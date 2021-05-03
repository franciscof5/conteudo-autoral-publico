function winOpen(pm_url,pm_name,pm_left,pm_top,pm_width,pm_height,pm_scrollbars,pm_toolbar,pm_status,pm_resizable,pm_directories,pm_location,pm_menubar)
{
    probsWindow = window.open(pm_url,pm_name,"top="+pm_top+",left="+pm_left+",width="+pm_width+",height="+pm_height+",scrollbars="+pm_scrollbars+",toolbar="+pm_toolbar+",status="+pm_status+",resizable="+pm_resizable+",directories="+pm_directories+",location="+pm_location+",menubar="+pm_menubar);
    probsWindow.focus();
}

function dialogOpen(pm_url,pm_name,pm_left,pm_top,pm_width,pm_height,pm_scrollbars,pm_toolbar,pm_status,pm_resizable,pm_directories,pm_location,pm_menubar)
{
    if(window.showModalDialog)
    {
	window.showModalDialog(pm_url,pm_name,"top="+pm_top+",left="+pm_left+",width="+pm_width+",height="+pm_height+",scrollbars="+pm_scrollbars+",toolbar="+pm_toolbar+",status="+pm_status+",resizable="+pm_resizable+",directories="+pm_directories+",location="+pm_location+",menubar="+pm_menubar+",model=1");
    }
    else
    {
	probsWindow = window.open(pm_url,pm_name,"top="+pm_top+",left="+pm_left+",width="+pm_width+",height="+pm_height+",scrollbars="+pm_scrollbars+",toolbar="+pm_toolbar+",status="+pm_status+",resizable="+pm_resizable+",directories="+pm_directories+",location="+pm_location+",menubar="+pm_menubar+",model=1");
	probsWindow.focus();
    }
}

function centerPopUp(pm_url,pm_name,pm_width,pm_height)
{
    x = Math.floor((screen.width/2)-(pm_width/2));
    y = Math.floor((screen.height/2)-(pm_height/2));
    winOpen(pm_url,pm_name,x,y,pm_width,pm_height,0,0,0,0,0,0,0);
}

function centerScrollUp(pm_url,pm_name,pm_width,pm_height)
{
    x = Math.floor((screen.width/2)-(pm_width/2));
    y = Math.floor((screen.height/2)-(pm_height/2));
    winOpen(pm_url,pm_name,x,y,pm_width,pm_height,1,0,1,1,0,0,0);
}

function centerScrollDialog(pm_url,pm_name,pm_width,pm_height)
{
    x = Math.floor((screen.width/2)-(pm_width/2));
    y = Math.floor((screen.height/2)-(pm_height/2));
    dialogOpen(pm_url,pm_name,x,y,pm_width,pm_height,1,0,1,0,0,0,0);
}