var boxesFilled,p1Name,p2Name,p1Symbol,p2Symbol,gameCounter=0;
var items= document.getElementsByClassName('items');
var table = document.getElementById("table");
function onload()
{
  /*for disable click on grid*/
  DisableAllitems();
}

function put(box) 
{
	var p1Color=document.getElementById("p1color");
	var p2Color=document.getElementById('p2color');

	
	if(boxesFilled<9)
	{
		boxesFilled++;
		if(boxesFilled%2!=0)
		{
			box.innerHTML = p1Symbol;
			box.style.backgroundColor=p1Color.value;
			document.getElementById("result").innerHTML = "Turn : "+p2Name+" : "+p2Symbol;
		}
		else
		{
			box.innerHTML = p2Symbol;
			box.style.backgroundColor=p2Color.value;
			document.getElementById("result").innerHTML = "Turn : "+p1Name+" : "+p1Symbol;
		}
  		box.classList.toggle("disableitem");
		if(Check())
		{
			if(box.innerHTML==p1Symbol)
			{
				document.getElementById("result").innerHTML = "Result : "+p1Name+" Won!!!";
				document.getElementById("result").classList.toggle("won");
				document.getElementById("startgame").disabled = false;
				gameCounter++;
				document.getElementById("table").innerHTML += "<tr><td>"+gameCounter+"</td><td>"+p1Name+"</td><td>"+p2Name+"</td><td>"+p1Name+"</td></tr>";
			}
			if(box.innerHTML==p2Symbol)
			{
				document.getElementById("result").innerHTML = "Result : "+p2Name+" Won!!!";
				document.getElementById("result").classList.toggle("won");
				document.getElementById("startgame").disabled = false;
				gameCounter++;
				document.getElementById("table").innerHTML += "<tr><td>"+gameCounter+"</td><td>"+p1Name+"</td><td>"+p2Name+"</td><td>"+p2Name+"</td></tr>";
			}
			DisableAllitems();
		}
	}
}

function Check()
{
	var box1 = document.getElementById('item1');
	var box2 = document.getElementById('item2');
	var box3 = document.getElementById('item3');
	var box4 = document.getElementById('item4');
	var box5 = document.getElementById('item5');
	var box6 = document.getElementById('item6');
	var box7 = document.getElementById('item7');
	var box8 = document.getElementById('item8');
	var box9 = document.getElementById('item9');
	if(box1.innerHTML!=""&&box2.innerHTML!=""&&box3.innerHTML!="")
	{
		if(box1.innerHTML==box2.innerHTML&&box1.innerHTML==box3.innerHTML)
		{
			box1.style.backgroundColor = "lightgreen";
			box2.style.backgroundColor = "lightgreen";
			box3.style.backgroundColor = "lightgreen";
			return 1;
		}
	}
	if(box4.innerHTML!=""&&box5.innerHTML!=""&&box6.innerHTML!="")
	{
		if(box4.innerHTML==box5.innerHTML&&box4.innerHTML==box6.innerHTML)
		{
			box4.style.backgroundColor = "lightgreen";
			box5.style.backgroundColor = "lightgreen";
			box6.style.backgroundColor = "lightgreen";
			return 1;
		}
	}
	if(box7.innerHTML!=""&&box8.innerHTML!=""&&box9.innerHTML!="")
	{
		if(box7.innerHTML==box8.innerHTML&&box7.innerHTML==box9.innerHTML)
		{
			box7.style.backgroundColor = "lightgreen";
			box8.style.backgroundColor = "lightgreen";
			box9.style.backgroundColor = "lightgreen";
			return 1;
		}
	}
	if(box1.innerHTML!=""&&box4.innerHTML!=""&&box7.innerHTML!="")
	{
		if(box1.innerHTML==box4.innerHTML&&box1.innerHTML==box7.innerHTML)
		{
			box1.style.backgroundColor = "lightgreen";
			box4.style.backgroundColor = "lightgreen";
			box7.style.backgroundColor = "lightgreen";
			return 1;
		}
	}
	if(box2.innerHTML!=""&&box5.innerHTML!=""&&box8.innerHTML!="")
	{
		if(box2.innerHTML==box5.innerHTML&&box2.innerHTML==box8.innerHTML)
		{
			box2.style.backgroundColor = "lightgreen";
			box5.style.backgroundColor = "lightgreen";
			box8.style.backgroundColor = "lightgreen";
			return 1;
		}
	}
	if(box3.innerHTML!=""&&box6.innerHTML!=""&&box9.innerHTML!="")
	{
		if(box3.innerHTML==box6.innerHTML&&box3.innerHTML==box9.innerHTML)
		{
			box3.style.backgroundColor = "lightgreen";
			box6.style.backgroundColor = "lightgreen";
			box9.style.backgroundColor = "lightgreen";
			return 1;
		}
	}
	if(box1.innerHTML!=""&&box5.innerHTML!=""&&box9.innerHTML!="")
	{
		if(box1.innerHTML==box5.innerHTML&&box1.innerHTML==box9.innerHTML)
		{
			box1.style.backgroundColor = "lightgreen";
			box5.style.backgroundColor = "lightgreen";
			box9.style.backgroundColor = "lightgreen";
			return 1;
		}
	}
	if(box3.innerHTML!=""&&box5.innerHTML!=""&&box7.innerHTML!="")
	{
		if(box3.innerHTML==box5.innerHTML&&box3.innerHTML==box7.innerHTML)
		{
			box3.style.backgroundColor = "lightgreen";
			box5.style.backgroundColor = "lightgreen";
			box7.style.backgroundColor = "lightgreen";
			return 1;
		}
	}
	if(box1.innerHTML!=""&&box2.innerHTML!=""&&box3.innerHTML!=""&&box4.innerHTML!=""&&box5.innerHTML!=""&&box6.innerHTML!=""&&box7.innerHTML!=""&&box8.innerHTML!=""&&box9.innerHTML!="")
	{
		document.getElementById("result").innerHTML="Draw Game!!!";
		document.getElementById("result").classList.toggle("draw");
		document.getElementById("startgame").disabled = false;
		gameCounter++;
		document.getElementById("table").innerHTML += "<tr><td>"+gameCounter+"</td><td>"+p1Name+"</td><td>"+p2Name+"</td><td>Draw</td></tr>";
	}	
	else
	{
		return 0;
	}
}

function DisableAllitems()
{
	for (var i = 0; i<items.length; i++) 
	{
		if(items[i].classList.contains("disableitem"))
		{

		}
		else
		{
	  		items[i].classList.add("disableitem");
		}
	}
}

function AssignName() //get name and change valuess
{
	p1Name = document.getElementById("p1name").value;
	if(p1Name=="")
		p1Name="Player1";
	p2Name = document.getElementById("p2name").value;
	if(p2Name=="")
		p2Name="Player2";
	document.getElementById("p1").innerHTML= p1Name;
	document.getElementById("p2").innerHTML= p2Name;
}

function StartGame() //changes before game start
{	
	document.getElementById("startgame").disabled = true;
	document.getElementById("p1name").disabled = true;
	document.getElementById("p2name").disabled = true;
	document.getElementById("p1color").disabled=true;
  	document.getElementById('p2color').disabled=true;
  	if(document.getElementById("result").classList.contains("draw"))
	{
		document.getElementById("result").classList.remove("draw")
	}
	if(document.getElementById("result").classList.contains("won"))
	{
		document.getElementById("result").classList.remove("won")
	}
	
	var box1 = document.getElementById('item1');
	var box2 = document.getElementById('item2');
	var box3 = document.getElementById('item3');
	var box4 = document.getElementById('item4');
	var box5 = document.getElementById('item5');
	var box6 = document.getElementById('item6');
	var box7 = document.getElementById('item7');
	var box8 = document.getElementById('item8');
	var box9 = document.getElementById('item9');
	box1.innerHTML="";
	box1.style.backgroundColor="rgba(255, 255, 255, 0.8)";
	box2.innerHTML="";
	box2.style.backgroundColor="rgba(255, 255, 255, 0.8)";
	box3.innerHTML="";
	box3.style.backgroundColor="rgba(255, 255, 255, 0.8)";
	box4.innerHTML="";
	box4.style.backgroundColor="rgba(255, 255, 255, 0.8)";
	box5.innerHTML="";
	box5.style.backgroundColor="rgba(255, 255, 255, 0.8)";
	box6.innerHTML="";
	box6.style.backgroundColor="rgba(255, 255, 255, 0.8)";
	box7.innerHTML="";
	box7.style.backgroundColor="rgba(255, 255, 255, 0.8)";
	box8.innerHTML="";
	box8.style.backgroundColor="rgba(255, 255, 255, 0.8)";
	box9.innerHTML="";
	box9.style.backgroundColor="rgba(255, 255, 255, 0.8)";

	boxesFilled = 0;
	AssignName();
	//for enable click on grid
	for (var i = 0; i<items.length; i++) 
  	{
  		items[i].classList.toggle("disableitem");
  	}
  	setSymbol();
  	document.getElementById("result").innerHTML = "Turn : "+p1Name+" : "+p1Symbol;
}
function setSymbol()
{
	if(document.getElementById("O").checked)
	{
		p1Symbol = "O";
		p2Symbol = "X";
	}
	else
	{
		p1Symbol = "X";
		p2Symbol = "O";
	}
}
function NewGame()
	{
		DisableAllitems();
		document.getElementById("result").innerHTML ="&nbsp";
		if(document.getElementById("result").classList.contains("draw"))
		{
			document.getElementById("result").classList.remove("draw")
		}
		if(document.getElementById("result").classList.contains("won"))
		{
			document.getElementById("result").classList.remove("won")
		}
		
		document.getElementById("startgame").disabled = false;
		document.getElementById("p1name").disabled = false;
		document.getElementById("p2name").disabled = false;
		document.getElementById("p1color").disabled=false;
	  	document.getElementById('p2color').disabled=false;
		var box1 = document.getElementById('item1');
		var box2 = document.getElementById('item2');
		var box3 = document.getElementById('item3');
		var box4 = document.getElementById('item4');
		var box5 = document.getElementById('item5');
		var box6 = document.getElementById('item6');
		var box7 = document.getElementById('item7');
		var box8 = document.getElementById('item8');
		var box9 = document.getElementById('item9');
		box1.innerHTML="";
		box1.style.backgroundColor="rgba(255, 255, 255, 0.8)";
		box2.innerHTML="";
		box2.style.backgroundColor="rgba(255, 255, 255, 0.8)";
		box3.innerHTML="";
		box3.style.backgroundColor="rgba(255, 255, 255, 0.8)";
		box4.innerHTML="";
		box4.style.backgroundColor="rgba(255, 255, 255, 0.8)";
		box5.innerHTML="";
		box5.style.backgroundColor="rgba(255, 255, 255, 0.8)";
		box6.innerHTML="";
		box6.style.backgroundColor="rgba(255, 255, 255, 0.8)";
		box7.innerHTML="";
		box7.style.backgroundColor="rgba(255, 255, 255, 0.8)";
		box8.innerHTML="";
		box8.style.backgroundColor="rgba(255, 255, 255, 0.8)";
		box9.innerHTML="";
		box9.style.backgroundColor="rgba(255, 255, 255, 0.8)";

		
	}