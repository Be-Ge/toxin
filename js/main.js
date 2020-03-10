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

// dropdown

$(this).next('.select-dropdown').find('ul').toggle()

$('.select-dropdown-title').on('click', function() {
    $(this).next('.select-dropdown').find('ul').toggle()
})
$(this).parents('.input__box').toggleClass('opened')

$("body").on("mouseup touchstart", function(event) {
    if (
        !$('.select-dropdown-title').is(event.target) &&
        $('.select-dropdown > ul').has(event.target).length === 0
    ) {
        $('.select-dropdown > ul').hide().parents('.input__box').removeClass('opened')
    }
});

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

  // number handler
function numberHandler (e) {
    var box = $(this).parents('.input__box')
    var value = +e.currentTarget.value
  
    if (!box.is('.touched') && value > 0) {
       box.addClass('touched');
       box.find('.select-dropdown-button').show()
    }
  }
  
  $('.input__box').on('input', '.js-input', numberHandler)
  $('.input__box').on('click', '.select-dropdown-button > button', function (e) {
      e.preventDefault()
      if ($(this).is('.dropdown-cancel')) {
          var box = $(this).parents('.input__box')
          box.find('.js-input').each(function(index, input) {
              input.value = 0
          });
          box.removeClass('touched');
          box.find('.select-dropdown-button').hide()
      }
  })
  // END: number handler
  
  
  /*@TODO remove*/
  $('.select-dropdown-button').hide()