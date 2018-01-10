var d = new Date();

document.getElementById("id_business_level_version").innerHTML = 
		"Business level version:" + 
		d.getFullYear() + "." + d.getMonth() + 1 + "." + d.getDate() + ".0"; 

var constraints = {audio:true, video:true};		
navigator.mediaDevices.getUserMedia(constraints).then(on_success).catch(on_error);

var video = document.getElementById("id_video");
//---------------------------------
function on_success(stream)
{
	video.srcObject = stream;
}
//---------------------------------
function on_error(error)
{
	alert("Error");
}
//---------------------------------