//表格隔行变色的插件
;(function($){
	$.fn.extend({
		"alterBgColor":function(options){
			return this.each(function(){
				options=$.extend({
				odd:"odd", //偶数行样式
				even:"even", //奇数行样式
				selected:"selected" //选中的行样式				
				},options);
				$("tbody tr:odd",this).addClass(options.odd);
				$('tbody tr:even',this).addClass(options.even);
				$("tbody>tr").click(function(){
					var hasSelected = $(this).hasClass(options.selected);
					$(this)[hasSelected?"removeClass":"addClass"](options.selected)
						.find(":checkbox").attr('checkbox',!hasSelected);
				});
				$('tbody>tr:has(":checked")',this).addClass(options.selected);
				return this;
			});
		}
	});
})(jQuery)


