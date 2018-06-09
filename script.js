var btn = document.getElementById('enter');
var input = document.getElementById('inn');
var ul = document.querySelector("ul");

btn.addEventListener("click",function() {
	if(input.value.length>0){
		fun();
	}
	
})

input.addEventListener("keypress",function(event) {
	if(input.value.length>0 && event.which === 13){
		fun();
	}
	
})
function fun(){
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		input.value="";

}
ul.addEventListener("click",function(event){
	if(event.target.tagName === "LI"){
		event.target.classList.toggle("done");
	}
})