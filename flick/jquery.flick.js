/* jQuery flick plugin v0.90 | Copyright (c) 2013 wwwaltz | This source code is provided under the MIT license.*/
(function(jQuery){

jQuery.fn.hflick = function( min_diff, cbfunc_l, cbfunc_r )
{
	var timeout = null;
	var x_start = -1;
	var x_diff  = 0;

	$(this).bind("touchstart", function(e)
	{
		if( !timeout )
		{
			timeout = setTimeout( function(){timeout=null;}, 1000 );
			e.preventDefault();
			x_start = e.touches[0].pageX;
			x_diff = 0;
		}
	});
    $(this).bind("touchmove", function(e)
	{
		if( timeout && x_start >= 0 )
		{
			e.preventDefault();
			x_diff = e.touches[0].pageX - x_start;
		}
	});
    $(this).bind("touchend", function(e)
	{
		if( timeout && x_start >= 0 )
		{
			clearTimeout( timeout );
			timeout = null;

			e.preventDefault();
			if( min_diff < Math.abs(x_diff) )
			{
				if( x_diff < 0 ){ cbfunc_l( x_diff ); }
				else{ cbfunc_r( x_diff ); }
			}
		}
		x_start = -1;
	});
}

jQuery.fn.vflick = function( min_diff, cbfunc_u, cbfunc_d )
{
	var timeout = null;
	var y_start = -1;
	var y_diff  = 0;

	$(this).bind("touchstart", function(e)
	{
		if( !timeout )
		{
			timeout = setTimeout( function(){timeout=null;}, 1000 );
			e.preventDefault();
			y_start = e.touches[0].pageY;
			y_diff = 0;
		}
	});
    $(this).bind("touchmove", function(e)
	{
		if( timeout && y_start >= 0 )
		{
			e.preventDefault();
			y_diff = e.touches[0].pageY - y_start;
		}
	});
    $(this).bind("touchend", function(e)
	{
		if( timeout && y_start >= 0 )
		{
			clearTimeout( timeout );
			timeout = null;

			e.preventDefault();
			if( min_diff < Math.abs(y_diff) )
			{
				if( y_diff < 0 ){ cbfunc_u( y_diff ); }
				else{ cbfunc_d( y_diff ); }
			}
		}
		y_start = -1;
	});
}

jQuery.fn.hflick_mouse = function( min_diff, cbfunc_l, cbfunc_r )
{
	var timeout = null;
	var x_start = -1;
	var x_diff  = 0;

	$(this).bind("mousedown", function(e)
	{
		if( !timeout )
		{
			timeout = setTimeout( function(){timeout=null;}, 1000 );
/*			e.preventDefault();*/
			x_start = e.pageX;
			x_diff  = 0;
		}
	});
    $(this).bind("mouseup", function(e)
	{
		if( timeout && x_start >= 0 )
		{
			clearTimeout( timeout );
			timeout = null;
			
/*			e.preventDefault();*/
			x_diff = e.pageX - x_start;
			if( min_diff < Math.abs(x_diff) )
			{
				if( x_diff < 0 ){ cbfunc_l( x_diff ); }
				else{ cbfunc_r( x_diff ); }
			}
		}
		x_start = -1;
	});
}


jQuery.fn.vflick_mouse = function( min_diff, cbfunc_u, cbfunc_d )
{
	var timeout = null;
	var y_start = -1;
	var y_diff  = 0;

	$(this).bind("mousedown", function(e)
	{
		if( !timeout )
		{
			timeout = setTimeout( function(){timeout=null;}, 1000 );
			e.preventDefault();
			y_start = e.pageY;
			y_diff = 0;
		}
	});
    $(this).bind("mouseup", function(e)
	{
		if( timeout && y_start >= 0 )
		{
			clearTimeout( timeout );
			timeout = null;

			e.preventDefault();
			y_diff = e.pageY - y_start;
			if( min_diff < Math.abs(y_diff) )
			{
				if( y_diff < 0 ){ cbfunc_u( y_diff ); }
				else{ cbfunc_d( y_diff ); }
			}
		}
		y_start = -1;
	});
}
})(jQuery);
