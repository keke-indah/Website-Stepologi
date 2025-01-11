//filter Js
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".post-box").show('1000');
        }
        else {
            $(".post-box")
                .not('.' + value)
                .hide('1000');
            $(".post-box")
                .filter('.' + value)
                .show('1000');

        }
    });
    //tambahkan aktif ke btn
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

//perubahan latar belakang header saat menggulir
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

//pencarian
$(document).ready(function () {
    $('#search-button').click(function () {
        var query = $('#search-input').val().toLowerCase();
        $('.post-box').each(function () {
            var title = $(this).find('.post-title').text().toLowerCase();
            if (title.includes(query)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});