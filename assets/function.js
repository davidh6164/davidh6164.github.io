

$(document).ready(function() {
  ClipPath('.col-clip', '0 0, 100% 0%, 100% 59%, 0% 100%');
});
$(document).ready(function() {
ClipPath('.col-clip2', '0 59%, 100% 0%, 100% 100%, 0% 100%');
});
$(document).ready(function() {
ClipPath('.col-clip3', '0 59%, 100% 0%, 100% 100%, 0% 100%');
});

$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 200) {
      $(".animation-element").addClass("slide-In-Left");
    } else {
      $(".animation-element").removeClass("slide-In-Left");
    }
  });
});

$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 1200) {
      $(".animation-element2").addClass("slide-In-Left");
    } else {
      $(".animation-element2").removeClass("slide-In-Left");
    }
  });
});
