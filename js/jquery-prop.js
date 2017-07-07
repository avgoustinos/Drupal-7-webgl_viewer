(function($){
    if (typeof $.fn.prop !== 'function')
    $.fn.prop = function(name, value){
        if (typeof value === 'undefined') {
            return this.attr(name);
        } else {
            return this.attr(name, value);
        }
    };
})(jQuery);