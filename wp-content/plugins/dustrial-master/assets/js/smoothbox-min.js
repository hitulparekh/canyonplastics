jQuery(document).ready(function(){jQuery(".sb").click(function(s){var e=jQuery(this).index(".sb");jQuery("body").append('<div class="smoothbox sb-load"><div class="smoothbox-table"><div class="smoothbox-centering"><div class="smoothbox-sizing"><div class="sb-nav"><span class="sb-prev sb-prev-on" alt="Previous">&larr;</span><span class="sb-cancel" alt="Close">&times;</span><span class="sb-next sb-next-on" alt="Next">&rarr;</span></div><ul class="sb-items"></ul></div></div></div></div>'),jQuery.fn.reverse=[].reverse,jQuery(".sb").reverse().each(function(){var s=jQuery(this).attr("href");if(jQuery(this).attr("title")){var e=jQuery(this).attr("title");jQuery(".sb-items").append('<div class="sb-item"><div class="sb-caption">'+e+'</div><img src="'+s+'"/></div>')}else jQuery(".sb-items").append('<div class="sb-item"><img src="'+s+'"/></div>')}),jQuery(".sb-item").slice(0,-e).appendTo(".sb-items"),jQuery(".sb-item").not(":last").hide(),jQuery(".sb-item img:last").load(function(){jQuery(".smoothbox-sizing").fadeIn("slow",function(){jQuery(".sb-nav").fadeIn(),jQuery(".sb-load").removeClass("sb-load")})}),s.preventDefault()}),jQuery(document).on("click",".sb-cancel",function(s){jQuery(".smoothbox").fadeOut("slow",function(){jQuery(".smoothbox").remove()}),s.preventDefault()}),jQuery(document).on("click",".sb-next-on",function(s){jQuery(this).removeClass("sb-next-on"),jQuery(".sb-item:last").addClass("sb-item-ani"),jQuery(".sb-item:last").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(){jQuery(".sb-item").eq(-2).addClass("no-trans").fadeIn("fast"),jQuery(this).removeClass("sb-item-ani").prependTo(".sb-items").hide(),jQuery(".sb-item:last").removeClass("no-trans"),jQuery(".sb-next").addClass("sb-next-on"),jQuery(".sb-item").unbind()}),s.preventDefault()}),jQuery(document).on("click",".sb-prev-on",function(s){jQuery(this).removeClass("sb-prev-on"),jQuery(".sb-item:last").hide(),jQuery(".sb-item:first").addClass("sb-item-ani2 no-trans").appendTo(".sb-items"),jQuery(".sb-item:last").show().removeClass("no-trans").delay(1).queue(function(s){jQuery(".sb-item:last").removeClass("sb-item-ani2"),s()}),jQuery(this).addClass("sb-prev-on"),s.preventDefault()})});