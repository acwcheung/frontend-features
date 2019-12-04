let image = document.getElementsByClassName("image");
let stroke = document.getElementsByClassName("stroke");

let slideIndex = 0;

const arrowClick = (n) => {
	clearInterval(timer);
	if(n == 1) {
		indexConverter(1);
		timer = setInterval(()=>{indexConverter(1)}, 3000);	
	} else {
		indexConverter(-1);
		timer = setInterval(()=>{indexConverter(1)}, 3000);	
	}	
}

const slideClick = (n) => {
	clearInterval(timer);
	showSlide(n);
	slideIndex = n;
	timer = setInterval(()=>{indexConverter(1)}, 3000);	
}

const indexConverter = (n) => {
	slideIndex += n;
	if(slideIndex < 0) {
		slideIndex = image.length-1;
	} else if(slideIndex >= image.length) {
		slideIndex = 0;
	} else { 
		slideIndex; 
	}
	showSlide(slideIndex);
}

const showSlide = (index) => {
	console.log(index)
	let i;
	for (i=0; i<image.length; i++) {
		image[i].style.display = "none"
	}
	for (i=0; i<stroke.length; i++) {
		stroke[i].classList.remove("active")
	}
	image[index].style.display = "block";
	stroke[index].classList.add("active");
}

let timer = setInterval(()=>{indexConverter(1)}, 3000);



