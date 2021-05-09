if(!Array.indexOf)
{
	Array.prototype.indexOf = function(obj)
	{
		var Return = -1;
		for( var i = 0; i < this.length; i++)
		{
			if(this[i] == obj)
			{
				Return = i;
				break;
			}
		}
		return Return;
	}
}

function ArraySearch(Arr, Search)
{
	var Result = -1;
	for(i = 0; i < Arr.length; i++)
	{
		if(Search == Arr[i])
		{
			Result = i;
			break;
		}
	}
	return Result;
}

function DeleteEmptyValues(Arr)
{
	for(i = 0; i < Arr.length; i++)
	{
		if(Arr[i] == undefined)
		{
			Arr.splice(i, 1);
			DeleteEmptyValues(Arr);
		}
	}
	return Arr;
}

function ArrayCopy(Arr)
{
	var Result = [];
	for(i = 0; i < Arr.length; i++)
	{
		Result.push(Arr[i]);
	}
	return Result;
}

function TListView(InstanceName)
{
	var Instance = this;
	var InstanceName = InstanceName;
	var Selected = [];
	var Columns = [];
	var Sort = [-1, 0];
	var Data = [];
	var UnsortedData = [];
	var ID = "LV_" + Math.floor(Math.random() * 10000);
	var ComponentError = false;
	var CellEditClick = false;

	this.HiddenColumns = [];
	this.ReadOnlyColumns = [];
	this.BooleanColumns = [];
	this.ColumnsMinLength = [];
	this.ColumnsMaxLength = [];
	this.Width = 400;
	this.CanSort = true;
	this.StaticSort = 0;
	this.Language = 0;
	this.URLBase = './';
	this.UnsortedData = UnsortedData;
	this.Selected = Selected;

	this.Changed = Changed;
	this.SetColumns = SetColumns;
	this.Add = Add;
	this.Delete = Delete;
	this.ColumnCellMouseEvent = ColumnCellMouseEvent;
	this.CellClick = CellClick;
	this.CellEdit = CellEdit;
	this.SaveCell = SaveCell;
	this.JStoPHP = JStoPHP;
	this.SaveChanges = SaveChanges;
	this.Print = Print;

	document.write('<div style="font-family: Verdana; font-size: 10px;" id="' + ID + '"></div>');

	var ListView = document.getElementById(ID);

	function Changed(NewChanged)
	{
		Changed = NewChanged != undefined ? NewChanged : Changed;
	}

	function SetColumns(ColumnsArray)
	{
		Columns = DeleteEmptyValues(ColumnsArray);
		Print();
	}

	function Add(Items, PrintList)
	{
		if(PrintList == undefined)
		{
			PrintList = false;
		}
		Instance.Selected = [];
		Data.sort(Compare);

		Data.push([Data.length > 0 ? (Number(Data[Data.length - 1][0]) + 1) : 0, DeleteEmptyValues(Items)]);
		Instance.UnsortedData = ArrayCopy(Data);
		if(Instance.CanSort)
		{
			Sort = [-1, 0];
		}
		else
		{
			Print();
			if(!PrintList)
			{
				Print();
			}
		}
		if(PrintList)
		{
			Print();
		}
	}

	function Delete(Confirm, Message)
	{
		if(Instance.Selected[0] == undefined)
		{
			return;
		}
		if(Confirm)
		{
			if(!confirm(Message == undefined ? 'Delete?' : Message))
			{
				return;
			}
		}
		for(i = 0; i < Data.length; i++)
		{
			if((ID + '_Row_' + i) == Instance.Selected[0])
			{
				Data.splice(i, 1);
				Instance.Selected = [];
				Data.sort(Compare);
				Instance.UnsortedData = ArrayCopy(Data);
				Sort = [-1, 0];
				Changed();
				Print();
				return;
			}
		}
	}

	function ColumnCellMouseEvent(CellID, Event)
	{
		var Cell = document.getElementById(CellID);

		switch(Event)
		{
			case "Over":
			{
				Cell.className += ' ListViewColumnCellMouseOver';
				break;
			}
			case "Out":
			{
				Cell.className = Cell.className.replace(' ListViewColumnCellMouseOver', '');
				break;
			}
			case "StaticSort":
			case "Click":
			{
				var ColumnSort = -1;
				var aux = [];
				var IsNumberColumn = true;

				if(Event == "Click")
				{
					for(i = 0; i < Columns.length; i++)
					{
						if(Columns[i] == document.getElementById(CellID.replace('ColumnCell', 'ColumnCellText')).innerHTML)
						{
							ColumnSort = i;
							break;
						}
					}
					if(ColumnSort == -1)
					{
						break;
					}
				}
				else
				{
					ColumnSort = Instance.StaticSort;
				}
				Sort = Event == "Click" ? [ColumnSort, (Sort[0] == ColumnSort ? (Sort[1] == 2 ? 0 : Sort[1] + 1) : 1)] : [ColumnSort, 1];
				for(i = 0; i < Data.length; i++)
				{
					aux.push([Data[i][1][ColumnSort], Data[i]]);
					if(!isFinite(Data[i][1][ColumnSort]))
					{
						IsNumberColumn = false;
					}
				}

				IsNumberColumn ? aux.sort(Compare) : aux.sort();
				switch(Sort[1])
				{
					case 2:
					{
						aux.reverse();
						Data = [];
						break;
					}
					case 0:
					{
						Data.sort(Compare);
						aux = [];
						break;
					}
					default:
					{
						Data = [];
						break;
					}
				}
				for(i = 0; i < aux.length; i++)
				{
					Data.push(aux[i][1]);
				}
				if(Event == "Click")
				{
					Instance.Selected = [];
					Print();
				}
				else
				{
					Sort = [ColumnSort, 0];
				}
				break;
			}
		}
	}

	function CellClick(RowID, CellID)
	{
		if(CellEditClick)
		{
			if(CellID != Instance.Selected[1])
			{
				CellEditClick = false;
				CellClick(RowID, CellID);
			}
			return;
		}
		Instance.Selected = [RowID, CellID, 0];
		Print();
	}

	function CellEdit(TextInputID)
	{
		CellEditClick = true;
		Instance.Selected[2] = 1;
		Print();
		if(document.getElementById(TextInputID) != undefined)
		{
			document.getElementById(TextInputID).focus();
		}
	}

	function SaveCell(Input, Row, Cell, KeyEvent)
	{
		var CheckBox = false;
		if(KeyEvent == 2)
		{
			CheckBox = true;
		}

		if(CheckBox || KeyEvent.keyCode == 13)
		{
			var Save = true;
			for(k = 0; k < Instance.ColumnsMinLength.length; k++)
			{
				if(Instance.ColumnsMinLength[k][0] == Cell && Input.value.length < Instance.ColumnsMinLength[k][1])
				{
					alert((Instance.Language == 0 ? "Fill with at least " : "O valor precisa ter no minimo ") + Instance.ColumnsMinLength[k][1] + (Instance.Language == 0 ? " characters." : " caracteres."));
					Save = false;
				}
			}
			if(Save)
			{
				Data[Row][1][Cell] = CheckBox ? Input : Input.value;
				Changed();
			}
			Instance.UnsortedData = ArrayCopy(Data);
			Instance.UnsortedData.sort(Compare);
			Instance.Selected[2] = 0;
			Print();
		}
	}

	function Error()
	{
		ComponentError = true;
		ListView.innerHTML = Instance.Language == 0 ? 'TListView Error' : 'Erro na lista';
	}

	function JStoPHP(Arr)
	{
		if(Arr.length == 0)
		{
			return;
		}
		var aux = [];
		for(i = 0; i < Arr.length; i++)
		{
			aux.push(Arr[i][1].join('_-cell-_'));
		}
		return aux.join('_-row-_');
	}

	function SaveChanges(HiddenID, FormID)
	{
		for(i = 0; i < Instance.UnsortedData.length; i++)
		{
			for(j = 0; j < Instance.UnsortedData[i][1].length; j++)
			{
				for(k = 0; k < Instance.ColumnsMinLength.length; k++)
				{
					if(Instance.ColumnsMinLength[k][0] == j && Instance.UnsortedData[i][1][j].length < Instance.ColumnsMinLength[k][1])
					{
						alert(Instance.Language == 0 ? "There are empty values or with insufficient characters." : "Existem valores em branco ou com caracteres insuficientes.");
						return;
					}
				}
			}
		}
		document.getElementById(HiddenID).value = JStoPHP(Instance.UnsortedData);
		document.getElementById(FormID).submit();
	}

	function Print()
	{
		var Text = '<table style="border: 1px solid #a7a6aa;" width="' + Instance.Width + '" border="0" cellpadding="1" cellspacing="0"><tr>';
		for(i = 0; i < Columns.length; i++)
		{
			if(Instance.HiddenColumns.indexOf(i) < 0)
			{
				Text += '<td style="' + (Instance.CanSort ? 'cursor: pointer; ' : '') + 'background-color: #ebeadb; border-bottom: 2px solid #d6d2c2; border-left: 1px solid #d6d2c2; font-size: 11px; color: #000;" id="' + (ID + '_ColumnCell_' + i) + '" ' + (Instance.CanSort ? 'onclick="' + InstanceName + '.ColumnCellMouseEvent(\'' + (ID + '_ColumnCell_' + i) + '\', \'Click\');" onmouseover="' + InstanceName + '.ColumnCellMouseEvent(\'' + (ID + '_ColumnCell_' + i) + '\', \'Over\');" onmouseout="' + InstanceName + '.ColumnCellMouseEvent(\'' + (ID + '_ColumnCell_' + i) + '\', \'Out\');" ' : '') + 'width="' + 100 / Columns.length + '%"><span id="' + (ID + '_ColumnCellText_' + i) + '">' + Columns[i] + '</span><span id="' + (ID + '_ColumnCellSortImage_' + i) + '">' + (i == Sort[0] ? (Sort[1] > 0 ? (' <img alt="" src="' + Instance.URLBase + 'Images/TListView_' + (Sort[1] == 1 ? 'Ascending' : 'Descending') + '.png" />') : '') : '') + '</span></td>';
			}
		}
		Text += '</tr>';
		for(i = 0; i < Data.length; i++)
		{
			Text += '<tr id="' + (ID + '_Row_' + i) + '">';
			for(j = 0; j < Data[i][1].length; j++)
			{
				if(Instance.HiddenColumns.indexOf(j) < 0)
				{
					if(Instance.BooleanColumns.indexOf(j) >= 0 && Data[i][1][j] != 0 && Data[i][1][j] != 1)
					{
						Error();
					}
					var MaxLength = 30;
					for(k = 0; k < Instance.ColumnsMaxLength.length; k++)
					{
						if(Instance.ColumnsMaxLength[k][0] == j)
						{
							MaxLength = Instance.ColumnsMaxLength[k][1];
							break;
						}
					}
					Text += '<td style="height: 13px;' + (((ID + '_Row_' + i) == Instance.Selected[0] ? (' background-color: #' + ((ID + '_Cell_' + i + '_' + j) == Instance.Selected[1] ? 'adadad' : '5a8ad3') + '; color: #fff;') : ' background-color: #fff; color: #000;') + ' border-top: ' + (i == 0 ? '0' : '1px solid #eee') + '; border-left: ' + (j == 0 ? '0' : '1px solid #eee') + ';') + '" id="' + (ID + '_Cell_' + i + '_' + j) + '" onclick="' + InstanceName + '.CellClick(\'' + (ID + '_Row_' + i) + '\', \'' + (ID + '_Cell_' + i + '_' + j) + '\');"' + (i == 0 ? (' width="' + 100 / Columns.length + '%"') : '') + '><span id="' + (ID + '_Cell_' + i + '_' + j + '_Text') + '" style="float: left;">' + (((ID + '_Cell_' + i + '_' + j) == Instance.Selected[1]) && Instance.Selected[2] == 1 ? (Instance.BooleanColumns.indexOf(j) < 0 ? ('<input style="border: 0; font-size: 10px; height: 11px; width: ' + (Instance.Width / (Columns.length - Instance.HiddenColumns.length) - ((Columns.length - Instance.HiddenColumns.length) + 2)) + 'px;" id="' + (ID + '_TextInput_' + i + '_' + j) + '" onkeypress="' + InstanceName + '.SaveCell(this, ' + i + ', ' + j + ', event);" value="' + Data[i][1][j] + '" type="text" maxlength="' + MaxLength + '" />') : '&nbsp;&nbsp;<input onclick="' + InstanceName + '.SaveCell(' + (Data[i][1][j] > 0 ? 0 : 1) + ', ' + i + ', ' + j + ', 2);" type="checkbox"' + (Data[i][1][j] > 0 ? ' checked="checked"' : '') + ' />') : (Instance.BooleanColumns.indexOf(j) < 0 ? Data[i][1][j] : '&nbsp;&nbsp;<img alt="" src="' + Instance.URLBase + 'Images/TListView_Boolean_' + (Data[i][1][j] > 0 ? 'True' : 'False') + '.png" />')) + '</span><span style="float: right;">' + ((((ID + '_Cell_' + i + '_' + j) == Instance.Selected[1]) && (Instance.Selected[2] == 0) && (Instance.ReadOnlyColumns.indexOf(j) < 0)) ? ('<img alt="" onclick="' + InstanceName + '.CellEdit(\'' + (ID + '_TextInput_' + i + '_' + j) + '\');" style="cursor: pointer;" src="' + Instance.URLBase + 'Images/TListView_Edit.gif" />') : '') + '</span></td>';
				}
			}
			Text += '</tr>';
		}
		Text += '</table>';
		ListView.innerHTML = Text;

		if(!Instance.CanSort)
		{
			ColumnCellMouseEvent(ID + '_ColumnCell_' + Instance.StaticSort, "StaticSort");
		}

		if(ComponentError || (Data.length > 0 && Columns.length != Data[0][1].length))
		{
			Error();
		}
	}

	function Compare(a, b)
	{
		return a[0] - b[0];
	}
}

function TCalendar(InstanceName, Month, Year)
{
	var Instance = this;
	var InstanceName = InstanceName;
	var Month = Month;
	var Year = Year;
	var Links = [];
	var ID = "CL_" + Math.floor(Math.random() * 10000);
	var Months = ["", ["JANEIRO", "JAN"], ["FEVEREIRO", "FEV"], ["MARÇO", "MAR"], ["ABRIL", "ABR"], ["MAIO", "MAI"], ["JUNHO", "JUN"], ["JULHO", "JUL"], ["AGOSTO", "AGO"], ["SETEMBRO", "SET"], ["OUTUBRO", "OUT"], ["NOVEMBRO", "NOV"], ["DEZEMBRO", "DEZ"]];

	this.URLBase = './';

	this.MonthDown = MonthDown;
	this.MonthUp = MonthUp;
	this.AddLink = AddLink;
	this.Print = Print;

	document.write('<div id="' + ID + '"></div>');
	var Calendar = document.getElementById(ID);

	function MonthDown()
	{
		Month = Month > 1 ? Month - 1 : 12;
		if(Month == 12)
		{
			Year--;
		}
		Print();
	}

	function MonthUp()
	{
		Month = Month < 12 ? Month + 1 : 1;
		if(Month == 1)
		{
			Year++;
		}
		Print();
	}

	function AddLink(D, M, Y)
	{
		if(Links[Y] == undefined)
		{
			Links[Y] = [];

		}
		if(Links[Y][M] == undefined)
		{
			Links[Y][M] = [];
		}
		Links[Y][M][D] = '1';
	}

	function Print()
	{
		var Text = '<table style="border-collapse: collapse; width: 100%;">';
		Text += '<caption style="font-weight: normal; font-size: 0.91667em;	line-height: 1.72727em;	text-transform: uppercase; letter-spacing: 2px;	background: #e5e5e5; border-bottom: 1px dotted #ddd;">' + Months[Month][0] + ' ' + Year + '</caption>';
		Text += '<thead style="font-size: 0.91667em; line-height: 1.72727em; background: #f2f2f2; border-bottom: 1px dashed #ddd; text-align: center;"><tr><th>D</th><th>S</th><th>T</th><th>Q</th><th>Q</th><th>S</th><th>S</th></tr></thead>';
		Text += '<tfoot><tr><td colspan="3" style="line-height: 1.66667em; text-align: center; width: 78px; font-size: 0.83333em; letter-spacing: 1px;"><a href="javascript:void(0);" onclick="' + InstanceName + '.MonthDown()">&laquo; ' + Months[Month > 1 ? Month - 1 : 12][1] + '</a></td><td class="pad">&nbsp;</td><td style="line-height: 1.66667em; text-align: center; width: 78px;	font-size: 0.83333em; letter-spacing: 1px;" colspan="3"><a onclick="' + InstanceName + '.MonthUp()" href="javascript:void(0);">' + Months[Month < 12 ? Month + 1 : 1][1] + ' &raquo;</a></td></tr></tfoot>';
		Text += '<tbody>';
		var d = new Date();
		var MonthData = new Array();

		d.setFullYear(Year);
		d.setMonth(Month - 1);
		d.setDate(1);
		var FirstDayWeek = d.getDay();
		var DaysCount = new Date(Year, Month, 0).getDate();

		if(FirstDayWeek > 0)
		{
			MonthData[0] = [];
			for(i = 0; i < FirstDayWeek; i++)
			{
				MonthData[0].push(undefined);
			}
		}

		var Day = 1;
		var Week = 0;
		var DayWeek = FirstDayWeek;

		while(Day <= DaysCount)
		{
			if(DayWeek >= 7)
			{
				DayWeek = 0;
				Week++;
			}
			if(MonthData[Week] == undefined)
			{
				MonthData[Week] = [];
			}
			MonthData[Week].push(Day);
			Day++;
			DayWeek++;
		}
		while(DayWeek < 7)
		{
			MonthData[Week].push(undefined);
			DayWeek++;
		}

		for(i = 0; i < MonthData.length; i++)
		{
			Text += '<tr>';
			for(j = 0; j < MonthData[i].length; j++)
			{
				var Link = false;
				if(MonthData[i][j] != undefined)
				{
					if(Links[Year] != undefined && Links[Year][Month] != undefined)
					{
						Link = Links[Year][Month][MonthData[i][j]] == '1';
					}
				}
				Text += '<td style="width: 26px; line-height: 1.66667em; color: #999; text-align: center;">' + (Link ? '<a href="' + Instance.URLBase + 'News/Date/' + Year + '-' + Month + '-' + MonthData[i][j] + '/">' : '') + (MonthData[i][j] != undefined ? MonthData[i][j] : '&nbsp;') + (Link ? '</a>' : '') + '</td>';
			}
			Text += '</tr>';
		}
		Text += '</tbody>';
		Text += '</table>';
		Calendar.innerHTML = Text;
	}
}