//referred to http://jsfiddle.net/dylanholmes222/LaL3v/1/

$(document).ready(function(){       
    var scroll_start = 0;
    var startchange = $('#tagline');
    var offset = startchange.offset();
    $(document).scroll(function() { 
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top) {
           $('.container_nav').css('background-color', 'rgba(223, 157, 185, 1)');
        } else {
           $('.container_nav').css('background-color', 'rgb(255,255,255,0.08)');
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


window.addEventListener('scroll', function() {
    // Get scroll percentage
    var scrollTop = window.scrollY;
    var docHeight = document.body.scrollHeight - window.innerHeight;
    var scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;

    // Move background by percentage (adjust multiplier for effect strength)
    var yPos = scrollPercent * 1000; // 300px max movement, adjust as needed
    document.body.style.backgroundPosition = 'center ' + yPos + 'px';
});



$( document ).ready(function() {
  var speed = 100;
  var delay = $('.container_home p').text().length * speed + speed;

  typeEffect($('.container_home p'), speed);
 
  setTimeout(function(){
    $('.proj_title h1').css('display', 'block');
    typeEffect($('.proj_title h1'), speed);
  }, delay);

  delay += $('.proj_title h1').text().length * speed + speed;

  setTimeout(function(){
   $('.proj_title2 h1').css('display', 'block');
   typeEffect($('.proj_title2 h1'), speed);
 }, delay);
});

document.querySelectorAll('.button_nav1').forEach(function(btn) {
    btn.addEventListener('mouseenter', function() {
        document.querySelector('.container_starryeffect').style.opacity = '1';
    });
    btn.addEventListener('mouseleave', function() {
        document.querySelector('.container_starryeffect').style.opacity = '0';
    });
});
