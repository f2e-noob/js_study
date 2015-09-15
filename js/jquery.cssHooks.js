//编写csshooks插件
;(function($){
	$.cssHooks['borderRadius'] ={
		get: function(elem,computed,extra){
			-moz-border-radius,-webkit-border-radius or border-radius
		}
		set: function(ele,value){
			
		}
	}
})(jQuery)
 
