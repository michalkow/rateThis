(function( $ ){

  var methods = {
    init : function( options ) {
	 
	// Default settings 
	 var settings = $.extend( {
      fullImg : 'full.png',
	  emptyImg : 'empty.png',
	  zero : false,
	  zeroImg : 'zero.png',
	  value : 1,
	  max: 5,
	  hover: true,
	  hoverImg: 'hover.png',
	  disabled : false,
	  disabledZeroImg : 'zero.png',
	  disabledFullImg: 'full.png',
	  disabledEmptyImg: 'empty.png',
    }, options);

       return this.each(function(){
			var root = this;
			var $this=$(this);

			root.max=settings.max;
			root.disabled=settings.disabled;
			root.cvalue=settings.value;
			root.zero=settings.zero;
			root.hover=settings.hover;
			root.hoverImg=settings.hoverImg;
			root.fullImg=settings.fullImg;
			root.emptyImg=settings.emptyImg;
			root.zeroImg=settings.zeroImg;
			root.disabledZeroImg=settings.disabledZeroImg;
			root.disabledFullImg=settings.disabledFullImg;
			root.disabledEmptyImg=settings.disabledEmptyImg;
			
			$this.attr('type', 'hidden');
			$this.after('<div class="rateThis"></div>');
			
			if(root.disabled) {
				var zeroImg = root.disabledZeroImg;
				var fullImg = root.disabledFullImg;
				var emptyImg = root.disabledEmptyImg;
				$this.prop('disabled', true);
			} else {
				var zeroImg = root.zeroImg;
				var fullImg = root.fullImg;
				var emptyImg = root.emptyImg;						
			}

			if(root.zero) {
				$this.next().append('<a href="#" style="border:none" class="rateThis-obj rateThis-0"><img src="'+zeroImg+'" /></a>');
			}
			
			for(i=1;i<=root.max; i++) {
				if(i>root.cvalue) {
					$this.next().append('<a href="#" style="border:none" class="rateThis-obj rateThis-'+i+'"><img src="'+emptyImg+'" /></a>');
				} else {
					$this.next().append('<a href="#" style="border:none" class="rateThis-obj rateThis-'+i+'"><img src="'+fullImg+'" /></a>');
				}
			}
			

			$this.next().find('.rateThis-obj').each(function( index ){
				if(!root.zero) index++;
				$(this).on('click', function() { rate( index, 0 ); return false; });
				if(root.hover) {
					$(this).on('mouseenter', function() { rate( index, 2 ); });
					$(this).on('mouseout', function() { rate( parseInt(root.cvalue), 1) });
				}
			});
			
			function rate(rating, hover) {
				if(!root.disabled) {
					var end = rating;
					var start = root.cvalue;
					if(root.zero) {
						end++;
						start++;
					}
					if(rating>root.cvalue) {
						for(i=start;i<end;i++) {
							if(!$this.next().find('.rateThis-obj').eq(i).hasClass('rateThis-0')) {
								if(hover==2) {
									$this.next().find('.rateThis-obj').eq(i).find('img').attr('src', root.hoverImg);
								} else {
									$this.next().find('.rateThis-obj').eq(i).find('img').attr('src', root.fullImg);
								}
							}	
						}
					} else if(root.cvalue>=rating && hover<2) {
						for(i=end;i<=root.max;i++) {
								$this.next().find('.rateThis-obj').eq(i).find('img').attr('src', root.emptyImg);
						}
					}
					if(!hover) {
						root.cvalue=rating;
						$this.val(rating);
					}
				}
			}

			return this;				
       });
    },
	
    destroy : function( ) {
       return this.each(function(){
				var root = this;
				var $this=$(this);
				$this.attr('type', 'text');
				$this.next().remove();
				return this;
       });
    },
	
	disable : function( ) {
       return this.each(function(){
				var root = this;
				var $this=$(this);
				if(root.zero) {
					$this.next().find('.rateThis-obj').eq(0).find('img').attr('src', root.disabledZeroImg);
					var val = root.cvalue;
				} else {
					var val = root.cvalue-1;
				}
				$this.next().find('.rateThis-obj').each(function( index ){
					if(!$this.next().find('.rateThis-obj').eq(index).hasClass('rateThis-0')) {
						if(index>val) {
							$this.next().find('.rateThis-obj').eq(index).find('img').attr('src', root.disabledEmptyImg);
						} else {
							$this.next().find('.rateThis-obj').eq(index).find('img').attr('src', root.disabledFullImg);
						}	
					}					
				});
				root.disabled=true;
				$this.prop('disabled', true);
				return this;
       });
    },

	enable : function( ) {
       return this.each(function(){
				var root = this;
				var $this=$(this);
				if(root.zero) {
					$this.next().find('.rateThis-obj').eq(0).find('img').attr('src', root.zeroImg);
					var val = root.cvalue;
				} else {
					var val = root.cvalue-1;
				}
				$this.next().find('.rateThis-obj').each(function( index ){
					if(!$this.next().find('.rateThis-obj').eq(index).hasClass('rateThis-0')) {
						if(index>val) {
							$this.next().find('.rateThis-obj').eq(index).find('img').attr('src', root.emptyImg);
						} else {
							$this.next().find('.rateThis-obj').eq(index).find('img').attr('src', root.fullImg);
						}	
					}					
				});
				root.disabled=false;
				$this.prop('disabled', false);
				return this;
       });
    },
	
	update : function( ) {
       return this.each(function(){
				var root = this;
				var $this=$(this);
				var rating = parseInt($this.val());
				var from = rating;
				if(root.zero) from=rating+1;
				if(rating>root.cvalue) {
					for(i=0;i<from;i++) {
						if(!$this.next().find('.rateThis-obj').eq(i).hasClass('rateThis-0')) {
							$this.next().find('.rateThis-obj').eq(i).find('img').attr('src', root.fullImg);
						}	
					}
				} else if(root.cvalue>=rating) {
					for(i=from;i<=root.max;i++) {;
						$this.next().find('.rateThis-obj').eq(i).find('img').attr('src', root.emptyImg);
					}
				}
				root.cvalue=rating;

				return this;
       });
    },
	
	
  };

  $.fn.rateThis = function( method ) {

    if ( methods[method] ) {
      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Method ' +  method + ' does not exist on jQuery.rateThis' );
    }    
  
  };

})( jQuery );