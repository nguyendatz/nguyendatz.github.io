index = source = mybox = combox = stop = 0;
player = "p1";
khoitao();

function khoitao()
{
clearTimeout(0);
cel = new Array(0,5,5,5,5,5,10,5,5,5,5,5,10);
for (i = 11; i > 6; i--)
{
	document.write('<Td><Input Type="Button" disabled Id="' + i + '" Value="5" Class="button' + i + '"></Td>');
}
for (i = 1; i < 6; i++)
{
	document.write('<Td><Input Type="Button" Id="' + i + '" Value="5" Class="button' + i + '" onClick="getindex(this)"></Td>');
	
}
document.write('<Td><Input Type="Button" disabled Id="6" Value="10" Class="button6"></Td>');
document.write('<Td><Input Type="Button" disabled Id="12" Value="10" Class="button12"></Td>');
document.write('<Td><Input Type="Button" Id="Left" Value="<" Class="arr" onClick="go(1)"></Td>');
document.write('<Td><Input Type="Button" Id="Right" Value=">" Class="arr2" onClick="go(2)"></Td>');
}

function go(x)
{
	if ((index == 0)||(cel[index]==0)) return;
	disable();
	source = index;
	document.getElementById(index).value = "0";
	if(x == 1)
	{
	--index;
	stop = setInterval(showLeft, 300);
	}
	else 
	{
	++index;
	stop = setInterval(showRight, 300);
	}
}

function com()
{
	setTimeout(function(){
	i = Math.floor(Math.random() * 5) + 7;
	while( cel[i] == 0)
	{
		i = Math.floor(Math.random() * 5) + 7;
	}
	index = i;
	player = "p2";
	for(j = 1; j< 13; j++)
	{
	document.getElementById(j).style.backgroundImage = null;
	}
	i = Math.floor(Math.random() * 2) + 1;
	element = document.getElementById(index);
	element.style.backgroundImage = "url('./img/" + player + ".png')";
	element.value = "0";
	setTimeout(function(){
	
	source = index;
	if(i==1)
	{
	--index;
	stop = setInterval(showLeft, 300);
	}
	else
	{
	++index;
	stop = setInterval(showRight, 300);
	}
	},400);
	},1000);
}

function moveLeft(){
clearInterval(stop);
setTimeout(function(){
if( index == 0){ index = 12; document.getElementById("1").style.backgroundImage = null }
	else {document.getElementById(index + 1).style.backgroundImage = null;}

element = document.getElementById(index);
element.style.backgroundImage = "url('./img/" + player + ".png')";
if ((index == 12 )||(index == 6))
{
	if(player == "p1")
	{
		player = "p2";
		com();
	}
	else
	{
		player = "p1";
		enable();
	}
	return;
}
element.value = "0";
if (cel[index] != 0)
{
	source = index;
	--index;
	stop = setInterval(showLeft, 300);
	return;
}
else
{
	index--;
	if (index==0)
	{
	index = 12; 
	document.getElementById(1).style.backgroundImage = "url('./img/" + player + ".png')";
	}
	else
	{
	document.getElementById(index+1).style.backgroundImage = "url('./img/" + player + ".png')";
	}
	document.getElementById(index).value = "0";
	setpoint();
}
},400);
}

function enable()
{
	index = 0;
	for(i=1; i<6; i++)
	{
		document.getElementById(i).disabled = false;
	}
	document.getElementById("Left").disabled = false;
	document.getElementById("Right").disabled = false;
}

function disable()
{
	for(i=1; i<6; i++)
	{
		document.getElementById(i).disabled = true;
	}
	document.getElementById("Left").disabled = true;
	document.getElementById("Right").disabled = true;
}

function moveRight() {
clearInterval(stop);
setTimeout(function(){
if( index == 13){ index = 1; document.getElementById("12").style.backgroundImage = null }
	else {document.getElementById(index - 1).style.backgroundImage = null;}
element = document.getElementById(index);
element.style.backgroundImage = "url('./img/" + player + ".png')";
if ((index == 12 )||(index == 6))
{
	if(player == "p1")
	{
		player = "p2";
		com();
	}
	else
	{
		player = "p1";
		enable();
	}
	return;
}
element.value = "0";
if (cel[index] != 0)
{
	source = index;
	++index;
	stop = setInterval(showRight, 300);
	return;
}
else
{
	++index;
	if (index==13)
	{
	index = 1; 
	document.getElementById(12).style.backgroundImage = "url('./img/" + player + ".png')";
	}
	else
	{
	document.getElementById(index-1).style.backgroundImage = "url('./img/" + player + ".png')";
	}
	document.getElementById(index).value = "0";
	setpoint();
	}
},400);
}

function setpoint()
{
	if(player == "p1")
	{
		mybox += cel[index];
		cel[index] = 0;
		point = mybox;
		if (mybox < 10) point = "0" + mybox;
		document.getElementById("s1").innerHTML = point;
		if (test()) return;
		player = "p2";
		com();
	}
	else
	{
		combox += cel[index];
		cel[index] = 0;
		point = combox;
		if (combox < 10) point = "0" + combox;
		document.getElementById("s2").innerHTML = point;
		if (test()) return;
		player = "p1";
		enable();
	}
}

function showLeft()
{
	if( index == 0){ index = 12; document.getElementById("1").style.backgroundImage = null }
	else {document.getElementById(index + 1).style.backgroundImage = null; }
	element = document.getElementById(index);
	element.style.backgroundImage = "url('./img/" + player + ".gif')";
	cel[index]++;
	element.value = cel[index];
	cel[source]--;
	index--;
	if(cel[source] == 0) { moveLeft(); return}
}

function showRight()
{
	if( index == 13){ index = 1; document.getElementById("12").style.backgroundImage = null }
	else {document.getElementById(index - 1).style.backgroundImage = null; }
	element = document.getElementById(index);
	element.style.backgroundImage = "url('./img/" + player + ".gif')";
	cel[index]++;
	element.value = cel[index];
	cel[source]--;
	index++;
	if(cel[source] == 0) { moveRight(); return}
}

function getindex(element){
	for(i = 1; i < 13; i++)
	{
		document.getElementById(i).style.backgroundImage = null;
	}
	index = element.id;
	element.style.backgroundImage = "url('./img/p1.png')";
}

function test()
{
	if((cel[6]==0)&&(cel[12]==0))
	{
		if(mybox > combox)
		{
			alert("You win");
		}
		else alert("You lose");
		restart();
		return true;
	}
	if((cel[1]==0)&&(cel[2]==0)&&(cel[3]==0)&&(cel[4]==0)&&(cel[5]==0))
	{
		if(mybox >= 5)
		{
			mybox-=5;
			cel[1]=cel[2]=cel[3]=cel[4]=cel[5]=1;
			document.getElementById("s1").innerHTML = mybox;
			for(i=1;i<6;i++)
			{
				document.getElementById(i).value = 1;
			}
		}
		else
		{
			alert("You lose");
			restart();
			return true;
		}
	}
	else if((cel[7]==0)&&(cel[8]==0)&&(cel[9]==0)&&(cel[10]==0)&&(cel[11]==0))
	{
		if(combox >= 5)
		{
			combox-=5;
			cel[7]=cel[8]=cel[9]=cel[10]=cel[11]=1;
			document.getElementById("s2").innerHTML = combox;
			for(i=7;i<12;i++)
			{
				document.getElementById(i).value = 1;
			}
		}
		else
		{
			alert("You win");
			restart();
			return true;
		}
	}
	return false;
}

function restart()
{
	for(i=1; i<13; i++)
	{
		cel[i] = 0;
		element = document.getElementById(i);
		element.style.backgroundImage = null;
		if((i==6)||(i==12)) element.value = "10";
		else element.value = "5";
	}
	document.getElementById("s1").innerHTML = "00";
	document.getElementById("s2").innerHTML = "00";
	mybox = 0;
	combox = 0;
	index = 0;
	enable();
}
