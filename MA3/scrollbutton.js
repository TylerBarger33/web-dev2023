	var scrollbutton = document.getElementById("scrollbutton");
	
	window.addEventListener("scroll", function() {
		if (window.pageYOffset > 200) { 
			scrollbutton.style.display = "block";
		} else {
			scrollbutton.style.display = "none";
		}
	});
	
	scrollbutton.addEventListener("click", function() {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	});