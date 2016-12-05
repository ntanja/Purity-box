$(document).ready(function () {

    //owl carousel
    $("#owl").owlCarousel({
        navigation: true,
        navigationText: ["prev", "next"],
    });

    //Removing(hiding) filters
    $('.remove-filt').click(function () {
        var txt = $(this).text();

        if (txt == 'Skloni filter') {
            $('.filters-hide').hide();
            $('.products-show').show();
            $(this).text('Prikazi filter');
            $(this).addClass('fa fa-angle-right');
        } else {
            $('.filters-hide').show();
            $('.products-show').hide();
            $(this).text('Skloni filter');
            $(this).removeClass('fa fa-angle-right');
            $(this).addClass('fa fa-angle-left');
        }
    });
    //remove one filter sub-category
    $('.cat-face').click(function () {
        $(this).parent().hide();
    });
    //remove filter category
    $('.hide-filter').click(function () {
        $(this).parent().parent().parent().hide();
    });
    //hide filter sub-menu(checkbox)
    $('.types').click(function () {
        $('.filter-category form.hide-form').toggle();
    });
    //small resoutions filters
    $('.cog-filter').click(function () {
        $('.filters-hide').toggle();
        $('.filter-large').toggle();
    });
    
    //MODAL QUANTITY

    // This button will increment the value
    $('.qtyplus').click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name=' + fieldName + ']').val(currentVal + 1);
        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(0);
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function (e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name=' + fieldName + ']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 0) {
            // Decrement one
            $('input[name=' + fieldName + ']').val(currentVal - 1);
        } else {
            // Otherwise put a 0 there
            $('input[name=' + fieldName + ']').val(0);
        }
    });

    //show-hide password - login page
    $('.showPass').click(function () {
        $(this).toggleClass('fa-eye fa-eye-slash');

        var type = $(this).parent().siblings().attr('type');

        if (type == 'password') {
            $(this).parent().siblings().attr('type', 'text');
        } else {
            $(this).parent().siblings().attr('type', 'password');
        }
    });

    //show textarea
    $('.leave-comm').click(function () {
        $('.hide-comment').toggle();
    });
    //show user comments
    $('.see-comment').click(function () {
        $('.user-comment').toggle();
    });

$('.flexslider').flexslider({
    animation: "slide"
  });

    //form
    $('.reg-form').validator();
    $('#myForm').validator();


});