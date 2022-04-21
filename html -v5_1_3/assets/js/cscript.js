$(document).ready(function(){
    
    window.setInterval(function () {
        $('#date').html(moment().format("D MMMM, YYYY | hh.mm:ss A"))
        }, 1000);
          //match height initialize
          //$('classORid_name').matchHeight();
          
        
        $(function() {
        var header = $(".topmenu-navbar");
      
        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 50) {
                header.addClass("d-none");
            } else {
                header.removeClass("d-none");
            }
        });
        
        // Increase/descrease font size
        $('#increasetext').click(function () {  
            modifyFontSize('increase');  
        });  

        $('#decreasetext').click(function () {  
            modifyFontSize('decrease');  
        });  

        $('#resettext').click(function () {  
            modifyFontSize('reset');  
            $("#liveToast").toast("show");
        })  

        function modifyFontSize(flag) {  
            var divElement = $('#content');  
            var currentFontSize = parseInt(divElement.css('font-size'));  

            if (flag == 'increase')  
                currentFontSize += 2;  
            else if (flag == 'decrease')  
                currentFontSize -= 2;  
            else  
                currentFontSize = 14;  

            divElement.css('font-size', currentFontSize);  
        }  
        //Storage
        if (typeof(Storage) !== "undefined"){
        if(typeof(currentFontSize) !== "undefined"){
            localStorage.modifyFontSize = currentFontSize;
        }
        }else {
            console.log('Sorry, your browser does not support Web Storage...');
        
        }
        // $('#increasetext').click(function() {
        //     curSize = parseInt($('html').css('font-size')) + 2;
        //     if (curSize <= 32)
        //         $('html').css('font-size', curSize);
        // });
    
        // $('#resettext').click(function() {
        //     if (curSize != 13)
        //         $('html').css('font-size', 13);
        // $("#liveToast").toast("show");
        // });
    
        // $('#decreasetext').click(function() {
        //     curSize = parseInt($('html').css('font-size')) - 2;
        //     if (curSize >= 10)
        //         $('html').css('font-size', curSize);
        // });
     
      // Check browser support
      //localStorage.setItem("Upadhyay", "Purnima");
    });

    // Logo small
    $(document).scroll(function() {
        $('.logonav').css({width: $(this).scrollTop() > 100? "50%":"100%"});
    });
    
    // Swiper JS
    var swiper = new Swiper(".featured-swiper", {
        slidesPerView: 5,
        spaceBetween: 30,
        slidesPerGroup: 4,
        calculateHeight:true,
        // loop: true,
        // loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            300: {
              slidesPerView: 1,
              spaceBetween: 30,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
              slidesPerGroup: 3,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              slidesPerGroup: 4,
            },
          },
          onSlideChangeStart: function(){
            $('.swiper-slide').height( $(swiper.activeSlide()).height() )
          }
      });

//Subject Slider
      var swiper1 = new Swiper(".subject-slider", {
        slidesPerView: 6,
        spaceBetween: 2,
        slidesPerGroup: 1,
        calculateHeight:true,
        loop: true,
        loopFillGroupWithBlank: true,
        breakpoints: {
            300: {
              slidesPerView: 1,
              spaceBetween: 30,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
              slidesPerGroup: 3,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              slidesPerGroup: 4,
            },
            1100: {
                slidesPerView: 6,
                spaceBetween: 5,
              slidesPerGroup: 1,
            },
          },
         
      });
    
    //ready ends below
});