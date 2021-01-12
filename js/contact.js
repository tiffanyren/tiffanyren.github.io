function showForm() {
	var show1 = document.getElementById("contact_form");
	var show2 = document.getElementById("website");
	var show3 = document.getElementById("linkedin");
	if (!show1.style.display || show1.style.display === "none") {
		show1.style.display = "flex";
		show2.style.display = "none";
		show3.style.display = "none";
	  } else {
		show1.style.display = "none";
	  }
  }
 
  function showSite() {
	var show1 = document.getElementById("contact_form");
	var show2 = document.getElementById("website");
	var show3 = document.getElementById("linkedin");
	if (!show2.style.display || show2.style.display === "none") {
	  show2.style.display = "inline";
	  show1.style.display = "none";
	  show3.style.display = "none";
	} else {
	  show2.style.display = "none";
	}
  }

  function showIn() {
	var show1 = document.getElementById("contact_form");
	var show2 = document.getElementById("website");
	var show3 = document.getElementById("linkedin");
	if (!show3.style.display || show3.style.display === "none") {
		show1.style.display = "none";
		show2.style.display = "none";
		show3.style.display = "inline";
	} else {
	  show3.style.display = "none";
	}
  }

 //referred to https://codepen.io/worksbyvan/pen/dRBGKK

 function typeEffect(element, speed) {
	var text = $(element).text();
	$(element).html('');
	
	var i = 0;
	var timer = setInterval(function() {
					if (i < text.length) {
						$(element).append(text.charAt(i));
						i++;
					} else {
						clearInterval(timer);
					}
				}, speed);
}

$( document ).ready(function() {
  var speed = 100;
  var delay = $('.container_form h1').text().length * speed + speed;
  typeEffect($('.container_form h1'), speed);
});
