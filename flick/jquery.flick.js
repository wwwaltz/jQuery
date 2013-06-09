/* jQuery flick plugin v0.91 | Copyright (c) 2013 wwwaltz | This source code is provided under the MIT license.*/
(function(jQuery){

jQuery.fn.hflick = function( cbfunc_l, cbfunc_r, option )
{
	if( !option ){ option = {}; }
	if( !option["min_diff"] ){ option["min_diff"] = 100; }

	var timeout = null;
	var x_start = -1;
	var x_diff  = 0;

	$(this).bind("touchstart", function(e)
	{
		if( option["trigger"] && !isInElement( $(option["trigger"]), e ) )
		{
			return ;
		}

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
			if( options["min_diff"] < Math.abs(x_diff) )
			{
				if( x_diff < 0 )
				{
					if(cbfunc_l){ cbfunc_l(x_start,x_diff); }
				}
				else
				{
					if(cbfunc_r){ cbfunc_r(x_start,x_diff); }
				}
			}
		}
		x_start = -1;
	});
}

jQuery.fn.vflick = function( cbfunc_u, cbfunc_d, option )
{
	if( !option ){ option = {}; }
	if( !option["min_diff"] ){ option["min_diff"] = 100; }

	var timeout = null;
	var y_start = -1;
	var y_diff  = 0;

	$(this).bind("touchstart", function(e)
	{
		if( option["trigger"] && !isInElement( $(option["trigger"]), e ) )
		{
			return ;
		}

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
			if( option["min_diff"] < Math.abs(y_diff) )
			{
				if(y_diff < 0)
				{
					if(cbfunc_u){ cbfunc_u(y_start,y_diff); }
				}
				else
				{
					if(cbfunc_d){ cbfunc_d(y_start,y_diff); }
				}
			}
		}
		y_start = -1;
	});
}

jQuery.fn.hflick_mouse = function( cbfunc_l, cbfunc_r, option )
{
	if( !option ){ option = {}; }
	if( !option["min_diff"] ){ option["min_diff"] = 100; }

	var timeout = null;
	var x_start = -1;
	var x_diff  = 0;

	$(this).bind( "mousedown", function(e)
	{
		if( option["trigger"] && !isInElement( $(option["trigger"]), e ) )
		{
			return ;
		}

		if( !timeout )
		{
			timeout = setTimeout( function(){timeout=null;}, 1000 );
			e.preventDefault();
			x_start = e.pageX;
			x_diff  = 0;
		}
	});

	$(this).bind( "mouseup", function(e)
	{
		if( timeout && x_start >= 0 )
		{
			clearTimeout( timeout );
			timeout = null;
			
			e.preventDefault();
			x_diff = e.pageX - x_start;
			if( option["min_diff"] < Math.abs(x_diff) )
			{
				if( x_diff < 0 )
				{
					if(cbfunc_l){ cbfunc_l(x_start,x_diff); }
				}
				else
				{
					if(cbfunc_r){ cbfunc_r(x_start,x_diff); }
				}
			}
		}
		x_start = -1;
	});
}


jQuery.fn.vflick_mouse = function( cbfunc_u, cbfunc_d, option )
{
	if( !option ){ option = {}; }
	if( !option["min_diff"] ){ option["min_diff"] = 100; }

	var timeout = null;
	var y_start = -1;
	var y_diff  = 0;

	$(this).bind( "mousedown", null, function(e)
	{
		if( option["trigger"] && !isInElement( $(option["trigger"]), e ) )
		{
			return ;
		}

		if( !timeout )
		{
			timeout = setTimeout( function(){timeout=null;}, 1000 );
			e.preventDefault();
			y_start = e.pageY;
			y_diff = 0;
		}
	});

    $(this).bind( "mouseup", function(e)
	{
		if( timeout && y_start >= 0 )
		{
			clearTimeout( timeout );
			timeout = null;
			e.preventDefault();
			y_diff = e.pageY - y_start;
			if( option["min_diff"] < Math.abs(y_diff) )
			{
				if( y_diff < 0 )
				{
					if(cbfunc_u){ cbfunc_u(y_start,y_diff); }
				}
				else
				{
					if(cbfunc_d){ cbfunc_d(y_start,y_diff); }
				}
			}
		}
		y_start = -1;
	});
}


function isInElement( jqobj, e )
{
	var left   = jqobj.position().left;
	var right  = left + jqobj.outerWidth();
	var top    = jqobj.position().top;
	var bottom = top + jqobj.outerHeight();
	if( left <= e.pageX && e.pageX <= right && top <= e.pageY && e.pageY <= bottom )
	{
		return true;
	}
	return false;
}
})(jQuery);
