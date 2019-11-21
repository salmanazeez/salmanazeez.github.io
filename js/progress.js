(function() {
	window.onload = function() {
    var totalProgress, progress;
		const circles = document.querySelectorAll('.progress-radial');
		for(var i = 0; i < circles.length; i++) {
			totalProgress = circles[i].querySelector('circle').getAttribute('stroke-dasharray');
			progress = circles[i].parentElement.getAttribute('data-percent');

			circles[i].querySelector('.bar').style['stroke-dashoffset'] = totalProgress * progress / 100;
		}
	}
})();