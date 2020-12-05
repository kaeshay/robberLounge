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