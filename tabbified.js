(function($){
 
    $.fn.extend({ 
        tabbified: function() {
            return this.each(function() {
                var obj = $(this);
                var baseID = $(obj).attr('id');
                $('div#'+baseID+' > div').each(function(i){
                	if (i == 0){
                		$(this).addClass(baseID+'Nav');
                	} else if (i == 1){
                		$(this).addClass(baseID+'Body');
                	}
				});
                $('div.'+baseID+'Nav > a',obj).each(function(i){
					$(this).attr('id',baseID+'Btn' + i).addClass(baseID+'Btn');
				});
                $('div.'+baseID+'Body > div',obj).each(function(i){
					$(this).attr('id',baseID+'Block' + i).hide().addClass(baseID+'Block');
					$('div.'+baseID+'Block',obj).first().show();
				});
				$('a',obj).on('click',function(i){
					var ID = $(this).attr('id');
					ID = ID.replace('Btn','Block');
					$('div.'+baseID+'Block').hide();
					$('div#' + ID).show();
					$('a.'+baseID+'Btn').removeClass(baseID+'Active');
					$(this).addClass(baseID+'Active');
					i.preventDefault();
				});
				$('a#' + baseID + 'Btn0').addClass(baseID+'Active');
				return this;
            });
        }
    });
     
})(jQuery);