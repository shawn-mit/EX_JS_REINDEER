var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure"];


var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

//var reindeerColors  = colors.concat (reindeer);

var  reinTrash = "";

//console.log( reindeerColors ) ; 

var hohohoElement = document.getElementById("coloredReindeer");

for (var r = 0; r < colors.length; r ++  ) {
	//for (var c = 0; c < newColors; c ++){
	var reinCan = [];	
	//var newColors = [];.toString()
	reinCan = colors[r] + " " + reindeer[r];
	
	//hohohoElement.innerHTML = "<p>" + reinCan + "</p>";
	hohohoElement.innerHTML += "<p>" + reinCan + "</p>"; 
	

}

	//reinTrash = reinCan 
	



//function reindeer (var, var) 

