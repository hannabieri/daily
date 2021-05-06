
$(document).mousemove(function (e) {

    var pixelsFromTop = $(document).scrollTop()
    /* var y = e.pageY */
    var y = e.pageY - pixelsFromTop
    var x = e.pageX

    $('.cursor').css({ 'top': y })
    $('.cursor').css({ 'left': x })
    $('.cursor, .burguer-stripe').css('background-color', '#f2f2f2')
})