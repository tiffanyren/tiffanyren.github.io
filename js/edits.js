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
  var delay = $('.container_edits h1').text().length * speed + speed;
  typeEffect($('.container_edits h1'), speed);
});