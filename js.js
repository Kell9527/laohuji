var gogo;
var s= true;
var slotOne;
var slotTwo;
var slotThree;
var images = ["//i.imgur.com/9H17QFk.png", "//i.imgur.com/9RmpXTy.png", "//i.imgur.com/VJnmtt5.png"];
$(document).ready(function() {
    $('.go').click(function() {
        if (s==true){
             gogo=setInterval("myanimate()",100);
            $(".go").html("stop");
            s=false;
            $('.logger').html("");
        }else{
            clearInterval(gogo);
            $(".go").html("go");
            s= true;
            if (slotOne === slotTwo && slotTwo === slotThree) {
                $('.logger').html("It's A Win");
                $($('.slot')[0]).html('<img src = "' + images[slotOne-1] + '">')
                $($('.slot')[1]).html('<img src = "' + images[slotTwo-1] + '">')
                $($('.slot')[2]).html('<img src = "' + images[slotThree-1] + '">')
                return null
            }
            if (slotOne !== undefined && slotTwo !== undefined && slotThree !== undefined){

                $($('.slot')[0]).html('<img src = "' + images[slotOne-1] + '">')
                $($('.slot')[1]).html('<img src = "' + images[slotTwo-1] + '">')
                $($('.slot')[2]).html('<img src = "' + images[slotThree-1] + '">')
                $('.logger').html(" Not A Win");
            }
        }
    });
});
    function myanimate(){
    slotOne = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    slotTwo = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    slotThree = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    $($('.slot')[0]).html('<img src = "' + images[slotOne-1] + '">');
    $($('.slot')[1]).html('<img src = "' + images[slotTwo-1] + '">');
    $($('.slot')[2]).html('<img src = "' + images[slotThree-1] + '">');
    }
