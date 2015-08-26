;(funtion($){
	$.extend({
		ltrim: function ltrim(text){
				return (text || "").replace(/^\s+/g, "");
			} 
		rtrime: function rtrim(text){
				return (text || "").replace(/^\s+/g,"");
			}
	})
	$("#trimTest").val(
		$.trim(" test ") + "\n" + $.ltrim(" test ") + "\n" + $.rtrim(" test ") + "\n"
	)
})(jQuery)

