(function($){
	$.fn.smchajian = function(callback){

	}
})(JQuery);

(function ($) {
    $.tableUI = { set: function () {
        var thisTable = $("table");
        $(thisTable).find("tr").bind("mouseover", function () {
            $(this).css({ color: "#ff0011", background: "blue" });
        });
        $(thisTable).find("tr").bind("mouseout", function () {
            $(this).css({ color: "#000000", background: "white" });
        });
    }
    };
    //此处需要进行自调用
    $(function () {
        $.tableUI.set();
    });
})(jQuery);


(function($){
	$.fn.tableUI = function(set){
		var thisTable = $('table');
		thisTabl.find('tr').bind('mouseover',function(){
			$(this).csss({background:'#ccc',color:'red'})
		})
		thisTabl.find('tr').bind('mouseover',function(){
			$(this).csss({background:'#ccc',color:'red'})
		})
	}
})
