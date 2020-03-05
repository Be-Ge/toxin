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
// $(document).ready(function(){
//     $('.items__carousel').slick({
//       setting-name: setting-value
//     });
//   });

// $('.item__carousel').slick();

$(this).next('.select-dropdown').find('ul').toggle()

$('.select-dropdown-title').on('click', function() {
    $(this).next('.select-dropdown').find('ul').toggle()
})