var tot = document.getElementById("total");
var items = tot.getElementsByTagName("*")
var mind = tot.getElementsByClassName("旅行记录");
alert(items.length);
alert(mind.length);



var paras = document.getElementsByTagName("p");
for (var i = 0; i<paras.length; i++ ) {
	if (paras[i].getAttribute("title")){
	alert(paras[i].getAttribute("title"));
	}
}
tot.setAttribute("class","马勒戈壁");
alert(tot.getAttribute("class"));