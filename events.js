console.log("Event-handlers")

var section = document.getElementsByClassName("article-section");

for (i in section){
	section.item(i).addEventListener("click", function(){
		document.getElementById("output-target").innerHTML = "You clicked on the " + event.target.innerHTML + " section.";
	});
};

var h1mouseover = document.getElementById("page-title").addEventListener("mouseover", function(){
	document.getElementById("output-target").innerHTML = "You moved your mouse over the header.";
});

var h1mouseout = document.getElementById("page-title").addEventListener("mouseout", function(){
	document.getElementById("output-target").innerHTML = "You left me!!";
});

var in2out = document.getElementById("keypress-input");
in2out.addEventListener("keyup", function(){
	document.getElementById("output-target").innerHTML = in2out.value;
});

var outputtarget = document.getElementById("output-target")
document.getElementById("add-color").addEventListener("click", function(){
	outputtarget.classList.toggle("addcolor")
});

document.getElementById("make-large").addEventListener("click", function(){
	outputtarget.classList.toggle("large")
});

document.getElementById("add-border").addEventListener("click", function(){
	outputtarget.classList.toggle("capture")
});

document.getElementById("add-rounding").addEventListener("click", function(){
	outputtarget.classList.toggle("rounded")
});