a = document.getElementById("slot1");
b = document.getElementById("slot2");
c = document.getElementById("slot3");
// el.src.match("images/lemon_slot.PNG")
// el.src = "images/orange_slot.PNG";
// el.src = "images/cherry_slot.PNG";
// document.getElementById('you-win').play();
// el.src.match("images/cherry_slot.PNG")
// el.src = "images/lemon_slot.PNG";
// el.src.match("images/orange_slot.PNG")

// cycle images in the following order: CHERRY --> LEMON --> ORANGE
function nextImage(el){
	if (el.src.match("images/cherry_slot.PNG")){
		// if the image is a cherry, change it to a lemon!
		el.src = "images/lemon_slot.PNG";	
	} else if (el.src.match("images/lemon_slot.PNG")){
		// if the image is a lemon, change it to an orange!
		el.src = "images/orange_slot.PNG";
	} else if (el.src.match("images/orange_slot.PNG")){
		// if the image is an orange, change it to a cherry!
		el.src = "images/seven_slot.PNG";
	} else if (el.src.match("images/seven_slot.PNG")){
		// if the image is an orange, change it to a cherry!
		el.src = "images/bar_slot.PNG";
	} else if (el.src.match("images/bar_slot.PNG")){
		// if the image is an orange, change it to a cherry!
		el.src = "images/cherry_slot.PNG";
	} else {
		// do nothing
	}
}

// LEMON --> BAR --> CHERRY
// function nextImage(el){}


// ORANGE --> CHERRY --> SEVEN --> WATERMELON
//function nextImage(el){}

function playSound() {
	document.getElementById('you-win').play();
}

function jackpot(el) {
	if (a.src.match("images/cherry_slot.PNG") && b.src.match("images/cherry_slot.PNG") && c.src.match("images/cherry_slot.PNG")){
		document.getElementById('you-win').play()
		console.log("You Win!");
		a.classList.add("opaque");
		b.classList.add("opaque");
		c.classList.add("opaque");
	}else {
	}
}

