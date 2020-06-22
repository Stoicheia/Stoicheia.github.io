let modals = document.querySelectorAll(".modal");
let nails = document.querySelectorAll(".thumbnail");

console.log(modals);
console.log(nails);

for(let i=0;i<nails.length;i++){
	nails[i].onclick=function(){
		modals[i].style.display = "block";
	}
	window.addEventListener("click", function(e){
		if(e.target==modals[i])
			modals[i].style.display = "none";
	});
}

/*nail.onclick = function(){
	modal.style.display = "block";
}
window.onclick = function(e){
	if(e.target==modal)
		modal.style.display = "none";
}*/