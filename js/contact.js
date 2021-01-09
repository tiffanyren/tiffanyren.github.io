function showForm() {
	var show = document.getElementById("contact_form");
	if (!show.style.display || show.style.display === "none") {
		show.style.display = "flex";
	  } else {
		show.style.display = "none";
	  }
  }
 
  function showSite() {
	var show = document.getElementById("website");
	if (!show.style.display || show.style.display === "none") {
	  show.style.display = "inline";
	} else {
	  show.style.display = "none";
	}
  }

  function showIn() {
	var show = document.getElementById("linkedin");
	if (!show.style.display || show.style.display === "none") {
	  show.style.display = "inline";
	} else {
	  show.style.display = "none";
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
