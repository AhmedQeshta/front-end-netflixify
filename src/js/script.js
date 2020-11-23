$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').addClass('bg-black-transparent');
        } else {
            $('.navbar').removeClass('bg-black-transparent');
        }
    })
})

$(document).ready(function () {
    $(window).on('load',function () {
        setTimeout(function(){ $('#loadingScrean').addClass('displayNone') }, 1500); // 1.5 sec
    })
})



