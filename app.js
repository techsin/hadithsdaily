
var menu=$('.menu');
$(window).scroll(fm);
function fm (x) {
	var place=$('body').scrollTop();
	var p=place-rem(8);
	if ( place>rem(9)) {
		menu.css({'top':p});
	} else {menu.css({'top':0});}
	
}

function rem (x) {
	return x* parseInt($('html').css('font-size'));
}
var icon=$('.icon');
icon.on( {'touchstart' :function(){icon.hide();}});