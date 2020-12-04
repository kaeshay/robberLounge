var dayCounter;
function nightTime(){
	backgroundContainer=document.getElementById('containment-wrapper');
	sun=document.getElementById('sun')
	if(dayCounter == 0){
		backgroundContainer.style.backgroundColor='black';
		sun.src="assets/kay/moon.gif";
		dayCounter++;
	}
	else{
		backgroundContainer.style.backgroundColor='white';
		sun.src="assets/kay/sun.png";	
		dayCounter = 0;
	}
}

var counter = 0;
function showInventory(idString){
	element = document.getElementById(idString);
	if(counter==0){
		element.style.display='block';
		counter++;
	} else if (counter==1){
		element.style.display='none';
		counter=0;
	}
}
