,(function($){
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
	//插件闭包
	;(function($){
		var foo;
		var bar = functiona(){
			//代码模块
		}
		$.BAR = bar;
	})(jQuery);

	// jQuery 提供了二个扩展jquery功能方法 jquery.fn.extend() 和 jquery.extend();
	;(function($){
		var settings = {validate:false,limit:5,name:"foo"};
		var options = {validate:true, name: "bar"};
		var newOptions = $.extend(settings,options);
	})
	function foo(options){
		options = $.extend({
			name: "bar",
			length:5,
			dataType: "xml"
		},options)
	}	
})
