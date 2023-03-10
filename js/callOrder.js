jQuery(document).ready(function ($) {

    $(".ajax-contact-form").submit(function () {
        var str = $(this).serialize();

        $.ajax({
            type: "POST",
            url: "../salon/callsend.php",
            data: str,
            success: function (msg) {
                if (msg == 'OK') {
                    result = '<p>Twoje dane zostały wysłane!</p>';
                    $(".fields").hide();
                } else {
                    result = msg;
                }
                $('.note').html(result);
            }
        });
        return false;
    });
});