jQuery().ready(function() {
    jQuery('.star-rating').each(function(){
        var rate = jQuery(this).data('rate');
        jQuery(this).rateYo({
            rating: rate,
            starWidth: "17px",
            normalFill: "#bdbbbc",
            ratedFill: "#231f20",
            readOnly: true,
            spacing: "3px"
        });
    });
});