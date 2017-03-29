$(document).ready(function(){
	$(".line1").delay(5000).fadeOut();
	$(".line2").delay(9500).fadeOut();
	$(".sad").delay(9500).fadeOut();
	$(".line3").delay(14000).fadeOut();
	$(".line4").delay(18500).fadeOut();
	$(".soldier").delay(18500).fadeOut();
	$(".line5").delay(23000).fadeOut();
	$(".line6").delay(27500).fadeOut();
	$(".mother").delay(27500).fadeOut();
	$(".line7").delay(32000).fadeOut();
	$(".line8").delay(36500).fadeOut();
	$(".line9").delay(40500).fadeOut();
	$(".line10").delay(45000).fadeOut();
	$(".line11").delay(49500).fadeOut();
	$(".line12").delay(54000).fadeOut();
	$(".line13").delay(58500).fadeOut();
	$(".line14").delay(63000).fadeOut();
});

function animateHeart() {
		var heart = $(".heart");
    	heart.animate({'width':'65px'},500);
    	heart.animate({'width':'60px'},500);
    	animateHeart();  
  	}
animateHeart();