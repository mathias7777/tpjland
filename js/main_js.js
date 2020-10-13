var username;
var wtf = window.localStorage;
if (wtf.getItem("username") != null){
	alert("warning! " + wtf.getItem("username") + ", you already have a username ")
	window.location = "main.html"
}
$("form").submit(function(event){
	event.preventDefault();
	if (($("#namein")[0]["value"]).length == 0){
		$("#responce1")[0]["innerHTML"] = "iolm ya ujne ereur :)"
		$("#responce1").css("color", "red")
		$("#responce1").css("display", "block");
	}else{
		wtf.setItem("username", $("#namein")[0]["value"])
		$("#responce1")[0]["innerHTML"] = $("#namein")[0]["value"] + " bienve,,,,,,,,,"
		$("#responce1").css("color", "green")
		$("#responce1").css("display", "block")

	}
});