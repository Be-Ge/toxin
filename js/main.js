var buttons = document.querySelectorAll('.js-input-button')
var inputNumber = document.querySelector('.js-input')

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function() {
		var dataChange = this.dataset.change;
		var value = +inputNumber.value
		if (value === 0 && dataChange === 'decrease') return
		inputNumber.value = dataChange === 'decrease' ? value - 1 : value + 1
	})
}

$(".select-dropdown > ul > li").click(function() {
	$(this)
		.parents(".select-dropdown")
		.find('input[type="text"]')
		.val($(this).text());
});

// remove all active classes on the other select-dropdowns
$(".select-dropdown").click(function() {
	$(".select-dropdown").not($(this)).removeClass("active");
	$(this).toggleClass("active");
});


// this event is to close all open select-options when the user clicks off.
$("html").click(function(event) {
	if (!$(event.target).closest(".select-dropdown").length) {
		$(".select-dropdown").removeClass("active");
	}
});