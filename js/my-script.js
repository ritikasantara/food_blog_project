

$(document).ready(function () {



// search box hover effect

    $('input').on({
     
        mouseenter: function(){
            
           $(this).css('border','1px solid #fff');

        },

        mouseleave: function(){
            
           $(this).css('border','1px solid #fbfaa5');

        }

    });

    $(document).on("scroll", onScroll);
    
    //smoothscroll effect
    
    $('a[href^="#"]').on('click', function (e) {

        e.preventDefault();

        $(document).off("scroll");
        
        $('a').each(function () {

            $(this).removeClass('active');

        })

        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;

        $target = $(target);

        $('html, body').stop().animate({

            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {

            window.location.hash = target;

            $(document).on("scroll", onScroll);

        });
    });

 
});


function onScroll(event){

    var scrollPos = $(document).scrollTop();

    $('nav ul li a').each(function () {

        var currLink = $(this);

        var refElement = $(currLink.attr("href"));

        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {

            $('nav ul li a').removeClass("active");

            currLink.addClass("active");

        //search box border color changing effect on scroll

        if (currLink.hasClass("maincourse_btn")) {

                $('#search_input').css('border','1px solid #edc563');

        }

        else if (currLink.hasClass("snacks_btn")) {

                $('#search_input').css('border','1px solid #f07165');

        }

        else if (currLink.hasClass("starter_btn")) {

            $('#search_input').css('border','1px solid #f0a439');

        }

        else if (currLink.hasClass("desserts_btn")) {

            $('#search_input').css('border','1px solid #d63270');

        }
        
        else if (currLink.hasClass("beverages_btn")) {

            $('#search_input').css('border','1px solid #7ae5af');

        }

        else if (currLink.hasClass("popular_btn")) {

            $('#search_input').css('border','1px solid #ba81ef');

        }
        
        else{

            $('#search_input').css('border','1px solid #fbfaa5');

        }
        
    }
    else{

        currLink.removeClass("active");

    }

        
    });
}







