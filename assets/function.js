$(document).ready(function() {
  ClipPath('.col-clip', '0 0, 100% 0%, 100% 59%, 0% 100%');
});
$(document).ready(function() {
ClipPath('.col-clip2', '0 59%, 100% 0%, 100% 100%, 0% 100%');
});
$(document).ready(function() {
ClipPath('.col-clip3', '0 59%, 100% 0%, 100% 100%, 0% 100%');
});

$(document).ready(function() {
  $(".slide-In").css("opacity","0");
});

$(window).scroll(function () {
    var $this = $(this),
        $top = $('html');
    if ($this.scrollTop() > 700) {
       $head.addClass('slide-In');
    } else {
       $head.removeClass('slide-In');
    }
});
