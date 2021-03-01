$(document).ready(function(){
    $("#searchInput").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#lessonList .col-12").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $(".menuBurger").click(function(){
        $(".menuMobile").toggle("slow");
    });

    // $( ".containerImgOpacity" ).click(function() {
    //     alert($(".linkUrl").attr('href'));
    // });
    $('.containerImgOpacity').on('click', function (event) {
        document.location = $(this).find("a").attr("href");
    });


});
