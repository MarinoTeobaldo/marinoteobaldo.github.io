// Math
let math = {
	rand_num(a,b) { return Math.floor(Math.random() * (b - a + 1)) + a; },
	rand_bool() { return Math.random() >= 0.5; },
	rand_sign() { return Math.random() < 0.5 ? -1 : 1; },
	lerp(a,b,c) { return (1 - c) * a + c * b; },
	scale(i,o) {}
};

// Elements
let html = document.querySelector('html');

// Measurements (Declaration)
var win_w = window.innerWidth,
	win_h = window.innerHeight,
	vw = win_w/100,
	vh = win_h/100,
	resize = new ResizeObserver(entries => {measure_core();});

// Measurements (Function)
function measure_core() {
	win_w = window.innerWidth;
	win_h = window.innerHeight;
	vw = win_w/100;
	vh = win_h/100;
};
document.addEventListener("DOMContentLoaded", measure_core);
window.addEventListener('resize', measure_core);


// Scroll
let scroll_y = 0;



// Here we go
html.classList.remove("noscript");
html.classList.add("js");


