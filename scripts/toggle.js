var soundCounter=0;
function playSound(idString){
	var sound=document.getElementById(idString);
	if (soundCounter==0){
		sound.play();
		soundCounter++;
	} else if (soundCounter==1){
		sound.pause();
		soundCounter=0;
	}
}

var showCounter=0;
function show(idString){
element=document.getElementById(idString);
if(showCounter==0){
	element.style.display='block';
	showCounter++
}else if(showCounter==1){
	element.style.display='none';
	showCounter=0;
}
}

var hideCounter=0;
function hide(idString){
element=document.getElementById(idString);
if(hideCounter==0){
	element.style.display='none';
	hideCounter++
}else if(hideCounter==1){
	element.style.display='block';
	hideCounter=0;
}
}

var partyCounter=0;
function lightsOff(){
	sound=document.getElementById("announcement");
	map=document.getElementById("containment-wrapper");
	foods=document.getElementById("foods");
	if (partyCounter==0){
		sound.play();
		foods.style.display="block";
		map.style.backgroundImage="url('assets/background-dark.jpeg')";
		partyCounter=1;
	}else if(partyCounter==1){
		sound.pause();
		map.style.backgroundImage="url('assets/background.jpeg')";
		partyCounter=0;
	}
}