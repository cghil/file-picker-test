$(document).ready(function(){
	var boxSelect = new BoxSelect();
	boxSelect.success(function(response){
		console.log(response);
	});

	boxSelect.cancel(function(){
		console.log('the user clicked cancel or closed the popup')
	})
});