$(document).ready(function () {
	
	$('html').animate( {
		"opacity" : "1"
	}, 3000);
	
	setInterval(function() {
		$('html').css( {
			"background-image" : "url('')",
			"background-color" : "rgba(" +
				Math.floor(Math.random()*256) + ", " +
				Math.floor(Math.random()*256) + ", " +
				Math.floor(Math.random()*256) + ", 0.35)",
			"-webkit-transition" : "all 1.75s",
			"transition-timing-function" : "ease-in-out"
		});
		
		setTimeout(function() {
			$('html').css( {
				"background-color" : "#d3d3d3",
				"-webkit-transition" : "all 1.75s",
				"transition-timing-function" : "ease-in-out"
			});
		}, 1750);
	}, 7000);
	
	$("#pic").on('click', function() {
		
		$(this).css( {
			"margin-left": (Math.floor(Math.random() * 88 - 86/2 + 1) + "vw"),
			"margin-top": (Math.floor(Math.random() * 86 - 86/2 + 1) + "vh"),
			"-webkit-transition" : "all 2s",
			"transition-timing-function" : "ease-in-out"
		});
		
		$('html').css( {
			"background-color" : "rgba(" +
				Math.floor(Math.random()*256) + ", " +
				Math.floor(Math.random()*256) + ", " +
				Math.floor(Math.random()*256) + ", 0.6)",
			"-webkit-transition" : "all 1s",
			"transition-timing-function" : "ease-in-out"
		});
		
		setTimeout(function() {
			$('html').css( {
				"background-color" : "#e2e2e2",
				"-webkit-transition" : "all 1s",
				"transition-timing-function" : "ease-in-out"
			});
		}, 875);
	});
	
	$("#speaker").on('click', function() {
		if ($('audio').prop('muted'))
			$('audio').prop('muted', false);
		else
			$('audio').prop('muted', true);
	});
});
















