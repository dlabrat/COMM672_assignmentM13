$(function() {
    $('.about-block').click(function() {
        $($(this).data('target')).show();
    });
    $('.close-btn').click(function() {
        $($(this).closest('.modal')).hide();
    });
    //close if user is outside of it ?
    $(window).click(function() {
        if ($(event.target).is('modal')) {
            $('.modal').hide();
        }
    });
});

$(function() {
    $(window).scroll(function() {
        //scroll over 300 px
        if ($(this).scrollTop() > 300) {
            $('#back-top-btn').fadeIn();
        }else {
            $('#back-top-btn').fadeOut();
        }
    });
});

$(function() {
    $('.accordian-header').click(function() {
        if($(this).next('.accordian-content').is(':visible')) {
            $(this).next('.accordian-content').slideUp();
        }else{
            $('.accordian-content').slideUp();
            $(this).next('.accordian-content').slideDown();
        }
    })
}); 