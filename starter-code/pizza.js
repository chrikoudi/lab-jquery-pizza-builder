// Write your Pizza Builder JavaScript in this file.

var addRemoveTopping = function(buttonClass, toppingClass, className, onOff, child) {

    $(buttonClass).on("click", function() {
      $(toppingClass).toggleClass(className);
      if (onOff === true) {
        $(buttonClass).removeClass('active');
        $('.price li:nth-child('+child+')').toggleClass('hide');
      } else {
        $(buttonClass).addClass('active');
        $('.price li:nth-child('+child+')').toggleClass('hide');
      }
      onOff = !onOff;
      checkPrice();
    });

};


var checkPrice = function(){
   var price=10;
   $( ".price li" ).each(function() {
     if(!$(this).hasClass('hide')){
       price+=$(this).data('price');
     }
   });
   $('.price strong').html('$'+ price);
 };

addRemoveTopping('.btn-pepperonni', '.pep', 'hide', true, 1);
addRemoveTopping('.btn-mushrooms', '.mushroom', 'hide', true, 2);
addRemoveTopping('.btn-green-peppers', '.green-pepper', 'hide', true, 3);

$('.crust').removeClass('crust-gluten-free');
$('.sauce').removeClass('sauce-white');
$('.btn-crust').removeClass('active');
$('.btn-sauce').removeClass('active');

$('.price li:nth-child('+4+')').toggleClass('hide');
$('.price li:nth-child('+5+')').toggleClass('hide');
addRemoveTopping('.btn-sauce', '.sauce', 'sauce-white', false, 4);
addRemoveTopping('.btn-crust', '.crust', 'crust-gluten-free', false, 5);

checkPrice();
