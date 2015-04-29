// Toggles hide class on .toggle when .toggle-button clicked

document.addEventListener('DOMContentLoaded', function() {
	[].forEach.call(document.querySelectorAll('.toggle-button'), function(el) {
		el.addEventListener('click', function(e) {
			if (e.target.nodeName.toLowerCase() == 'a') {
				e.preventDefault();
			}
			[].forEach.call(document.querySelectorAll('.toggle'), function(el) {
				el.classList.toggle('hide');
			});
		});
	});
});


// Toggles open class on .toggle-button when .toggle-button clicked

document.addEventListener('DOMContentLoaded', function() {
	[].forEach.call(document.querySelectorAll('.toggle-button'), function(el) {
		el.addEventListener('click', function(e) {
			if (e.target.nodeName.toLowerCase() == 'a') {
				e.preventDefault();
			}
			[].forEach.call(document.querySelectorAll('.toggle-button'), function(el) {
				el.classList.toggle('open');
			});
		});
	});
});