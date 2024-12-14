$('.about_item').click(function () {
    $('.about').addClass('show_about');
});
$('.contact_item').click(function () {
    $('.contact').addClass('show_contact');
});
$('.gallery_item').click(function () {
    $('.portfolio').addClass('show_portfolio');
});


$('.close_icon').click(function () {
    $('.about , .portfolio , .contact').removeClass('show_about , show_contact , show_portfolio');
});





// $('.close_icon').click(function () {
//     $('.contact').removeClass('show_contact');
// });

// $('.close_icon').click(function () {
//     $('.portfolio').removeClass('show_portfolio');
// });


