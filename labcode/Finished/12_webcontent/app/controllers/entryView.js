var updateWebView = function() {
	$.a.blur();$.b.blur();
	
	Ti.App.fireEvent('updateGraph', {a: Math.floor(parseInt($.a.value)), 
									b: Math.floor(parseInt($.b.value)), 
									c: Math.floor(parseInt($.c.value))});
Ti.App.addEventListener('doneyet',function(e){
		alert(e);
	});
	};

var calcC = function() {
	$.c.value = String(Math.round(100 - parseInt($.a.value || 0) - parseInt($.b.value || 0))+ '');
};

$.submit.addEventListener('click', updateWebView);
$.a.addEventListener('change', calcC);
$.b.addEventListener('change', calcC);
