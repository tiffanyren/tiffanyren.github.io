//referred to http://jsfiddle.net/dylanholmes222/LaL3v/1/

$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#bio');
    var offset = startchange.offset();
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {
           $('.container_nav').css('background-color', 'black');
        } else {
           $('.container_nav').css('background-color', 'transparent');
        }
    });
 });

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
  var delay = $('.container_bio h1').text().length * speed + speed;
  typeEffect($('.container_bio h1'), speed);
  setTimeout(function(){
    $('.proj_title h1').css('display', 'inline-block');
    typeEffect($('.proj_title h1'), speed);
  }, delay);
  setTimeout(function(){
   $('.proj_title2 h1').css('display', 'inline-block');
   typeEffect($('.proj_title2 h1'), speed);
 }, delay);
});