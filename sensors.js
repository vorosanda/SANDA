
document.getElementById("id_logic_level_version").innerHTML = "Logic level version: 2017.10.25.0"; 
window.addEventListener('deviceorientation', ondeviceorientation);
window.addEventListener('devicemotion', ondevicemotion);


//----------------------------------------
function ondeviceorientation(event) 
{
	document.getElementById("id_alpha").innerHTML = Math.round(event.alpha * 10) / 10;
	document.getElementById("id_beta").innerHTML = Math.round(event.beta * 10) / 10;
	document.getElementById("id_gamma").innerHTML = Math.round(event.gamma * 10) / 10;
}
//----------------------------------------
function ondevicemotion(event) 
{
	document.getElementById("id_acc").innerHTML = Math.round(event.acceleration.x * 10) / 10 + " " + Math.round(event.acceleration.y * 10) / 10 + " " + Math.round(event.acceleration.z * 10) / 10;
	document.getElementById("id_acc_g").innerHTML = Math.round(event.accelerationIncludingGravity.x * 10) / 10 + " " + Math.round(event.accelerationIncludingGravity.y * 10) / 10 + " " + Math.round(event.accelerationIncludingGravity.z * 10) / 10;
}
//----------------------------------------