document.getElementById("id_logic_level_version").innerHTML = "Business level version: 2017.11.15.2"; 

addEventListener("touchstart", on_touch_start);

function on_touch_start(e)
{
	var touches = e.changedTouches;
	for (var i = 0; i < touches.length; i++){
		var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
		circle.setAttribute("cx", touches[i].pageX);
		circle.setAttribute("cy", touches[i].pageY);
		circle.setAttribute("r", 10);
		var svg = document.getElementById("id_svg");
		svg.appendChild(circle);
	}
}