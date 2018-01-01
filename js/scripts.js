//fetching HTML Elements in variables by ID
var x = document.getElementById("form_sample");

var createform = document.createElement('form'); // Create New Element form
 createform.setAttribute("action", ""); // Setting action Attribute on form
 createform.setAttribute("method", "post"); // Setting method Attribute on form
 x.appendChild(createform);

 var heading = document.createElement('h2'); // Heading of form
 heading.innerHTML = "Contact Form ";
 createform.appendChild(heading);

 var line = document.createElement('hr'); //giving horizontal row after heading
 createform.appendChild(line);

 

var navigate = (function() {
	$('.dd').toggle();
	$('.dd_btn').click(function() {
		var dataName = $(this).attr('data-name');
		$('.dd').hide();
		$('.' + dataName).toggle();
	});
})();
