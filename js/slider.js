$(function(){
    $('.korea li').click(function(e){
        e.preventDefault()
        $('.btn.korea li a').removeClass('active')
        $(this).find('a').addClass('active')

        $('.tab-content.korea').hide()
        let idx = $(this).index()
        $('.tab-content.korea').eq(idx).show()
    })
    $('.korea').eq(0).trigger('click')

    $('.abroad li').click(function(e){
        e.preventDefault()
        $('.btn.abroad li a').removeClass('active')
        $(this).find('a').addClass('active')

        $('.tab-content.abroad').hide()
        let idx = $(this).index()
        $('.tab-content.abroad').eq(idx).show()
    })
    $('.abroad').eq(0).trigger('click')
})