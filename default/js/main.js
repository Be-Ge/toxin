$("#slider-range").slider({
    range: true,
    min: 0,
    max: 15000,
    step: 50,
    slide: function(event, ui) {
        $("#min-price").html(ui.values[0]);

        console.log(ui.values[0])

        suffix = '';
        if (ui.values[1] == $("#max-price").data('max')) {
            suffix = '+';
        }
        $("#max-price").html(ui.values[1] + suffix);
    }
})

$('.items__carousel').slick({
    dots: true,
    aroows: true

});

$('.items__room-carousel').slick({
    dots: true,
});

$(this).next('.select-dropdown').find('ul').toggle()

$('.select-dropdown-title').on('click', function() {
    $(this).next('.select-dropdown').find('ul').toggle()
})

$(function(){

    $('input[type="number"]').niceNumber();
  
  });
  $('input[type="number"]').niceNumber({

    // auto resize the number input
    autoSize: true,
  
    // the number of extra character
    autoSizeBuffer: 1,
  
    // custom button text
    buttonDecrement: '-',
    buttonIncrement: "+",
  
    buttonPosition: 'around'
    
  });