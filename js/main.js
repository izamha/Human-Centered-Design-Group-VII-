$(document).ready(function () {
    $('#action_menu_btn').click(function () {
        $('.action_menu').toggle();
    });
    $('.settings').click(function () {
        $('.show-settings').toggle();
    })
});

// Hide the menus upon clicking outside
// $(document).on('click', function (e) {
//     if ($(e.target).closest(".show-settings").length === 0) {
//         $(".show-settings").hide();
//     }
// });
