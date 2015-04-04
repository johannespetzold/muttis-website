function smooth_nav() {
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target;
        var target_offset;
        if (target == '') {
            $target = $('body');
            target_offset = 0;
        } else {
            $target = $(target);
            target_offset = $target.offset().top;
        }

        $('html, body').stop().animate({
            'scrollTop': target_offset
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
};

$(document).ready(smooth_nav);
