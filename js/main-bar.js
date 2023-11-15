$(function(){

    $('.gotop').click(function(e){
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop : 0
        }, 1000)
    })

    //main bar select number counting
    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function(){
        var spinner = jQuery(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');
        
        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
      var newVal = oldValue;
    } else {
        var newVal = oldValue + 1;
    }
    spinner.find("input").val(newVal);
    spinner.find("input").trigger("change");
        });
    })
    //main bar select number counting


    // nav hambuger modal
    const btn = document.getElementById('popupBtn');
    const modal = document.getElementById('modalWrap');
    const closeBtn = document.getElementById('closeBtn');
    
    btn.onclick = function() {
      modal.style.display = 'block';
    }
    closeBtn.onclick = function() {
      modal.style.display = 'none';
    }
        
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    // nav hambuger modal

    // 1st box cilck animate
    $('main .main-bar').click (function(){
        $('main .main-bar').css({
            'display' : 'none'
        }),
        $('main .main-bar-tab').css({
            'display' : 'block'
        }),
        $('main .main-bar a').hide()
        $('main .main-bar-tab').animate({
            'height': '436px',
            'border': '4px solid rgba(0, 0, 0, 0.04)',
        }, 500)
        $('main .main-bg .main-bar-tab > .bar-inner, main .main-bar-tab .bar-inner2').delay(600).animate({'opacity':'1'})
        
        $('main .main-bar-tab .bar-inner a').click (function(){
            $('main .main-bar-tab').hide()
            $('main .main-bar-where').show()
            $('main .main-bar-where > .bar-inner,main .main-bar-where > .bar-inner2').animate({'opacity':'1'})
            
        })  
    })
    $('main .main-bar-where button').click (function(){
        $('main .main-bar-where').css({
            'display' : 'none'
        })
        $('main .main-bar-tab').show()
        
    })
    // 1st box cilck animate


    // media tab menu
    
    $('main .media .mid .tabmenu-inner li').click (function(e){
        e.preventDefault()
        $('main .media .mid .tabmenu-inner li a').removeClass('active')
        $(this).find('a').addClass('active')

        $('main .media .bottom #hide').hide()
        let idx = $(this).index()
        $('main .media .bottom #hide').eq(idx).show()
    })
    $('main .media .mid .tabmenu-inner li').eq(0).trigger('click')






    // $('main .community .bottom > div').click(function(){
    //     $(this).css('width' : '500px')
    // })

    // ai
    // $setTimeout(function(){
    //     $('main .main-bar-tab .bar-inner2').css({
    //         'opacity' : '1',
    //     });
    // }, 500)

});

