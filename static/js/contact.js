function contacter() {
	var form = document.getElementById("contact-form");
	$("#contact-form").submit(function(event) {
		event.preventDefault();
		event.stopPropagation();
	});

	if ($(form)[0].checkValidity()) {
		$.ajax({
			data : $(form).serialize(),
			type : 'post',
			url : '../../src/contact_src.php',
			success : function(html) {
				form.reset();
				$("#myModal").modal();					
			}
		});
	}
}