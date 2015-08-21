//编写设置和获取颜色的插件
;(function($){
	/*$.fn.color=function(value){
		return this.css("color",value);
	}*/
	$.fn.extend({
		"color":function(value){
			return this.css('color',value);
		},
		"border":function(value){
			return this.css('border',value)
		}
	})
})(jQuery)
